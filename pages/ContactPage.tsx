'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission logic here
  }

  return (
    <div className="bg-background min-h-screen flex items-center justify-center py-16">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Contact Form */}
            <div className="p-8 sm:p-12 lg:p-16">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Full Name Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <label htmlFor="fullName" className="block text-sm text-background mb-2 font-['Poppins']">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full border-b-2 border-foreground/20 bg-transparent py-3 text-background placeholder:text-foreground/60 focus:border-primary focus:outline-none transition-colors duration-300 font-['Poppins']"
                    placeholder=""
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <label htmlFor="email" className="block text-sm text-background mb-2 font-['Poppins']">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border-b-2 border-foreground/20 bg-transparent py-3 text-background placeholder:text-foreground/60 focus:border-primary focus:outline-none transition-colors duration-300 font-['Poppins']"
                    placeholder=""
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label htmlFor="message" className="block text-sm text-background mb-2 font-['Poppins']">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full border-b-2 border-foreground/20 bg-transparent py-3 text-background placeholder:text-foreground/60 focus:border-primary focus:outline-none transition-colors duration-300 resize-none font-['Poppins']"
                    placeholder=""
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="pt-4"
                >
                  <motion.button
                    type="submit"
                    className="bg-primary text-white px-8 py-4 rounded-full font-medium  transition-colors duration-300 font-['Poppins']"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact Us
                  </motion.button>
                </motion.div>
              </form>
            </div>

            {/* Right Side - Contact Info */}
            <div className="bg-muted/30 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-12"
              >
                {/* Contact Header */}
                <div>
                  <h2 className="text-2xl font-bold text-black mb-4 font-['Montserrat']">
                    Contact
                  </h2>

                {/* Email */}
                <p className="text-black font-['Poppins']">
                  Email:{" "}
                <a 
                  href="mailto:hi@yozdesign.com" 
                  className="hover:text-primary transition-colors duration-300"
                >
                  hi@yozdesign.com
                </a>
                </p>

                {/* Phone */}
                <p className="text-black font-['Poppins'] mt-2">
                  Phone:{" "}
                <a 
                  href="tel:+917020845698" 
                  className="hover:text-primary transition-colors duration-300"
                >
                +91 70208 45698
                </a>
                </p>

                {/* WhatsApp */}
                <p className="text-black font-['Poppins'] mt-2">
                  WhatsApp:{" "}
                <a 
                  href="https://wa.me/917020845698" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300"
                >
                  +91 70208 45698
                </a>
                </p>
            </div>



                {/* Location */}
                <div>
                  <h3 className="text-xl font-bold text-black mb-2 font-['Montserrat']">
                    Based in
                  </h3>
                  <p className="text-black font-['Poppins']">
                    Kolhapur, Maharashtra
                    <br />
                    India
                  </p>
                </div>
              </motion.div>

              {/* Social Media Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex space-x-4 mt-8"
              >
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-foreground text-background rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-foreground text-background rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-foreground text-background rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Optional: Brand tagline below the card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-['Montserrat']">
            Let's Work Together
          </h1>
          <p className="text-muted-foreground font-['Poppins']">
            Ready to create something extraordinary? Get in touch today.
          </p>
        </motion.div>
      </div>
    </div>
  )
}