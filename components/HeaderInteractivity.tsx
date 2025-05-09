// app/components/HeaderInteractivity.tsx (Клиентский компонент)
'use client';
import { useState, useEffect } from 'react';

export default function HeaderInteractivity() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isServicesOpen) setIsServicesOpen(false);
    };

    const toggleServices = () => {
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

        // Добавляем обработчики событий к существующим элементам DOM
        document.addEventListener('click', handleOutsideClick);

        // Находим все ссылки Services и добавляем обработчик
        const servicesLinks = document.querySelectorAll('.mega-menu-item:nth-child(3) > a');
        servicesLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                toggleServices();
            });
        });

        // Находим все ссылки в меню и добавляем обработчик закрытия меню
        const menuLinks = document.querySelectorAll('.menu a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                setIsMenuOpen(false);
            });
        });

        return () => {
            document.removeEventListener('click', handleOutsideClick);
            // Очистка обработчиков при размонтировании
            servicesLinks.forEach(link => {
                link.removeEventListener('click', toggleServices);
            });
            menuLinks.forEach(link => {
                link.removeEventListener('click', () => setIsMenuOpen(false));
            });
        };
    }, [isMenuOpen, isServicesOpen]);

    // Добавляем классы к элементам DOM на основе состояния
    useEffect(() => {
        const menu = document.querySelector('.main-menu');
        const servicesSubmenu = document.querySelector('.mega-submenu');
        const servicesLink = document.querySelector('.mega-menu-item:nth-child(3) > a');

        if (menu) {
            if (isMenuOpen) {
                menu.classList.add('show');
            } else {
                menu.classList.remove('show');
            }
        }

        if (servicesSubmenu) {
            if (isServicesOpen) {
                servicesSubmenu.classList.add('active');
            } else {
                servicesSubmenu.classList.remove('active');
            }
        }

        if (servicesLink) {
            if (isServicesOpen) {
                servicesLink.classList.add('active');
            } else {
                servicesLink.classList.remove('active');
            }
        }
    }, [isMenuOpen, isServicesOpen]);

    return (
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
    );
}