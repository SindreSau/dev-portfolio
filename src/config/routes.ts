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
];

export default ROUTES;
