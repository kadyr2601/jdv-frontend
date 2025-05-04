import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {

    return {
        rules: [
            {
                userAgent: '*', // Apply to all crawlers
                allow: ['/'],
                disallow: [], // Block sensitive areas
            }
        ],
        sitemap: `https://site-preview.site/sitemap.xml`, // Link to your sitemap
    };
}