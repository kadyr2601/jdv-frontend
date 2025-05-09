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
import {Metadata} from "next";
import {Service} from "@/types/services";

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

    async function getServices(): Promise<Service[]> {
        const res = await fetch(`${process.env.API_URL}/api/services/`, { cache: "no-cache" });
        return res.json();
    }

    // Получаем сервисы
    const services = await getServices();

    return (
        <html lang="en">
        <body className={`bootstrap-body page ttm-bgcolor-darkgrey ${lato.className} ${jost.className}`}>
        <Header services={services} />
        <div className="site-main">
            {children}
        </div>
        <SocialMedias/>
        <TopUpButton/>
        <Footer services={services} />
        </body>
        </html>
    );
}
