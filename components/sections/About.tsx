// import ScrollReveal from "@/components/animations/ScrollReveal";

// export default function About() {
//   return (
//     <section id="about" className="relative py-24 overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <ScrollReveal className="mb-16">
//           <div className="inline-block">
//             <span className="text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-widest">About Me</span>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">Who I Am</h2>
//             <div className="h-1 w-20 gradient-primary mt-4" />
//           </div>
//         </ScrollReveal>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//           {/* Left Content */}
//           <ScrollReveal animation="fadeInLeft" className="space-y-6">
//             <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
//               I&apos;m a React Developer with 3+ years of experience building responsive and scalable web applications. My passion lies in creating beautiful user interfaces with clean, efficient code. I specialize in modern JavaScript frameworks, with expertise in React.js, Next.js, and component-based architecture.
//             </p>

//             <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
//               I&apos;m driven by performance optimization, reusable components, and cross-device compatibility. I have a strong understanding of Agile development, version control with Git, and collaborating with cross-functional teams. When I&apos;m not coding, I&apos;m exploring new technologies and best practices.
//             </p>

//             <div className="space-y-3 pt-6">
//               {[
//                 "Building responsive web applications",
//                 "Component-based architecture & design systems",
//                 "State management with Redux & Redux Toolkit",
//                 "REST API integration & data handling",
//               ].map((item, index) => (
//                 <div key={index} className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
//                   <div className="w-2 h-2 rounded-full gradient-primary" />
//                   <span className="text-gray-300 text-sm sm:text-base">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </ScrollReveal>

//           {/* Right Content */}
//           <ScrollReveal animation="fadeInRight">
//             <div className="relative">
//               {/* Main Card with Unique Floating Animation */}
//               <style>{`
//                 @keyframes float-bounce {
//                   0%, 100% { transform: translateY(0px) scale(1); }
//                   50% { transform: translateY(-8px) scale(1.02); }
//                 }
//                 @keyframes orbit-path {
//                   0% { transform: translateX(0) translateY(0) rotate(0deg); }
//                   25% { transform: translateX(4px) translateY(-4px) rotate(90deg); }
//                   50% { transform: translateX(0) translateY(-8px) rotate(180deg); }
//                   75% { transform: translateX(-4px) translateY(-4px) rotate(270deg); }
//                   100% { transform: translateX(0) translateY(0) rotate(360deg); }
//                 }
//                 @keyframes glow-pulse {
//                   0%, 100% { box-shadow: 0 0 15px rgba(168, 85, 247, 0.4), inset 0 0 15px rgba(0, 217, 255, 0.1); }
//                   50% { box-shadow: 0 0 30px rgba(0, 217, 255, 0.6), inset 0 0 20px rgba(168, 85, 247, 0.2); }
//                 }
//                 .float-animation {
//                   animation: float-bounce 3s ease-in-out infinite;
//                 }
//                 .glow-animation {
//                   animation: glow-pulse 3s ease-in-out infinite;
//                 }
//                 .orbit-animation {
//                   animation: orbit-path 4s linear infinite;
//                 }
//               `}</style>
//               <div className="rounded-2xl glow-animation overflow-hidden p-4 sm:p-6 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
//                 <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto flex items-center justify-center float-animation">
//                   {/* Floating orbiting dots */}
//                   <div className="absolute w-full h-full">
//                     <div className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full top-0 left-1/2 -translate-x-1/2 orbit-animation" />
//                     <div className="absolute w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full bottom-1/4 right-1/4 orbit-animation" style={{ animationDirection: 'reverse', animationDelay: '1s' }} />
//                     <div className="absolute w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full bottom-1/4 left-1/4 orbit-animation" style={{ animationDelay: '2s' }} />
//                   </div>
                  
//                   {/* Center Icon */}
//                   <div className="relative text-3xl sm:text-4xl md:text-5xl z-10 bg-gradient-to-br from-purple-600/40 to-cyan-600/40 backdrop-blur-sm w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center border border-purple-400/40">
//                     🚀
//                   </div>
//                 </div>
//               </div>

