import ProjectsExperience from "@/components/projects/projects-experience"
import {getProjects, getProjectsPage} from "@/lib/PojectsPage"
import {Metadata} from "next";
import {Suspense} from "react";


export async function generateMetadata(): Promise<Metadata> {
    const page = await getProjectsPage();

    return {
        title: page.meta_title,
        description: page.meta_description,
        keywords: page.meta_keywords,
        openGraph: {
            title: page.og_title,
            description: page.og_description,
            images: [{url: process.env.API_URL + page.og_image}],
        },
    };
}

export default async function ProjectsPage() {
    const projects = await getProjects()
    const page = await getProjectsPage();

    return (
        <main className="bg-black text-white">
            <Suspense fallback={
                <div
                    className="h-screen w-full bg-[#030303] flex items-center justify-center text-gold">Loading...</div>
            }
            >
                <ProjectsExperience projects={projects} page={page}/>
            </Suspense>
        </main>
    )
}
