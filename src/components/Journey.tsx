const journey = [
  {
    label: "EDUCATION / IN PROGRESS",
    title: "Master of Computer Applications",
    description:
      "Specializing in Artificial Intelligence and Machine Learning, with graduation expected in 2027. Building my foundation in software engineering, problem solving, and intelligent systems.",
  },
  {
    label: "HANDS-ON / PROJECT LEARNING",
    title: "From React practice to FoodieZone",
    description:
      "Built a food discovery application with live restaurant data, a Redux cart, component tests, and a server-side API proxy. Learning the development cycle by building and solving real integration challenges.",
  },
  {
    label: "WHAT’S NEXT / OPEN TO OPPORTUNITIES",
    title: "A team to grow with. Ideas to build.",
    description:
      "Looking for entry-level software opportunities and freelance collaborations. Continuing to deepen my full-stack skills and explore AI/ML, with PostgreSQL next on my learning list.",
  },
];
export default function Journey() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="scroll-mt-28 px-6 py-20 sm:px-12 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <div>
          <p className="mb-5 text-xs font-semibold tracking-[0.18em] text-accent">
            04 / THE JOURNEY SO FAR
          </p>
          <h2
            id="journey-heading"
            className="text-3xl font-bold tracking-tight sm:text-[40px]"
          >
            Learning by doing.
          </h2>
          <p className="mt-6 leading-7 text-muted">
            Early in my career.
            <br />
            Intentional about what comes next.
          </p>
          <span className="mt-7 inline-flex rounded-full border border-outline bg-surface px-4 py-2 text-sm text-muted">
            MCA · AI/ML · Class of 2027
          </span>
        </div>
        <ol className="border-l border-outline pl-7 sm:pl-9">
          {journey.map((item) => (
            <li key={item.title} className="relative pb-10 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[33px] size-2.5 rounded-full border-2 border-accent bg-background sm:-left-[41px]"
              />
              <p className="mb-3 text-xs font-semibold tracking-wider text-accent">
                {item.label}
              </p>
              <h3 className="text-xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-muted">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
