import Link from "next/link";
import { socialLinks, navLinks } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-16 md:mt-24 border-t border-gray-800 bg-gradient-dark">
      {/* Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{
            background: "radial-gradient(circle, #3b82f6 0%, transparent 100%)"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 mb-8 md:mb-12">
          {/* Brand Column */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg gradient-primary flex items-center justify-center font-bold text-white text-sm sm:text-lg">
                V
              </div>
              <h3 className="font-bold text-lg sm:text-xl gradient-text">Vishnu</h3>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Building exceptional digital experiences with modern technologies and creative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up delay-100">
            <h4 className="font-bold text-white mb-3 md:mb-6 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              {navLinks.slice(0, 3).map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-xs sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in-up delay-200">
            <h4 className="font-bold text-white mb-3 md:mb-6 text-sm sm:text-base">Connect</h4>
            <div className="flex gap-3 md:gap-4 flex-wrap">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg glass-hover flex items-center justify-center text-lg sm:text-xl hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:shadow-gradient"
                  title={link.name}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-6 md:py-8">
          <div className="flex flex-col text-center md:flex-row md:justify-between md:items-center gap-3 md:gap-4">
            <p className="text-gray-400 text-xs sm:text-sm">
              © {currentYear} All rights reserved. Built with passion and modern technologies.
            </p>
            <div className="flex gap-4 md:gap-6 text-xs sm:text-sm text-gray-400 justify-center md:justify-end">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
