export interface Project {
  id: number
  title: string
  slug: string
  category: string
  description: string
  image: string
  year: string
  location: string
  size?: "normal" | "wide" | "tall"
  featured?: boolean
  details?: {
    client?: string
    area?: string
    services?: string[]
    challenge?: string
    solution?: string
    gallery?: string[]
  }
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Palm Jumeirah Villa",
    slug: "palm-jumeirah-villa",
    category: "Residential",
    description:
      "Luxurious beachfront villa with panoramic sea views and bespoke interior finishes, featuring custom furniture and smart home integration.",
    image: "/pr1.jpg",
    year: "2023",
    location: "Dubai, UAE",
    size: "wide",
    featured: true,
    details: {
      client: "Private Client",
      area: "12,000 sq ft",
      services: ["Interior Design", "Furniture Design", "Lighting Design", "Smart Home Integration"],
      challenge:
        "Creating a seamless indoor-outdoor living experience while maintaining privacy and incorporating the client's extensive art collection.",
      solution:
        "We designed a series of interconnected spaces that flow naturally from indoors to outdoors, with custom display solutions for artwork and strategic placement of living areas to maximize both views and privacy.",
      gallery: ["/placeholder-tyizb.png", "/placeholder-2mn51.png", "/placeholder-kunrs.png"],
    },
  },
  {
    id: 2,
    title: "Downtown Penthouse",
    slug: "downtown-penthouse",
    category: "Residential",
    description:
      "Contemporary penthouse overlooking the Burj Khalifa with custom-designed furniture and smart home integration.",
    image: "/pr2.jpg",
    year: "2022",
    location: "Dubai, UAE",
    size: "tall",
    featured: true,
    details: {
      client: "Private Client",
      area: "6,500 sq ft",
      services: ["Interior Design", "Furniture Design", "Lighting Design"],
      challenge: "Maximizing the spectacular views while creating intimate living spaces in an open floor plan.",
      solution:
        "We developed a layout that frames the iconic views through carefully positioned architectural elements, while using subtle level changes and material transitions to define distinct living zones.",
      gallery: ["/placeholder-2mn51.png", "/placeholder-kunrs.png", "/placeholder-1w4g9.png"],
    },
  },
  {
    id: 3,
    title: "DIFC Office Complex",
    slug: "difc-office-complex",
    category: "Commercial",
    description: "Sophisticated corporate headquarters featuring premium materials and state-of-the-art facilities.",
    image: "/pr3.jpg",
    year: "2023",
    location: "Dubai, UAE",
    size: "normal",
    featured: false,
    details: {
      client: "International Financial Group",
      area: "25,000 sq ft",
      services: ["Interior Design", "Space Planning", "Furniture Specification", "Acoustic Solutions"],
      challenge:
        "Creating a workspace that balances professionalism with employee wellbeing and incorporates the latest workplace trends.",
      solution:
        "We designed a flexible environment with a variety of work settings, from focus pods to collaborative zones, all finished with premium materials that reflect the company's prestigious brand.",
      gallery: ["/placeholder-kunrs.png", "/placeholder-office.png", "/placeholder-1w4g9.png"],
    },
  },
  {
    id: 4,
    title: "Zabeel Palace Renovation",
    slug: "zabeel-palace-renovation",
    category: "Residential",
    description: "Meticulous restoration of historical architecture combined with modern luxury amenities.",
    image: "/pr4.jpg",
    year: "2021",
    location: "Dubai, UAE",
    size: "normal",
    featured: true,
    details: {
      client: "Royal Family",
      area: "30,000 sq ft",
      services: ["Restoration", "Interior Design", "Custom Furniture", "Lighting Design"],
      challenge:
        "Preserving historical architectural elements while integrating modern luxury amenities and technology.",
      solution:
        "Our team worked closely with heritage consultants to restore original features while discreetly incorporating contemporary systems and creating new spaces that complement the historical aesthetic.",
      gallery: ["/placeholder-1w4g9.png", "/placeholder-tyizb.png", "/placeholder-2mn51.png"],
    },
  },
  {
    id: 5,
    title: "Luxury Hotel Lobby",
    slug: "luxury-hotel-lobby",
    category: "Hospitality",
    description: "Opulent hotel entrance featuring custom chandeliers and hand-crafted marble details.",
    image: "/pr5.jpg",
    year: "2022",
    location: "Abu Dhabi, UAE",
    size: "normal",
    featured: false,
    details: {
      client: "International Hotel Group",
      area: "8,000 sq ft",
      services: ["Interior Design", "Custom Lighting", "Material Specification", "Art Curation"],
      challenge:
        "Creating a memorable first impression that balances grandeur with welcoming comfort and operational efficiency.",
      solution:
        "We designed a dramatic double-height space with a statement chandelier and water feature, complemented by intimate seating areas and efficient circulation paths for guests and staff.",
      gallery: ["/placeholder-hotel.png", "/placeholder-kunrs.png", "/placeholder-office.png"],
    },
  },
  {
    id: 6,
    title: "Executive Office Suite",
    slug: "executive-office-suite",
    category: "Commercial",
    description: "Prestigious office environment designed for optimal productivity and impressive client meetings.",
    image: "/pr6.jpg",
    year: "2023",
    location: "Dubai, UAE",
    size: "wide",
    featured: true,
    details: {
      client: "Investment Firm",
      area: "3,500 sq ft",
      services: ["Interior Design", "Furniture Design", "Acoustic Solutions", "Lighting Design"],
      challenge:
        "Creating a space that projects authority and success while providing practical work areas and meeting spaces.",
      solution:
        "We developed a layout with a grand reception area that transitions to more intimate meeting rooms and a private executive office, all finished with rich materials and subtle technology integration.",
      gallery: ["/placeholder-office.png", "/placeholder-kunrs.png", "/placeholder-1w4g9.png"],
    },
  },
  {
    id: 7,
    title: "Jumeirah Beach Residence",
    slug: "jumeirah-beach-residence",
    category: "Residential",
    description: "Contemporary beachfront apartment with panoramic ocean views and custom Italian furniture.",
    image: "/pr7.jpg",
    year: "2022",
    location: "Dubai, UAE",
    size: "normal",
    featured: false,
    details: {
      client: "Private Client",
      area: "4,200 sq ft",
      services: ["Interior Design", "Furniture Sourcing", "Lighting Design"],
      challenge:
        "Maximizing the beachfront views while creating a practical family living space with sophisticated aesthetics.",
      solution:
        "We created an open plan living area with floor-to-ceiling windows, complemented by custom furniture pieces that frame the views without obstructing them.",
      gallery: ["/placeholder-jdv4.png", "/placeholder-jdv5.png", "/placeholder-tyizb.png"],
    },
  },
  {
    id: 8,
    title: "Boutique Retail Store",
    slug: "boutique-retail-store",
    category: "Commercial",
    description:
      "Elegant retail environment for a luxury fashion brand with custom display fixtures and ambient lighting.",
    image: "/pr8.jpg",
    year: "2023",
    location: "Dubai, UAE",
    size: "normal",
    featured: false,
    details: {
      client: "International Fashion Brand",
      area: "2,800 sq ft",
      services: ["Interior Design", "Custom Fixtures", "Lighting Design", "Visual Merchandising"],
      challenge:
        "Creating a distinctive brand environment that showcases products effectively while providing an exceptional customer experience.",
      solution:
        "We designed a flexible retail space with modular display systems and carefully calibrated lighting to highlight merchandise, complemented by comfortable seating areas and premium fitting rooms.",
      gallery: ["/placeholder-jdv5.png", "/placeholder-jdv4.png", "/placeholder-kunrs.png"],
    },
  },
  {
    id: 9,
    title: "Luxury Spa Retreat",
    slug: "luxury-spa-retreat",
    category: "Hospitality",
    description: "Tranquil wellness sanctuary featuring natural materials, water features, and custom treatment rooms.",
    image: "/pr9.jpg",
    year: "2022",
    location: "Ras Al Khaimah, UAE",
    size: "tall",
    featured: true,
    details: {
      client: "Resort & Spa Group",
      area: "15,000 sq ft",
      services: ["Interior Design", "Wellness Facility Planning", "Lighting Design", "Material Specification"],
      challenge:
        "Creating a serene environment that supports various wellness treatments while maintaining operational efficiency.",
      solution:
        "We designed a flowing layout organized around a central water garden, with treatment rooms featuring natural materials and subtle technology integration for climate and lighting control.",
      gallery: ["/placeholder-modern-living.png", "/placeholder-interior-art.png", "/placeholder-satisfaction.png"],
    },
  },
]

export async function getProjects(): Promise<Project[]> {
  return projectsData
}
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const project = projectsData.find((p) => p.slug === slug)
  return project || null
}