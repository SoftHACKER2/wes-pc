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

    return Response.json({ success: true });
  } catch (error: any) {
    return Response.json(
      { success: false, error: error?.message || "Server error" },
      { status: 500 }
    );
  }
}
