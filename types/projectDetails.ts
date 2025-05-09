export type Project = {
    id: number;
    title: string;
    slug: string;
    image: string;
    structured_data: Record<string, any>;
    banner_image: string;
    meta_title: string;
    meta_description: string;

};

export type GalleryItem = {
    id: number;
    gallery: string;
    project: number;
};

export type ProjectDetailsResponse = {
    project: Project;
    gallery: GalleryItem[];
};