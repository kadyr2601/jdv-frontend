export interface Expertise {
    id: number;
    name: string;
    slogan: string;
    description: string;
    image: string;
    page: number;
}

export interface Methodology {
    id: number;
    name: string;
    description: string;
    image: string;
    page: number;
}

export interface ExperienceStat {
    value: string;
    label: string;
}

export interface InteriorDesignDTO {
    id: number;
    expertises: Expertise[];
    methodologies: Methodology[];
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
    banner_title_gold: string;
    banner_subtitle: string;
    experience_header: string;
    experience_title: string;
    experience_description: string;
    experience_image: string;
    experience_stats: ExperienceStat[];
    experience_slogan: string;
    our_expertise_title: string;
    our_expertise_description: string;
    our_methodology_title: string;
    our_methodology_description: string;
}


export async function getInteriorPage(): Promise<InteriorDesignDTO> {
    const res = await fetch(`${process.env.API_URL}/api/services/interior`, {cache: "no-cache"});
    if (!res.ok) {throw new Error('Failed to fetch interior page');}
    return res.json();
}