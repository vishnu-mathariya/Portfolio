# Advanced Portfolio - Components Reference Guide

## Overview
This portfolio contains **8 major section components**, **2 layout components**, and **2 animation utilities**.

---

## 📱 Section Components

### 1. Hero.tsx - Landing Section
**Purpose**: Eye-catching introduction with CTAs

**Features**:
- Animated headline with gradient text
- Floating background shapes
- Stats counter (Projects, Clients, Years)
- Dual CTA buttons
- Animated scroll indicator
- Tech stack emoji display

**Key Props**:
- Uses `AnimatedText` for headline
- Mouse-tracked floating background
- Staggered animations

**Code Example**:
```tsx
<Hero />
```

**Customization**:
```tsx
// Edit statistics
stats: [
  { number: "50+", label: "Projects" },      // Change numbers
  { number: "30+", label: "Clients" },
  { number: "5+", label: "Years XP" },
]

// Edit CTA buttons
<Link href="#projects">View My Work</Link>
<Link href="#contact">Get in Touch</Link>
```

---

### 2. About.tsx - Personal Introduction
**Purpose**: Tell your story and highlight key info

**Features**:
- Left: Text with achievements
- Right: Visual card with emoji
- 4 info cards (Email, Location, Role, Status)
- Scroll-reveal animations
- Responsive grid layout

**Key Components**:
- `ScrollReveal` for fade-in animations
- Info cards grid
- Achievement bullet points

**Customization**:
```tsx
// Update info cards
{
  label: "Email",
  value: "hello@example.com"
},
{
  label: "Location",
  value: "San Francisco"
}

// Update achievement bullets
"Building responsive, accessible web applications"
```

---

### 3. Skills.tsx - Technical Skills
**Purpose**: Showcase your technical expertise

**Features**:
- 3 categories (Frontend, Backend, Tools)
- Proficiency progress bars (0-100%)
- Skill icons (emojis)
- Hover effects with glow
- Animated bar fill on view

**Structure**:
```typescript
{
  category: "Frontend",
  skills: [
    { name: "React.js", proficiency: 95, icon: "⚛️" },
    { name: "Next.js", proficiency: 94, icon: "▲" },
    // ...
  ]
}
```

**Customization**:
```tsx
// Change proficiency
proficiency: 95  // 0-100 scale

// Add new category
{
  category: "Mobile",
  skills: [...]
}

// Change icons
icon: "📱"  // Any emoji
```

---

### 4. Projects.tsx - Portfolio Showcase
**Purpose**: Display your best work

**Features**:
- Responsive grid (1-3 columns)
- Project cards with:
  - Image placeholder
  - Title & description
  - Technology tags
  - Category badge
  - GitHub & Demo links
  - Metrics display
- Hover effects
- Scroll-reveal animations

**Project Structure**:
```typescript
{
  id: 1,
  title: "Project Name",
  description: "What it does",
  image: "/images/projects/project.jpg",
  technologies: ["React", "Node.js", "MongoDB"],
  link: "https://github.com/yourrepo",
  demo: "https://project-demo.com",
  category: "Full Stack",
  metrics: { users: "10K+", rating: "4.9" }
}
```

**Customization**:
```tsx
// Add more projects - just add to array
projectsData.push({
  // new project
})

// Change grid columns
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
// → lg:grid-cols-2 for 2-column layout
```

---

### 5. Experience.tsx - Work History
**Purpose**: Show your professional background

**Features**:
- Vertical timeline
- Alternating left-right layout
- Company info:
  - Role title
  - Company name
  - Period (date range)
  - Description
  - Achievement bullets
- Timeline dots with gradient
- Responsive mobile view

**Experience Structure**:
```typescript
{
  id: 1,
  company: "Company Name",
  role: "Senior Developer",
  period: "2022 - Present",
  description: "What you do there",
  achievements: [
    "Achievement 1",
    "Achievement 2",
    // ...
  ]
}
```

**Timeline Styling**:
- Desktop: Alternating sides with center line
- Mobile: Single column with dots on left
- Animated dots on scroll

---

### 6. Testimonials.tsx - Client Reviews
**Purpose**: Build social proof with testimonials

