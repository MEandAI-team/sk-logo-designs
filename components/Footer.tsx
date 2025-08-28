'use client'

import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import { ArrowUp, Dribbble, Instagram, Linkedin, Mail } from 'lucide-react'

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Me', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' }
]

const socialLinks = [
  { icon: Dribbble, label: 'Dribbble', url: '#' },
  { icon: Instagram, label: 'Instagram', url: '#' },
  { icon: Linkedin, label: 'LinkedIn', url: '#' },
  { icon: Mail, label: 'Email', url: 'mailto:hello@yoz.design' }
]

export function Footer() {
  const navigate = useNavigate()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavigation = (path: string) => {
    navigate(path)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-foreground text-2xl tracking-wider font-['Playfair_Display']">SK Logo Design</h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-['Lato']">
              Crafting timeless brand marks that tell your story and connect with your audience.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent size={20} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-foreground font-['Playfair_Display']">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-['Lato']"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-foreground font-['Playfair_Display']">Contact</h4>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground font-['Lato']">hello@yoz.design</p>
              <p className="text-muted-foreground font-['Lato']">+1 (555) 123-4567</p>
              <p className="text-primary font-['Lato']">Available for new projects</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm font-['Lato']"
          >
            © 2024 All rights reserved by me&AI Solution.
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm group font-['Lato']"
            whileHover={{ y: -2 }}
          >
            <span>Back to top</span>
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-200" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}