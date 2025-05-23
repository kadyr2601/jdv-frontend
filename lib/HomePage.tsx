
export interface HomePageDTO {
    id: number;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    og_title: string;
    og_description: string;
    og_image: string;
    banner_image: string;
    banner_description: string;
    banner_slogan: string;
    banner_title: string;
    banner_subtitle: string;
    featured_projects: FeaturedProject[];
    testimonials: Testimonial[];
    strategy_section: StrategySectionDTO[];
    featured_projects_description: string;
    testimonials_description:  string;
    strategy_section_description: string;
}

export interface FeaturedProject {
    id: number
    name: string
    category: string
    description: string
    cardImage: string
    slug: string
    year: string
    location: string
    size: "normal" | "wide" | "tall"
}

export interface Testimonial {
    id: number;
    category: string;
    review: string;
    fullname: string;
    icon: string;
    stars: number;
    position: string;
    background_image: string;
}

export interface StrategySectionDTO {
    id: number;
    title: string;
    description: string;
    image: string;
    stats: {value: string, label: string}[]
}

export async function getHomePage(): Promise<HomePageDTO> {
    const res = await fetch(`${process.env.API_URL}/api/homepage/`, {cache: "no-cache"});
    if (!res.ok) {throw new Error('Failed to fetch home page');}
    return res.json();
}