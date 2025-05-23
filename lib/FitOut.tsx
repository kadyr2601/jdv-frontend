interface FitOutExpertise {
    id: number;
    title: string;
    description: string;
    image: string;
    page: number;
}

interface TransformationProcess {
    id: number;
    title: string;
    description: string;
    image: string;
    page: number;
}

interface SpecializedService {
    id: number;
    title: string;
    description: string;
    page: number;
}

interface MoreInformationSection {
    id: number;
    title: string;
    description: string;
    image: string;
    page: number;
}

interface FitOutServiceDTO {
    id: number;
    fit_out_expertises: FitOutExpertise[];
    transformation_processes: TransformationProcess[];
    specialized_services: SpecializedService[];
    more_information_sections: MoreInformationSection[];
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    og_title: string;
    og_description: string;
    og_image: string;
    banner_image: string;
    banner_description: string;
    banner_title: string;
    banner_title_gold: string;
    banner_subtitle: string;
    about_service_title: string;
    about_service_description: string;
    about_service_image: string;
    fit_out_expertise_description: string;
    transformation_process_description: string;
    specialized_services_description: string;
    more_information_section_title: string;
    more_information_section_description: string;
}

export async function getFitoutPage(): Promise<FitOutServiceDTO> {
    const res = await fetch(`${process.env.API_URL}/api/services/fitout`, {cache: "no-cache"});
    if (!res.ok) {throw new Error('Failed to fetch fitout page');}
    return res.json();
}