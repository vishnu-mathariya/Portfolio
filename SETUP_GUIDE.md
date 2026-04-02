# Advanced Portfolio - Quick Setup & Customization Guide

## 🚀 Getting Started

Your portfolio is ready to go! Here's everything you need to know to customize it.

---

## 📝 Step 1: Update Your Information

### Edit your data in `lib/constants.ts`

**1. Update Projects:**
```typescript
// Replace with your actual projects
export const projectsData = [
  {
    id: 1,
    title: "Your Project Title",
    description: "What you built and why it matters",
    image: "/images/projects/your-project.jpg", // Replace image
    technologies: ["Tech1", "Tech2", "Tech3"],
    link: "https://github.com/yourprofile/project",
    demo: "https://your-project-demo.com",
    category: "Full Stack",
    metrics: { users: "10K+", rating: "4.9" },
  },
  // ... more projects
];
```

**2. Update Skills:**
```typescript
export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", proficiency: 95, icon: "⚛️" },
      { name: "Next.js", proficiency: 94, icon: "▲" },
      // ... more skills
    ],
  },
  // ... more categories
];
```

**3. Update Experience:**
```typescript
export const experienceData = [
  {
    id: 1,
    company: "Your Company Name",
    role: "Your Job Title",
    period: "2023 - Present",
    description: "What you do there",
    achievements: [
      "Achievement 1",
      "Achievement 2",
      // ... more achievements
    ],
  },
  // ... more experiences
];
```

**4. Update Testimonials:**
```typescript
export const testimonialsData = [
  {
    id: 1,
    name: "Client Name",
    role: "Their Position",
    content: "What they say about working with you",
    rating: 5,
    image: "😊", // Use any emoji
  },
  // ... more testimonials
];
```

**5. Update Social Links:**
```typescript
export const socialLinks = [
  { name: "GitHub", url: "https://github.com/yourprofile", icon: "🔗" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile", icon: "💼" },
  { name: "Twitter", url: "https://twitter.com/yourprofile", icon: "🐦" },
  { name: "Email", url: "mailto:your@email.com", icon: "📧" },
];
```

---

## 🎨 Step 2: Customize Colors & Theme

### Edit `app/globals.css` - Change the color variables:

```css
:root {
  /* Primary color - Main brand color */
  --primary: #3b82f6;           /* Change from blue */
  
  /* Secondary color - Accent 1 */
  --secondary: #06b6d4;         /* Change from cyan */
  
  /* Accent color - Highlight color */
  --accent: #ec4899;            /* Change from pink */
  
  /* Background colors */
  --background: #0f172a;        /* Dark background */
  --foreground: #f1f5f9;        /* Text color */
}
```

**Popular Color Combinations:**
- Purple: `--primary: #8b5cf6` | `--secondary: #a855f7`
- Green: `--primary: #10b981` | `--secondary: #34d399`
- Orange: `--primary: #f97316` | `--secondary: #fb923c`
- Red: `--primary: #ef4444` | `--secondary: #f87171`

---

## 🖼️ Step 3: Update Images

### For Project Images:
1. Replace images in `/public/images/projects/`
2. Keep the same filenames or update in `projectsData`
3. Supported formats: JPG, PNG, WebP
4. Recommended size: 1200x800px

### Add Your Logo:
1. Create `/public/logo.png`
2. Update Navigation component to use it

---

## ✏️ Step 4: Update Metadata & SEO

### Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Name - Developer Portfolio',
  description: 'Your professional summary here',
  keywords: ['your', 'keywords', 'here'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Your Portfolio',
    description: 'Your description',
    type: 'website',
  },
};
```

---

## 🎬 Step 5: Control Animations

### In `components/sections/`:
Each section uses `ScrollReveal` component. Customize like:

```typescript
<ScrollReveal
  animation="fadeInUp"        // Change animation type
  delay={0.2}                 // Adjust delay (seconds)
  threshold={0.1}             // When to trigger (0-1)
  className="..."
>
  Your content
