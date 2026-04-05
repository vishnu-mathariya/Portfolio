"use client";

import { projectsData } from "@/lib/constants";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12 md:mb-20">
          <span className="text-purple-400 text-xs sm:text-sm font-bold uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 md:mt-4 mb-4 md:mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2">
            A selection of projects showcasing my expertise and technical
            capabilities
          </p>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-10 md:mb-16">
          {projectsData.map((project, index) => (
            <ScrollReveal
              key={project.id}
              animation="fadeInUp"
              delay={index * 0.1}
              className="group h-full"
            >
              <div className="h-full rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/30 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 flex flex-col">
                {/* Color Header Block */}
                <div className="h-1 sm:h-2 bg-gradient-to-r from-purple-500 to-cyan-500" />

                {/* Content */}
                <div className="p-4 sm:p-6 md:p-8 flex flex-col flex-grow">
                  {/* Category Badge */}
                  <div className="mb-3 sm:mb-4">
                    <span className="inline-block px-2.5 sm:px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-purple-600 to-cyan-500 text-white">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300 line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6 sm:mb-8">
                    <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-2 sm:mb-3">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-medium bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 border border-purple-500/30 hover:border-purple-500 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollReveal delay={0.4} className="text-center">
          <div className="p-12 rounded-2xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Let&apos;s bring your vision to life. I&apos;m always interested
              in working on exciting, challenging projects.
            </p>

            <button
              onClick={() => {
                const section = document.getElementById("contact");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="cursor-pointer inline-block px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Start a Project
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
