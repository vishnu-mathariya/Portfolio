// import ScrollReveal from "@/components/animations/ScrollReveal";
// import Link from "next/link";

// export default function CTA() {
//   return (
//     <section id="cta" className="relative py-16 md:py-24 overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 gradient-mesh opacity-30" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
//       </div>

//       <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
//         <ScrollReveal animation="fadeInUp" className="text-center space-y-6 md:space-y-8">
//           {/* Main Heading */}
//           <div className="space-y-3 md:space-y-4">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//               Ready to Create
//               <span className="gradient-text block mt-2">Something Amazing?</span>
//             </h2>
//             <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-2">
//               I&apos;m always excited to work on new and challenging projects. Let&apos;s connect and discuss how I can help bring your vision to life.
//             </p>
//           </div>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 pt-6 md:pt-8">
//             <Link
//               href="mailto:mathariyavishnu@gmail.com"
//               className="px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-lg gradient-primary text-white font-bold text-sm sm:text-base md:text-lg hover:shadow-gradient transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
//             >
//               Send Me an Email
//             </Link>
//             <Link
//               href="https://linkedin.com/in/vishnumathariya"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-lg border-2 border-blue-500/30 text-white font-bold text-sm sm:text-base md:text-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 whitespace-nowrap"
//             >
//               Connect on LinkedIn
//             </Link>
//           </div>

//           {/* Alternative Contact Methods */}
//           <div className="pt-6 md:pt-8 border-t border-gray-800">
//             <p className="text-gray-400 text-xs sm:text-sm mb-4 md:mb-6">
//               Prefer other ways to reach out?
//             </p>
//             <div className="flex justify-center gap-3 md:gap-6 flex-wrap">
//               {[
//                 { name: "GitHub", icon: "🐙", url: "https://github.com/vishnumathariya" },
//                 { name: "WhatsApp", icon: "💬", url: "https://wa.me/918055229755" },
//                 { name: "Telegram", icon: "📱", url: "https://t.me/vishnumathariya" },
//               ].map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg glass hover:glass-glow transition-all duration-300 text-xs sm:text-sm"
//                 >
//                   <span>{link.icon}</span>
//                   <span className="font-medium whitespace-nowrap">{link.name}</span>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </ScrollReveal>

//         {/* Response Time */}
//         <ScrollReveal delay={0.2} className="mt-10 md:mt-16 text-center">
//           <div className="inline-block px-4 md:px-6 py-2 md:py-3 rounded-full glass border border-blue-500/20">
//             <p className="text-xs sm:text-sm text-gray-300">
//               <span className="inline-block w-1.5 md:w-2 h-1.5 md:h-2 rounded-full gradient-primary mr-2" />
//               Typically respond within 24 hours
//             </p>
//           </div>
//         </ScrollReveal>
//       </div>
//     </section>
//   );
// }


// =======================================





import ScrollReveal from "@/components/animations/ScrollReveal";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="cta" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <ScrollReveal animation="fadeInUp" className="text-center space-y-6 md:space-y-8">
          
          {/* Heading */}
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Ready to Create
              <span className="gradient-text block mt-2">Something Amazing?</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-2">
              I&apos;m always excited to work on new and challenging projects.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 pt-6 md:pt-8">

            {/*  EMAIL (GMAIL OPEN FIXED) */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mathariyavishnu@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-lg gradient-primary text-white font-bold text-sm sm:text-base md:text-lg hover:shadow-gradient transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              Send Me an Email
            </a>

            {/*  LINKEDIN FIXED */}
            <a
              href="https://www.linkedin.com/in/vishnu-mathariya/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-lg border-2 border-blue-500/30 text-white font-bold text-sm sm:text-base md:text-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 whitespace-nowrap"
            >
              Connect on LinkedIn
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-6 md:pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-xs sm:text-sm mb-4 md:mb-6">
              Prefer other ways to reach out?
            </p>

            <div className="flex justify-center gap-3 md:gap-6 flex-wrap">
              {[
                {
                  name: "GitHub",
                  icon: "🐙",
                  url: "https://github.com/vishnu-mathariya",
                },
                {
                  name: "WhatsApp",
                  icon: "💬",
                  url: "https://wa.me/917447644409",
                },
                {
                  name: "Instagram",
                  icon: "📸",
                  url: "https://www.instagram.com/vishnu__mathariya/",
                },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg glass hover:glass-glow transition-all duration-300 text-xs sm:text-sm"
                >
                  <span>{link.icon}</span>
                  <span className="font-medium whitespace-nowrap">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Response Time */}
        <ScrollReveal delay={0.2} className="mt-10 md:mt-16 text-center">
          <div className="inline-block px-4 md:px-6 py-2 md:py-3 rounded-full glass border border-blue-500/20">
            <p className="text-xs sm:text-sm text-gray-300">
              <span className="inline-block w-1.5 md:w-2 h-1.5 md:h-2 rounded-full gradient-primary mr-2" />
              Typically respond within 24 hours
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}