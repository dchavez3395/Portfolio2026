import telusImage from "./assets/telus.webp";
import iympImage from "./assets/iymp.png";
import mbTradesImage from "./assets/mbt.png";
import manitobaAdvocateImage from "./assets/macy.png";
import cedawpgImage from "./assets/ceda.webp";
import fpegfImage from "./assets/FPEGF.png";
import ravenSpaceImage from "./assets/ravenspace.png";
import perimeterImage from "./assets/Perimeter.png";

export const CONTACT_EMAIL = "dchavez3395@gmail.com";
export const CONTACT_EMAIL_MAILTO = `mailto:${CONTACT_EMAIL}`;
export const RESUME_URL =
  "https://drive.google.com/file/d/14YB6WlofnTUA1mYMaB8LVPW8YuWfgOo7/view?usp=sharing";

export const languageOptions = [
  { id: "en", label: "EN" },
  { id: "es", label: "ES" },
];

export const projects = [
  {
    title: "Puchica",
    domain: "shop.puchica.ca",
    image: "/puchica-logo.svg",
    demo: "https://shop.puchica.ca/",
    accent: "from-[#6D4CFF] via-[#8A78FA] to-[#241B9B]",
    preview: "from-[#6D4CFF]/20 via-[#8A78FA]/10 to-transparent",
    category: {
      en: "E-commerce",
      es: "Comercio electrónico",
    },
    summary: {
      en: "Built a full Shopify Hydrogen storefront from scratch for a curated Canadian e-commerce brand. Custom React components, SEO infrastructure, collection taxonomy, and Shopify Admin API integration.",
      es: "Construí un storefront completo de Shopify Hydrogen desde cero para una marca de comercio electrónico canadiense. Componentes React personalizados, infraestructura SEO, taxonomía de colecciones e integración con la API de Admin de Shopify.",
    },
  },
  {
    title: "Tamalpais Trust",
    domain: "tamalpaistrust.com",
    image: "/tamalpais-logo.png",
    demo: "https://tamalpaistrust.wpenginepowered.com/",
    accent: "from-[#7B2D8B] via-[#D4A843] to-[#2D6B4F]",
    preview: "from-[#7B2D8B]/20 via-[#D4A843]/10 to-transparent",
    category: {
      en: "Non-profit",
      es: "Sin fines de lucro",
    },
    summary: {
      en: "Built a public-facing site for an Indigenous-led grantmaking organization. Multi-region grant partner directory, interactive map, community investments showcase, and a publishing workflow for ongoing updates.",
      es: "Construí un sitio público para una organización de financiamiento indígena. Directorio de socios receptores, mapa interactivo, portafolio de inversiones comunitarias y flujo de publicación para actualizaciones continuas.",
    },
  },
  {
    title: "TELUS Reconciliation Report",
    domain: "reconciliationreport.telus.com",
    image: telusImage,
    demo: "https://reconciliationreport.telus.com/",
    accent: "from-gold via-clay to-berry",
    preview: "from-gold/20 via-clay/10 to-transparent",
    category: {
      en: "Annual Report",
      es: "Reporte anual",
    },
    summary: {
      en: "Built TELUS's annual reconciliation report site: multi-section React build with a client-controlled CMS, accessible data visualizations, and a publishing workflow for ongoing updates.",
      es: "Construí el sitio del informe anual de reconciliación de TELUS: build React multisección con CMS controlado por el cliente, visualizaciones de datos accesibles y flujo de publicación para actualizaciones continuas.",
    },
  },
  {
    title: "Perimeter Aviation",
    domain: "perimeter.ca",
    image: perimeterImage,
    demo: "https://perimeter.ca/",
    accent: "from-gold via-teal to-night",
    preview: "from-gold/20 via-teal/10 to-transparent",
    category: {
      en: "Aviation",
      es: "Aviación",
    },
    summary: {
      en: "Rebuilt Perimeter Aviation's public site: multi-page layout with route schedules, fleet information, and a CMS so staff can update schedules and content without developer involvement.",
      es: "Reconstruí el sitio público de Perimeter Aviation: layout multipágina con horarios de rutas, información de flota y CMS para que el personal actualice horarios y contenido sin depender del desarrollador.",
    },
  },
  {
    title: "First People's Economic Growth Fund",
    domain: "firstpeoplesfund.ca",
    image: fpegfImage,
    demo: "https://firstpeoplesfund.ca/",
    accent: "from-jade via-gold to-clay",
    preview: "from-jade/20 via-gold/10 to-transparent",
    category: {
      en: "Funding Programs",
      es: "Programas de financiamiento",
    },
    summary: {
      en: "Built and maintained the FPEGF site: program application forms, grant management workflows, and a CMS that lets the fund team publish updates without touching code.",
      es: "Construí y mantuve el sitio de FPEGF: formularios de solicitud de programas, flujos de trabajo para gestión de subvenciones y CMS que permite al equipo publicar actualizaciones sin tocar código.",
    },
  },
  {
    title: "Raven Space",
    domain: "ravenspacepublishing.org",
    image: ravenSpaceImage,
    demo: "https://developmentserver.ravenspacepublishing.org/the-cherokee-natural-world/index",
    accent: "from-night via-teal to-jade",
    preview: "from-night/20 via-teal/10 to-transparent",
    category: {
      en: "Interactive Publication",
      es: "Publicación interactiva",
    },
    summary: {
      en: "Built an interactive digital publication for Raven Space Publishing: rich-text editorial layout, embedded media handling, and a CMS for managing book releases and author content.",
      es: "Construí una publicación digital interactiva para Raven Space Publishing: layout editorial con texto enriquecido, manejo de medios embebidos y CMS para gestionar lanzamientos de libros y contenido de autores.",
    },
  },
  {
    title: "IYMP",
    domain: "iymp.ca",
    image: iympImage,
    demo: "https://iymp.ca/",
    accent: "from-teal via-jade to-gold",
    preview: "from-teal/20 via-jade/10 to-transparent",
    category: {
      en: "Youth Mentorship",
      es: "Mentoría juvenil",
    },
    summary: {
      en: "Built and supported the IYMP site: multi-page layout with program information, event calendars, resource downloads, and a CMS the team uses to post updates and keep things current.",
      es: "Construí y di soporte al sitio de IYMP: layout multipágina con información del programa, calendarios de eventos, descargas de recursos y CMS que el equipo usa para publicar actualizaciones.",
    },
  },
  {
    title: "MACY",
    domain: "manitobaadvocate.ca",
    image: manitobaAdvocateImage,
    demo: "https://manitobaadvocate.ca/",
    accent: "from-gold via-berry to-night",
    preview: "from-gold/20 via-berry/10 to-transparent",
    category: {
      en: "Youth Advocacy",
      es: "Defensores de la juventud",
    },
    summary: {
      en: "Built and maintained the MACY site: multi-page layout with reports, case data, and a CMS so staff can publish updates and keep pace with ongoing advocacy work.",
      es: "Construí y mantuve el sitio de MACY: layout multipágina con informes, datos de casos y CMS para que el personal publique actualizaciones sin depender del desarrollador.",
    },
  },
  {
    title: "MB Trades",
    domain: "mbtrades.ca",
    image: mbTradesImage,
    demo: "https://www.mbtrades.ca/",
    accent: "from-night via-berry to-gold",
    preview: "from-night/20 via-berry/10 to-transparent",
    category: {
      en: "Building Trades",
      es: "Trabajos de construcción",
    },
    summary: {
      en: "Built and maintained the MBT site: membership directory, apprenticeship resources, news section, and a CMS so union staff can publish updates without filing a ticket.",
      es: "Construí y mantuve el sitio de MBT: directorio de membresías, recursos de aprendizaje, sección de noticias y CMS para que el personal sindical publique actualizaciones sin abrir un ticket.",
    },
  },
  {
    title: "CEDA",
    domain: "cedawpg.org",
    image: cedawpgImage,
    demo: "https://cedawpg.org/",
    accent: "from-berry via-night to-teal",
    preview: "from-berry/20 via-night/10 to-transparent",
    category: {
      en: "Community Education",
      es: "Educación comunitaria",
    },
    summary: {
      en: "Built and maintained the CEDA site: multi-page layout with program information, event calendars, and a CMS so the team can keep content current without needing a developer for every update.",
      es: "Construí y mantuve el sitio de CEDA: layout multipágina con información de programas, calendarios de eventos y CMS para que el equipo mantenga el contenido actualizado sin depender de un desarrollador.",
    },
  },
];

