'use client'

import { motion } from 'framer-motion'
import { t } from '@/lib/en-translations'

const socialLinks = [
  { name: 'X', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'Behance', href: '#' },
]

export function Footer() {
  const navLinks = [
    { label: t.footer.home, href: '#' },
    { label: t.nav.projects, href: '#portfolio' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.contact, href: '#contact' },
  ]

  const handleNavClick = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative overflow-hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo & Tagline */}
          <div className="lg:col-span-2">
            <motion.a 
              href="#" 
              className="inline-flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="w-7 h-7"
                animate={{
                  rotate: [0, -10, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                <img src="/7dlogo.png" alt="7D Agency Logo" className="w-full h-full object-contain" />
              </motion.div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-flash-gradient">7day</span>
            </motion.a>
            <p className="mt-4 text-neutral-500 dark:text-neutral-400 max-w-md leading-relaxed">
              {t.footer.tagline}
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:bg-primary hover:text-white transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm font-bold">{link.name[0]}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-secondary dark:text-white mb-5">
              {t.footer.navigation}
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <motion.button
                    onClick={() => handleNavClick(link.href)}
                    className="text-neutral-500 dark:text-neutral-400 hover:text-primary transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-secondary dark:text-white mb-5">
              {t.footer.contactTitle}
            </h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 dark:text-neutral-400 hover:text-primary transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-neutral-400 dark:text-neutral-500">
            © {new Date().getFullYear()} 7D Agency. {t.footer.rights}
          </p>
          <div className="flex items-center gap-2 text-sm text-neutral-400 dark:text-neutral-500">
            <span>Built with speed & precision</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
