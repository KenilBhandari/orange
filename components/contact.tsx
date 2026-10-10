// ```tsx
"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/reveal";

const inputClass =
  "w-full rounded-sm border border-border bg-transparent px-3.5 py-3 " +
  "text-sm text-text placeholder:text-text-muted/60 outline-none " +
  "transition-colors duration-200 hover:border-text/40 " +
  "focus:border-text focus:ring-1 focus:ring-text";

const labelClass = "mb-2 block text-sm font-medium text-text";

export function Contact() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-3 text-primary">
            03 · Start a conversation
          </p>

          <h2 className="text-3xl font-semibold leading-[1.08] tracking-tight text-text sm:text-5xl">
            Let's talk about the problem you're trying to solve.
          </h2>

          <p className="mt-4 max-w-lg text-base leading-7 text-text-muted sm:mt-5 sm:text-lg">
            Tell us what you have in mind. We'll reply within one working day.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-8 sm:mt-10">
          <Link
            href="/contact"
            className="group inline-flex min-h-11 items-center justify-center
              gap-3 rounded-sm border border-text bg-text px-5 py-3
              text-sm font-medium text-background transition-colors
              duration-200 hover:bg-transparent hover:text-text
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Discuss your project
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200
                group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Unable to send your message.");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="border-t border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <Reveal className="max-w-md">
          <p className="eyebrow mb-3 text-primary">
            Get in touch
          </p>

          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-text sm:text-4xl">
            Tell us what you're working on.
          </h1>

          <p className="mt-4 text-base leading-7 text-text-muted">
            A rough idea is a good place to start. Share a little context,
            and we'll take it from there.
          </p>

          <p className="mt-6 text-sm text-text-muted">
            Prefer email?{" "}
            <a
              href="mailto:hello@orangedev.in"
              className="font-medium text-text underline decoration-border
                underline-offset-4 transition-colors hover:text-primary"
            >
              hello@orangedev.in
            </a>
          </p>
        </Reveal>

        <Reveal delay={100} className="w-full max-w-xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className={labelClass}>
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Jane Smith"
                required
                maxLength={100}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Work email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="jane@company.com"
                required
                maxLength={254}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                What are you looking to build?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="A little about the problem, your idea, or what you need help with..."
                required
                minLength={10}
                maxLength={5000}
                className={`${inputClass} min-h-28 resize-y leading-6`}
              />
              <p className="mt-2 text-xs text-text-muted">
                A few sentences are plenty. No detailed brief needed.
              </p>
            </div>

            {status === "success" && (
              <p
                role="status"
                className="flex items-center gap-2 text-sm text-green-700"
              >
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                Thanks for reaching out. Your message has been sent.
              </p>
            )}

            {status === "error" && (
              <p role="alert" className="text-sm text-red-600">
                We couldn't send your message. Please try again or email us
                directly.
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="group inline-flex min-h-11 w-full items-center
                justify-center gap-2 rounded-sm border border-text
                bg-text px-5 py-3 text-sm font-medium text-background
                transition-colors duration-200 hover:bg-transparent
                hover:text-text focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-primary
                focus-visible:ring-offset-2 disabled:cursor-not-allowed
                disabled:opacity-50 sm:w-auto"
            >
              {loading ? "Sending..." : "Send inquiry"}
              {!loading && (
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200
                    group-hover:translate-x-1"
                  aria-hidden="true"
                />
              )}
            </button>

            <p className="text-xs leading-5 text-text-muted">
              Your details are only used to respond to your inquiry.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-6 py-8 sm:px-8 sm:py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="tnum text-xs font-medium tracking-wider text-text-muted">
              OrangeDev · Est. 2022
            </p>
            <p className="mt-2 max-w-sm text-sm text-text-muted">
              Software that makes work simpler.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-text-muted"
          >
            <Link href="/#work" className="transition-colors hover:text-primary">
              Work
            </Link>
            <Link
              href="/#solutions"
              className="transition-colors hover:text-primary"
            >
              Solutions
            </Link>
            <Link
              href="/#story"
              className="transition-colors hover:text-primary"
            >
              Our story
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-5 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} OrangeDev. All rights reserved.</p>
          <a
            href="mailto:hello@orangedev.in"
            className="font-medium text-text transition-colors hover:text-primary"
          >
            hello@orangedev.in
          </a>
        </div>
      </div>
    </footer>
  );
}
// ```
