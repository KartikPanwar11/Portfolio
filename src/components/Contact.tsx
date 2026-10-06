import { useEffect, useState } from "react";
import { profile } from "../profile";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

export default function Contact() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!status) return;

    const timer = setTimeout(() => setStatus(""), 5000);
    return () => clearTimeout(timer);
  }, [status]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setStatus("Email copied.");
    } catch {
      setStatus(`Email: ${profile.email}`);
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-28 border-t border-outline px-6 py-20 text-center sm:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-5 text-xs font-semibold tracking-[0.18em] text-accent">
          05 / THE NEXT CHAPTER
        </p>

        <h2
          id="contact-heading"
          className="text-[clamp(2.2rem,5vw,3.75rem)] leading-tight font-bold tracking-[-0.04em]"
        >
          Good things start
          <br />
          with a <span className="text-accent">conversation.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-lg leading-7 text-muted">
          Hiring a developer or planning your next website?
          <br className="hidden sm:block" /> I&apos;d love to hear what
          you&apos;re working on.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-background"
          >
            <MailIcon className="size-5" />
            Say hello
          </a>
          <button
            onClick={copyEmail}
            className="rounded-xl border border-outline bg-surface px-6 py-3 text-sm font-semibold hover:border-accent/50"
          >
            Copy email
          </button>
        </div>

        <p className="mt-5 break-all text-sm text-muted">{profile.email}</p>

        <div className="mt-6 flex justify-center gap-6 text-sm text-muted">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 hover:text-accent"
          >
            <GithubIcon className="size-5" />
            GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 hover:text-accent"
          >
            <LinkedinIcon className="size-5" />
            LinkedIn
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>

        <p role="status" className="mt-4 min-h-6 text-sm text-accent">
          {status}
        </p>
      </div>
    </section>
  );
}
