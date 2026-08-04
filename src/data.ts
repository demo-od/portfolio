import type {Certificate, Project} from "./types.ts";

export const certificates: Certificate[] = [
    {
        title: 'HTML Developer Certification',
        issuer: 'W3Schools',
        date: '2022',
        credentialUrl: 'https://verify.w3schools.com/1MV9RZ6WOS',
    },
    {
        title: 'CSS Developer Certification',
        issuer: 'W3Schools',
        date: '2022',
        credentialUrl: 'https://verify.w3schools.com/1N9U4TCV01',
    },
    {
        title: 'Professional JavaScript Developer Certification',
        issuer: 'W3Schools',
        date: '2024',
        credentialUrl: 'https://verify.w3schools.com/1P5EITSOR6',
    },
    {
        title: 'Front-end Developer Certification',
        issuer: 'W3Schools',
        date: '2024',
        credentialUrl: 'https://verify.w3schools.com/1O1DO2HW9X',
    },
    {
        title: 'PHP Developer Certification',
        issuer: 'W3Schools',
        date: '2024',
        credentialUrl: 'https://verify.w3schools.com/1OL53222D9',
    },
    {
        title: 'SQL Developer Certification',
        issuer: 'W3Schools',
        date: '2022',
        credentialUrl: 'https://verify.w3schools.com/1MWTTX83QE',
    },
    {
        title: 'Advanced SQL Developer Certification',
        issuer: 'W3Schools',
        date: '2024',
        credentialUrl: 'https://verify.w3schools.com/1OLBS1NN4C',
    },
    {
        title: 'Web Application Developer Certification',
        issuer: 'W3Schools',
        date: '2024',
        credentialUrl: 'https://verify.w3schools.com/1OL5324YAL',
    },
];

export const navLinks = [
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export const projects: Project[] = [
    {
        title: 'Full-Stack Project Management Website',
        description:
            'A fully functional project management website with real-time authentication with email verification, role based authentication, role-based access control, real-time messaging, and task management.',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Express.js', 'PostgreSQL', 'Drizzle'],
        liveUrl: 'https://worksync-gamma.vercel.app/',
        githubUrl: 'https://github.com/demo-od/worksync',
    },
    {
        title: 'Multi-author blogging site',
        description:
            'A collaborative blogging platform with user authentication, markdown post creation, image uploading with cloudinary, and social features like likes and follows.',
        tags: ['PHP', 'Laravel', 'PostgreSQL', 'Tailwind CSS', 'AlpineJS'],
        liveUrl: 'https://demolog-0mmo.onrender.com',
        githubUrl: 'https://github.com/demo-od/demolog',
    },
    {
        title: 'Real-estate landing page',
        description:
            'A real-estate landing page beautifully designed and built with tailwind css and react.',
        tags: ['Tailwind CSS', 'React', 'JavaScript'],
        liveUrl: 'https://real-estate-kv95.onrender.com/',
        githubUrl: 'https://github.com/demo-od/real-estate',
    },
];

export const skillCategories = [
    {
        title: 'Frontend & UI',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Framer Motion'],
    },
    {
        title: 'Backend Development',
        skills: ['Express.js', 'PHP', 'Laravel', 'REST APIs'],
    },
    {
        title: 'Databases & ORMs',
        skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQL', 'Drizzle ORM'],
    },
    {
        title: 'Tools & Workflow',
        skills: ['Git', 'GitHub', 'Vite', 'Postman', 'WebStorm'],
    },
];
