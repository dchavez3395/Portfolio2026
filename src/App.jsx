import { useEffect, useState, useCallback } from "react";
import {
  projects,
  caseStudies,
  pathItems,
  credentials,
  principles,
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
function Header({ onNavHome, onNavWork, onNavResume, onNavA11y, mobileOpen, setMobileOpen }) {
  const navBtn = (label, action, isEmail = false) => (
    <button
      className={isEmail ? "pk-nav__email" : "pk-nav__link"}
      onClick={() => {
        setMobileOpen(false);
        action();
      }}
    >
      {label}
    </button>
  );

  return (
    <header className="pk-header">
      <div className="pk-header__inner">
        <button className="pk-logo" onClick={onNavHome} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, color: "inherit", font: "inherit" }}>
          <span className="pk-logo__square" aria-hidden="true"></span>
          Daniel Chavez
        </button>
        <nav aria-label="Primary" className={`pk-nav ${mobileOpen ? "pk-nav--open" : ""}`}>
          {navBtn("Work", onNavWork)}
          {navBtn("Résumé", onNavResume)}
          {navBtn("A11y", onNavA11y)}
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
function HomeView({ goWork, goA11y, goResume, openCase }) {
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
          Sites that
          <br />
          outlive their
          <br />
          <span className="pk-hero__h1-accent">launch.</span>
        </h1>

        <div className="pk-hero__bottom">
          <div className="pk-hero__ctas">
            <button className="pk-btn-solid" onClick={goWork}>
              See the work ↓
            </button>
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
            &nbsp;&nbsp;React&nbsp;&nbsp;/&nbsp;&nbsp;Node.js&nbsp;&nbsp;/&nbsp;&nbsp;Express&nbsp;&nbsp;/&nbsp;&nbsp;JavaScript&nbsp;&nbsp;/&nbsp;&nbsp;PHP&nbsp;&nbsp;/&nbsp;&nbsp;WordPress&nbsp;&nbsp;/&nbsp;&nbsp;Tailwind&nbsp;&nbsp;/&nbsp;&nbsp;SCSS&nbsp;&nbsp;/&nbsp;&nbsp;Accessibility&nbsp;&nbsp;/&nbsp;&nbsp;Figma&nbsp;&nbsp;/&nbsp;&nbsp;
          </span>
          <span>
            &nbsp;&nbsp;React&nbsp;&nbsp;/&nbsp;&nbsp;Node.js&nbsp;&nbsp;/&nbsp;&nbsp;Express&nbsp;&nbsp;/&nbsp;&nbsp;JavaScript&nbsp;&nbsp;/&nbsp;&nbsp;PHP&nbsp;&nbsp;/&nbsp;&nbsp;WordPress&nbsp;&nbsp;/&nbsp;&nbsp;Tailwind&nbsp;&nbsp;/&nbsp;&nbsp;SCSS&nbsp;&nbsp;/&nbsp;&nbsp;Accessibility&nbsp;&nbsp;/&nbsp;&nbsp;Figma&nbsp;&nbsp;/&nbsp;&nbsp;
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
            3+ years shipping production web apps.
          </h2>
          <div>
            <p style={{ fontSize: "clamp(17px, 1.6vw, 21px)", lineHeight: 1.6, color: "var(--body)", margin: "0 0 28px", maxWidth: "52ch" }}>
              Full-stack developer with agency experience across React,
              Node.js, Express, PHP, and WordPress. I own projects end to end,
              from design handoff to deployment.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              <div style={{ padding: "18px 0", borderTop: "1px solid var(--hair)" }}>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "17px", fontWeight: 600, margin: "0 0 6px", letterSpacing: "-0.01em" }}>
                  Accessible by habit
                </h3>
                <p style={{ fontSize: "15px", lineHeight: 1.55, color: "var(--body)", margin: "0" }}>
                  WCAG-compliant front-end built by habit, not bolted on at the end.
                </p>
              </div>
              <div style={{ padding: "18px 0", borderTop: "1px solid var(--hair)" }}>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "17px", fontWeight: 600, margin: "0 0 6px", letterSpacing: "-0.01em" }}>
                  AI-assisted workflows
                </h3>
                <p style={{ fontSize: "15px", lineHeight: 1.55, color: "var(--body)", margin: "0" }}>
                  Cursor, Copilot, and Claude to ship faster without cutting corners.
                </p>
              </div>
              <div style={{ padding: "18px 0", borderTop: "1px solid var(--hair)" }}>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "17px", fontWeight: 600, margin: "0 0 6px", letterSpacing: "-0.01em" }}>
                  CMS depth
                </h3>
                <p style={{ fontSize: "15px", lineHeight: 1.55, color: "var(--body)", margin: "0" }}>
                  WordPress, Shopify, and custom CMS architecture that keeps editors self-sufficient.
                </p>
              </div>
            </div>
          </div>
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
            <button
              key={p.id}
              className="pk-tile"
              onClick={() => openCase(p.id)}
              style={{ background: "none", border: "1px solid var(--hair)", cursor: "pointer", textAlign: "left" }}
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
            </button>
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
            <button className="pk-btn-ghost" onClick={goA11y}>
              How I handle it →
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="pk-section--contact">
        <div className="pk-label-row">
          <span className="pk-label-row__primary">Next role</span>
        </div>
        <h2 className="pk-contact__h2">
          Let's build
          <br />
          something <span style={{ color: "var(--accent)" }}>lasting.</span>
        </h2>
        <p className="pk-contact__body">
          I'm after a team where front-end quality, CMS work, and accessibility
          actually matter, the kind of place that cares who inherits the code.
          If that's the room you're building, let's talk.
        </p>
        <a className="pk-contact__email" href={EMAIL_HREF}>
          Say hello →
        </a>
        <div className="pk-contact__links">
          <button className="pk-contact__link" onClick={goResume} style={{ background: "none", border: "none", cursor: "pointer", font: "inherit", letterSpacing: "inherit", textTransform: "inherit" }}>
            Résumé ↗
          </button>
          <a className="pk-contact__link" href={LINKEDIN_HREF} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <a className="pk-contact__link" href={GITHUB_HREF} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <span className="pk-contact__location">Based in Manitoba · Open to remote</span>
        </div>
      </section>
    </div>
  );
}

