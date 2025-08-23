// src/components/Work/Work.jsx
import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      className="py-32 px-[12vw] md:px-[7vw] lg:px-[15vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16 opacity-0 animate-fadeInUp">
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          Projects
        </h2>
        <p className="text-gray-400 mt-4 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
          A selection of my projects highlighting clean design, modern technologies, and responsive, user-friendly web applications.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group relative border border-transparent bg-gray-900 rounded-2xl shadow-xl overflow-hidden cursor-pointer transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/40"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-500 transition duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm sm:text-base line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden transform scale-0 animate-scaleUp">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setSelectedProject(null)}
                className="text-white text-3xl font-bold hover:text-purple-500 transition duration-300"
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 flex justify-center items-center bg-gray-900 p-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto object-contain rounded-xl shadow-lg"
                />
              </div>
              <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{selectedProject.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 px-4 py-2 rounded-xl font-semibold text-center transition duration-300"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-xl font-semibold text-center transition duration-300"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes scaleUp {
              0% {
                transform: scale(0);
                opacity: 0;
              }
              100% {
                transform: scale(1);
                opacity: 1;
              }
            }
            .animate-scaleUp {
              animation: scaleUp 0.4s ease-out forwards;
            }

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
        </div>
      )}
    </section>
  );
};

export default Work;
