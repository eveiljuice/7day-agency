'use client'

import { motion } from 'framer-motion'
import { 
  RocketLaunchIcon, 
  ComputerDesktopIcon, 
  DevicePhoneMobileIcon, 
  WrenchScrewdriverIcon,
  CheckIcon
} from '@heroicons/react/24/outline'
import { useLanguage } from './LanguageContext'
import { usePackage } from './PackageContext'
import { Card, ElectricCard } from './ui/Card'
import { Button } from './ui/Button'

const services = [
  { key: 'web', icon: ComputerDesktopIcon, popular: false, color: 'blue' },
  { key: 'app', icon: DevicePhoneMobileIcon, popular: false, color: 'purple' },
  { key: 'mvp', icon: RocketLaunchIcon, popular: true, color: 'primary' },
  { key: 'custom', icon: WrenchScrewdriverIcon, popular: false, color: 'accent' },
]

export function Services() {
  const { t } = useLanguage()
  const { setSelectedPackage } = usePackage()

  const getServiceData = (key: string) => {
    const data: Record<string, { title: string; price: string; features: string[] }> = {
      web: t.services.web,
      app: t.services.app,
      mvp: t.services.mvp,
      custom: t.services.custom,
    }
    return data[key] || { title: '', price: '', features: [] }
  }

  const handleSelectPackage = (key: string) => {
    const data = getServiceData(key)
    setSelectedPackage({ key, title: data.title, price: data.price })
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
          >
            <span className="text-sm font-medium text-accent">Our Services</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary dark:text-white">
            {t.services.title}
          </h2>
          <p className="text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto mt-6 leading-relaxed">
            {t.services.subtitle}
          </p>
        </motion.div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service) => {
            const data = getServiceData(service.key)
            const Icon = service.icon
            
            if (service.popular) {
              return (
                <motion.div key={service.key} variants={itemVariants}>
                  <ElectricCard active={true} className="h-full">
                    <div className="flex flex-col h-full">
                      {/* Popular Badge */}
                      <div className="absolute -top-3 right-4 z-10">
                        <motion.span 
                          className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold rounded-full shadow-lg"
                          animate={{ 
                            boxShadow: [
                              '0 4px 14px rgba(220, 38, 38, 0.3)',
                              '0 4px 20px rgba(245, 158, 11, 0.4)',
                              '0 4px 14px rgba(220, 38, 38, 0.3)',
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {t.services.popular}
                        </motion.span>
                      </div>
                      
                      <div className="mb-5">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-secondary dark:text-white mb-2">
                        {data.title}
                      </h3>
                      <p className="text-3xl font-bold bg-clip-text text-transparent bg-flash-gradient mb-5">
                        {data.price}
                      </p>
                      
                      <ul className="space-y-3 mb-8 flex-grow">
                        {data.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckIcon className="w-3 h-3 text-accent" />
                            </div>
                            <span className="text-sm text-neutral-600 dark:text-neutral-300">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button
                        variant="primary"
                        className="w-full mt-auto"
                        onClick={() => handleSelectPackage(service.key)}
                      >
                        {t.services.getStarted}
                      </Button>
                    </div>
                  </ElectricCard>
                </motion.div>
              )
            }
            
            return (
              <motion.div key={service.key} variants={itemVariants}>
                <Card hover className="h-full flex flex-col">
                  <div className="mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-700 dark:to-neutral-600 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-secondary dark:text-white mb-2">
                    {data.title}
                  </h3>
                  <p className="text-3xl font-bold text-secondary dark:text-white mb-5">
                    {data.price}
                  </p>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {data.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckIcon className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-neutral-600 dark:text-neutral-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    variant="secondary"
                    className="w-full mt-auto"
                    onClick={() => handleSelectPackage(service.key)}
                  >
                    {t.services.getStarted}
                  </Button>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
