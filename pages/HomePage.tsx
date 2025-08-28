'use client'

import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import { featuredItems } from '../data/projectsData'
import { ImageWithFallback } from '../components/figma/ImageWithFallback'

export default function HomePage() {
  const navigate = useNavigate()
  const displayedItems = featuredItems.slice(0, 12) // Show exactly 12 items for 4x3 grid

  const handleViewAllProjects = () => {
    navigate('/portfolio')
  }

  const handleProjectClick = (id: number) => {
    navigate(`/project/${id}`)
  }

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About Me', path: '/about' },
    { id: 'portfolio', label: 'Portfolio', path: '/portfolio' },
    { id: 'contact', label: 'Hire Me', path: '/contact' }
  ]

  const handleNavigation = (path: string) => {
    navigate(path)
  }

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Header Section with Brand and Navigation */}
      <header className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* YOZ Design Brand Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider text-foreground font-['Montserrat']">
              SK LOGO Design
            </h1>
          </motion.div>

          {/* Navigation Menu */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="flex items-center space-x-8 md:space-x-12">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  onClick={() => handleNavigation(item.path)}
                  className={`text-sm md:text-base tracking-wide transition-all duration-200 hover:text-primary font-['Poppins'] ${
                    item.id === 'contact' ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.nav>
        </div>
      </header>

      {/* Logo Portfolio Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Portfolio Grid - 4x3 Layout */}
          <motion.div
            className="grid grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {displayedItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => handleProjectClick(item.id)}
              >
                <div className="relative aspect-square bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border">
                  <ImageWithFallback
                    src={item.image}
                    alt={`${item.title} logo design`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center text-background px-2">
                      <h3 className="text-xs md:text-sm font-medium mb-1 font-['Montserrat']">
                        {item.title}
                      </h3>
                      <p className="text-xs text-background/80 font-['Poppins']">
                        {item.industry}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center"
          >
            <motion.button
              onClick={handleViewAllProjects}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 bg-transparent font-['Poppins']"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects →
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}