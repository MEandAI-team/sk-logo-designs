'use client'

import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      // Show header when scrolled past 100px
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About Me', path: '/about' },
    { id: 'portfolio', label: 'Portfolio', path: '/portfolio' },
    { id: 'testimonials', label: 'Testimonials', path: '/testimonials' },
    { id: 'contact', label: 'Hire Me', path: '/contact' }
  ]

  const handleNavigation = (path: string) => {
    navigate(path)
    setIsMenuOpen(false)
  }

  const isActiveRoute = (path: string) => {
    return location.pathname === path
  }

  // Show sticky header navigation when scrolled or not on home page
  if (isScrolled || location.pathname !== '/') {
    return (
      <AnimatePresence>
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <motion.div 
                className="flex-shrink-0"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <button 
                  onClick={() => handleNavigation('/')}
                  className="text-foreground text-2xl font-bold tracking-wider hover:text-primary transition-colors duration-200 font-['Playfair_Display']"
                >
                  SK LOGO Design
                </button>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="flex items-center space-x-8">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                      onClick={() => handleNavigation(item.path)}
                      className={`px-3 py-2 text-sm tracking-wide transition-all duration-200 relative group font-['Lato'] ${
                        isActiveRoute(item.path)
                          ? 'text-primary'
                          : item.id === 'contact'
                          ? 'text-primary hover:text-accent'
                          : 'text-foreground hover:text-primary'
                      }`}
                    >
                      {item.label}
                      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-200 ${
                        isActiveRoute(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`} />
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-foreground hover:text-primary transition-colors duration-200"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="md:hidden bg-background/95 backdrop-blur-md overflow-hidden border-t border-border"
                >
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.id}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        onClick={() => handleNavigation(item.path)}
                        className={`block px-3 py-2 text-base w-full text-left transition-colors duration-200 font-['Lato'] ${
                          isActiveRoute(item.path)
                            ? 'text-primary'
                            : item.id === 'contact'
                            ? 'text-primary hover:text-accent'
                            : 'text-foreground hover:text-primary'
                        }`}
                      >
                        {item.label}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      </AnimatePresence>
    )
  }

  // Return null for home page when not scrolled (navigation is handled by HomePage component)
  return null
}