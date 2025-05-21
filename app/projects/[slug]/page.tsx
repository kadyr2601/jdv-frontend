import {notFound} from "next/navigation"
import {getProjectDetails} from "@/lib/PojectsPage"
import ProjectDetail from "@/components/projects/project-detail"


export async function generateMetadata({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params
    const data = await getProjectDetails(slug)

    if (!data) {
        return {
            title: "Project Not Found | Joie De Vivre",
            description: "The requested project could not be found.",
        }
    }
    return {
        title: data.project.meta_title,
        description: data.project.meta_description,
        openGraph: {
            title: data.project.meta_title,
            description: data.project.meta_description,
            images: [{url: process.env.API_URL + data.project.banner_image}],
        },
    };
}

export default async function ProjectDetailPage({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params
    const data = await getProjectDetails(slug)

    if (!data) {
        notFound()
    }

    return <ProjectDetail project={data.project} gallery={data.gallery} />
}
