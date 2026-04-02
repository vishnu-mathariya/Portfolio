import fs from 'fs';
import path from 'path';

// Create a simple text-based resume that can be downloaded
const resumeContent = `
VISHNU MATHARIYA
React Developer | Frontend Specialist
📧 mathariyavishnu@gmail.com | 📱 +91 8055229755
🔗 linkedin.com/in/vishnumathariya | 🐙 github.com/vishnumathariya
📍 Pune, Maharashtra | Timezone: IST (UTC+5:30)

==================================================
PROFESSIONAL SUMMARY
==================================================
Experienced React Developer with 3+ years of expertise in building responsive, scalable web applications.
Specialized in React.js, Next.js, and modern frontend technologies. Strong focus on performance optimization,
clean code architecture, and user experience.

==================================================
EXPERIENCE
==================================================

Software Engineer
Smartwork Ideas Pvt Ltd | April 2022 – April 2025
• Built responsive interfaces using React.js, JavaScript, and Tailwind CSS
• Consumed REST APIs to handle dynamic data across multiple modules
• Structured modular components to simplify code organization and improve scalability
• Participated in Agile processes and contributed to code reviews

Software Engineer
NeoSOFT Pvt Ltd | April 2025 – June 2025
• Created user interfaces using React.js and ES6+ JavaScript
• Identified and fixed UI issues to improve usability and browser compatibility
• Coordinated with design and backend teams to implement requirements
• Ensured responsive design across multiple devices

Software Engineer (Freelance)
FillRacks Pvt Ltd | June 2025 – Nov 2025
• Engineered frontend features using Next.js and TypeScript
• Structured UI layouts and design systems using Tailwind CSS and Shadcn UI
• Ensured smooth interaction with backend systems
• Improved performance on different screen sizes

==================================================
SKILLS
==================================================

Frontend Technologies:
HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js

Frameworks & Libraries:
Redux, Redux Toolkit, Tailwind CSS, Shadcn UI, Framer Motion, Axios

Backend & Database:
Node.js, Express.js, MongoDB, REST APIs, Git & GitHub, Agile-Scrum

==================================================
PROJECTS
==================================================

Health Life Insurance Platform
• Designed responsive insurance platform using React.js and Redux
• Implemented policy comparison and premium calculation features
• Technologies: React.js, Redux, Tailwind CSS, REST APIs

Roadside Assistance Insurance Dashboard (RSA)
• Interactive dashboard for managing policies, claims, and service requests
• Implemented data visualization with D3.js
• Technologies: React.js, Redux, Tailwind CSS, D3.js

FillRacks – Inventory Management System
• Built inventory management application using Next.js and TypeScript
• Implemented product and stock handling with real-time updates
• Technologies: Next.js, TypeScript, Tailwind CSS, Shadcn UI

E-Commerce Dashboard
• Admin dashboard for managing products, orders, and analytics
• Real-time data visualization and responsive design
• Technologies: React.js, Redux, Tailwind CSS, Shadcn UI

==================================================
EDUCATION & CERTIFICATIONS
==================================================

Bachelor's Degree in Computer Science/IT
Advanced React Development Certification
Full Stack Web Development Bootcamp

==================================================
AVAILABILITY
==================================================

Status: Available for freelance & full-time projects
Minimum Project Budget: $5,000
Flexible for case-by-case discussions on smaller projects

==================================================
ADDITIONAL INFORMATION
==================================================

Specialties:
✓ Responsive Web Design
✓ Component-Based Architecture
✓ State Management
✓ REST API Integration
✓ Performance Optimization
✓ Code Quality & Best Practices
✓ Agile/Scrum Methodology
✓ Cross-device Compatibility

Languages: English, Hindi
Time Zone: IST (UTC+5:30)

Last Updated: ${new Date().toLocaleDateString()}
`;

// Ensure the public directory exists
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write the resume as a text file (downloadable as .txt)
// In a real scenario, you'd use a library like jsPDF or pdfkit
fs.writeFileSync(path.join(publicDir, 'resume.txt'), resumeContent);

console.log('✅ Resume generated successfully at public/resume.txt');
console.log('For PDF support, install: npm install jspdf html2pdf');
