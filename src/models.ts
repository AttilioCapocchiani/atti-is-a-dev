export interface Profile {
    name: string;
    jobTitle: string;
    company: string;
    country: string;

    jobHistory?: Experience[]
    certifications?: Certification[]
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