import { useState } from "react";
import { profile } from "../profile";
import { GithubIcon, LinkedinIcon } from "./Icons";
const { github, linkedin, resume } = profile;
function Hero() {
  const [notice, setNotice] = useState("");
  return (
    <>
      <section
        id="home"
        aria-labelledby="hero-heading"
        className="px-5 pt-36 pb-24 sm:px-12 lg:pt-44 lg:pb-28"
      >
        <div className="mx-auto grid max-w-[1200px] items-center gap-16 lg:min-h-[470px] lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <div className="min-w-0 hero-enter">
            <p className="mb-9 flex items-center gap-2.5 text-sm text-muted">
              <span className="size-1.5 rounded-full bg-accent" />
              Open to opportunities & freelance work
            </p>
            <p className="mb-5 text-xs font-semibold tracking-[0.18em] text-accent">
              HELLO, I’M KARTIK
            </p>
            <h1
              id="hero-heading"
              className="text-[clamp(2rem,4.2vw,3.75rem)] leading-[1.2] font-extrabold tracking-[-0.045em]"
            >
              Turning ideas into
              <br />
              <span className="text-accent">working software.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-muted">
              MCA student. Full-stack engineer. Curious builder.
              <br />I craft thoughtful web experiences, from the first line of
              code to the final detail.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-background transition-transform motion-safe:hover:-translate-y-0.5"
              >
                Explore my work
              </a>
              {resume ? (
                <a
                  href={resume}
                  className="rounded-lg border border-outline bg-surface px-6 py-3 text-sm font-semibold"
                >
                  ↓ View resume
                </a>
              ) : (
                <button
                  onClick={() => setNotice("Resume coming soon.")}
                  className="cursor-pointer rounded-lg border border-outline bg-surface px-6 py-3 text-sm font-semibold hover:border-accent/50"
                >
                  ↓ View resume
                </button>
              )}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 hover:text-accent"
              >
                <GithubIcon className="size-5" />
                GitHub<span className="sr-only"> (opens in a new tab)</span>
              </a>
              {linkedin ? (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 hover:text-accent"
                >
                  <LinkedinIcon className="size-5" />
                  LinkedIn
                </a>
              ) : (
                <button
                  onClick={() => setNotice("LinkedIn profile coming soon.")}
                  className="inline-flex min-h-11 cursor-pointer items-center gap-2 hover:text-accent"
                >
                  <LinkedinIcon className="size-5" />
                  LinkedIn
                </button>
              )}
              <span className="border-l border-outline pl-5">
                Based in India
              </span>
            </div>
            {notice && (
              <p role="status" className="mt-4 text-sm text-accent">
                {notice}
              </p>
            )}
          </div>
          <div className="min-w-0 hero-enter relative mx-auto w-full max-w-lg lg:rotate-1 rounded-xl border border-outline bg-surface shadow-[0_25px_80px_#0003]">
            <div className="flex items-center justify-between border-b border-outline px-5 py-4 text-xs text-muted">
              <span
                aria-hidden="true"
                className="tracking-[4px] text-[#737b6b]"
              >
                ● ● ●
              </span>
              <span>developer.ts</span>
              <span aria-hidden="true">&lt;/&gt;</span>
            </div>
            <div className="overflow-x-auto px-5 py-7 font-mono text-[clamp(.68rem,1.05vw,.85rem)] leading-[1.95] sm:px-7">
              <div className="w-max">
                <p>
                  <span className="text-syntax">const</span> developer = {"{"}
                </p>
                <p className="pl-5">
                  name: <span className="text-accent">"Kartik Panwar"</span>,
                </p>
                <p className="pl-5">
                  role:{" "}
                  <span className="text-accent">"Full-stack engineer"</span>,
                </p>
                <p className="pl-5">
                  education: <span className="text-accent">"MCA · AI/ML"</span>,
                </p>
                <p className="pl-5">mindset: [</p>
                <p className="pl-10 text-accent">"Stay curious",</p>
                <p className="pl-10 text-accent">"Build with purpose",</p>
                <p className="pl-10 text-accent">"Keep improving"</p>
                <p className="pl-5">],</p>
                <p className="pl-5">
                  availableFor:{" "}
                  <span className="text-accent">"The New Opportunity"</span>
                </p>
                <p>{"}"};</p>
                <p className="mt-5 text-xs text-muted">
                  // Let’s build something that matters.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 border-t border-outline px-5 py-3 text-xs text-muted">
              <span className="text-accent" aria-hidden="true">
                &lt;/&gt;
              </span>
              Always learning. Always building.
            </div>
            <div className="absolute right-5 -bottom-5 flex -rotate-1 items-center gap-3 rounded-lg border border-outline bg-surface px-4 py-3 text-xs">
              <span className="text-accent" aria-hidden="true">
                &lt;/&gt;
              </span>
              Ideas → code → impact
            </div>
          </div>
        </div>
      </section>
      <div className="border-y border-outline px-6 sm:px-12">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-8 gap-y-5 py-7 lg:justify-between">
          <span className="w-full text-center text-xs tracking-widest text-muted lg:w-auto">
            MY EVERYDAY TOOLKIT
          </span>
          {["React", "JavaScript", "TypeScript", "Node.js", "Git"].map((t) => (
            <span key={t} className="text-lg font-semibold text-muted">
              {t}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
export default Hero;