// ============================================================
// ACCESSIBILITY VIEW
// ============================================================
function AccessibilityView({ goHome, openCase }) {
  return (
    <div className="pk-page">
      <div className="pk-breadcrumb">
        <button className="pk-breadcrumb__link" onClick={goHome} style={{ background: "none", border: "none", cursor: "pointer", font: "inherit", letterSpacing: "inherit", textTransform: "inherit", color: "inherit" }}>
          Home
        </button>
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
          <button
            onClick={() => openCase("telus")}
            style={{ textAlign: "left", background: "none", border: "1px solid var(--hair)", borderRadius: "5px", padding: "24px", cursor: "pointer", color: "var(--text)", transition: "border-color 0.25s" }}
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
          </button>
          <button
            onClick={() => openCase("tamalpais")}
            style={{ textAlign: "left", background: "none", border: "1px solid var(--hair)", borderRadius: "5px", padding: "24px", cursor: "pointer", color: "var(--text)", transition: "border-color 0.25s" }}
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
          </button>
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
          <button className="pk-btn-ghost" onClick={goHome}>
            Back to home
          </button>
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
function ResumeView({ goHome }) {
  return (
    <div className="pk-page--resume">
      <div className="pk-breadcrumb">
        <button className="pk-breadcrumb__link" onClick={goHome} style={{ background: "none", border: "none", cursor: "pointer", font: "inherit", letterSpacing: "inherit", textTransform: "inherit", color: "inherit" }}>
          Home
        </button>
        &nbsp;/&nbsp; <span className="pk-breadcrumb__current">Résumé</span>
      </div>

      <div className="pk-resume-header">
        <div>
          <h1 className="pk-resume__h1">Daniel Chavez</h1>
          <p className="pk-resume__sub">
            Full-stack web developer · Winnipeg, MB · 204-721-2248
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
        Full-stack developer with 3+ years shipping and maintaining production
        web apps in a fast-paced agency environment. Strongest in the modern
        JavaScript stack, React, Node.js, and Express, with solid PHP and CMS
        depth to back it up. I own projects end to end, from design handoff to
        deployment, and pair clean, accessible, performant code with
        AI-assisted workflows to ship faster without cutting corners.
        Available for full-time roles and select freelance work.
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
        <h2 className="pk-resume-section__label">Core stack</h2>
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
        <button className="pk-btn-ghost" onClick={goHome}>
          Back to home
        </button>
      </div>
    </div>
  );
}

// ============================================================
// CASE STUDY VIEW
// ============================================================
function CaseStudyView({ caseId, goHome, goWork, openCase }) {
  const project = projects.find((p) => p.id === caseId);
  if (!project) return null;

  const study = caseStudies[caseId];
  const featured = projects.filter((p) => p.featured);
  const idx = featured.findIndex((p) => p.id === caseId);
  const next = featured[(idx + 1) % featured.length];

  return (
    <div className="pk-page--case">
      <div className="pk-breadcrumb">
        <button className="pk-breadcrumb__link" onClick={goHome} style={{ background: "none", border: "none", cursor: "pointer", font: "inherit", letterSpacing: "inherit", textTransform: "inherit", color: "inherit" }}>
          Home
        </button>
        &nbsp;/&nbsp;
        <button className="pk-breadcrumb__link" onClick={goWork} style={{ background: "none", border: "none", cursor: "pointer", font: "inherit", letterSpacing: "inherit", textTransform: "inherit", color: "inherit" }}>
          Work
        </button>
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
        <button className="pk-case__nav-back" onClick={goWork} style={{ background: "none", border: "none", cursor: "pointer", font: "inherit", letterSpacing: "inherit", textTransform: "inherit" }}>
          ← All work
        </button>
        <button className="pk-case__nav-next" onClick={() => openCase(next.id)}>
          <span className="pk-case__nav-next-label">Next</span>
          <span className="pk-case__nav-next-title">{next.title} →</span>
        </button>
      </div>
    </div>
  );
}

// ============================================================
// APP
// ============================================================
function App() {
  const [view, setView] = useState("home");
  const [caseId, setCaseId] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToId = useCallback((id) => {
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    });
  }, []);

  const toTop = useCallback(() => {
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }));
  }, []);

  const goSection = useCallback(
    (id) => {
      if (view !== "home") {
        setView("home");
        setCaseId(null);
        setTimeout(() => scrollToId(id), 100);
      } else {
        scrollToId(id);
      }
    },
    [view, scrollToId]
  );

  const setViewPage = useCallback(
    (v) => {
      setView(v);
      setCaseId(null);
      setMobileOpen(false);
      toTop();
    },
    [toTop]
  );

  const openCase = useCallback(
    (id) => {
      setView("case");
      setCaseId(id);
      setMobileOpen(false);
      toTop();
    },
    [toTop]
  );

  const goHome = useCallback(() => setViewPage("home"), [setViewPage]);
  const goA11y = useCallback(() => setViewPage("accessibility"), [setViewPage]);
  const goResume = useCallback(() => setViewPage("resume"), [setViewPage]);
  const goWork = useCallback(() => goSection("work"), [goSection]);

  useEffect(() => {
    document.documentElement.lang = "en";
  }, []);

  useEffect(() => {
    const titles = {
      home: "Daniel Chavez — Full-stack web developer",
      accessibility: "Accessibility — Daniel Chavez",
      resume: "Résumé — Daniel Chavez",
      case: caseId
        ? `${projects.find((p) => p.id === caseId)?.title || "Case Study"} — Daniel Chavez`
        : "Case Study — Daniel Chavez",
    };
    document.title = titles[view] || titles.home;
  }, [view, caseId]);

  const [showBackToTop, setShowBackToTop] = useState(false);

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

      <Header
        onNavHome={goHome}
        onNavWork={goWork}
        onNavResume={goResume}
        onNavA11y={goA11y}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <main id="main-content" className="pk-main" tabIndex={-1}>
        {view === "home" && (
          <HomeView
            goWork={goWork}
            goA11y={goA11y}
            goResume={goResume}
            openCase={openCase}
          />
        )}

        {view === "accessibility" && <AccessibilityView goHome={goHome} openCase={openCase} />}

        {view === "resume" && <ResumeView goHome={goHome} />}

        {view === "case" && (
          <CaseStudyView
            caseId={caseId}
            goHome={goHome}
            goWork={goWork}
            openCase={openCase}
          />
        )}
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
