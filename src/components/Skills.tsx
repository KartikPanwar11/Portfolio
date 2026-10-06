import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "React Router",
      "Redux",
      "Redux Toolkit (RTK)",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive design",
      "CSS Grid",
    ],
  },
  {
    title: "Backend & databases",
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "Python",
      "API integration",
      "Server-side proxies",
      "Serverless functions",
    ],
  },
  {
    title: "Testing & performance",
    skills: ["Jest", "React Testing Library", "Lighthouse", "Loading states"],
  },
  {
    title: "Tools & deployment",
    skills: ["Git", "GitHub", "Parcel", "Vercel"],
  },
  {
    title: "Core concepts",
    skills: [
      "Data structures & algorithms",
      "Object-oriented programming",
      "Problem solving",
    ],
  },
];

const symbols = ["⌘", "▤", "✓", "◇", "</>"];
function Skills() {
  const track = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reduced, setReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  function move(direction: number) {
    const rail = track.current;
    if (!rail) return;
    const card = rail.firstElementChild as HTMLElement | null;
    const step = (card?.getBoundingClientRect().width ?? 280) + 16;
    const max = rail.scrollWidth - rail.clientWidth;
    const target =
      direction > 0
        ? rail.scrollLeft >= max - 4
          ? 0
          : Math.min(max, rail.scrollLeft + step)
        : rail.scrollLeft <= 4
          ? max
          : Math.max(0, rail.scrollLeft - step);
    rail.scrollTo({ left: target, behavior: reduced ? "instant" : "smooth" });
  }
  useEffect(() => {
    if (paused || hovered || focused || reduced) return;
    const timer = window.setInterval(() => {
      const rail = track.current;
      if (!rail || document.hidden) return;
      const card = rail.firstElementChild as HTMLElement | null;
      const max = rail.scrollWidth - rail.clientWidth;
      const step = (card?.getBoundingClientRect().width ?? 280) + 16;
      rail.scrollTo({
        left:
          rail.scrollLeft >= max - 4
            ? 0
            : Math.min(max, rail.scrollLeft + step),
        behavior: "smooth",
      });
    }, 4000);
    return () => window.clearInterval(timer);
  }, [paused, hovered, focused, reduced]);
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-28 px-6 py-24 sm:px-12"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold tracking-[0.18em] text-accent">
              02 / THE TOOLBOX
            </p>
            <h2
              id="skills-heading"
              className="text-3xl font-bold tracking-tight sm:text-[40px]"
            >
              Tools I build with.
            </h2>
          </div>
          <p className="text-sm text-muted">
            A growing stack, grounded in the fundamentals.
          </p>
        </div>
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Skills and technologies"
          className="mt-10"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocusCapture={() => setFocused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null))
              setFocused(false);
          }}
        >
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-muted">
              {reduced
                ? "Browse the toolkit"
                : paused
                  ? "Auto-rotation paused"
                  : "Scroll to explore the toolkit"}
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label={
                  paused
                    ? "Resume automatic rotation"
                    : "Pause automatic rotation"
                }
                aria-pressed={paused}
                disabled={reduced}
                onClick={() => setPaused(!paused)}
                className="min-h-11 rounded-lg border border-outline px-4 text-sm hover:border-accent/50 disabled:opacity-40"
              >
                {paused ? "Play" : "Pause"}
              </button>
              <button
                type="button"
                aria-label="Previous skills"
                onClick={() => move(-1)}
                className="size-11 rounded-lg border border-outline text-xl hover:text-accent"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next skills"
                onClick={() => move(1)}
                className="size-11 rounded-lg border border-outline text-xl hover:text-accent"
              >
                ›
              </button>
            </div>
          </div>
          <div
            ref={track}
            tabIndex={0}
            aria-label="Scrollable skills cards"
            className="skills-track flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3"
          >
            {skillGroups.map((group, index) => (
              <article
                key={group.title}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${skillGroups.length}: ${group.title}`}
                className="w-[85%] shrink-0 snap-start rounded-xl border border-outline bg-surface p-7 sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-3rem)/4)]"
              >
                <span
                  aria-hidden="true"
                  className="mb-6 block h-7 font-mono text-2xl text-accent"
                >
                  {symbols[index]}
                </span>
                <h3 className="text-xl font-semibold tracking-tight">
                  {group.title}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-outline px-2.5 py-1.5 text-xs leading-relaxed text-muted"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
        <p className="mt-6 text-sm text-muted">
          <span className="mr-2 text-accent">Learning next</span>PostgreSQL ·
          Relational databases & SQL
        </p>
      </div>
    </section>
  );
}
export default Skills;
