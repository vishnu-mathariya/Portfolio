"use client";

import { useState } from "react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import AnimatedText from "@/components/animations/AnimatedText";

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
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Form submitted:", formData);
      setSubmitMessage("Thanks for reaching out! I'll get back to you soon.");
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
      setSubmitMessage("Something went wrong. Please try again.");
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
        {/* Header */}
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

        {/* ✅ FINAL RESUME SECTION */}
        <div className="mb-12 md:mb-16 px-4 md:px-0">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
              {/* 🔥 FORCE DOWNLOAD */}
              {/* <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume/Vishnu-Mathariya-React-Developer.pdf';
                  link.download = 'Vishnu-Mathariya-React-Developer.pdf';
                  link.click();
                }}
                className="group relative overflow-hidden px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative text-white flex items-center gap-2">
                  ⬇️ Download Resume
                </span>
              </button> */}

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

              {/* 👁️ VIEW */}
              <a
                href="/resume/Vishnu-Mathariya-React-Developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
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
      </div>
    </section>
  );
}
