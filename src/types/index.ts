export interface Certification {
    title: string;
    provider: string;
    issued: string;
    url: URL;
}

export interface PreviousWork {
    role: string;
    company: string;
    start: string;
    end: string,
    description: string,
    location: string,
}

export interface Project {
    title: string,
    description: string,
    liveUrl: URL,
    codeUrl: URL,
}

export interface Skill {
    title: string,
    iconUrl: string,
}

export interface Publication {
    title: string,
    publicationBook: string,
    issueYear: string,
    url: URL,
    description: string,
}

export interface Introduction {
    name: string,
    description: string,
    github: URL,
    linkedin: URL,
    photo: string,
    location: string,
    email: string,
}