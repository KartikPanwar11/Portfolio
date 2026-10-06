import { useRef } from "react";

type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  highlights: string[];
  challenge: string;
  githubUrl: string | null;
  liveUrl: string | null;
  placeholder: boolean;
};

const projects: Project[] = [
  {
    title: "FoodieZone",
    category: "Food delivery web app",
    description:
      "A responsive food discovery app using live restaurant and menu data from Swiggy, with searchable listings and a Redux-powered cart.",
    technologies: [
      "React",
      "React Router",
      "Redux",
      "CSS3",
      "Node.js",
      "Jest",
      "React Testing Library",
      "Parcel",
      "Vercel",
    ],
    highlights: [
      "Live restaurant listings, menus, ratings, and pricing.",
      "Search and filtering that preserve the original dataset.",
      "Shared cart state across routes without full page reloads.",
      "Responsive layouts and shimmer loading placeholders.",
    ],
    challenge:
      "Integrated the external API through a Node.js CORS proxy and a Vercel serverless function, allowing the frontend to request live data through a server-side layer.",
    githubUrl: "https://github.com/KartikPanwar11/FoodieZone",
    liveUrl: null, // Replace with your live FoodieZone URL.
    placeholder: false,
  },
  {
    title: "Task Manager",
    category: "Placeholder project",
    description:
      "Example idea: a task management app for organizing work, setting priorities, and tracking progress.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    highlights: [
      "Example feature: create, edit, and delete tasks.",
      "Example feature: filter tasks by status and priority.",
    ],
    challenge:
      "Replace this with a real technical challenge and how you solved it.",
    githubUrl: null,
    liveUrl: null,
    placeholder: true,
  },
  {
    title: "Learning Dashboard",
    category: "Placeholder project",
    description:
      "Example idea: a personal dashboard for organizing learning resources and tracking study goals.",
    technologies: ["React", "Redux Toolkit", "Tailwind CSS"],
    highlights: [
      "Example feature: save resources by topic.",
      "Example feature: track learning goals and progress.",
    ],
    challenge:
      "Replace this with a real technical challenge and how you solved it.",
    githubUrl: null,
    liveUrl: null,
    placeholder: true,
  },
];

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  return (
    <>
      <article className="flex flex-col overflow-hidden rounded-xl border border-outline bg-surface transition-transform duration-300 motion-safe:hover:-translate-y-1">
        <button
          ref={trigger}
          onClick={() => dialog.current?.showModal()}
          aria-label={`Read ${project.title} case study`}
          className={`relative block h-[270px] w-full cursor-pointer overflow-hidden px-6 pt-7 text-left ${["bg-[#cad6ba]", "bg-[#d0c9bb]", "bg-[#bfc7d5]"][index]} ${focus}`}
        >
          <div
            aria-hidden="true"
            className={`min-h-[290px] rounded-lg bg-[#fbfcf8] px-4 text-[#223021] shadow-xl ${index === 1 ? "rotate-3" : "-rotate-3"}`}
          >
            <div className="flex items-center justify-between border-b border-black/10 py-3 text-[10px]">
              <b className="text-xs">{project.title.toLowerCase()}.</b>
              <span>Workspace</span>
              <span className="rounded-full bg-[#e4e8df] p-1">KP</span>
            </div>
            <div className="py-5">
              <p className="text-[9px] tracking-widest">
                {
                  [
                    "DISCOVER YOUR NEXT FAVORITE",
                    "YOUR WORK, IN FOCUS",
                    "YOUR LEARNING COMPANION",
                  ][index]
                }
              </p>
              <p className="mt-2 max-w-[210px] text-[25px] leading-tight font-bold tracking-tight">
                {
                  [
                    "Good food. Great choices.",
                    "Make room for your best work.",
                    "A little progress. Every day.",
                  ][index]
                }
              </p>
            </div>
            {index === 2 ? (
              <div className="rounded border border-black/10 bg-white p-4">
                <p className="text-[10px]">Current focus</p>
                <p className="mt-1 text-xs font-semibold">
                  Full-stack development
                </p>
                <div className="my-3 h-1.5 rounded bg-[#e5e9f1]">
                  <div className="h-full w-2/3 rounded bg-[#7c91b6]" />
                </div>
                <p className="text-[9px]">Keep your next step in sight.</p>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-2">
                {(index === 0
                  ? ["Restaurants", "Menus", "Your cart"]
                  : ["To do", "In progress", "Done"]
                ).map((label, i) => (
                  <div key={label}>
                    <p className="mb-2 text-[9px]">{label}</p>
                    <div className="rounded border border-black/10 bg-white p-2">
                      <div
                        className={`mb-2 rounded ${index === 0 ? "h-12" : "h-1 w-7"} ${["bg-[#e7cfb1]", "bg-[#d4dec4]", "bg-[#d3d9e2]"][i]}`}
                      />
                      <p className="text-[10px]">
                        {index === 0
                          ? label
                          : [
                              "Design dashboard",
                              "Build the API",
                              "Ship the project",
                            ][i]}
                      </p>
                      <div className="my-2 border-t border-black/5" />
                      <p className="text-[8px]">{project.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <span className="absolute right-3 bottom-3 rounded bg-white/95 px-2 py-1 text-xs text-[#46523d]">
            Concept preview
          </span>
        </button>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex justify-between gap-3 text-xs tracking-wide text-muted">
            <p className="uppercase">{project.category}</p>
            <span>0{index + 1}</span>
          </div>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {project.description}
          </p>
          {project.placeholder && (
            <p className="mt-3 text-xs text-accent">
              Sample project — replace with your work
            </p>
          )}
          <ul
            aria-label={`${project.title} technologies`}
            className="mt-5 flex flex-wrap gap-2"
          >
            {project.technologies.slice(0, 3).map((t) => (
              <li
                key={t}
                className="rounded-md border border-outline px-2 py-1 text-xs text-muted"
              >
                {t}
              </li>
            ))}
            {project.technologies.length > 3 && (
              <li className="px-1 py-1 text-xs text-muted">
                +{project.technologies.length - 3} more
              </li>
            )}
          </ul>
          <div className="flex-1" />
          <div className="mt-6 flex items-center justify-between gap-3 border-t border-outline pt-4">
            <button
              onClick={() => dialog.current?.showModal()}
              className={`min-h-11 cursor-pointer text-sm font-medium hover:text-accent ${focus}`}
            >
              View case study
            </button>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex min-h-11 items-center text-sm text-muted hover:text-accent ${focus}`}
              >
                Source
                <span className="sr-only">
                  {" "}
                  for {project.title} (opens in a new tab)
                </span>
              </a>
            )}
          </div>
        </div>
      </article>
      <dialog
        ref={dialog}
        onClose={() => trigger.current?.focus()}
        aria-labelledby={`project-${index}-title`}
        className="fixed inset-0 m-auto max-h-[85dvh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-2xl border border-outline bg-surface p-6 text-content shadow-2xl backdrop:bg-black/75 backdrop:backdrop-blur-sm sm:p-10"
      >
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs tracking-widest text-accent">
            {project.placeholder ? "SAMPLE PROJECT" : "PROJECT CASE STUDY"}
          </p>
          <button
            autoFocus
            onClick={() => dialog.current?.close()}
            aria-label="Close case study"
            className={`flex size-11 cursor-pointer items-center justify-center rounded-lg border border-outline text-xl hover:text-accent ${focus}`}
          >
            ×
          </button>
        </div>
        <h2
          id={`project-${index}-title`}
          className="mt-5 text-3xl font-bold tracking-tight"
        >
          {project.title}
        </h2>
        <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
        <h3 className="mt-7 text-lg font-semibold">
          {project.placeholder ? "Example features" : "Key features"}
        </h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        <h3 className="mt-7 text-lg font-semibold">Challenge & solution</h3>
        <p className="mt-3 leading-relaxed text-muted">{project.challenge}</p>
        <h3 className="mt-7 text-lg font-semibold">Tech stack</h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <li
              key={t}
              className="rounded-md border border-outline px-3 py-2 text-sm text-muted"
            >
              {t}
            </li>
          ))}
        </ul>
        {project.placeholder && (
          <p className="mt-6 text-sm text-muted">
            This is sample content, not a completed project.
          </p>
        )}
        <div className="mt-8 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-background ${focus}`}
            >
              Live demo<span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-lg border border-outline px-5 py-3 text-sm font-semibold hover:text-accent ${focus}`}
            >
              Source code<span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
        </div>
      </dialog>
    </>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 px-6 py-20 sm:px-12"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-accent">
              03 / SELECTED WORK
            </p>
            <h2
              id="projects-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Ideas brought to life.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            Built to learn. Made to solve problems.
          </p>
        </div>
        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;
