'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import logo1 from '@/public/jdv-logo1.png';
import logo from '@/public/logo.png';

type PageData = { id: number; name: string; slug: string };

export default function HeaderClient() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [services, setServices] = useState<PageData[]>([]); // State for services
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const [error, setError] = useState<string | null>(null); // Error state

    // Fetch services data on mount
    useEffect(() => {
        const fetchServices = async () => {
            try {
                setIsLoading(true);
                const res = await fetch(`${process.env.API_URL}/api/services/`, {
                    cache: 'no-cache',
                });
                if (!res.ok) {
                    throw new Error('Failed to fetch services');
                }
                const data: PageData[] = await res.json();
                setServices(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setIsLoading(false);
            }
        };

        fetchServices();
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isServicesOpen) setIsServicesOpen(false);
    };
    const toggleServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // e.preventDefault();
        setIsServicesOpen(!isServicesOpen);
    };

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            const target = e.target as Element;
            if (
                isMenuOpen &&
                !target.closest('.menu-mobile') &&
                !target.closest('.btn-show-menu-mobile')
            ) {
                setIsMenuOpen(false);
                setIsServicesOpen(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, [isMenuOpen]);

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
                                                src={logo1}
                                                alt="logo-img"
                                            />
                                        </Link>
                                        <Link href="/" className="home-link" title="JDV">
                                            <Image
                                                id="logo-mobile"
                                                width={100}
                                                height={20}
                                                style={{ padding: '3px' }}
                                                className="img-fluid"
                                                src={logo}
                                                alt="logo-img"
                                            />
                                        </Link>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <div
                                            className="btn-show-menu-mobile menubar menubar--squeeze"
                                            onClick={toggleMenu}
                                            role="button"
                                            aria-expanded={isMenuOpen}
                                            aria-label="Toggle mobile menu"
                                        >
                                      <span className="menubar-box">
                                        <span className="menubar-inner"></span>
                                      </span>
                                        </div>
                                        <nav
                                            className={`main-menu menu-mobile ${isMenuOpen ? 'show' : ''}`}
                                            id="menu"
                                        >
                                            <ul className="menu">
                                                <li className="mega-menu-item">
                                                    <Link href="/" onClick={() => setIsMenuOpen(false)}>
                                                        Home
                                                    </Link>
                                                </li>
                                                <li className="mega-menu-item">
                                                    <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                                                        About us
                                                    </Link>
                                                </li>
                                                <li className="mega-menu-item">
                                                    <Link
                                                        href="#"
                                                        className={`mega-menu-link ${isServicesOpen ? 'active' : ''}`}
                                                        onClick={toggleServices}
                                                    >
                                                        Services
                                                    </Link>
                                                    <ul className={`mega-submenu ${isServicesOpen ? 'active' : ''}`}>
                                                        {isLoading ? (
                                                            <li>Loading services...</li>
                                                        ) : error ? (
                                                            <li>Error: {error}</li>
                                                        ) : services.length > 0 ? (
                                                            services.map((service) => (
                                                                <li key={service.id}>
                                                                    <Link
                                                                        href={`/services/${service.slug}`}
                                                                        onClick={() => setIsMenuOpen(false)}
                                                                    >
                                                                        {service.name}
                                                                    </Link>
                                                                </li>
                                                            ))
                                                        ) : (
                                                            <li>No services available</li>
                                                        )}
                                                    </ul>
                                                </li>
                                                <li className="mega-menu-item">
                                                    <Link href="/projects" onClick={() => setIsMenuOpen(false)}>
                                                        Projects
                                                    </Link>
                                                </li>
                                                <li className="mega-menu-item">
                                                    <Link href="/contacts" onClick={() => setIsMenuOpen(false)}>
                                                        Contact Us
                                                    </Link>
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