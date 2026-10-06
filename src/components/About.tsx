const interests = [
  "Solving problems",
  "Building new things",
  "Learning every day",
];

function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 border-t border-outline px-6 py-20 sm:px-12"
    >
      <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <p className="mb-4 text-sm font-medium tracking-widest text-accent">
            ABOUT ME
          </p>

          <h2
            id="about-heading"
            className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
          >
            Curious by nature.
            <br />A builder by choice.
          </h2>

          <p className="mt-5 text-sm text-muted">
            MCA · AI/ML specialization · Graduating in 2027
          </p>
        </div>

        <div className="space-y-5 text-base leading-relaxed text-muted">
          <p>
            I’m Kartik Panwar, an MCA student specializing in Artificial
            Intelligence and Machine Learning, with graduation expected in 2027.
          </p>

          <p>
            I enjoy solving problems and turning new ideas into working
            applications. My interests span full-stack web development and
            AI/ML, and I’m always looking for opportunities to put what I learn
            into practice.
          </p>

          <p>
            Learning is part of my daily routine. Whether I’m exploring a new
            tool or strengthening my understanding of data structures and
            object-oriented programming, I like expanding my knowledge one step
            at a time.
          </p>

          <ul aria-label="My interests" className="flex flex-wrap gap-3 pt-2">
            {interests.map((interest) => (
              <li
                key={interest}
                className="rounded-full border border-outline bg-surface px-4 py-2 text-sm text-content"
              >
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
