import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  CONTACT_EMAIL_MAILTO,
  RESUME_URL,
  languageOptions,
  projects,
  translations,
} from "./siteContent";

const THEME_STORAGE_KEY = "portfolio-theme";
const THEME_OPTIONS = ["dark", "light"];

function readStoredTheme() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return THEME_OPTIONS.includes(storedTheme) ? storedTheme : null;
  } catch {
    return null;
  }
}

function getSystemTheme() {
  if (typeof window === "undefined") {
    return "dark";
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function getInitialTheme() {
  return readStoredTheme() ?? getSystemTheme();
}

function writeStoredTheme(theme) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // The theme still changes even if browser storage is unavailable.
  }
}

function ArrowIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

function MenuIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function CloseIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

function LinkedInIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M6.94 8.5H3.56V20h3.38zM5.25 3A2.02 2.02 0 0 0 3.2 5.05 2.02 2.02 0 0 0 5.22 7.1h.03a2.05 2.05 0 1 0 0-4.1ZM20.8 12.43c0-3.34-1.78-4.9-4.16-4.9-1.91 0-2.77 1.05-3.25 1.79V8.5H10v11.5h3.38v-6.42c0-.34.02-.68.13-.92.27-.68.88-1.39 1.91-1.39 1.35 0 1.89 1.03 1.89 2.54V20H20.8Z" />
    </svg>
  );
}

function GitHubIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12.04c0 5.11 3.3 9.45 7.88 10.98.58.11.79-.25.79-.56v-2.16c-3.2.7-3.88-1.36-3.88-1.36-.52-1.35-1.28-1.7-1.28-1.7-1.05-.73.08-.72.08-.72 1.15.08 1.76 1.2 1.76 1.2 1.03 1.77 2.71 1.26 3.37.97.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.29-5.24-5.74 0-1.27.45-2.32 1.18-3.14-.12-.29-.51-1.48.12-3.09 0 0 .96-.31 3.15 1.2a10.9 10.9 0 0 1 5.74 0c2.19-1.51 3.15-1.2 3.15-1.2.63 1.61.24 2.8.12 3.09.74.82 1.18 1.87 1.18 3.14 0 4.46-2.69 5.44-5.26 5.73.41.36.78 1.08.78 2.18v3.23c0 .31.21.67.8.56A11.54 11.54 0 0 0 23.5 12.04C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function MailIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 6h16v12H4z" />
      <path d="m4 8 8 6 8-6" />
    </svg>
  );
}

function ResumeIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
      <path d="M9 9h1" />
    </svg>
  );
}

function SunIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function MoonIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M21 14.8A8.5 8.5 0 0 1 9.2 3a7 7 0 1 0 11.8 11.8Z" />
    </svg>
  );
}

