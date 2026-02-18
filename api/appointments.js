const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      res.setHeader("Allow", "POST");
      return res.status(405).json({ error: "Method not allowed." });
    }

    let payload = req.body;
    if (!payload) {
      return res.status(400).json({ error: "Missing request body." });
    }
    if (typeof payload === "string") {
      try {
        payload = JSON.parse(payload);
      } catch (error) {
        return res.status(400).json({ error: "Invalid JSON payload." });
      }
    }

    const {
      name,
      email,
      phone,
      message,
      requestedDate,
      requestedTime,
      baseTimeZone,
      localTimeZone,
      localTime,
    } = payload;

    if (
      !name ||
      !email ||
      !phone ||
      !message ||
      !requestedDate ||
      !requestedTime ||
      !baseTimeZone
    ) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
      return res.status(500).json({ error: "Email service not configured." });
    }

    let Resend;
    try {
      ({ Resend } = await import("resend"));
    } catch (error) {
      console.error("Resend import failed:", error);
      return res.status(500).json({ error: "Email dependency missing." });
    }

    const toEmail =
      process.env.APPOINTMENTS_TO_EMAIL || "dchavez3395@gmail.com";
    const timeLine = localTimeZone && localTime
      ? `${requestedDate} - ${requestedTime} (${baseTimeZone}) | ${localTimeZone}: ${localTime}`
      : `${requestedDate} - ${requestedTime} (${baseTimeZone})`;

    const subject = `Appointment request: ${name}`;
    const text = `New appointment request\n\nRequested time: ${timeLine}\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}\n`;
    const html = `
    <h2>New appointment request</h2>
    <p><strong>Requested time:</strong> ${escapeHtml(timeLine)}</p>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Message:</strong><br />${escapeHtml(message).replace(
      /\n/g,
      "<br />"
    )}</p>
  `;

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: [toEmail],
      reply_to: email,
      subject,
      text,
      html,
    });

    if (error) {
      return res
        .status(500)
        .json({ error: error.message || "Failed to send email." });
    }

    return res.status(200).json({ ok: true, id: data?.id });
  } catch (error) {
    console.error("Appointment handler failed:", error);
    const message =
      error instanceof Error && error.message
        ? error.message
        : "Failed to send email.";
    return res.status(500).json({ error: message });
  }
}
