'use client'

import { motion } from 'motion/react'
import { ImageWithFallback } from '../components/figma/ImageWithFallback'
import { useNavigate } from 'react-router-dom'
import { CheckCircle, Award, Users, Zap } from 'lucide-react'

export default function AboutPage() {
  const navigate = useNavigate()

  const services = [
    {
      title: "Logo Design",
      description: "Crafting unique and memorable brand identities that capture the essence of your business and resonate with your target audience.",
      features: ["Brand Strategy", "Logo Concepts", "Visual Identity"],
      image: "/images/IMG_1738.JPG"
    },
    {
      title: "Brand Identity",
      description: "Complete brand identity systems including color palettes, typography, and brand guidelines to ensure consistency across all touchpoints.",
      features: ["Brand Guidelines", "Color Systems", "Typography"],
      image: "/images/service-brand.jpg"
    }
  ]

  const companies = [
    "TechCorp", "InnovateNow", "Creative Studio", "Digital Agency", "StartupLab"
  ]

  const stats = [
    { icon: Award, value: "150+", label: "Projects Completed" },
    { icon: Users, value: "80+", label: "Happy Clients" },
    { icon: Zap, value: "5+", label: "Years Experience" }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight font-['Montserrat']">
                I'm a creative
                <br />
                <span className="text-primary">Logo & Brand</span>
                <br />
                designer
              </h1>
              
              <p className="text-lg text-muted-foreground font-['Poppins'] max-w-lg">
                Hi! I’m Sanket Kamble from Kolhapur, India. I’m passionately obsessed with designing logos and building brands that tell your story, spark connections, and bring your vision to life. Every pixel I create is crafted with purpose and personality—because your brand deserves to stand out and make an impact.
              </p>

              <motion.button
                onClick={() => navigate('/contact')}
                className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl font-['Poppins'] mt-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CONNECT WITH ME
              </motion.button>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="/images/about-hero.jpg"
                  alt="Professional designer portrait"
                  className="w-full h-full object-cover"
                />
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-4 h-4 bg-accent rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-secondary rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground font-['Poppins'] mb-8 uppercase tracking-wide">
              Trusted by 100+ Growth Marketers and Investors
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {companies.map((company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground font-medium font-['Montserrat']"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-2 font-['Montserrat']">
                    {stat.value}
                  </h3>
                  <p className="text-muted-foreground font-['Poppins']">
                    {stat.label}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 font-['Montserrat']">
              Service I provide
            </h2>
          </motion.div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Service Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-white p-8">
                      <ImageWithFallback
                        src={service.image}
                        alt={`${service.title} illustration`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <h3 className="text-3xl sm:text-4xl font-bold text-foreground font-['Montserrat']">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground font-['Poppins'] leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-foreground font-['Poppins']">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 font-['Montserrat']">
              Ready to bring your vision to life?
            </h2>
            <p className="text-lg text-muted-foreground font-['Poppins'] mb-8 max-w-2xl mx-auto">
              Let's work together to create something extraordinary that tells your story and connects with your audience.
            </p>
            <motion.button
              onClick={() => navigate('/contact')}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl font-['Poppins']"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}