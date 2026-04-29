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
    title: "TELUS Reconciliation Report",
    domain: "reconciliationreport.telus.com",
    image: telusImage,
    demo: "https://reconciliationreport.telus.com/",
    accent: "from-berry via-clay to-gold",
    preview: "from-berry/15 via-gold/10 to-canvas",
    category: {
      en: "TELUS Mobility",
      es: "Reporte anual",
    },
    summary: {
      en: "TELUS’ seventh annual report shares inspiring stories of real change that will be felt for generations.",
      es: "El séptimo informe anual de TELUS comparte historias inspiradoras de cambios reales que se sentirán durante generaciones.",
    },
  },
  {
    title: "Perimeter Aviation",
    domain: "perimeter.ca",
    image: perimeterImage,
    demo: "https://perimeter.ca/",
    accent: "from-clay via-gold to-teal",
    preview: "from-clay/15 via-gold/10 to-canvas",
    category: {
      en: "Aviation and cargo",
      es: "Aviación y carga",
    },
    summary: {
      en: "Perimeter Aviation and Bearskin Airlines connect communities across Manitoba and Ontario through passenger travel, cargo, and charter services.",
      es: "Perimeter Aviation y Bearskin Airlines conectan comunidades de Manitoba y Ontario mediante viajes de pasajeros, carga y servicios charter.",
    },
  },
  {
    title: "First People's Economic Growth Fund",
    domain: "firstpeoplesfund.ca",
    image: fpegfImage,
    demo: "https://firstpeoplesfund.ca/",
    accent: "from-jade via-gold to-clay",
    preview: "from-jade/15 via-gold/10 to-canvas",
    category: {
      en: "Funding programs",
      es: "Programas de financiamiento",
    },
    summary: {
      en: "Empowering communities to foster resilience, drive innovation, and create lasting economic impact. Offering financial solutions to support the business ambitions of Manitoba First Nations and their members.",
      es: "Empoderamos a las comunidades para fomentar la resiliencia, impulsar la innovación y generar un impacto económico duradero. Ofrecemos soluciones financieras para apoyar las ambiciones empresariales de las Primeras Naciones de Manitoba y sus miembros.",
    },
  },
  {
    title: "Raven Space: Cherokee Natural World",
    domain: "ravenspacepublishing.org",
    image: ravenSpaceImage,
    demo: "https://developmentserver.ravenspacepublishing.org/the-cherokee-natural-world/index",
    accent: "from-night via-teal to-jade",
    preview: "from-night/15 via-teal/10 to-canvas",
    category: {
      en: "Interactive publication",
      es: "Publicación interactiva",
    },
    summary: {
      en: "The Cherokee Natural World provides a different vision of our place in the world, one rooted in harmonious relationships that are crucial to our future.",
      es: "El Mundo Natural Cherokee ofrece una visión diferente de nuestro lugar en el mundo, una visión arraigada en relaciones armoniosas que son cruciales para nuestro futuro.",
    },
  },
  {
    title: "IYMP",
    domain: "iymp.ca",
    image: iympImage,
    demo: "https://iymp.ca/",
    accent: "from-teal via-jade to-gold",
    preview: "from-teal/15 via-jade/10 to-canvas",
    category: {
      en: "Youth mentorship",
      es: "Mentoría juvenil",
    },
    summary: {
      en: "IYMP is a communal, relationship-based, after-school healthy living program",
      es: "IYMP es un programa comunitario de vida saludable basado en las relaciones, que se lleva a cabo después de la escuela.",
    },
  },
  {
    title: "MACY",
    domain: "manitobaadvocate.ca",
    image: manitobaAdvocateImage,
    demo: "https://manitobaadvocate.ca/",
    accent: "from-gold via-clay to-berry",
    preview: "from-gold/18 via-clay/10 to-canvas",
    category: {
      en: "Youth advocacy",
      es: "defensores de la juventud",
    },
    summary: {
      en: "The Manitoba Advocate for Children and Youth (MACY) is here to make sure the voices of young people are heard.",
      es: "La Defensora de los Niños y Jóvenes de Manitoba (MACY, por sus siglas en inglés) está aquí para garantizar que se escuchen las voces de los jóvenes.",
    },
  },
  {
    title: "MB Trades",
    domain: "mbtrades.ca",
    image: mbTradesImage,
    demo: "https://www.mbtrades.ca/",
    accent: "from-night via-berry to-clay",
    preview: "from-night/15 via-berry/10 to-canvas",
    category: {
      en: "Building Trades",
      es: "Trabajos de construcción",
    },
    summary: {
      en: "Manitoba Building Trades (MBT) represents the common goals of over 8,000 construction and trade professionals across our 13 member unions.",
      es: "Manitoba Building Trades (MBT) representa los objetivos comunes de más de 8.000 profesionales de la construcción y oficios relacionados, pertenecientes a nuestros 13 sindicatos miembros.",
    },
  },
  {
    title: "CEDA",
    domain: "cedawpg.org",
    image: cedawpgImage,
    demo: "https://cedawpg.org/",
    accent: "from-berry via-night to-teal",
    preview: "from-berry/15 via-night/10 to-canvas",
    category: {
      en: "Community Education",
      es: "educación comunitaria",
    },
    summary: {
      en: "The Community Education Development Association (CEDA) is a beacon of hope and progress, dedicated to nurturing the hearts and minds of students, families, teachers, and school administrators in Winnipeg, Manitoba.",
      es: "La Asociación para el Desarrollo de la Educación Comunitaria (CEDA, por sus siglas en inglés) es un faro de esperanza y progreso, dedicada a cultivar los corazones y las mentes de los estudiantes, las familias, los maestros y los administradores escolares en Winnipeg, Manitoba.",
    },
  },
];

