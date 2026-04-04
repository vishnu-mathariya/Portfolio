import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import ScrollButton from "@/components/scrollButton"; 
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Vishnu Mathariya - React Developer Portfolio',
  description: 'Vishnu Mathariya - React Developer with 3+ years of experience. Specialized in React.js, Next.js, and modern frontend technologies. View my projects, skills, and experience.',
  generator: 'v0.app',
  keywords: ['React Developer', 'Frontend Developer', 'Next.js', 'Vishnu Mathariya', 'web development', 'portfolio'],
  authors: [{ name: 'Vishnu Mathariya' }],
  openGraph: {
    title: 'Vishnu Mathariya - React Developer Portfolio',
    description: 'Explore my web development projects built with React.js, Next.js, and modern technologies',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <ScrollButton />
        <Analytics />
      </body>
    </html>
  )
}
