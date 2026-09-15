// All content data for the portfolio — projects, case studies, resume, a11y

export const EMAIL = "dchavez3395@gmail.com";
export const EMAIL_HREF = `mailto:${EMAIL}`;
export const RESUME_HREF = "/Daniel_Chavez_Developer_Resume.pdf";
export const LINKEDIN_HREF = "https://www.linkedin.com/in/danielchavez2/";
export const GITHUB_HREF = "https://github.com/dchavez3395";

export const projects = [
  {
    id: "telus",
    title: "TELUS Reconciliation Report",
    domain: "reconciliationreport.telus.com",
    demo: "https://reconciliationreport.telus.com/",
    discipline: "Annual report",
    stack: "WordPress · ACF · Accessible data viz",
    featured: true,
    brand: "#4B286D",
    logo: "/telus.webp",
    image: "/case-telus.jpg",
    role: "Custom WordPress and ACF build: hand-written blocks for each report section, data visualizations that work by keyboard and screen reader, and an editing workflow TELUS's own team runs for the report's ongoing lifecycle.",
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
    id: "puchica",
    title: "Puchica",
    domain: "puchica.ca",
    demo: "https://puchica.ca/",
    discipline: "E-commerce",
    stack: "Shopify Hydrogen · React",
    featured: false,
    brand: "#6D4CFF",
    logo: "/puchica.svg",
    image: "/case-puchica.jpg",
    role: "Sole developer — custom Shopify Hydrogen storefront built from an empty repo: React components, a four-locale internationalized build (EN, FR, ES, PT-BR), collection taxonomy, and SEO infrastructure for Canada and the US.",
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
      "Puchica is a self-directed e-commerce venture rooted in Central American heritage. The goal was a storefront that carried that identity through every page — an indigo story drawn from El Salvador's two centuries in the dye trade, not a palette picked off a template.",
    built:
      "A React storefront on Shopify Hydrogen, built from an empty repository and shipped in four locales — English, French, Spanish and Brazilian Portuguese — localized down to per-locale page titles, meta descriptions, navigation and policy pages rather than machine-swapped body copy. Custom components for collections and product pages, SEO built into the routing, and a brand system that holds the same voice from the homepage through to checkout. Merchandising stays in Shopify Admin.",
    details: [
      "Four live locales — EN, FR, ES and PT-BR — localized to per-locale meta and policy pages",
      "A brand system carried through copy, palette and product presentation, not applied as a skin",
      "Server-rendered on Hydrogen for speed and search visibility",
    ],
  },
  telus: {
    brief:
      "TELUS publishes an annual Indigenous reconciliation report. It has to be credible, accessible, and fully updatable by their own team long after launch.",
    built:
      "A custom WordPress theme in PHP with hand-built ACF blocks for each section of the report, rather than a page builder. The data visualizations were built to be read by screen readers and operated by keyboard, not just looked at. The editing workflow lets TELUS revise the report across its lifecycle with no developer in the loop.",
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
    body: "Built and maintained responsive production websites and web apps for the agency's clients. Worked across React, JavaScript, PHP, and WordPress, creating reusable UI components, scalable SCSS and Tailwind systems, and REST API integrations. Collaborated with designers in Figma, performed accessibility QA, and supported deployments through Vercel, WP Engine, and Flywheel. Contributed to ten-plus projects across annual reports, Indigenous communities and non-profits, public information, and e-commerce.",
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
    body: "Managed lead workflows and follow-up discipline in a business development role. Where I learned stakeholder communication, owning a process end to end, and what it means to be accountable for an outcome.",
  },
  {
    title: "Sales Consultant — Birchwood Nissan Brandon",
    period: "May 2015 – Jan 2018",
    body: "Used consultative selling, product knowledge, follow-up, and negotiation to guide customers through high-consideration vehicle purchases. Maintained the dealership's highest closing ratio in 2016 and 2018 and received the Bronze Nissan Club Excellence Award in 2016.",
  },
  {
    title: "Additional Sales Experience — Combined Insurance, House of Nissan & The Source",
    period: "Earlier career",
    body: "Built a broad sales foundation through door-to-door insurance prospecting, automotive sales, and consumer-technology retail. Developed comfort initiating conversations, explaining complex products, handling objections, following up, and asking for the business.",
  },
];

