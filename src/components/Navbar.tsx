'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

const navLinks = [
  { id: 'projects', label: 'Projects', href: '#portfolio' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!mounted) return null

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={cn(
            'relative w-full max-w-5xl rounded-2xl transition-all duration-500 backdrop-blur-xl',
            // Light theme - light transparent
            'bg-white/70 border border-neutral-200/50',
            'shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.8)]',
            // Dark theme - dark transparent
            'dark:bg-neutral-900/70 dark:border-white/10',
            'dark:shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]',
            scrolled && 'shadow-[0_8px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.4)]'
          )}
        >
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/50 to-transparent dark:from-white/5 dark:to-transparent pointer-events-none" />

          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14 lg:h-16">
              {/* Logo */}
              <motion.a 
                href="#" 
                className="flex items-center gap-2 group"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="relative w-8 h-8"
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src="/7dlogo.png" 
                    alt="7D Agency Logo" 
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <span className="text-lg font-bold bg-clip-text text-transparent bg-flash-gradient">
                  7day
                </span>
              </motion.a>

              {/* Desktop Navigation - Right aligned */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <motion.button
                    key={link.id}
                    onClick={() => handleNavClick(link.href)}
                    className="px-4 py-2 text-sm text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-white transition-colors font-medium rounded-lg hover:bg-neutral-100 dark:hover:bg-white/10"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.label}
                  </motion.button>
                ))}

                {/* Theme Toggle */}
                <motion.button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-lg text-neutral-500 dark:text-neutral-400 hover:text-primary dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
                  aria-label="Toggle theme"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <AnimatePresence mode="wait">
                    {theme === 'dark' ? (
                      <motion.div
                        key="sun"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <SunIcon className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="moon"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <MoonIcon className="w-5 h-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>

                {/* CTA Button */}
                <motion.button
                  onClick={() => handleNavClick('#contact')}
                  className="ml-2 px-5 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex lg:hidden items-center gap-2">
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-lg text-neutral-500 dark:text-neutral-400 hover:text-primary"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <SunIcon className="w-5 h-5" />
                  ) : (
                    <MoonIcon className="w-5 h-5" />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-lg text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
                  aria-label="Toggle menu"
                >
                  <AnimatePresence mode="wait">
                    {isOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                      >
                        <XMarkIcon className="w-6 h-6" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                      >
                        <Bars3Icon className="w-6 h-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 dark:bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 z-50 lg:hidden"
            >
              <div className="h-full bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border-l border-neutral-200 dark:border-white/10 shadow-2xl">
                <div className="flex flex-col h-full pt-20 px-6 pb-6">
                  <div className="flex flex-col gap-2">
                    {navLinks.map((link, index) => (
                      <motion.button
                        key={link.id}
                        onClick={() => handleNavClick(link.href)}
                        className="text-left py-4 px-5 text-lg font-semibold text-secondary dark:text-white hover:bg-neutral-100 dark:hover:bg-white/10 rounded-xl transition-all"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {link.label}
                      </motion.button>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <motion.button
                      onClick={() => handleNavClick('#contact')}
                      className="w-full py-4 text-center font-semibold rounded-xl bg-gradient-to-r from-primary to-accent text-white shadow-lg"
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Started
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
