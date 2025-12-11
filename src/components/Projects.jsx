import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  // EDIT YOUR PROJECTS HERE
  const projectData = [
    {
      title: "E-Commerce Dashboard",
      description: "A full-stack admin dashboard for managing products, orders, and customers. Features include real-time analytics charts and dark mode toggle.",
      tech: ["React.js", "Tailwind", "Node.js", "MongoDB"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "AI Resume Builder",
      description: "An interactive application that helps users generate ATS-friendly resumes using AI templates. Includes PDF export functionality.",
      tech: ["Next.js", "OpenAI API", "TypeScript", "Stripe"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task manager allowing users to create boards, lists, and drag-and-drop tasks similar to Trello.",
      tech: ["React", "Redux", "Firebase", "DND Kit"],
      githubLink: "#",
      liveLink: "#"
    }
  ];

  return (
    <section className="py-24 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="text-purple-500 drop-shadow-[0_0_8px_rgba(147,51,234,0.8)]">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl">
            A selection of things I've built during my academic and professional journey.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;