export const credentials = [
  "Complete Full-Stack Web Development Bootcamp — Dr. Angela Yu, Udemy",
  "Modern PHP: Beginner to Advanced — Jannis Seemann, Udemy",
  "Web Accessibility Training — Deque University",
  "WCAG 2.1 AA as a working benchmark, not an afterthought",
  "Bilingual — English and Spanish",
  "AI-assisted workflows: Cursor, Copilot, Claude",
];

export const commercialHighlights = [
  {
    title: "Adjudicating against a written standard",
    body: "Three years adjudicating consumer credit on a dealership group's in-house lending book, across prime and non-prime. Read the file, test it against the policy that governs it, document what fails. It is the same habit an accessibility audit runs on, which is why the audit work came naturally.",
  },
  {
    title: "Evidence and verification",
    body: "Analyzed credit files and verified income and identity documentation on every deal, reconciling what an applicant stated against what the file actually supported. Working under documented conditions and real deadlines is where the discipline behind my QA comes from.",
  },
  {
    title: "Explaining technical things to people who aren't technical",
    body: "Years of client-facing work, in English and Spanish, spent explaining structures and tradeoffs to people who had not seen them before. On a build team that turns into clear writing in a ticket and a client who understands why a fix matters.",
  },
];

export const serviceOffers = [
  {
    label: "Build",
    title: "Custom WordPress development",
    price: "Primary",
    body: "Hand-written themes in PHP, native Gutenberg blocks and ACF blocks built to match a design rather than approximate it, and an editing experience the client's team can actually use. No page-builder bloat underneath.",
    fit: "Best fit for agencies and in-house teams who want the design shipped as drawn and a CMS their editors won't break.",
  },
  {
    label: "Accessibility",
    title: "WCAG 2.2 AA audit & remediation",
    price: "Primary",
    body: "Conformance audits against the published standard, every finding documented in terms the person fixing it can act on, and remediation tracked through to closure. Deque University trained.",
    fit: "For public-sector work and any project where conformance is written into the contract and somebody has to stand behind it.",
  },
  {
    label: "Rescue",
    title: "Inherited builds & ongoing care",
    price: "Available",
    body: "Joining a codebase mid-flight, reading the existing patterns, fixing what's broken, and leaving it cleaner without demanding a rewrite. Plus the unglamorous part: updates, migrations, and support after launch.",
    fit: "For teams carrying a site someone else built and needing it to keep working.",
  },
  {
    label: "Front end",
    title: "Design-faithful front-end work",
    price: "Available",
    body: "Figma handoff to responsive, mobile-first build, holding the line on spacing, type, contrast and focus states through to launch. React and Next.js when a project calls for them.",
    fit: "For design-led studios who are tired of builds drifting from the file.",
  },
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
    title: "WordPress & PHP",
    items: "Custom theme development · PHP · Advanced Custom Fields · Native Gutenberg blocks · ACF blocks · MySQL · WP Engine · Flywheel",
  },
  {
    title: "Accessibility",
    items: "WCAG 2.0 / 2.1 / 2.2 AA auditing · ARIA patterns · Keyboard navigation · Focus & contrast management · Semantic structure · Remediation tracking",
  },
  {
    title: "Front end",
    items: "HTML · CSS / SCSS · JavaScript (ES6+) · Responsive & mobile-first · Figma handoff · Cross-browser QA · Performance · SEO",
  },
  {
    title: "Also worked with",
    items: "React · Next.js · TypeScript · Tailwind · Node.js · REST APIs · Git & GitHub · AI-assisted workflows",
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
