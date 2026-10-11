import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function pick(v: unknown, max: number) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "That request was unreadable. Try again." }, { status: 400 });
  }

  const b = (body ?? {}) as Record<string, unknown>;

  if (typeof b.website === "string" && b.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const enquiry = {
    name: pick(b.name, 80),
    contact: pick(b.contact, 120),
    company: pick(b.company, 120) || undefined,
    message: pick(b.message, 2000),
  };

  if (!enquiry.name || !enquiry.contact || !enquiry.message) {
    return NextResponse.json(
      { error: "Please add your name, phone or email, and a short message." },
      { status: 400 }
    );
  }
  if (enquiry.contact.length < 5) {
    return NextResponse.json(
      { error: "That phone or email looks too short. Please double check it." },
      { status: 400 }
    );
  }

  const subject = `New enquiry: ${enquiry.name}${enquiry.company ? ` (${enquiry.company})` : ""}`;
  const text = [
    `Name: ${enquiry.name}`,
    `Contact: ${enquiry.contact}`,
    enquiry.company ? `Company: ${enquiry.company}` : null,
    "",
    enquiry.message,
  ]
    .filter(Boolean)
    .join("\n");

  const zohoUser = process.env.ZOHO_EMAIL;
  const zohoPass = process.env.ZOHO_APP_PASSWORD;
  const to = process.env.CONTACT_TO ?? process.env.CONTACT_TO_EMAIL;

  if (zohoUser && zohoPass && to) {
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.zoho.in",
        port: 465,
        secure: true,
        auth: { user: zohoUser, pass: zohoPass },
      });
      await transporter.sendMail({ from: `OrangeDev <${zohoUser}>`, to, subject, text, replyTo: enquiry.contact.includes("@") ? enquiry.contact : undefined });
    } catch (e) {
      console.error("[contact] zoho send failed", e);
      return NextResponse.json(
        { error: "We could not send that just now. Email kenilbhandari@zohomail.in directly?" },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  }

  const resendKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL ?? "OrangeDev <kenilbhandari@zohomail.in>";
  if (resendKey && to) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, to, subject, text }),
    });
    if (!res.ok) {
      console.error("[contact] inbox forward failed", await res.text());
      return NextResponse.json(
        { error: "We could not send that just now. Email kenilbhandari@zohomail.in directly?" },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  }

  console.log("[contact enquiry] (no mail configured)", enquiry);
  return NextResponse.json({ ok: true });
}
