
export interface ContactPageDto {
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
    location_title: string;
    location_description: string;
    call_title: string;
    call_number: string;
    email_title: string;
    email_address: string;
    working_hours_title: string;
    working_hours_description: string;
    our_location_description: string;
}

export async function getContactPage(): Promise<ContactPageDto> {
    const res = await fetch(`${process.env.API_URL}/api/others/contact`, {cache: "no-cache"});
    if (!res.ok) {throw new Error('Failed to fetch contact page');}
    return res.json();
}