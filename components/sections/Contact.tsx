"use client";

import { useState } from "react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import AnimatedText from "@/components/animations/AnimatedText";
import emailjs from "@emailjs/browser";

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
    icon: "📧",
    title: "Email",
    description: "Send me an email and I'll respond within 24 hours",
    value: "mathariyavishnu@gmail.com",
    link: "mailto:mathariyavishnu@gmail.com",
    color: "from-purple-600 to-pink-600",
  },
  {
    icon: "💬",
    title: "WhatsApp",
    description: "Quick message on WhatsApp for instant chat",
    value: "+91 8055229755",
    link: "https://wa.me/918055229755",
    color: "from-green-600 to-emerald-600",
  },
  {
    icon: "💼",
    title: "LinkedIn",
    description: "Connect with me on LinkedIn for professional networking",
    value: "linkedin.com/in/vishnumathariya",
    link: "https://linkedin.com/in/vishnumathariya",
    color: "from-blue-600 to-cyan-600",
  },
  {
    icon: "🐙",
    title: "GitHub",
    description: "Check out my projects and code repositories",
    value: "github.com/vishnumathariya",
    link: "https://github.com/vishnumathariya",
    color: "from-slate-600 to-slate-800",
  },
  {
    icon: "📱",
    title: "Telegram",
    description: "Fast messaging on Telegram with notifications",
    value: "@vishnumathariya",
    link: "https://t.me/vishnumathariya",
    color: "from-sky-600 to-blue-600",
  },
  {
    icon: "📞",
    title: "Call",
    description: "Schedule a call for direct discussion",
    value: "+91 8055229755",
    link: "tel:+918055229755",
    color: "from-orange-600 to-red-600",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
    budget: "",
    projectType: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_xp0a5ex", // SERVICE  ID
        "template_7k2ctlm", // TEMPLATE ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        "65Q_40aXF2FasEcO-", //  PUBLIC KEY
      );

      setSubmitMessage("Message sent successfully ✅");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        phone: "",
        budget: "",
        projectType: "",
      });

      setTimeout(() => setSubmitMessage(""), 5000);
    } catch (error) {
      console.log(error);
      setSubmitMessage("Failed to send ❌");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container-max relative z-10">
        {/* HEADER  */}
        <div className="mb-12 md:mb-16 text-center px-4">
          <ScrollReveal>
            <div className="inline-block mb-4 px-3 md:px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full border border-purple-600/30">
              <span className="text-sm font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                GET IN TOUCH
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              <AnimatedText text="Let's Create Something Amazing" />
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together.
            </p>
          </ScrollReveal>
        </div>

        {/* RESUME (UNCHANGED) */}
        <div className="mb-12 md:mb-16 px-4 md:px-0">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/resume/Vishnu-Mathariya-React-Developer.pdf";
                  link.download = "Vishnu-Mathariya-React-Developer.pdf";
                  link.click();
                }}
                className="cursor-pointer group relative overflow-hidden px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative text-white flex items-center gap-2">
                  ⬇️ Download Resume
                </span>
              </button>

              <a
                href="/resume/Vishnu-Mathariya-React-Developer.pdf"
                target="_blank"
                className="group relative overflow-hidden px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative text-white flex items-center gap-2">
                  👁️ View Resume
                </span>
              </a>
            </div>
          </ScrollReveal>
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
                      placeholder="+91 7633005555"
                    />
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
                        <span className="text-lg group-hover/btn:translate-x-1 transition-transform">
                          →
                        </span>
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
