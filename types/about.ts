export interface AboutUsPage {
    banner: {
        id: number;
        title: string;
        image: string;
    } | null;
    welcome_section: {
        id: number;
        title: string;
        description: string;
        image: string;
    } | null;
    founder_section: {
        id: number;
        description: string;
        image: string;
    } | null;
    services_section: {
        id: number;
        title: string;
        description: string;
        services_banner: {
            id: number;
            title: string;
            description: string;
            section: number;
            services: { "slug": string };
        }[];
    } | null;
    optional_section: {
        id: number;
        title: string;
        description: string;
        banners: {
            id: number;
            title: string;
            percentage: number;
            section: number;
        }[];
    } | null;
    faq_section: {
        id: number;
        question: string;
        answer: string;
    }[];
}