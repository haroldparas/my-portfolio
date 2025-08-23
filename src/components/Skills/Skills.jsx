// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => {
  // Flatten all skills into a single array
  
  const allSkills = SkillsInfo.flatMap(category => category.skills);

  return (
    <section
      id="skills"
      className="mt-56 py-24 px-[10vw] md:px-[7vw] lg:px-[15vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* === Section Header === */}
      <div className="text-center mb-10 opacity-0 animate-fadeInUp">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-snug">
          My Tech Stack
        </h2>
        <p className="text-gray-400 mt-4 text-base sm:text-lg md:text-lg max-w-2xl mx-auto">
          The tools, frameworks, and technologies I use to build responsive, 
          scalable, and user-friendly web applications.
        </p>
      </div>

      {/* === Unified Skills Grid === */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {allSkills.map(skill => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center space-y-2 border-2 border-gray-700 rounded-3xl py-4 px-4 bg-gray-900 transition-transform duration-300 hover:scale-105 hover:border-[#8245ec] hover:bg-gray-800 opacity-0 animate-fadeInUp"
            style={{ animationDelay: `${allSkills.indexOf(skill) * 100}ms` }}
          >
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <span className="text-sm sm:text-base text-gray-300 text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s forwards;
        }
      `}</style>
    </section>
  );
};

export default Skills;
