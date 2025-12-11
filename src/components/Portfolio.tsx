'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { t } from '@/lib/en-translations'
import { Card } from './ui/Card'
import { useState } from 'react'

// Project gradients using brand colors
const projectStyles = [
  { 
    gradient: 'from-primary via-primary-light to-accent',
    pattern: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.2) 0%, transparent 50%)',
  },
  { 
    gradient: 'from-accent via-accent-light to-primary-light',
    pattern: 'radial-gradient(circle at 70% 60%, rgba(255,255,255,0.2) 0%, transparent 50%)',
  },
  { 
    gradient: 'from-violet-500 via-purple-500 to-primary',
    pattern: 'radial-gradient(circle at 50% 30%, rgba(255,255,255,0.2) 0%, transparent 50%)',
  },
  { 
    gradient: 'from-blue-500 via-cyan-400 to-accent',
    pattern: 'radial-gradient(circle at 40% 70%, rgba(255,255,255,0.2) 0%, transparent 50%)',
  },
]

export function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Add "And more" card to projects
  const allProjects = [...t.portfolio.projects, { 
    title: 'And more...', 
    description: 'We\'ve built dozens more successful projects. Get in touch to see our full portfolio.',
    tags: ['Your project', 'could be', 'here'],
    isMoreCard: true 
  }]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % allProjects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + allProjects.length) % allProjects.length)
  }

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-max mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          {/* Section Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <span className="text-sm font-medium text-primary">Our Work</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary dark:text-white">
            {t.portfolio.title}
          </h2>
          <p className="text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto mt-6 leading-relaxed">
            {t.portfolio.subtitle}
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-12 h-12 rounded-full bg-white dark:bg-neutral-800 shadow-xl border border-neutral-200 dark:border-neutral-700 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all group"
            aria-label="Previous project"
          >
            <ChevronLeftIcon className="w-6 h-6 text-neutral-600 dark:text-neutral-300 group-hover:text-white" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-12 h-12 rounded-full bg-white dark:bg-neutral-800 shadow-xl border border-neutral-200 dark:border-neutral-700 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all group"
            aria-label="Next project"
          >
            <ChevronRightIcon className="w-6 h-6 text-neutral-600 dark:text-neutral-300 group-hover:text-white" />
          </button>

          {/* Slider */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="flex justify-center"
              >
                {(() => {
                  const project = allProjects[currentIndex]
                  const style = projectStyles[currentIndex % projectStyles.length]
                  const isMoreCard = (project as any).isMoreCard
                  
                  return (
                    <div className="w-full max-w-lg mx-auto px-4">
                      <Card hover glowOnHover className="h-full overflow-hidden group">
                        {/* Image Placeholder with Gradient */}
                        <div className={`relative h-64 -mx-6 -mt-6 mb-5 bg-gradient-to-br ${style.gradient} overflow-hidden`}>
                          {/* Pattern overlay */}
                          <div 
                            className="absolute inset-0 opacity-50"
                            style={{ backgroundImage: style.pattern }}
                          />
                          
                          {/* Animated overlay on hover */}
                          <motion.div 
                            className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"
                          />
                          
                          {/* Preview placeholder or More indicator */}
                          {isMoreCard ? (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <motion.div 
                                className="text-center"
                                animate={{ 
                                  scale: [1, 1.05, 1],
                                }}
                                transition={{ 
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              >
                                <div className="text-6xl mb-2">✨</div>
                                <div className="text-white text-2xl font-bold">More to come</div>
                              </motion.div>
                            </div>
                          ) : (
                            <a 
                              href={(project as { link?: string }).link || '#'}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute inset-0 flex items-center justify-center cursor-pointer"
                            >
                              <motion.div 
                                className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20"
                                whileHover={{ scale: 1.05 }}
                              >
                                <span className="text-white font-medium">View Project</span>
                              </motion.div>
                            </a>
                          )}
                        </div>

                        {/* Content */}
                        <div>
                          <h3 className={`text-2xl font-bold text-secondary dark:text-white mb-3 ${!isMoreCard && 'group-hover:text-primary'} transition-colors`}>
                            {project.title}
                          </h3>
                          <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                            {project.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-5">
                            {project.tags.map((tag, i) => (
                              <span
                                key={i}
                                className={`px-3 py-1.5 text-sm font-medium ${
                                  isMoreCard 
                                    ? 'bg-primary/10 text-primary border border-primary/20' 
                                    : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300'
                                } rounded-lg`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </div>
                  )
                })()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {allProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-8 bg-primary' 
                    : 'w-2 bg-neutral-300 dark:bg-neutral-600 hover:bg-primary/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
