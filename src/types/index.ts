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
    skills: string[],
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


export interface Code {
    title: string,
    description: string,
    codeUrl: URL,
    skills: string[],
}