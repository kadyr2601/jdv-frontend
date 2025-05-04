import '@/styles/font-override.css';
import '../styles/shortcodes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/animate.css';
import '../styles/bootstrap.min.css';
import '../styles/flaticon.css';
import '../styles/font-awesome.css';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/luxury-banner.css';
import '../styles/megamenu.css';
import '../styles/themify-icons.css';
import '../styles/twentytwenty.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopUpButton from "@/components/topUpButton";
import SocialMedias from "@/components/SocialMedias";
import { lato, jost } from '@/components/fonts';
import {Service} from "@/types/services";
import {Metadata} from "next";

export const metadata: Metadata = {
    icons: {
        icon: [
            { url: '/logo.png', type: 'image/png' },
        ],
        apple: [
            { url: '/logo.png', sizes: '180x180', type: 'image/png' },
        ],
    },
}


export default async function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    const API_URL = process.env.API_URL!

    // Fetch services for JSON-LD
    let services: Service[] = []
    try {
        const servicesRes = await fetch(`${API_URL}/api/services`, {
            cache: "no-cache",
            signal: AbortSignal.timeout(5000),
        })

        if (servicesRes.ok) services = await servicesRes.json().catch(() => [])
    } catch (e) {
        console.error("Services fetch error:", e)
    }

    // Create JSON-LD data
    const hasPart = [
        {
            "@type": "WebPage",
            name: "About Us",
            description: "Learn about JDV interior design studio in Dubai",
            url: `${API_URL}/about`,
        },
        {
            "@type": "WebPage",
            name: "Projects",
            description: "View our portfolio of interior design and architecture projects",
            url: `${API_URL}/projects`,
        },
        {
            "@type": "WebPage",
            name: "Contact Us",
            description: "Get in touch with our interior design team",
            url: `${API_URL}/contacts`,
        },
        ...(Array.isArray(services) && services.length > 0
            ? services.map((s) => ({
                "@type": "WebPage",
                name: s.name,
                description: s.description,
                url: `${API_URL}/services/${s.slug}`,
            }))
            : []),
    ]

    const websiteStructuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "JDV - Joie De Vivre",
        url: API_URL,
        hasPart,
    }

    const organizationData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "JDV - Joie De Vivre",
        url: API_URL,
        logo: `${API_URL}/media/logo.png`,
        description: "Interior design, fit-out, and architecture services in Dubai.",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Dubai",
            addressCountry: "UAE",
        },
        sameAs: [
            "https://www.instagram.com/jdv_dubai?igsh=aWl4cTAxM2RibHFu&utm_source=qr",
            "https://api.whatsapp.com/send/?phone=971554073275&text=Hello%2C%20I%20am%20interested%20in%20your%20interior%20design%20services.&app_absent=0",
        ],
    }
    return (
        <html lang="en">
        {/*<head>*/}
        {/*    <link*/}
        {/*        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"*/}
        {/*        rel="stylesheet"*/}
        {/*    />*/}
        {/*    <link*/}
        {/*        href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"*/}
        {/*        rel="stylesheet"*/}
        {/*    />*/}
        {/*</head>*/}
        <body className={`bootstrap-body page ttm-bgcolor-darkgrey ${lato.className} ${jost.className}`}>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
        <Header/>
        <div className="site-main">
            {children}
        </div>
        <SocialMedias/>
        <TopUpButton/>
        <Footer/>
        </body>
        </html>
    );
}
