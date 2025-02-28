export interface landingPage {
    title: string;
    ingress: any;
}

export interface service {
    title: string;
    ingress: string;
    description: any;
    link: string;
    linkText: string;
    image: any;
    currentSlug: string;
    contactPerson: employee[];
}

export interface employee {
    title: string;
    email: string;
    phone: string;
    image: any;
    linkedin: string;
    bio: any;
    city: string;
}