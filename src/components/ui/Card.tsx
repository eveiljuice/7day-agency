'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  highlighted?: boolean
  glowOnHover?: boolean
}

export function Card({ 
  children, 
  className, 
  hover = false, 
  highlighted = false,
  glowOnHover = false,
}: CardProps) {
  return (
    <motion.div 
      className={cn(
        'relative bg-white dark:bg-neutral-800/80 rounded-2xl border border-neutral-200/80 dark:border-neutral-700/50 p-6 backdrop-blur-sm',
        hover && 'transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover',
        highlighted && 'border-primary/40 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 dark:from-primary/10 dark:to-accent/10',
        glowOnHover && 'hover:shadow-glow-red/20',
        className
      )}
      whileHover={hover ? { y: -8 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Gradient border effect for highlighted cards */}
      {highlighted && (
        <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-primary/50 via-transparent to-accent/50 -z-10">
          <div className="absolute inset-0 rounded-2xl bg-white dark:bg-neutral-800" />
        </div>
      )}
      
      {children}
    </motion.div>
  )
}

// Special card with electric border animation
export function ElectricCard({ 
  children, 
  className,
  active = false,
}: {
  children: ReactNode
  className?: string
  active?: boolean
}) {
  return (
    <div className={cn('relative group', className)}>
      {/* Animated electric border */}
      {active && (
        <motion.div
          className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%]"
          animate={{
            backgroundPosition: ['0% 0%', '200% 0%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      )}
      
      <div className={cn(
        'relative bg-white dark:bg-neutral-800 rounded-2xl p-6',
        active ? 'm-px' : 'border border-neutral-200 dark:border-neutral-700'
      )}>
        {children}
      </div>
    </div>
  )
}
