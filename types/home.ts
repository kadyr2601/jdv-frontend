interface AboutBanner {
    id: number;
    name: string;
    content: string;
    image: string;
    section: number;
}

interface AboutSection {
    id: number;
    about_banner_set: AboutBanner[];
    title: string;
    content: string;
    image: string;
}

interface ServiceBanner {
    id: number;
    name: string;
    description: string;
    image: string;
    section: number;
    service: { slug: string };
}

interface FeaturedServices {
    id: number;
    services_banner_set: ServiceBanner[];
    title: string;
    image: string;
}

interface Review {
    id: number;
    stars: number;
    review: string;
    image: string;
    client_fullname: string;
    client_position: string;
}

interface BeforeAfter {
    id: number;
    title: string;
    before_image: string;
    after_image: string;
}

export interface FeaturedProject {
    id: number;
    title: string;
    image: string;
    project: { slug: string; };
}

export interface AboutInteriorBanner {
    id: number;
    title: string;
    description: string;
    section: number;
}

export interface AboutInterior {
    id: number;
    about_interior_banner_set: AboutInteriorBanner[];
    title: string;
    content: string;
    image: string;
}

export type BannerSlideType = "image" | "video";
export type BannerSlideAlignment = "left" | "center" | "right" | "split";

export interface BannerCTA {
    text: string;
    url: string;
}

export interface BannerSlide {
    id: string;
    type: BannerSlideType;
    src: string;
    title: string;
    subtitle?: string;
    description?: string;
    category?: string;
    cta?: BannerCTA;
    phone?: string;
    alignment?: BannerSlideAlignment;
    socialLinks?: boolean;
}

export interface LuxuryBannerProps {
    slides: BannerSlide[];
    autoplay?: boolean;
    autoplaySpeed?: number;
    showArrows?: boolean;
    showDots?: boolean;
    height?: string;
}

export type HomePageData = {
    about_section: AboutSection | null;
    featured_services: FeaturedServices | null;
    reviews: Review[];
    before_after: BeforeAfter | null;
    featured_projects: FeaturedProject[] | null;
    about_interior: AboutInterior | null;
    banner: LuxuryBannerProps | null;
};