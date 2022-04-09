import ATT5GLogo from '../public/AT&T-5g-logo.png';

export const PROJECTS: IProject[] = [
    {
        id: 2,
        title: 'Farm2U',
        description: 'Connecting people to their local produce in an efficient manner',
        gradient: ['#58B96E', '#7DBD78'],
        image: 'Farm2U-splash.png',
        route: '/projects/farm2u',
        tags: ['sustainability'],
    },
    {
        id: 3,
        title: 'Trupaws',
        description: 'Matching adopters with shelter animals',
        gradient: ['#F7516F', '#FED089'],
        image: 'Trupaws-splash.png',
        route: '/projects/trupaws',
        tags: ['pet-adoption']
    },
    {
        id: 1,
        title: 'Courtside',
        description: 'Enhancing the basketball experience for the visually impaired',
        gradient: ['#F4A58A', '#ED6B4E'],
        image: 'Courtside-splash.png',
        route: '/projects/courtside',
        tags: ['accessibility'],
        badges: [{img: ATT5GLogo, tagline: 'AT&T 5G Sports Hackathon Winner'}]
    }
];
