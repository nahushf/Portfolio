import ATT5GLogo from '../public/AT&T-5g-logo.png';
import Farm2USplash from '../public/Farm2U-splash.png';
import TrupawsSplash from '../public/Trupaws-splash.png';
import CourtsideSplash from '../public/Courtside-splash.png';
import NetilionConserveSplash from '../public/netilion-conserve-splash.png';
import EHShortLogo from '../public/netilion-conserve/EH-short-logo.png';
import IULogo from '../public/iu-logo.png';
import QxRetailSplash from '../public/QxRetail-Splash.png';
import QxLogo from '../public/QxLogo.png';

const academicProjectBadge = {
    img: IULogo,
    tagline: 'Academic Project'
};
export const NETILION_CONSERVE = {
    id: 1,
    title: 'Netilion Conserve',
    description: 'Improved sustainability tracking for water treatment companies.',
    gradient: ['#36D1DC', '#5B86E5'],
    cssGradient: `linear-gradient(122.9deg, #36D1DC -30.49%, #5B86E5 135.04%)`,
    image: NetilionConserveSplash,
    route: '/projects/netilion-conserve',
    tags: ['Industry Project', 'Product Design'],
    badges: [{ img: EHShortLogo, tagline: 'Client - Endress and Hauser' }]
};

export const FARM2U = {
    id: 4,
    title: 'Farm2U',
    description: 'Connecting people to their local produce in an efficient manner',
    gradient: ['#58B96E', '#7DBD78'],
    image: Farm2USplash,
    route: '/projects/farm2u',
    tags: ['sustainability', 'Academic Project'],
    badges: [academicProjectBadge],
    comingSoon: true
};
// export const TRUPAWS = {
// id: 5,
// title: 'Trupaws',
// description: 'Matching adopters with shelter animals',
// gradient: ['#F7516F', '#FED089'],
// image: TrupawsSplash,
// route: '/projects/trupaws',
// tags: ['pet-adoption', 'Academic Project'],
// badges: [academicProjectBadge],
// comingSoon: true
// };

export const COURTSIDE = {
    id: 2,
    title: 'Courtside',
    description: 'Enhancing the basketball experience for the visually impaired',
    gradient: ['#F4A58A', '#ED6B4E'],
    image: CourtsideSplash,
    route: '/projects/courtside',
    tags: ['accessibility', 'hackathon'],
    badges: [{ img: ATT5GLogo, tagline: 'AT&T 5G Sports Hackathon Winner' }]
};
export const QXRETAIL = {
    id: 3,
    title: 'QxRetail',
    description: 'The eyes and ears in Hardware Retail Stores.',
    gradient: ['#3fb8f3', '#8eefd4'],
    image: QxRetailSplash,
    route: 'https://nahush-farkandes-dandy-site.webflow.io/projects/qxretail',
    tags: ['Industry Project', 'Product Design'],
    badges: [{ img: QxLogo, tagline: 'Client - Qumulex' }]
};

export const PROJECTS: IProject[] = [FARM2U, QXRETAIL, COURTSIDE, NETILION_CONSERVE];
