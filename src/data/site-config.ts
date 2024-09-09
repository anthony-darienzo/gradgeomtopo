export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Graduate Geometry-Topology Seminar',
    subtitle: 'at the University of Illinois',
    description: 'gradgeomtopo@lists.illinois.edu',
    image: {
        src: '/Group.jpg',
        alt: 'Group photo of seminar attendees.'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Info',
            href: '/info'
        },
        {
            text: 'Talks',
            href: '/talks'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'Info',
            href: '/info'
        },
        {
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    hero: {
        title: 'Fall 2024',
        text: "We meet on Mondays, 1:00 to 1:50 PM, in Lincoln Hall 1027.",
        image: {
            src: '/Group.jpg',
            alt: 'Group photo of seminar attendees.'
        },
        actions: [
            {
                text: 'Join the seminar',
                href: '/info'
            }
        ]
    },
};

export default siteConfig;
