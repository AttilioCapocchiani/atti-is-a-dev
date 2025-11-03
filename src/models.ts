export interface Profile {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    jobTitle: string;
    company: string;
    country: string;
    links: Links;

    education: string;
    description: string;

    jobHistory?: Experience[]
    certifications?: Certification[]

    lookingForJob: boolean
}

export interface Experience {
    role: string;
    company: string;
    period: string;
    description: string;
    expanded: boolean;
    details: Position[];
}

export interface Position {
    client: string;
    expanded: boolean;
    details: ExperienceDetail[];
}

export interface ExperienceDetail {
    role: string;
    expanded: boolean;
    content: string[];
}

export interface Certification {
    name: string;
    issuer: string;
}

export interface Links {
    linkedIn: string;
    trailhead: string;
}