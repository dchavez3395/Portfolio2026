// All content data for the portfolio — projects, case studies, resume, a11y

export const EMAIL = "dchavez3395@gmail.com";
export const EMAIL_HREF = `mailto:${EMAIL}`;
export const RESUME_HREF = "/Daniel_Chavez_Resume.pdf";
export const LINKEDIN_HREF = "https://www.linkedin.com/in/danielchavez2/";
export const GITHUB_HREF = "https://github.com/dchavez3395";

export const projects = [
  {
    id: "puchica",
    title: "Puchica",
    domain: "puchica.ca",
    demo: "https://puchica.ca/",
    discipline: "E-commerce",
    stack: "Shopify Hydrogen · React",
    featured: true,
    brand: "#6D4CFF",
    logo: "/puchica.svg",
    image: "/case-puchica.jpg",
    role: "Sole developer — full Shopify Hydrogen storefront built from an empty repo: custom React components, collection taxonomy, SEO infrastructure, and Shopify Admin API integration.",
  },
  {
    id: "telus",
    title: "TELUS Reconciliation Report",
    domain: "reconciliationreport.telus.com",
    demo: "https://reconciliationreport.telus.com/",
    discipline: "Annual report",
    stack: "React · Headless CMS",
    featured: true,
    brand: "#4B286D",
    logo: "/telus.webp",
    image: "/case-telus.jpg",
    role: "Multi-section React build with a client-controlled CMS, accessible data visualizations, and a publishing workflow for the report's ongoing lifecycle.",
  },
  {
    id: "tamalpais",
    title: "Tamalpais Trust",
    domain: "tamalpaistrust.com",
    demo: "https://tamalpaistrust.wpenginepowered.com/",
    discipline: "Indigenous grantmaking",
    stack: "WordPress · Interactive map",
    featured: true,
    brand: "#7C2D48",
    logo: "/tamalpais.png",
    image: "/case-tamalpais.jpg",
    role: "Public site for an Indigenous-led grantmaking organization: multi-region grant-partner directory, interactive map, community-investments showcase, and an editor-run publishing workflow.",
  },
  {
    id: "mcgillbop",
    title: "McGill Bodies of Power",
    domain: "mcgillbop.wpenginepowered.com",
    demo: "https://mcgillbop.wpenginepowered.com/",
    discipline: "Indigenous education",
    stack: "WordPress · Interactive",
    featured: false,
    brand: "#B04010",
    logo: "/mcgillbop-logo.jpg",
    image: "/case-mcgillbop.jpg",
    role: "Public site for a McGill-based Onkwehón:we nutrition education initiative: editorial content, course and resource pages, and a CMS the academic team updates without developer involvement.",
  },
  {
    id: "ravenspace",
    title: "Raven Space",
    domain: "ravenspacepublishing.org",
    demo: "https://developmentserver.ravenspacepublishing.org/the-cherokee-natural-world/index",
    discipline: "Interactive publication",
    stack: "Scalar · CMS · Editorial",
    featured: true,
    brand: "#1C1A17",
    logo: "/ravenspace.png",
    image: "/case-ravenspace.jpg",
    role: "Interactive digital publication: rich-text editorial layout, embedded-media handling, and a CMS for managing book releases and author content.",
  },
  {
    id: "perimeter",
    title: "Perimeter Aviation",
    domain: "perimeter.ca",
    demo: "https://perimeter.ca/",
    discipline: "Aviation",
    stack: "WordPress · CMS",
    featured: false,
    brand: "#E8590C",
    logo: "/perimeter.png",
    role: "Rebuilt the public site: route schedules, fleet information, and a CMS so staff update schedules and content without developer involvement.",
  },
  {
    id: "fpegf",
    title: "First People's Economic Growth Fund",
    domain: "firstpeoplesfund.ca",
    demo: "https://firstpeoplesfund.ca/",
    discipline: "Funding programs",
    stack: "WordPress · CMS",
    featured: false,
    brand: "#5E6B23",
    logo: "/fpegf.png",
    role: "Built and maintained the fund's site: program application forms, grant-management workflows, and a CMS the team publishes to without touching code.",
  },
  {
    id: "iymp",
    title: "IYMP",
    domain: "iymp.ca",
    demo: "https://iymp.ca/",
    discipline: "Youth mentorship",
    stack: "WordPress · CMS",
    featured: false,
    brand: "#14707E",
    logo: "/iymp.png",
    role: "Built and supported the site: program information, event calendars, resource downloads, and a CMS the team uses to keep things current.",
  },
  {
    id: "macy",
    title: "MACY",
    domain: "manitobaadvocate.ca",
    demo: "https://manitobaadvocate.ca/",
    discipline: "Youth advocacy",
    stack: "WordPress · CMS",
    featured: false,
    brand: "#5B3A9B",
    logo: "/macy.png",
    role: "Built and maintained the Manitoba Advocate site: reports, case data, and a CMS so staff keep pace with ongoing advocacy work.",
  },
  {
    id: "mbtrades",
    title: "MB Trades",
    domain: "mbtrades.ca",
    demo: "https://www.mbtrades.ca/",
    discipline: "Building trades",
    stack: "WordPress · CMS",
    featured: false,
    brand: "#16294D",
    logo: "/mbt.png",
    role: "Built and maintained the site: membership directory, apprenticeship resources, a news section, and a CMS so union staff publish without filing a ticket.",
  },
  {
    id: "ceda",
    title: "CEDA",
    domain: "cedawpg.org",
    demo: "https://cedawpg.org/",
    discipline: "Community education",
    stack: "WordPress · CMS",
    featured: false,
    brand: "#3E8E5A",
    logo: "/ceda.webp",
    role: "Built and maintained the site: program information, event calendars, and a CMS so the team keeps content current without a developer for every update.",
  },
];

