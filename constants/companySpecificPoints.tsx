import roLogo from '../public/ro-logo.png';
import goDaddyLogo from '../public/GoDaddy-Logo.png';
import abelsonTaylorLogo from '../public/abelson-taylor-logo.png';
import squareTradeLogo from '../public/square-trade-logo.png';
import moserLogo from '../public/moser-logo.png';

interface ICompanyPoint {
    title: string;
    description: string;
}

class Company {
    companyPoints: ICompanyPoint[];
    mePoints: ICompanyPoint[];
    constructor(public companyName: string, public slug: string, public logo, public logoWidth: number) {}

    setCompanyPoints(companyPoints: ICompanyPoint[] | ((companyName: string) => ICompanyPoint[])) {
        this.companyPoints = companyPoints instanceof Function ? companyPoints(this.companyName) : companyPoints;
        return this;
    }

    setMePoints(mePoints: ICompanyPoint[] | ((companyName: string) => ICompanyPoint[])) {
        this.mePoints = mePoints instanceof Function ? mePoints(this.companyName) : mePoints;
        return this;
    }
}

export const COMPANIES = [
    new Company('Ro', 'ro', roLogo, 160)
        .setCompanyPoints((companyName) => [
            {
                title: 'I see the value in telehealth and healthcare',
                description: `
                Healthcare was always a rich field for me (in terms of the challenges and the room for design
                innovation). But Covid has made it clear that telehealth is the need of the hour and could use some
                innovation as well.
            `
            },
            {
                title: 'I wish to work in a design mature company',
                description: `${companyName}'s values, stature and growth attracts a lot of talent and would allow me to work with and learn from designers at the top of their game.`
            },
            {
                title: 'I want to understand the challenges in the healthcare domain',
                description:
                    'This opportunity would expose me to the world of healthcare and allow me to learn and empathize with users in a domain that I am not too experienced in.'
            }
        ])
        .setMePoints([
            {
                title: 'Philosophy: Be the dumbest person in the room',
                description:
                    'I am a strong believer in the "dumbest person in the room philosophy". If one wishes to grow he needs to work with people who are more skilled.'
            },
            {
                title: 'Quick Learner',
                description:
                    'I have a passion for learning and often enjoy being thrown into environments I possess little to no knowledge of'
            },
            {
                title: 'Extensive closely related experience',
                description:
                    'Even thought I am just starting my professional design journey, I have worked and led multiple teams in the past 6 years when I worked as a front end developer and collaborated with multiple of UI/UX and Product Designers'
            }
        ]),
    new Company('GoDaddy', 'godaddy', goDaddyLogo, 300)
        .setCompanyPoints((companyName) => [
            {
                title: `${companyName}'s reputation preceeds itself`,
                description: `GoDaddy's reputation as a company with a strong design culture preceeds itself. I have a large number of people in my network who have worked in GoDaddy and the growth that they have experienced in the company is something that strongly attracts me to the company`
            },
            {
                title: 'I wish to work in a design mature company',
                description: `${companyName}'s values, stature and growth attracts a lot of talent and would allow me to work with and learn from designers at the top of their game.`
            },
            {
                title: `I wish to understand ${companyName}'s users and their challenges`,
                description: `I am curious about what sort of challenges ${companyName}'s users face. I am aware of how and what the company works on and as someone who has not worked in the web-domain sale market, I wish to understand and empathize with the users of the service. `
            }
        ])
        .setMePoints([
            {
                title: 'Philosophy: Be the dumbest person in the room',
                description:
                    'I am a strong believer in the "dumbest person in the room philosophy". If one wishes to grow he needs to work with people who are more skilled.'
            },
            {
                title: 'Quick Learner',
                description:
                    'I have a passion for learning and often enjoy being thrown into environments I possess little to no knowledge of'
            },
            {
                title: 'Extensive closely related experience',
                description:
                    'Even thought I am just starting my professional design journey, I have worked and led multiple teams in the past 6 years when I worked as a front end developer and collaborated with multiple of UI/UX and Product Designers'
            }
        ]),
    new Company('Abelson Taylor', 'abelson-taylor', abelsonTaylorLogo, 160)
        .setCompanyPoints((companyName) => [
            {
                title: 'I see the value in the healthcare domain',
                description: `
                Healthcare was always a rich field for me (in terms of the challenges and the room for design
                innovation). But Covid has made it clear that telehealth is the need of the hour and could use some
                innovation as well.
            `
            },
            {
                title: 'I wish to work in a design mature company',
                description: `${companyName}'s values, stature and growth attracts a lot of talent and would allow me to work with and learn from designers at the top of their game.`
            },
            {
                title: 'I want to understand the challenges in the healthcare domain',
                description:
                    'This opportunity would expose me to the world of healthcare and allow me to learn and empathize with users in a domain that I am not too experienced in.'
            }
        ])
        .setMePoints([
            {
                title: 'Philosophy: Be the dumbest person in the room',
                description:
                    'I am a strong believer in the "dumbest person in the room philosophy". If one wishes to grow he needs to work with people who are more skilled.'
            },
            {
                title: 'Quick Learner',
                description:
                    'I have a passion for learning and often enjoy being thrown into environments I possess little to no knowledge of'
            },
            {
                title: 'Extensive closely related experience',
                description:
                    'Even thought I am just starting my professional design journey, I have worked and led multiple teams in the past 6 years when I worked as a front end developer and collaborated with multiple of UI/UX and Product Designers'
            }
        ]),
    new Company('SquareTrade', 'square-trade', squareTradeLogo, 200)
        .setCompanyPoints((companyName) => [
            {
                title: 'I see the value in the device-protection and warranty domain',
                description: `
                It is no surprise that the number of devices per person is growing at an exponential pace. But with the increase in the new devices, the accidents with those devices have grown at an even faster rate. It is evident how important the field of device protection is and this is the reason why I wish to design products in this domain.
            `
            },
            {
                title: 'I wish to learn about the new and upcoming innovations in this domain',
                description: `I am curious to know what's next in this domain. As this market will continue to grow, it will keep bringing up new challenges and I wish to learn and contribute to this problems.`
            },
            {
                title: 'I want to understand the challenges in the warranty domain',
                description:
                    'This opportunity would expose me to the world of device protection and warranty and allow me to learn and empathize with users in a domain that I am not too experienced in.'
            }
        ])
        .setMePoints([
            {
                title: 'Philosophy: Be the dumbest person in the room',
                description:
                    'I am a strong believer in the "dumbest person in the room philosophy". If one wishes to grow he needs to work with people who are more skilled.'
            },
            {
                title: 'Quick Learner',
                description:
                    'I have a passion for learning and often enjoy being thrown into environments I possess little to no knowledge of'
            },
            {
                title: 'Extensive closely related experience',
                description:
                    'Even thought I am just starting my professional design journey, I have worked and led multiple teams in the past 6 years when I worked as a front end developer and collaborated with multiple of UI/UX and Product Designers'
            }
        ]),
    new Company('Moser Consulting', 'moser', moserLogo, 300)
        .setCompanyPoints((companyName) => [
            {
                title: 'I see the value in the tech consulting domain and in a customer first company',
                description: `
                Coming from a background in tech and having had worked in multiple consulting firms, I am aware of the challenges and the rewards of working in the IT consulting domain.             `
            },
            {
                title: `${companyName}'s values`,
                description: `${companyName}'s focus on customer satisfaction and the endorsements from it's past customers makes the company stand out.
`
            }
        ])
        .setMePoints([
            {
                title: 'Philosophy: Be the dumbest person in the room',
                description:
                    'I am a strong believer in the "dumbest person in the room philosophy". If one wishes to grow he needs to work with people who are more skilled.'
            },
            {
                title: 'Quick Learner',
                description:
                    'I have a passion for learning and often enjoy being thrown into environments I possess little to no knowledge of'
            },
            {
                title: 'Extensive closely related experience',
                description:
                    'Even thought I am just starting my professional design journey, I have worked and led multiple teams in the past 6 years when I worked as a front end developer and collaborated with multiple of UI/UX and Product Designers'
            }
        ])
];