</ScrollReveal>
```

**Available Animations:**
- `fadeInUp` - Fade in from bottom
- `fadeInLeft` - Fade in from left
- `fadeInRight` - Fade in from right
- `scaleIn` - Grow into view
- `slideInUp` - Slide up

### Disable Animations for accessibility:
Users with `prefers-reduced-motion` will have animations disabled automatically.

---

## 📱 Step 6: Responsive Design

The portfolio is **mobile-first** and fully responsive:
- **Mobile**: Single column, optimized touch targets
- **Tablet**: 2-column layouts
- **Desktop**: Full 3-column grids with hover effects

All Tailwind breakpoints are available:
- `sm:` (640px+)
- `md:` (768px+)
- `lg:` (1024px+)
- `xl:` (1280px+)
- `2xl:` (1536px+)

---

## 🚀 Step 7: Deploy to Vercel

### Option 1: Push to GitHub + Vercel (Recommended)
```bash
# 1. Push to GitHub
git add .
git commit -m "Portfolio setup"
git push

# 2. Go to vercel.com and import your GitHub repo
# Vercel will auto-deploy on every push
```

### Option 2: Deploy directly from v0
Click the **"Publish"** button in the top right to deploy to Vercel.

### Option 3: Manual deployment
```bash
npm install -g vercel
vercel deploy
```

---

## 🔗 Step 8: Add Navigation Links

The navigation automatically links to sections using IDs:
- `#about` → About section
- `#skills` → Skills section
- `#projects` → Projects section
- `#experience` → Experience section
- `#contact` → Contact/CTA section

Already set up! Just make sure section IDs match the `href` values.

---

## 💾 Common Customizations

### Change Font
Edit `app/layout.tsx`:
```typescript
import { YourFont } from 'next/font/google'

const font = YourFont({ subsets: ['latin'] })
```

### Add New Section
1. Create `components/sections/YourSection.tsx`
2. Import in `app/page.tsx`
3. Add to page layout
4. Add navigation link in `lib/constants.ts`

### Change Fonts Size
Edit Tailwind classes in components:
```tsx
<h1 className="text-6xl md:text-7xl">  {/* text-6xl = 60px */}
<p className="text-lg md:text-xl">      {/* text-lg = 18px */}
```

### Add Dark/Light Mode Toggle
Components are already dark-optimized. To add toggle:
1. Create theme context
2. Add toggle button in Navigation
3. Apply `dark:` classes where needed

---

## 🐛 Troubleshooting

**Images not loading?**
- Check file path is correct
- Ensure image is in `/public/` folder
- Use `.jpg`, `.png`, or `.webp` format

**Animations not working?**
- Check browser supports CSS animations
- Disable if user has `prefers-reduced-motion` enabled
- Check animation duration in CSS

**Colors looking wrong?**
- Clear browser cache (Cmd+Shift+Delete)
- Check CSS variable syntax
- Verify hex color codes are correct

---

## 📚 Useful Resources

- [Tailwind CSS Classes](https://tailwindcss.com/docs)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Hooks](https://react.dev/reference/react/hooks)

---

## 🎯 Final Checklist

- [ ] Updated all data in `lib/constants.ts`
- [ ] Changed colors in `app/globals.css`
- [ ] Updated metadata in `app/layout.tsx`
- [ ] Replaced project images
- [ ] Added your social links
- [ ] Tested on mobile
- [ ] Deployed to Vercel
- [ ] Set up custom domain (optional)

---

## Need Help?

If something isn't working:
1. Check the browser console for errors
2. Read `PORTFOLIO_STRUCTURE.md` for detailed info
3. Review the component files - they're well-commented
4. Check Next.js docs for framework-specific issues

---

## Keyboard Shortcuts (After Deployment)

- `⌘/Ctrl + K` - Navigate (if you add Cmd+K nav)
- Click section links - Smooth scroll to section
- Hover cards - Interactive hover effects

---

Your portfolio is ready to showcase your amazing work! Good luck! 🎉

---

## Version Info
- Next.js: 16.2.0
- React: 19.2.4
- Tailwind CSS: 4.2.0
- Node.js: 18+
- Package Manager: pnpm

Happy coding! 🚀
