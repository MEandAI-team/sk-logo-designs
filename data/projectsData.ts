export interface ProjectDetail {
  id: number
  title: string
  industry: string
  client: string
  year: string
  description: string
  challenge: string
  solution: string
  heroImage: string
  logoVariations: {
    title: string
    image: string
    description: string
  }[]
  colorPalette: {
    primary: string
    secondary: string
    accent: string
    text: string
    background: string
  }
  typography: {
    primary: string
    secondary: string
    description: string
  }
  mockups: {
    title: string
    image: string
    description: string
  }[]
  guidelines: string[]
}

export const projectsData: ProjectDetail[] = [
  {
    id: 1,
    title: "Naturala",
    industry: "Organic Products",
    client: "Naturala Inc.",
    year: "2024",
    description: "Naturala is a company that manufactures different organic products which include Organic Food Products and Organic Personal Care Products. With a mission of Developing Organic Delicacies to suit for Fresh and Delicious products delivered locally.",
    challenge: "The client needed a logo that would convey trust and connect with health-conscious organic products companies yet still maintain a distinctive local appeal that resonates.",
    solution: "We developed a sophisticated leaf-inspired logo that combines natural elements with modern typography, creating a premium yet approachable brand identity.",
    heroImage: "/api/placeholder/800/600",
    logoVariations: [
      {
        title: "Primary Logo",
        image: "/api/placeholder/400/400",
        description: "Main logo with full wordmark and symbol"
      },
      {
        title: "Symbol Only",
        image: "/api/placeholder/400/400",
        description: "Standalone symbol for compact applications"
      },
      {
        title: "Horizontal Layout",
        image: "/api/placeholder/400/400",
        description: "Alternative horizontal arrangement"
      },
      {
        title: "Monochrome Version",
        image: "/api/placeholder/400/400",
        description: "Single color version for specific use cases"
      }
    ],
    colorPalette: {
      primary: "#2D5738",
      secondary: "#4A7C59", 
      accent: "#7FB069",
      text: "#1A1A1A",
      background: "#F8FBF6"
    },
    typography: {
      primary: "Brandon Grotesque",
      secondary: "Open Sans",
      description: "Clean, modern typefaces that reflect professionalism while maintaining organic warmth"
    },
    mockups: [
      {
        title: "Product Packaging",
        image: "/api/placeholder/500/400",
        description: "Logo application on organic product bottles"
      },
      {
        title: "Business Cards",
        image: "/api/placeholder/500/400",
        description: "Professional stationery design"
      },
      {
        title: "Website Header",
        image: "/api/placeholder/500/400",
        description: "Digital brand implementation"
      }
    ],
    guidelines: [
      "Maintain minimum clear space of 1x logo height around all sides",
      "Primary logo should be used on light backgrounds",
      "Monochrome version for single-color applications only",
      "Never distort, rotate, or apply effects to the logo"
    ]
  },
  {
    id: 2,
    title: "Syntax Solutions",
    industry: "Software Development",
    client: "Syntax Solutions Ltd.",
    year: "2024",
    description: "A cutting-edge software development company specializing in custom applications and digital transformation solutions for enterprise clients.",
    challenge: "Create a modern, tech-focused identity that conveys innovation and reliability while standing out in the competitive software industry.",
    solution: "Developed a geometric logo combining code brackets with clean typography, representing both technical expertise and professional service.",
    heroImage: "/api/placeholder/800/600",
    logoVariations: [
      {
        title: "Primary Logo",
        image: "/api/placeholder/400/400",
        description: "Full logo with integrated code bracket symbol"
      },
      {
        title: "Icon Version",
        image: "/api/placeholder/400/400",
        description: "Simplified bracket icon for app and social media"
      },
      {
        title: "Stacked Layout",
        image: "/api/placeholder/400/400",
        description: "Vertical arrangement for square formats"
      },
      {
        title: "Light Version",
        image: "/api/placeholder/400/400",
        description: "Inverted colors for dark backgrounds"
      }
    ],
    colorPalette: {
      primary: "#1A237E",
      secondary: "#3F51B5",
      accent: "#00BCD4", 
      text: "#212121",
      background: "#FAFAFA"
    },
    typography: {
      primary: "Inter", 
      secondary: "Roboto Mono",
      description: "Modern, highly legible fonts perfect for tech communications"
    },
    mockups: [
      {
        title: "Mobile App Icon",
        image: "/api/placeholder/500/400",
        description: "Logo adapted for mobile application"
      },
      {
        title: "Website Interface", 
        image: "/api/placeholder/500/400",
        description: "Brand integration in web platform"
      },
      {
        title: "Corporate Presentation",
        image: "/api/placeholder/500/400",
        description: "Professional slide template design"
      }
    ],
    guidelines: [
      "Use primary blue for main brand applications",
      "Accent cyan only for highlights and call-to-actions", 
      "Maintain 2x symbol width minimum clear space",
      "Icon version minimum size: 24px for digital, 0.5 inch for print"
    ]
  },
  {
    id: 3,
    title: "Surge Dynamics",
    industry: "Energy Solutions",
    client: "Surge Dynamics Corp.",
    year: "2024", 
    description: "Leading renewable energy company focused on sustainable power solutions and grid modernization technologies for commercial and residential markets.",
    challenge: "Design an identity that communicates power, innovation, and environmental responsibility while appealing to both B2B and consumer markets.",
    solution: "Created a dynamic lightning-inspired symbol paired with strong typography, balancing energy metaphors with clean, sustainable design principles.",
    heroImage: "/api/placeholder/800/600",
    logoVariations: [
      {
        title: "Primary Logo",
        image: "/api/placeholder/400/400",
        description: "Main logo with energy wave symbol"
      },
      {
        title: "Power Symbol",
        image: "/api/placeholder/400/400",
        description: "Standalone energy icon for technical applications"
      },
      {
        title: "Compact Version",
        image: "/api/placeholder/400/400",
        description: "Condensed logo for small spaces"
      },
      {
        title: "Reversed Logo",
        image: "/api/placeholder/400/400",
        description: "White version for dark surfaces"
      }
    ],
    colorPalette: {
      primary: "#FF6B35",
      secondary: "#004E89", 
      accent: "#1A659E",
      text: "#2C3E50",
      background: "#FFFFFF"
    },
    typography: {
      primary: "Montserrat",
      secondary: "Source Sans Pro", 
      description: "Bold, energetic typefaces that convey strength and reliability"
    },
    mockups: [
      {
        title: "Solar Panel Installation", 
        image: "/api/placeholder/500/400",
        description: "Brand application on equipment and vehicles"
      },
      {
        title: "Trade Show Booth",
        image: "/api/placeholder/500/400",
        description: "Large-scale environmental graphics"
      },
      {
        title: "Mobile App Dashboard",
        image: "/api/placeholder/500/400",
        description: "Digital energy monitoring interface"
      }
    ],
    guidelines: [
      "Orange primary color represents energy and innovation",
      "Blue secondary provides trust and stability",
      "Never use symbol without minimum 1.5x clearance",
      "Reversed logo only on dark backgrounds 70% opacity or darker"
    ]
  },
  {
    id: 4,
    title: "Precision Labs",
    industry: "Healthcare",
    client: "Precision Labs Medical",
    year: "2024",
    description: "A medical diagnostics company providing cutting-edge laboratory testing services and precision medicine solutions for healthcare providers and patients.",
    challenge: "Create a trustworthy medical brand identity that conveys accuracy, innovation, and patient care while maintaining professional healthcare standards.",
    solution: "Designed a clean, medical-inspired logo featuring precision elements with calming healthcare colors to build trust and professionalism.",
    heroImage: "/api/placeholder/800/600",
    logoVariations: [
      {
        title: "Primary Logo",
        image: "/api/placeholder/400/400",
        description: "Main medical logo with precision symbol"
      },
      {
        title: "Medical Icon",
        image: "/api/placeholder/400/400",
        description: "Standalone symbol for medical applications"
      },
      {
        title: "Horizontal Layout",
        image: "/api/placeholder/400/400",
        description: "Wide format for signage and headers"
      },
      {
        title: "Monochrome Medical",
        image: "/api/placeholder/400/400",
        description: "Single color for medical documents"
      }
    ],
    colorPalette: {
      primary: "#0C5AA6",
      secondary: "#1976D2",
      accent: "#4FC3F7",
      text: "#263238",
      background: "#FAFAFA"
    },
    typography: {
      primary: "Source Sans Pro",
      secondary: "Open Sans",
      description: "Clear, medical-grade typography ensuring excellent readability"
    },
    mockups: [
      {
        title: "Lab Equipment",
        image: "/api/placeholder/500/400",
        description: "Brand application on medical devices"
      },
      {
        title: "Medical Reports",
        image: "/api/placeholder/500/400",
        description: "Professional diagnostic documentation"
      },
      {
        title: "Healthcare App",
        image: "/api/placeholder/500/400",
        description: "Digital patient portal interface"
      }
    ],
    guidelines: [
      "Blue palette conveys trust and medical professionalism",
      "Maintain sterile, clean presentation standards",
      "Minimum size 16px for digital medical applications",
      "Always ensure high contrast for accessibility"
    ]
  },
  {
    id: 5,
    title: "Harbor Collective",
    industry: "Architecture",
    client: "Harbor Collective Studio",
    year: "2024",
    description: "An innovative architectural firm specializing in sustainable design, urban planning, and modern residential and commercial construction projects.",
    challenge: "Develop an architectural brand that represents structural innovation, environmental consciousness, and creative design excellence.",
    solution: "Created a geometric logo inspired by architectural blueprints and sustainable building principles, reflecting precision and environmental responsibility.",
    heroImage: "/api/placeholder/800/600",
    logoVariations: [
      {
        title: "Primary Logo",
        image: "/api/placeholder/400/400",
        description: "Main architectural logo with blueprint elements"
      },
      {
        title: "Structural Icon",
        image: "/api/placeholder/400/400",
        description: "Geometric symbol for architectural applications"
      },
      {
        title: "Blueprint Layout",
        image: "/api/placeholder/400/400",
        description: "Technical drawing style arrangement"
      },
      {
        title: "Reversed Architecture",
        image: "/api/placeholder/400/400",
        description: "White version for dark architectural renderings"
      }
    ],
    colorPalette: {
      primary: "#2E3440",
      secondary: "#4C566A",
      accent: "#5E81AC",
      text: "#2E3440",
      background: "#ECEFF4"
    },
    typography: {
      primary: "Helvetica Neue",
      secondary: "Roboto",
      description: "Clean, architectural typefaces emphasizing structure and clarity"
    },
    mockups: [
      {
        title: "Architectural Plans",
        image: "/api/placeholder/500/400",
        description: "Brand application on blueprints and drawings"
      },
      {
        title: "Building Signage",
        image: "/api/placeholder/500/400",
        description: "Large-scale architectural implementation"
      },
      {
        title: "Portfolio Website",
        image: "/api/placeholder/500/400",
        description: "Digital showcase platform"
      }
    ],
    guidelines: [
      "Maintain architectural precision in all applications",
      "Use grid-based layouts reflecting structural design",
      "Minimum clear space equals height of primary symbol",
      "Blueprint blue accent for technical applications only"
    ]
  },
  {
    id: 6,
    title: "DM Interiors",
    industry: "Design",
    client: "DM Interior Design Studio",
    year: "2024",
    description: "A premium interior design studio creating luxurious, functional spaces for residential and commercial clients with focus on modern elegance.",
    challenge: "Design a sophisticated interior design brand that appeals to luxury clientele while showcasing creativity and attention to detail.",
    solution: "Developed an elegant monogram logo with refined typography and warm color palette, reflecting luxury interior design expertise.",
    heroImage: "/api/placeholder/800/600",
    logoVariations: [
      {
        title: "Primary Logo",
        image: "/api/placeholder/400/400",
        description: "Elegant monogram with full company name"
      },
      {
        title: "Monogram Only",
        image: "/api/placeholder/400/400",
        description: "Standalone DM monogram for premium applications"
      },
      {
        title: "Horizontal Layout",
        image: "/api/placeholder/400/400",
        description: "Extended format for signage and headers"
      },
      {
        title: "Luxury Gold",
        image: "/api/placeholder/400/400",
        description: "Premium gold version for high-end materials"
      }
    ],
    colorPalette: {
      primary: "#8B4513",
      secondary: "#D2691E",
      accent: "#F4A460",
      text: "#2F1B14",
      background: "#FFF8DC"
    },
    typography: {
      primary: "Playfair Display",
      secondary: "Lato",
      description: "Elegant, luxury typefaces perfect for high-end interior design"
    },
    mockups: [
      {
        title: "Business Cards",
        image: "/api/placeholder/500/400",
        description: "Premium printed materials with luxury finishes"
      },
      {
        title: "Interior Signage",
        image: "/api/placeholder/500/400",
        description: "Brand application in designed spaces"
      },
      {
        title: "Design Portfolio",
        image: "/api/placeholder/500/400",
        description: "Professional project presentation materials"
      }
    ],
    guidelines: [
      "Warm brown palette reflects natural, luxury materials",
      "Gold accent only for premium applications and foiling",
      "Maintain elegant spacing and premium presentation",
      "Monogram minimum size 20px digital, 0.75 inch print"
    ]
  },
  {
    id: 7,
    title: "Genesis Systems",
    industry: "Technology",
    client: "Genesis Systems Inc.",
    year: "2024",
    description: "A cutting-edge technology company developing AI-powered solutions and automation systems for enterprise digital transformation.",
    challenge: "Create a futuristic tech brand that conveys innovation, reliability, and cutting-edge AI capabilities while maintaining professional credibility.",
    solution: "Designed a modern geometric logo with neural network-inspired elements, combining tech aesthetics with clean, professional typography.",
    heroImage: "/api/placeholder/800/600",
    logoVariations: [
      {
        title: "Primary Logo",
        image: "/api/placeholder/400/400",
        description: "Main tech logo with AI-inspired symbol"
      },
      {
        title: "Neural Icon",
        image: "/api/placeholder/400/400",
        description: "Standalone AI symbol for tech applications"
      },
      {
        title: "Stacked Layout",
        image: "/api/placeholder/400/400",
        description: "Vertical arrangement for square formats"
      },
      {
        title: "Light Version",
        image: "/api/placeholder/400/400",
        description: "Inverted colors for dark tech interfaces"
      }
    ],
    colorPalette: {
      primary: "#6366F1",
      secondary: "#8B5CF6",
      accent: "#06FFA5",
      text: "#1F2937",
      background: "#F9FAFB"
    },
    typography: {
      primary: "SF Pro Display",
      secondary: "Inter",
      description: "Modern, tech-focused fonts emphasizing innovation and clarity"
    },
    mockups: [
      {
        title: "AI Dashboard",
        image: "/api/placeholder/500/400",
        description: "Brand integration in AI software interface"
      },
      {
        title: "Tech Conference",
        image: "/api/placeholder/500/400",
        description: "Brand presentation at technology events"
      },
      {
        title: "Mobile App",
        image: "/api/placeholder/500/400",
        description: "AI-powered mobile application branding"
      }
    ],
    guidelines: [
      "Purple gradient represents innovation and technology",
      "Green accent for AI success states and confirmations",
      "Maintain futuristic aesthetic in all applications",
      "Minimum size 24px for digital readability"
    ]
  },
  {
    id: 8,
    title: "Apex Solutions",
    industry: "Consulting",
    client: "Apex Business Solutions",
    year: "2024",
    description: "A strategic business consulting firm providing management solutions, operational excellence, and growth strategies for enterprise clients.",
    challenge: "Develop a professional consulting brand that conveys expertise, trustworthiness, and strategic thinking for C-level executives.",
    solution: "Created a sophisticated logo with geometric precision and professional typography, reflecting strategic excellence and business acumen.",
    heroImage: "/api/placeholder/800/600",
    logoVariations: [
      {
        title: "Primary Logo",
        image: "/api/placeholder/400/400",
        description: "Main consulting logo with strategic symbol"
      },
      {
        title: "Peak Icon",
        image: "/api/placeholder/400/400",
        description: "Standalone apex symbol for business applications"
      },
      {
        title: "Horizontal Layout",
        image: "/api/placeholder/400/400",
        description: "Wide format for executive presentations"
      },
      {
        title: "Monochrome Professional",
        image: "/api/placeholder/400/400",
        description: "Single color for business documents"
      }
    ],
    colorPalette: {
      primary: "#1E3A8A",
      secondary: "#3B82F6",
      accent: "#60A5FA",
      text: "#1F2937",
      background: "#FFFFFF"
    },
    typography: {
      primary: "IBM Plex Sans",
      secondary: "Source Sans Pro",
      description: "Professional, authoritative fonts for executive communications"
    },
    mockups: [
      {
        title: "Business Presentations",
        image: "/api/placeholder/500/400",
        description: "Executive consulting presentation materials"
      },
      {
        title: "Corporate Reports",
        image: "/api/placeholder/500/400",
        description: "Strategic analysis documentation"
      },
      {
        title: "Conference Materials",
        image: "/api/placeholder/500/400",
        description: "Professional speaking engagement branding"
      }
    ],
    guidelines: [
      "Deep blue conveys trust and professional expertise",
      "Maintain corporate-grade presentation standards",
      "Ensure readability in executive presentations",
      "Logo minimum size 18px digital, 0.5 inch print"
    ]
  },
  {
    id: 9,
    title: "Riverstone",
    industry: "Real Estate",
    client: "Riverstone Properties",
    year: "2024",
    description: "A premium real estate development and investment company specializing in luxury residential and commercial properties.",
    challenge: "Create a real estate brand that conveys luxury, stability, and investment value while appealing to high-net-worth clients.",
    solution: "Developed an elegant logo inspired by natural stone elements with sophisticated typography, reflecting premium real estate excellence.",
    heroImage: "/api/placeholder/800/600",
    logoVariations: [
      {
        title: "Primary Logo",
        image: "/api/placeholder/400/400",
        description: "Main real estate logo with stone-inspired symbol"
      },
      {
        title: "Property Icon",
        image: "/api/placeholder/400/400",
        description: "Standalone symbol for property applications"
      },
      {
        title: "Horizontal Layout",
        image: "/api/placeholder/400/400",
        description: "Extended format for property signage"
      },
      {
        title: "Luxury Gold",
        image: "/api/placeholder/400/400",
        description: "Premium version for high-end properties"
      }
    ],
    colorPalette: {
      primary: "#2D4A22",
      secondary: "#5A7C50",
      accent: "#C8A882",
      text: "#1A1A1A",
      background: "#FFFFFF"
    },
    typography: {
      primary: "Trajan Pro",
      secondary: "Minion Pro",
      description: "Classic, luxury typefaces reflecting premium real estate quality"
    },
    mockups: [
      {
        title: "Property Signage",
        image: "/api/placeholder/500/400",
        description: "Brand application on luxury property development"
      },
      {
        title: "Marketing Materials",
        image: "/api/placeholder/500/400",
        description: "Premium real estate brochures and presentations"
      },
      {
        title: "Digital Platform",
        image: "/api/placeholder/500/400",
        description: "Luxury property website and app interface"
      }
    ],
    guidelines: [
      "Green palette represents stability and natural luxury",
      "Gold accents for premium property applications only",
      "Maintain luxury presentation in all materials",
      "Symbol minimum size 16px digital, 0.375 inch print"
    ]
  },
  {
    id: 10,
    title: "Forge Creative",
    industry: "Agency",
    client: "Forge Creative Agency",
    year: "2024",
    description: "A full-service creative agency specializing in brand development, digital marketing, and innovative design solutions for diverse clients.",
    challenge: "Design an agency brand that showcases creativity, versatility, and professional expertise while standing out in the competitive creative industry.",
    solution: "Created a dynamic logo with creative elements and bold typography, reflecting the agency's innovative approach to brand development.",
    heroImage: "/api/placeholder/800/600",
    logoVariations: [
      {
        title: "Primary Logo",
        image: "/api/placeholder/400/400",
        description: "Main creative logo with forge-inspired symbol"
      },
      {
        title: "Creative Icon",
        image: "/api/placeholder/400/400",
        description: "Standalone symbol for creative applications"
      },
      {
        title: "Stacked Layout",
        image: "/api/placeholder/400/400",
        description: "Vertical arrangement for social media"
      },
      {
        title: "Monochrome Creative",
        image: "/api/placeholder/400/400",
        description: "Single color for versatile applications"
      }
    ],
    colorPalette: {
      primary: "#E74C3C",
      secondary: "#F39C12",
      accent: "#9B59B6",
      text: "#2C3E50",
      background: "#FFFFFF"
    },
    typography: {
      primary: "Futura",
      secondary: "Proxima Nova",
      description: "Bold, creative typefaces that inspire innovation and creativity"
    },
    mockups: [
      {
        title: "Agency Portfolio",
        image: "/api/placeholder/500/400",
        description: "Creative showcase materials and presentations"
      },
      {
        title: "Studio Branding",
        image: "/api/placeholder/500/400",
        description: "Creative workspace and environmental graphics"
      },
      {
        title: "Digital Presence",
        image: "/api/placeholder/500/400",
        description: "Agency website and social media branding"
      }
    ],
    guidelines: [
      "Vibrant colors reflect creative energy and innovation",
      "Maintain playful yet professional presentation",
      "Encourage creative applications while preserving integrity",
      "Logo minimum size 20px for digital visibility"
    ]
  },
  {
    id: 11,
    title: "Axiom Analytics",
    industry: "Data",
    client: "Axiom Analytics Corp.",
    year: "2024",
    description: "A data analytics company providing advanced business intelligence, predictive modeling, and data-driven insights for enterprise decision-making.",
    challenge: "Create a data-focused brand that conveys analytical expertise, accuracy, and technological sophistication while building client trust.",
    solution: "Designed a precise, data-inspired logo with clean geometric elements and technical typography, reflecting analytical excellence.",
    heroImage: "/api/placeholder/800/600",
    logoVariations: [
      {
        title: "Primary Logo",
        image: "/api/placeholder/400/400",
        description: "Main analytics logo with data visualization symbol"
      },
      {
        title: "Data Icon",
        image: "/api/placeholder/400/400",
        description: "Standalone symbol for analytical applications"
      },
      {
        title: "Horizontal Layout",
        image: "/api/placeholder/400/400",
        description: "Wide format for dashboard headers"
      },
      {
        title: "Technical Version",
        image: "/api/placeholder/400/400",
        description: "Detailed version for technical documentation"
      }
    ],
    colorPalette: {
      primary: "#2563EB",
      secondary: "#1E40AF",
      accent: "#10B981",
      text: "#111827",
      background: "#F9FAFB"
    },
    typography: {
      primary: "JetBrains Mono",
      secondary: "Inter",
      description: "Technical, data-focused fonts ensuring precision and clarity"
    },
    mockups: [
      {
        title: "Analytics Dashboard",
        image: "/api/placeholder/500/400",
        description: "Brand integration in data visualization interface"
      },
      {
        title: "Technical Reports",
        image: "/api/placeholder/500/400",
        description: "Professional analytics documentation"
      },
      {
        title: "Data Platform",
        image: "/api/placeholder/500/400",
        description: "Enterprise analytics software branding"
      }
    ],
    guidelines: [
      "Blue palette represents trust and analytical precision",
      "Green accent for positive data insights and success",
      "Maintain technical accuracy in all presentations",
      "Minimum size 16px for dashboard readability"
    ]
  },
  {
    id: 12,
    title: "Digital Dynamics",
    industry: "Technology",
    client: "Digital Dynamics Technologies",
    year: "2024",
    description: "A digital transformation company helping businesses modernize operations through cloud solutions, automation, and emerging technologies.",
    challenge: "Develop a technology brand that represents digital innovation, transformation capabilities, and forward-thinking solutions for enterprise clients.",
    solution: "Created a dynamic logo with digital transformation elements and modern typography, reflecting technological advancement and business evolution.",
    heroImage: "/api/placeholder/800/600",
    logoVariations: [
      {
        title: "Primary Logo",
        image: "/api/placeholder/400/400",
        description: "Main digital transformation logo with dynamic symbol"
      },
      {
        title: "Digital Icon",
        image: "/api/placeholder/400/400",
        description: "Standalone symbol for technology applications"
      },
      {
        title: "Stacked Layout",
        image: "/api/placeholder/400/400",
        description: "Vertical arrangement for app icons"
      },
      {
        title: "Light Version",
        image: "/api/placeholder/400/400",
        description: "Inverted colors for dark tech interfaces"
      }
    ],
    colorPalette: {
      primary: "#7C3AED",
      secondary: "#A855F7",
      accent: "#F59E0B",
      text: "#1F2937",
      background: "#FFFFFF"
    },
    typography: {
      primary: "Space Grotesk",
      secondary: "DM Sans",
      description: "Modern, digital-first fonts emphasizing technological innovation"
    },
    mockups: [
      {
        title: "Digital Platform",
        image: "/api/placeholder/500/400",
        description: "Brand integration in transformation software"
      },
      {
        title: "Tech Conference",
        image: "/api/placeholder/500/400",
        description: "Digital transformation event materials"
      },
      {
        title: "Enterprise App",
        image: "/api/placeholder/500/400",
        description: "Business transformation application branding"
      }
    ],
    guidelines: [
      "Purple gradient represents digital innovation and transformation",
      "Orange accent for transformation success and achievements",
      "Maintain cutting-edge aesthetic in all applications",
      "Logo minimum size 22px for digital clarity"
    ]
  },
  {
    id: 13,
    title: "Velocity Ventures",
    industry: "Startup",
    client: "Velocity Ventures Fund",
    year: "2024",
    description: "A venture capital firm investing in early-stage startups and providing growth capital for innovative technology companies and entrepreneurs.",
    challenge: "Create a venture capital brand that conveys speed, growth, and investment expertise while appealing to both entrepreneurs and investors.",
    solution: "Designed a dynamic logo with velocity-inspired elements and professional typography, reflecting investment acceleration and startup growth.",
    heroImage: "/api/placeholder/800/600",
    logoVariations: [
      {
        title: "Primary Logo",
        image: "/api/placeholder/400/400",
        description: "Main venture capital logo with velocity symbol"
      },
      {
        title: "Velocity Icon",
        image: "/api/placeholder/400/400",
        description: "Standalone symbol for investment applications"
      },
      {
        title: "Horizontal Layout",
        image: "/api/placeholder/400/400",
        description: "Wide format for investment presentations"
      },
      {
        title: "Monochrome Professional",
        image: "/api/placeholder/400/400",
        description: "Single color for financial documents"
      }
    ],
    colorPalette: {
      primary: "#059669",
      secondary: "#10B981",
      accent: "#34D399",
      text: "#065F46",
      background: "#FFFFFF"
    },
    typography: {
      primary: "Graphik",
      secondary: "Source Sans Pro",
      description: "Dynamic, growth-focused fonts reflecting investment acceleration"
    },
    mockups: [
      {
        title: "Investment Presentations",
        image: "/api/placeholder/500/400",
        description: "Venture capital pitch and proposal materials"
      },
      {
        title: "Portfolio Companies",
        image: "/api/placeholder/500/400",
        description: "Brand application for funded startups"
      },
      {
        title: "Digital Platform",
        image: "/api/placeholder/500/400",
        description: "Investment tracking and portfolio management"
      }
    ],
    guidelines: [
      "Green palette represents growth and financial success",
      "Maintain professional investment industry standards",
      "Convey speed and acceleration in all applications",
      "Logo minimum size 18px for financial readability"
    ]
  },
  {
    id: 14,
    title: "Mindful Wellness",
    industry: "Health",
    client: "Mindful Wellness Center",
    year: "2024",
    description: "A holistic wellness center offering meditation, yoga, mental health services, and wellness programs for mind-body health optimization.",
    challenge: "Design a wellness brand that conveys calm, healing, and holistic health while appealing to wellness-conscious individuals seeking balance.",
    solution: "Created a serene logo with mindfulness-inspired elements and calming typography, reflecting peace, balance, and wellness journey.",
    heroImage: "/api/placeholder/800/600",
    logoVariations: [
      {
        title: "Primary Logo",
        image: "/api/placeholder/400/400",
        description: "Main wellness logo with mindfulness symbol"
      },
      {
        title: "Zen Icon",
        image: "/api/placeholder/400/400",
        description: "Standalone symbol for wellness applications"
      },
      {
        title: "Horizontal Layout",
        image: "/api/placeholder/400/400",
        description: "Wide format for wellness center signage"
      },
      {
        title: "Calming Version",
        image: "/api/placeholder/400/400",
        description: "Soft color version for meditation materials"
      }
    ],
    colorPalette: {
      primary: "#0891B2",
      secondary: "#06B6D4",
      accent: "#67E8F9",
      text: "#164E63",
      background: "#F0F9FF"
    },
    typography: {
      primary: "Nunito Sans",
      secondary: "Open Sans",
      description: "Calming, approachable fonts promoting wellness and tranquility"
    },
    mockups: [
      {
        title: "Wellness Center",
        image: "/api/placeholder/500/400",
        description: "Brand application in meditation and yoga spaces"
      },
      {
        title: "Wellness App",
        image: "/api/placeholder/500/400",
        description: "Mindfulness and meditation mobile application"
      },
      {
        title: "Wellness Materials",
        image: "/api/placeholder/500/400",
        description: "Holistic health program brochures and guides"
      }
    ],
    guidelines: [
      "Calming blue palette promotes peace and wellness",
      "Maintain serene, healing aesthetic in all materials",
      "Use gentle, organic shapes and soft edges",
      "Logo minimum size 20px for wellness app visibility"
    ]
  },
  {
    id: 15,
    title: "Urban Spaces",
    industry: "Real Estate",
    client: "Urban Spaces Development",
    year: "2024",
    description: "A modern real estate development company creating innovative urban living solutions, mixed-use developments, and sustainable city projects.",
    challenge: "Develop an urban development brand that represents modern city living, sustainability, and innovative architectural solutions.",
    solution: "Designed a contemporary logo with urban-inspired elements and modern typography, reflecting city development and sustainable urban growth.",
    heroImage: "/api/placeholder/800/600",
    logoVariations: [
      {
        title: "Primary Logo",
        image: "/api/placeholder/400/400",
        description: "Main urban development logo with city symbol"
      },
      {
        title: "Urban Icon",
        image: "/api/placeholder/400/400",
        description: "Standalone symbol for development applications"
      },
      {
        title: "Horizontal Layout",
        image: "/api/placeholder/400/400",
        description: "Wide format for development signage"
      },
      {
        title: "Architectural Version",
        image: "/api/placeholder/400/400",
        description: "Technical version for architectural drawings"
      }
    ],
    colorPalette: {
      primary: "#374151",
      secondary: "#6B7280",
      accent: "#F59E0B",
      text: "#111827",
      background: "#F9FAFB"
    },
    typography: {
      primary: "Neue Haas Grotesk",
      secondary: "Inter",
      description: "Urban, contemporary fonts reflecting modern city development"
    },
    mockups: [
      {
        title: "Development Signage",
        image: "/api/placeholder/500/400",
        description: "Brand application on urban construction sites"
      },
      {
        title: "Sales Center",
        image: "/api/placeholder/500/400",
        description: "Urban development marketing materials"
      },
      {
        title: "Digital Platform",
        image: "/api/placeholder/500/400",
        description: "Urban living website and property portal"
      }
    ],
    guidelines: [
      "Gray palette represents modern urban sophistication",
      "Orange accent for highlighting key development features",
      "Maintain contemporary urban aesthetic",
      "Logo minimum size 16px for digital applications"
    ]
  },
  {
    id: 16,
    title: "Quantum Labs",
    industry: "Research",
    client: "Quantum Labs Institute",
    year: "2024",
    description: "A cutting-edge research laboratory specializing in quantum computing, advanced physics research, and next-generation technology development.",
    challenge: "Create a research brand that conveys scientific excellence, innovation, and quantum technology leadership while maintaining academic credibility.",
    solution: "Developed a sophisticated logo with quantum-inspired elements and scientific typography, reflecting research precision and technological advancement.",
    heroImage: "/api/placeholder/800/600",
    logoVariations: [
      {
        title: "Primary Logo",
        image: "/api/placeholder/400/400",
        description: "Main research logo with quantum symbol"
      },
      {
        title: "Quantum Icon",
        image: "/api/placeholder/400/400",
        description: "Standalone symbol for scientific applications"
      },
      {
        title: "Horizontal Layout",
        image: "/api/placeholder/400/400",
        description: "Wide format for research presentations"
      },
      {
        title: "Scientific Version",
        image: "/api/placeholder/400/400",
        description: "Technical version for research publications"
      }
    ],
    colorPalette: {
      primary: "#4338CA",
      secondary: "#6366F1",
      accent: "#EC4899",
      text: "#1E1B4B",
      background: "#FFFFFF"
    },
    typography: {
      primary: "CMU Serif",
      secondary: "Source Sans Pro",
      description: "Scientific, academic fonts ensuring research credibility"
    },
    mockups: [
      {
        title: "Research Publications",
        image: "/api/placeholder/500/400",
        description: "Brand application in scientific journals and papers"
      },
      {
        title: "Laboratory Equipment",
        image: "/api/placeholder/500/400",
        description: "Quantum research facility branding"
      },
      {
        title: "Conference Materials",
        image: "/api/placeholder/500/400",
        description: "Scientific conference and presentation materials"
      }
    ],
    guidelines: [
      "Blue palette conveys scientific precision and trust",
      "Pink accent for quantum innovation highlights",
      "Maintain academic and research presentation standards",
      "Logo minimum size 14px for scientific readability"
    ]
  },
  {
    id: 17,
    title: "Eco Solutions",
    industry: "Environment",
    client: "Eco Solutions Environmental",
    year: "2024",
    description: "An environmental consulting company providing sustainability solutions, renewable energy consulting, and eco-friendly business transformation services.",
    challenge: "Design an environmental brand that conveys sustainability, environmental responsibility, and green innovation while maintaining professional credibility.",
    solution: "Created an eco-inspired logo with natural elements and sustainable typography, reflecting environmental stewardship and green business solutions.",
    heroImage: "/api/placeholder/800/600",
    logoVariations: [
      {
        title: "Primary Logo",
        image: "/api/placeholder/400/400",
        description: "Main environmental logo with eco symbol"
      },
      {
        title: "Leaf Icon",
        image: "/api/placeholder/400/400",
        description: "Standalone symbol for environmental applications"
      },
      {
        title: "Horizontal Layout",
        image: "/api/placeholder/400/400",
        description: "Wide format for sustainability reports"
      },
      {
        title: "Green Version",
        image: "/api/placeholder/400/400",
        description: "Full green version for eco-friendly materials"
      }
    ],
    colorPalette: {
      primary: "#166534",
      secondary: "#16A34A",
      accent: "#4ADE80",
      text: "#14532D",
      background: "#F0FDF4"
    },
    typography: {
      primary: "Avenir Next",
      secondary: "Open Sans",
      description: "Natural, sustainable fonts reflecting environmental responsibility"
    },
    mockups: [
      {
        title: "Sustainability Reports",
        image: "/api/placeholder/500/400",
        description: "Environmental consulting documentation"
      },
      {
        title: "Eco-Friendly Materials",
        image: "/api/placeholder/500/400",
        description: "Sustainable business transformation guides"
      },
      {
        title: "Environmental App",
        image: "/api/placeholder/500/400",
        description: "Sustainability tracking and monitoring platform"
      }
    ],
    guidelines: [
      "Green palette represents environmental sustainability",
      "Use organic shapes and natural design elements",
      "Maintain eco-friendly presentation in all materials",
      "Logo minimum size 18px for environmental readability"
    ]
  },
  {
    id: 18,
    title: "Nova Designs",
    industry: "Creative",
    client: "Nova Design Studio",
    year: "2024",
    description: "A contemporary design studio specializing in graphic design, branding, web design, and creative visual solutions for modern businesses.",
    challenge: "Create a design studio brand that showcases creativity, modern aesthetics, and design excellence while appealing to diverse creative clients.",
    solution: "Developed a stellar-inspired logo with creative elements and contemporary typography, reflecting design innovation and visual excellence.",
    heroImage: "/api/placeholder/800/600",
    logoVariations: [
      {
        title: "Primary Logo",
        image: "/api/placeholder/400/400",
        description: "Main design studio logo with nova symbol"
      },
      {
        title: "Star Icon",
        image: "/api/placeholder/400/400",
        description: "Standalone symbol for creative applications"
      },
      {
        title: "Stacked Layout",
        image: "/api/placeholder/400/400",
        description: "Vertical arrangement for social media"
      },
      {
        title: "Gradient Version",
        image: "/api/placeholder/400/400",
        description: "Colorful version for creative materials"
      }
    ],
    colorPalette: {
      primary: "#7C2D12",
      secondary: "#EA580C",
      accent: "#FB923C",
      text: "#431407",
      background: "#FFFBEB"
    },
    typography: {
      primary: "Poppins",
      secondary: "Inter",
      description: "Creative, modern fonts inspiring design innovation and creativity"
    },
    mockups: [
      {
        title: "Design Portfolio",
        image: "/api/placeholder/500/400",
        description: "Creative studio showcase and project presentations"
      },
      {
        title: "Studio Branding",
        image: "/api/placeholder/500/400",
        description: "Creative workspace and environmental graphics"
      },
      {
        title: "Creative Platform",
        image: "/api/placeholder/500/400",
        description: "Design studio website and digital portfolio"
      }
    ],
    guidelines: [
      "Orange palette reflects creative energy and warmth",
      "Maintain contemporary design aesthetic",
      "Encourage creative applications while preserving identity",
      "Logo minimum size 20px for creative visibility"
    ]
  },
  {
    id: 19,
    title: "TechFlow",
    industry: "Software",
    client: "TechFlow Systems",
    year: "2024",
    description: "A software development company creating workflow automation, productivity tools, and custom software solutions for business efficiency.",
    challenge: "Design a software brand that conveys efficiency, innovation, and technical expertise while appealing to business productivity markets.",
    solution: "Created a flow-inspired logo with technical elements and modern typography, reflecting software efficiency and workflow optimization.",
    heroImage: "/api/placeholder/800/600",
    logoVariations: [
      {
        title: "Primary Logo",
        image: "/api/placeholder/400/400",
        description: "Main software logo with flow symbol"
      },
      {
        title: "Flow Icon",
        image: "/api/placeholder/400/400",
        description: "Standalone symbol for software applications"
      },
      {
        title: "Horizontal Layout",
        image: "/api/placeholder/400/400",
        description: "Wide format for software interfaces"
      },
      {
        title: "Dark Version",
        image: "/api/placeholder/400/400",
        description: "Dark theme version for software UI"
      }
    ],
    colorPalette: {
      primary: "#0F172A",
      secondary: "#475569",
      accent: "#06B6D4",
      text: "#020617",
      background: "#F8FAFC"
    },
    typography: {
      primary: "JetBrains Mono",
      secondary: "Inter",
      description: "Technical, efficient fonts perfect for software development"
    },
    mockups: [
      {
        title: "Software Interface",
        image: "/api/placeholder/500/400",
        description: "Brand integration in productivity software UI"
      },
      {
        title: "Developer Tools",
        image: "/api/placeholder/500/400",
        description: "Technical development platform branding"
      },
      {
        title: "Workflow App",
        image: "/api/placeholder/500/400",
        description: "Business automation application interface"
      }
    ],
    guidelines: [
      "Dark palette conveys technical sophistication",
      "Cyan accent for interactive elements and highlights",
      "Maintain software development aesthetic",
      "Logo minimum size 16px for interface readability"
    ]
  },
  {
    id: 20,
    title: "Bright Future",
    industry: "Education",
    client: "Bright Future Learning",
    year: "2024",
    description: "An educational technology company developing online learning platforms, educational content, and digital tools for students and educators.",
    challenge: "Create an education brand that conveys learning, growth, and innovation while appealing to both students and educational institutions.",
    solution: "Designed an uplifting logo with educational elements and inspiring typography, reflecting learning excellence and educational advancement.",
    heroImage: "/api/placeholder/800/600",
    logoVariations: [
      {
        title: "Primary Logo",
        image: "/api/placeholder/400/400",
        description: "Main education logo with learning symbol"
      },
      {
        title: "Learning Icon",
        image: "/api/placeholder/400/400",
        description: "Standalone symbol for educational applications"
      },
      {
        title: "Horizontal Layout",
        image: "/api/placeholder/400/400",
        description: "Wide format for educational platforms"
      },
      {
        title: "Colorful Version",
        image: "/api/placeholder/400/400",
        description: "Vibrant version for student materials"
      }
    ],
    colorPalette: {
      primary: "#1D4ED8",
      secondary: "#3B82F6",
      accent: "#FBBF24",
      text: "#1E3A8A",
      background: "#FFFFFF"
    },
    typography: {
      primary: "Quicksand",
      secondary: "Open Sans",
      description: "Friendly, educational fonts promoting learning and growth"
    },
    mockups: [
      {
        title: "Learning Platform",
        image: "/api/placeholder/500/400",
        description: "Brand integration in online education interface"
      },
      {
        title: "Educational Materials",
        image: "/api/placeholder/500/400",
        description: "Student guides and learning resources"
      },
      {
        title: "Mobile Learning",
        image: "/api/placeholder/500/400",
        description: "Educational mobile application branding"
      }
    ],
    guidelines: [
      "Blue palette conveys trust and educational excellence",
      "Yellow accent for highlights and positive learning outcomes",
      "Maintain friendly, approachable educational aesthetic",
      "Logo minimum size 18px for educational readability"
    ]
  }
]

