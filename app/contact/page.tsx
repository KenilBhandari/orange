"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Send, Mail, Clock, ClipboardList, AlertCircle } from "lucide-react";
import { Reveal } from "@/components/reveal";

const inputCls =
  "w-full rounded-lg border border-border bg-background px-4 py-3.5 text-base text-text shadow-[inset_0_1px_2px_rgba(22,19,17,0.04)] transition-[border-color,box-shadow] duration-200 placeholder:text-text-muted/70 hover:border-text/25 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15 sm:px-3.5 sm:py-3 sm:text-[15px]";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="text-[13px] font-semibold text-text">
        {label} {required && <span className="text-primary" aria-hidden="true">*</span>}
      </span>
      {children}
    </label>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "", company: "", message: "" });
  const [error, setError] = useState("");

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name.trim() || !form.contact.trim() || !form.message.trim()) {
      setError("Please add your name, phone or email, and a short message.");
      return;
    }
    setError("");
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          website: new FormData(e.currentTarget).get("website") ?? "",
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error ?? "We could not send that just now. Try again?");
        return;
      }
      setSent(true);
    } catch {
      setError("We could not send that just now. Check your connection and try again?");
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="rounded-[14px] border hairline bg-surface p-6 text-center shadow-[0_24px_60px_-40px_rgba(22,19,17,0.35)] sm:p-10">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brandgreen/10">
          <CheckCircle2 className="h-6 w-6 text-brandgreen" aria-hidden="true" />
        </span>
        <h2 className="mt-4 text-xl font-bold tracking-tight text-text">Message received, {form.name.split(" ")[0]}.</h2>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-text-muted">
          Thanks for writing{form.company ? ` about ${form.company}` : ""}. We reply within one
          working day at <span className="font-semibold text-text">hello@orangedev.in</span>.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-5 text-sm font-semibold text-primary hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-[14px] border hairline bg-surface p-5 shadow-[0_24px_60px_-40px_rgba(22,19,17,0.35)] sm:p-6">
      <div className="mb-5 border-b hairline pb-5">
        <h2 className="text-lg font-bold tracking-tight text-text">Send us a message</h2>
        <p className="mt-1 text-sm leading-6 text-text-muted">
          One honest paragraph is enough — we&apos;ll ask the right follow-ups.
        </p>
      </div>
      <form onSubmit={submit} className="flex flex-col gap-4" noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Your name" required>
            <input value={form.name} onChange={set("name")} placeholder="e.g. Priya Shah" className={inputCls} autoComplete="name" />
          </Field>
          <Field label="Phone or email" required>
            <input value={form.contact} onChange={set("contact")} placeholder="e.g. +91 98200 45678 or you@company.in" className={inputCls} autoComplete="email" />
          </Field>
        </div>
        <Field label="Company / firm">
          <input value={form.company} onChange={set("company")} placeholder="e.g. Shah Contractors" className={inputCls} autoComplete="organization" />
        </Field>
        <Field label="What needs to work better?" required>
          <textarea value={form.message} onChange={set("message")} rows={5} placeholder="Tell us about the problem you're trying to solve…" className={`${inputCls} resize-y`} />
        </Field>
        {error && (
          <p role="alert" className="flex items-start gap-2 rounded-lg bg-red-50 px-3.5 py-2.5 text-sm font-medium text-red-700">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /> {error}
          </p>
        )}
        <input type="text" name="website" autoComplete="off" tabIndex={-1} aria-hidden="true" className="hidden" />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button type="submit" disabled={sending} className="btn-nudge press inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-60 sm:text-[15px]">
            {sending ? "Sending…" : "Send message"} <Send className="h-4 w-4" aria-hidden="true" />
          </button>
          <p className="text-xs leading-5 text-text-muted">Goes straight to our team. Replies within one working day.</p>
        </div>
      </form>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <section className="border-b hairline">
        <div className="mx-auto w-full max-w-6xl px-4 pb-8 pt-10 sm:px-6 sm:pb-12 sm:pt-12">
          <Reveal>
            <p className="eyebrow text-primary">Contact</p>
            <h1 className="mt-3 max-w-2xl text-[1.9rem] font-bold leading-[1.1] tracking-tight text-text sm:text-5xl sm:leading-[1.06]">
              Tell us what needs to work better.
            </h1>
            <p className="mt-3 max-w-xl text-base leading-7 text-text-muted sm:mt-4 sm:text-[15px]">
              One working-day reply. A simple business tool, a dependable payroll system,
              or a complete ERP — describe the problem and we&apos;ll take it from there.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="grid items-start gap-4 lg:grid-cols-5 lg:gap-5">
          <Reveal className="lg:col-span-3">
            <ContactForm />
          </Reveal>
          <Reveal delay={120} className="lg:col-span-2">
            <div className="flex flex-col gap-3">
              {[
                { icon: Mail, t: "Email", v: "hello@orangedev.in", href: "mailto:hello@orangedev.in" },
                { icon: Clock, t: "Response time", v: "Within one working day", href: undefined },
                { icon: ClipboardList, t: "Good first message", v: "“We run 3 sites, ~40 workers. Muster and payments are chaos.” One honest line is enough.", href: undefined },
              ].map((c) => (
                <div key={c.t} className="rounded-[14px] border hairline bg-surface p-5">
                  <p className="flex items-center gap-2.5 text-[15px] font-bold text-text">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-soft">
                      <c.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                    </span>
                    {c.t}
                  </p>
                  {c.href ? (
                    <a href={c.href} className="mt-2 block py-0.5 text-[15px] font-medium text-text-muted transition-colors hover:text-primary">{c.v}</a>
                  ) : (
                    <p className="mt-2 text-[15px] leading-6 text-text-muted">{c.v}</p>
                  )}
                </div>
              ))}
              <div className="rounded-[14px] border p-5" style={{ background: "var(--primary-soft)", borderColor: "rgba(234,88,12,0.3)" }}>
                <p className="text-sm font-bold text-text">Prefer browsing first?</p>
                <p className="mt-1 text-sm leading-6 text-text-muted">
                  <Link href="/#work" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
                    See the work <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>{" "}
                  — five projects, five stories.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
