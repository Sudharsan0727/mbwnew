// Portfolio Categories for filtering
export const portfolioCategories = [
  { id: 'all', value: 'all', label: 'All Projects' },
  { id: 'web', value: 'Web Development', label: 'Web Development' },
  { id: 'mobile', value: 'Mobile Development', label: 'Mobile' },
  { id: 'design', value: 'Web Design', label: 'Design' },
  { id: 'marketing', value: 'Digital Marketing', label: 'Marketing' },
  { id: 'enterprise', value: 'Enterprise Solutions', label: 'Enterprise' }
];

// Portfolio Projects with technologies
export const portfolioProjects = [
  {
    id: 1,
    title: "Consolidated Construction Consortium Limited",
    category: "Construction",
    image: "/img/Portfolio Page/CCCL_Portfolio.png",
    description: "Complete e-commerce solution with payment gateway integration and inventory management",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"]
  },
  {
    id: 2,
    title: "The Ce-Mentor",
    category: "Construction",
    image: "/img/Portfolio Page/CE-Mentor_Portfolio.png",
    description: "Modern, responsive corporate website with CMS integration and SEO optimization",
    technologies: ["WordPress", "PHP", "MySQL", "CSS3"]
  },
  {
    id: 3,
    title: "Rank Projects",
    category: "Construction",
    image: "/img/Portfolio Page/RankProject_Portfolio.png",
    description: "Modern, responsive corporate website with CMS integration and SEO optimization",
    technologies: ["WordPress", "PHP", "MySQL", "CSS3"]
  },
  {
    id: 3,
    title: "Dugar Finance",
    category: "Finance",
    image: "/img/Portfolio Page/Durgar_Portfolio.png",
    description: "Patient management app for healthcare providers with appointment scheduling",
    technologies: ["Flutter", "Firebase", "REST API"]
  },
  {
    id: 3,
    title: "Rank Law",
    category: "Lawyer",
    image: "/img/Portfolio Page/Ranklaw_Portfolio.png",
    description: "Patient management app for healthcare providers with appointment scheduling",
    technologies: ["Flutter", "Firebase", "REST API"]
  },
  {
    id: 3,
    title: "Saivam",
    category: "Spiritual",
    image: "/img/Portfolio Page/Saivam_Portfolio.png",
    description: "Patient management app for healthcare providers with appointment scheduling",
    technologies: ["Flutter", "Firebase", "REST API"]
  },
  {
    id: 3,
    title: "Sidharism",
    category: "Spiritual",
    image: "/img/Portfolio Page/Sidharism_Portfolio.png",
    description: "Patient management app for healthcare providers with appointment scheduling",
    technologies: ["Flutter", "Firebase", "REST API"]
  },
  {
    id: 3,
    title: "Sottathatti sivaraman",
    category: "Spiritual",
    image: "/img/Portfolio Page/Sottathattisivaraman_Portfolio.png",
    description: "Patient management app for healthcare providers with appointment scheduling",
    technologies: ["Flutter", "Firebase", "REST API"]
  },
  {
    id: 4,
    title: "Inexus Biotech Pvt Ltd",
    category: "Biotechnology",
    image: "/img/Portfolio Page/Inexus_Portfolio.png",
    description: "Achieved 300% organic traffic growth in 6 months through strategic SEO",
    technologies: ["Google Analytics", "SEMrush", "Content Marketing"]
  },
  {
    id: 4,
    title: "BioSystems Diagnostics",
    category: "Biotechnology",
    image: "/img/Portfolio Page/Biosystem_Portfolio.png",
    description: "Achieved 300% organic traffic growth in 6 months through strategic SEO",
    technologies: ["Google Analytics", "SEMrush", "Content Marketing"]
  },
  {
    id: 5,
    title: "Jay Dheep Techno Enterprisess",
    category: "Industrial Engineering",
    image: "/img/Portfolio Page/Jay_Portfolio.png",
    description: "Online reservation system with real-time table management and notifications",
    technologies: ["React", "Express", "PostgreSQL", "Socket.io"]
  },
  {
    id: 6,
    title: "ksr India",
    category: "Industrial Engineering",
    image: "/img/Portfolio Page/Ksr_Portfolio.png",
    description: "B2B portal with inventory and order management for manufacturing operations",
    technologies: ["Angular", "Java Spring", "Oracle", "Docker"]
  },
  {
    id: 7,
    title: "PMI Group",
    category: "manufacturing",
    image: "/img/Portfolio Page/PMI_Portfolio.png",
    description: "Complete UI/UX design for a fitness tracking mobile application",
    technologies: ["Figma", "Sketch", "Adobe XD"]
  },
  {
    id: 8,
    title: "Raksha Green",
    category: "Environmental Services",
    image: "/img/Portfolio Page/Rasksha_Portfolio.png",
    description: "Multi-platform social media campaign with 500% increase in engagement",
    technologies: ["Meta Ads", "Instagram", "Analytics"]
  },
  {
    id: 9,
    title: "Sreevari Enterprises",
    category: "Sheet Metal Manufacturing",
    image: "/img/Portfolio Page/Sreevari_Portfolio.png",
    description: "Real-time financial analytics dashboard with data visualization",
    technologies: ["Vue.js", "D3.js", "Python", "FastAPI"]
  }
];

// Featured Case Studies with detailed information
export const featuredCaseStudies = [
  {
    id: 1,
    title: "TechVision E-commerce Transformation",
    category: "Web Development",
    image: "/img/Portfolio Page/TechVision_Protfilio.png",
    description: "Complete digital transformation for a leading retail brand, including custom e-commerce platform development, payment gateway integration, and inventory management system. The project resulted in 250% increase in online sales and 40% reduction in operational costs.",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Stripe"],
    results: [
      { metric: "250%", description: "Increase in online sales" },
      { metric: "40%", description: "Reduction in operational costs" },
      { metric: "99.9%", description: "System uptime achieved" }
    ],
    duration: "6 months",
    client: "TechVision Solutions"
  },
  {
    id: 2,
    title: "HealthCare Pro Mobile Solution",
    category: "Mobile Development",
    image: "/img/Portfolio Page/HealthCar_Protfilio.png",
    description: "Revolutionary healthcare mobile application that connects patients with healthcare providers seamlessly. Features include appointment scheduling, telemedicine integration, prescription management, and real-time health monitoring. Deployed across 50+ clinics serving 10,000+ patients.",
    technologies: ["Flutter", "Firebase", "WebRTC", "Node.js", "PostgreSQL"],
    results: [
      { metric: "10,000+", description: "Active patients" },
      { metric: "50+", description: "Partner clinics" },
      { metric: "4.8/5", description: "App store rating" }
    ],
    duration: "8 months",
    client: "HealthCare Pro Network"
  }
];
