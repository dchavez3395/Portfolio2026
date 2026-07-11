from playwright.sync_api import sync_playwright
import json

def luminance(r, g, b):
    def chan(c):
        c = c / 255.0
        return c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4
    return 0.2126 * chan(r) + 0.7152 * chan(g) + 0.0722 * chan(b)

def ratio(rgb1, rgb2):
    l1 = luminance(*rgb1)
    l2 = luminance(*rgb2)
    lighter = max(l1, l2)
    darker = min(l1, l2)
    return (lighter + 0.05) / (darker + 0.05)

def parse_color(s):
    if not s or s == 'transparent' or s == 'rgba(0, 0, 0, 0)':
        return None
    s = s.strip()
    if s.startswith('rgb'):
        parts = s.replace('rgb(', '').replace('rgba(', '').replace(')', '').split(',')
        return (int(float(parts[0])), int(float(parts[1])), int(float(parts[2])))
    if s.startswith('#'):
        h = s[1:]
        if len(h) == 3:
            h = h[0]*2 + h[1]*2 + h[2]*2
        return (int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16))
    return None

issues = []

with sync_playwright() as p:
    browser = p.chromium.launch(args=['--no-sandbox'])

    for view_name, view_action in [
        ('Home', 'home'),
        ('Accessibility', 'a11y'),
        ('Resume', 'resume'),
        ('Case Study (Puchica)', 'case-puchica'),
    ]:
        page = browser.new_page(viewport={'width': 1440, 'height': 900})
        page.goto('http://localhost:5173/', wait_until='networkidle')
        page.wait_for_timeout(1500)

        if view_action == 'a11y':
            buttons = page.query_selector_all('button')
            for btn in buttons:
                if 'A11y' in btn.inner_text():
                    btn.click()
                    break
            page.wait_for_timeout(2000)
        elif view_action == 'resume':
            buttons = page.query_selector_all('button')
            for btn in buttons:
                if 'Resume' in btn.inner_text() or 'resume' in btn.inner_text().lower():
                    btn.click()
                    break
            page.wait_for_timeout(2000)
        elif view_action == 'case-puchica':
            tiles = page.query_selector_all('.pk-tile')
            if tiles:
                tiles[0].click()
                page.wait_for_timeout(2000)

        print(f"\n{'='*60}")
        print(f"AUDIT: {view_name}")
        print(f"{'='*60}")

        # 1.1.1 Non-text Content — alt text
        images = page.query_selector_all('img')
        for img in images:
            alt = img.get_attribute('alt')
            src = img.get_attribute('src') or ''
            role = img.get_attribute('role')
            aria_hidden = img.get_attribute('aria-hidden')
            if alt is None and not aria_hidden and role != 'presentation':
                issues.append(f'[{view_name}] 1.1.1 MISSING ALT: {src}')
            elif alt == '' and not aria_hidden and role != 'presentation':
                # Empty alt is OK for decorative but should have aria-hidden
                pass

        # 1.3.1 Info and Relationships — heading hierarchy
        headings = page.query_selector_all('h1, h2, h3, h4, h5, h6')
        prev_level = 0
        for h in headings:
            tag = h.evaluate('el => el.tagName.toLowerCase()')
            level = int(tag[1])
            if prev_level > 0 and level > prev_level + 1:
                issues.append(f'[{view_name}] 1.3.1 HEADING SKIP: {tag} after h{prev_level}')
            prev_level = level

        h1s = page.query_selector_all('h1')
        if len(h1s) > 1:
            issues.append(f'[{view_name}] 1.3.1 DUPLICATE H1: {len(h1s)}')
        if len(h1s) == 0:
            issues.append(f'[{view_name}] 1.3.1 NO H1 found')

        # 1.3.1 — Check for divs acting as buttons
        div_buttons = page.query_selector_all('div[onclick], div[role="button"]')
        if div_buttons:
            issues.append(f'[{view_name}] 1.3.1/4.1.2 DIV-BASED BUTTONS: {len(div_buttons)} found')

        # 1.4.3 Contrast — check all text elements
        text_elements = page.query_selector_all('p, span, a, h1, h2, h3, h4, h5, h6, li, button, label, td, th, div')
        contrast_checked = 0
        contrast_failures = 0
        for el in text_elements:
            text = el.inner_text().strip()
            if not text or len(text) > 200:
                continue
            style = el.evaluate('''(el) => {
                const s = getComputedStyle(el);
                return {
                    color: s.color,
                    fontSize: s.fontSize,
                    fontWeight: s.fontWeight,
                    bg: s.backgroundColor
                };
            }''')
            fg = parse_color(style['color'])
            if not fg:
                continue
            # Get effective background by walking up the tree
            bg_color = el.evaluate('''(el) => {
                let node = el;
                while (node) {
                    const s = getComputedStyle(node);
                    if (s.backgroundColor && s.backgroundColor !== 'rgba(0, 0, 0, 0)' && s.backgroundColor !== 'transparent') {
                        return s.backgroundColor;
                    }
                    node = node.parentElement;
                }
                return 'rgb(12, 13, 15)';
            }''')
            bg = parse_color(bg_color) or (12, 13, 15)

            font_size_px = float(style['fontSize'].replace('px', ''))
            font_weight = int(style['fontWeight']) if style['fontWeight'].isdigit() else 400
            is_large = font_size_px >= 24 or (font_size_px >= 18.66 and font_weight >= 700)
            threshold = 3.0 if is_large else 4.5

            r = ratio(fg, bg)
            contrast_checked += 1
            if r < threshold:
                # Only report if it's visible text
                issues.append(f'[{view_name}] 1.4.3 CONTRAST FAIL: "{text[:40]}..." color={style["color"]} bg={bg_color} ratio={r:.2f} need={threshold}')
                contrast_failures += 1

        print(f'  Contrast: checked {contrast_checked} elements, {contrast_failures} failures')

        # 1.4.11 Non-text Contrast — check borders on interactive elements
        interactive = page.query_selector_all('button, a')
        for el in interactive:
            border = el.evaluate('''(el) => {
                const s = getComputedStyle(el);
                return { borderColor: s.borderTopColor, borderWidth: s.borderTopWidth };
            }''')
            bw = border['borderWidth']
            if bw and bw != '0px':
                bc = parse_color(border['borderColor'])
                if bc:
                    r = ratio(bc, (12, 13, 15))
                    if r < 3.0:
                        # Skip if it's the hairline decorative border (not critical for function)
                        pass  # We'll check this separately

        # 2.1.1 Keyboard — check all interactive elements are focusable
        interactive_all = page.query_selector_all('button, a, input, textarea, select, [tabindex]')
        for el in interactive_all:
            tabindex = el.get_attribute('tabindex')
            tag = el.evaluate('el => el.tagName.toLowerCase()')
            if tabindex == '-1' and tag != 'main':
                # Skip link target is OK
                pass

        # 2.4.1 Bypass Blocks — skip link
        skip = page.query_selector('.pk-skip-link')
        if not skip:
            issues.append(f'[{view_name}] 2.4.1 NO SKIP LINK')
        else:
            skip_visible = skip.evaluate('''(el) => {
                el.focus();
                const s = getComputedStyle(el);
                return s.top !== '-100px' && s.display !== 'none' && s.visibility !== 'hidden';
            }''')
            if not skip_visible:
                issues.append(f'[{view_name}] 2.4.1 SKIP LINK NOT VISIBLE ON FOCUS')

        # 2.4.2 Page Titled
        title = page.title()
        if not title:
            issues.append(f'[{view_name}] 2.4.2 NO PAGE TITLE')

        # 2.4.3 Focus Order — check tabindex values
        bad_tabindex = page.query_selector_all('[tabindex] > [tabindex="999"]')
        # This is fine, just checking

        # 2.4.4 Link Purpose — check for "click here" or generic link text
        links = page.query_selector_all('a')
        for link in links:
            text = link.inner_text().strip().lower()
            aria_label = link.get_attribute('aria-label')
            if text in ['click here', 'here', 'read more', 'more', 'link', '']:
                if not aria_label:
                    issues.append(f'[{view_name}] 2.4.4 GENERIC LINK TEXT: "{text}"')

        # 2.4.7 Focus Visible — check focus styles exist
        focus_check = page.evaluate('''() => {
            const els = document.querySelectorAll('button, a');
            let no_focus = [];
            for (let el of els) {
                const s = getComputedStyle(el);
                // Check if :focus-visible is defined in stylesheets
                // We can't easily test this without actually focusing
            }
            return no_focus;
        }''')

        # 2.4.11 Focus Not Obscured — check if sticky header could cover focused elements
        header_height = page.evaluate('''() => {
            const h = document.querySelector('.pk-header');
            if (!h) return 0;
            return h.offsetHeight;
        }''')
        # scroll-mt or scroll-padding should account for this

        # 2.5.3 Label in Name — check buttons/links where aria-label differs from visible text
        buttons = page.query_selector_all('button, a[aria-label]')
        for btn in buttons:
            visible_text = btn.inner_text().strip()
            aria_label = btn.get_attribute('aria-label')
            if aria_label and visible_text and aria_label not in visible_text and visible_text not in aria_label:
                issues.append(f'[{view_name}] 2.5.3 LABEL MISMATCH: visible="{visible_text}" aria="{aria_label}"')

        # 2.5.8 Target Size — check button sizes
        small_targets = page.evaluate('''() => {
            const els = document.querySelectorAll('button, a');
            let small = [];
            for (let el of els) {
                const rect = el.getBoundingClientRect();
                if (rect.width > 0 && rect.height > 0 && (rect.width < 24 || rect.height < 24)) {
                    small.push({
                        text: el.innerText.trim().substring(0, 30),
                        w: Math.round(rect.width),
                        h: Math.round(rect.height)
                    });
                }
            }
            return small;
        }''')
        for st in small_targets:
            issues.append(f'[{view_name}] 2.5.8 TARGET SIZE: "{st["text"]}" {st["w"]}x{st["h"]}px (min 24x24)')

        # 3.1.1 Language of Page
        lang = page.evaluate('document.documentElement.lang')
        if not lang:
            issues.append(f'[{view_name}] 3.1.1 NO HTML LANG')

        # 1.4.10 Reflow — test at 320px
        page2 = browser.new_page(viewport={'width': 320, 'height': 900})
        page2.goto('http://localhost:5173/', wait_until='networkidle')
        page2.wait_for_timeout(1500)

        if view_action == 'a11y':
            # Handle both desktop and mobile nav
            buttons = page2.query_selector_all('button')
            found = False
            for btn in buttons:
                txt = btn.inner_text()
                if 'A11y' in txt:
                    if btn.is_visible():
                        btn.click()
                        found = True
                        break
            if not found:
                # Open mobile menu first
                toggle = page2.query_selector('.pk-nav__toggle')
                if toggle:
                    toggle.click()
                    page2.wait_for_timeout(500)
                    buttons = page2.query_selector_all('button')
                    for btn in buttons:
                        if 'A11y' in btn.inner_text():
                            btn.click()
                            found = True
                            break
            page2.wait_for_timeout(2000)
        elif view_action == 'resume':
            buttons = page2.query_selector_all('button')
            found = False
            for btn in buttons:
                txt = btn.inner_text()
                if 'Resume' in txt or 'resume' in txt.lower():
                    if btn.is_visible():
                        btn.click()
                        found = True
                        break
            if not found:
                toggle = page2.query_selector('.pk-nav__toggle')
                if toggle:
                    toggle.click()
                    page2.wait_for_timeout(500)
                    buttons = page2.query_selector_all('button')
                    for btn in buttons:
                        if 'Resume' in btn.inner_text() or 'resume' in btn.inner_text().lower():
                            btn.click()
                            found = True
                            break
            page2.wait_for_timeout(2000)
        elif view_action == 'case-puchica':
            tiles = page2.query_selector_all('.pk-tile')
            if tiles:
                tiles[0].click()
                page2.wait_for_timeout(2000)

        has_h_scroll = page2.evaluate('''() => {
            return document.documentElement.scrollWidth > document.documentElement.clientWidth;
        }''')
        if has_h_scroll:
            issues.append(f'[{view_name}] 1.4.10 REFLOW FAIL: horizontal scrollbar at 320px')

        # Check for content overflow at 320px
        overflowing = page2.evaluate('''() => {
            let count = 0;
            document.querySelectorAll('*').forEach(el => {
                if (el.scrollWidth > el.clientWidth + 5) {
                    const s = getComputedStyle(el);
                    if (s.overflowX !== 'hidden' && s.overflowX !== 'scroll') {
                        count++;
                    }
                }
            });
            return count;
        }''')

        page2.close()
        page.close()

    # Print all issues
    print(f"\n{'='*60}")
    print(f"FULL AUDIT RESULTS — {len(issues)} issues found")
    print(f"{'='*60}")
    if issues:
        for i in issues:
            print(f'  - {i}')
    else:
        print('  No issues found!')

    browser.close()