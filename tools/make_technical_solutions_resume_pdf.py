from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output" / "pdf"
OUT.mkdir(parents=True, exist_ok=True)
FINAL_PDF = OUT / "Daniel_Chavez_Technical_Solutions_Resume.pdf"

INK = colors.HexColor("#1B1F24")
BLUE = colors.HexColor("#14536F")
MUTED = colors.HexColor("#586069")
HAIRLINE = colors.HexColor("#D7E1E7")


def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("Helvetica", 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawCentredString(
        letter[0] / 2,
        0.28 * inch,
        f"Daniel Chavez | Technical Solutions | danieldev.ca | Page {doc.page}",
    )
    canvas.restoreState()


def section_heading(text, styles):
    return Paragraph(text.upper(), styles["Section"])


def capability(label, text, styles):
    return Paragraph(f"<b>{label}:</b> {text}", styles["Capability"])


def bullet(text, styles):
    return Paragraph(text, styles["ResumeBullet"], bulletText="-")


def job(role, company, location, dates, bullets, styles):
    header = Table(
        [[Paragraph(f"<b>{role}</b> - <font color='#14536F'><b>{company}</b></font>", styles["Job"]),
          Paragraph(dates, styles["JobDate"])]],
        colWidths=[5.55 * inch, 1.55 * inch],
        hAlign="LEFT",
    )
    header.setStyle(TableStyle([
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    parts = [header, Paragraph(location, styles["JobMeta"])]
    parts.extend(bullet(item, styles) for item in bullets)
    return KeepTogether(parts)


def build_styles():
    styles = getSampleStyleSheet()
    styles.add(ParagraphStyle(
        name="Name",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=22,
        leading=23,
        textColor=INK,
        spaceAfter=1,
    ))
    styles.add(ParagraphStyle(
        name="Tagline",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=10.3,
        leading=11.5,
        textColor=BLUE,
        spaceAfter=2,
    ))
    styles.add(ParagraphStyle(
        name="Contact",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=8.2,
        leading=9.2,
        textColor=MUTED,
        spaceAfter=6,
    ))
    styles.add(ParagraphStyle(
        name="Section",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=9.7,
        leading=10.7,
        textColor=BLUE,
        spaceBefore=6,
        spaceAfter=3,
        borderColor=HAIRLINE,
        borderWidth=0,
        borderBottomWidth=0.7,
        borderPadding=(0, 0, 2, 0),
    ))
    styles.add(ParagraphStyle(
        name="BodyResume",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=8.8,
        leading=10.5,
        textColor=INK,
        spaceAfter=3,
    ))
    styles.add(ParagraphStyle(
        name="Capability",
        parent=styles["BodyResume"],
        fontSize=8.45,
        leading=9.8,
        spaceAfter=2,
    ))
    styles.add(ParagraphStyle(
        name="Job",
        parent=styles["BodyResume"],
        fontSize=9.1,
        leading=10.2,
        spaceAfter=0,
    ))
    styles.add(ParagraphStyle(
        name="JobDate",
        parent=styles["Job"],
        fontSize=8.2,
        textColor=MUTED,
        alignment=TA_RIGHT,
    ))
    styles.add(ParagraphStyle(
        name="JobMeta",
        parent=styles["BodyResume"],
        fontSize=8.1,
        leading=9,
        textColor=MUTED,
        italic=True,
        spaceAfter=1.5,
    ))
    styles.add(ParagraphStyle(
        name="ResumeBullet",
        parent=styles["BodyResume"],
        fontSize=8.65,
        leading=10.15,
        leftIndent=11,
        firstLineIndent=-7,
        bulletIndent=0,
        spaceAfter=1.5,
    ))
    return styles


def build():
    styles = build_styles()
    doc = BaseDocTemplate(
        str(FINAL_PDF),
        pagesize=letter,
        leftMargin=0.7 * inch,
        rightMargin=0.7 * inch,
        topMargin=0.5 * inch,
        bottomMargin=0.48 * inch,
        title="Daniel Chavez - Technical Solutions Resume",
        author="Daniel Chavez",
        subject="Sales engineering, solutions, implementation, and client delivery",
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="resume")
    doc.addPageTemplates(PageTemplate(id="resume", frames=[frame], onPage=footer))

    story = [
        Paragraph("DANIEL CHAVEZ", styles["Name"]),
        Paragraph("TECHNICAL SOLUTIONS | CLIENT DELIVERY | SALES", styles["Tagline"]),
        Paragraph(
            "Winnipeg, MB | 204-721-2248 | dchavez3395@gmail.com | danieldev.ca | linkedin.com/in/danielchavez2",
            styles["Contact"],
        ),
        section_heading("Professional Summary", styles),
        Paragraph(
            "Bilingual English/Spanish solutions professional combining six years inside automotive retail - F&amp;I deal structuring, dealership CRM and BDC lead workflows, Dealertrack and Equifax - with 4+ years shipping production web applications. Strong fit for sales engineering, solutions consulting, implementation, technical account management, and customer-facing SaaS roles.",
            styles["BodyResume"],
        ),
        section_heading("Core Capabilities", styles),
        capability("Customer and revenue", "Consultative discovery, outbound prospecting and cold outreach, CRM and pipeline ownership, product demonstration, objection handling, negotiation, follow-up discipline, automotive F&amp;I", styles),
        capability("Languages", "English (native), Spanish (advanced, client-facing)", styles),
        capability("Solutions and delivery", "Requirements translation, client walkthroughs, REST APIs, CMS workflows, implementation, troubleshooting, stakeholder updates, QA, training and support", styles),
        capability("Technical foundation", "JavaScript, React, Node.js, Express, PHP, WordPress, Shopify Hydrogen, HTML/CSS, Git/GitHub, Figma, Vercel", styles),
        capability("Quality and risk", "WCAG accessibility, semantic HTML, documentation, compliance mindset, SEO, performance, cross-browser testing, AI-assisted workflows", styles),
        section_heading("Professional Experience", styles),
        job("Web Developer", "Vincent Design Inc.", "Winnipeg, MB", "Jan 2023 - Jul 2026", [
            "Built and maintained responsive production websites and web applications for agency clients across annual reports, Indigenous organizations, non-profits, public information, aviation, and e-commerce.",
            "Translated Figma designs and stakeholder requirements into reusable React and JavaScript components, WordPress/CMS workflows, REST API integrations, and scalable SCSS and Tailwind systems.",
            "Supported projects from build through launch and ongoing improvement, including accessibility QA, troubleshooting, deployment, content workflows, SEO, and performance across Vercel, WP Engine, and Flywheel.",
        ], styles),
        job("Front-End Developer", "Freelance", "Winnipeg, MB", "Aug 2021 - Present", [
            "Turn design mockups and existing codebases into responsive applications; build reusable components, add AJAX/JSON functionality, and debug or refactor legacy front-end code.",
        ], styles),
        job("Special Finance Manager", "Birchwood Credit Solutions", "Winnipeg, MB", "Nov 2018 - Jul 2021", [
            "Structured automotive finance deals across prime, near-prime, and subprime credit tiers, balancing customer affordability, lender requirements, documentation, compliance, and dealership objectives.",
            "Managed the process from credit submission through funding using Dealertrack, Equifax reports, lender negotiation, stipulation management, menu presentation, and contract completion.",
        ], styles),
        job("Business Development Manager", "Birchwood Nissan Brandon", "Brandon, MB", "Jan 2018 - Nov 2018", [
            "Managed inbound and outbound sales pipelines, CRM lead workflows, appointment conversion, and follow-up discipline while coordinating with sales and finance teams.",
        ], styles),
        job("Sales Consultant", "Birchwood Nissan Brandon", "Brandon, MB", "May 2015 - Jan 2018", [
            "Used consultative discovery, product knowledge, negotiation, and disciplined follow-up to guide customers through high-consideration vehicle purchases.",
            "Maintained the dealership's highest closing ratio in 2016 and 2018 and received the Bronze Nissan Club Excellence Award in 2016.",
        ], styles),
        section_heading("Additional Sales Background", styles),
        Paragraph(
            "Combined Insurance - door-to-door insurance prospecting and sales | House of Nissan - automotive sales | The Source - consumer technology retail sales",
            styles["BodyResume"],
        ),
        section_heading("Selected Technical Work", styles),
        bullet("Puchica - Built a Shopify Hydrogen storefront from an empty repository with reusable React components, catalogue taxonomy, SEO infrastructure, and Shopify Admin API integration.", styles),
        bullet("TELUS Reconciliation Report - Built an accessible React annual-report experience with screen-reader-aware data visualizations, client-controlled publishing, and an ongoing CMS workflow.", styles),
        bullet("Tamalpais Trust - Delivered a WordPress grant-partner directory, interactive map, community-investments showcase, and editor-run publishing workflow.", styles),
        section_heading("Training", styles),
        bullet("Web Accessibility Training - Deque University", styles),
        bullet("Complete Full-Stack Web Development Bootcamp - Dr. Angela Yu, Udemy", styles),
        bullet("Modern PHP: Beginner to Advanced - Jannis Seemann, Udemy", styles),
    ]
    doc.build(story)
    print(FINAL_PDF)


if __name__ == "__main__":
    build()
