import { Lato, Jost } from 'next/font/google';

export const lato = Lato({
    subsets: ['latin'],
    weight: ['100', '300', '400', '700', '900'],
    style: ['normal', 'italic'],
    display: 'swap',
    fallback: ['Lato', 'sans-serif'], // Важно! Это сохраняет совместимость с CSS
    adjustFontFallback: false         // Отключаем автоматическую корректировку fallback
});

export const jost = Jost({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    display: 'swap',
    fallback: ['Jost', 'sans-serif'], // Важно! Это сохраняет совместимость с CSS
    adjustFontFallback: false         // Отключаем автоматическую корректировку fallback
});
