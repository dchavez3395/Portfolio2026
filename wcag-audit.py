from playwright.sync_api import sync_playwright
import sys

with sync_playwright() as p:
    browser = p.chromium.launch(args=['--no-sandbox'])
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    page.goto('http://localhost:5173/', wait_until='networkidle')
    page.wait_for_timeout(2000)

    issues = []

    # 1. Missing alt texts
    images = page.query_selector_all('img')
    for img in images:
        alt = img.get_attribute('alt')
        src = img.get_attribute('src') or ''
        if alt is None:
            issues.append(f'MISSING ALT: {src}')
        elif alt == '' and not img.get_attribute('aria-hidden'):
            issues.append(f'EMPTY ALT without aria-hidden: {src}')

    # 2. Buttons without accessible names
    buttons = page.query_selector_all('button')
    for btn in buttons:
        text = btn.inner_text().strip()
        aria_label = btn.get_attribute('aria-label')
        if not text and not aria_label:
            issues.append('BUTTON WITHOUT ACCESSIBLE NAME')

    # 3. Links without accessible names
    links = page.query_selector_all('a')
    for link in links:
        text = link.inner_text().strip()
        aria_label = link.get_attribute('aria-label')
        if not text and not aria_label:
            href = link.get_attribute('href') or ''
            issues.append(f'LINK WITHOUT ACCESSIBLE NAME: {href}')

    # 4. Heading hierarchy
    headings = page.query_selector_all('h1, h2, h3, h4, h5, h6')
    prev_level = 0
    for h in headings:
        tag = h.evaluate('el => el.tagName.toLowerCase()')
        level = int(tag[1])
        if prev_level > 0 and level > prev_level + 1:
            issues.append(f'HEADING SKIP: {tag} after h{prev_level}')
        prev_level = level

    # 5. Duplicate h1s
    h1s = page.query_selector_all('h1')
    if len(h1s) > 1:
        issues.append(f'DUPLICATE H1: found {len(h1s)}')

    # 6. Landmarks
    landmarks = page.query_selector_all('header, nav, main, footer, section, article, aside')
    print(f'Landmarks found: {len(landmarks)}')

    # 7. Skip link
    skip = page.query_selector('a[href="#main-content"], a[href="#top"]')
    if not skip:
        issues.append('NO SKIP LINK FOUND')

    # 8. Focus visibility
    focus_style = page.evaluate('''() => {
        const el = document.querySelector('button');
        if (!el) return null;
        el.focus();
        const s = getComputedStyle(el);
        return { outline: s.outline, outlineOffset: s.outlineOffset };
    }''')
    if focus_style and (not focus_style['outline'] or focus_style['outline'] == 'none'):
        issues.append(f'FOCUS NOT VISIBLE: outline={focus_style.get("outline")}')

    # 9. Inputs without labels
    inputs = page.query_selector_all('input, textarea, select')
    for inp in inputs:
        iid = inp.get_attribute('id')
        label = inp.get_attribute('aria-label')
        associated = page.query_selector('label[for="' + (iid or '') + '"]') if iid else None
        if not label and not associated:
            issues.append('INPUT WITHOUT LABEL')

    # 10. aria-hidden on interactive elements
    interactive = page.query_selector_all('button, a, input')
    for el in interactive:
        if el.get_attribute('aria-hidden') == 'true':
            issues.append('INTERACTIVE ELEMENT WITH aria-hidden=true')

    print(f'\n=== Accessibility Audit (Home) ===')
    print(f'Images: {len(images)}, Buttons: {len(buttons)}, Links: {len(links)}, Headings: {len(headings)}')
    if issues:
        print(f'\nISSUES ({len(issues)}):')
        for i in issues:
            print(f'  - {i}')
    else:
        print('\nNo issues found!')

    # Also check resume view
    page.goto('http://localhost:5173/', wait_until='networkidle')
    page.wait_for_timeout(1000)
    resume_issues = []
    buttons2 = page.query_selector_all('button')
    for btn in buttons2:
        if 'Resume' in btn.inner_text() or 'resume' in btn.inner_text().lower():
            btn.click()
            break
    page.wait_for_timeout(1500)

    h1s2 = page.query_selector_all('h1')
    if len(h1s2) > 1:
        resume_issues.append(f'DUPLICATE H1 on resume: {len(h1s2)}')

    images2 = page.query_selector_all('img')
    for img in images2:
        alt = img.get_attribute('alt')
        if alt is None:
            resume_issues.append(f'MISSING ALT on resume: {img.get_attribute("src")}')

    print(f'\n=== Resume View ===')
    print(f'H1s: {len(h1s2)}, Images: {len(images2)}')
    if resume_issues:
        for i in resume_issues:
            print(f'  - {i}')
    else:
        print('No issues!')

    # Check case study view
    page.goto('http://localhost:5173/', wait_until='networkidle')
    page.wait_for_timeout(1000)
    tiles = page.query_selector_all('.pk-tile')
    case_issues = []
    if tiles:
        tiles[0].click()
        page.wait_for_timeout(2000)
        h1s3 = page.query_selector_all('h1')
        if len(h1s3) > 1:
            case_issues.append(f'DUPLICATE H1 on case: {len(h1s3)}')

        # Check case study image alt
        case_imgs = page.query_selector_all('.pk-case__image-frame img')
        for img in case_imgs:
            alt = img.get_attribute('alt')
            if not alt:
                case_issues.append('CASE IMAGE MISSING ALT')

    print(f'\n=== Case Study View ===')
    if case_issues:
        for i in case_issues:
            print(f'  - {i}')
    else:
        print('No issues!')

    browser.close()
    print('\n=== Done ===')