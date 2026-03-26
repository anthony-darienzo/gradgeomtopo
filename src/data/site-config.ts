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
    semester: string;
    meetingTime: string;
    meetingLocation: string;
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
    semester: 'Spring 2026',
    meetingTime: 'Wednesdays, 2:00 to 2:50 PM',
    meetingLocation: 'Gregory Hall 219',
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
            text: 'Schedule',
            href: '/upcoming'
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
        title: 'Graduate Geometry and Topology Seminar',
        text: "at The University of Illinois",
        image: {
            src: '/Group.jpg',
            alt: 'Group photo of seminar attendees.'
        },
        actions: [
            {
                text: 'Schedule',
                href: '/upcoming'
            },
            {
                text: 'Join the seminar',
                href: '/info'
            }
        ]
    },
};

export default siteConfig;
