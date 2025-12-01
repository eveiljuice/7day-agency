'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

type ButtonProps = HTMLMotionProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  isLoading?: boolean
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className,
  isLoading,
  disabled,
  ...props 
}: ButtonProps) {
  const baseStyles = 'relative inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden'
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-hover active:scale-[0.98] focus:ring-primary/50 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30',
    secondary: 'bg-white dark:bg-neutral-800 text-secondary dark:text-white border-2 border-neutral-200 dark:border-neutral-700 hover:border-primary/50 dark:hover:border-primary/50 hover:bg-neutral-50 dark:hover:bg-neutral-700 active:scale-[0.98] focus:ring-primary/50',
    ghost: 'text-secondary dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:ring-primary/50',
    accent: 'bg-accent text-white hover:bg-accent-hover active:scale-[0.98] focus:ring-accent/50 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30',
  }

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-4.5 text-lg',
  }

  return (
    <motion.button 
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || isLoading}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2">
        {isLoading ? (
          <>
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading...
          </>
        ) : children}
      </span>
    </motion.button>
  )
}
