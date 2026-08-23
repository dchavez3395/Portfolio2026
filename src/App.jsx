import { useEffect, useState } from "react";
import {
  Link,
  Routes,
  Route,
  Navigate,
  useLocation,
  useParams,
} from "react-router-dom";
import {
  projects,
  caseStudies,
  pathItems,
  credentials,
  principles,
  commercialHighlights,
  serviceOffers,
  skillGroups,
  a11yPoints,
  a11yPrinciples,
  a11yStandards,
  a11yPhases,
  EMAIL,
  EMAIL_HREF,
  RESUME_HREF,
  LINKEDIN_HREF,
  GITHUB_HREF,
} from "./portfolio-data.js";

// ============================================================
// HEADER
// ============================================================
function Header({ mobileOpen, setMobileOpen }) {
  const { pathname, hash } = useLocation();

  // Every destination is a real URL behind a real anchor. This is not a style
  // preference: a <button> cannot be opened in a new tab, copied, bookmarked,
  // shared into an application, or followed by a crawler, and screen readers
  // announce it as a button rather than a link.
  const navLink = (label, to) => {
    const route = normalizePath(pathname);
    const isCurrent =
      to.startsWith("/#") ? route === "/" && hash === to.slice(1) : route === to;
    return (
      <Link
        className="pk-nav__link"
        to={to}
        aria-current={isCurrent ? "page" : undefined}
        onClick={() => setMobileOpen(false)}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="pk-header">
      <div className="pk-header__inner">
        <Link className="pk-logo" to="/" onClick={() => setMobileOpen(false)}>
          <span className="pk-logo__square" aria-hidden="true"></span>
          Daniel Chavez
        </Link>
        <nav aria-label="Primary" className={`pk-nav ${mobileOpen ? "pk-nav--open" : ""}`}>
          {navLink("Solutions", "/#services")}
          {navLink("Work", "/#work")}
          {navLink("Résumé", "/resume")}
          {navLink("A11y", "/accessibility")}
          <a className="pk-nav__email" href={EMAIL_HREF}>
            Email ↗
          </a>
        </nav>
        <button
          className="pk-nav__toggle"
          aria-label={mobileOpen ? "Close menu" : "Menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span aria-hidden="true">{mobileOpen ? "✕" : "☰"}</span>
        </button>
      </div>
    </header>
  );
}

// ============================================================
// FOOTER
// ============================================================
function Footer() {
  return (
    <footer className="pk-footer">
      <div className="pk-footer__inner">
        <span>Daniel Chavez — danieldev.ca</span>
        <span>© 2026 · Winnipeg, MB</span>
      </div>
    </footer>
  );
}

// ============================================================
// HOME VIEW
// ============================================================
function HomeView() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const [marqueePaused, setMarqueePaused] = useState(false);

  return (
    <div>
      {/* HERO */}
      <section className="pk-hero">
        <div className="pk-hero__meta">
          <span className="pk-hero__status">
            <span className="pk-hero__dot" aria-hidden="true"></span>
            Open to work — full-time &amp; freelance
          </span>
          <span>Winnipeg · Remote · EN / ES</span>
        </div>

        <h1 className="pk-hero__h1">
          Technical solutions
          <br />
          that move
          <br />
          <span className="pk-hero__h1-accent">customers forward.</span>
        </h1>

        <div className="pk-hero__bottom">
          <p className="pk-hero__intro">
            I combine production web development with sales, automotive finance,
            CRM, and client delivery. I help teams understand customer problems,
            shape the right solution, and carry it through implementation.
          </p>
          <div className="pk-hero__ctas">
            <Link className="pk-btn-solid" to="/#services">
              Explore my fit ↓
            </Link>
            <a className="pk-btn-ghost" href={EMAIL_HREF}>
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* STACK MARQUEE */}
      <section className="pk-marquee" aria-label="Tech stack">
        <button
          className="pk-marquee__toggle"
          aria-label={marqueePaused ? "Play scrolling tech stack" : "Pause scrolling tech stack"}
          aria-pressed={marqueePaused}
          onClick={() => setMarqueePaused(!marqueePaused)}
        >
          <span aria-hidden="true">{marqueePaused ? "▶" : "❚❚"}</span>
        </button>
        <div
          className={`pk-marquee__track ${marqueePaused ? "pk-marquee__track--paused" : ""}`}
          aria-hidden="true"
        >
          <span>
            &nbsp;&nbsp;Customer discovery&nbsp;&nbsp;/&nbsp;&nbsp;Client walkthroughs&nbsp;&nbsp;/&nbsp;&nbsp;CRM&nbsp;&nbsp;/&nbsp;&nbsp;Pipeline ownership&nbsp;&nbsp;/&nbsp;&nbsp;Solution design&nbsp;&nbsp;/&nbsp;&nbsp;APIs&nbsp;&nbsp;/&nbsp;&nbsp;React&nbsp;&nbsp;/&nbsp;&nbsp;CMS&nbsp;&nbsp;/&nbsp;&nbsp;Accessibility&nbsp;&nbsp;/&nbsp;&nbsp;Finance&nbsp;&nbsp;/&nbsp;&nbsp;English + Spanish&nbsp;&nbsp;/&nbsp;&nbsp;
          </span>
          <span>
            &nbsp;&nbsp;Customer discovery&nbsp;&nbsp;/&nbsp;&nbsp;Client walkthroughs&nbsp;&nbsp;/&nbsp;&nbsp;CRM&nbsp;&nbsp;/&nbsp;&nbsp;Pipeline ownership&nbsp;&nbsp;/&nbsp;&nbsp;Solution design&nbsp;&nbsp;/&nbsp;&nbsp;APIs&nbsp;&nbsp;/&nbsp;&nbsp;React&nbsp;&nbsp;/&nbsp;&nbsp;CMS&nbsp;&nbsp;/&nbsp;&nbsp;Accessibility&nbsp;&nbsp;/&nbsp;&nbsp;Finance&nbsp;&nbsp;/&nbsp;&nbsp;English + Spanish&nbsp;&nbsp;/&nbsp;&nbsp;
          </span>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="pk-section--tight" style={{ paddingTop: "clamp(48px, 7vh, 80px)", paddingBottom: "clamp(48px, 7vh, 80px)" }}>
        <div className="pk-label-row">
          <span className="pk-label-row__primary">About</span>
        </div>
        <div className="pk-about-grid" style={{ marginTop: "clamp(24px, 4vh, 40px)" }}>
          <h2 className="pk-about__h2">
            Developer, client partner, and finance-trained problem solver.
          </h2>
          <div>
            <p style={{ fontSize: "clamp(17px, 1.6vw, 21px)", lineHeight: 1.6, color: "var(--body)", margin: "0 0 28px", maxWidth: "52ch" }}>
              I combine 4+ years of production web experience with earlier
              finance, sales, CRM, and customer-relationship ownership. That
              makes me useful in the space between a customer&apos;s business
              problem, the solution they can believe in, and the technical work
              needed to deliver it.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              <div style={{ padding: "18px 0", borderTop: "1px solid var(--hair)" }}>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "17px", fontWeight: 600, margin: "0 0 6px", letterSpacing: "-0.01em" }}>
                  Bilingual client communication
                </h3>
                <p style={{ fontSize: "15px", lineHeight: 1.55, color: "var(--body)", margin: "0" }}>
                  English is my primary day-to-day language, and I also work
                  fluently in Spanish.
                </p>
              </div>
              <div style={{ padding: "18px 0", borderTop: "1px solid var(--hair)" }}>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "17px", fontWeight: 600, margin: "0 0 6px", letterSpacing: "-0.01em" }}>
                  Commercial judgment
                </h3>
                <p style={{ fontSize: "15px", lineHeight: 1.55, color: "var(--body)", margin: "0" }}>
                  Finance and sales experience taught me to manage pipelines,
                  documentation, follow-up, and conversations tied to revenue.
                </p>
              </div>
              <div style={{ padding: "18px 0", borderTop: "1px solid var(--hair)" }}>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "17px", fontWeight: 600, margin: "0 0 6px", letterSpacing: "-0.01em" }}>
                  Hands-on technical delivery
                </h3>
                <p style={{ fontSize: "15px", lineHeight: 1.55, color: "var(--body)", margin: "0" }}>
                  React, WordPress, Shopify, APIs, accessibility QA, deployment,
                  and ongoing production support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMERCIAL FOUNDATION */}
      <section id="commercial" className="pk-section--tight">
        <div className="pk-label-row">
          <span className="pk-label-row__primary">Commercial foundation</span>
          <span className="pk-label-row__right">Sales · Finance · CRM</span>
        </div>
        <div className="pk-about-grid">
          <h2 className="pk-about__h2">Sales discipline behind the technical work.</h2>
          <div>
            {commercialHighlights.map((item, index) => (
              <div key={index} className="pk-principle">
                <div>
                  <h3 className="pk-principle__h3">{item.title}</h3>
                  <p className="pk-principle__body">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="pk-section">
        <div className="pk-label-row">
          <span className="pk-label-row__primary">Solutions</span>
          <span className="pk-label-row__right">Where I create value</span>
        </div>
        <div className="pk-services-intro">
          <h2 className="pk-about__h2">One profile. Four valuable lanes.</h2>
          <p>
            My best work happens where revenue conversations, customer needs,
            technical judgment, and dependable implementation overlap.
          </p>
        </div>
        <div className="pk-services-grid">
          {serviceOffers.map((offer) => (
            <article key={offer.title} className="pk-service-card">
              <div className="pk-service-card__meta">
                <span>{offer.label}</span>
                <span>{offer.price}</span>
              </div>
              <h3>{offer.title}</h3>
              <p>{offer.body}</p>
              <p className="pk-service-card__fit">{offer.fit}</p>
              <a href={EMAIL_HREF}>Start a conversation →</a>
            </article>
          ))}
        </div>
      </section>

      {/* FEATURED WORK */}
      <section id="work" className="pk-section">
        <div className="pk-label-row">
          <span className="pk-label-row__primary">Selected work</span>
          <span className="pk-label-row__right">Case studies</span>
        </div>

        <div className="pk-featured-grid" style={{ marginTop: "clamp(24px, 4vh, 44px)" }}>
          {featured.map((p) => (
            <Link
              key={p.id}
              className="pk-tile"
              to={`/work/${p.id}`}
              style={{ border: "1px solid var(--hair)", textAlign: "left", display: "block" }}
            >
              <div className="pk-tile__top" style={{ background: p.brand }}>
                {p.logo ? (
                  <div className="pk-tile__chip">
                    <img src={p.logo} alt={`${p.title} logo`} />
                  </div>
                ) : (
                  <span className="pk-tile__typo">{p.title}</span>
                )}
              </div>
              <div className="pk-tile__bottom">
                <span>
                  <span className="pk-tile__title">{p.title}</span>
                  <span className="pk-tile__discipline">{p.discipline}</span>
                </span>
                <span className="pk-tile__case">Case study →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ALSO SHIPPED */}
      <section className="pk-section--compact">
        <div className="pk-label-row">
          <span className="pk-label-row__primary">Also shipped &amp; supported</span>
          <span className="pk-label-row__right">Live sites</span>
        </div>
        <div className="pk-shipped-grid" style={{ marginTop: "clamp(20px, 3vh, 32px)" }}>
          {rest.map((p) => (
            <a
              key={p.id}
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="pk-shipped-card"
            >
              <div className="pk-shipped-card__logo">
                {p.logo && <img src={p.logo} alt={`${p.title} logo`} />}
              </div>
              <div className="pk-shipped-card__footer">
                <span>
                  <span className="pk-shipped-card__title">{p.title}</span>
                  <span className="pk-shipped-card__discipline">{p.discipline}</span>
                </span>
                <span className="pk-shipped-card__arrow" aria-hidden="true">↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="pk-section">
        <div className="pk-label-row">
          <span className="pk-label-row__primary">Approach</span>
        </div>
        <div className="pk-about-grid">
          <h2 className="pk-about__h2">Reliability over novelty.</h2>
          <div>
            {principles.map((p, i) => (
              <div key={i} className="pk-principle">
                <div>
                  <h3 className="pk-principle__h3">{p.title}</h3>
                  <p className="pk-principle__body">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="skills" className="pk-section">
        <div className="pk-label-row">
          <span className="pk-label-row__primary">Capabilities</span>
        </div>
        <h2 className="pk-visually-hidden">Capabilities</h2>
        <div className="pk-skills-grid">
          {skillGroups.map((g, i) => (
            <div key={i}>
              <h3 className="pk-skill-group__title">{g.title}</h3>
              <p className="pk-skill-group__items">{g.items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ACCESSIBILITY BLOCK */}
      <section className="pk-section--tight">
        <div className="pk-a11y-block">
          <div className="pk-a11y-block__bar" aria-hidden="true"></div>
          <div className="pk-label-row">
            <span className="pk-label-row__primary">Accessibility</span>
          </div>
          <div style={{ marginTop: "clamp(24px, 4vh, 44px)" }}>
            <h2 className="pk-a11y-block__h2">Not a checklist at the end.</h2>
            <ul className="pk-a11y-list">
              {a11yPoints.map((pt, i) => (
                <li key={i} className="pk-a11y-list__item">
                  <span className="pk-a11y-list__arrow" aria-hidden="true">→</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <Link className="pk-btn-ghost" to="/accessibility">
              How I handle it →
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="pk-section--contact">
        <div className="pk-label-row">
          <span className="pk-label-row__primary">Work together</span>
        </div>
        <h2 className="pk-contact__h2">
          Let&apos;s solve
          <br />
          something <span style={{ color: "var(--accent)" }}>useful.</span>
        </h2>
        <p className="pk-contact__body">
          I&apos;m targeting full-time remote roles in sales engineering, solutions
          consulting, implementation, technical account management, and
          customer-facing SaaS. Automotive technology, fintech, insurtech,
          e-commerce, and accessibility are especially strong fits. I remain
          open to selective account-executive and focused client work.
        </p>
        <a className="pk-contact__email" href={EMAIL_HREF}>
          Say hello →
        </a>
        <div className="pk-contact__links">
          <Link className="pk-contact__link" to="/resume">
            Résumé ↗
          </Link>
          <a className="pk-contact__link" href={LINKEDIN_HREF} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <a className="pk-contact__link" href={GITHUB_HREF} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <span className="pk-contact__location">Manitoba · Remote · English / Spanish</span>
        </div>
      </section>
    </div>
  );
}

// ============================================================
// ACCESSIBILITY VIEW
// ============================================================
function AccessibilityView() {
  return (
    <div className="pk-page">
      <div className="pk-breadcrumb">
        <Link className="pk-breadcrumb__link" to="/">
          Home
        </Link>
        &nbsp;/&nbsp; <span className="pk-breadcrumb__current">Accessibility</span>
      </div>

      <div className="pk-page-label">Accessibility &amp; web quality</div>
      <h1 className="pk-page-h1">
        Accessible, <span className="pk-page-h1__accent">practically.</span>
      </h1>
      <p className="pk-page-body">
        I'm not a lawyer and I won't pretend a badge fixes anything. I focus on
        the parts that make a site genuinely easier to use and cheaper to
        maintain: semantic HTML, keyboard paths, visible focus, honest
        contrast, and content that's structured before it's styled.
      </p>

      {/* Principles with a hairline break before them */}
      <div className="pk-a11y-principles">
        {a11yPrinciples.map((p, i) => (
          <div key={i} className="pk-a11y-principle">
            <h3 className="pk-a11y-principle__h3">{p.title}</h3>
            <p className="pk-a11y-principle__body">{p.body}</p>
          </div>
        ))}
      </div>

      {/* Proof — link to real projects */}
      <div style={{ marginTop: "clamp(56px, 9vh, 110px)" }}>
        <div className="pk-page-label">Where this shows up</div>
        <p style={{ fontSize: "clamp(17px, 1.6vw, 21px)", lineHeight: 1.6, color: "var(--body)", maxWidth: "56ch", margin: "clamp(24px, 4vh, 40px) 0 0" }}>
          Not theory. These are projects where accessibility shaped the build.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(16px, 2vw, 24px)", marginTop: "clamp(28px, 4vh, 44px)" }}>
          <Link
            to="/work/telus"
            style={{ display: "block", textAlign: "left", border: "1px solid var(--hair)", borderRadius: "5px", padding: "24px", color: "var(--text)", textDecoration: "none", transition: "border-color 0.25s" }}
            className="pk-a11y-proof-card"
          >
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "clamp(19px, 2vw, 24px)", margin: "0 0 8px", letterSpacing: "-0.02em" }}>
              TELUS Reconciliation Report
            </h3>
            <p style={{ fontSize: "15px", lineHeight: 1.55, color: "var(--body)", margin: "0" }}>
              Data visualizations built to be read by screen readers and
              operated by keyboard, not just looked at. A publishing workflow
              their team controls.
            </p>
            <span style={{ display: "block", marginTop: "14px", fontFamily: "'JetBrains Mono', monospace", fontSize: "10.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)" }}>
              Case study →
            </span>
          </Link>
          <Link
            to="/work/tamalpais"
            style={{ display: "block", textAlign: "left", border: "1px solid var(--hair)", borderRadius: "5px", padding: "24px", color: "var(--text)", textDecoration: "none", transition: "border-color 0.25s" }}
            className="pk-a11y-proof-card"
          >
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "clamp(19px, 2vw, 24px)", margin: "0 0 8px", letterSpacing: "-0.02em" }}>
              Tamalpais Trust
            </h3>
            <p style={{ fontSize: "15px", lineHeight: 1.55, color: "var(--body)", margin: "0" }}>
              An interactive map and grant-partner directory structured to
              stay browsable and navigable as the network grows. Editor-run
              publishing without a developer.
            </p>
            <span style={{ display: "block", marginTop: "14px", fontFamily: "'JetBrains Mono', monospace", fontSize: "10.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)" }}>
              Case study →
            </span>
          </Link>
        </div>
      </div>

      {/* Standards — not uppercase, sentence case for readability */}
      <div className="pk-a11y-standards" style={{ marginTop: "clamp(56px, 9vh, 110px)" }}>
        <div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "clamp(26px, 3.4vw, 44px)", lineHeight: 1.06, letterSpacing: "-0.03em", margin: "0 0 20px", textTransform: "none" }}>
            Standards &amp; risk, in plain terms.
          </h2>
          <p className="pk-a11y-standards__lead">
            Teams use WCAG as a practical benchmark for quality, procurement,
            and reducing legal exposure. A few of the frameworks in play:
          </p>
        </div>
        <ul className="pk-a11y-standards-list">
          {a11yStandards.map((s, i) => (
            <li key={i} className="pk-a11y-standards-list__item">
              <span className="pk-a11y-standards-list__marker" aria-hidden="true">§</span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* How I help a team — with a section heading that has visual weight */}
      <div style={{ marginTop: "clamp(56px, 9vh, 110px)" }}>
        <div className="pk-page-label">How I help a team</div>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "clamp(28px, 4vw, 50px)", lineHeight: 1.02, letterSpacing: "-0.03em", margin: "clamp(20px, 3vh, 32px) 0 0", textTransform: "uppercase", maxWidth: "20ch" }}>
          Review, fix, document.
        </h2>
        <div className="pk-a11y-phases">
          {a11yPhases.map((ph, i) => (
            <div key={i}>
              <h3 className="pk-a11y-phase__h3">{ph.title}</h3>
              <p className="pk-a11y-phase__body">{ph.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Closing — different from home page's block, no raised panel */}
      <div style={{ marginTop: "clamp(64px, 10vh, 120px)", borderTop: "1px solid var(--text)", paddingTop: "clamp(32px, 5vw, 56px)" }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "clamp(26px, 4vw, 50px)", lineHeight: 1.02, letterSpacing: "-0.03em", margin: "0 0 24px", maxWidth: "20ch", textTransform: "uppercase" }}>
          Build the fix, not just flag it.
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
          <a className="pk-btn-solid" href={EMAIL_HREF}>
            Email me →
          </a>
          <Link className="pk-btn-ghost" to="/">
            Back to home
          </Link>
        </div>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "var(--muted)", margin: "28px 0 0" }}>
          General information, not legal advice.
        </p>
      </div>
    </div>
  );
}

// ============================================================
// RESUME VIEW
// ============================================================
function ResumeView() {
  return (
    <div className="pk-page--resume">
      <div className="pk-breadcrumb">
        <Link className="pk-breadcrumb__link" to="/">
          Home
        </Link>
        &nbsp;/&nbsp; <span className="pk-breadcrumb__current">Résumé</span>
      </div>

      <div className="pk-resume-header">
        <div>
          <h1 className="pk-resume__h1">Daniel Chavez</h1>
          <p className="pk-resume__sub">
            Technical solutions &amp; client delivery · Winnipeg, MB · 204-721-2248
          </p>
        </div>
        <a
          className="pk-btn-solid"
          href={RESUME_HREF}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download PDF ↗
        </a>
      </div>

      <p className="pk-resume__summary">
        Bilingual technical-solutions professional combining 4+ years building
        and maintaining production websites with earlier automotive sales,
        finance, CRM, prospecting, and relationship-management experience.
        Strongest where customer discovery, business process, solution design,
        and hands-on implementation meet.
      </p>

      {/* Path */}
      <div className="pk-resume-section">
        <h2 className="pk-resume-section__label">Path</h2>
        <div>
          {pathItems.map((j, i) => (
            <div key={i} className="pk-path-item">
              <div className="pk-path-item__header">
                <span className="pk-path-item__title">{j.title}</span>
                <span className="pk-path-item__period">{j.period}</span>
              </div>
              <p className="pk-path-item__body">{j.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Training & Focus */}
      <div className="pk-resume-section">
        <h2 className="pk-resume-section__label">Training &amp; focus</h2>
        <ul className="pk-credentials-list">
          {credentials.map((c, i) => (
            <li key={i} className="pk-credentials-list__item">
              <span className="pk-credentials-list__arrow" aria-hidden="true">→</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Core stack */}
      <div className="pk-resume-section">
        <h2 className="pk-resume-section__label">Capabilities</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {skillGroups.map((g, i) => (
            <div key={i} className="pk-resume-skill-group">
              <div className="pk-resume-skill-group__title">{g.title}</div>
              <div className="pk-resume-skill-group__items">{g.items}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected work */}
      <div className="pk-resume-section">
        <h2 className="pk-resume-section__label">Selected work</h2>
        <div>
          {projects.map((p) => (
            <a
              key={p.id}
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="pk-resume-project-link"
            >
              <div>
                <div className="pk-resume-project__title-row">
                  <span className="pk-resume-project__title">{p.title}</span>
                  <span className="pk-resume-project__domain">{p.domain}</span>
                </div>
                <p className="pk-resume-project__role">{p.role}</p>
              </div>
              <span className="pk-resume-project__arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>

      <div className="pk-resume-footer">
        <a className="pk-btn-solid" href={EMAIL_HREF}>
          Email me →
        </a>
        <Link className="pk-btn-ghost" to="/">
          Back to home
        </Link>
      </div>
    </div>
  );
}

// ============================================================
// CASE STUDY VIEW
// ============================================================
function CaseStudyView({ caseId }) {
  const project = projects.find((p) => p.id === caseId);
  if (!project) return null;

  const study = caseStudies[caseId];
  const featured = projects.filter((p) => p.featured);
  const idx = featured.findIndex((p) => p.id === caseId);
  const next = featured[(idx + 1) % featured.length];

  return (
    <div className="pk-page--case">
      <div className="pk-breadcrumb">
        <Link className="pk-breadcrumb__link" to="/">
          Home
        </Link>
        &nbsp;/&nbsp;
        <Link className="pk-breadcrumb__link" to="/#work">
          Work
        </Link>
        &nbsp;/&nbsp; <span className="pk-breadcrumb__current">{project.title}</span>
      </div>

      <div className="pk-case__discipline">{project.discipline}</div>
      <h1 className="pk-case__h1">{project.title}</h1>
      <div className="pk-case__meta">
        <span>{project.stack}</span>
        <a
          className="pk-case__visit"
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit {project.domain} ↗
        </a>
      </div>

      <div className="pk-case__image-frame">
        {project.image ? (
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            style={{ maxWidth: "100%", height: "auto", display: "block", borderRadius: "4px" }}
          />
        ) : (
          <span>Drop a screenshot of {project.domain}</span>
        )}
      </div>

      {study && (
        <>
          <div className="pk-case__section">
            <h2 className="pk-case__section-label">The brief</h2>
            <p className="pk-case__brief">{study.brief}</p>
          </div>

          <div className="pk-case__section">
            <h2 className="pk-case__section-label">What I built</h2>
            <p className="pk-case__built">{study.built}</p>
          </div>

          <div className="pk-case__section">
            <h2 className="pk-case__section-label">Notable details</h2>
            <ul className="pk-case__details-list">
              {study.details.map((d, i) => (
                <li key={i} className="pk-case__details-item">
                  <span className="pk-case__details-arrow" aria-hidden="true">→</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      <div className="pk-case__nav">
        <Link className="pk-case__nav-back" to="/#work">
          ← All work
        </Link>
        <Link className="pk-case__nav-next" to={`/work/${next.id}`}>
          <span className="pk-case__nav-next-label">Next</span>
          <span className="pk-case__nav-next-title">{next.title} →</span>
        </Link>
      </div>
    </div>
  );
}

// ============================================================
// APP
// ============================================================
/**
 * Scroll behaviour for a real router: a new page starts at the top, and a
 * `/#section` link scrolls to that section whether or not we were already on
 * the home page. Without this, giving the nav real hrefs would silently break
 * the in-page jumps the old button handlers did by hand.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    // The target may not be mounted on the frame the route changes.
    let frames = 0;
    const tick = () => {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top: y, behavior: "smooth" });
      } else if (frames++ < 20) {
        requestAnimationFrame(tick);
      }
    };
    requestAnimationFrame(tick);
  }, [pathname, hash]);

  return null;
}

const PAGE_TITLES = {
  "/": "Daniel Chavez — Technical solutions, sales & client delivery",
  "/resume": "Résumé — Daniel Chavez",
  "/accessibility": "Accessibility — Daniel Chavez",
};

/**
 * Static hosts serve prerendered routes as directories, so the same page can
 * arrive as "/resume" or "/resume/". Comparing the raw pathname silently misses
 * the trailing-slash form and falls back to the home title.
 */
function normalizePath(pathname) {
  if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname;
}

/** Keep the document title in step with the URL for tabs, history and bookmarks. */
function DocumentTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = normalizePath(pathname);
    const caseMatch = route.match(/^\/work\/([^/]+)$/);
    if (caseMatch) {
      const project = projects.find((p) => p.id === caseMatch[1]);
      document.title = project
        ? `${project.title} — Daniel Chavez`
        : "Case study — Daniel Chavez";
      return;
    }
    document.title = PAGE_TITLES[route] || PAGE_TITLES["/"];
  }, [pathname]);

  return null;
}

/** A case study reached by URL: /work/:caseId. */
function CaseStudyRoute() {
  const { caseId } = useParams();
  const project = projects.find((p) => p.id === caseId);
  // An unknown or non-case project id is a dead end, not a blank page.
  if (!project || !caseStudies[caseId]) return <Navigate to="/" replace />;
  return <CaseStudyView caseId={caseId} />;
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    document.documentElement.lang = "en";
  }, []);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pk-root">
      <a href="#main-content" className="pk-skip-link">
        Skip to main content
      </a>
      <div className="pk-grid-overlay" aria-hidden="true"></div>

      <ScrollManager />
      <DocumentTitle />

      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <main id="main-content" className="pk-main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/accessibility" element={<AccessibilityView />} />
          <Route path="/resume" element={<ResumeView />} />
          <Route path="/work/:caseId" element={<CaseStudyRoute />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />

      {showBackToTop && (
        <button
          className="pk-back-to-top"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
