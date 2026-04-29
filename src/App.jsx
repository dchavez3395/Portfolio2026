import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import telusImage from "./assets/telus.webp";
import iympImage from "./assets/iymp.png";
import mbTradesImage from "./assets/mbt.png";
import manitobaAdvocateImage from "./assets/macy.png";
import cedawpgImage from "./assets/ceda.webp";
import fpegfImage from "./assets/FPEGF.png";
import ravenSpaceImage from "./assets/ravenspace.png";
import perimeterImage from "./assets/Perimeter.png";
import yangManGif from "./assets/Yang man.gif";

const translations = {
  en: {
    nav: {
      items: [
        { label: "home", href: "#home" },
        { label: "about", href: "#about" },
        { label: "work", href: "#portfolio" },
        { label: "skills", href: "#skills" },
        { label: "accessibility", href: "/accessibility" },
        { label: "contact", href: "#contact" },
      ],
      primaryLabel: "Primary navigation",
      toggleLabel: "Toggle menu",
      languageLabel: "Language selection",
      skipLink: "Skip to main content",
    },
    hero: {
      greeting: "Hello, I'm Daniel",
      title: "I deliver accessible, business-grade web platforms",
      description:
        "I'm a full-stack developer with over three years of experience delivering production work using PHP, React, Node, and modern tooling. I can contribute alongside designers, PMs, and QA or manage entire projects independently, always keeping web accessibility, performance, and transparent communication at the center of every delivery.",
      portfolioCta: "View selected work",
      accessibilityCta: "Accessibility",
      resumeCta: "Resume",
      imageAlt: "Portrait of Daniel",
    },
    about: {
      title: "About",
      lead: "Professional summary",
      body:
        "I deploy production websites and web applications with a focus on responsive, accessible experiences. My toolkit spans PHP, WordPress (custom themes), Node.js, React, Blade, SCSS, Tailwind CSS, DNS, hosting, and modern deployment platforms. I pair Deque University accessibility training with a background in agency delivery and dealership leadership to keep performance, security, and business priorities aligned with engineering execution.",
      highlightsTitle: "Experience highlights",
      highlights: [
        "Deque University Web Accessibility Training",
        "End-to-end delivery from discovery through launch and support",
        "Stakeholder alignment, executive reporting, and roadmap clarity",
        "Accessibility-first delivery aligned with WCAG guidance",
        "CMS architecture, migrations, and lifecycle maintenance",
      ],
    },
    portfolio: {
      title: "Work Highlights",
      visit: "Visit site",
      ctaTitle: "Seeking a developer who aligns technology with business outcomes?",
      ctaButton: "Start a conversation",
      note: "Projects delivered while collaborating with Vincent Design, my current team.",
    },
    homeAccessibility: {
      title: "Why accessibility matters",
      body:
        "WCAG compliance reduces legal and reputational risk, improves SEO, and makes digital products usable for more people. It is also a quality signal for enterprise buyers and public sector contracts.",
      button: "Learn about accessibility",
    },
    homeContact: {
      title: "Ready to talk?",
      body:
        "Share your goals, timeline, and constraints. I will respond with next steps and availability.",
      button: "Contact",
    },
    accessibility: {
      breadcrumb: {
        label: "Breadcrumb",
        home: "Home",
        current: "Accessibility",
      },
      hero: {
        label: "Accessibility",
        title: "Web accessibility, explained",
        subtitle:
          "Accessible experiences reduce risk, expand reach, and improve usability for everyone.",
        ctaPrimary: "Back to home",
        ctaSecondary: "Contact",
      },
      why: {
        title: "Why accessibility still matters",
        paragraphs: [
          "Accessibility is part of a reliable product experience and a responsible brand, not a checkbox at the end of development. Framing web access as a risk management practice keeps launches calm and lets teams protect customers who rely on screen readers, keyboard navigation, and adaptive hardware.",
          "When accessibility is prioritized, the product becomes easier to understand on any device, performs better in low-bandwidth scenarios, and reaches the business and public sector buyers who expect inclusive delivery.",
        ],
      },
      principles: {
        title: "Guiding principles for inclusive delivery",
        intro:
          "Accessibility is built into design, content, and engineering workstreams. The goal is measurable improvements, not a surprise sprint at launch.",
        items: [
          {
            title: "Structure for people",
            body: "Semantic HTML, consistent landmarks, and visible focus ensure everyone can navigate with a keyboard or assistive device.",
          },
          {
            title: "Readable content",
            body: "Contrast, typography, clear error handling, and straightforward language make content legible under different conditions.",
          },
          {
            title: "Media ownership",
            body: "Alt text, captions, transcripts, and descriptive controls keep images, video, and interactive components meaningful.",
          },
          {
            title: "Process & partnership",
            body: "Reviews at design and build, WCAG-aligned checklists, and documentation keep teams accountable without slowing delivery.",
          },
        ],
        closing:
          "These principles guide assessment, remediation, and knowledge-sharing so accessibility grows with the product.",
      },
      context: {
        title: "Legal and compliance context",
        intro:
          "Obligations vary by sector and province, yet many organizations must meet accessibility standards. Understanding the landscape makes planning easier.",
        points: [
          "Accessible Canada Act (ACA) applies to federally regulated organizations and Crown corporations.",
          "Accessibility for Manitobans Act (AMA) sets procurement and design obligations across Manitoba.",
          "Accessibility for Ontarians with Disabilities Act (AODA) governs public and private sector organizations in Ontario.",
          "Human rights codes in every province require reasonable accommodation for people with disabilities.",
          "Most organizations adopt WCAG 2.1 AA as a practical benchmark for both design reviews and procurement.",
        ],
      },
      details: {
        title: "Professional accessibility support",
        intro:
          "Accessibility programs work best when strategy, design, content, and engineering move together. I help teams turn requirements into measurable improvements without slowing delivery.",
        paragraphs: [
          "A typical engagement starts with a discovery review of templates, components, and key user flows. I combine automated checks and manual testing with keyboard and screen reader patterns to confirm real-world issues.",
          "From there, I deliver a prioritized remediation plan that maps fixes to WCAG 2.1 AA success criteria, effort, and business impact. That keeps stakeholders aligned and makes it easy to sequence work across sprints.",
          "I also support content standards, accessible writing, and design system updates so fixes stay in place. The goal is not only compliance, but long-term usability and reduced support costs.",
        ],
        listTitle: "What you receive",
        listItems: [
          "Clear audit notes with screenshots and code-level guidance",
          "Priority-based roadmap and validation plan",
          "Component and content recommendations for lasting compliance",
          "Collaboration with designers, developers, and stakeholders",
        ],
        closing:
          "If you need training, governance, or ongoing QA, I can build a lightweight process your team can keep.",
      },
      note: "This page provides general information and is not legal advice.",
    },
    skills: {
      title: "Technical expertise",
      groups: [
        {
          title: "Languages & frameworks",
          items: [
            "PHP",
            "JavaScript (ES6+)",
            "React.js",
            "Node.js",
            "Express.js",
            "HTML5",
            "SCSS/SASS",
            "Tailwind CSS",
            "EJS",
          ],
        },
        {
          title: "CMS & platforms",
          items: [
            "WordPress (custom themes)",
            "Laravel / Blade templating",
            "Flywheel",
            "WP Engine",
            "Vercel",
            "DNS & hosting",
          ],
        },
        {
          title: "Tools & workflow",
          items: [
            "Git & GitHub",
            "REST APIs",
            "Figma",
            "Responsive web design",
            "Cross-browser compatibility",
            "CI/CD pipelines",
          ],
        },
        {
          title: "Performance & optimization",
          items: [
            "SEO best practices",
            "Accessibility standards",
            "Site performance optimization",
            "Analytics & reporting",
          ],
        },
      ],
    },
    social: {
      linkedin: "LinkedIn",
      github: "GitHub",
      mail: "Mail",
      resume: "Resume",
    },
    footer: {
      name: "Daniel Chavez",
      tagline: "Full-stack developer.",
      availability: "open to full-time roles and freelance consulting.",
      navLabel: "Sections",
      socialLabel: "Connect",
      links: [
        { label: "Work", href: "#portfolio" },
        { label: "Skills", href: "#skills" },
        { label: "Contact", href: "#contact" },
      ],
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: {
      items: [
        { label: "inicio", href: "#home" },
        { label: "acerca", href: "#about" },
        { label: "trabajo", href: "#portfolio" },
        { label: "habilidades", href: "#skills" },
        { label: "accesibilidad", href: "/accessibility" },
        { label: "contacto", href: "#contact" },
      ],
      primaryLabel: "Navegacion principal",
      toggleLabel: "Alternar menu",
      languageLabel: "Seleccion de idioma",
      skipLink: "Saltar al contenido principal",
    },
    hero: {
      greeting: "Hola, soy Daniel",
      title: "Diseno plataformas web accesibles y orientadas al negocio",
      description:
        "Desarrollador full stack con tres anos de entrega en produccion y experiencia previa liderando desarrollo de negocio en concesionarias. Traduzco prioridades ejecutivas en soluciones confiables y escalables con React, WordPress, PHP, Blade, DNS y herramientas modernas.",
      portfolioCta: "Ver trabajo destacado",
      accessibilityCta: "Accesibilidad",
      resumeCta: "CV",
      imageAlt: "Retrato de Daniel",
    },
    about: {
      title: "Acerca",
      lead:
        "Desarrollador full stack estrategico enfocado en resultados, claridad y ejecucion confiable.",
      body: "En los ultimos tres anos he entregado sitios y aplicaciones en produccion, desde descubrimiento hasta lanzamiento y soporte. Mi rol anterior como gerente de desarrollo de negocio en concesionarias fortalecio mi enfoque en alineacion de interesados, estrategia de pipeline y disciplina operativa. Priorizo cumplimiento WCAG, rendimiento y arquitectura mantenible, con experiencia en WordPress, PHP, Blade, DNS, hosting y stacks modernos de front end.",
      highlightsTitle: "Aspectos clave",
      highlights: [
        "Entrega de punta a punta desde descubrimiento hasta lanzamiento y soporte",
        "Alineacion de interesados, reportes ejecutivos y claridad de roadmap",
        "Entrega accesible alineada a guias WCAG",
        "Arquitectura y migraciones de CMS con mantenimiento continuo",
      ],
    },
    portfolio: {
      title: "Trabajo destacado",
      visit: "Ver sitio",
      ctaTitle: "Busca un desarrollador que alinee tecnologia con resultados de negocio?",
      ctaButton: "Iniciar conversacion",
      note: "Proyectos entregados mientras colaboro con Vincent Design, mi equipo actual.",
    },
    homeAccessibility: {
      title: "Por que importa la accesibilidad",
      body:
        "Cumplir WCAG reduce riesgo legal, mejora SEO y abre tu sitio a mas personas. Tambien es una senal de calidad para clientes enterprise y sector publico.",
      button: "Ver accesibilidad",
    },
    homeContact: {
      title: "Listo para conversar?",
      body:
        "Comparte objetivos, tiempos y restricciones. Respondere con disponibilidad y siguientes pasos.",
      button: "Contacto",
    },
    accessibility: {
      breadcrumb: {
        label: "Ruta de navegacion",
        home: "Inicio",
        current: "Accesibilidad",
      },
      hero: {
        label: "Accesibilidad",
        title: "Accesibilidad web, explicada",
        subtitle:
          "Las experiencias accesibles reducen riesgo, amplian el alcance y mejoran la usabilidad para todos.",
        ctaPrimary: "Volver al inicio",
        ctaSecondary: "Contacto",
      },
      why: {
        title: "Por que sigue importando la accesibilidad",
        paragraphs: [
          "La accesibilidad es parte de una experiencia confiable y una marca responsable, no un requisito que se valida al final. Considerarla reduce la presion de los lanzamientos y protege a personas que dependen de lectores de pantalla, navegacion por teclado y hardware adaptado.",
          "Cuando la accesibilidad es prioridad, el producto funciona mejor en cualquier dispositivo, rinde en conexiones lentas y mejora la percepcion ante clientes corporativos y del sector publico que exigen experiencias inclusivas.",
        ],
      },
      principles: {
        title: "Principios orientadores para entregas inclusivas",
        intro:
          "La accesibilidad se incorpora a los flujos de diseño, contenido e ingeniería. Buscamos mejoras medibles sin sorpresas en la producción.",
        items: [
          {
            title: "Estructura centrada en personas",
            body: "HTML semántico, puntos de referencia consistentes y foco visible permiten navegar con teclado o dispositivos de asistencia.",
          },
          {
            title: "Contenido legible",
            body: "Contraste, tipografía, mensajes de error claros y lenguaje directo facilitan la comprensión en distintas condiciones.",
          },
          {
            title: "Medios con propósito",
            body: "Texto alternativo, subtítulos, transcripciones y controles descriptivos hacen que imágenes, videos e interacciones tengan sentido.",
          },
          {
            title: "Proceso y colaboración",
            body: "Revisiones en diseño y construcción, listas de verificación alineadas a WCAG y documentación mantienen a los equipos responsables sin retrasar entregas.",
          },
        ],
        closing:
          "Estos principios guían la evaluación, remediación y transferencia de conocimiento para que la accesibilidad crezca con el producto.",
      },
      context: {
        title: "Contexto legal y de cumplimiento",
        intro:
          "Las obligaciones varían por sector y provincia, pero muchas organizaciones deben ajustarse a normas de accesibilidad. Entenderlas facilita la planificación.",
        points: [
          "La Accessible Canada Act (ACA) aplica a organizaciones reguladas federalmente y corporaciones de la Corona.",
          "La Accessibility for Manitobans Act (AMA) establece obligaciones de adquisiciones y diseño en Manitoba.",
          "La Accessibility for Ontarians with Disabilities Act (AODA) regula a los sectores público y privado en Ontario.",
          "Los códigos de derechos humanos provinciales exigen ajustes razonables para personas con discapacidades.",
          "La mayoría adopta WCAG 2.1 AA como estándar práctico para revisiones de diseño y adquisiciones.",
        ],
      },
      details: {
        title: "Soporte profesional de accesibilidad",
        intro:
          "Los programas de accesibilidad funcionan mejor cuando estrategia, diseño, contenido y desarrollo avanzan juntos. Ayudo a equipos a convertir requisitos en mejoras medibles sin frenar entregas.",
        paragraphs: [
          "Un proyecto típico empieza con una revisión de plantillas, componentes y flujos clave. Combino pruebas automáticas y manuales con teclado y lector de pantalla para confirmar problemas reales.",
          "Luego entrego un plan de remediación priorizado que mapea cada ajuste a WCAG 2.1 AA, esfuerzo y riesgo. Esto alinea a los equipos y facilita planificar por sprints.",
          "También apoyo estándares de contenido, redacción accesible y cambios en el sistema de diseño para que las mejoras se mantengan.",
        ],
        listTitle: "Lo que recibes",
        listItems: [
          "Hallazgos claros con capturas y guía técnica",
          "Ruta de trabajo priorizada y plan de validación",
          "Recomendaciones para componentes y contenido",
          "Colaboración con diseño, desarrollo y liderazgo",
        ],
        closing:
          "Si necesitas capacitación, gobierno o QA continuo, puedo definir un proceso simple que tu equipo mantenga.",
      },
      note: "Esta página ofrece información general y no es asesoramiento legal.",
    },
    skills: {
      title: "Capacidades clave",
      groups: [
        {
          title: "Ingenieria de producto",
          items: [
            "React",
            "TypeScript",
            "Next.js",
            "Sistemas de diseno",
            "Interfaces responsivas",
            "Tailwind CSS",
          ],
        },
        {
          title: "Backend y datos",
          items: [
            "PHP",
            "Laravel y Blade",
            "Node.js",
            "APIs REST",
            "MySQL",
            "PostgreSQL",
          ],
        },
        {
          title: "Plataformas y operaciones",
          items: [
            "WordPress",
            "Migraciones de CMS",
            "DNS y hosting",
            "Pipelines CI/CD",
            "Git y GitHub",
            "Despliegues en la nube",
          ],
        },
        {
          title: "Calidad y liderazgo",
          items: [
            "Cumplimiento WCAG",
            "Auditorias de accesibilidad",
            "SEO y metadata",
            "Optimizacion de rendimiento",
            "Analitica y reportes",
            "Alineacion de interesados",
          ],
        },
      ],
    },
    social: {
      linkedin: "LinkedIn",
      github: "GitHub",
      mail: "Correo",
      resume: "CV",
    },
    footer: {
      name: "Daniel Chavez",
      tagline:
        "Desarrollador full stack.",
      availability: "Disponible para roles full time y consultoria selecta.",
      navLabel: "Secciones",
      socialLabel: "Conectar",
      links: [
        { label: "Trabajo", href: "#portfolio" },
        { label: "Habilidades", href: "#skills" },
        { label: "Contacto", href: "#contact" },
      ],
      rights: "Todos los derechos reservados.",
    },
  },
};

const languageOptions = [
  { id: "en", label: "EN" },
  { id: "es", label: "ES" },
];

const projects = [
  {
    title: "TELUS Reconciliation Report",
    domain: "reconciliationreport.telus.com",
    image: telusImage,
    demo: "https://reconciliationreport.telus.com/",
  },
  {
    title: "Perimeter Aviation",
    domain: "perimeter.ca",
    image: perimeterImage,
    demo: "https://perimeter.ca/",
  },
  {
    title: "First People's Economic Growth Fund",
    domain: "firstpeoplesfund.ca",
    image: fpegfImage,
    demo: "https://firstpeoplesfund.ca/",
  },
  {
    title: "Raven Space: Cherokee Natural World",
    domain: "ravenspacepublishing.org",
    image: ravenSpaceImage,
    demo: "https://developmentserver.ravenspacepublishing.org/the-cherokee-natural-world/index",
  },
  {
    title: "IYMP",
    domain: "iymp.ca",
    image: iympImage,
    demo: "https://iymp.ca/",
  },
  {
    title: "Manitoba Advocate",
    domain: "manitobaadvocate.ca",
    image: manitobaAdvocateImage,
    demo: "https://manitobaadvocate.ca/",
  },
  {
    title: "MB Trades",
    domain: "mbtrades.ca",
    image: mbTradesImage,
    demo: "https://www.mbtrades.ca/",
  },
  {
    title: "CEDAWPG",
    domain: "cedawpg.org",
    image: cedawpgImage,
    demo: "https://cedawpg.org/",
  },
];

const CONTACT_EMAIL = "dchavez3395@gmail.com";
const CONTACT_EMAIL_MAILTO = `mailto:${CONTACT_EMAIL}`;

const ArrowIcon = ({ className = "" }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    className={className}
    height="25"
    width="25"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="none" d="M0 0h24v24H0V0z"></path>
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
  </svg>
);

const MenuIcon = ({ className = "" }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 448 512"
    className={className}
    height="30"
    width="30"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
  </svg>
);

const LinkedInIcon = ({ className = "" }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 448 512"
    className={className}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
  </svg>
);

const GitHubIcon = ({ className = "" }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 496 512"
    className={className}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
  </svg>
);

const MailIcon = ({ className = "" }) => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="0"
    viewBox="0 0 24 24"
    className={className}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    ></path>
  </svg>
);

