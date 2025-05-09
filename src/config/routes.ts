type Route = {
    path: string;
    name: string;
};

const ROUTES: Route[] = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'About me',
        path: '/about-me',
    },
    {
        name: 'Projects',
        path: '/projects',
    },
    {
        name: 'Experience & CV',
        path: '/experience-cv',
    },
];

export default ROUTES;
