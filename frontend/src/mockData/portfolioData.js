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
    title: "E-commerce Platform for Retail Brand",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    description: "Complete e-commerce solution with payment gateway integration and inventory management",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"]
  },
  {
    id: 2,
    title: "Corporate Website Redesign",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    description: "Modern, responsive corporate website with CMS integration and SEO optimization",
    technologies: ["WordPress", "PHP", "MySQL", "CSS3"]
  },
  {
    id: 3,
    title: "Healthcare Mobile App",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    description: "Patient management app for healthcare providers with appointment scheduling",
    technologies: ["Flutter", "Firebase", "REST API"]
  },
  {
    id: 4,
    title: "SEO Campaign for Tech Startup",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&q=80",
    description: "Achieved 300% organic traffic growth in 6 months through strategic SEO",
    technologies: ["Google Analytics", "SEMrush", "Content Marketing"]
  },
  {
    id: 5,
    title: "Restaurant Booking Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1571677246347-5040036b95cc?w=800&q=80",
    description: "Online reservation system with real-time table management and notifications",
    technologies: ["React", "Express", "PostgreSQL", "Socket.io"]
  },
  {
    id: 6,
    title: "Manufacturing Company Portal",
    category: "Enterprise Solutions",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80",
    description: "B2B portal with inventory and order management for manufacturing operations",
    technologies: ["Angular", "Java Spring", "Oracle", "Docker"]
  },
  {
    id: 7,
    title: "Fitness App UI/UX Design",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    description: "Complete UI/UX design for a fitness tracking mobile application",
    technologies: ["Figma", "Sketch", "Adobe XD"]
  },
  {
    id: 8,
    title: "Social Media Marketing Campaign",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    description: "Multi-platform social media campaign with 500% increase in engagement",
    technologies: ["Meta Ads", "Instagram", "Analytics"]
  },
  {
    id: 9,
    title: "Financial Dashboard Application",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
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
