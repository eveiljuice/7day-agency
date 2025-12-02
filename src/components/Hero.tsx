'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { useLanguage } from './LanguageContext'
import { Button } from './ui/Button'

export function Hero() {
  const { t } = useLanguage()

  const handleScroll = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-50 via-neutral-50 to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-900">
      
      {/* Animated Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute -top-20 -right-40 w-[700px] h-[700px] bg-gradient-to-bl from-accent/15 via-accent/5 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 20, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-primary/15 via-accent/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(220, 38, 38, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220, 38, 38, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-max mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Title with Lightning Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight"
          >
            <span className="text-secondary dark:text-white">
              {t.hero.title.split(' ').slice(0, -2).join(' ')}
            </span>{' '}
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-flash-gradient">
                {t.hero.title.split(' ').slice(-2).join(' ')}
              </span>
              {/* Lightning underline effect */}
              <motion.svg
                className="absolute -bottom-2 left-0 w-full h-4"
                viewBox="0 0 200 20"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <motion.path
                  d="M0 10 Q 25 0, 50 10 T 100 10 T 150 10 T 200 10"
                  stroke="url(#underline-gradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#DC2626" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-xl sm:text-2xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              onClick={() => handleScroll('#contact')}
              size="lg"
              variant="primary"
              className="w-full sm:w-auto group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t.hero.cta}
                <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
            <Button
              onClick={() => handleScroll('#portfolio')}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              {t.hero.ctaSecondary}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-primary/40 dark:border-primary/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5], y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
