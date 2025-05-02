'use client';
import React from 'react';
import Link from 'next/link';

interface SocialMediaLink {
    icon: string; // Class name for the icon (e.g., "fa fa-star")
    href: string;
    label: string;
    positionClass: string;
    ariaLabel: string;
}

const socialMediaLinks: SocialMediaLink[] = [
    {
        icon: 'fa fa-instagram',
        href: 'https://www.instagram.com/jdv_dubai?igsh=aWl4cTAxM2RibHFu&utm_source=qr',
        label: 'Follow us!',
        positionClass: 'float-ig',
        ariaLabel: 'Follow us on Instagram',
    },
    {
        icon: 'fa fa-whatsapp',
        href: 'https://api.whatsapp.com/send/?phone=971554073275&text=Hello%2C%20I%20am%20interested%20in%20your%20interior%20design%20services.&app_absent=0',
        label: 'Message us!',
        positionClass: 'float-fb',
        ariaLabel: 'Message us on WhatsApp',
    },
    {
        icon: 'fa fa-star',
        href: 'https://jdv.ae/review',
        label: 'Review us!',
        positionClass: 'float-gp',
        ariaLabel: 'Leave a review',
    },
];

const SocialMedias: React.FC = () => {
    return (
        <div className="float-sm">
            {socialMediaLinks.map((link, index) => (
                <div key={index} className={`fl-fl ${link.positionClass}`}>
                    <i className={`${link.icon} social-icon`}></i>
                    <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label={link.ariaLabel}
                    >
                        {link.label}
                    </Link>
                </div>
            ))}
            <style jsx>{`
                /* Floating Social Media Bar Styles */
                .float-sm {
                    /* Wrapper for floating social media bar */
                }

                .fl-fl {
                    background: #000000;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    padding-left: 5px;
                    width: 193px;
                    position: fixed;
                    right: -148px;
                    z-index: 1000;
                    font: normal normal 10px Arial, sans-serif;
                    transition: all 0.25s ease;
                    display: flex;
                    align-items: center;
                }

                .fl-fl:hover {
                    right: 0;
                }

                .float-ig {
                    top: 200px;
                }

                .float-fb {
                    top: 255px;
                }

                .float-gp {
                    top: 310px;
                }

                .social-link {
                    color: #fff !important;
                    text-decoration: none;
                    text-align: center;
                    line-height: 43px;
                    vertical-align: top;
                    flex-grow: 1;
                }

                .social-icon {
                    font-size: 20px;
                    color: #fff;
                    padding: 10px 0;
                    width: 40px;
                    text-align: center;
                }
            `}</style>
        </div>
    );
};

export default SocialMedias;