export const caseStudies = {
  puchica: {
    brief:
      "Puchica is a curated retail brand rooted in Central American and pre-Hispanic heritage. They wanted a storefront that carried that identity through every page, not a dressed-up template.",
    built:
      "A React storefront on Shopify Hydrogen, built from an empty repository. Custom components for collections and product pages, a taxonomy that keeps a growing catalogue navigable, SEO baked into the routing rather than bolted on, and an integration with the Shopify Admin API so merchandising stays in Shopify where the team already works.",
    details: [
      "A reusable component library that scales as the catalogue grows",
      "Server-rendered for speed and search visibility",
      "Admin API integration — the client never edits code to merchandise",
    ],
  },
  telus: {
    brief:
      "TELUS publishes an annual Indigenous reconciliation report. It has to be credible, accessible, and fully updatable by their own team long after launch.",
    built:
      "A multi-section React build fronted by a client-controlled CMS. The data visualizations were built to be read by screen readers and operated by keyboard, not just looked at. A publishing workflow lets TELUS revise the report across its lifecycle with no developer in the loop.",
    details: [
      "Accessible data visualizations, not image-only charts",
      "Client-controlled CMS for the full report lifecycle",
      "Section architecture that holds up as content grows",
    ],
  },
  tamalpais: {
    brief:
      "Tamalpais Trust is an Indigenous-led grantmaking organization. The site had to make a distributed network of grant partners legible to the public.",
    built:
      "A public site with a multi-region grant-partner directory, an interactive map of that network, a community-investments showcase, and a publishing workflow the team runs themselves.",
    details: [
      "An interactive map tying partners to their regions",
      "A directory structured to stay browsable as the network grows",
      "Editor-run publishing for ongoing updates",
    ],
  },
  ravenspace: {
    brief:
      "Raven Space Publishing makes interactive digital books. The reading experience had to feel like a publication, not a web page.",
    built:
      "An interactive digital publication with a rich-text editorial layout, embedded-media handling for mixed content, and a CMS built around managing book releases and author material.",
    details: [
      "An editorial layout system tuned for long-form reading",
      "Embedded-media handling across mixed content types",
      "A CMS organized around book releases and authors",
    ],
  },
};

