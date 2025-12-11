import React from 'react';
import { Github, ExternalLink, FolderCode } from 'lucide-react';

const ProjectCard = ({ title, description, tech, githubLink, liveLink }) => {
  return (
    <div className="group flex flex-col h-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.15)] hover:-translate-y-1">
      
      {/* Top Image / Gradient Area */}
      {/* Replace this div with an <img /> tag if you have screenshots */}
      <div className="h-48 bg-slate-800 relative overflow-hidden group-hover:opacity-90 transition-opacity">
        {/* Placeholder Gradient if no image */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
            <FolderCode className="w-16 h-16 text-slate-700 group-hover:text-purple-500/50 transition-colors duration-500" />
        </div>
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, index) => (
            <span key={index} className="px-2 py-1 text-xs font-medium text-purple-300 bg-purple-500/10 rounded border border-purple-500/20">
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-auto">
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-purple-400 transition-colors"
          >
            <Github size={18} /> Code
          </a>
          
          <a 
            href={liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-purple-400 transition-colors"
          >
            <ExternalLink size={18} /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;