'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { PaperAirplaneIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useLanguage } from './LanguageContext'
import { usePackage } from './PackageContext'
import { Button } from './ui/Button'
import { cn } from '@/lib/utils'

const TELEGRAM_BOT_TOKEN = '8254582797:AAEGgxXuN_Z3mRTqg3_XcozlUybCAvhmGpc'
const TELEGRAM_CHAT_ID = '-1003366453243'

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().min(1, 'Email or profile link is required'),
  telegram: z.string().optional(),
  project: z.string().min(10, 'Please describe your project'),
  captcha: z.string().min(1, 'Please solve the security check'),
})

type FormData = z.infer<typeof formSchema>

export function Contact() {
  const { t } = useLanguage()
  const { selectedPackage, setSelectedPackage } = usePackage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [mounted, setMounted] = useState(false)
  const [captcha, setCaptcha] = useState({ a: 0, b: 0, answer: 0 })

  useEffect(() => {
    setMounted(true)
    const a = Math.floor(Math.random() * 10) + 1
    const b = Math.floor(Math.random() * 10) + 1
    setCaptcha({ a, b, answer: a + b })
  }, [])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    if (!mounted || parseInt(data.captcha) !== captcha.answer) {
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Build message for Telegram
    const packageInfo = selectedPackage 
      ? `📦 *Package:* ${selectedPackage.title} (${selectedPackage.price})`
      : '📦 *Package:* Not selected'
    
    const message = `
🔔 *New Lead from 7day Website*

👤 *Name:* ${data.name}
📧 *Email/X:* ${data.email}
${data.telegram ? `📱 *Telegram:* ${data.telegram}` : ''}
${packageInfo}

💬 *Project Description:*
${data.project}
    `.trim()

    try {
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitStatus('success')
      reset()
      setSelectedPackage(null)
      
      // Generate new captcha
      const a = Math.floor(Math.random() * 10) + 1
      const b = Math.floor(Math.random() * 10) + 1
      setCaptcha({ a, b, answer: a + b })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const inputClasses = 'w-full px-5 py-4 bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl text-secondary dark:text-white placeholder-neutral-400 transition-all duration-300 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10'

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 to-white dark:from-neutral-800/50 dark:to-neutral-900" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="container-max mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            {/* Section Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="text-sm font-medium text-primary">Get Started</span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-secondary dark:text-white">
              {t.contact.title}
            </h2>
            <p className="mt-4 text-lg text-neutral-500 dark:text-neutral-400">
              {t.contact.subtitle}
            </p>
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-800/50 rounded-3xl p-8 sm:p-10 border border-neutral-200 dark:border-neutral-700 shadow-xl shadow-neutral-200/50 dark:shadow-neutral-900/50"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Selected Package Badge */}
              {selectedPackage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                      {t.contact.selectedPackage}:
                    </span>
                    <span className="font-semibold text-secondary dark:text-white">
                      {selectedPackage.title}
                    </span>
                    <span className="text-primary font-bold">
                      {selectedPackage.price}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedPackage(null)}
                    className="p-1 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-full transition-colors"
                  >
                    <XMarkIcon className="w-5 h-5 text-neutral-500" />
                  </button>
                </motion.div>
              )}

              <div>
                <input
                  {...register('name')}
                  type="text"
                  placeholder={t.contact.name}
                  className={cn(
                    inputClasses,
                    errors.name && 'border-error focus:border-error focus:ring-error/10'
                  )}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-error">{errors.name.message}</p>
                )}
              </div>

              <div>
                <input
                  {...register('email')}
                  type="text"
                  placeholder={t.contact.email}
                  className={cn(
                    inputClasses,
                    errors.email && 'border-error focus:border-error focus:ring-error/10'
                  )}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-error">{errors.email.message}</p>
                )}
              </div>

              <div>
                <input
                  {...register('telegram')}
                  type="text"
                  placeholder={t.contact.telegram}
                  className={inputClasses}
                />
              </div>

              <div>
                <textarea
                  {...register('project')}
                  rows={5}
                  placeholder={t.contact.project}
                  className={cn(
                    inputClasses,
                    'resize-none',
                    errors.project && 'border-error focus:border-error focus:ring-error/10'
                  )}
                />
                {errors.project && (
                  <p className="mt-2 text-sm text-error">{errors.project.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">
                  {t.contact.security} {mounted ? `${captcha.a} + ${captcha.b}` : '...'}?
                </label>
                <input
                  {...register('captcha')}
                  type="text"
                  placeholder={t.contact.answer}
                  disabled={!mounted}
                  className={cn(
                    inputClasses,
                    errors.captcha && 'border-error focus:border-error focus:ring-error/10',
                    !mounted && 'opacity-50 cursor-not-allowed'
                  )}
                />
                {errors.captcha && (
                  <p className="mt-2 text-sm text-error">{errors.captcha.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full group"
                size="lg"
                isLoading={isSubmitting}
              >
                <span className="flex items-center gap-2">
                  {t.contact.submit}
                  <PaperAirplaneIcon className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center p-4 rounded-xl bg-success/10 text-success font-medium"
                >
                  {t.contact.success}
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center p-4 rounded-xl bg-error/10 text-error font-medium"
                >
                  {t.contact.error}
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
