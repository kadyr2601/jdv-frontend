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
    area: string;
}
export interface GalleryItemDTO {
    id: number;
    gallery: string;
    project: number;
}

export  interface ProjectDetails {
    project: ProjectDTO;
    gallery: GalleryItemDTO[];
}

export async function getProjects(): Promise<ProjectDTO[]> {
    const res = await fetch(`${process.env.API_URL}/api/projects/list`, {cache: "no-cache"});
    if (!res.ok) {throw new Error('Failed to fetch project list');}
    return res.json();
}
export async function getProjectsPage(): Promise<ProjectsPageDTO> {
    const res = await fetch(`${process.env.API_URL}/api/projects/`, {cache: "no-cache"});
    if (!res.ok) {throw new Error('Failed to fetch projects page');}
    return res.json();
}
export async function getProjectDetails(slug: string): Promise<ProjectDetails> {
    const res = await fetch(`${process.env.API_URL}/api/projects/details/${slug}`, {cache: "no-cache"});
    if (!res.ok) {throw new Error('Failed to fetch projects details');}
    return res.json();
}