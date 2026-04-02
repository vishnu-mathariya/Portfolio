// Projects Data
export const projectsData = [
  {
    id: 1,
    title: "Health Life Insurance Platform",
    description: "Designed responsive insurance platform using React.js and Redux for policy comparison and premium calculation with real-time data.",
    image: "/images/projects/insurance.jpg",
    technologies: ["React.js", "Redux", "Tailwind CSS", "JavaScript", "REST APIs"],
    link: "https://github.com",
    demo: "https://example.com",
    category: "Frontend",
    metrics: {
      features: "Policy Comparison",
      status: "Completed",
    },
  },
  {
    id: 2,
    title: "Roadside Assistance Insurance Dashboard (RSA)",
    description: "Interactive dashboard for managing policies, claims, and service requests with reusable components and D3.js data visualization.",
    image: "/images/projects/dashboard.jpg",
    technologies: ["React.js", "Redux", "Tailwind CSS", "JavaScript", "D3.js"],
    link: "https://github.com",
    demo: "https://example.com",
    category: "Frontend",
    metrics: {
      features: "Data Visualization",
      status: "Completed",
    },
  },
  {
    id: 3,
    title: "FillRacks – Inventory Management System",
    description: "Built inventory management application using Next.js and TypeScript for product and stock handling with real-time updates.",
    image: "/images/projects/inventory.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "REST APIs"],
    link: "https://github.com",
    demo: "https://example.com",
    category: "Full Stack",
    metrics: {
      features: "B2B & B2C",
      status: "Completed",
    },
  },
  {
    id: 4,
    title: "E-Commerce Dashboard",
    description: "Admin dashboard for managing products, orders, and analytics with real-time data visualization and responsive design.",
    image: "/images/projects/ecommerce.jpg",
    technologies: ["React.js", "Redux", "Tailwind CSS", "Shadcn UI", "REST APIs"],
    link: "https://github.com",
    demo: "https://example.com",
    category: "Frontend",
    metrics: {
      features: "Admin Panel",
      status: "In Progress",
    },
  },
  {
    id: 5,
    title: "Task Management Application",
    description: "Full-featured task management app with drag-and-drop functionality, real-time updates, and team collaboration features.",
    image: "/images/projects/taskmanager.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Express.js"],
    link: "https://github.com",
    demo: "https://example.com",
    category: "Full Stack",
    metrics: {
      features: "Collaboration",
      status: "Coming Soon",
    },
  },
  {
    id: 6,
    title: "Real-Time Chat Application",
    description: "Real-time messaging app with live notifications, user authentication, and message persistence using modern web technologies.",
    image: "/images/projects/chat.jpg",
    technologies: ["React.js", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
    link: "https://github.com",
    demo: "https://example.com",
    category: "Full Stack",
    metrics: {
      features: "Real-time Chat",
      status: "Coming Soon",
    },
  },
];

// Skills Data
export const skillsData = [
  {
    category: "Frontend Technologies",
    skills: [
      { name: "HTML5", proficiency: 95, icon: "🏗️" },
      { name: "CSS3", proficiency: 95, icon: "🎨" },
      { name: "JavaScript (ES6+)", proficiency: 94, icon: "⚡" },
      { name: "TypeScript", proficiency: 92, icon: "🔷" },
      { name: "React.js", proficiency: 96, icon: "⚛️" },
      { name: "Next.js", proficiency: 93, icon: "▲" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "Redux", proficiency: 92, icon: "🔄" },
      { name: "Redux Toolkit", proficiency: 91, icon: "📦" },
      { name: "Tailwind CSS", proficiency: 96, icon: "🎨" },
      { name: "Shadcn UI", proficiency: 90, icon: "🧩" },
      { name: "Framer Motion", proficiency: 88, icon: "🎬" },
      { name: "Axios", proficiency: 91, icon: "📡" },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Node.js", proficiency: 91, icon: "🟢" },
      { name: "Express.js", proficiency: 90, icon: "⚡" },
      { name: "MongoDB", proficiency: 89, icon: "🍃" },
      { name: "REST APIs", proficiency: 93, icon: "🔗" },
      { name: "Git & GitHub", proficiency: 94, icon: "📦" },
      { name: "Agile-Scrum", proficiency: 89, icon: "🔄" },
    ],
  },
];

