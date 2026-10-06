import { profile } from "../profile";
import { GithubIcon, LinkedinIcon } from "./Icons";
export default function Footer() {
  return (
    <footer className="border-t border-outline px-6 py-8 sm:px-12">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6">
        <a
          href="#home"
          aria-label="KP home"
          className="text-3xl font-extrabold tracking-tight"
        >
          kp<span className="text-accent">.</span>
        </a>
        <p className="text-xs text-muted">
          Built with curiosity & React. © {new Date().getFullYear()} Kartik
          Panwar
        </p>
        <div className="flex items-center gap-5 text-sm text-muted">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (opens in a new tab)"
            className="flex size-11 items-center justify-center hover:text-accent"
          >
            <GithubIcon className="size-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (opens in a new tab)"
            className="flex size-11 items-center justify-center hover:text-accent"
          >
            <LinkedinIcon className="size-5" />
          </a>
          <a href="#home" className="py-3 hover:text-accent">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
