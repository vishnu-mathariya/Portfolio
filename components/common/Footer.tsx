import Link from "next/link";
import { navLinks } from "@/lib/constants";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-gray-800 overflow-hidden">
      {/* Background  */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl top-[-100px] left-[-100px] animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-3xl bottom-[-100px] right-[-100px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/*   BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* LOGO */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-sm tracking-wider">
                VM
              </div>

              {/*  NAME STYLE */}

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
              Crafting modern, scalable and high-performance web experiences
              using React, Next.js & latest tech.
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mathariyavishnu@gmail.com"
              target="_blank"
              className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold hover:scale-105 transition"
            >
              Hire Me 🚀
            </a>
          </div>

          {/* QUICK LINKS  */}
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

          {/* CONTACT  */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>📧 mathariyavishnu@gmail.com</li>
              <li>📱 +91 7447644409</li>
              <li>📍 Pune, India</li>
            </ul>
          </div>

          {/*   SOCIAL */}
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
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-400">
          <p>© {currentYear} Vishnu Mathariya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
