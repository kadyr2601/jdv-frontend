
type Project = {
    id: number;
    title: string;
    slug: string;
    card_image: string;
};
type Banner = {
    id: number;
    title: string;
    image: string;
};

export type ProjectsPageData = {
    projects: Project[];
    banner: Banner | null;
};
