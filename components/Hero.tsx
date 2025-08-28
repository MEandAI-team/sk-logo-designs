'use client'

import { motion } from 'motion/react'

export function Hero() {
  return (
    <section id="home" className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Simple logo or brand mark could go here */}
          <div className="text-6xl sm:text-7xl lg:text-8xl text-white mb-8 tracking-wider">
            SK Design
          </div>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            Logo Designer
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}