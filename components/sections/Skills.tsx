"use client";

import { skillsData } from "@/lib/constants";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="mb-16 md:mb-24">
          <div>
            <span className="text-purple-400 text-xs md:text-sm font-bold uppercase tracking-widest">
              Expertise
            </span>
            {/* <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-3 md:mt-4 mb-4 md:mb-6"> */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
              My Skills
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl">
              Proficient in various front-end and back-end technologies, with
              hands-on experience across multiple domains
            </p>
            <div className="h-1 w-20 md:w-32 bg-linear-to-br from-purple-500 to-cyan-500 rounded-full mt-4 md:mt-6" />
          </div>
        </ScrollReveal>

        {/* Skills by Category */}
        <div className="space-y-12 md:space-y-16">
          {skillsData.map((category, catIdx) => (
            <ScrollReveal
              key={category.category}
              animation="fadeInUp"
              delay={catIdx * 0.12}
            >
              <div>
                {/* Category Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {category.category}
                </h3>
                <p className="text-sm text-gray-400 mb-6 md:mb-8">
                  {category.skills.length} technologies
                </p>

                {/* Skills Grid - Responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {category.skills.map((skill, skillIdx) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      index={skillIdx}
                      delay={skillIdx * 0.05}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  skill: any;
  index: number;
  delay: number;
}

function SkillCard({ skill, index, delay }: SkillCardProps) {
  return (
    <ScrollReveal delay={delay} animation="fadeInUp">
      <div className="group relative h-full">
        <div className="h-full p-6 md:p-8 rounded-xl bg-linear-to-br from-slate-800/40 to-slate-900/20 border border-purple-500/15 hover:border-purple-500/50 transition-all duration-300 hover:bg-slate-800/60 hover:shadow-lg hover:shadow-purple-500/20 flex flex-col items-center justify-center text-center cursor-pointer transform hover:scale-105">
          {/* Skill Icon */}
          <div className="text-4xl md:text-5xl mb-3 group-hover:scale-125 transition-transform duration-300 transform group-hover:-translate-y-1">
            {skill.icon}
          </div>

          {/* Skill Name */}
          <h4 className="text-sm md:text-base font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-2">
            {skill.name}
          </h4>
        </div>
      </div>
    </ScrollReveal>
  );
}
