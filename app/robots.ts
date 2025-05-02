import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.HostName;

    return {
        rules: [
            {
                userAgent: '*', // Apply to all crawlers
                allow: ['/'],
                disallow: [], // Block sensitive areas
            }
        ],
        sitemap: `${baseUrl}/sitemap.xml`, // Link to your sitemap
    };
}