export const translations = {
  en: {
    meta: {
      homeTitle: "Daniel Chavez | Full-stack web developer",
      accessibilityTitle: "Daniel Chavez | Accessibility and web quality",
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
      eyebrow: "Full-stack web developer",
      title: "I build accessible websites that are easy to maintain.",
      description:
        "I am a Manitoba-based developer with production experience across React, WordPress, PHP, Node, Tailwind, hosting, and CMS support. I am looking for a full-time role where I can contribute to real builds, improve existing sites, and help teams ship cleaner work.",
      primaryCta: "View work",
      secondaryCta: "Accessibility",
      tertiaryCta: "Email Daniel",
      badges: [
        "React, WordPress, PHP, Node",
        "Accessible front-end work",
        "CMS builds and support",
      ],
      visualEyebrow: "What I bring",
      visualTitle: "Useful across the build.",
      visualBody:
        "I can work from Figma or existing code, build responsive interfaces, troubleshoot CMS issues, and communicate clearly with designers, PMs, QA, and stakeholders.",
      stats: [
        { value: "3+ years", label: "production web development" },
        { value: "CMS + front end", label: "WordPress, PHP, React, Tailwind" },
        { value: "Accessibility", label: "semantic HTML, keyboard flow, contrast" },
        { value: "Team-ready", label: "clear handoffs, QA, launch support" },
      ],
      socialLabel: "Social and resume links",
    },
    story: {
      eyebrow: "About",
      title: "Critical, practical web work for production teams.",
      intro:
        "I bring a practical approach to web development and a diverse toolkit for production teams",
      body:
        "Most of my recent work has been with Vincent Design and partner teams, building and supporting websites for organizations that need reliability more than novelty. I am comfortable joining an existing codebase, asking the right questions, and making steady improvements without adding noise.",
      quote: "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program. — Linus Torvalds",
      cards: [
        {
          title: "Production mindset",
          body: "I think beyond the first build: content editing, component reuse, QA, deployment, and what the next person will need to understand.",
        },
        {
          title: "Accessible habits",
          body: "I use semantic markup, visible focus states, readable contrast, and predictable interaction patterns as part of normal front-end work.",
        },
        {
          title: "Calm communication",
          body: "I keep status, blockers, and tradeoffs visible so designers, PMs, QA, and stakeholders know what is happening.",
        },
      ],
    },
    work: {
      eyebrow: "Current work",
      title: "Production sites I have helped ship and support.",
      intro:
        "These are some of the projects I have worked on with Vincent Design and partner teams.",
      visit: "Visit site",
    },
    practice: {
      eyebrow: "Team contribution",
      title: "How I show up on a project.",
      intro:
        "I am looking for a role where I can contribute steadily across build, QA, launch, and ongoing site improvement.",
      steps: [
        {
          number: "01",
          title: "Build from the details",
          body: "I translate layouts into responsive components, watch spacing and interaction states, and keep the implementation close to the design intent.",
        },
        {
          number: "02",
          title: "Keep content manageable",
          body: "I care about CMS structure, reusable patterns, and editor-friendly decisions so a site is not painful to update after launch.",
        },
        {
          number: "03",
          title: "Support the release",
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
          title: "CMS and back end",
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
      primaryCta: "Accessibility notes",
      secondaryCta: "Email Daniel",
      points: [
        "Semantic HTML before custom behavior",
        "Keyboard and focus checks during build",
        "Readable content and contrast decisions that hold up in production",
      ],
    },
    contact: {
      eyebrow: "Next role",
      title: "I am open to full-time web developer roles.",
      body: "I am looking for a team where I can contribute to production websites, CMS work, front-end systems, accessibility QA, and ongoing improvement.",
      primaryCta: "Email Daniel",
      secondaryCta: "View resume",
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
        eyebrow: "Accessibility and web quality",
        title: "Accessible front-end work, handled practically.",
        subtitle:
          "I focus on the parts that make a website easier to use and easier to maintain: semantic HTML, keyboard paths, focus states, readable contrast, and clear content structure.",
        primaryCta: "Back to home",
        secondaryCta: "Email Daniel",
        highlights: [
          "Semantic HTML and page landmarks",
          "Keyboard paths and visible focus states",
          "Contrast, labels, alt text, and content clarity",
        ],
      },
      principles: {
        eyebrow: "Approach",
        title: "Accessibility is easier when it is built in early.",
        description:
          "I look for issues during design handoff, component build, content entry, and QA instead of treating accessibility as a final checklist.",
        items: [
          {
            title: "Structure first",
            body: "Use the right HTML, headings, landmarks, lists, and labels before reaching for custom behavior.",
          },
          {
            title: "Keyboard access",
            body: "Check that menus, links, forms, and interactive elements can be reached and understood without a mouse.",
          },
          {
            title: "Readable interfaces",
            body: "Keep contrast, type size, spacing, form messages, and content hierarchy clear across devices.",
          },
          {
            title: "Sustainable fixes",
            body: "Document patterns and component decisions so accessibility improvements survive future edits.",
          },
        ],
      },
      context: {
        title: "Standards and risk",
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
        title: "How I can help a team",
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
        primaryCta: "Email Daniel",
        secondaryCta: "Return home",
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
      tagline: "Full-stack web developer.",
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
      eyebrow: "Desarrollador web full-stack",
      title: "Construyo sitios accesibles y fáciles de mantener.",
      description:
        "Soy un desarrollador en Manitoba, Canada con experiencia en producción con React, WordPress, PHP, Node, hosting y soporte de CMS. Busco un rol de tiempo completo donde pueda contribuir a proyectos reales, mejorar sitios existentes y ayudar a los equipos a entregar trabajo más claro.",
      primaryCta: "Ver trabajo",
      secondaryCta: "Accesibilidad",
      tertiaryCta: "Escribir a Daniel",
      badges: [
        "React, WordPress, PHP, Node",
        "Front-end accesible",
        "CMS y soporte de sitios",
      ],
      visualEyebrow: "Lo que aporto",
      visualTitle: "Útil en varias partes del build.",
      visualBody:
        "Puedo trabajar desde Figma o desde código existente, construir interfaces responsivas, resolver problemas de CMS y comunicarme con claridad con diseño, PM, QA y stakeholders.",
      stats: [
        { value: "3+ años", label: "desarrollo web en producción" },
        { value: "CMS + front end", label: "WordPress, PHP, React, Tailwind" },
        { value: "Accesibilidad", label: "HTML semántico, teclado, contraste" },
        { value: "Listo para equipo", label: "handoffs claros, QA y soporte" },
      ],
      socialLabel: "Enlaces sociales y CV",
    },
    story: {
      eyebrow: "Sobre mí",
      title: "Un desarrollador práctico para equipos de producción.",
      intro:
        "Me interesan las partes del trabajo web donde los detalles importan: layouts responsivos, estructura de contenido, accesibilidad, diferencias entre navegadores y el paso de diseño a desarrollo.",
      body:
        "La mayor parte de mi trabajo reciente ha sido con Vincent Design y equipos aliados, construyendo y dando soporte a sitios para organizaciones que necesitan confiabilidad más que novedad. Me siento cómodo entrando a una base de código existente, haciendo buenas preguntas y mejorando sin agregar ruido.",
      quote: "La mayoría de los buenos programadores programan no porque esperen que les paguen o que el público los adore, sino porque les divierte programar. — Linus Torvalds",
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
          body: "Mantengo visibles el estado, los bloqueos y los tradeoffs para que diseño, PM, QA y stakeholders sepan qué está pasando.",
        },
      ],
    },
    work: {
      eyebrow: "Trabajo seleccionado",
      title: "Sitios de producción que he ayudado a lanzar y mantener.",
      intro:
        "Una muestra de trabajo para reportes, organizaciones sin fines de lucro, información pública, membresías y servicios.",
      note: "Realizado en colaboración con Vincent Design y equipos aliados.",
      visit: "Visitar sitio",
    },
    practice: {
      eyebrow: "Contribución al equipo",
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
      secondaryCta: "Escribir a Daniel",
      points: [
        "HTML semántico antes que comportamiento personalizado",
        "Revisiones de teclado y foco durante el build",
        "Decisiones de contenido y contraste que funcionan en producción",
      ],
    },
    contact: {
      eyebrow: "Próximo rol",
      title: "Estoy abierto a roles de desarrollador web de tiempo completo.",
      body: "Busco un equipo donde pueda contribuir a sitios en producción, trabajo de CMS, sistemas front-end, QA de accesibilidad y mejora continua.",
      primaryCta: "Escribir a Daniel",
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
        secondaryCta: "Escribir a Daniel",
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
        primaryCta: "Escribir a Daniel",
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
