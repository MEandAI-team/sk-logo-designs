'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Mail, Phone, Clock, Send } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

interface FormData {
  fullName: string
  email: string
  company: string
  budget: string
  timeline: string
  projectType: string
  message: string
}

const budgetRanges = [
  '$1,000 - $2,500',
  '$2,500 - $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000+'
]

const projectTypes = [
  'Logo Design',
  'Brand Identity',
  'Packaging Design',
  'Rebrand',
  'Other'
]

const socialLinks = [
  { icon: Mail, label: 'hello@yoz.design', url: 'mailto:hello@yoz.design' },
  { icon: Phone, label: '+1 (555) 123-4567', url: 'tel:+15551234567' }
]

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    company: '',
    budget: '',
    timeline: '',
    projectType: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after success
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          fullName: '',
          email: '',
          company: '',
          budget: '',
          timeline: '',
          projectType: '',
          message: ''
        })
      }, 3000)
    }, 1000)
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <section id="enquire" className="bg-black py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-green-500 text-white p-8 rounded-2xl"
          >
            <h2 className="text-3xl mb-4">Thank You!</h2>
            <p className="text-lg">Your message has been sent successfully. I'll get back to you within 24-48 hours.</p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="enquire" className="bg-black py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 tracking-tight">
            Let's Create Something Amazing
          </h2>
          <p className="text-gray-300 text-lg">Ready to elevate your brand? Let's discuss your project</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName" className="text-white">Full Name *</Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="mt-2 bg-gray-900 border-gray-700 text-white focus:border-red-500"
                    placeholder="Your full name"
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <Label htmlFor="email" className="text-white">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="mt-2 bg-gray-900 border-gray-700 text-white focus:border-red-500"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="company" className="text-white">Company/Brand</Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="mt-2 bg-gray-900 border-gray-700 text-white focus:border-red-500"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <Label htmlFor="budget" className="text-white">Budget Range</Label>
                  <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                    <SelectTrigger className="mt-2 bg-gray-900 border-gray-700 text-white focus:border-red-500">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetRanges.map((range) => (
                        <SelectItem key={range} value={range}>
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="timeline" className="text-white">Timeline</Label>
                  <Input
                    id="timeline"
                    type="text"
                    value={formData.timeline}
                    onChange={(e) => handleInputChange('timeline', e.target.value)}
                    className="mt-2 bg-gray-900 border-gray-700 text-white focus:border-red-500"
                    placeholder="e.g., 2-3 weeks"
                  />
                </div>

                <div>
                  <Label htmlFor="projectType" className="text-white">Project Type</Label>
                  <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                    <SelectTrigger className="mt-2 bg-gray-900 border-gray-700 text-white focus:border-red-500">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-white">Project Details *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="mt-2 bg-gray-900 border-gray-700 text-white focus:border-red-500 min-h-[120px]"
                  placeholder="Tell me about your project, brand, goals, and any specific requirements..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full transition-all duration-200 transform hover:scale-105 inline-flex items-center space-x-2"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <Send size={18} />
                )}
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-white text-xl mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon
                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      className="flex items-center space-x-3 text-gray-300 hover:text-red-500 transition-colors duration-200"
                    >
                      <IconComponent size={20} />
                      <span>{link.label}</span>
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="flex items-start space-x-3 text-gray-300">
              <Clock size={20} className="mt-0.5" />
              <div>
                <p className="mb-1">Response Time</p>
                <p className="text-sm text-gray-400">I respond within 24–48 hours</p>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-700">
              <Button
                variant="outline"
                className="w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-full transition-all duration-200"
              >
                Book a 15-min Intro Call
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}