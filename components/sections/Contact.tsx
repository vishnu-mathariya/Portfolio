'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import AnimatedText from '@/components/animations/AnimatedText';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  budget?: string;
  projectType?: string;
}

const contactMethods = [
  {
    icon: '📧',
    title: 'Email',
    description: 'Send me an email and I\'ll respond within 24 hours',
    value: 'mathariyavishnu@gmail.com',
    link: 'mailto:mathariyavishnu@gmail.com',
    color: 'from-purple-600 to-pink-600',
  },
  {
    icon: '💬',
    title: 'WhatsApp',
    description: 'Quick message on WhatsApp for instant chat',
    value: '+91 8055229755',
    link: 'https://wa.me/918055229755',
    color: 'from-green-600 to-emerald-600',
  },
  {
    icon: '💼',
    title: 'LinkedIn',
    description: 'Connect with me on LinkedIn for professional networking',
    value: 'linkedin.com/in/vishnumathariya',
    link: 'https://linkedin.com/in/vishnumathariya',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    icon: '🐙',
    title: 'GitHub',
    description: 'Check out my projects and code repositories',
    value: 'github.com/vishnumathariya',
    link: 'https://github.com/vishnumathariya',
    color: 'from-slate-600 to-slate-800',
  },
  {
    icon: '📱',
    title: 'Telegram',
    description: 'Fast messaging on Telegram with notifications',
    value: '@vishnumathariya',
    link: 'https://t.me/vishnumathariya',
    color: 'from-sky-600 to-blue-600',
  },
  {
    icon: '📞',
    title: 'Call',
    description: 'Schedule a call for direct discussion',
    value: '+91 8055229755',
    link: 'tel:+918055229755',
    color: 'from-orange-600 to-red-600',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
    budget: '',
    projectType: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call - Replace with your actual backend endpoint
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      setSubmitMessage('Thanks for reaching out! I\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        phone: '',
        budget: '',
        projectType: '',
      });

      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center px-4">
          <ScrollReveal>
            <div className="inline-block mb-4 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full border border-purple-600/30">
              <span className="text-xs md:text-sm font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                GET IN TOUCH
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              <AnimatedText text="Let's Create Something Amazing" />
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to bring your vision to life.
            </p>
          </ScrollReveal>
        </div>

        {/* Resume Section */}
        <div className="mb-12 md:mb-16 px-4 md:px-0">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
              <button
                onClick={() => {
                  const resumeData = `
VISHNU MATHARIYA - REACT DEVELOPER RESUME

📧 mathariyavishnu@gmail.com | 📱 +91 8055229755
🔗 linkedin.com/in/vishnumathariya | 🐙 github.com/vishnumathariya
📍 Pune, Maharashtra | 3+ Years Experience

PROFESSIONAL SUMMARY
Experienced React Developer specializing in building responsive, scalable web applications.
Expert in React.js, Next.js, TypeScript, Tailwind CSS, and modern frontend technologies.

EXPERIENCE
• Software Engineer at Smartwork Ideas Pvt Ltd (Apr 2022 - Apr 2025)
  - Built responsive interfaces with React.js, JavaScript, Tailwind CSS
  - Consumed REST APIs for dynamic data handling across multiple modules
  - Structured modular components for improved scalability

• Software Engineer at NeoSOFT Pvt Ltd (Apr 2025 - Jun 2025)
  - Created responsive UIs using React.js and ES6+ JavaScript
  - Fixed UI issues for better usability and cross-browser compatibility
  - Ensured responsive design across all devices

• Software Engineer at FillRacks Pvt Ltd (Jun 2025 - Nov 2025)
  - Engineered frontend features using Next.js and TypeScript
  - Built UI layouts with Tailwind CSS and Shadcn UI
  - Optimized performance across different screen sizes

TECHNICAL SKILLS
Frontend: HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js
Frameworks: Redux, Redux Toolkit, Tailwind CSS, Shadcn UI, Framer Motion
Backend: Node.js, Express.js, MongoDB, REST APIs
Tools: Git, GitHub, Agile/Scrum, VS Code

KEY PROJECTS
1. Health Life Insurance Platform - React, Redux, Tailwind CSS
2. RSA Insurance Dashboard - React, D3.js, Tailwind CSS
3. FillRacks Inventory System - Next.js, TypeScript, Shadcn UI
4. E-Commerce Dashboard - React, Redux, Real-time Analytics

EXPERTISE
✓ Responsive Web Design & Mobile-First Development
✓ Component-Based Architecture & Design Systems
✓ State Management (Redux, Context API)
✓ REST API Integration & Data Handling
✓ Performance Optimization & SEO
✓ Cross-device Compatibility Testing
✓ Agile/Scrum Methodology
✓ Git Version Control & Code Reviews

EDUCATION
Bachelor's in Computer Science/IT
Advanced React Development Certification
Full Stack Web Development Bootcamp

AVAILABILITY
Status: Available for freelance & full-time projects
Minimum Budget: $5,000 (negotiable for special cases)
Timezone: IST (UTC+5:30)

Generated: ${new Date().toLocaleDateString()}
                  `;
                  
                  const element = document.createElement('a');
                  const file = new Blob([resumeData], { type: 'text/plain' });
                  element.href = URL.createObjectURL(file);
                  element.download = 'Vishnu_Mathariya_Resume.txt';
                  document.body.appendChild(element);
                  element.click();
                  document.body.removeChild(element);
                }}
                className="group relative overflow-hidden px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative flex items-center gap-2 text-white text-sm md:text-base">
                  ⬇️ Download Resume
                </span>
              </button>

              <a
                href="mailto:mathariyavishnu@gmail.com?subject=Resume%20Request"
                className="group relative overflow-hidden px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative flex items-center gap-2 text-white text-sm md:text-base">
                  👁️ Request Full Resume
                </span>
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16 px-4 md:px-0">
          {contactMethods.map((method, index) => (
            <ScrollReveal key={index} delay={0.1 * (index % 3)}>
              <a
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group relative h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-2xl blur transition-opacity duration-300" 
                     style={{backgroundImage: `linear-gradient(135deg, ${method.color})`}}
                />
                <div className="relative h-full p-4 sm:p-5 md:p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 group-hover:border-purple-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-600/20 backdrop-blur-sm">
                  <div className="flex flex-col h-full">
                    <div className="text-3xl sm:text-4xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 line-clamp-1">
                      {method.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 mb-4 flex-grow group-hover:text-gray-300 transition-colors line-clamp-2">
                      {method.description}
                    </p>
                    <div className="text-xs sm:text-sm font-semibold text-purple-400 group-hover:text-cyan-400 transition-colors break-all">
                      {method.value}
                    </div>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Advanced Contact Form */}
        <div className="max-w-3xl mx-auto px-3 sm:px-4 md:px-0">
          <ScrollReveal>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-lg sm:rounded-xl md:rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              
              <form
                onSubmit={handleSubmit}
                className="relative p-4 sm:p-6 md:p-10 lg:p-12 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-lg sm:rounded-xl md:rounded-2xl border border-slate-700/50 backdrop-blur-sm"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-white">
                  Send Me a Message
                </h3>

                {/* Form Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-500 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition-all duration-300 outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-500 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition-all duration-300 outline-none"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-500 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 transition-all duration-300 outline-none"
                      placeholder="+91 8055229755"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 transition-all duration-300 outline-none"
                    >
                      <option value="">Select a type...</option>
                      <option value="website">Website</option>
                      <option value="webapp">Web Application</option>
                      <option value="mobile">Mobile App</option>
                      <option value="saas">SaaS Product</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-all duration-300 outline-none"
                    >
                      <option value="">Select budget...</option>
                      <option value="5k-10k">$5K - $10K</option>
                      <option value="10k-25k">$10K - $25K</option>
                      <option value="25k-50k">$25K - $50K</option>
                      <option value="50k+">$50K+</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-500 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-all duration-300 outline-none"
                      placeholder="Project inquiry"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-500 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition-all duration-300 outline-none resize-none"
                    placeholder="Tell me about your project, goals, and requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full group/btn px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-bold rounded-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 group-hover/btn:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-0 group-hover/btn:opacity-100 blur transition-opacity duration-300" />
                  <span className="relative flex items-center justify-center gap-2 text-white">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="text-lg group-hover/btn:translate-x-1 transition-transform">→</span>
                      </>
                    )}
                  </span>
                </button>

                {/* Success/Error Message */}
                {submitMessage && (
                  <div className="mt-4 p-3 md:p-4 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-600/30 rounded-lg text-green-400 text-center text-sm animate-fadeIn">
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </ScrollReveal>
        </div>


      </div>
    </section>
  );
}
