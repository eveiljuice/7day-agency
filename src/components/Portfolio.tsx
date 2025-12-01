'use client'

import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { useLanguage } from './LanguageContext'
import { Card } from './ui/Card'

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
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
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

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {t.portfolio.projects.map((project, index) => {
            const style = projectStyles[index % projectStyles.length]
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
              >
                <Card hover glowOnHover className="h-full overflow-hidden group">
                  {/* Image Placeholder with Gradient */}
                  <div className={`relative h-52 -mx-6 -mt-6 mb-5 bg-gradient-to-br ${style.gradient} overflow-hidden`}>
                    {/* Pattern overlay */}
                    <div 
                      className="absolute inset-0 opacity-50"
                      style={{ backgroundImage: style.pattern }}
                    />
                    
                    {/* Animated overlay on hover */}
                    <motion.div 
                      className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"
                    />
                    
                    {/* Preview placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="text-white font-medium">View Project</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-secondary dark:text-white mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Result & Link */}
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-700">
                      <span className="text-sm font-semibold text-accent">
                        {project.result}
                      </span>
                      <motion.button 
                        className="flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400 hover:text-primary transition-colors group/link"
                        whileHover={{ x: 3 }}
                      >
                        {t.portfolio.viewCase}
                        <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </motion.button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
