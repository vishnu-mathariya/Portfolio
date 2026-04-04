// import Link from "next/link";
// import { socialLinks, navLinks } from "@/lib/constants";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="relative mt-16 md:mt-24 border-t border-gray-800 bg-gradient-dark">
//       {/* Gradient Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl"
//           style={{
//             background: "radial-gradient(circle, #3b82f6 0%, transparent 100%)"
//           }}
//         />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-10 md:py-16">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 mb-8 md:mb-12">
//           {/* Brand Column */}
//           <div className="animate-fade-in-up">
//             <div className="flex items-center gap-2 mb-3 md:mb-4">
//               <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg gradient-primary flex items-center justify-center font-bold text-white text-sm sm:text-lg">
//                 V
//               </div>
//               <h3 className="font-bold text-lg sm:text-xl gradient-text">Vishnu</h3>
//             </div>
//             <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
//               Building exceptional digital experiences with modern technologies and creative solutions.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="animate-fade-in-up delay-100">
//             <h4 className="font-bold text-white mb-3 md:mb-6 text-sm sm:text-base">Quick Links</h4>
//             <ul className="space-y-2 md:space-y-3">
//               {navLinks.slice(0, 3).map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     href={link.href}
//                     className="text-gray-400 hover:text-white transition-colors duration-300 text-xs sm:text-sm"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Social Links */}
//           <div className="animate-fade-in-up delay-200">
//             <h4 className="font-bold text-white mb-3 md:mb-6 text-sm sm:text-base">Connect</h4>
//             <div className="flex gap-3 md:gap-4 flex-wrap">
//               {socialLinks.map((link, index) => (
//                 <a
//                   key={link.name}
//                   href={link.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg glass-hover flex items-center justify-center text-lg sm:text-xl hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:shadow-gradient"
//                   title={link.name}
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   {link.icon}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-800 py-6 md:py-8">
//           <div className="flex flex-col text-center md:flex-row md:justify-between md:items-center gap-3 md:gap-4">
//             <p className="text-gray-400 text-xs sm:text-sm">
//               © {currentYear} All rights reserved. Built with passion and modern technologies.
//             </p>
//             <div className="flex gap-4 md:gap-6 text-xs sm:text-sm text-gray-400 justify-center md:justify-end">
//               <Link href="#" className="hover:text-white transition-colors">
//                 Privacy
//               </Link>
//               <Link href="#" className="hover:text-white transition-colors">
//                 Terms
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }





// =================================================



// import Link from "next/link";
// import { socialLinks, navLinks } from "@/lib/constants";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="relative mt-20 border-t border-gray-800 overflow-hidden">

//       {/* 🔥 Animated Background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl top-[-100px] left-[-100px] animate-pulse" />
//         <div className="absolute w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-3xl bottom-[-100px] right-[-100px] animate-pulse" />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">

//         {/* 🔥 TOP GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

//           {/* 🔹 BRAND */}
//           <div>
//             <div className="flex items-center gap-3 mb-4">
//               <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-lg">
//                 V
//               </div>
//               <h2 className="text-xl font-bold text-white">Vishnu</h2>
//             </div>

//             <p className="text-gray-400 text-sm leading-relaxed mb-4">
//               Crafting modern, scalable and high-performance web experiences using React, Next.js & latest tech.
//             </p>

//             {/* CTA */}
//             <a
//               href="https://mail.google.com/mail/?view=cm&fs=1&to=mathariyavishnu@gmail.com"
//               target="_blank"
//               className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold hover:scale-105 transition"
//             >
//               Hire Me 🚀
//             </a>
//           </div>

//           {/* 🔹 QUICK LINKS */}
//           <div>
//             <h4 className="text-white font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2 text-sm">
//               {navLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     href={link.href}
//                     className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition"
//                   >
//                     → {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* 🔹 CONTACT INFO */}
//           <div>
//             <h4 className="text-white font-semibold mb-4">Contact</h4>

//             <ul className="space-y-3 text-sm text-gray-400">
//               <li>📧 mathariyavishnu@gmail.com</li>
//               <li>📱 +91 7447644409</li>
//               <li>📍 Pune, India</li>
//             </ul>
//           </div>

//           {/* 🔹 SOCIAL */}
//           <div>
//             <h4 className="text-white font-semibold mb-4">Follow Me</h4>

//             <div className="flex gap-4 flex-wrap">
//               {socialLinks.map((link, index) => (
//                 <a
//                   key={link.name}
//                   href={link.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-slate-800 border border-slate-700 hover:border-purple-500 hover:text-purple-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   {link.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//         </div>

//         {/* 🔥 DIVIDER */}
//         <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">

//           <p>
//             © {currentYear} Vishnu. All rights reserved.
//           </p>

//           <div className="flex gap-6">
//             <Link href="#" className="hover:text-white transition">Privacy</Link>
//             <Link href="#" className="hover:text-white transition">Terms</Link>
//           </div>

//         </div>
//       </div>
//     </footer>
//   );
// }



import Link from "next/link";
import { navLinks } from "@/lib/constants";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-gray-800 overflow-hidden">

      {/* Background (UNCHANGED) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl top-[-100px] left-[-100px] animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-3xl bottom-[-100px] right-[-100px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* 🔥 UPDATED BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4">

              {/* NEW LOGO */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-sm tracking-wider">
                VM
              </div>

              {/* NEW NAME STYLE */}
            


<h2 className="text-xl font-bold text-white">
  {"Vishnu Mathariya".split("").map((char, i) => (
    <span
      key={i}
      className="inline-block animate-bounce"
      style={{ animationDelay: `${i * 0.05}s` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ))}
</h2>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Crafting modern, scalable and high-performance web experiences using React, Next.js & latest tech.
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mathariyavishnu@gmail.com"
              target="_blank"
              className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold hover:scale-105 transition"
            >
              Hire Me 🚀
            </a>
          </div>

          {/* QUICK LINKS (UNCHANGED) */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition"
                  >
                    → {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT (UNCHANGED) */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>📧 mathariyavishnu@gmail.com</li>
              <li>📱 +91 7447644409</li>
              <li>📍 Pune, India</li>
            </ul>
          </div>

          {/* 🔥 UPDATED SOCIAL */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Me</h4>

            <div className="flex gap-4 flex-wrap">

              {/* GitHub */}
              <a
                href="https://github.com/vishnu-mathariya"
                target="_blank"
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-slate-800 border border-slate-700 hover:border-purple-500 hover:text-purple-400 transition-all duration-300 hover:scale-110"
              >
                <FaGithub />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/vishnu-mathariya/"
                target="_blank"
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-slate-800 border border-slate-700 hover:border-purple-500 hover:text-purple-400 transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/vishnu__mathariya/"
                target="_blank"
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-slate-800 border border-slate-700 hover:border-purple-500 hover:text-purple-400 transition-all duration-300 hover:scale-110"
              >
                <FaInstagram />
              </a>

            </div>
          </div>

        </div>

        {/* BOTTOM (UNCHANGED) */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {currentYear} Vishnu Mathariya. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition">Privacy</Link>
            <Link href="#" className="hover:text-white transition">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}