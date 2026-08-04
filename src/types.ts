export interface Certificate {
    title: string;
    issuer: string;
    date: string;
    credentialUrl?: string;
}

export interface NavbarProps {
    darkMode: boolean;
    setDarkMode: (val: boolean) => void;
}

export interface Project {
    title: string;
    description: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
}