**Features**:
- Featured testimonial carousel
- Navigation buttons (Prev/Next)
- Indicator dots
- Stats cards:
  - Happy Clients count
  - Average rating
  - Satisfaction percentage
- Grid of all testimonials
- Interactive switching

**Testimonial Structure**:
```typescript
{
  id: 1,
  name: "Client Name",
  role: "Their Position",
  content: "What they say about you",
  rating: 5,  // 1-5 stars
  image: "😊"  // emoji
}
```

**Features Code**:
```tsx
// Navigation
<button onClick={nextTestimonial}>Next →</button>
<button onClick={prevTestimonial}>← Prev</button>

// Current display
{testimonialsData[currentIndex]}

// Dot indicators
{testimonialsData.map((_, index) => (
  <button 
    onClick={() => setCurrentIndex(index)}
    className={index === currentIndex ? "active" : ""}
  />
))}
```

---

### 7. CTA.tsx - Call-to-Action
**Purpose**: Convert visitors with clear action items

**Features**:
- Large headline
- Email & LinkedIn buttons
- Alternative contact methods (GitHub, Twitter, Discord)
- Response time indicator
- Scroll-reveal animations
- Responsive layout

**Customization**:
```tsx
// Update email
href="mailto:your@email.com"

// Update social links
{
  name: "GitHub",
  icon: "🔗",
  url: "https://github.com/yourprofile"
}

// Update response time
"Typically respond within 24 hours"
```

---

## 🎯 Common Components

### 8. Navigation.tsx - Header Navigation
**Purpose**: Site navigation & branding

**Features**:
- Sticky header with blur effect on scroll
- Logo + brand name
- Desktop nav with underline hover
- Mobile hamburger menu (responsive)
- Smooth scroll links
- Active state styling

**Props**:
```tsx
// Uses navLinks from lib/constants.ts
navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  // ...
]
```

**Customization**:
```tsx
// Change logo (line with 'A')
<div className="w-10 h-10 rounded-lg gradient-primary">
  // Change 'A' to your initial
</div>

// Add/remove nav items in lib/constants.ts
```

---

### 9. Footer.tsx - Page Footer
**Purpose**: Additional info & quick links

**Features**:
- Brand section with logo
- Quick links
- Social media links
- Copyright & legal links
- Gradient background effect
- Staggered animations

**Layout**:
```
[Brand] [Quick Links] [Social Links]
           Legal Links
           Copyright
```

**Customization**:
```tsx
// Update footer year (automatic)
const currentYear = new Date().getFullYear()

// Add footer links
<Link href="/privacy">Privacy Policy</Link>
<Link href="/terms">Terms of Service</Link>
```

---

## ✨ Animation Components

### 10. ScrollReveal.tsx - Scroll Animations
**Purpose**: Trigger animations as elements enter viewport

**Props**:
```typescript
interface ScrollRevealProps {
  children: ReactNode
  className?: string
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "slideInUp"
  delay?: number          // Delay in seconds
  duration?: number       // Animation duration in seconds
  threshold?: number      // Trigger threshold (0-1)
}
```

**Usage**:
```tsx
<ScrollReveal 
  animation="fadeInUp" 
  delay={0.2}
  threshold={0.1}
  className="text-white"
>
  <h2>This fades in as you scroll</h2>
</ScrollReveal>
```

**Available Animations**:
- `fadeInUp` - Fade in from bottom (default)
- `fadeInLeft` - Fade in from left
- `fadeInRight` - Fade in from right
- `scaleIn` - Grow into view
- `slideInUp` - Slide up from bottom

---

### 11. AnimatedText.tsx - Text Animations
**Purpose**: Animate text content with typewriter effect

**Props**:
```typescript
interface AnimatedTextProps {
  text: string          // Text to animate
  className?: string    // CSS classes
  delay?: number        // Delay before animation
  stagger?: boolean     // Character-by-character typing
}
```

**Usage**:
```tsx
// Instant fade-in
<AnimatedText 
  text="Hey, I'm Your Developer" 
  stagger={false}
/>

// Typewriter effect
<AnimatedText 
  text="Building amazing experiences..." 
  stagger={true}
  delay={0.5}
/>
```

---

## 🎨 Styling Utilities

### CSS Classes Available

