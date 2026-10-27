"use client";

import { FormEvent, useState } from "react";
import { contactEmail } from "@/lib/site";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const projectTypes = [
  "New website",
  "Redesign",
  "Landing page",
  "Site care",
  "Not sure yet",
];

const inputClass =
  "mt-2 w-full border border-line bg-cream px-3 py-3 text-base text-ink outline-none focus-visible:border-ink";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const organization = String(data.get("organization") ?? "").trim();
    const projectType = String(data.get("projectType") ?? "").trim();
    const website = String(data.get("website") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (message.length < 10) {
      nextErrors.message = "Add a short note about the project — at least a sentence.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("Fix the highlighted fields, then try again.");
      const firstInvalid = Object.keys(nextErrors)[0];
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      organization ? `Organization: ${organization}` : "",
      `Project type: ${projectType}`,
      website ? `Current website: ${website}` : "",
      "",
      message,
    ]
      .filter((line) => line !== "")
      .join("\n");

    const href = `mailto:${contactEmail}?subject=${encodeURIComponent(`Project inquiry from ${name}`)}&body=${encodeURIComponent(body)}`;
    setStatus(
      `Your email app should open with this message addressed to ${contactEmail}. If it does not, send the note there directly.`,
    );
    window.location.href = href;
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div>
        <label htmlFor="name" className="text-sm font-medium">
          Name <span className="text-muted">(required)</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={inputClass}
        />
        {errors.name ? (
          <p id="name-error" className="mt-2 text-sm text-signal-deep">
            {errors.name}
          </p>
        ) : null}
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium">
          Email <span className="text-muted">(required)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={inputClass}
        />
        {errors.email ? (
          <p id="email-error" className="mt-2 text-sm text-signal-deep">
            {errors.email}
          </p>
        ) : null}
      </div>
      <div>
        <label htmlFor="organization" className="text-sm font-medium">
          Organization <span className="text-muted">(optional)</span>
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          autoComplete="organization"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="projectType" className="text-sm font-medium">
          Project type
        </label>
        <select id="projectType" name="projectType" className={inputClass} defaultValue="Not sure yet">
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="website" className="text-sm font-medium">
          Current website <span className="text-muted">(optional)</span>
        </label>
        <input
          id="website"
          name="website"
          type="text"
          autoComplete="url"
          placeholder="https://"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">
          About the project <span className="text-muted">(required)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={7}
          required
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : "message-hint"}
          className={inputClass}
        />
        <p id="message-hint" className="mt-2 text-sm text-muted">
          What the site needs to do, who it is for, and any date that matters.
        </p>
        {errors.message ? (
          <p id="message-error" className="mt-2 text-sm text-signal-deep">
            {errors.message}
          </p>
        ) : null}
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-signal-deep"
      >
        Open email to send
      </button>
      <p className="text-sm leading-relaxed text-muted">
        Sending opens your email app with this message addressed to {contactEmail}.
        This website does not store the form.
      </p>
      <p role="status" className="text-sm leading-relaxed text-ink" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
