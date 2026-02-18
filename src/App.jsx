import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import telusImage from "./assets/telus.webp";
import iympImage from "./assets/iymp.png";
import mbTradesImage from "./assets/mbt.png";
import manitobaAdvocateImage from "./assets/macy.png";
import cedawpgImage from "./assets/ceda.webp";
import empowerMenImage from "./assets/EmpowerMen.png";
import ravenSpaceImage from "./assets/ravenspace.png";
import naotParamedicsImage from "./assets/ems.png";
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
        { label: "contact", href: "/contact" },
      ],
      primaryLabel: "Primary navigation",
      toggleLabel: "Toggle menu",
      languageLabel: "Language selection",
      skipLink: "Skip to main content",
    },
    hero: {
      greeting: "Hello, I'm Daniel",
      title: "I architect accessible, business-grade web platforms",
      description:
        "Full-stack developer with three years of production delivery and prior dealership business development leadership. I translate executive priorities into reliable, scalable solutions across React, WordPress, PHP, Blade, DNS, and modern tooling.",
      portfolioCta: "View selected work",
      accessibilityCta: "Accessibility",
      resumeCta: "Resume",
      imageAlt: "Portrait of Daniel",
    },
    about: {
      title: "About",
      lead:
        "Strategic full-stack developer focused on outcomes, clarity, and dependable execution.",
      body: "Over the past three years I have delivered production websites and applications from discovery through launch and support. My earlier role as a dealership business development manager sharpened my approach to stakeholder alignment, pipeline strategy, and operational discipline. I prioritize WCAG compliance, performance, and maintainable architecture, with deep experience in WordPress, PHP, Blade, DNS, hosting, and modern front-end stacks.",
      highlightsTitle: "Experience highlights",
      highlights: [
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
      ctaButton: "Schedule a conversation",
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
        title: "Why it matters",
        intro:
          "Accessibility is part of a reliable product experience and a responsible brand.",
        points: [
          "Removes barriers for people with disabilities and expands your audience.",
          "Improves usability for all users, including mobile and low bandwidth.",
          "Strengthens brand trust and reduces legal exposure.",
          "Supports SEO, performance, and content clarity.",
        ],
      },
      legal: {
        title: "Canadian legal landscape",
        intro:
          "Obligations vary by sector and province, but many organizations must meet accessibility standards.",
        points: [
          "Accessible Canada Act (ACA) applies to federally regulated organizations.",
          "Accessibility for Manitobans Act (AMA) establishes standards in Manitoba.",
          "Accessibility for Ontarians with Disabilities Act (AODA) applies in Ontario.",
          "Human rights codes across Canada require reasonable accommodation.",
          "Most organizations align to WCAG 2.1 AA as a practical benchmark.",
        ],
      },
      compliance: {
        title: "What compliance looks like",
        intro:
          "Accessibility is built into design, content, and engineering, not added at the end.",
        points: [
          "Semantic structure, keyboard navigation, and visible focus.",
          "Color contrast, readable typography, and clear error states.",
          "Alt text, captions, and accessible media.",
          "Consistent headings, navigation, and content hierarchy.",
          "Automated checks plus manual testing.",
        ],
      },
      approach: {
        title: "How I support accessibility",
        intro:
          "I integrate accessibility early to reduce rework, improve quality, and limit risk.",
        points: [
          "Accessibility reviews at design and build stages.",
          "WCAG-aligned checklists and QA.",
          "Remediation plans with prioritized fixes.",
          "Documentation for teams and stakeholders.",
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
      title: "Core Capabilities",
      groups: [
        {
          title: "Product engineering",
          items: [
            "React",
            "TypeScript",
            "Next.js",
            "Design systems",
            "Responsive UI",
            "Tailwind CSS",
          ],
        },
        {
          title: "Backend and data",
          items: [
            "PHP",
            "Laravel and Blade",
            "Node.js",
            "REST APIs",
            "MySQL",
            "PostgreSQL",
          ],
        },
        {
          title: "Platforms and operations",
          items: [
            "WordPress",
            "CMS migrations",
            "DNS and hosting",
            "CI/CD pipelines",
            "Git and GitHub",
            "Cloud deployments",
          ],
        },
        {
          title: "Quality and leadership",
          items: [
            "WCAG compliance",
            "Accessibility audits",
            "SEO and metadata",
            "Performance optimization",
            "Analytics and reporting",
            "Stakeholder alignment",
          ],
        },
      ],
    },
    contact: {
      title: "Contact",
      breadcrumb: {
        label: "Breadcrumb",
        home: "Home",
        current: "Contact",
      },
      pageIntro:
        "Book a consultation to review goals, timelines, and constraints. I will confirm availability and next steps by email.",
      intro: "If you are evaluating candidates or partners, email me",
      emailLinkLabel: "here",
      scheduler: {
        title: "Schedule an appointment",
        intro:
          "Select a date and time for a 30-minute call. Times display in your local time zone.",
        dateLabel: "Select a date",
        timeLabel: "Choose a time",
        timeEmpty: "Select a date to see available times.",
        timeZoneLabel: "Time zone",
        selectedLabel: "Selected",
        button: "Request appointment",
        duration: "30-minute call",
        prevMonthLabel: "Previous month",
        nextMonthLabel: "Next month",
      },
      modal: {
        title: "Confirm your request",
        intro: "Add your details so I can confirm the appointment.",
        summaryLabel: "Requested time",
        submit: "Send request",
        cancel: "Cancel",
        sending: "Sending...",
        success: "Request sent. I will confirm by email shortly.",
        error: "Something went wrong. Please try again.",
        devError: "API unavailable. Run vercel dev to test locally.",
        errors: {
          required: "This field is required.",
          email: "Enter a valid email address.",
        },
      },
      nameLabel: "Full name",
      namePlaceholder: "Full name",
      phoneLabel: "Phone number",
      phonePlaceholder: "Phone number",
      emailLabel: "Work email",
      emailPlaceholder: "Work email",
      messageLabel: "Message",
      messagePlaceholder: "Describe the role or project",
      button: "Send inquiry",
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
        { label: "Contact", href: "/contact" },
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
        { label: "contacto", href: "/contact" },
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
      ctaButton: "Agendar conversacion",
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
        title: "Por que importa",
        intro:
          "La accesibilidad es parte de una experiencia confiable y una marca responsable.",
        points: [
          "Elimina barreras para personas con discapacidades y amplia la audiencia.",
          "Mejora la usabilidad para todos, incluyendo movil y baja conectividad.",
          "Refuerza la confianza de marca y reduce riesgo legal.",
          "Apoya SEO, rendimiento y claridad de contenido.",
        ],
      },
      legal: {
        title: "Panorama legal en Canada",
        intro:
          "Las obligaciones varian por sector y provincia; muchas organizaciones deben cumplir.",
        points: [
          "La Accessible Canada Act (ACA) aplica a organizaciones reguladas federalmente.",
          "La Accessibility for Manitobans Act (AMA) define estandares en Manitoba.",
          "La Accessibility for Ontarians with Disabilities Act (AODA) aplica en Ontario.",
          "Los codigos de derechos humanos exigen ajustes razonables.",
          "La mayoria alinea sus sitios a WCAG 2.1 AA como referencia practica.",
        ],
      },
      compliance: {
        title: "Como se ve el cumplimiento",
        intro:
          "La accesibilidad se integra en diseno, contenido y desarrollo, no al final.",
        points: [
          "Estructura semantica, navegacion por teclado y foco visible.",
          "Contraste de color, tipografia legible y errores claros.",
          "Texto alternativo, subtitulos y medios accesibles.",
          "Navegacion consistente, encabezados y jerarquia clara.",
          "Pruebas automaticas y revision manual.",
        ],
      },
      approach: {
        title: "Como apoyo la accesibilidad",
        intro:
          "Integro accesibilidad desde el inicio para reducir retrabajo y riesgo.",
        points: [
          "Revisiones de accesibilidad en diseno y desarrollo.",
          "Listas de verificacion alineadas a WCAG y QA.",
          "Planes de remediacion con prioridades claras.",
          "Documentacion para equipos y stakeholders.",
        ],
      },
      details: {
        title: "Soporte profesional de accesibilidad",
        intro:
          "Los programas de accesibilidad funcionan mejor cuando estrategia, diseno, contenido y desarrollo avanzan juntos. Ayudo a equipos a convertir requisitos en mejoras medibles sin frenar entregas.",
        paragraphs: [
          "Un proyecto tipico empieza con una revision de plantillas, componentes y flujos clave. Combino pruebas automaticas y manuales con teclado y lector de pantalla para confirmar problemas reales.",
          "Luego entrego un plan de remediacion priorizado que mapea cada ajuste a WCAG 2.1 AA, esfuerzo y riesgo. Esto alinea a los equipos y facilita planificar por sprints.",
          "Tambien apoyo estandares de contenido, redaccion accesible y cambios en el sistema de diseno para que las mejoras se mantengan.",
        ],
        listTitle: "Lo que recibes",
        listItems: [
          "Hallazgos claros con capturas y guia tecnica",
          "Ruta de trabajo priorizada y plan de validacion",
          "Recomendaciones para componentes y contenido",
          "Colaboracion con diseno, desarrollo y liderazgo",
        ],
        closing:
          "Si necesitas capacitacion, gobierno o QA continuo, puedo definir un proceso simple que tu equipo mantenga.",
      },
      note: "Esta pagina ofrece informacion general y no es asesoramiento legal.",
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
    contact: {
      title: "Contacto",
      breadcrumb: {
        label: "Ruta de navegacion",
        home: "Inicio",
        current: "Contacto",
      },
      pageIntro:
        "Agenda una consulta para revisar objetivos, tiempos y restricciones. Confirmare disponibilidad y siguientes pasos por correo.",
      intro: "Si evalua candidatos o socios, escribame",
      emailLinkLabel: "aqui",
      scheduler: {
        title: "Agendar una cita",
        intro:
          "Elige fecha y hora para una llamada de 30 minutos. Los horarios se muestran en tu zona local.",
        dateLabel: "Selecciona una fecha",
        timeLabel: "Elige una hora",
        timeEmpty: "Selecciona una fecha para ver horarios.",
        timeZoneLabel: "Zona horaria",
        selectedLabel: "Seleccionado",
        button: "Solicitar cita",
        duration: "Llamada de 30 minutos",
        prevMonthLabel: "Mes anterior",
        nextMonthLabel: "Mes siguiente",
      },
      modal: {
        title: "Confirmar solicitud",
        intro: "Agrega tus datos para confirmar la cita.",
        summaryLabel: "Horario solicitado",
        submit: "Enviar solicitud",
        cancel: "Cancelar",
        sending: "Enviando...",
        success: "Solicitud enviada. Confirmare por correo pronto.",
        error: "Algo salio mal. Intenta de nuevo.",
        devError: "API no disponible. Ejecuta vercel dev para probar localmente.",
        errors: {
          required: "Este campo es obligatorio.",
          email: "Ingresa un correo valido.",
        },
      },
      nameLabel: "Nombre completo",
      namePlaceholder: "Nombre completo",
      phoneLabel: "Telefono",
      phonePlaceholder: "Telefono",
      emailLabel: "Correo de trabajo",
      emailPlaceholder: "Email de trabajo",
      messageLabel: "Mensaje",
      messagePlaceholder: "Describa el rol o proyecto",
      button: "Enviar consulta",
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
        { label: "Contacto", href: "/contact" },
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
    title: "IYMP",
    domain: "iymp.ca",
    image: iympImage,
    demo: "https://iymp.ca/",
  },
  {
    title: "MB Trades",
    domain: "mbtrades.ca",
    image: mbTradesImage,
    demo: "https://www.mbtrades.ca/",
  },
  {
    title: "Manitoba Advocate",
    domain: "manitobaadvocate.ca",
    image: manitobaAdvocateImage,
    demo: "https://manitobaadvocate.ca/",
  },
  {
    title: "CEDAWPG",
    domain: "cedawpg.org",
    image: cedawpgImage,
    demo: "https://cedawpg.org/",
  },
  {
    title: "Empower Men",
    domain: "empowermen.ca",
    image: empowerMenImage,
    demo: "https://empowermen.ca/",
  },
  {
    title: "Raven Space: Cherokee Natural World",
    domain: "ravenspacepublishing.org",
    image: ravenSpaceImage,
    demo: "https://developmentserver.ravenspacepublishing.org/the-cherokee-natural-world/index",
  },
  {
    title: "NAOT Paramedics",
    domain: "naotparamedics.ca",
    image: naotParamedicsImage,
    demo: "https://naotparamedics.ca/",
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

    <section className="w-full py-16">
      <div className="max-w-screen-xl mx-auto px-4 lg:pl-24 lg:pr-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-ink">
            {t.accessibility.hero.title}
          </h2>
          <p className="mt-3 text-sm md:text-base text-muted">
            {t.accessibility.hero.subtitle}
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border/60 bg-surface/90 p-6 md:p-8 shadow-lg shadow-black/40">
            <h3 className="text-xs uppercase tracking-[0.3em] text-accent">
              {t.accessibility.why.title}
            </h3>
            <p className="mt-4 text-sm text-muted">
              {t.accessibility.why.intro}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted">
              {t.accessibility.why.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/80"
                  ></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border/60 bg-surface/90 p-6 md:p-8 shadow-lg shadow-black/40">
            <h3 className="text-xs uppercase tracking-[0.3em] text-accent">
              {t.accessibility.legal.title}
            </h3>
            <p className="mt-4 text-sm text-muted">
              {t.accessibility.legal.intro}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted">
              {t.accessibility.legal.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/80"
                  ></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="w-full py-16 bg-gradient-to-b from-surface to-surface-muted">
      <div className="max-w-screen-xl mx-auto px-4 lg:pl-24 lg:pr-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border/60 bg-surface/90 p-6 md:p-8 shadow-lg shadow-black/40">
            <h3 className="text-xs uppercase tracking-[0.3em] text-accent">
              {t.accessibility.compliance.title}
            </h3>
            <p className="mt-4 text-sm text-muted">
              {t.accessibility.compliance.intro}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted">
              {t.accessibility.compliance.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/80"
                  ></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border/60 bg-surface/90 p-6 md:p-8 shadow-lg shadow-black/40">
            <h3 className="text-xs uppercase tracking-[0.3em] text-accent">
              {t.accessibility.approach.title}
            </h3>
            <p className="mt-4 text-sm text-muted">
              {t.accessibility.approach.intro}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted">
              {t.accessibility.approach.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/80"
                  ></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="w-full py-16">
      <div className="max-w-screen-xl mx-auto px-4 lg:pl-24 lg:pr-8">
        <div className="rounded-3xl border border-border/60 bg-surface/90 p-8 md:p-12 shadow-lg shadow-black/40">
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

const ContactPage = ({ t, sectionLink, language }) => {
  const locale = language === "es" ? "es-ES" : "en-US";
  const baseTimeZone = "America/Winnipeg";
  const resolvedLocalTimeZone =
    typeof Intl !== "undefined"
      ? Intl.DateTimeFormat().resolvedOptions().timeZone
      : "";
  const localTimeZone = resolvedLocalTimeZone || "Local time";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [requestStatus, setRequestStatus] = useState("idle");
  const [requestError, setRequestError] = useState("");
  const modalRef = useRef(null);
  const modalFirstFieldRef = useRef(null);
  const previousFocusRef = useRef(null);
  const [currentMonth, setCurrentMonth] = useState(() => new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const today = new Date();
  const normalizedToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  const monthStart = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  );
  const monthEnd = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  );
  const startDayIndex = (monthStart.getDay() + 6) % 7;
  const totalDays = monthEnd.getDate();
  const monthLabel = new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  }).format(monthStart);
  const weekdayLabels = Array.from({ length: 7 }, (_, index) => {
    const referenceDate = new Date(2021, 7, 2 + index);
    return new Intl.DateTimeFormat(locale, { weekday: "short" }).format(
      referenceDate
    );
  });
  const dayCells = [
    ...Array.from({ length: startDayIndex }, () => null),
    ...Array.from({ length: totalDays }, (_, index) => index + 1),
  ];
  while (dayCells.length % 7 !== 0) {
    dayCells.push(null);
  }
  const timeSlots = ["09:00", "10:30", "13:00", "15:30", "17:00"];
  const formatDate = (date) =>
    new Intl.DateTimeFormat(locale, {
      weekday: "long",
      month: "long",
      day: "numeric",
    }).format(date);
  const getTimeZoneOffset = (date, timeZone) => {
    const dtf = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour12: false,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const parts = dtf.formatToParts(date);
    const values = parts.reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    const asUtc = Date.UTC(
      Number(values.year),
      Number(values.month) - 1,
      Number(values.day),
      Number(values.hour),
      Number(values.minute),
      Number(values.second)
    );
    return asUtc - date.getTime();
  };
  const makeDateInTimeZone = (dateRef, timeValue, timeZone) => {
    const [hours, minutes] = timeValue.split(":").map(Number);
    const utcDate = new Date(
      Date.UTC(
        dateRef.getFullYear(),
        dateRef.getMonth(),
        dateRef.getDate(),
        hours,
        minutes
      )
    );
    const offset = getTimeZoneOffset(utcDate, timeZone);
    return new Date(utcDate.getTime() - offset);
  };
  const formatZonedDate = (date, timeZone) =>
    new Intl.DateTimeFormat(locale, {
      weekday: "long",
      month: "long",
      day: "numeric",
      timeZone,
    }).format(date);
  const formatZonedTime = (date, timeZone) =>
    new Intl.DateTimeFormat(locale, {
      hour: "numeric",
      minute: "2-digit",
      timeZone,
    }).format(date);
  const formatTimeValue = (timeValue, dateRef, timeZone) => {
    const baseDate = dateRef || normalizedToday;
    const zonedDate = makeDateInTimeZone(baseDate, timeValue, timeZone);
    return formatZonedTime(zonedDate, timeZone);
  };
  const isSameDay = (left, right) =>
    left &&
    right &&
    left.getFullYear() === right.getFullYear() &&
    left.getMonth() === right.getMonth() &&
    left.getDate() === right.getDate();
  const selectedZonedDate =
    selectedDate && selectedTime
      ? makeDateInTimeZone(selectedDate, selectedTime, baseTimeZone)
      : null;
  const selectedBaseDateLabel = selectedZonedDate
    ? formatZonedDate(selectedZonedDate, baseTimeZone)
    : "";
  const selectedBaseTimeLabel = selectedZonedDate
    ? formatZonedTime(selectedZonedDate, baseTimeZone)
    : "";
  const selectedLocalTimeLabel =
    selectedZonedDate && resolvedLocalTimeZone
      ? formatZonedTime(selectedZonedDate, resolvedLocalTimeZone)
      : "";
  const showLocalTime =
    !!selectedZonedDate && resolvedLocalTimeZone !== "" && resolvedLocalTimeZone !== baseTimeZone;
  const isPrevDisabled =
    monthStart.getFullYear() === normalizedToday.getFullYear() &&
    monthStart.getMonth() === normalizedToday.getMonth();
  const handlePrevMonth = () => {
    if (isPrevDisabled) return;
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  };
  const handleNextMonth = () => {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  };
  const handleDaySelect = (day) => {
    const nextDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    setSelectedDate(nextDate);
    setSelectedTime("");
  };
  const encodeMailtoValue = (value) =>
    encodeURIComponent(value).replace(/%0A/g, "%0D%0A");
  const openMailClient = (subject, body) => {
    if (typeof window === "undefined") return;
    const params = [];
    if (subject) {
      params.push(`subject=${encodeMailtoValue(subject)}`);
    }
    if (body) {
      params.push(`body=${encodeMailtoValue(body)}`);
    }
    const mailtoUrl = params.length
      ? `${CONTACT_EMAIL_MAILTO}?${params.join("&")}`
      : CONTACT_EMAIL_MAILTO;
    const popup = window.open(mailtoUrl, "_blank", "noopener,noreferrer");
    if (!popup) {
      window.location.href = mailtoUrl;
    }
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setFormErrors({});
    setRequestStatus("idle");
    setRequestError("");
  };
  const validateForm = () => {
    const nextErrors = {};
    if (!appointmentDetails.name.trim()) {
      nextErrors.name = t.contact.modal.errors.required;
    }
    if (!appointmentDetails.email.trim()) {
      nextErrors.email = t.contact.modal.errors.required;
    } else if (!/^\S+@\S+\.\S+$/.test(appointmentDetails.email.trim())) {
      nextErrors.email = t.contact.modal.errors.email;
    }
    if (!appointmentDetails.phone.trim()) {
      nextErrors.phone = t.contact.modal.errors.required;
    }
    if (!appointmentDetails.message.trim()) {
      nextErrors.message = t.contact.modal.errors.required;
    }
    setFormErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };
  const handleModalSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    if (!selectedBaseDateLabel || !selectedBaseTimeLabel) {
      setRequestStatus("error");
      setRequestError(t.contact.modal.error);
      return;
    }
    setRequestStatus("submitting");
    setRequestError("");
    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: appointmentDetails.name.trim(),
          email: appointmentDetails.email.trim(),
          phone: appointmentDetails.phone.trim(),
          message: appointmentDetails.message.trim(),
          requestedDate: selectedBaseDateLabel,
          requestedTime: selectedBaseTimeLabel,
          baseTimeZone,
          localTimeZone: showLocalTime ? localTimeZone : "",
          localTime: showLocalTime ? selectedLocalTimeLabel : "",
          language,
        }),
      });
      if (!response.ok) {
        const errorPayload = await response.json().catch(() => ({}));
        const message =
          response.status === 404
            ? t.contact.modal.devError
            : errorPayload.error || t.contact.modal.error;
        throw new Error(message);
      }
      setRequestStatus("success");
      setAppointmentDetails({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setFormErrors({});
    } catch (error) {
      setRequestStatus("error");
      setRequestError(
        error instanceof Error && error.message
          ? error.message
          : t.contact.modal.error
      );
    }
  };
  const handleFieldChange = (field) => (event) => {
    const value = event.target.value;
    setAppointmentDetails((prev) => ({ ...prev, [field]: value }));
    setFormErrors((prev) => ({ ...prev, [field]: "" }));
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
    setFormErrors({});
    setRequestStatus("idle");
    setRequestError("");
  };
  const isSubmitting = requestStatus === "submitting";
  const isSuccess = requestStatus === "success";
  const isError = requestStatus === "error";
  useEffect(() => {
    if (!isModalOpen) return;
    previousFocusRef.current = document.activeElement;
    if (modalFirstFieldRef.current) {
      modalFirstFieldRef.current.focus();
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
        return;
      }
      if (event.key !== "Tab") return;
      const modalElement = modalRef.current;
      if (!modalElement) return;
      const focusableElements = modalElement.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length === 0) return;
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };
    const modalElement = modalRef.current;
    if (modalElement) {
      modalElement.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = previousOverflow;
      if (modalElement) {
        modalElement.removeEventListener("keydown", handleKeyDown);
      }
      if (previousFocusRef.current && previousFocusRef.current.focus) {
        previousFocusRef.current.focus();
      }
    };
  }, [isModalOpen, showLocalTime, selectedLocalTimeLabel, localTimeZone]);

  return (
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
          <nav aria-label={t.contact.breadcrumb.label}>
            <ol className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-muted">
              <li>
                <Link
                  to={sectionLink("#home")}
                  className="transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded-sm"
                >
                  {t.contact.breadcrumb.home}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">
                {t.contact.breadcrumb.current}
              </li>
            </ol>
          </nav>
          <h1 className="mt-4 text-3xl md:text-5xl font-display font-semibold text-ink leading-tight">
            {t.contact.title}
          </h1>
        </div>
      </header>

      <section className="w-full py-16">
        <div className="max-w-screen-xl mx-auto px-4 lg:pl-24 lg:pr-8">
          <div className="grid gap-10 lg:grid-cols-[1fr,1.4fr]">
            <div>
              <p id="contact-page-intro" className="text-base md:text-lg text-muted">
                {t.contact.pageIntro}
              </p>
              <p id="contact-page-email" className="mt-6 text-sm text-muted">
                {t.contact.intro}{" "}
                <span className="text-accent font-semibold cursor-pointer">
                  <a
                    href={CONTACT_EMAIL_MAILTO}
                    onClick={(event) => {
                      event.preventDefault();
                      openMailClient();
                    }}
                    className="text-link rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                  >
                    {t.contact.emailLinkLabel}
                  </a>
                </span>
                .
              </p>
            </div>
            <div
              aria-describedby="contact-page-intro contact-page-email"
              className="rounded-3xl border border-border/60 bg-surface/90 p-6 md:p-8 shadow-lg shadow-black/40"
            >
              <div className="border-b border-border/60 pb-6">
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-ink">
                  {t.contact.scheduler.title}
                </h2>
                <p className="mt-3 text-sm text-muted">
                  {t.contact.scheduler.intro}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-accent">
                    {t.contact.scheduler.dateLabel}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-ink capitalize">
                    {monthLabel}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrevMonth}
                    disabled={isPrevDisabled}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${
                      isPrevDisabled
                        ? "border-border/40 text-muted/40 cursor-not-allowed"
                        : "border-border/60 text-ink hover:border-accent/50"
                    }`}
                    aria-label={t.contact.scheduler.prevMonthLabel}
                  >
                    <span aria-hidden="true">{"<"}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNextMonth}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-sm text-ink transition hover:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                    aria-label={t.contact.scheduler.nextMonthLabel}
                  >
                    <span aria-hidden="true">{">"}</span>
                  </button>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-7 gap-2 text-[11px] uppercase tracking-[0.28em] text-muted">
                {weekdayLabels.map((label) => (
                  <span key={label} className="text-center">
                    {label}
                  </span>
                ))}
              </div>
              <div
                className="mt-3 grid grid-cols-7 gap-2"
                role="grid"
                aria-label={t.contact.scheduler.dateLabel}
              >
                {dayCells.map((day, index) => {
                  if (!day) {
                    return <span key={`empty-${index}`} />;
                  }
                  const dayDate = new Date(
                    currentMonth.getFullYear(),
                    currentMonth.getMonth(),
                    day
                  );
                  const isPast = dayDate < normalizedToday;
                  const isToday = isSameDay(dayDate, normalizedToday);
                  const isSelected = isSameDay(dayDate, selectedDate);
                  return (
                    <button
                      key={day}
                      type="button"
                      onClick={() => handleDaySelect(day)}
                      disabled={isPast}
                      aria-pressed={isSelected}
                      aria-current={isToday ? "date" : undefined}
                      aria-label={formatDate(dayDate)}
                      className={`h-10 w-10 rounded-full text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${
                        isPast
                          ? "text-muted/40 cursor-not-allowed"
                          : isSelected
                          ? "bg-accent text-surface shadow-md shadow-black/30"
                          : "text-ink hover:bg-surface-muted/70"
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 border-t border-border/60 pt-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-accent">
                    {t.contact.scheduler.timeLabel}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-muted">
                    {t.contact.scheduler.duration}
                  </p>
                </div>
                {selectedDate ? (
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        aria-pressed={selectedTime === time}
                        className={`rounded-full border px-3 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${
                          selectedTime === time
                            ? "border-accent bg-accent text-surface"
                            : "border-border/60 text-ink hover:border-accent/40"
                        }`}
                      >
                        {formatTimeValue(time, selectedDate || monthStart, baseTimeZone)}
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="mt-4 text-sm text-muted">
                    {t.contact.scheduler.timeEmpty}
                  </p>
                )}
              </div>

              <div className="mt-6 rounded-2xl border border-border/60 bg-surface/80 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-accent">
                  {t.contact.scheduler.selectedLabel}
                </p>
                <p className="mt-2 text-sm text-ink" aria-live="polite">
                  {selectedDate && selectedTime
                    ? `${selectedBaseDateLabel} - ${selectedBaseTimeLabel}`
                    : "--"}
                </p>
                <p className="mt-2 text-xs text-muted">
                  {t.contact.scheduler.timeZoneLabel}: {baseTimeZone}
                  {showLocalTime
                    ? ` (${localTimeZone}: ${selectedLocalTimeLabel})`
                    : ""}
                </p>
              </div>

              <button
                type="button"
                onClick={handleOpenModal}
                disabled={!selectedDate || !selectedTime}
                className={`mt-6 w-full rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${
                  selectedDate && selectedTime
                    ? "bg-accent text-surface shadow-lg shadow-black/30 hover:bg-white"
                    : "cursor-not-allowed bg-surface-muted text-muted"
                }`}
              >
                {t.contact.scheduler.button}
              </button>
            </div>
          </div>
        </div>
      </section>
      {isModalOpen ? (
        <div
          className="fixed inset-0 z-[10050] flex items-center justify-center bg-surface/80 px-4 py-6 backdrop-blur"
          role="presentation"
          onClick={closeModal}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="appointment-modal-title"
            aria-describedby="appointment-modal-intro appointment-modal-summary"
            className="w-full max-w-xl rounded-3xl border border-border/60 bg-surface/95 p-6 shadow-2xl shadow-black/60"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-border/60 pb-4">
              <div>
                <h2
                  id="appointment-modal-title"
                  className="text-2xl font-display font-semibold text-ink"
                >
                  {t.contact.modal.title}
                </h2>
                <p
                  id="appointment-modal-intro"
                  className="mt-2 text-sm text-muted"
                >
                  {t.contact.modal.intro}
                </p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-full border border-border/60 px-3 py-1 text-xs uppercase tracking-[0.3em] text-muted transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                {t.contact.modal.cancel}
              </button>
            </div>

            <div
              id="appointment-modal-summary"
              className="mt-4 rounded-2xl border border-border/60 bg-surface/80 p-4"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-accent">
                {t.contact.modal.summaryLabel}
              </p>
              <p className="mt-2 text-sm text-ink">
                {selectedBaseDateLabel && selectedBaseTimeLabel
                  ? `${selectedBaseDateLabel} - ${selectedBaseTimeLabel} (${baseTimeZone})`
                  : "--"}
                {showLocalTime
                  ? ` | ${localTimeZone}: ${selectedLocalTimeLabel}`
                  : ""}
              </p>
            </div>

            {isSuccess ? (
              <p
                className="mt-4 rounded-2xl border border-emerald-400/40 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100"
                role="status"
              >
                {t.contact.modal.success}
              </p>
            ) : null}
            {isError ? (
              <p
                className="mt-4 rounded-2xl border border-rose-400/40 bg-rose-400/10 px-4 py-3 text-sm text-rose-100"
                role="alert"
              >
                {requestError || t.contact.modal.error}
              </p>
            ) : null}

            <form
              className="mt-6 space-y-4"
              onSubmit={handleModalSubmit}
              noValidate
            >
              <div>
                <label
                  htmlFor="appointment-name"
                  className="text-xs uppercase tracking-[0.3em] text-muted"
                >
                  {t.contact.nameLabel}
                </label>
                <input
                  ref={modalFirstFieldRef}
                  id="appointment-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={appointmentDetails.name}
                  onChange={handleFieldChange("name")}
                  aria-invalid={!!formErrors.name}
                  aria-describedby={
                    formErrors.name ? "appointment-name-error" : undefined
                  }
                  placeholder={t.contact.namePlaceholder}
                  disabled={isSubmitting || isSuccess}
                  className="mt-2 w-full rounded-xl border border-border/60 bg-surface px-3 py-2 text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent-strong/80"
                />
                {formErrors.name ? (
                  <p
                    id="appointment-name-error"
                    className="mt-1 text-xs text-rose-200"
                    role="alert"
                  >
                    {formErrors.name}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="appointment-email"
                  className="text-xs uppercase tracking-[0.3em] text-muted"
                >
                  {t.contact.emailLabel}
                </label>
                <input
                  id="appointment-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={appointmentDetails.email}
                  onChange={handleFieldChange("email")}
                  aria-invalid={!!formErrors.email}
                  aria-describedby={
                    formErrors.email ? "appointment-email-error" : undefined
                  }
                  placeholder={t.contact.emailPlaceholder}
                  disabled={isSubmitting || isSuccess}
                  className="mt-2 w-full rounded-xl border border-border/60 bg-surface px-3 py-2 text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent-strong/80"
                />
                {formErrors.email ? (
                  <p
                    id="appointment-email-error"
                    className="mt-1 text-xs text-rose-200"
                    role="alert"
                  >
                    {formErrors.email}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="appointment-phone"
                  className="text-xs uppercase tracking-[0.3em] text-muted"
                >
                  {t.contact.phoneLabel}
                </label>
                <input
                  id="appointment-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  value={appointmentDetails.phone}
                  onChange={handleFieldChange("phone")}
                  aria-invalid={!!formErrors.phone}
                  aria-describedby={
                    formErrors.phone ? "appointment-phone-error" : undefined
                  }
                  placeholder={t.contact.phonePlaceholder}
                  disabled={isSubmitting || isSuccess}
                  className="mt-2 w-full rounded-xl border border-border/60 bg-surface px-3 py-2 text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent-strong/80"
                />
                {formErrors.phone ? (
                  <p
                    id="appointment-phone-error"
                    className="mt-1 text-xs text-rose-200"
                    role="alert"
                  >
                    {formErrors.phone}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="appointment-message"
                  className="text-xs uppercase tracking-[0.3em] text-muted"
                >
                  {t.contact.messageLabel}
                </label>
                <textarea
                  id="appointment-message"
                  name="message"
                  rows="4"
                  required
                  value={appointmentDetails.message}
                  onChange={handleFieldChange("message")}
                  aria-invalid={!!formErrors.message}
                  aria-describedby={
                    formErrors.message ? "appointment-message-error" : undefined
                  }
                  placeholder={t.contact.messagePlaceholder}
                  disabled={isSubmitting || isSuccess}
                  className="mt-2 w-full rounded-xl border border-border/60 bg-surface px-3 py-2 text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent-strong/80"
                ></textarea>
                {formErrors.message ? (
                  <p
                    id="appointment-message-error"
                    className="mt-1 text-xs text-rose-200"
                    role="alert"
                  >
                    {formErrors.message}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-full border border-border/60 px-5 py-2 text-sm text-muted transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                >
                  {t.contact.modal.cancel}
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className={`rounded-full px-5 py-2 text-sm font-semibold text-surface shadow-lg shadow-black/30 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${
                    isSubmitting || isSuccess
                      ? "cursor-not-allowed bg-surface-muted text-muted"
                      : "bg-accent hover:bg-white"
                  }`}
                >
                  {isSubmitting ? t.contact.modal.sending : t.contact.modal.submit}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

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
  const isContactPage = location.pathname === "/contact";
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
      href: "https://dchavez3395.github.io/My-Portfolio/resume.PDF",
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
        ) : isContactPage ? (
          <ContactPage t={t} sectionLink={sectionLink} language={language} />
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
                  href="https://dchavez3395.github.io/My-Portfolio/resume.PDF"
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
          <div className="rounded-3xl border border-border/60 bg-surface/90 p-8 md:p-12 shadow-lg shadow-black/40">
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
          <div className="rounded-3xl border border-border/60 bg-surface/90 p-8 md:p-12 shadow-lg shadow-black/40">
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
          <div className="pb-8">
            <h2 className="text-3xl md:text-4xl font-display font-semibold inline border-b-2 border-accent">
              {t.portfolio.title} <span className="text-accent">.</span>
            </h2>
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
                <div className="relative h-36 md:h-40 w-full overflow-hidden bg-gradient-to-br from-slate-50/90 to-slate-200/70">
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-contain"
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
            <Link
              to="/contact"
              className="group text-surface w-fit px-6 py-3 my-3 flex items-center rounded-full bg-accent shadow-lg shadow-black/30 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              {t.portfolio.ctaButton}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowIcon className="ml-1" />
              </span>
            </Link>
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
                className="rounded-2xl border border-border/60 bg-surface/80 p-5 shadow-sm shadow-black/40"
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

      <section className="w-full py-20 bg-gradient-to-b from-surface-muted via-surface to-surface-muted">
        <div className="max-w-screen-xl mx-auto px-4 lg:pl-24 lg:pr-8">
          <div className="rounded-3xl border border-border/60 bg-surface/90 p-8 md:p-10 shadow-lg shadow-black/40 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-ink">
                {t.homeContact.title}
              </h2>
              <p className="mt-3 text-sm md:text-base text-muted">
                {t.homeContact.body}
              </p>
            </div>
            <Link
              to="/contact"
              className="group text-surface w-fit px-6 py-3 flex items-center rounded-full bg-accent shadow-lg shadow-black/30 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              {t.homeContact.button}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowIcon className="ml-1" />
              </span>
            </Link>
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
