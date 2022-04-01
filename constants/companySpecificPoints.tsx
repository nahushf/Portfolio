import roLogo from '../public/ro-logo.png';
import goDaddyLogo from '../public/GoDaddy-Logo.png';
import abelsonTaylorLogo from '../public/abelson-taylor-logo.png';
import squareTradeLogo from '../public/square-trade-logo.png';
import moserLogo from '../public/moser-logo.png';
import vsaLogo from '../public/vsa-logo.png';
import homelisterLogo from '../public/homelister-logo.png';
import bradfordLogo from '../public/bradford-logo.png';
import brainCorpLogo from '../public/braincorp-logo.jpeg';
import redditLogo from '../public/reddit-logo.png';
import dotdashLogo from '../public/dotdash-logo.png';

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
                description: `I am curious to know what's next in this domain. As this market will continue to grow, it will keep bringing up new challenges and I wish to learn and contribute to these problems.`
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
        ]),
    new Company('VSA Partners', 'vsa', vsaLogo, 300)
        .setCompanyPoints((companyName) => [
            {
                title: 'I am attracted to the quality of people and the kind of work that takes place at VSA',
                description: `
                After looking through the projects that the company has worked on and the people that work in the company, I am fascinated by how well the designs came out (Especially the branding for the Breckenridge brewery). This is the reason why I am curious about the processes and the workflows that the company follows.    
            `
            },
            {
                title: `The range of Design Domains that the company works on`,
                description: `${companyName}'s about page outlines the variety of domains that the company works on. As someone who enjoys all forms of design I wish to work in a company that has so much depth in the world of design and ${companyName} perfectly fits the description.`
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
    new Company('HomeLister', 'homelister', homelisterLogo, 300)
        .setCompanyPoints((companyName) => [
            {
                title: 'I wish to learn about the new and upcoming innovations in this domain',
                description: `I am curious to know what's next in this domain. As this market continues to grow, it will keep bringing up new challenges and I wish to learn and contribute to these problems.`
            },
            {
                title: 'I like the clean and simple UI of the website',
                description: `
                For me a good reflection of the design culture of a company is their own website. The clean and to-the-point interface of the company conveys a culture where design is valued and this is the kind of company I wish to work in.
            `
            },
            {
                title: `The expanse of ${companyName}'s business`,
                description: `The number of cities that ${companyName} conducts it's business in is something that strongly attracts me to the company. With such an expansive business the company is bound to face numerous challenges which could potentially be solved by design. As we say in the design world "mo' problems mo' design"`
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
    new Company('The Bradford Exchange', 'bradford', bradfordLogo, 300)
        .setCompanyPoints((companyName) => [
            {
                title: 'I wish to learn about the new and upcoming innovations in this domain',
                description: `I am curious to know what's next in this domain. As this market continues to grow, it will keep bringing up new challenges and I wish to learn and contribute to these problems.`
            },
            {
                title: 'I like the clean and simple UI of the website',
                description: `
                For me a good reflection of the design culture of a company is their own website. The clean and to-the-point interface of the company conveys a culture where design is valued and this is the kind of company I wish to work in.
            `
            },
            {
                title: `The creativity involved in each of the company's businesses`,
                description: `As someone who absolutely loves sketching and art in any form. I am fascinated by the highly artistic work that is undertaken by the company. `
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
            }
        ]),
    new Company('Brain Corp', 'braincorp', brainCorpLogo, 300)
        .setCompanyPoints((companyName) => [
            {
                title: 'I am interested in the world of autonomous robots',
                description: `I have been interested in the field of autonomous robots for quite a while now. I believe the field poses some unique design challenges (something I am always on the hunt for). As an example of the ideas that I think of in this field, I have always thought the household kitchen holds a massive room for automation. With most food recipes following specific steps, Automation in this area can free up time for any individual and can thus be a rich market for autonomous robots.`
            },
            {
                title: `The company's values and perks are very attractive`,
                description: `
                Everything that the company offers all the way from Game Nights to Daily lunches, paint the picture of a company where employees are well taken care of. Working in a company like this would not only help me work better but also will keep me motivated to contribute to the company in any way I can
            `
            },
            {
                title: `The creativity involved in each of the company's solutions`,
                description: `I really like how well thought out the solutions constructed by the company are. Coming from a background in tech I was obviously the most intrigued by the BrainOS. I like how well rounded the OS is keeping in most, if not all, the use cases of an autonomous robot`
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
    new Company('Reddit', 'reddit', redditLogo, 200)
        .setCompanyPoints((companyName) => [
            {
                title: `${companyName}'s reputation preceeds itself'`,
                description: `${companyName}'s name is pretty famous among the youth. As someone who is still relatively young, I have had the opportunity to interact with a number of redditers. The company projects youth and energy and is therefore a company I wish to work in'`
            },
            {
                title: `I wish to learn about the ${companyName}'s new and upcoming innovations `,
                description: `With an already well established product in place, I am curious to know what's next for the company`
            },
            {
                title: `I wish to work with designers at the top of their game`,
                description: `I came across quite a few designers working at reddit on LinkedIn and I was quite impressed by their work. I especially found the work of Louise Zhou quite engaging. I wish to work with such skilled designers in order to learn and up my own design game`
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
    new Company('DotDash Meredith', 'dotdash', dotdashLogo, 300)
        .setCompanyPoints((companyName) => [
            {
                title: `The company's expanse and reputation`,
                description: `As of 2021 ${companyName} reaches more than a 100 million users on a monthly basis. Despite having such a huge user base the company efficiently manages to publish content relevant to a wide vareity of themes. I wish to work at a company with such a high level of efficiency`
            },
            {
                title: `I wish to empathize with the users and stakeholders in this domain`,
                description: `With such a massive business there are bound to numerous opportunities for problem solving using design. I wish to understand what kind of problems ${companyName}'s users/stakeholders face and how the company is tackling or planning to tackle to those problems. I wish to play a role in contributing to the resolution of these challenges`
            },
            {
                title: `Curious about what's next`,
                description: `I am curious and excited about what is coming next for the company. I want to know what the roadmap is like ahead and also want to work on building this road for the company.`
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