export const pathItems = [
  {
    title: "Web Developer — Vincent Design Inc.",
    period: "Jan 2023 – Jul 2026",
    body: "Built and maintained responsive production websites and web apps for agencies and the organizations they serve. Worked across React, Node.js, PHP, and WordPress, building reusable UI components, scalable styling systems with SCSS and Tailwind, and back-end integrations with REST APIs. Partnered directly with designers in Figma to ship accessible, WCAG-compliant interfaces. Owned deployments via Vercel, WP Engine, and Flywheel. Ten-plus shipped projects across annual reports, Indigenous communities and non-profits, public information, and e-commerce.",
  },
  {
    title: "Front-End Developer — Freelance",
    period: "Aug 2021 – Present",
    body: "Convert design mockups into responsive, cross-browser applications using React, JavaScript, HTML, and CSS. Add dynamic functionality with AJAX and JSON, build reusable component libraries to accelerate client delivery, and debug, refactor, and optimize legacy codebases for maintainability and performance. Active alongside agency work and available for select projects.",
  },
  {
    title: "Special Finance Manager — Birchwood Credit Solutions",
    period: "Nov 2018 – Jul 2021",
    body: "Structured automotive finance deals across all credit tiers, managing full F&I responsibilities from submission to funding. Worked daily in detail-heavy digital systems like Dealertrack, building strong comfort with data, documentation, and process under deadline pressure.",
  },
  {
    title: "Business Development Manager — Birchwood Nissan Brandon",
    period: "Jan 2018 – Nov 2018",
    body: "Managed sales pipelines and CRM lead workflows to improve appointment conversion and follow-up discipline. Where I learned stakeholder communication, relationship ownership, and what it means to be accountable to a number.",
  },
];

export const credentials = [
  "Complete Full-Stack Web Development Bootcamp — Dr. Angela Yu, Udemy",
  "Modern PHP: Beginner to Advanced — Jannis Seemann, Udemy",
  "Web Accessibility Training — Deque University",
  "WCAG 2.1 AA as a working benchmark, not an afterthought",
  "Bilingual — English and Spanish (fluent, C2)",
  "AI-assisted workflows: Cursor, Copilot, Claude",
];

export const principles = [
  {
    title: "Production mindset",
    body: "I build past the first launch: content editing, component reuse, QA, deployment, and whatever the next person will need to understand.",
  },
  {
    title: "Inherited codebases",
    body: "I join projects mid-flight, read the existing patterns, and leave the code cleaner than I found it. No rewrite unless asked.",
  },
  {
    title: "Calm communication",
    body: "I keep status, blockers, and tradeoffs visible so the team always knows what's happening and why.",
  },
];

export const skillGroups = [
  {
    title: "Core stack",
    items: "JavaScript (ES6+) · React · Node.js · Express · REST APIs · HTML5 · SCSS/SASS · Tailwind CSS",
  },
  {
    title: "Also proficient",
    items: "PHP · EJS · Blade templating · WordPress (custom themes)",
  },
  {
    title: "Workflow & tooling",
    items: "Git & GitHub · Figma handoff · AI-assisted dev (Cursor, Copilot, Claude) · Responsive & cross-browser",
  },
  {
    title: "Deploy & quality",
    items: "Vercel · WP Engine · Flywheel · WCAG accessibility · SEO · Performance optimization · Cross-browser testing",
  },
];

export const a11yPoints = [
  "Semantic HTML before any custom behavior",
  "Keyboard and focus checks made during the build, not after",
  "Contrast and content decisions that survive real production content",
];

export const a11yPrinciples = [
  {
    title: "Structure first",
    body: "The right HTML — headings, landmarks, lists, labels — before reaching for custom behavior.",
  },
  {
    title: "Keyboard access",
    body: "Menus, links, forms, and interactive pieces reachable and understandable without a mouse.",
  },
  {
    title: "Readable interfaces",
    body: "Contrast, type size, spacing, form messaging, and hierarchy that hold up across devices.",
  },
  {
    title: "Sustainable fixes",
    body: "Documented patterns and component decisions, so improvements survive the next round of edits.",
  },
];

export const a11yStandards = [
  "The Accessible Canada Act applies to federally regulated organizations and Crown corporations.",
  "The Accessibility for Manitobans Act shapes obligations for many organizations in Manitoba.",
  "The Accessibility for Ontarians with Disabilities Act sets standards for organizations operating in Ontario.",
  "Human-rights obligations across provinces reinforce the need for reasonable accommodation.",
  "WCAG 2.1 AA is the benchmark most teams use for web accessibility reviews.",
];

export const a11yPhases = [
  {
    title: "Review",
    body: "Templates, components, and key flows checked with automated tools plus manual keyboard and screen-reader-aware review.",
  },
  {
    title: "Fix",
    body: "Findings turned into front-end, CMS, and content changes that fit the existing codebase and release plan.",
  },
  {
    title: "Document",
    body: "Notes on patterns, editor guidance, and QA checks so the same issues are less likely to come back.",
  },
];