"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Send, Mail, Clock, AlertCircle, MessageSquareText } from "lucide-react";
import { Reveal } from "@/components/reveal";

const inputCls =
  "h-11 w-full rounded-lg border border-border bg-background px-3.5 text-[16px] text-text transition-[border-color,box-shadow] duration-150 placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary sm:text-[15px]";

const areaCls =
  "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-[16px] leading-6 text-text transition-[border-color,box-shadow] duration-150 placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary sm:text-[15px]";

function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="text-[13px] font-medium text-text-muted">
        {label}{" "}
        {required ? (
          <span className="font-semibold text-primary" aria-hidden="true">*</span>
        ) : (
          <span className="text-text-muted/60">{hint ?? "(optional)"}</span>
        )}
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
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
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
        setError(data.error ?? "We could not send that just now. Please try again.");
        return;
      }
      setSent(true);
    } catch {
      setError("We could not send that just now. Check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="rounded-lg border hairline bg-surface p-6 text-center sm:p-10">
        <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-background">
          <CheckCircle2 className="h-5 w-5 text-brandgreen" aria-hidden="true" />
        </span>
        <h2 className="mt-4 text-lg font-bold tracking-tight text-text">Message received.</h2>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-text-muted">
          Thanks for reaching out. We reply within one working day at <span className="font-semibold text-text">kenilbhandari@zohomail.in</span>.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 inline-flex h-10 items-center justify-center rounded-lg border hairline px-5 text-sm font-semibold text-text hover:bg-background"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-lg border hairline bg-surface p-4 sm:p-8">
      <h2 className="text-[16px] font-bold tracking-tight text-text sm:text-lg">Send us a message</h2>
      <p className="mt-1 hidden text-[14px] leading-6 text-text-muted sm:block">
        One honest paragraph is enough. We will ask the right follow ups.
      </p>
      <form onSubmit={submit} className="mt-4 flex flex-col gap-4 sm:mt-6 sm:gap-5" noValidate>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          <Field label="Your name" required>
            <input value={form.name} onChange={set("name")} placeholder="Priya Shah" className={inputCls} autoComplete="name" />
          </Field>
          <Field label="Phone or email" required>
            <input value={form.contact} onChange={set("contact")} placeholder="you@company.in" className={inputCls} autoComplete="email" />
          </Field>
        </div>
        <Field label="Company or firm">
          <input value={form.company} onChange={set("company")} placeholder="Shah Contractors" className={inputCls} autoComplete="organization" />
        </Field>
        <Field label="What needs to work better?" required>
          <textarea value={form.message} onChange={set("message")} rows={3} placeholder="Describe the problem in one or two lines." className={`${areaCls} resize-y`} />
        </Field>
        {error && (
          <p role="alert" className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm font-medium text-red-700">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /> {error}
          </p>
        )}
        <input type="text" name="website" autoComplete="off" tabIndex={-1} aria-hidden="true" className="hidden" />
        <div className="flex flex-col gap-2 pt-1 sm:gap-3 sm:pt-2">
          <button type="submit" disabled={sending} className="btn-nudge press inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-[15px] font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-60 sm:w-auto">
            {sending ? "Sending..." : "Send message"} <Send className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
          <p className="text-center text-xs text-text-muted sm:text-left sm:text-[13px]">Replies within one working day.</p>
        </div>
      </form>
    </div>
  );
}

const SIDE_ROWS = [
  { icon: Mail, t: "Email", v: "kenilbhandari@zohomail.in", href: "mailto:kenilbhandari@zohomail.in", mobile: true },
  { icon: Clock, t: "Response time", v: "Within one working day", href: undefined, mobile: true },
  {
    icon: MessageSquareText,
    t: "Good first message",
    v: "We run 3 sites, about 40 workers. Muster and payments are chaos.",
    href: undefined,
    mobile: false,
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <section className="border-b hairline">
        <div className="mx-auto w-full max-w-6xl px-4 pb-5 pt-6 sm:px-6 sm:pb-16 sm:pt-16">
          <Reveal>
            <p className="eyebrow text-primary">Contact</p>
            <h1 className="mt-2 max-w-2xl text-[1.65rem] font-bold leading-[1.12] tracking-tight text-text sm:mt-3 sm:text-5xl sm:leading-[1.06]">
              Tell us what needs to work better<span className="text-primary">.</span>
            </h1>
            <p className="mt-4 hidden max-w-xl text-base leading-relaxed text-text-muted sm:block sm:text-[15px]">
              One working day reply. Describe a simple tool, a payroll system,
              or a complete ERP and we will take it from there.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6 sm:py-16">
        <div className="grid items-start gap-4 sm:gap-6 lg:grid-cols-5 lg:gap-8">
          <Reveal className="lg:col-span-3">
            <ContactForm />
          </Reveal>
          <Reveal delay={120} className="lg:col-span-2">
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="divide-y divide-[var(--border)] rounded-lg border hairline bg-surface">
                {SIDE_ROWS.map((c) => (
                  <div key={c.t} className={`flex items-start gap-3 p-4 sm:p-5 ${c.mobile ? "" : "hidden sm:flex"}`}>
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-soft">
                      <c.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold text-text">{c.t}</p>
                      {c.href ? (
                        <a href={c.href} className="mt-0.5 block truncate text-[14px] font-medium text-text-muted transition-colors hover:text-primary sm:mt-1">
                          {c.v}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-[14px] leading-6 text-text-muted sm:mt-1 sm:leading-relaxed">{c.v}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="hidden rounded-lg border hairline bg-primary-soft p-5 sm:block">
                <p className="text-[14px] font-bold text-text">Prefer browsing first?</p>
                <p className="mt-1.5 text-[14px] leading-relaxed text-text-muted">
                  <Link href="/#work" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
                    See the work <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>{" "}
                  Five projects, five stories.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
