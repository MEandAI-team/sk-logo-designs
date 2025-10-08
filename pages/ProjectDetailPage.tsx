"use client";

import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { projectsData } from "../data/projectsData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback"; 

// Real image URLs replacing figma:asset placeholders (used as fallbacks)
// These example images are only for fallbacks if project.mockups don't exist
const fallbackImage1 = '/images/IMG_1738.JPG'; // Adjust path as needed
const fallbackImage2 = 'https://images.unsplash.com/photo-1516637090014-cb1ab0d08fc7?q=80&w=1920&auto=format&fit=crop';
const fallbackImage3 = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1920&auto=format&fit=crop';


export default function ProjectDetailPage() {
  const { id, imageIndex } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find(
    (p) => p.id === parseInt(id || "", 10),
  );

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4 font-['Montserrat']">
            Project not found
          </h1>
          <button
            onClick={() => navigate("/portfolio")}
            className="text-primary hover:text-primary/80 transition-colors font-['Poppins']"
          >
            ← Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  // Helper to get mockup data with fallback
  const getMockupData = (index: number) => {
    if (project.mockups && project.mockups[index]) {
      return project.mockups[index];
    }
    // Fallback if mockup data is missing.
    // Ensure these fallbacks have a default aspect ratio if not explicitly defined.
    if (index === 0) return { image: fallbackImage1, aspectRatio: "aspect-video" };
    if (index === 1) return { image: fallbackImage2, aspectRatio: "aspect-video" };
    if (index === 2) return { image: fallbackImage3, aspectRatio: "aspect-video" };
    return { image: "", aspectRatio: "aspect-video" }; // Default empty or a universal fallback image/ratio
  };


  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-20 left-4 sm:left-6 z-50"
      >
        <button
          onClick={() => navigate(-1)}
          className="bg-white/90 backdrop-blur-md text-foreground p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      </motion.div>

      {/* Hero Image Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-16"
      >
        <div className="w-full h-[60vh] sm:h-[70vh] relative overflow-hidden">
          <ImageWithFallback
            src={(typeof imageIndex !== 'undefined' && project.mockups?.[parseInt(imageIndex)]?.image) || project.heroImage}
            alt={`${project.title} hero image`}
            className="w-full h-full object-cover"
            loading="eager" 
            decoding="async"
          />

          {/* Overlay with project title */}
          <div className="absolute inset-0 bg-black/30 flex items-end">
            <div className="w-full p-8 sm:p-12 lg:p-16">
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 font-['Montserrat']"
              >
                {project.title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg sm:text-xl text-white/90 font-['Poppins']"
              >
                {project.industry} • {project.year}
              </motion.p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Text Section - 3 Lines of Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Line 1: Description */}
            <p className="text-lg sm:text-xl text-foreground leading-relaxed font-['Poppins']">
              {project.description}
            </p>

            {/* Line 2: Challenge */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-['Poppins']">
              **Challenge:** {project.challenge}
            </p>

            {/* Line 3: Solution/Role */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-['Poppins']">
              **Solution:** {project.solution}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Images Section (Dynamically Adjusted Aspect Ratios) */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 sm:space-y-12">
            
            {/* First Image - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
              // 🔥 Dynamic Aspect Ratio from project data
              className={`w-full cursor-pointer shadow-2xl rounded-2xl overflow-hidden group relative ${getMockupData(0).aspectRatio || 'aspect-video'}`} 
              onClick={() => navigate(`/project/${project.id}/image/0`)}
            >
              <ImageWithFallback
                src={getMockupData(0).image}
                alt={`${project.title} design process`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
              />
            </motion.div>

            {/* Second Image - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              // 🔥 Dynamic Aspect Ratio from project data
              className={`w-full cursor-pointer shadow-2xl rounded-2xl overflow-hidden group relative ${getMockupData(1).aspectRatio || 'aspect-video'}`}
              onClick={() => navigate(`/project/${project.id}/image/1`)}
            >
              <ImageWithFallback
                src={getMockupData(1).image}
                alt={`${project.title} final design`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </motion.div>

            {/* Third Image - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
              // 🔥 Dynamic Aspect Ratio from project data
              className={`w-full cursor-pointer shadow-2xl rounded-2xl overflow-hidden group relative ${getMockupData(2).aspectRatio || 'aspect-video'}`}
              onClick={() => navigate(`/project/${project.id}/image/2`)}
            >
              <ImageWithFallback
                src={getMockupData(2).image}
                alt={`${project.title} brand applications`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation to Next Project */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-foreground font-['Montserrat']">
              Explore More Projects
            </h2>
            <motion.button
              onClick={() => navigate("/portfolio")}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl font-['Poppins']"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects →
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}