// Experience Data
export const experienceData = [
  {
    id: 1,
    company: "Smartwork Ideas Pvt Ltd",
    role: "Software Engineer",
    period: "April 2022 – April 2025",
    description: "Building responsive interfaces and scalable web applications",
    achievements: [
      "Built responsive interfaces using React.js, JavaScript, and Tailwind CSS",
      "Consumed REST APIs to handle dynamic data across multiple modules",
      "Structured modular components to simplify code organization and improve scalability",
      "Participated in Agile processes and contributed to code reviews",
    ],
  },
  {
    id: 2,
    company: "NeoSOFT Pvt Ltd",
    role: "Software Engineer",
    period: "April 2025 – June 2025",
    description: "Frontend development with focus on UI/UX and browser compatibility",
    achievements: [
      "Created user interfaces using React.js and ES6+ JavaScript",
      "Identified and fixed UI issues to improve usability and browser compatibility",
      "Coordinated with design and backend teams to implement requirements",
      "Ensured responsive design across multiple devices",
    ],
  },
  {
    id: 3,
    company: "FillRacks Pvt Ltd",
    role: "Software Engineer (Freelance)",
    period: "June 2025 – Nov 2025",
    description: "Frontend development for inventory management system",
    achievements: [
      "Engineered frontend features using Next.js and TypeScript",
      "Structured UI layouts and design systems using Tailwind CSS and Shadcn UI",
      "Ensured smooth interaction with backend systems",
      "Improved performance on different screen sizes",
    ],
  },
];

// Testimonials Data
export const testimonialsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, Tech Startup",
    content: "Working with this developer was transformative. They delivered exceptional results and exceeded expectations.",
    rating: 5,
    image: "👩‍💼",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager, Enterprise",
    content: "Highly skilled, professional, and great at communicating complex technical concepts. Highly recommended!",
    rating: 5,
    image: "👨‍💔",
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Founder, SaaS Company",
    content: "Outstanding attention to detail and commitment to quality. The best developer I've worked with.",
    rating: 5,
    image: "👩‍🚀",
  },
];

// Social Links
export const socialLinks = [
  { name: "GitHub", url: "https://github.com", icon: "🔗" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "💼" },
  { name: "Twitter", url: "https://twitter.com", icon: "🐦" },
  { name: "Email", url: "mailto:hello@example.com", icon: "📧" },
];

// Navigation Links
export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

// Contact Information
export const contactInfo = {
  email: "mathariyavishnu@gmail.com",
  phone: "+91 8055229755",
  whatsapp: "+91 8055229755",
  telegram: "@vishnumathariya",
  twitter: "@vishnu_dev",
  linkedin: "https://linkedin.com/in/vishnumathariya",
  github: "https://github.com/vishnumathariya",
  location: "Pune, Maharashtra",
  timezone: "IST (UTC+5:30)",
  availability: "Available for freelance & full-time projects",
  resume: "/resume.pdf",
};

// FAQ Data for Contact Section
export const faqData = [
  {
    question: "What is your typical project timeline?",
    answer: "Timelines vary based on project complexity. Small projects typically take 2-4 weeks, medium projects 4-8 weeks, and larger projects 2-6 months.",
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer: "Yes! I offer maintenance packages and ongoing support to ensure your project runs smoothly and stays updated.",
  },
  {
    question: "What is your minimum project budget?",
    answer: "My minimum is $5K. However, I'm open to discussing smaller projects on a case-by-case basis.",
  },
  {
    question: "Can you work on existing projects or legacy code?",
    answer: "Absolutely! I specialize in modernizing and improving existing codebases. Legacy code refactoring is one of my strengths.",
  },
  {
    question: "What technologies do you work with?",
    answer: "I specialize in React, Next.js, TypeScript, Node.js, MongoDB, PostgreSQL, and cloud platforms like AWS and Vercel.",
  },
  {
    question: "Do you sign NDAs?",
    answer: "Yes, I'm happy to sign NDAs or any other legal agreements your company requires.",
  },
];
