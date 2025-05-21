export interface ProjectsPageDTO {
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
}
export interface ProjectDTO {
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
}