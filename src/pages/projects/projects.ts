import bachelor from '@/assets/images/bachelor-admin.png';
import coding from '@/assets/images/coding-illustration.jpeg';
import furekunst from '@/assets/images/furekunst.png';
import gamenamegen from '@/assets/images/gamenamegen.png';

type Project = {
    name: string;
    transitionName?: string;
    description: string;
    longDescription?: string;
    url: string;
    projectUrl?: string;
    image: ImageMetadata;
    tech?: string[];
};

const projects: Project[] = [
    {
        name: 'Developer Portfolio',
        transitionName: 'developer-portfolio',
        description:
            'My personal portfolio website. Built with Astro, Tailwind CSS, and TypeScript.',
        longDescription: `
        A modern, performant portfolio website showcasing my work
                    and experience as a developer, built with cutting-edge web
                    technologies.
        `,
        url: '/projects/developer-portfolio',
        image: coding,
        tech: ['TypeScript', 'Astro', 'Tailwind CSS', 'GSAP'],
    },
    {
        name: 'Furekunst',
        transitionName: 'furekunst',
        description:
            'A React/Next.js website made for a Norwegian artist - who also happens to be my girlfriend.',
        longDescription: `
        A React/Next.js website made for a Norwegian artist - who also happens
        to be my significant other. The website is a portfolio portfolio of original paintings and prints in an elegant, gallery-like experience. The site enables visitors to browse artwork, examine details of each piece, and connect with the artist for purchases or personal customized artworks.
        `,
        url: '/projects/furekunst',
        projectUrl: 'https://furekunst.no',
        image: furekunst,
        tech: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS'],
    },
    {
        name: 'Game Character Name Generator',
        transitionName: 'game-character-name-generator',
        description:
            'AI powered name generator for game characters. Built with Next.js and Cloudflare AI-workers.',
        longDescription: `
        A web application powered by AI that helps users generate unique names for game characters. Originally built as a project to explore Nuxt and Hono, it was later rebuilt using Next.js and Cloudflare AI Workers. The aim was to create a fully AI-driven app that remains completely free to use by leveraging cost-free tools for both AI processing and web hosting.
        `,
        url: '/projects/game-character-name-generator',
        projectUrl: 'https://gamenamegen.site',
        image: gamenamegen,
        tech: ['Next.js', 'Cloudflare AI-workers'],
    },
    {
        name: 'Bachelor Project - Accenture',
        transitionName: 'bachelor-project-accenture',
        description:
            'Development of a dashboard an an application portal for Accenture. Built with React, Next.js, and Tailwind CSS.',
        url: '/projects/bachelor-project-accenture',
        projectUrl: 'https://bachelorproject.sindresau.me',
        image: bachelor,
        tech: ['React', 'Next.js', 'Tailwind CSS'],
    },
];

export default projects;
export type { Project };
export { projects };

// Export each entry as a project
export const developerPortfolioProject = projects[0];
export const furekunstProject = projects[1];
export const gameNameGenProject = projects[2];
export const bachelorProjectAccenture = projects[3];
