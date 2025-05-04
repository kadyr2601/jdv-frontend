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
