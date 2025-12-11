import React from 'react';
import Frontend from './skills section/Frontend';
import Backend from './skills section/Backend';
import Tools from './skills section/Tools';

const Skills = () => {
  return (
    <section className="py-24 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical <span className="text-purple-500 drop-shadow-[0_0_8px_rgba(147,51,234,0.8)]">Expertise</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Frontend />
          <Backend />
          <Tools />
        </div>

      </div>
    </section>
  );
};

export default Skills;