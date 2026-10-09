"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Send, Mail, Clock, ClipboardList } from "lucide-react";
import { Reveal } from "@/components/reveal";

const inputCls =
  "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-[15px] text-text placeholder:text-text-muted focus:border-primary focus:outline-none";

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
      setError("Please fill your name, phone/email and a short message.");
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
      <div className="rounded-2xl border hairline bg-surface p-6 text-center sm:p-10">
        <CheckCircle2 className="mx-auto h-10 w-10 text-brandgreen" aria-hidden="true" />
        <h2 className="mt-4 text-xl font-bold text-text">Message received, {form.name.split(" ")[0]}.</h2>
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
    <div className="rounded-2xl border hairline bg-surface p-5 sm:p-8">
      <form onSubmit={submit} className="flex flex-col gap-4" noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm">
            <span className="font-semibold text-text">Your name *</span>
            <input value={form.name} onChange={set("name")} placeholder="e.g. Priya Shah" className={inputCls} autoComplete="name" />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            <span className="font-semibold text-text">Phone or email *</span>
            <input value={form.contact} onChange={set("contact")} placeholder="+91 … or you@company.in" className={inputCls} autoComplete="email" />
          </label>
        </div>
        <label className="flex flex-col gap-2 text-sm">
          <span className="font-semibold text-text">Company / firm</span>
          <input value={form.company} onChange={set("company")} placeholder="e.g. Shah Contractors" className={inputCls} autoComplete="organization" />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          <span className="font-semibold text-text">What needs to work better? *</span>
          <textarea value={form.message} onChange={set("message")} rows={5} placeholder="Tell us about the problem you're trying to solve…" className={`${inputCls} resize-y`} />
        </label>
        {error && <p role="alert" className="text-sm font-medium text-red-600">{error}</p>}
        <input type="text" name="website" autoComplete="off" tabIndex={-1} aria-hidden="true" className="hidden" />
        <button type="submit" disabled={sending} className="btn-nudge press inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-60">
          {sending ? "Sending…" : "Send message"} <Send className="h-4 w-4" aria-hidden="true" />
        </button>
        <p className="text-xs leading-5 text-text-muted">Goes straight to our team. We reply within one working day, and your details stay with us.</p>
      </form>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <section className="border-b hairline">
        <div className="mx-auto w-full max-w-6xl px-4 pb-10 pt-10 sm:px-6 sm:pb-14 sm:pt-16">
          <Reveal>
            <p className="eyebrow text-primary">Contact</p>
            <h1 className="mt-3 max-w-2xl text-3xl font-bold text-text sm:text-5xl sm:leading-[1.06]">
              Tell us what needs to work better.
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-text-muted">
              One working-day reply. A simple business tool, a dependable payroll system,
              or a complete ERP — describe the problem and we&apos;ll take it from there.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
        <div className="grid gap-5 lg:grid-cols-5 lg:gap-6">
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
                <div key={c.t} className="rounded-2xl border hairline bg-surface p-5">
                  <p className="flex items-center gap-2 text-sm font-bold text-text">
                    <c.icon className="h-4 w-4 text-primary" aria-hidden="true" /> {c.t}
                  </p>
                  {c.href ? (
                    <a href={c.href} className="mt-1 block text-sm text-text-muted transition-colors hover:text-primary">{c.v}</a>
                  ) : (
                    <p className="mt-1 text-sm leading-6 text-text-muted">{c.v}</p>
                  )}
                </div>
              ))}
              <div className="rounded-2xl border p-5" style={{ background: "var(--primary-soft)", borderColor: "rgba(234,88,12,0.3)" }}>
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
