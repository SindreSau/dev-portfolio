// Tech data structure for icons and animations

export type TechData = {
    plane: number;
    name: string;
    iconifyPkg: string;
    iconifyIcon: string;
    size: string;
    top: string;
    left: string;
};

// Tech data structure for reuse across animations
export const techData: TechData[] = [
    // ===== MAIN LANGUAGES (PLANE 1 - NEAR) =====

    // TypeScript (Top)
    {
        plane: 1,
        name: 'TypeScript',
        iconifyPkg: 'logos',
        iconifyIcon: 'typescript-icon',
        size: '4',
        top: '15%',
        left: '40%',
    },

    // Python (Bottom Left)
    {
        plane: 1,
        name: 'Python',
        iconifyPkg: 'simple-icons',
        iconifyIcon: 'python',
        size: '4',
        top: '68%',
        left: '18%',
    },

    // C# (Bottom Right)
    {
        plane: 1,
        name: 'C#',
        iconifyPkg: 'devicon',
        iconifyIcon: 'csharp',
        size: '4',
        top: '68%',
        left: '72%',
    },

    // ===== FRAMEWORKS BY LANGUAGE (PLANE 2 - MID) =====

    // TypeScript Ecosystem (Top Area)
    {
        plane: 2,
        name: 'React',
        iconifyPkg: 'logos',
        iconifyIcon: 'react',
        size: '3',
        top: '27%',
        left: '32%',
    },
    {
        plane: 2,
        name: 'Next.js',
        iconifyPkg: 'ri',
        iconifyIcon: 'nextjs-line',
        size: '3',
        top: '33%',
        left: '45%',
    },
    {
        plane: 2,
        name: 'Vue',
        iconifyPkg: 'logos',
        iconifyIcon: 'vue',
        size: '3',
        top: '28%',
        left: '58%',
    },
    {
        plane: 2,
        name: 'Astro',
        iconifyPkg: 'devicon',
        iconifyIcon: 'astro',
        size: '3',
        top: '19%',
        left: '80%',
    },
    {
        plane: 2,
        name: 'Node.js',
        iconifyPkg: 'logos',
        iconifyIcon: 'nodejs-icon',
        size: '3',
        top: '41%',
        left: '78%',
    },
    {
        plane: 2,
        name: 'Hono',
        iconifyPkg: 'logos',
        iconifyIcon: 'hono',
        size: '3',
        top: '28%',
        left: '9%',
    },
    {
        plane: 2,
        name: 'Express',
        iconifyPkg: 'simple-icons',
        iconifyIcon: 'express',
        size: '3',
        top: '17%',
        left: '13%',
    },
    {
        plane: 2,
        name: 'Deno',
        iconifyPkg: 'logos',
        iconifyIcon: 'deno',
        size: '3',
        top: '22%',
        left: '70%',
    },
    {
        plane: 2,
        name: 'Bun',
        iconifyPkg: 'logos',
        iconifyIcon: 'bun',
        size: '3',
        top: '8%',
        left: '55%',
    },

    // Python Ecosystem (Bottom Left)
    {
        plane: 2,
        name: 'FastAPI',
        iconifyPkg: 'skill-icons',
        iconifyIcon: 'fastapi',
        size: '3',
        top: '62%',
        left: '10%',
    },
    {
        plane: 2,
        name: 'TensorFlow',
        iconifyPkg: 'logos',
        iconifyIcon: 'tensorflow',
        size: '3',
        top: '78%',
        left: '30%',
    },
    {
        plane: 2,
        name: 'PyTorch',
        iconifyPkg: 'logos',
        iconifyIcon: 'pytorch-icon',
        size: '3',
        top: '70%',
        left: '35%',
    },

    // C# Ecosystem (Bottom Right)
    {
        plane: 2,
        name: 'ASP.NET',
        iconifyPkg: 'devicon',
        iconifyIcon: 'dotnetcore',
        size: '3',
        top: '68%',
        left: '58%',
    },

    // ===== TOOLS & LIBRARIES (PLANE 3 - FAR) =====

    // Top (TypeScript ecosystem tools)
    {
        plane: 3,
        name: 'TailwindCSS',
        iconifyPkg: 'logos',
        iconifyIcon: 'tailwindcss-icon',
        size: '2.5',
        top: '15%',
        left: '25%',
    },

    // Bottom Right (C# ecosystem tools)
    {
        plane: 3,
        name: 'Docker',
        iconifyPkg: 'logos',
        iconifyIcon: 'docker-icon',
        size: '2.5',
        top: '65%',
        left: '80%',
    },
    {
        plane: 3,
        name: 'PostgreSQL',
        iconifyPkg: 'logos',
        iconifyIcon: 'postgresql',
        size: '2.5',
        top: '75%',
        left: '75%',
    },
    {
        plane: 3,
        name: 'OpenTelemetry',
        iconifyPkg: 'devicon',
        iconifyIcon: 'opentelemetry',
        size: '2.5',
        top: '63%',
        left: '52%',
    },
    {
        plane: 3,
        name: 'Git',
        iconifyPkg: 'mdi',
        iconifyIcon: 'git',
        size: '2.5',
        top: '60%',
        left: '85%',
    },
    {
        plane: 3,
        name: 'GitHub',
        iconifyPkg: 'mdi',
        iconifyIcon: 'github',
        size: '2.5',
        top: '70%',
        left: '90%',
    },
];

// Helper function to get the size class
export const getSizeClass = (size: string) => {
    return size === '2.5'
        ? 'size-10'
        : size === '3'
          ? 'size-12'
          : size === '4'
            ? 'size-16'
            : size === '4.5'
              ? 'size-20'
              : 'size-16';
};
