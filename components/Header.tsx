// app/components/Header.tsx (Серверный компонент)
import Image from 'next/image';
import Link from 'next/link';
import logo1 from '@/public/jdv-logo1.png';
import logo from '@/public/logo.png';
import HeaderInteractivity from './HeaderInteractivity';

type PageData = { id: number; name: string; slug: string };

export default function Header({ services }: { services: PageData[] }) {
    return (
        <header id="masthead" className="header ttm-header-style-01">
            <div id="site-header-menu" className="site-header-menu">
                <div className="site-header-menu-inner ttm-stickable-header fixed-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="site-navigation d-flex flex-row align-items-center justify-content-between">
                                    <div className="site-branding">
                                        <Link href="/" className="home-link" title="JDV">
                                            <Image
                                                id="logo-img"
                                                width={100}
                                                height={20}
                                                style={{ padding: '3px' }}
                                                className="img-fluid"
                                                src={logo1 || "/placeholder.svg"}
                                                alt="JDV Logo"
                                            />
                                        </Link>
                                        <Link href="/" className="home-link" title="JDV">
                                            <Image
                                                id="logo-mobile"
                                                width={100}
                                                height={20}
                                                style={{ padding: '3px' }}
                                                className="img-fluid"
                                                src={logo || "/placeholder.svg"}
                                                alt="JDV Mobile Logo"
                                            />
                                        </Link>
                                    </div>

                                    <div className="d-flex flex-row">
                                        {/* Клиентский компонент для интерактивности */}
                                        <HeaderInteractivity />

                                        {/* Серверная навигация - видима поисковым ботам */}
                                        <nav className="main-menu" id="menu">
                                            <ul className="menu">
                                                <li className="mega-menu-item">
                                                    <Link href="/">Home</Link>
                                                </li>
                                                <li className="mega-menu-item">
                                                    <Link href="/about">About us</Link>
                                                </li>
                                                <li className="mega-menu-item">
                                                    <Link href="/services">Services</Link>
                                                    <ul className="mega-submenu">
                                                        {services.map((service) => (
                                                            <li key={service.id}>
                                                                <Link href={`/services/${service.slug}`}>
                                                                    {service.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                                <li className="mega-menu-item">
                                                    <Link href="/projects">Projects</Link>
                                                </li>
                                                <li className="mega-menu-item">
                                                    <Link href="/contacts">Contact Us</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                        <div className="header_extra d-flex flex-row align-items-center justify-content-end">
                                            <div className="header_btn">
                                                <Link
                                                    className="ttm-btn ttm-btn-size-md btn-inline ttm-icon-btn-right ttm-btn-color-skincolor"
                                                    href="https://api.whatsapp.com/send/?phone=971554073275&text=Hello%2C%20I%20am%20interested%20in%20your%20interior%20design%20services.&app_absent=0"
                                                >
                                                    Get A Quote!
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}