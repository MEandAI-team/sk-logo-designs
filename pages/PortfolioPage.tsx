'use client'

import { motion } from 'motion/react'
import { PortfolioGrid } from '../components/PortfolioGrid'

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 font-['Montserrat']">
              Portfolio
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-['Poppins']">
              A comprehensive collection of branding and logo design projects across various industries, 
              showcasing creative excellence and strategic thinking.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Portfolio Grid Section */}
      <section className="pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <PortfolioGrid />
        </motion.div>
      </section>
    </div>
  )
}