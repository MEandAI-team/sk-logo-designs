'use client'

import { motion } from 'motion/react'
import { Dribbble, Instagram, Linkedin, Mail, Download } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Button } from './ui/button'

const socialLinks = [
  { icon: Dribbble, label: 'Dribbble', url: '#', color: 'hover:text-pink-500' },
  { icon: Instagram, label: 'Instagram', url: '#', color: 'hover:text-purple-500' },
  { icon: Linkedin, label: 'LinkedIn', url: '#', color: 'hover:text-blue-500' },
  { icon: Mail, label: 'Email', url: 'mailto:hello@yoz.design', color: 'hover:text-red-500' }
]

const highlights = [
  { label: 'Years Experience', value: '8+' },
  { label: 'Projects Completed', value: '200+' },
  { label: 'Industries Served', value: '15+' }
]

export function AboutMe() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Portrait Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="/api/placeholder/500/500"
                  alt="YOZ - Logo Designer Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-500 rounded-full opacity-20"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-black mb-8 tracking-tight">
              About Me
            </h2>

            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                I'm a passionate logo designer with over 8 years of experience crafting memorable brand identities. 
                My design philosophy centers on the power of discovery – understanding your brand's core essence 
                before putting pen to paper.
              </p>
              
              <p>
                From initial sketches to polished vector artwork, I believe in the meticulous craft of logo design. 
                Every mark is built on solid grid systems and tested across various brand applications to ensure 
                timeless versatility.
              </p>

              <p>
                My approach combines strategic thinking with creative execution, resulting in logos that not only 
                look distinctive but also communicate your brand's values effectively across all touchpoints.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl text-red-500 mb-2">{highlight.value}</div>
                  <div className="text-sm text-gray-500">{highlight.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 mb-8">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors duration-200 relative group`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent size={24} />
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      {social.label}
                    </span>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}