const ResumeIcon = ({ className = "" }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 16 16"
    className={className}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"></path>
  </svg>
);

const WavingAvatar = ({ className = "", imageClassName = "" }) => (
  <div
    className={`relative flex rounded-full animate-float ${className}`}
  >
    <img
      src={yangManGif}
      alt="Animated avatar waving"
      className={`h-36 w-36 rounded-full object-contain ${imageClassName}`}
      loading="lazy"
    />
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -right-3 -top-3 h-12 w-12 rounded-full bg-accent/20 blur-xl"
    ></span>
  </div>
);

const AccessibilityPage = ({ t, sectionLink }) => (
  <>
    <header className="relative w-full bg-gradient-to-b from-surface-muted via-surface to-surface-muted overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 left-8 h-48 w-48 rounded-full bg-accent/20 blur-3xl"
      ></div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-10 h-48 w-48 rounded-full bg-rose-400/10 blur-3xl"
      ></div>
      <div className="relative z-10 max-w-screen-xl mx-auto w-full px-4 lg:pl-24 lg:pr-8 pt-44 xl:pt-48 pb-10">
        <nav aria-label={t.accessibility.breadcrumb.label}>
          <ol className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-muted">
            <li>
              <Link
                to={sectionLink("#home")}
                className="transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded-sm"
              >
                {t.accessibility.breadcrumb.home}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-ink">
              {t.accessibility.breadcrumb.current}
            </li>
          </ol>
        </nav>
        <h1 className="mt-4 text-3xl md:text-5xl font-display font-semibold text-ink leading-tight">
          {t.accessibility.breadcrumb.current}
        </h1>
      </div>
    </header>

    <section className="w-full py-16 bg-surface/70">
      <div className="max-w-screen-xl mx-auto px-4 lg:pl-24 lg:pr-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            {t.accessibility.hero.label}
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-display font-semibold text-ink">
            {t.accessibility.hero.title}
          </h2>
          <p className="mt-3 text-sm md:text-base text-muted">
            {t.accessibility.hero.subtitle}
          </p>
        </div>
        <div className="mt-12 max-w-3xl">
          <h3 className="text-xl font-display font-semibold text-ink">
            {t.accessibility.why.title}
          </h3>
          <div className="mt-6 space-y-6 text-sm md:text-base text-muted">
            {t.accessibility.why.paragraphs.map((paragraph, index) => (
              <p key={`why-${index}`}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="w-full py-16 bg-surface/70">
      <div className="max-w-screen-xl mx-auto px-4 lg:pl-24 lg:pr-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            {t.accessibility.principles.title}
          </p>
          <p className="mt-4 text-sm text-muted">{t.accessibility.principles.intro}</p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {t.accessibility.principles.items.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-border/60 bg-surface/90 p-6 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:bg-surface/95"
            >
              <p className="text-lg font-semibold text-ink">{item.title}</p>
              <p className="mt-2 text-sm text-muted">{item.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted">
          {t.accessibility.principles.closing}
        </p>
      </div>
    </section>

    <section className="w-full py-16">
      <div className="max-w-screen-xl mx-auto px-4 lg:pl-24 lg:pr-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            {t.accessibility.context.title}
          </p>
          <p className="mt-4 text-sm text-muted">{t.accessibility.context.intro}</p>
        </div>
        <div className="mt-10 grid gap-6 text-sm text-muted">
          {t.accessibility.context.points.map((point) => (
            <div key={point} className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-accent/80"
              ></span>
              <p className="m-0">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="w-full py-16">
      <div className="max-w-screen-xl mx-auto px-4 lg:pl-24 lg:pr-8">
        <div className="rounded-3xl border border-border/60 bg-surface/90 p-8 md:p-12 shadow-lg shadow-black/40 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:bg-surface/95">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-ink">
            {t.accessibility.details.title}
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted">
            {t.accessibility.details.intro}
          </p>
          <div className="mt-6 space-y-4 text-sm md:text-base text-muted">
            {t.accessibility.details.paragraphs.map((paragraph, index) => (
              <p key={`detail-${index}`}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="text-xs uppercase tracking-[0.3em] text-accent">
              {t.accessibility.details.listTitle}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {t.accessibility.details.listItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/80"
                  ></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-6 text-sm text-muted">
            {t.accessibility.details.closing}
          </p>
          <p className="mt-8 text-xs text-muted">
            {t.accessibility.note}
          </p>
        </div>
      </div>
    </section>
  </>
);

const SiteFooter = ({ t, socialLinks, currentYear, sectionLink }) => (
  <footer className="border-t border-border/60 bg-surface/80">
    <div className="max-w-screen-xl mx-auto px-4 lg:pl-24 lg:pr-8 py-10 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
      <div>
        <p className="text-lg font-display font-semibold text-accent">
          {t.footer.name}
        </p>
        <p className="mt-2 text-sm text-muted max-w-md">
          {t.footer.tagline}
        </p>
        <p className="mt-4 text-xs uppercase tracking-[0.24em] text-muted">
          {t.footer.availability}
        </p>
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-accent">
          {t.footer.navLabel}
        </p>
        <div className="mt-4 flex flex-col gap-2 text-sm">
          {t.footer.links.map((link) => (
            <Link
              key={link.href}
              to={sectionLink(link.href)}
              className="text-ink transition hover:text-accent rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-accent">
          {t.footer.socialLabel}
        </p>
        <div className="mt-4 flex flex-col gap-2 text-sm">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-ink transition hover:text-accent rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer noopener" : undefined}
              download={link.download ? true : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="max-w-screen-xl mx-auto px-4 lg:pl-24 lg:pr-8 pb-8 flex flex-col gap-2 text-xs text-muted md:flex-row md:items-center md:justify-between">
      <p>
        Copyright {currentYear} {t.footer.name}. {t.footer.rights}
      </p>
      <a
        href={CONTACT_EMAIL_MAILTO}
        className="text-muted transition hover:text-accent rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
      >
        dchavez3395@gmail.com
      </a>
    </div>
  </footer>
);

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const location = useLocation();
  const isAccessibilityPage = location.pathname === "/accessibility";
  const t = translations[language];
  const navItems = t.nav.items;
  const currentYear = new Date().getFullYear();
  const sectionLink = (hash) => (hash.startsWith("#") ? `/${hash}` : hash);
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
      href: "https://drive.google.com/file/d/14YB6WlofnTUA1mYMaB8LVPW8YuWfgOo7/view?usp=sharing",
      external: true,
      download: true,
      icon: ResumeIcon,
    },
  ];

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

  const handleLanguageChange = (nextLanguage) => {
    setLanguage(nextLanguage);
    setNavOpen(false);
  };

  const handleMailClick = () => {
    if (typeof window === "undefined") return;
    window.location.href = CONTACT_EMAIL_MAILTO;
  };

  return (
    <div className="text-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[10002] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-surface focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface"
      >
        {t.nav.skipLink}
      </a>
      <nav
        aria-label={t.nav.languageLabel}
        className="w-full h-12 z-[10001] text-ink bg-surface/90 backdrop-blur border-b border-border/60 fixed top-0"
      >
        <div className="mx-auto flex h-full w-full max-w-screen-xl items-center justify-end px-4 lg:pl-24 lg:pr-8">
          <div
            role="group"
            aria-label={t.nav.languageLabel}
            className="flex items-center gap-1 rounded-full border border-border/60 bg-surface/70 p-1 text-xs shadow-sm shadow-black/40"
          >
            {languageOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                aria-pressed={language === option.id}
                onClick={() => handleLanguageChange(option.id)}
                className={`rounded-full px-3 py-1 uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${
                  language === option.id
                    ? "bg-accent text-surface shadow-sm shadow-black/40"
                    : "text-muted hover:text-ink hover:bg-surface-muted/70"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
      <nav
        aria-label={t.nav.primaryLabel}
        className="w-full h-20 z-[10000] text-ink bg-surface/80 backdrop-blur border-b border-border/60 shadow-lg shadow-black/40 fixed top-12"
      >
        <div className="mx-auto flex h-full w-full max-w-screen-xl items-center justify-between px-4 lg:pl-24 lg:pr-8">
          <Link
            to={sectionLink("#home")}
            className="text-ink cursor-pointer rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            <span className="text-3xl md:text-4xl font-logo ml-2 tracking-wide">
              Daniel<span className="text-accent">.</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <ul className="flex">
              {navItems.map((item) => (
                <li key={item.label} className="px-4">
                  <Link
                    to={sectionLink(item.href)}
                    className="cursor-pointer rounded-full text-xs uppercase tracking-[0.22em] font-medium text-muted transition-colors duration-200 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            aria-label={t.nav.toggleLabel}
            aria-expanded={navOpen}
            aria-controls="primary-navigation"
            onClick={() => setNavOpen((open) => !open)}
            className="cursor-pointer pr-4 z-10 text-muted md:hidden rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            <MenuIcon />
          </button>
        </div>

        <div
          id="primary-navigation"
          aria-hidden={!navOpen}
          className={`md:hidden absolute top-20 left-0 w-full bg-surface/95 border-t border-border/60 shadow-lg shadow-black/40 ${
            navOpen ? "flex" : "hidden"
          }`}
        >
          <ul className="flex flex-col w-full py-4 text-center">
            {navItems.map((item) => (
              <li key={`${item.label}-mobile`} className="py-3">
                <Link
                  to={sectionLink(item.href)}
                  onClick={() => setNavOpen(false)}
                  className="cursor-pointer rounded-full text-sm uppercase tracking-[0.2em] font-medium text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <aside
        aria-label={t.footer.socialLabel}
        className="hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 z-[9999]"
      >
        <div className="flex flex-col items-center gap-3 rounded-full border border-border/60 bg-surface/95 px-2 py-3 shadow-lg shadow-black/50">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            const isResume = link.download;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`group flex h-10 w-10 items-center justify-center rounded-full border shadow-sm shadow-black/40 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isResume
                    ? "border-accent bg-accent text-surface shadow-black/50 hover:border-white hover:bg-white animate-bounce-soft"
                    : "border-border/60 bg-surface text-ink hover:border-accent/40 hover:text-accent"
                }`}
                aria-label={link.label}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer noopener" : undefined}
                download={link.download ? true : undefined}
              >
                <Icon className="h-4 w-4" />
                <span className="sr-only">{link.label}</span>
              </a>
            );
          })}
        </div>
      </aside>

      <main id="main-content" tabIndex="-1" className="w-full scroll-mt-32">
        {isAccessibilityPage ? (
          <AccessibilityPage t={t} sectionLink={sectionLink} />
        ) : (
          <>
        <section
          id="home"
          className="relative min-h-screen w-full bg-gradient-to-b from-surface-muted via-surface to-surface-muted overflow-hidden scroll-mt-32"
        >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
        ></div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl"
        ></div>
        <div className="relative z-10 max-w-screen-xl mx-auto flex min-h-screen flex-col justify-center px-4 pt-32 pb-12 lg:pl-24 lg:pr-8">
          <div className="flex flex-col items-start gap-8">
            <div
              className="flex flex-col justify-center w-full max-w-2xl text-left"
            >
              <div className="mb-4">
                <WavingAvatar className="h-28 w-28" imageClassName="h-20 w-20" />
              </div>
              <p className="text-base md:text-lg font-semibold text-accent tracking-wide">
                {t.hero.greeting}
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold text-ink leading-tight tracking-tight">
                <span>{t.hero.title}</span>
                <span className="text-accent-strong">.</span>
              </h1>
              <p className="text-muted py-4 max-w-2xl text-base md:text-lg">
                {t.hero.description}
              </p>
              <div
                className="flex flex-wrap justify-start gap-4"
              >
                <Link
                  to={sectionLink("#portfolio")}
                  className="group text-surface w-fit px-6 py-3 my-2 flex items-center rounded-full bg-accent shadow-lg shadow-black/30 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                >
                  {t.hero.portfolioCta}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowIcon className="ml-1" />
                  </span>
                </Link>
                <Link
                  to="/accessibility"
                  className="group text-accent w-fit px-6 py-3 my-2 flex items-center rounded-full border border-accent bg-transparent shadow-sm shadow-black/30 transition hover:text-white hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                >
                  {t.hero.accessibilityCta}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowIcon className="ml-1" />
                  </span>
                </Link>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://drive.google.com/file/d/14YB6WlofnTUA1mYMaB8LVPW8YuWfgOo7/view?usp=sharing"
                  className="group lg:hidden text-accent w-fit px-6 py-3 my-2 flex items-center rounded-full border border-accent bg-transparent shadow-sm shadow-black/30 transition hover:text-white hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                >
                  {t.hero.resumeCta}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowIcon className="ml-1" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="w-full py-24 scroll-mt-32"
      >
        <div className="max-w-screen-xl mx-auto w-full px-4 lg:pl-24 lg:pr-8">
          <div className="rounded-3xl border border-border/60 bg-surface/90 p-8 md:p-12 shadow-lg shadow-black/40 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:bg-surface/95">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-display font-semibold inline border-b-2 border-accent">
                {t.about.title} <span className="text-accent">.</span>
              </h2>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
              <div
                className="sm:text-right text-2xl md:text-3xl font-display font-semibold"
              >
                <p>{t.about.lead}</p>
              </div>
              <div>
                <p className="text-muted leading-relaxed">
                  {t.about.body}
                </p>
              </div>
            </div>
            <div className="mt-8 border-t border-border/60 pt-6 grid gap-6 md:grid-cols-[180px,1fr]">
              <h3 className="text-xs uppercase tracking-[0.3em] text-muted">
                {t.about.highlightsTitle}
              </h3>
              <ul className="grid gap-3 text-sm text-muted sm:grid-cols-2">
                {t.about.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/80"
                    ></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 bg-gradient-to-b from-surface to-surface-muted">
        <div className="max-w-screen-xl mx-auto w-full px-4 lg:pl-24 lg:pr-8">
          <div className="rounded-3xl border border-border/60 bg-surface/90 p-8 md:p-12 shadow-lg shadow-black/40 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:bg-surface/95">
            <div className="grid gap-8 lg:grid-cols-[1.4fr,auto] lg:items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-ink">
                  {t.homeAccessibility.title}
                </h2>
                <p className="mt-4 text-sm md:text-base text-muted">
                  {t.homeAccessibility.body}
                </p>
              </div>
              <Link
                to="/accessibility"
                className="group text-surface w-fit px-6 py-3 flex items-center rounded-full bg-accent shadow-lg shadow-black/30 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                {t.homeAccessibility.button}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon className="ml-1" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className="w-full py-24 bg-gradient-to-b from-surface-muted via-surface to-surface-muted scroll-mt-32"
      >
        <div className="max-w-screen-xl px-4 lg:pl-24 lg:pr-8 mx-auto flex flex-col justify-center w-full">
          <div className="pb-8 space-y-3">
            <h2 className="text-3xl md:text-4xl font-display font-semibold inline border-b-2 border-accent">
              {t.portfolio.title} <span className="text-accent">.</span>
            </h2>
            <p className="!mt-6 max-w-3xl text-sm text-muted">{t.portfolio.note}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 lg:px-0 gap-6">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${t.portfolio.visit}: ${project.title}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-surface/80 shadow-sm shadow-black/40 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                <div className="flex h-36 w-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50/90 to-slate-200/70 p-5 md:h-40 md:p-6">
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex items-center justify-between gap-4 px-4 py-3">
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-muted truncate">
                      {project.domain}
                    </p>
                    <h3 className="text-sm font-semibold text-ink leading-snug">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-surface/85 text-xs uppercase tracking-[0.3em] text-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                  {t.portfolio.visit}
                </div>
              </a>
            ))}
          </div>

          <div className="m-auto pt-12 text-center flex flex-col items-center gap-4">
            <h3 className="text-lg md:text-xl text-muted">{t.portfolio.ctaTitle}</h3>
            <button
              type="button"
              onClick={handleMailClick}
              className="group text-surface w-fit px-6 py-3 my-3 flex items-center rounded-full bg-accent shadow-lg shadow-black/30 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              {t.portfolio.ctaButton}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowIcon className="ml-1" />
              </span>
            </button>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="w-full py-24 bg-gradient-to-b from-surface to-surface-muted scroll-mt-32"
      >
        <div className="max-w-screen-xl mx-auto px-4 lg:pl-24 lg:pr-8 flex flex-col justify-center text-ink">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold border-b-2 border-accent p-2 inline">
              {t.skills.title} <span className="text-accent">.</span>
            </h2>
          </div>
          <div className="w-full grid gap-6 sm:grid-cols-2 lg:grid-cols-4 py-12">
            {t.skills.groups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-border/60 bg-surface/80 p-5 shadow-sm shadow-black/40 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:bg-surface/90"
              >
                <h3 className="text-[11px] uppercase tracking-[0.3em] text-accent">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/80"
                      ></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="w-full py-20 bg-gradient-to-b from-surface-muted via-surface to-surface-muted scroll-mt-32"
      >
        <div className="max-w-screen-xl mx-auto px-4 lg:pl-24 lg:pr-8">
            <div className="rounded-3xl border border-border/60 bg-surface/90 p-8 md:p-10 shadow-lg shadow-black/40 flex flex-col gap-6 md:flex-row md:items-center md:justify-between transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:bg-surface/95">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-ink">
                {t.homeContact.title}
              </h2>
              <p className="mt-3 text-sm md:text-base text-muted">
                {t.homeContact.body}
              </p>
            </div>
            <button
              type="button"
              onClick={handleMailClick}
              className="group text-surface w-fit px-6 py-3 flex items-center rounded-full bg-accent shadow-lg shadow-black/30 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              {t.homeContact.button}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowIcon className="ml-1" />
              </span>
            </button>
          </div>
        </div>
      </section>
          </>
        )}
        <SiteFooter
          t={t}
          socialLinks={socialLinks}
          currentYear={currentYear}
          sectionLink={sectionLink}
        />
      </main>
    </div>
  );
}

export default App;
