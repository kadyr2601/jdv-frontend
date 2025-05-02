export type Service = {
    id: number;
    title: string;
    image: string;
    name: string;
    page_title: string;
    main_image: string;
    description: string;
    slug: string;
};

type Maintenance = {
    id: number;
    title: string;
    image: string;
    service: number;
    text: string;
};

export type ServiceData = {
    service: Service;
    maintenances: Maintenance[];
};