//               {/* Info Cards */}
//               <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-6">
//                 {[
//                   { label: "Experience", value: "3+ Years" },
//                   { label: "Location", value: "Pune, India" },
//                   { label: "Role", value: "Frontend Dev" },
//                   { label: "Status", value: "Available" },
//                 ].map((info, index) => (
//                   <div
//                     key={index}
//                     className="rounded-lg glass p-2 sm:p-3 md:p-4 animate-fade-in-up border border-blue-500/10 hover:border-purple-500/40 transition-all duration-300"
//                     style={{ animationDelay: `${0.4 + index * 0.1}s` }}
//                   >
//                     <div className="text-xs text-blue-400 font-bold uppercase tracking-wider">
//                       {info.label}
//                     </div>
//                     <div className="text-xs sm:text-sm text-white mt-1 font-medium">
//                       {info.value}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </ScrollReveal>
//         </div>
//       </div>
//     </section>
//   );
// }



// ==========================================



"use client"

import ScrollReveal from "@/components/animations/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="mb-16">
          <div className="inline-block">
            <span className="text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-widest">About Me</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">Who I Am</h2>
            <div className="h-1 w-20 gradient-primary mt-4" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <ScrollReveal animation="fadeInLeft" className="space-y-6">
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              I&apos;m a React Developer with 3+ years of experience building responsive and scalable web applications. My passion lies in creating beautiful user interfaces with clean, efficient code. I specialize in modern JavaScript frameworks, with expertise in React.js, Next.js, and component-based architecture.
            </p>

            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              I&apos;m driven by performance optimization, reusable components, and cross-device compatibility. I have a strong understanding of Agile development, version control with Git, and collaborating with cross-functional teams. When I&apos;m not coding, I&apos;m exploring new technologies and best practices.
            </p>

            <div className="space-y-3 pt-6">
              {[
                "Building responsive web applications",
                "Component-based architecture & design systems",
                "State management with Redux & Redux Toolkit",
                "REST API integration & data handling",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <div className="w-2 h-2 rounded-full gradient-primary" />
                  <span className="text-gray-300 text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right Content */}
          <ScrollReveal animation="fadeInRight">
            <div className="relative flex justify-center">
              {/* Main Card with Unique Floating Animation */}
              <style>{`
                @keyframes float-bounce {
                  0%, 100% { transform: translateY(0px) scale(1); }
                  50% { transform: translateY(-8px) scale(1.02); }
                }
                @keyframes orbit-path {
                  0% { transform: translateX(0) translateY(0) rotate(0deg); }
                  25% { transform: translateX(4px) translateY(-4px) rotate(90deg); }
                  50% { transform: translateX(0) translateY(-8px) rotate(180deg); }
                  75% { transform: translateX(-4px) translateY(-4px) rotate(270deg); }
                  100% { transform: translateX(0) translateY(0) rotate(360deg); }
                }
                @keyframes glow-pulse {
                  0%, 100% { box-shadow: 0 0 15px rgba(168, 85, 247, 0.4), inset 0 0 15px rgba(0, 217, 255, 0.1); }
                  50% { box-shadow: 0 0 30px rgba(0, 217, 255, 0.6), inset 0 0 20px rgba(168, 85, 247, 0.2); }
                }
                .float-animation {
                  animation: float-bounce 3s ease-in-out infinite;
                }
                .glow-animation {
                  animation: glow-pulse 3s ease-in-out infinite;
                }
                .orbit-animation {
                  animation: orbit-path 4s linear infinite;
                }
              `}</style>
              <div className="rounded-2xl glow-animation overflow-hidden p-4 sm:p-6 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 w-full max-w-md">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto flex items-center justify-center float-animation">
                  {/* Floating orbiting dots */}
                  <div className="absolute w-full h-full">
                    <div className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full top-0 left-1/2 -translate-x-1/2 orbit-animation" />
                    <div className="absolute w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full bottom-1/4 right-1/4 orbit-animation" style={{ animationDirection: 'reverse', animationDelay: '1s' }} />
                    <div className="absolute w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full bottom-1/4 left-1/4 orbit-animation" style={{ animationDelay: '2s' }} />
                  </div>
                  
                  {/* Center Icon */}
                  <div className="relative text-3xl sm:text-4xl md:text-5xl z-10 bg-gradient-to-br from-purple-600/40 to-cyan-600/40 backdrop-blur-sm w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center border border-purple-400/40">
                    🚀
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Status Stats - Smaller Compact Design */}
        <ScrollReveal delay={0.4} className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-purple-500/20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              { label: "Experience", value: "3+ Years" },
              { label: "Location", value: "Pune, India" },
              { label: "Role", value: "Frontend Dev" },
              { label: "Status", value: "Available" },
            ].map((info, index) => (
              <div
                key={index}
                className="text-center p-3 md:p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/5 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                  {info.value}
                </div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                  {info.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}





