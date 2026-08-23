/**
 * Prerenders every route in dist/ to real HTML, plus sitemap.xml and robots.txt.
 *
 * Two problems this solves, both of which cost applications rather than
 * pageviews:
 *
 *   1. A crawler or link-preview bot that does not run JavaScript sees an empty
 *      shell. LinkedIn, Slack, iMessage and most email clients do not run it,
 *      so a pasted link renders as bare text instead of a card.
 *   2. On a static host a deep link like /work/telus 404s unless something
 *      exists at that path. Writing dist/work/telus/index.html makes deep links
 *      real without depending on a rewrite rule.
 *
 * It renders with react-dom/server, not a headless browser. The production
 * build runs on Vercel where no browser binary is available, so a
 * browser-driven prerender would fail the deploy.
 *
 * Run by `npm run build`, after both the client and SSR Vite builds.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");
const ORIGIN = "https://www.danieldev.ca";

const { render } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
);
const { projects, caseStudies } = await import(
  pathToFileURL(path.join(root, "src", "portfolio-data.js")).href
);

const SHARED_DESCRIPTION =
  "Presales and solutions engineering, implementation and customer success, and hands-on web, CMS and accessibility delivery. Winnipeg · Remote · EN / ES.";

const ROUTES = [
  {
    path: "/",
    title: "Daniel Chavez — Technical solutions, sales & client delivery",
    description: SHARED_DESCRIPTION,
  },
  {
    path: "/resume",
    title: "Résumé — Daniel Chavez",
    description:
      "Résumé for Daniel Chavez: production web development, client delivery, automotive finance, CRM and consultative sales. Winnipeg, MB — open to remote roles.",
  },
  {
    path: "/accessibility",
    title: "Accessibility — Daniel Chavez",
    description:
      "How I build accessible interfaces: WCAG-aligned delivery, keyboard and screen-reader testing, and accessibility treated as part of the build rather than a final checklist.",
  },
  // One route per case study that actually has a written study behind it.
  ...projects
    .filter((project) => caseStudies[project.id])
    .map((project) => ({
      path: `/work/${project.id}`,
      title: `${project.title} — Daniel Chavez`,
      description: `${project.title} (${project.discipline}) — ${project.stack}. ${project.role}`
        .replace(/\s+/g, " ")
        .slice(0, 300),
    })),
];

const escapeAttr = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

/** Swap the shell's placeholder head values for this route's real ones. */
function applyMeta(html, route) {
  const url = `${ORIGIN}${route.path}`;
  const title = escapeAttr(route.title);
  const description = escapeAttr(route.description);

  const swaps = [
    [/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`],
    [/(<meta\s+name="description"\s+content=")[\s\S]*?(")/, `$1${description}$2`],
    [/(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${url}$2`],
    [/(<meta\s+property="og:url"\s+content=")[^"]*(")/, `$1${url}$2`],
    [/(<meta\s+property="og:title"\s+content=")[\s\S]*?(")/, `$1${title}$2`],
    [/(<meta\s+property="og:description"\s+content=")[\s\S]*?(")/, `$1${description}$2`],
    [/(<meta\s+name="twitter:title"\s+content=")[\s\S]*?(")/, `$1${title}$2`],
    [/(<meta\s+name="twitter:description"\s+content=")[\s\S]*?(")/, `$1${description}$2`],
  ];

  return swaps.reduce((acc, [pattern, replacement]) => {
    if (!pattern.test(acc)) {
      // A silently un-replaced tag would ship every page with the home page's
      // card, which is the bug this script exists to prevent.
      throw new Error(`prerender: no match for ${pattern} on ${route.path}`);
    }
    return acc.replace(pattern, replacement);
  }, html);
}

const shell = await fs.readFile(path.join(dist, "index.html"), "utf8");
if (!shell.includes('<div id="root"></div>')) {
  throw new Error('prerender: could not find <div id="root"></div> in the shell');
}

for (const route of ROUTES) {
  const body = render(route.path);
  if (!body || body.length < 500) {
    throw new Error(`prerender: no content rendered for ${route.path}`);
  }

  const html = applyMeta(shell, route).replace(
    '<div id="root"></div>',
    `<div id="root">${body}</div>`,
  );

  const dir =
    route.path === "/"
      ? dist
      : path.join(dist, ...route.path.split("/").filter(Boolean));
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, "index.html"), html);
  console.log(
    `prerendered ${route.path.padEnd(20)} ${(body.length / 1024).toFixed(1)} kB`,
  );
}

// Generated from the same route list so the sitemap cannot drift from reality.
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
  (route) =>
    `  <url><loc>${ORIGIN}${route.path}</loc>` +
    `<priority>${route.path === "/" ? "1.0" : "0.8"}</priority></url>`,
).join("\n")}
</urlset>
`;
await fs.writeFile(path.join(dist, "sitemap.xml"), sitemap);
await fs.writeFile(
  path.join(dist, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}/sitemap.xml\n`,
);
console.log(`wrote sitemap.xml (${ROUTES.length} urls) and robots.txt`);
