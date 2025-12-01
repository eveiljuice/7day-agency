import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { LanguageProvider } from '@/components/LanguageContext'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: '7day',
  description: 'Full-cycle app development: from idea to production. No fluff, only results. MVP development, web apps, mobile apps, and AI integration.',
  keywords: ['MVP development', 'startup', 'web development', 'mobile apps', 'AI integration', 'React', 'Next.js'],
  authors: [{ name: '7day' }],
  icons: {
    icon: '/7dlogo.png',
  },
  openGraph: {
    title: '7day - Create Your MVP in 7 Days',
    description: 'Full-cycle app development: from idea to production. No fluff, only results.',
    url: 'https://7day.com',
    siteName: '7day',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '7day - Create Your MVP in 7 Days',
    description: 'Full-cycle app development: from idea to production. No fluff, only results.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