function SectionHeading({ eyebrow, title, description, center = false, inverted = false }) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      <p
        className={`text-[0.72rem] font-semibold uppercase tracking-[0.32em] ${
          inverted ? "text-gold" : "text-gold"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-display text-4xl leading-tight sm:text-5xl ${
          inverted ? "text-ink" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg ${
            center ? "mx-auto" : ""
          } ${inverted ? "text-muted" : "text-muted"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function TextileBand({ muted = false }) {
  return (
    <div
      aria-hidden="true"
      className={muted ? "textile-band textile-band-muted" : "textile-band"}
    />
  );
}

function SocialPill({ link }) {
  const Icon = link.icon;

  return (
    <a
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noreferrer noopener" : undefined}
      className="inline-flex items-center gap-2 rounded-full border border-border/55 bg-surface px-4 py-2 text-sm text-muted shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:border-gold/45 hover:bg-surface hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
    >
      <Icon className="h-4 w-4" />
      <span>{link.label}</span>
    </a>
  );
}

function IconCircleLink({ link }) {
  const Icon = link.icon;

  return (
    <a
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noreferrer noopener" : undefined}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-border/55 bg-surface text-muted shadow-[0_12px_30px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 hover:border-gold/50 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
      aria-label={link.label}
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}

function ThemeToggleButton({ theme, label, onToggle }) {
  const Icon = theme === "dark" ? SunIcon : MoonIcon;

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onToggle}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-surface text-muted shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:border-gold/50 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
    >
      <Icon className="h-4 w-4" />
      <span className="sr-only">{label}</span>
    </button>
  );
}

const skillAccentClasses = {
  accessibility: "border-[#22c55e]/30 bg-[#22c55e]/10 text-[#22c55e]",
  api: "border-gold/35 bg-gold/10 text-gold",
  blade: "border-[#ff2d20]/30 bg-[#ff2d20]/10 text-[#ff2d20]",
  contrast: "border-[#f97316]/30 bg-[#f97316]/10 text-[#f97316]",
  css: "border-[#2965f1]/30 bg-[#2965f1]/10 text-[#2965f1]",
  deployment: "border-[#14b8a6]/30 bg-[#14b8a6]/10 text-[#14b8a6]",
  express: "border-border/60 bg-ink/10 text-ink",
  figma: "border-[#a259ff]/30 bg-[#a259ff]/10 text-[#a259ff]",
  git: "border-[#f05033]/30 bg-[#f05033]/10 text-[#f05033]",
  github: "border-border/60 bg-ink/10 text-ink",
  hosting: "border-[#38bdf8]/30 bg-[#38bdf8]/10 text-[#38bdf8]",
  html: "border-[#e34f26]/30 bg-[#e34f26]/10 text-[#e34f26]",
  javascript: "border-[#f7df1e]/35 bg-[#f7df1e]/10 text-[#f7df1e]",
  keyboard: "border-[#c084fc]/30 bg-[#c084fc]/10 text-[#c084fc]",
  next: "border-border/60 bg-ink/10 text-ink",
  node: "border-[#68a063]/30 bg-[#68a063]/10 text-[#68a063]",
  php: "border-[#777bb4]/30 bg-[#777bb4]/10 text-[#777bb4]",
  postgres: "border-[#336791]/30 bg-[#336791]/10 text-[#60a5fa]",
  react: "border-[#61dafb]/30 bg-[#61dafb]/10 text-[#61dafb]",
  responsive: "border-[#06b6d4]/30 bg-[#06b6d4]/10 text-[#06b6d4]",
  scalar: "border-[#a855f7]/30 bg-[#a855f7]/10 text-[#c084fc]",
  semantic: "border-[#f59e0b]/30 bg-[#f59e0b]/10 text-[#f59e0b]",
  tailwind: "border-[#38bdf8]/30 bg-[#38bdf8]/10 text-[#38bdf8]",
  vercel: "border-border/60 bg-ink/10 text-ink",
  vite: "border-[#bd34fe]/30 bg-[#bd34fe]/10 text-[#bd34fe]",
  vue: "border-[#42b883]/30 bg-[#42b883]/10 text-[#42b883]",
  wordpress: "border-[#21759b]/30 bg-[#21759b]/10 text-[#21759b]",
};

function SkillIcon({ icon, className = "" }) {
  const iconProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": "true",
    focusable: "false",
  };

  switch (icon) {
    case "accessibility":
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="5" r="2" />
          <path d="M5 9h14" />
          <path d="M12 9v5" />
          <path d="m8 21 4-7 4 7" />
        </svg>
      );
    case "api":
      return (
        <svg {...iconProps}>
          <path d="M8 7 4 12l4 5" />
          <path d="m16 7 4 5-4 5" />
          <path d="m14 4-4 16" />
        </svg>
      );
    case "contrast":
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 4v16" />
          <path d="M12 4a8 8 0 0 1 0 16" fill="currentColor" stroke="none" />
        </svg>
      );
    case "deployment":
    case "hosting":
      return (
        <svg {...iconProps}>
          <path d="M6 19h12" />
          <path d="M12 15v4" />
          <rect x="4" y="5" width="16" height="10" rx="2" />
          <path d="M8 9h.01" />
          <path d="M11 9h5" />
        </svg>
      );
    case "express":
      return (
        <svg {...iconProps}>
          <path d="M4 12h16" />
          <path d="M6 8c2.3 2.7 3.6 4 6 4s3.7-1.3 6-4" />
          <path d="M6 16c2.3-2.7 3.6-4 6-4s3.7 1.3 6 4" />
        </svg>
      );
    case "figma":
      return (
        <svg {...iconProps} fill="currentColor" stroke="none">
          <circle cx="9" cy="6" r="3" />
          <circle cx="15" cy="6" r="3" />
          <circle cx="9" cy="12" r="3" />
          <circle cx="15" cy="12" r="3" />
          <circle cx="9" cy="18" r="3" />
        </svg>
      );
    case "git":
      return (
        <svg {...iconProps}>
          <path d="M7 7h.01" />
          <path d="M17 17h.01" />
          <path d="M7 17h.01" />
          <path d="M7 8v8" />
          <path d="M8 7c4.5 0 5 10 9 10" />
        </svg>
      );
    case "github":
      return <GitHubIcon className={className} />;
    case "html":
      return (
        <svg {...iconProps}>
          <path d="m5 3 1.4 16L12 21l5.6-2L19 3Z" />
          <path d="M9 8h6" />
          <path d="M9.4 12h5.2l-.35 3.1L12 15.8l-2.25-.7" />
        </svg>
      );
    case "css":
      return (
        <svg {...iconProps}>
          <path d="m5 3 1.4 16L12 21l5.6-2L19 3Z" />
          <path d="M9 8h6" />
          <path d="M15 12H9.4l.35 3.1 2.25.7 2.25-.7.2-1.8" />
        </svg>
      );
    case "javascript":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
          <rect x="4" y="4" width="16" height="16" rx="3" fill="currentColor" />
          <text
            x="12"
            y="15.5"
            textAnchor="middle"
            fontSize="6.8"
            fontWeight="800"
            fill="#111827"
          >
            JS
          </text>
        </svg>
      );
    case "keyboard":
      return (
        <svg {...iconProps}>
          <rect x="3" y="7" width="18" height="11" rx="2" />
          <path d="M7 11h.01M10.5 11h.01M14 11h.01M17.5 11h.01" />
          <path d="M8 15h8" />
        </svg>
      );
    case "next":
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="8" />
          <path d="M9 16V8l6 8V8" />
        </svg>
      );
    case "node":
      return (
        <svg {...iconProps}>
          <path d="m12 3 7.5 4.3v8.4L12 20l-7.5-4.3V7.3Z" />
          <path d="M9 15V9l6 6V9" />
        </svg>
      );
    case "php":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
          <ellipse cx="12" cy="12" rx="9" ry="5.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <text
            x="12"
            y="14.3"
            textAnchor="middle"
            fontSize="5.7"
            fontWeight="800"
            fill="currentColor"
          >
            PHP
          </text>
        </svg>
      );
    case "postgres":
      return (
        <svg {...iconProps}>
          <ellipse cx="12" cy="6" rx="7" ry="3" />
          <path d="M5 6v8c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
          <path d="M5 10c0 1.7 3.1 3 7 3s7-1.3 7-3" />
        </svg>
      );
    case "react":
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
        </svg>
      );
    case "responsive":
      return (
        <svg {...iconProps}>
          <rect x="3" y="5" width="13" height="10" rx="2" />
          <rect x="17" y="9" width="4" height="8" rx="1" />
          <path d="M8 19h5" />
          <path d="M10.5 15v4" />
        </svg>
      );
    case "scalar":
      return (
        <svg {...iconProps}>
          <path d="M7 5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
          <path d="M8 9h8" />
          <path d="M8 13h5" />
          <path d="m14 16 2 2 3-4" />
        </svg>
      );
    case "semantic":
      return (
        <svg {...iconProps}>
          <path d="M5 5h14" />
          <path d="M7 9h10" />
          <path d="M7 13h7" />
          <path d="M5 17h8" />
          <path d="m16 16 2 2 3-4" />
        </svg>
      );
    case "tailwind":
      return (
        <svg {...iconProps}>
          <path d="M4 12c2.2-4 5.2-4 8.9 0 2.2 2.4 4 2.4 5.6 0" />
          <path d="M5.5 16c2.2-4 5.2-4 8.9 0 2.2 2.4 4 2.4 5.6 0" />
        </svg>
      );
    case "vite":
      return (
        <svg {...iconProps}>
          <path d="m5 4 14 2-7 15Z" />
          <path d="m13 7-4 6h4l-2 5 5-8h-4Z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "vercel":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
          <path d="M12 5 21 19H3Z" fill="currentColor" />
        </svg>
      );
    case "vue":
      return (
        <svg {...iconProps}>
          <path d="M4 5h5l3 5 3-5h5l-8 14Z" />
          <path d="M9 5h6l-3 5Z" />
        </svg>
      );
    case "wordpress":
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="8" />
          <path d="M7.8 8.5h2" />
          <path d="m8.5 8.5 2.3 7 1.5-4.3" />
          <path d="m12.4 8.5 2.6 7 1.5-5.2" />
          <path d="M15.2 8.5h1.8" />
        </svg>
      );
    case "blade":
      return (
        <svg {...iconProps}>
          <path d="M5 19c7-1 11-5 12-14" />
          <path d="M8 18c-1.5-5 1.5-10 9-13" />
          <path d="M5 19c3-1 5.6-1 8 0" />
        </svg>
      );
    default:
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="8" />
          <path d="M8 12h8" />
          <path d="M12 8v8" />
        </svg>
      );
  }
}

function SkillBadge({ skill }) {
  const accentClass = skillAccentClasses[skill.icon] ?? "border-gold/35 bg-gold/10 text-gold";

  return (
    <li>
      <div
        className={`flex min-h-24 flex-col items-center justify-center gap-2 rounded-[1.1rem] border px-3 py-4 text-center transition duration-300 hover:-translate-y-1 hover:bg-surface ${accentClass}`}
      >
        <SkillIcon icon={skill.icon} className="h-8 w-8" />
        <span className="text-[0.74rem] font-semibold leading-tight text-ink">
          {skill.label}
        </span>
      </div>
    </li>
  );
}

function ProjectCard({ project, visitLabel, language }) {
  const previewGradient = project.preview.replace("to-canvas", "to-white");

  return (
    <a
      href={project.demo}
      target="_blank"
      rel="noreferrer noopener"
      className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border/55 bg-surface shadow-[0_22px_70px_rgba(0,0,0,0.26)] transition duration-300 hover:-translate-y-1.5 hover:border-gold/45 hover:shadow-[0_28px_90px_rgba(0,0,0,0.36)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
      aria-label={`${visitLabel}: ${project.title}`}
    >
      <div className={`h-1.5 w-full bg-gradient-to-r ${project.accent}`} />
      <div className="relative overflow-hidden bg-slate-100 px-5 py-6">
        <div className={`absolute inset-0 bg-gradient-to-br ${previewGradient} opacity-95`} />
        <div className="card-motif absolute inset-0 opacity-20 mix-blend-multiply" />
        <div className="relative z-10 flex h-44 items-center justify-center rounded-[1.35rem] border border-white/80 bg-white/95 p-5 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05),0_18px_45px_rgba(15,23,42,0.16)]">
          <img
            src={project.image}
            alt={`Preview of ${project.title}`}
            loading="lazy"
            className="max-h-32 w-full object-contain transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </div>
      <div className="relative flex flex-1 flex-col p-5">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-gold/90">
          {project.category[language]}
        </p>
        <h3 className="mt-3 text-xl font-semibold leading-snug text-ink">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-muted">
          {project.summary[language]}
        </p>
        <div className="mt-6 flex items-center justify-end border-t border-border/45 pt-4">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition group-hover:text-ink">
            {visitLabel}
            <ArrowIcon className="h-4 w-4" />
          </span>
        </div>
      </div>
    </a>
  );
}

function HomePage({ t, language, sectionLink, socialLinks }) {
  return (
    <>
      <section
        id="home"
        className="section-shell overflow-hidden px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24"
      >
        <div className="mx-auto grid max-w-screen-xl gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
          <div className="relative z-10" data-aos="fade-up">
            <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-ink sm:text-6xl xl:text-7xl">
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {t.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={sectionLink("#portfolio")}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-canvas shadow-[0_18px_45px_rgba(245,196,71,0.22)] transition hover:-translate-y-0.5 hover:bg-gold/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                {t.hero.primaryCta}
                <ArrowIcon className="h-4 w-4" />
              </Link>
              <Link
                to="/accessibility"
                className="inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/5 px-6 py-3 text-sm font-semibold text-gold transition hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                {t.hero.secondaryCta}
                <ArrowIcon className="h-4 w-4" />
              </Link>
              <a
                href={CONTACT_EMAIL_MAILTO}
                className="inline-flex items-center gap-2 rounded-full border border-border/55 bg-surface px-6 py-3 text-sm font-semibold text-muted transition hover:-translate-y-0.5 hover:border-gold/45 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                {t.hero.tertiaryCta}
                <MailIcon className="h-4 w-4" />
              </a>
            </div>

            <div aria-label={t.hero.socialLabel} className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <SocialPill key={link.label} link={link} />
              ))}
            </div>
          </div>

          <div className="relative z-10 lg:pl-4" data-aos="fade-left" data-aos-delay="160">
            <div className="animate-drift absolute -top-8 right-10 h-28 w-28 rounded-full bg-gold/18 blur-3xl" />
            <div className="animate-float-soft absolute bottom-12 left-0 h-24 w-24 rounded-full bg-teal/16 blur-3xl" />
            <div className="glass-panel relative overflow-hidden rounded-[2.25rem] p-5 sm:p-7">
              <div className="hero-motif absolute inset-0 opacity-80" />
              <div className="relative">

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {t.hero.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[1.4rem] capitalize border border-border/45 bg-surface px-4 py-4 shadow-[0_14px_40px_rgba(0,0,0,0.22)]"
                    >
                      <p className="font-display text-3xl font-semibold tracking-[-0.04em] text-gold">{stat.value}</p>
                      <p className="mt-1 text-sm leading-6 text-muted">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TextileBand />

      <section
        id="about"
        className="section-shell px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-screen-xl">
          <SectionHeading
            eyebrow={t.story.eyebrow}
            title={t.story.title}
            description={t.story.intro}
          />

          <div className="mt-12 grid gap-6 xl:grid-cols-[1.05fr,0.95fr]">
            <div className="glass-panel overflow-hidden rounded-[2rem]" data-aos="fade-up">
              <div className="textile-band" />
              <div className="p-7 sm:p-9">
                <p className="text-base leading-8 text-muted sm:text-lg">{t.story.body}</p>
                <blockquote className="mt-8 rounded-[1.5rem] border border-gold/25 bg-canvas px-5 py-5 font-display text-2xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-3xl">
                  "{t.story.quote}"
                </blockquote>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
              {t.story.cards.map((card, index) => (
                <article
                  key={card.title}
                  className="relative overflow-hidden rounded-[1.8rem] border border-border/50 bg-surface p-6 shadow-[0_16px_45px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-gold/40"
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                >
                  <div className="card-motif absolute inset-0 opacity-20" />
                  <div className="relative">
                    <h3 className="mt-3 text-2xl font-semibold text-ink">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{card.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className="section-shell bg-surface/20 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow={t.work.eyebrow}
              title={t.work.title}
              description={t.work.intro}
            />
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                visitLabel={t.work.visit}
                language={language}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function HomePageEnd({ t, socialLinks }) {
  return (
    <>
      <TextileBand muted />

      <section
        id="skills"
        className="section-shell bg-surface/20 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-screen-xl">
          <SectionHeading
            eyebrow={t.skills.eyebrow}
            title={t.skills.title}
            description={t.skills.intro}
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {t.skills.groups.map((group) => (
              <article
                key={group.title}
                className="overflow-hidden rounded-[1.85rem] border border-border/55 bg-surface shadow-[0_16px_50px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-gold/40"
                data-aos="fade-up"
              >
                <div className="textile-band textile-band-muted" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-ink">{group.title}</h3>
                  <ul className="mt-5 grid grid-cols-2 gap-3">
                    {group.items.map((item) => (
                      <SkillBadge key={item.label} skill={item} />
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-screen-xl">
          <div className="glass-panel relative overflow-hidden rounded-[2.3rem] px-6 py-8 text-ink sm:px-8 sm:py-10 lg:px-12 lg:py-12" data-aos="fade-up">
            <div className="hero-motif absolute inset-0 opacity-45" />
            <div className="relative grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
              <div>
                <SectionHeading
                  eyebrow={t.accessibilitySpotlight.eyebrow}
                  title={t.accessibilitySpotlight.title}
                  description={t.accessibilitySpotlight.body}
                  inverted
                />
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/accessibility"
                    className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-canvas transition hover:-translate-y-0.5 hover:bg-gold/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                  >
                    {t.accessibilitySpotlight.primaryCta}
                    <ArrowIcon className="h-4 w-4" />
                  </Link>
                  <a
                    href={CONTACT_EMAIL_MAILTO}
                    className="inline-flex items-center gap-2 rounded-full border border-border/55 bg-surface px-6 py-3 text-sm font-semibold text-muted transition hover:-translate-y-0.5 hover:border-gold/60 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                  >
                    {t.accessibilitySpotlight.secondaryCta}
                    <MailIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="grid gap-4">
                {t.accessibilitySpotlight.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-[1.6rem] border border-border/50 bg-canvas px-5 py-5 backdrop-blur-sm"
                  >
                    <p className="text-base leading-7 text-muted">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="section-shell bg-surface/20 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="glass-panel overflow-hidden rounded-[2.2rem]" data-aos="fade-up">
            <div className="textile-band" />
            <div className="grid gap-10 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.05fr,0.95fr] lg:px-12 lg:py-12">
              <div>
                <SectionHeading
                  eyebrow={t.contact.eyebrow}
                  title={t.contact.title}
                  description={t.contact.body}
                />
              </div>

              <div className="flex flex-col justify-between gap-8 rounded-[1.8rem] border border-border/45 bg-canvas p-6">
                <p className="text-sm leading-7 text-muted">{t.contact.availability}</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={CONTACT_EMAIL_MAILTO}
                    className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-canvas transition hover:-translate-y-0.5 hover:bg-gold/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                  >
                    {t.contact.primaryCta}
                    <MailIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-surface px-6 py-3 text-sm font-semibold text-gold transition hover:-translate-y-0.5 hover:border-gold/45 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                  >
                    {t.contact.secondaryCta}
                    <ResumeIcon className="h-4 w-4" />
                  </a>
                </div>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <IconCircleLink key={link.label} link={link} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function AccessibilityPage({ t, sectionLink }) {
  return (
    <div className="section-shell px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28">
      <div className="mx-auto max-w-screen-xl">
        <nav
          aria-label={t.accessibilityPage.breadcrumb.label}
          className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted"
        >
          <Link
            to={sectionLink("#home")}
            className="rounded-full px-3 py-1 transition hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            {t.accessibilityPage.breadcrumb.home}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="rounded-full bg-surface px-3 py-1 text-ink">
            {t.accessibilityPage.breadcrumb.current}
          </span>
        </nav>

        <section className="glass-panel relative overflow-hidden rounded-[2.3rem] px-6 py-8 text-ink sm:px-8 sm:py-10 lg:px-12 lg:py-12" data-aos="fade-up">
          <div className="hero-motif absolute inset-0 opacity-50" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow={t.accessibilityPage.hero.eyebrow}
                title={t.accessibilityPage.hero.title}
                description={t.accessibilityPage.hero.subtitle}
                inverted
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to={sectionLink("#home")}
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-canvas transition hover:-translate-y-0.5 hover:bg-gold/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                >
                  {t.accessibilityPage.hero.primaryCta}
                  <ArrowIcon className="h-4 w-4" />
                </Link>
                <a
                  href={CONTACT_EMAIL_MAILTO}
                  className="inline-flex items-center gap-2 rounded-full border border-border/55 bg-surface px-6 py-3 text-sm font-semibold text-muted transition hover:-translate-y-0.5 hover:border-gold/60 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                >
                  {t.accessibilityPage.hero.secondaryCta}
                  <MailIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <TextileBand muted />

      <section className="mx-auto mt-16 max-w-screen-xl">
        <SectionHeading
          eyebrow={t.accessibilityPage.principles.eyebrow}
          title={t.accessibilityPage.principles.title}
          description={t.accessibilityPage.principles.description}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {t.accessibilityPage.principles.items.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.8rem] border border-border/50 bg-surface p-6 shadow-[0_16px_45px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-gold/40"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-screen-xl">
        <div className="grid gap-6 xl:grid-cols-[0.95fr,1.05fr]">
          <article className="glass-panel overflow-hidden rounded-[2rem]" data-aos="fade-up">
            <div className="textile-band textile-band-muted" />
            <div className="p-7 sm:p-9">
              <h2 className="font-display text-4xl leading-tight text-ink">
                {t.accessibilityPage.context.title}
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted">
                {t.accessibilityPage.context.intro}
              </p>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-muted">
                {t.accessibilityPage.context.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-2 w-2 rounded-full bg-gold"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="rounded-[2rem] border border-border/55 bg-surface p-7 shadow-[0_18px_60px_rgba(0,0,0,0.22)] sm:p-9" data-aos="fade-up" data-aos-delay="120">
            <h2 className="font-display text-4xl leading-tight text-ink">
              {t.accessibilityPage.engagement.title}
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted">
              {t.accessibilityPage.engagement.intro}
            </p>
            <div className="mt-8 grid gap-4">
              {t.accessibilityPage.engagement.phases.map((phase, index) => (
                <div
                  key={phase.title}
                  className="rounded-[1.5rem] border border-border/45 bg-canvas px-5 py-5"
                >
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-gold">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-ink">
                    {phase.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{phase.body}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-screen-xl">
        <div className="glass-panel overflow-hidden rounded-[2.2rem]" data-aos="fade-up">
          <div className="textile-band" />
          <div className="grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.05fr,0.95fr] lg:px-12 lg:py-12">
            <div>
              <SectionHeading
                eyebrow={t.accessibilityPage.hero.eyebrow}
                title={t.accessibilityPage.cta.title}
                description={t.accessibilityPage.cta.body}
              />
            </div>
            <div className="flex flex-col justify-between gap-6 rounded-[1.8rem] border border-border/45 bg-canvas p-6">
              <div className="flex flex-wrap gap-3">
                <a
                  href={CONTACT_EMAIL_MAILTO}
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-canvas transition hover:-translate-y-0.5 hover:bg-gold/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                >
                  {t.accessibilityPage.cta.primaryCta}
                  <MailIcon className="h-4 w-4" />
                </a>
                <Link
                  to={sectionLink("#home")}
                  className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-surface px-6 py-3 text-sm font-semibold text-gold transition hover:-translate-y-0.5 hover:border-gold/45 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                >
                  {t.accessibilityPage.cta.secondaryCta}
                  <ArrowIcon className="h-4 w-4" />
                </Link>
              </div>
              <p className="text-sm leading-7 text-muted">{t.accessibilityPage.note}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SiteFooter({ t, socialLinks, currentYear, sectionLink }) {
  return (
    <footer className="border-t border-border/45 bg-canvas/80 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-display text-3xl font-semibold tracking-[-0.04em] text-ink">{t.footer.name}</p>
            <p className="mt-2 max-w-xl text-sm leading-7 text-muted">
              {t.footer.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <IconCircleLink key={link.label} link={link} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border/45 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-4">
            {t.footer.links.map((link) => (
              <Link
                key={link.label}
                to={sectionLink(link.href)}
                className="rounded-full transition hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p>
            Copyright {currentYear} {t.footer.name}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

function SiteApp() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [navOpen, setNavOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [language, setLanguage] = useState("en");
  const location = useLocation();
  const isAccessibilityPage = location.pathname === "/accessibility";
  const t = translations[language];
  const currentYear = new Date().getFullYear();
  const sectionLink = (href) => (href.startsWith("#") ? `/${href}` : href);
  const closeNav = () => setNavOpen(false);
  const nextTheme = theme === "dark" ? "light" : "dark";
  const themeToggleLabel = t.nav.themeToggle[nextTheme];
  const handleLanguageChange = (nextLanguage) => {
    setLanguage(nextLanguage);
    closeNav();
  };
  const handleThemeToggle = () => {
    setTheme((currentTheme) => {
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      writeStoredTheme(newTheme);
      return newTheme;
    });
  };
  const handleBackToTop = () => {
    closeNav();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };
  const socialLinks = [
    {
      label: t.social.linkedin,
      href: "https://www.linkedin.com/in/danielchavez2/",
      external: true,
      icon: LinkedInIcon,
    },
    {
      label: t.social.github,
      href: "https://github.com/dchavez3395",
      external: true,
      icon: GitHubIcon,
    },
    {
      label: t.social.mail,
      href: CONTACT_EMAIL_MAILTO,
      external: false,
      icon: MailIcon,
    },
    {
      label: t.social.resume,
      href: RESUME_URL,
      external: true,
      icon: ResumeIcon,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      disable: () =>
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
      return;
    }

    const targetId = location.hash.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
    const handleSystemThemeChange = (event) => {
      if (readStoredTheme()) {
        return;
      }

      setTheme(event.matches ? "light" : "dark");
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  useEffect(() => {
    document.title = isAccessibilityPage
      ? t.meta.accessibilityTitle
      : t.meta.homeTitle;
  }, [isAccessibilityPage, t.meta.accessibilityTitle, t.meta.homeTitle]);

  useEffect(() => {
    AOS.refreshHard();
  }, [language, isAccessibilityPage]);

  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      const scrollY = window.scrollY;
      setHasScrolled(scrollY > 12);
      setShowBackToTop(scrollY > 520);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    updateScrollState();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="site-shell min-h-screen text-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-canvas focus:outline-none focus:ring-2 focus:ring-gold"
      >
        {t.nav.skipLink}
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${
          hasScrolled ? "shadow-[0_18px_55px_rgba(0,0,0,0.28)]" : ""
        }`}
      >
        <div className={`textile-band transition-opacity duration-300 ${hasScrolled ? "opacity-80" : "opacity-100"}`} />
        <div
          className={`border-b backdrop-blur-xl transition-colors duration-300 ${
            hasScrolled
              ? "border-border/70 bg-canvas/95"
              : "border-border/50 bg-canvas/90"
          }`}
        >
          <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
            <Link
              to={sectionLink("#home")}
              onClick={closeNav}
              className="rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
              <div className="font-display text-3xl font-semibold leading-none tracking-[-0.04em] text-ink sm:text-4xl">
                Daniel Chavez
              </div>
              <div className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-muted">
                Full-stack web developer
              </div>
            </Link>

            <div className="hidden items-center gap-6 lg:flex">
              <nav aria-label={t.nav.primaryLabel}>
                <ul className="flex items-center gap-5 text-sm font-medium text-ink">
                  {t.nav.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        to={sectionLink(item.href)}
                        className="rounded-full px-3 py-2 transition hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="flex items-center gap-2">
                <div
                  aria-label={t.nav.languageLabel}
                  className="flex items-center gap-1 rounded-full border border-border/50 bg-surface p-1"
                >
                  {languageOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      aria-pressed={language === option.id}
                      onClick={() => handleLanguageChange(option.id)}
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] transition ${
                        language === option.id
                          ? "bg-gold text-canvas"
                          : "text-muted hover:text-gold"
                      } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-canvas`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                <div aria-label={t.nav.themeLabel}>
                  <ThemeToggleButton
                    theme={theme}
                    label={themeToggleLabel}
                    onToggle={handleThemeToggle}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center lg:hidden">
              <button
                type="button"
                aria-expanded={navOpen}
                aria-controls="mobile-navigation"
                aria-label={navOpen ? t.nav.toggleClose : t.nav.toggleOpen}
                onClick={() => setNavOpen((open) => !open)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border/50 bg-surface text-ink transition hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                {navOpen ? (
                  <CloseIcon className="h-5 w-5" />
                ) : (
                  <MenuIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div
            id="mobile-navigation"
            aria-hidden={!navOpen}
            className={`${navOpen ? "block" : "hidden"} border-t border-border/50 lg:hidden`}
          >
            <nav aria-label={t.nav.primaryLabel} className="px-4 py-4 sm:px-6">
              <ul className="grid gap-2">
                {t.nav.items.map((item) => (
                  <li key={`${item.href}-mobile`}>
                    <Link
                      to={sectionLink(item.href)}
                      onClick={closeNav}
                      className="block rounded-[1.2rem] border border-transparent bg-surface px-4 py-3 text-sm font-medium text-ink transition hover:border-gold/30 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-border/50 px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between gap-4">
                <div
                  aria-label={t.nav.languageLabel}
                  className="flex items-center gap-1 rounded-full border border-border/50 bg-surface p-1"
                >
                  {languageOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      aria-pressed={language === option.id}
                      onClick={() => handleLanguageChange(option.id)}
                      className={`rounded-full px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] transition ${
                        language === option.id
                          ? "bg-gold text-canvas"
                          : "text-muted hover:text-gold"
                      } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-canvas`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>

                <div aria-label={t.nav.themeLabel}>
                  <ThemeToggleButton
                    theme={theme}
                    label={themeToggleLabel}
                    onToggle={handleThemeToggle}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div aria-hidden="true" className="h-[5.75rem]" />

      <main id="main-content" tabIndex="-1" className="outline-none">
        {isAccessibilityPage ? (
          <AccessibilityPage t={t} sectionLink={sectionLink} />
        ) : (
          <>
            <HomePage
              t={t}
              language={language}
              sectionLink={sectionLink}
              socialLinks={socialLinks}
            />
            <HomePageEnd t={t} socialLinks={socialLinks} />
          </>
        )}
      </main>

      <SiteFooter
        t={t}
        socialLinks={socialLinks}
        currentYear={currentYear}
        sectionLink={sectionLink}
      />

      <button
        type="button"
        aria-label={t.nav.backToTop}
        aria-hidden={!showBackToTop}
        title={t.nav.backToTop}
        tabIndex={showBackToTop ? 0 : -1}
        onClick={handleBackToTop}
        className={`fixed bottom-5 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold text-canvas shadow-[0_18px_45px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-gold/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:bottom-6 sm:right-6 ${
          showBackToTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <ArrowIcon className="h-5 w-5 -rotate-90" />
      </button>
    </div>
  );
}

export default SiteApp;
