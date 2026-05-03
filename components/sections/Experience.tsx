import { experienceData } from "@/lib/constants";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="mb-12 md:mb-16">
          <div className="inline-block">
            <span className="text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-widest">Career</span>
            {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 md:mt-3"> */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
              Work Experience</h2>
            <div className="h-1 w-16 md:w-20 gradient-primary mt-3 md:mt-4" />
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 gradient-primary transform -translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-8 md:space-y-12">
            {experienceData.map((exp, index) => (
              <ScrollReveal
                key={exp.id}
                animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
                delay={index * 0.2}
                className={`md:grid md:grid-cols-2 gap-6 md:gap-8 items-center ${
                  index % 2 === 1 ? "md:dir-rtl" : ""
                }`}
              >
                {/* Content */}
                <div className={`rounded-lg sm:rounded-2xl glass-glow p-4 sm:p-6 md:p-8 border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 ${
                  index % 2 === 1 ? "md:dir-ltr" : ""
                }`}>
                  <div className="inline-block mb-3 md:mb-4">
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-2.5 sm:px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 md:mb-2 line-clamp-1">
                    {exp.role}
                  </h3>

                  <p className="text-blue-400 font-semibold mb-3 md:mb-4 text-sm sm:text-base">
                    {exp.company}
                  </p>

                  <p className="text-gray-300 mb-4 md:mb-6 text-sm sm:text-base">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2 md:space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 md:gap-3 text-gray-300 text-xs sm:text-sm animate-fade-in-up"
                        style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
                      >
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full gradient-primary mt-1 md:mt-2 shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex justify-center">
                  <div className="w-6 h-6 rounded-full gradient-primary border-4 border-slate-900 relative z-10 shadow-lg" />
                </div>

                {/* Spacer for mobile */}
                <div className="md:hidden" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
