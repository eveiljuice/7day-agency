'use client'

import { motion } from 'framer-motion'
import { 
  ChatBubbleLeftRightIcon, 
  PencilSquareIcon, 
  CodeBracketIcon, 
  RocketLaunchIcon
} from '@heroicons/react/24/outline'
import { t } from '@/lib/en-translations'

const icons = [
  ChatBubbleLeftRightIcon,
  PencilSquareIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
]

const stepColors = [
  { bg: 'from-blue-500 to-cyan-400', text: 'text-blue-500' },
  { bg: 'from-violet-500 to-purple-400', text: 'text-violet-500' },
  { bg: 'from-primary to-primary-light', text: 'text-primary' },
  { bg: 'from-accent to-accent-light', text: 'text-accent' },
]

export function Process() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-neutral-100 to-white dark:from-neutral-800/50 dark:to-neutral-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(220, 38, 38, 0.15) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
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
            <span className="text-sm font-medium text-primary">How It Works</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary dark:text-white">
            {t.process.title}
          </h2>
          <p className="text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto mt-6 leading-relaxed">
            {t.process.subtitle}
          </p>
        </motion.div>

        {/* Process Steps - Horizontal on Desktop */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-violet-500 via-primary to-accent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-6">
            {t.process.steps.map((step, index) => {
              const Icon = icons[index]
              const colors = stepColors[index]

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Step Card */}
                  <div className="bg-white dark:bg-neutral-800 rounded-3xl p-6 lg:p-8 border border-neutral-200 dark:border-neutral-700 h-full hover:shadow-xl hover:shadow-neutral-200/50 dark:hover:shadow-neutral-900/50 transition-all duration-500 hover:-translate-y-2 group">
                    {/* Icon with gradient background */}
                    <motion.div 
                      className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.bg} flex items-center justify-center mb-6 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                      
                      {/* Electric pulse effect */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl"
                        animate={{
                          boxShadow: [
                            '0 0 0 0 rgba(255,255,255,0)',
                            '0 0 0 10px rgba(255,255,255,0.1)',
                            '0 0 0 20px rgba(255,255,255,0)',
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />
                    </motion.div>

                    {/* Step Number */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-700 mb-4`}>
                      <span className={`text-sm font-bold ${colors.text}`}>
                        Step {index + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-secondary dark:text-white mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