**Animations** (in `styles/animations.css`):
```css
.animate-fade-in         /* Fade in */
.animate-fade-in-up      /* Fade in from bottom */
.animate-fade-in-left    /* Fade in from left */
.animate-fade-in-right   /* Fade in from right */
.animate-scale-in        /* Scale into view */
.animate-slide-in-left   /* Slide from left */
.animate-slide-in-right  /* Slide from right */
.animate-float           /* Floating animation */
.animate-bounce-in       /* Bounce into view */
.animate-pulse           /* Pulsing animation */
.animate-glow            /* Glowing effect */
.animate-shimmer         /* Shimmer effect */
```

**Animation Delays**:
```css
.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
/* ... up to .delay-1000 */
```

**Gradients** (in `styles/gradients.css`):
```css
.gradient-primary        /* Blue to Purple */
.gradient-secondary      /* Cyan to Blue */
.gradient-accent         /* Pink to Red */
.gradient-text           /* Gradient text effect */
.gradient-moving         /* Animated gradient shift */
.glass                   /* Glassmorphism effect */
.glass-glow              /* Glowing glass effect */
.neon-blue              /* Neon text effect */
```

---

## 🔄 Component Data Flow

```
app/page.tsx
├── Navigation (fixed header)
├── Hero (state: mousePosition)
├── About (ScrollReveal)
├── Skills (ScrollReveal + loop skillsData)
├── Projects (loop projectsData)
├── Experience (loop experienceData)
├── Testimonials (state: currentIndex)
└── CTA (ScrollReveal)
└── Footer
```

**Data Sources**:
- `lib/constants.ts` - All static data
- `lib/animations.ts` - Animation configs
- Components - Local state management

---

## 🚀 Performance Tips

1. **Images**: Keep under 200KB per image
2. **Animations**: Use transform & opacity only
3. **Lazy Loading**: ScrollReveal triggers on view
4. **Code Splitting**: Automatic with Next.js
5. **CSS**: All animations use GPU acceleration

---

## 🎯 Most Used Patterns

### Pattern 1: Section with ScrollReveal
```tsx
<section>
  <ScrollReveal>
    <h2>Section Title</h2>
  </ScrollReveal>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {data.map((item, index) => (
      <ScrollReveal 
        key={item.id}
        delay={index * 0.1}
      >
        {/* Item content */}
      </ScrollReveal>
    ))}
  </div>
</section>
```

### Pattern 2: Card with Hover Effects
```tsx
<div className="rounded-lg glass-glow border border-blue-500/10 p-6 hover:border-blue-500/30 transition-all">
  {/* Card content */}
</div>
```

### Pattern 3: Gradient Text
```tsx
<h1 className="gradient-text">
  Your Heading Here
</h1>
```

---

## 📚 Component Size Reference

| Component | Lines | Purpose |
|-----------|-------|---------|
| Hero.tsx | 131 | Landing section |
| About.tsx | 86 | Personal intro |
| Skills.tsx | 84 | Tech skills |
| Projects.tsx | 121 | Portfolio |
| Experience.tsx | 90 | Work history |
| Testimonials.tsx | 179 | Reviews |
| CTA.tsx | 83 | Call-to-action |
| Navigation.tsx | 106 | Header |
| Footer.tsx | 91 | Footer |
| ScrollReveal.tsx | 70 | Animation util |
| AnimatedText.tsx | 55 | Text animation |

---

## Quick Copy-Paste Examples

### Add a new skill category
```typescript
// In lib/constants.ts
{
  category: "Mobile",
  skills: [
    { name: "React Native", proficiency: 85, icon: "📱" },
    { name: "Flutter", proficiency: 80, icon: "🦋" },
  ],
}
```

### Add a new project
```typescript
{
  id: 7,
  title: "New Project",
  description: "Project description",
  image: "/images/projects/new.jpg",
  technologies: ["Tech1", "Tech2"],
  link: "https://github.com/...",
  demo: "https://...",
  category: "Category",
  metrics: { users: "5K+", rating: "4.8" },
}
```

### Add a new testimonial
```typescript
{
  id: 4,
  name: "New Client",
  role: "Their Title",
  content: "Their testimonial text",
  rating: 5,
  image: "😄",
}
```

---

This portfolio has everything you need for a professional, advanced presence online! 🎉
