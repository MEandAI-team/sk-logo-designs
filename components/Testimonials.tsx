'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface Testimonial {
  id: number
  quote: string
  name: string
  role: string
  company: string
  avatar: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "YOZ delivered exactly what we needed – a clean, memorable logo that perfectly captures our brand essence. The attention to detail and strategic thinking behind every element was impressive.",
    name: "Sarah Mitchell",
    role: "Founder & CEO",
    company: "TechFlow Solutions",
    avatar: "/api/placeholder/60/60",
    rating: 5
  },
  {
    id: 2,
    quote: "Working with YOZ was a game-changer for our startup. The logo design process was thorough, collaborative, and the final result exceeded our expectations. Highly recommended!",
    name: "Marcus Chen",
    role: "Creative Director",
    company: "Apex Innovations",
    avatar: "/api/placeholder/60/60",
    rating: 5
  },
  {
    id: 3,
    quote: "Professional, creative, and incredibly responsive. YOZ transformed our outdated brand into something modern and compelling. The rebrand has significantly improved our market presence.",
    name: "Elena Rodriguez",
    role: "Marketing Manager",
    company: "Verde Consulting",
    avatar: "/api/placeholder/60/60",
    rating: 5
  },
  {
    id: 4,
    quote: "The strategic approach to our logo design was outstanding. YOZ didn't just create a pretty mark – they crafted a visual identity that truly represents our values and resonates with our audience.",
    name: "James Patterson",
    role: "Brand Manager",
    company: "Catalyst Group",
    avatar: "/api/placeholder/60/60",
    rating: 5
  },
  {
    id: 5,
    quote: "From concept to completion, the entire experience was seamless. YOZ's expertise in grid systems and typography resulted in a logo that works beautifully across all our applications.",
    name: "Amanda Foster",
    role: "Design Lead",
    company: "Nexus Digital",
    avatar: "/api/placeholder/60/60",
    rating: 5
  },
  {
    id: 6,
    quote: "Exceptional work and incredible attention to detail. The logo YOZ created has become the cornerstone of our brand identity. It's timeless, versatile, and perfectly executed.",
    name: "David Kim",
    role: "Co-founder",
    company: "Quantum Labs",
    avatar: "/api/placeholder/60/60",
    rating: 5
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-sm ${i < rating ? 'text-red-500' : 'text-gray-400'}`}>
        ★
      </span>
    ))
  }

  return (
    <section id="testimonials" className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-black mb-4 tracking-tight">
            Client Testimonials
          </h2>
          <p className="text-gray-600 text-lg">What my clients say about working with me</p>
        </motion.div>

        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 min-h-[300px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="text-center"
              >
                {/* Quote Icon */}
                <Quote className="text-red-500 mx-auto mb-6" size={32} />

                {/* Quote Text */}
                <blockquote className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center justify-center space-x-4">
                  <ImageWithFallback
                    src={testimonials[currentIndex].avatar}
                    alt={`${testimonials[currentIndex].name} avatar`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="text-black mb-1">{testimonials[currentIndex].name}</div>
                    <div className="text-gray-500 text-sm">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </div>
                    <div className="flex mt-1">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg text-gray-600 hover:text-red-500 hover:shadow-xl transition-all duration-200"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg text-gray-600 hover:text-red-500 hover:shadow-xl transition-all duration-200"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-red-500' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}