// Featured items for home page and portfolio grid - simplified structure
export const featuredItems = [
  { id: 1, title: "SV Food Court", industry: "Food & Beverage", image: "/images/01Food court.jpg"},
  { id: 2, title: "Chroma Creation", industry: "Editing", image: "/images/02chroma creation.jpg" },
  { id: 3, title: "Mishy", industry: "Fashion", image: "/images/03mishy.jpg" },
  { id: 4, title: "Dynox", industry: "Healthcare", image: "/images/04dynox.jpg" },
  { id: 5, title: "Shree Production Films", industry: "Photography", image: "/images/05shree production.jpg" },
  { id: 6, title: "emerald", industry: "Oragnic Products", image: "/images/06emerald.jpg" },
  { id: 7, title: "Vedastra", industry: "Software", image: "/images/07vedastra.jpg" },
  { id: 8, title: "Cafe Buddy", industry: "Food & Beverage", image: "/images/08cafe buddy.jpg" },
  { id: 9, title: "Train Tough", industry: "Real Estate", image: "/images/09train tough.jpg" },
  { id: 10, title: "Faces", industry: "Beauty and Fashion", image: "/images/10faces.jpg" },
  { id: 11, title: "Drapeshape", industry: "Photography", image: "/images/11drapeshape.jpg" },
  { id: 12, title: "Bhalar", industry: "Oraganic Products", image: "/images/12bhalar.jpg" },
  { id: 13, title: "GD Construction", industry: "Construction", image: "/images/13 gd construction.jpg" },
  { id: 14, title: "MOA Architects", industry: "Architecture", image: "/images/14 MOA architects.jpg" },
  { id: 15, title: "Evopro", industry: "Oraganic Products", image: "/images/15 evopro.jpg" },
  { id: 16, title: "Brick Edge", industry: "Design", image: "/images/16brick edge.jpg" },
  { id: 17, title: "SG Creation", industry: "Editing", image: "/images/17SG creation.jpg" },
  { id: 18, title: "4 AM Marketing", industry: "Marketing", image: "/images/18 4 am marketing.jpg" },
  { id: 19, title: "AK Construction", industry: "Architecture", image: "/images/19 AK construction.jpg" },
  { id: 20, title: "AK Photography", industry: "Photography", image: "/images/20 ak photography.jpg" }
]