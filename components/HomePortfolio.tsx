'use client'

import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import { featuredItems } from '../data/projectsData'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function HomePortfolio() {
  const navigate = useNavigate()
  const displayedItems = featuredItems.slice(0, 12) // Show exactly 12 items for 4x3 grid

  const handleViewAllProjects = () => {
    navigate('/portfolio')
  }

  const handleProjectClick = (id: number) => {
    navigate(`/project/${id}`)
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-foreground font-['Montserrat']">
            Recent Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg font-['Poppins']">
            Selected projects showcasing brand identity and logo design
          </p>
        </motion.div>

        {/* Portfolio Grid - Fixed 4×3 Layout with Larger Images */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          style={{ contain: 'content' }}
        >
          {displayedItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group cursor-pointer"
              style={{ contentVisibility: 'auto', containIntrinsicSize: '320px 400px' }}
              onClick={() => handleProjectClick(item.id)}
            >
              <div className="relative aspect-[4/5] bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 transform-gpu" style={{ willChange: 'transform' }}>
                <ImageWithFallback
                  src={item.image}
                  alt={`${item.title} logo design`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 transform-gpu"
                  loading={index < 1 ? 'eager' : 'lazy'}
                  fetchPriority={index < 4 ? 'high' : 'low'}
                  sizes="(min-width: 768px) 25vw, 100vw"
                  decoding="async"
                  draggable={false}
                />

                {/* Simple Hover Overlay */}
                <div className="absolute inset-0 bg-foreground/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center text-background px-4">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1 leading-tight font-['Montserrat']">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-background/80 leading-tight font-['Poppins']">
                      {item.industry}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            onClick={handleViewAllProjects}
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 bg-transparent font-['Poppins']"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects →
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}