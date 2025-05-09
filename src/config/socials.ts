const socials = [
    {
        name: 'Email',
        url: `mailto:${import.meta.env.PUBLIC_EMAIL || 'sindre.sauarlia@gmail.com'}`,
        icon: 'mdi:email',
    },
    {
        name: 'GitHub',
        url: 'https://github.com/sindresau',
        icon: 'mdi:github',
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/sindre-sauarlia/',
        icon: 'mdi:linkedin',
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/sindresauarlia/',
        icon: 'mdi:instagram',
    },
];

const email = socials.find(social => social.name === 'Email');
const github = socials.find(social => social.name === 'GitHub');
const linkedin = socials.find(social => social.name === 'LinkedIn');
const instagram = socials.find(social => social.name === 'Instagram');

export default socials;
export { email, github, linkedin, instagram };
