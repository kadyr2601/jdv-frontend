
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
    strategy_section: StrategySection[];
}

export interface FeaturedProject {
    id: number;
    name: string;
    slug: string;
    cardImage: string;
    year: string;
    location: string;
    category: string;
    banner_image: string;
    description: string;
    meta_title: string;
    meta_description: string;
    area: string;
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

export interface StrategySection {
    id: number;
    title: string;
    description: string;
    image: string;
    cta_first_title: string;
    cta_first_description: string;
    cta_second_title: string;
    cta_second_description: string;
}

export async function getHomePage(): Promise<HomePageDTO> {
    const res = await fetch(`${process.env.API_URL}/api/homepage/`, {cache: "no-cache"});
    if (!res.ok) {throw new Error('Failed to fetch home page');}
    return res.json();
}