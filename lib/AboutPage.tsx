
export interface AboutPageDTO {
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
    welcome_section: string;
    welcome_section_stats: {
        value: string;
        label: string;
    }[];
    founder_image: string;
    founder_words: string;
    our_team_section_description: string;
    our_essence_section_title: string;
    our_essence_section_description: string;
    services_section_title: string;
    services_section_description: string;
    interior_design_service_description: string;
    interior_design_service_image: string;
    fit_out_service_description: string;
    fit_out_service_image: string;
    architecture_service_description: string;
    architecture_service_image: string;
    team_members: {
        id: number;
        name: string;
        position: string;
        image: string;
        bio: string;
    }[];
    our_essence: {
        id: number;
        title: string;
        content: string;
        image: string;
    }[];
}

export async function getAboutPage(): Promise<AboutPageDTO> {
    const res = await fetch(`${process.env.API_URL}/api/about/`, {cache: "no-cache"});
    if (!res.ok) {throw new Error('Failed to fetch about page');}
    return res.json();
}