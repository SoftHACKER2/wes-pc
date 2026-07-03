import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return Response.json({ success: false, error: "Missing API key" }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "WES PCS <onboarding@resend.dev>",
      to: "thomasbaratti2@gmail.com",
      subject: "New Custom PC Request",
      text: `NEW PC REQUEST\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    await resend.emails.send({
      from: "WES PCS <onboarding@resend.dev>",
      to: email,
      subject: "We've received your request — WES PCS",
      text: `Hi ${name},\n\nThanks for reaching out to WES PCS! We've received your request and will get back to you within 24 hours with a full quote.\n\nIn the meantime, feel free to message Wes directly on WhatsApp: +44 7395 530 395\n\nYour request details:\n${message}\n\nSpeak soon,\nWes\nWES PCS`,
    });

    return Response.json({ success: true });
  } catch (error: any) {
    return Response.json(
      { success: false, error: error?.message || "Server error" },
      { status: 500 }
    );
  }
}