export const translations = {
  en: {
    meta: {
      homeTitle: "Daniel Chavez | Full-Stack Web Developer",
      accessibilityTitle: "Daniel Chavez | Accessibility and Web Quality",
    },
    nav: {
      items: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Work", href: "#portfolio" },
        { label: "Skills", href: "#skills" },
        { label: "Accessibility", href: "/accessibility" },
        { label: "Contact", href: "#contact" },
      ],
      primaryLabel: "Primary navigation",
      toggleOpen: "Open menu",
      toggleClose: "Close menu",
      languageLabel: "Language selection",
      themeLabel: "Theme selection",
      themeToggle: {
        light: "Switch to light mode",
        dark: "Switch to dark mode",
      },
      skipLink: "Skip to main content",
      backToTop: "Back to top",
    },
    hero: {
      eyebrow: "Full-stack developer — Manitoba",
      title: "Production websites.\nBuilt to last.",
      description:
        "Accessible, maintainable sites — from initial build through ongoing improvement. Manitoba-based, open to remote.",
      primaryCta: "View Work",
      secondaryCta: "Accessibility",
      tertiaryCta: "Email Me",
      badges: [
        "React, WordPress, PHP, Node",
        "Accessible Front-End",
        "CMS Build & Support",
      ],
      visualEyebrow: "What I bring",
      visualTitle: "Useful across the build.",
      visualBody:
        "I work from Figma or existing code, build responsive interfaces, troubleshoot CMS issues, and keep designers, PMs, and QA informed about what is happening.",
      techStackLabel: "Tech stack",
      techStack: [
        "React",
        "Next.js",
        "PHP",
        "WordPress",
        "Node.js",
        "Tailwind",
        "Vue",
        "PostgreSQL",
      ],
      socialLabel: "Social and resume links",
    },
    story: {
      eyebrow: "About",
      title: "What I build for production teams.",
      intro:
        "I build and support accessible websites, work with production CMS platforms, and contribute across the full development lifecycle from initial build through ongoing maintenance.",
      body:
        "Most of my recent work has been with agencies and partner teams, building and supporting websites for organizations that need reliability more than novelty. I join existing codebases, understand how things actually work, and make steady improvements that stick.",

      cards: [
        {
          title: "Production Mindset",
          body: "I think beyond the first build: content editing, component reuse, QA, deployment, and what the next person will need to understand.",
        },
        {
          title: "Accessible Habits",
          body: "I use semantic markup, visible focus states, readable contrast, and predictable interaction patterns as part of normal front-end work.",
        },
        {
          title: "Calm Communication",
          body: "I keep status, blockers, and tradeoffs visible so the team knows what is happening and why.",
        },
      ],
    },
    work: {
      eyebrow: "Selected work",
      title: "Production sites I have helped ship and support.",
      intro:
        "A selection of projects spanning annual reports, non-profits, public information, membership sites, and e-commerce.",
      visit: "Visit Site",
    },
    practice: {
      eyebrow: "How I work",
      title: "How I show up on a project.",
      intro:
        "I am looking for a role where I can contribute steadily across build, QA, launch, and ongoing site improvement.",
      steps: [
        {
          number: "01",
          title: "Build From the Details",
          body: "I translate layouts into responsive components, watch spacing and interaction states, and keep the implementation close to the design intent.",
        },
        {
          number: "02",
          title: "Keep Content Manageable",
          body: "I care about CMS structure, reusable patterns, and editor-friendly decisions so a site is not painful to update after launch.",
        },
        {
          number: "03",
          title: "Support the Release",
          body: "I help with QA, accessibility checks, deployment details, bug fixes, and the follow-through work that keeps launches calm.",
        },
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Tools I use across the build.",
      intro:
        "Core tools from my resume, shown at a glance instead of another wall of text.",
      groups: [
        {
          title: "Front End",
          items: [
            { label: "JavaScript", icon: "javascript" },
            { label: "React", icon: "react" },
            { label: "Next.js", icon: "next" },
            { label: "Vue", icon: "vue" },
            { label: "HTML5", icon: "html" },
            { label: "CSS3", icon: "css" },
            { label: "Tailwind", icon: "tailwind" },
            { label: "Vite", icon: "vite" },
          ],
        },
        {
          title: "CMS and Back End",
          items: [
            { label: "WordPress", icon: "wordpress" },
            { label: "PHP", icon: "php" },
            { label: "Node.js", icon: "node" },
            { label: "Express.js", icon: "express" },
            { label: "PostgreSQL", icon: "postgres" },
            { label: "REST APIs", icon: "api" },
            { label: "Scalar", icon: "scalar" },
            { label: "Blade", icon: "blade" },
          ],
        },
        {
          title: "Workflow and QA",
          items: [
            { label: "Accessibility", icon: "accessibility" },
            { label: "Semantic HTML", icon: "semantic" },
            { label: "Keyboard QA", icon: "keyboard" },
            { label: "Contrast", icon: "contrast" },
            { label: "Responsive QA", icon: "responsive" },
            { label: "Figma", icon: "figma" },
            { label: "Git/GitHub", icon: "github" },
            { label: "Vercel", icon: "vercel" },
          ],
        },
      ],
    },
    accessibilitySpotlight: {
      eyebrow: "Accessibility",
      title: "Accessibility is part of how I build.",
      body: "I focus on the practical pieces teams can maintain: semantic structure, keyboard access, focus states, contrast, alt text, and clear content patterns.",
      primaryCta: "Accessibility Notes",
      secondaryCta: "Email Me",
      points: [
        "Semantic HTML before custom behavior",
        "Keyboard and focus checks during build",
        "Readable content and contrast decisions that hold up in production",
      ],
    },
    contact: {
      eyebrow: "Next role",
      title: "Open to full-time web developer roles.",
      body: "I am looking for a team where I can contribute to production websites, CMS work, front-end systems, accessibility QA, and ongoing improvement.",
      primaryCta: "Email Me",
      secondaryCta: "View Resume",
      availability:
        "Based in Manitoba. Open to remote-friendly teams and roles where front-end quality, CMS work, and accessibility matter.",
    },
    accessibilityPage: {
      breadcrumb: {
        label: "Breadcrumb",
        home: "Home",
        current: "Accessibility",
      },
      hero: {
        eyebrow: "Accessibility and Web Quality",
        title: "Accessible front-end work, handled practically.",
        subtitle:
          "I focus on the parts that make a website easier to use and easier to maintain: semantic HTML, keyboard paths, focus states, readable contrast, and clear content structure.",
        primaryCta: "Back to Home",
        secondaryCta: "Email Me",
        highlights: [
          "Semantic HTML and Page Landmarks",
          "Keyboard Paths and Visible Focus States",
          "Contrast, Labels, Alt Text, and Content Clarity",
        ],
      },
      principles: {
        eyebrow: "Approach",
        title: "Accessibility is easier when it is built in early.",
        description:
          "I look for issues during design handoff, component build, content entry, and QA instead of treating accessibility as a final checklist.",
        items: [
          {
            title: "Structure First",
            body: "Use the right HTML, headings, landmarks, lists, and labels before reaching for custom behavior.",
          },
          {
            title: "Keyboard Access",
            body: "Check that menus, links, forms, and interactive elements can be reached and understood without a mouse.",
          },
          {
            title: "Readable Interfaces",
            body: "Keep contrast, type size, spacing, form messages, and content hierarchy clear across devices.",
          },
          {
            title: "Sustainable Fixes",
            body: "Document patterns and component decisions so accessibility improvements survive future edits.",
          },
        ],
      },
      context: {
        title: "Standards and Risk",
        intro:
          "I am not a lawyer, but I understand why teams use WCAG as a practical benchmark for product quality, procurement, and risk reduction.",
        points: [
          "The Accessible Canada Act applies to federally regulated organizations and Crown corporations.",
          "The Accessibility for Manitobans Act shapes obligations for many organizations in Manitoba.",
          "The Accessibility for Ontarians with Disabilities Act sets standards for organizations operating in Ontario.",
          "Human rights obligations across provinces reinforce the need for reasonable accommodation.",
          "WCAG 2.1 AA is the standard most teams use for web accessibility reviews.",
        ],
      },
      engagement: {
        title: "How I Can Help a Team",
        intro:
          "I can support accessibility as part of normal development work or during a focused review.",
        phases: [
          {
            title: "Review",
            body: "Check templates, components, and key flows with automated tools plus manual keyboard and screen-reader-aware review.",
          },
          {
            title: "Fix",
            body: "Turn findings into front-end, CMS, and content changes that fit the existing codebase and release plan.",
          },
          {
            title: "Document",
            body: "Leave notes for patterns, editor guidance, and QA checks so the same issues are less likely to return.",
          },
        ],
      },
      cta: {
        title: "Need someone who can build and check the details?",
        body: "I can help teams turn accessibility requirements into practical front-end and CMS work.",
        primaryCta: "Email Me",
        secondaryCta: "Return Home",
      },
      note: "This page provides general information and is not legal advice.",
    },
    social: {
      linkedin: "LinkedIn",
      github: "GitHub",
      mail: "Email",
      resume: "Resume",
    },
    footer: {
      name: "Daniel Chavez",
      tagline: "Full-Stack Web Developer.",
      links: [
        { label: "About", href: "#about" },
        { label: "Work", href: "#portfolio" },
        { label: "Contact", href: "#contact" },
      ],
      rights: "All rights reserved.",
    },
  },
  es: {
    meta: {
      homeTitle: "Daniel Chavez | Desarrollador web full-stack",
      accessibilityTitle: "Daniel Chavez | Accesibilidad y calidad web",
    },
    nav: {
      items: [
        { label: "Inicio", href: "#home" },
        { label: "Sobre mí", href: "#about" },
        { label: "Trabajo", href: "#portfolio" },
        { label: "Habilidades", href: "#skills" },
        { label: "Accesibilidad", href: "/accessibility" },
        { label: "Contacto", href: "#contact" },
      ],
      primaryLabel: "Navegación principal",
      toggleOpen: "Abrir menú",
      toggleClose: "Cerrar menú",
      languageLabel: "Selección de idioma",
      themeLabel: "Selección de tema",
      themeToggle: {
        light: "Cambiar a modo claro",
        dark: "Cambiar a modo oscuro",
      },
      skipLink: "Saltar al contenido principal",
      backToTop: "Volver arriba",
    },
    hero: {
      eyebrow: "Desarrollador full-stack — Manitoba",
      title: "Sitios de producción.\nConstruidos para durar.",
      description:
        "Sitios accesibles y fáciles de mantener — desde el build inicial hasta la mejora continua. Con base en Manitoba, abierto a trabajo remoto.",
      primaryCta: "Ver trabajo",
      secondaryCta: "Accesibilidad",
      tertiaryCta: "Escríbeme",
      badges: [
        "React, WordPress, PHP, Node",
        "Front-end accesible",
        "CMS y soporte de sitios",
      ],
      visualEyebrow: "Lo que aporto",
      visualTitle: "Útil en varias partes del build.",
      visualBody:
        "Puedo trabajar desde Figma o desde código existente, construir interfaces responsivas, resolver problemas de CMS y mantener a diseño, PM y QA informados sobre lo que está pasando.",
      techStackLabel: "Stack tecnológico",
      techStack: [
        "React",
        "Next.js",
        "PHP",
        "WordPress",
        "Node.js",
        "Tailwind",
        "Vue",
        "PostgreSQL",
      ],
      socialLabel: "Enlaces sociales y CV",
    },
    story: {
      eyebrow: "Sobre mí",
      title: "Lo que construyo para equipos de producción.",
      intro:
        "Construyo y doy soporte a sitios accesibles, trabajo con plataformas CMS en producción y contribuyo en todo el ciclo de desarrollo, desde el build inicial hasta el mantenimiento continuo.",
      body:
        "La mayor parte de mi trabajo reciente ha sido con agencias y equipos aliados, construyendo y dando soporte a sitios para organizaciones que necesitan confiabilidad más que novedad. Entro en bases de código existentes, profundizo en cómo funcionan las cosas y hago mejoras constantes que perduran.",

      cards: [
        {
          title: "Mentalidad de producción",
          body: "Pienso más allá del primer build: edición de contenido, reutilización de componentes, QA, despliegue y lo que la siguiente persona necesitará entender.",
        },
        {
          title: "Hábitos accesibles",
          body: "Uso marcado semántico, estados de foco visibles, contraste legible y patrones predecibles como parte normal del trabajo front-end.",
        },
        {
          title: "Comunicación tranquila",
          body: "Mantengo visibles el estado, los bloqueos y los tradeoffs para que el equipo sepa qué está pasando y por qué.",
        },
      ],
    },
    work: {
      eyebrow: "Trabajo seleccionado",
      title: "Sitios de producción que he ayudado a lanzar y mantener.",
      intro:
        "Una selección de proyectos que incluyen reportes anuales, organizaciones sin fines de lucro, información pública, membresías y comercio electrónico.",
      visit: "Visitar sitio",
    },
    practice: {
      eyebrow: "Cómo trabajo",
      title: "Cómo aporto en un proyecto.",
      intro:
        "Busco un rol donde pueda contribuir de forma constante en build, QA, lanzamiento y mejora continua de sitios.",
      steps: [
        {
          number: "01",
          title: "Construir desde los detalles",
          body: "Traduzco layouts en componentes responsivos, cuido espaciados y estados de interacción, y mantengo la implementación cerca de la intención del diseño.",
        },
        {
          number: "02",
          title: "Mantener el contenido manejable",
          body: "Me importa la estructura del CMS, los patrones reutilizables y las decisiones amigables para editores, para que el sitio no sea difícil de actualizar después del lanzamiento.",
        },
        {
          number: "03",
          title: "Apoyar el lanzamiento",
          body: "Ayudo con QA, revisiones de accesibilidad, detalles de despliegue, corrección de bugs y el seguimiento que mantiene los lanzamientos ordenados.",
        },
      ],
    },
    skills: {
      eyebrow: "Habilidades",
      title: "Herramientas que uso en el build.",
      intro:
        "Una vista rápida del stack de mi CV, sin convertir la sección en otro bloque largo de texto.",
      groups: [
        {
          title: "Front end",
          items: [
            { label: "JavaScript", icon: "javascript" },
            { label: "React", icon: "react" },
            { label: "Next.js", icon: "next" },
            { label: "Vue", icon: "vue" },
            { label: "HTML5", icon: "html" },
            { label: "CSS3", icon: "css" },
            { label: "Tailwind", icon: "tailwind" },
            { label: "Vite", icon: "vite" },
          ],
        },
        {
          title: "CMS y back end",
          items: [
            { label: "WordPress", icon: "wordpress" },
            { label: "PHP", icon: "php" },
            { label: "Node.js", icon: "node" },
            { label: "Express.js", icon: "express" },
            { label: "PostgreSQL", icon: "postgres" },
            { label: "REST APIs", icon: "api" },
            { label: "Scalar", icon: "scalar" },
            { label: "Blade", icon: "blade" },
          ],
        },
        {
          title: "Flujo de trabajo y QA",
          items: [
            { label: "Accesibilidad", icon: "accessibility" },
            { label: "HTML semántico", icon: "semantic" },
            { label: "QA con teclado", icon: "keyboard" },
            { label: "Contraste", icon: "contrast" },
            { label: "QA responsivo", icon: "responsive" },
            { label: "Figma", icon: "figma" },
            { label: "Git/GitHub", icon: "github" },
            { label: "Vercel", icon: "vercel" },
          ],
        },
      ],
    },
    accessibilitySpotlight: {
      eyebrow: "Accesibilidad",
      title: "La accesibilidad es parte de cómo construyo.",
      body: "Me enfoco en piezas que los equipos pueden mantener: estructura semántica, acceso por teclado, estados de foco, contraste, texto alternativo y patrones claros de contenido.",
      primaryCta: "Notas de accesibilidad",
      secondaryCta: "Escríbeme",
      points: [
        "HTML semántico antes que comportamiento personalizado",
        "Revisiones de teclado y foco durante el build",
        "Decisiones de contenido y contraste que funcionan en producción",
      ],
    },
    contact: {
      eyebrow: "Próximo rol",
      title: "Abierto a roles de desarrollador web de tiempo completo.",
      body: "Busco un equipo donde pueda contribuir a sitios en producción, trabajo de CMS, sistemas front-end, QA de accesibilidad y mejora continua.",
      primaryCta: "Escríbeme",
      secondaryCta: "Ver CV",
      availability:
        "Con base en Manitoba. Abierto a equipos remotos y roles donde importen la calidad front-end, el trabajo de CMS y la accesibilidad.",
    },
    accessibilityPage: {
      breadcrumb: {
        label: "Ruta de navegación",
        home: "Inicio",
        current: "Accesibilidad",
      },
      hero: {
        eyebrow: "Accesibilidad y calidad web",
        title: "Trabajo front-end accesible, con enfoque práctico.",
        subtitle:
          "Me enfoco en las partes que hacen un sitio más fácil de usar y mantener: HTML semántico, rutas de teclado, estados de foco, contraste legible y estructura clara de contenido.",
        primaryCta: "Volver al inicio",
        secondaryCta: "Escríbeme",
        highlights: [
          "HTML semántico y landmarks de página",
          "Rutas de teclado y estados de foco visibles",
          "Contraste, labels, texto alternativo y claridad de contenido",
        ],
      },
      principles: {
        eyebrow: "Enfoque",
        title: "La accesibilidad es más fácil cuando se integra temprano.",
        description:
          "Busco problemas durante el handoff de diseño, el build de componentes, la carga de contenido y QA, en vez de tratar la accesibilidad como una lista final.",
        items: [
          {
            title: "Estructura primero",
            body: "Usar el HTML correcto, headings, landmarks, listas y labels antes de depender de comportamiento personalizado.",
          },
          {
            title: "Acceso por teclado",
            body: "Revisar que menús, enlaces, formularios y elementos interactivos se puedan alcanzar y entender sin mouse.",
          },
          {
            title: "Interfaces legibles",
            body: "Cuidar contraste, tamaño de texto, espaciado, mensajes de formularios y jerarquía de contenido en distintos dispositivos.",
          },
          {
            title: "Mejoras sostenibles",
            body: "Documentar patrones y decisiones de componentes para que las mejoras de accesibilidad sobrevivan futuras ediciones.",
          },
        ],
      },
      context: {
        title: "Estándares y riesgo",
        intro:
          "No soy abogado, pero entiendo por qué los equipos usan WCAG como referencia práctica para calidad de producto, compras y reducción de riesgo.",
        points: [
          "La Accessible Canada Act aplica a organizaciones reguladas federalmente y corporaciones de la Corona.",
          "La Accessibility for Manitobans Act influye en obligaciones para muchas organizaciones en Manitoba.",
          "La Accessibility for Ontarians with Disabilities Act establece estándares para organizaciones que operan en Ontario.",
          "Las obligaciones de derechos humanos en distintas provincias refuerzan la necesidad de ajustes razonables.",
          "WCAG 2.1 AA es el estándar que muchos equipos usan para revisiones de accesibilidad web.",
        ],
      },
      engagement: {
        title: "Cómo puedo apoyar a un equipo",
        intro:
          "Puedo apoyar la accesibilidad como parte del desarrollo normal o durante una revisión enfocada.",
        phases: [
          {
            title: "Revisar",
            body: "Revisar plantillas, componentes y flujos clave con herramientas automáticas y revisión manual de teclado con atención a lectores de pantalla.",
          },
          {
            title: "Corregir",
            body: "Convertir hallazgos en cambios de front end, CMS y contenido que encajen con la base de código y el plan de release.",
          },
          {
            title: "Documentar",
            body: "Dejar notas de patrones, guía para editores y checks de QA para que los mismos problemas sean menos probables después.",
          },
        ],
      },
      cta: {
        title: "¿Necesitas a alguien que construya y revise los detalles?",
        body: "Puedo ayudar a convertir requisitos de accesibilidad en trabajo práctico de front end y CMS.",
        primaryCta: "Escríbeme",
        secondaryCta: "Volver al inicio",
      },
      note: "Esta página ofrece información general y no constituye asesoría legal.",
    },
    social: {
      linkedin: "LinkedIn",
      github: "GitHub",
      mail: "Correo",
      resume: "CV",
    },
    footer: {
      name: "Daniel Chavez",
      tagline: "Desarrollador web full-stack.",
      links: [
        { label: "Sobre mí", href: "#about" },
        { label: "Trabajo", href: "#portfolio" },
        { label: "Contacto", href: "#contact" },
      ],
      rights: "Todos los derechos reservados.",
    },
  },
};
