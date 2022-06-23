import ATT5GLogo from '../public/AT&T-5g-logo.png';
import Farm2USplash from '../public/Farm2U-splash.png';
import TrupawsSplash from '../public/Trupaws-splash.png';
import CourtsideSplash from '../public/Courtside-splash.png';
import NetilionConserveSplash from '../public/netilion-conserve-splash.png';
import EHShortLogo from '../public/netilion-conserve/EH-short-logo.png'

export const NETILION_CONSERVE = {
        id:1,
        title: 'Netilion Conserve',
        description: 'Improved sustainability tracking for water treatment companies.',
        gradient: ['#36D1DC', '#5B86E5'],
        cssGradient: `linear-gradient(122.9deg, #36D1DC -30.49%, #5B86E5 135.04%)`,
        image: NetilionConserveSplash,
        route: '/projects/netilion-conserve',
        tags: ['Industry Project', 'Product Design'],

        badges: [{ img: EHShortLogo, tagline: 'Client - Endress and Hauser' }]
    }

export const PROJECTS: IProject[] = [
    {
        id: 3,
        title: 'Farm2U',
        description: 'Connecting people to their local produce in an efficient manner',
        gradient: ['#58B96E', '#7DBD78'],
        image: Farm2USplash,
        route: '/projects/farm2u',
        tags: ['sustainability',  'Academic Project']
    },
    {
        id: 4,
        title: 'Trupaws',
        description: 'Matching adopters with shelter animals',
        gradient: ['#F7516F', '#FED089'],
        image: TrupawsSplash,
        route: '/projects/trupaws',
        tags: ['pet-adoption', 'Academic Project']
    },
    {
        id: 2,
        title: 'Courtside',
        description: 'Enhancing the basketball experience for the visually impaired',
        gradient: ['#F4A58A', '#ED6B4E'],
        image: CourtsideSplash,
        route: '/projects/courtside',
        tags: ['accessibility', 'hackathon'],
        badges: [{ img: ATT5GLogo, tagline: 'AT&T 5G Sports Hackathon Winner' }]
    },
    NETILION_CONSERVE
];

