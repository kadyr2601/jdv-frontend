import type {Metadata} from "next"
import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import ContactMap from "@/components/contact/contact-map"
import {getContactPage} from "@/lib/ContactPage";


export async function generateMetadata(): Promise<Metadata> {
    const page = await getContactPage();

    return {
        title: page.meta_title,
        description: page.meta_description,
        keywords: page.meta_keywords,
        openGraph: {
            title: page.og_title,
            description: page.og_description,
            images: [{url: process.env.API_URL + page.og_image}],
        },
    };
}

export default async function ContactPage() {
    const page = await getContactPage()

    return (
        <main className="bg-black text-white">
            <ContactHero
                banner_description={page.banner_description}
                banner_title={page.banner_title}
                banner_slogan={page.banner_slogan}
            />
            <ContactInfo cn={page.call_number} ct={page.call_title} ea={page.email_address}
                         et={page.email_title} ld={page.location_description} lt={page.location_title}
                         whd={page.working_hours_description} wht={page.working_hours_title}
            />
            <ContactForm/>
            <ContactMap old={page.our_location_description}/>
        </main>
    )
}
