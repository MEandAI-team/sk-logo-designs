"use client";

import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { featuredItems } from "../data/projectsData";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function PortfolioGrid() {
  const navigate = useNavigate();
  const displayedItems = featuredItems.slice(0, 20); // Show exactly 20 items for 4x5 grid

  const handleProjectClick = (id: number) => {
    navigate(`/project/${id}`);
  };

  return (
    <section className="py-0 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Portfolio Grid - Fixed 4×5 Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.05 }}
          viewport={{ once: true }}
        >
          {displayedItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => handleProjectClick(item.id)}
            >
              <div
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{ backgroundColor: "#0B0B0B" }} // Dark background applied here
              >
                {/* Main Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={`${item.title} logo design`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                  {/* Hover Content */}
                  <div className="absolute inset-0 flex items-end justify-start p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg font-semibold mb-1 font-['Montserrat']">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/80 font-['Poppins']">
                        {item.industry}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Dot */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground font-['Poppins'] mb-8">
            Interested in working together? Let's create
            something amazing.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl font-['Poppins']"
            onClick={() => navigate("/contact")}
          >
            Start a Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
