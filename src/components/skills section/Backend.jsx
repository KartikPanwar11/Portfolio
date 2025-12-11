import React from 'react';
import { Server } from 'lucide-react';

const Backend = () => {
  const skills = ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "REST APIs"];

  return (
    <div className="group relative h-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.3)]">
      
      {/* Same Background Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-green-600 via-transparent to-transparent" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-2 border-green-500/30 rounded-3xl pointer-events-none" />

      <div className="relative z-10 p-8 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:bg-green-600 group-hover:border-green-500 group-hover:scale-110 transition-all duration-300 shadow-lg">
            <Server className="w-6 h-6 text-green-400 group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">Backend</h3>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {skills.map((skill, index) => (
            <span key={index} className="px-3 py-1.5 text-xs font-semibold tracking-wide text-slate-400 bg-slate-950/50 rounded-lg border border-slate-800 group-hover:text-white group-hover:bg-purple-500/20 group-hover:border-purple-500/30 transition-all duration-300">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Backend;