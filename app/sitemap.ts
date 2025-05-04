import { MetadataRoute } from 'next';

type Project = {
    id: number;
    title: string;
    slug: string;
    card_image: string;
    structured_data?: Record<string, any>;
    banner_image?: string;
};

type Service = {
    id: number;
    name: string;
    slug: string;
    main_image: string;
};

const baseUrl = 'https://site-preview.site';

async function fetchProjects(): Promise<Project[]> {
    try {
        const res = await fetch(`${baseUrl}/api/projects/`, {
            next: { revalidate: 3600 },
        });
        if (!res.ok) {
            throw new Error('Failed to fetch projects');
        }
        const data = await res.json();
        return data.projects || [];
    } catch (error) {
        console.error('Error fetching projects for sitemap:', error);
        return [];
    }
}

async function fetchServices(): Promise<Service[]> {
    try {
        const res = await fetch(`${baseUrl}/api/services/`, {
            next: { revalidate: 3600 }, // Revalidate every hour
        });
        if (!res.ok) {
            throw new Error('Failed to fetch services');
        }
        return await res.json();
    } catch (error) {
        console.error('Error fetching services for sitemap:', error);
        return [];
    }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const currentDate = new Date().toISOString();

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/contacts`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];

    const projects = await fetchProjects();
    const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 1,
        // images: [
        //     `${baseUrl}${project.card_image}`,
        //     ...(project.banner_image ? [`${baseUrl}${project.banner_image}`] : []),
        // ],
    }));

    const services = await fetchServices();
    const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 1,
        // images: [
        //     `${baseUrl}${service.main_image}`,
        // ],
    }));

    return [...staticRoutes, ...projectRoutes, ...serviceRoutes];
}