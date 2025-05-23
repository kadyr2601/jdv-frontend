// Interface for AdditionalExpertise
interface AdditionalExpertise {
    id: number;
    name: string;
    description: string;
    page: number;
}

// Interface for WorkProcess
interface WorkProcess {
    id: number;
    step: string;
    title: string;
    description: string;
    page: number;
}

// Interface for ArchitecturalService
interface ArchitecturalService {
    id: number;
    name: string;
    description: string;
    image: string;
    page: number;
}

// Interface for OurApproachStat
interface OurApproachStat {
    value: string;
    label: string;
}

interface ArchitecturePageDTO {
    id: number;
    additional_expertises: AdditionalExpertise[];
    work_processes: WorkProcess[];
    architectural_services: ArchitecturalService[];
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
    our_approach_title: string;
    our_approach_description: string;
    our_approach_image: string;
    our_approach_stats: OurApproachStat[];
    our_approach_slogan: string;
    featured_project_name: string;
    featured_project_description: string;
    featured_project_image_big: string;
    featured_project_image_small: string;
    featured_project_image_small_second: string;
    featured_project_location: string;
    featured_project_area: string;
    featured_project_year: string;
    featured_project_type: string;
}


export async function getArchitecturePage(): Promise<ArchitecturePageDTO> {
    const res = await fetch(`${process.env.API_URL}/api/services/architecture`, {cache: "no-cache"});
    if (!res.ok) {throw new Error('Failed to fetch architecture page');}
    return res.json();
}