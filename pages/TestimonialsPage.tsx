'use client'

import { motion } from 'motion/react'
import { Testimonials } from '../components/Testimonials'

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Testimonials />
      </motion.div>
    </div>
  )
}