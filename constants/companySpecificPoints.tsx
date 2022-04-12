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
import havenLogo from '../public/haven-logo.png';
import konradLogo from '../public/konrad-logo.png';
import ciscoLogo from '../public/cisco-logo.png';
import brightlyLogo from '../public/brightly-logo.png';
import cedarLogo from '../public/cedar-logo.png';
import vidmobLogo from '../public/vidmob-logo.png';
import microsoftLogo from '../public/microsoft-logo.png';
import amaLogo from '../public/ama-logo.png';
import spotHeroLogo from '../public/spothero-logo.png';
import pax8Logo from '../public/pax8-logo.jpeg';

interface ICompanyPoint {
    title: string;
    description: string;
}

class Company {
    companyPoints: ICompanyPoint[];
    mePoints: ICompanyPoint[];
    whyTitle: string;
    constructor(public companyName: string, public slug: string, public logo, public logoWidth: number) {
        this.setWhyTitle(`I want to work at ${this.companyName} because...`);
    }

    setCompanyPoints(companyPoints: ICompanyPoint[] | ((companyName: string) => ICompanyPoint[])) {
        this.companyPoints = companyPoints instanceof Function ? companyPoints(this.companyName) : companyPoints;
        return this;
    }

    setMePoints(mePoints: ICompanyPoint[] | ((companyName: string) => ICompanyPoint[])) {
        this.mePoints = mePoints instanceof Function ? mePoints(this.companyName) : mePoints;
        return this;
    }

    setWhyTitle(whyTitle: string | ((companyName: string) => string)) {
        this.whyTitle = whyTitle instanceof Function ? whyTitle(this.companyName) : whyTitle;
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
                    'I am a strong believer in the "dumbest person in the room" philosophy. If one wishes to grow he needs to work with people who are more skilled.'
            },
            {
                title: 'Quick Learner',
                description:
                    'I have a passion for learning and often enjoy being thrown into environments I possess little to no knowledge of'
            },
            {
                title: 'Extensive closely related experience',
                description:
                    'Even though I am just starting my professional design journey, I have worked and led multiple teams in the past 6 years when I worked as a front end developer and collaborated with multiple of UI/UX and Product Designers'
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
                    'I am a strong believer in the "dumbest person in the room" philosophy. If one wishes to grow he needs to work with people who are more skilled.'
            },
            {
                title: 'Quick Learner',
                description:
                    'I have a passion for learning and often enjoy being thrown into environments I possess little to no knowledge of'
            },
            {
                title: 'Extensive closely related experience',
                description:
                    'Even though I am just starting my professional design journey, I have worked and led multiple teams in the past 6 years when I worked as a front end developer and collaborated with multiple of UI/UX and Product Designers'
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
                    'I am a strong believer in the "dumbest person in the room" philosophy. If one wishes to grow he needs to work with people who are more skilled.'
            },
            {
                title: 'Quick Learner',
                description:
                    'I have a passion for learning and often enjoy being thrown into environments I possess little to no knowledge of'
            },
            {
                title: 'Extensive closely related experience',
                description:
                    'Even though I am just starting my professional design journey, I have worked and led multiple teams in the past 6 years when I worked as a front end developer and collaborated with multiple of UI/UX and Product Designers'
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
                    'I am a strong believer in the "dumbest person in the room" philosophy. If one wishes to grow he needs to work with people who are more skilled.'
            },
            {
                title: 'Quick Learner',
                description:
                    'I have a passion for learning and often enjoy being thrown into environments I possess little to no knowledge of'
            },
            {
                title: 'Extensive closely related experience',
                description:
                    'Even though I am just starting my professional design journey, I have worked and led multiple teams in the past 6 years when I worked as a front end developer and collaborated with multiple of UI/UX and Product Designers'
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
                    'I am a strong believer in the "dumbest person in the room" philosophy. If one wishes to grow he needs to work with people who are more skilled.'
            },
            {
                title: 'Quick Learner',
                description:
                    'I have a passion for learning and often enjoy being thrown into environments I possess little to no knowledge of'
            },
            {
                title: 'Extensive closely related experience',
                description:
                    'Even though I am just starting my professional design journey, I have worked and led multiple teams in the past 6 years when I worked as a front end developer and collaborated with multiple of UI/UX and Product Designers'
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
                    'I am a strong believer in the "dumbest person in the room" philosophy. If one wishes to grow he needs to work with people who are more skilled.'
            },
            {
                title: 'Quick Learner',
                description:
                    'I have a passion for learning and often enjoy being thrown into environments I possess little to no knowledge of'
            },
            {
                title: 'Extensive closely related experience',
                description:
                    'Even though I am just starting my professional design journey, I have worked and led multiple teams in the past 6 years when I worked as a front end developer and collaborated with multiple of UI/UX and Product Designers'
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
                    'I am a strong believer in the "dumbest person in the room" philosophy. If one wishes to grow he needs to work with people who are more skilled.'
            },
            {
                title: 'Quick Learner',
                description:
                    'I have a passion for learning and often enjoy being thrown into environments I possess little to no knowledge of'
            },
            {
                title: 'Extensive closely related experience',
                description:
                    'Even though I am just starting my professional design journey, I have worked and led multiple teams in the past 6 years when I worked as a front end developer and collaborated with multiple of UI/UX and Product Designers'
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
                    'I am a strong believer in the "dumbest person in the room" philosophy. If one wishes to grow he needs to work with people who are more skilled.'
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
                    'I am a strong believer in the "dumbest person in the room" philosophy. If one wishes to grow he needs to work with people who are more skilled.'
            },
            {
                title: 'Quick Learner',
                description:
                    'I have a passion for learning and often enjoy being thrown into environments I possess little to no knowledge of'
            },
            {
                title: 'Extensive closely related experience',
                description:
                    'Even though I am just starting my professional design journey, I have worked and led multiple teams in the past 6 years when I worked as a front end developer and collaborated with multiple of UI/UX and Product Designers'
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
                    'I am a strong believer in the "dumbest person in the room" philosophy. If one wishes to grow he needs to work with people who are more skilled.'
            },
            {
                title: 'Quick Learner',
                description:
                    'I have a passion for learning and often enjoy being thrown into environments I possess little to no knowledge of'
            },
            {
                title: 'Extensive closely related experience',
                description:
                    'Even though I am just starting my professional design journey, I have worked and led multiple teams in the past 6 years when I worked as a front end developer and collaborated with multiple of UI/UX and Product Designers'
            }
        ]),
    new Company('DotDash Meredith', 'dotdash', dotdashLogo, 300)
        .setCompanyPoints((companyName) => [
            {
                title: `The company's expanse and reputation`,
                description: `As of 2021 ${companyName} reaches more than a 100 million users on a monthly basis. Despite having such a huge user base the company efficiently manages to publish content relevant to a wide variety of themes. I wish to work at a company with such a high level of efficiency`
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
                    'I am a strong believer in the "dumbest person in the room" philosophy. If one wishes to grow he needs to work with people who are more skilled.'
            },
            {
                title: 'Quick Learner',
                description:
                    'I have a passion for learning and often enjoy being thrown into environments I possess little to no knowledge of'
            },
            {
                title: 'Extensive closely related experience',
                description:
                    'Even though I am just starting my professional design journey, I have worked and led multiple teams in the past 6 years when I worked as a front end developer and collaborated with multiple of UI/UX and Product Designers'
            }
        ]),

    new Company('Haven Technologies', 'haven', havenLogo, 200)
        .setCompanyPoints((companyName) => [
            {
                title: `Mo' problems Mo' Design`,
                description: `Insurance has always been a rich field in terms of problems faced by both customers as well as insurance providers. I am curious to know how ${companyName} simplifies life in this field. Working in this field will make me apply all my design know-how and will also help me up my design game.`
            },
            {
                title: `Curious about what's next`,
                description: `I am curious and excited about what is coming next for the company. I want to know what the roadmap is like in this field and also want to work on building this road for the company.`
            }
        ])
        .setMePoints([
            {
                title: 'Philosophy: Be the dumbest person in the room',
                description:
                    'I am a strong believer in the "dumbest person in the room" philosophy. If one wishes to grow he needs to work with people who are more skilled.'
            },
            {
                title: 'Quick Learner',
                description:
                    'I have a passion for learning and often enjoy being thrown into environments I possess little to no knowledge of'
            },
            {
                title: 'Extensive closely related experience',
                description:
                    'Even though I am just starting my professional design journey, I have worked and led multiple teams in the past 6 years when I worked as a front end developer and collaborated with multiple of UI/UX and Product Designers'
            }
        ]),
    new Company('Konrad Group', 'konrad', konradLogo, 300)
        .setCompanyPoints((companyName) => [
            {
                title: 'Impressive portfolio',
                description: `
        I found the company's past work quite impressive. As a sucker for pastel colors, I especially thought the work done with Spotify was quite beautiful.
            `
            },
            {
                title: 'Working in a Design-Mature Company',
                description: `The company's past work reflects a culture where design is respected and valued. The company thus perfectly fits into the kind of companies that I wish to work for.`
            },
            {
                title: 'Working and networking with Designers at the top of their game',
                description:
                    'LinkedIn is a pretty handy resource when it comes to going through the people working in a particular company. I found the skill level of most of the people working in the company to be quite high. This is another reason I wish to work with the company, since working with such designers will help me grow.'
            }
        ])
        .setMePoints([
            {
                title: 'Philosophy: Be the dumbest person in the room',
                description:
                    'I am a strong believer in the "dumbest person in the room" philosophy. If one wishes to grow he needs to work with people who are more skilled.'
            },
            {
                title: 'Quick Learner',
                description:
                    'I have a passion for learning and often enjoy being thrown into environments I possess little to no knowledge of'
            },
            {
                title: 'Extensive closely related experience',
                description:
                    'Even though I am just starting my professional design journey, I have worked and led multiple teams in the past 6 years when I worked as a front end developer and collaborated with multiple of UI/UX and Product Designers'
            }
        ])
        .setWhyTitle((companyName) => `I want to work at the ${companyName} because...`),

    new Company('Cisco', 'cisco', ciscoLogo, 300)
        .setCompanyPoints((companyName) => [
            {
                title: `${companyName}'s reputation`,
                description: `
        Coming from a background in tech, I have been aware of cisco for a while. Almost everyone I know uses a cisco router. With such a wide user base, the compony is bound to have a plethora of challenges which could potentially be solved by design.
            `
            },
            {
                title: 'Working in a Design-Mature Company',
                description: `The company's work reflects a culture where design is respected and valued. The company thus perfectly fits into the kind of companies that I wish to work for.`
            },
            {
                title: 'Working and networking with Designers at the top of their game',
                description:
                    'LinkedIn is a pretty handy resource when it comes to going through the people working in a particular company. I found the skill level of most of the people working in the company to be quite high. This is another reason I wish to work with the company, since working with such designers will help me grow.'
            }
        ])
        .setMePoints([
            {
                title: 'Philosophy: Be the dumbest person in the room',
                description:
                    'I am a strong believer in the "dumbest person in the room" philosophy. If one wishes to grow he needs to work with people who are more skilled.'
            },
            {
                title: 'Quick Learner',
                description:
                    'I have a passion for learning and often enjoy being thrown into environments I possess little to no knowledge of'
            },
            {
                title: 'Extensive closely related experience',
                description:
                    'Even though I am just starting my professional design journey, I have worked and led multiple teams in the past 6 years when I worked as a front end developer and collaborated with multiple of UI/UX and Product Designers'
            }
        ]),
    new Company('Brightly', 'brightly', brightlyLogo, 300)
        .setCompanyPoints((companyName) => [
            {
                title: `${companyName}'s range`,
                description: `
        ${companyName} works in a wide variety of domains ranging from education to senior living. I have found that these industries are often rich with problems and therefore have the most room for design innovation.
            `
            },
            {
                title: 'Working in a Design-Mature Company',
                description: `The company's work and the company's website reflects a culture where design is respected and valued. The company thus perfectly fits into the kind of companies that I wish to work for.`
            },
            {
                title: 'Working and networking with Designers at the top of their game',
                description:
                    'LinkedIn is a pretty handy resource when it comes to going through the people working in a particular company. I found the skill level of most of the people working in the company to be quite high. '
            }
        ])
        .setMePoints([
            {
                title: 'Philosophy: Be the dumbest person in the room',
                description:
                    'I am a strong believer in the "dumbest person in the room" philosophy. If one wishes to grow he needs to work with people who are more skilled.'
            },
            {
                title: 'Quick Learner',
                description:
                    'I have a passion for learning and often enjoy being thrown into environments I possess little to no knowledge of'
            },
            {
                title: 'Extensive closely related experience',
                description:
                    'Even though I am just starting my professional design journey, I have worked and led multiple teams in the past 6 years when I worked as a front end developer and collaborated with multiple of UI/UX and Product Designers'
            }
        ]),
    new Company('Cedar', 'cedar', cedarLogo, 200)
        .setCompanyPoints((companyName) => [
            {
                title: `Awareness of the value in the billing and healthcare sector`,
                description: `
        As someone who has had multiple surgeries over the past 5 years I am aware of the challenges involved in understanding the bills for any hospital visit. With my existing experiemnces in the problem area I wish to contribute in the simplification of this domain.
            `
            },
            {
                title: 'Working in a Design-Mature Company',
                description: `The company's work and the company's website reflects a culture where design is respected and valued. The company thus perfectly fits into the kind of companies that I wish to work for.`
            },
            {
                title: 'Working and networking with Designers at the top of their game',
                description:
                    'LinkedIn is a pretty handy resource when it comes to going through the people working in a particular company. I found the skill level of most of the people working in the company to be quite high. '
            }
        ])
        .setMePoints([
            {
                title: 'Philosophy: Be the dumbest person in the room',
                description:
                    'I am a strong believer in the "dumbest person in the room" philosophy. If one wishes to grow he needs to work with people who are more skilled.'
            },
            {
                title: 'Quick Learner',
                description:
                    'I have a passion for learning and often enjoy being thrown into environments I possess little to no knowledge of'
            },
            {
                title: 'Extensive closely related experience',
                description:
                    'Even though I am just starting my professional design journey, I have worked and led multiple teams in the past 6 years when I worked as a front end developer and collaborated with multiple of UI/UX and Product Designers'
            }
        ]),

    new Company('VidMob', 'vidmob', vidmobLogo, 200)
        .setCompanyPoints((companyName) => [
            {
                title: `Awareness of the value in the video marketing sector`,
                description: `
        As an avid consumer of video content on a daily basis I have had first hand experience in how effective a quality video marketing campaign can be. VidMob's one of a kind insight platform for video marketing is something that I believe can be very impactful for companies and I wish to contribute my design aptitude to such a domain.
            `
            },
            {
                title: 'Working in a Design-Mature Company',
                description: `The company's work and the company's website reflects a culture where design is respected and valued. The company thus perfectly fits into the kind of companies that I wish to work for.`
            },
            {
                title: 'Working and networking with Designers at the top of their game',
                description:
                    'LinkedIn is a pretty handy resource when it comes to going through the people working in a particular company. I found the skill level of most of the people working in the company to be quite high. '
            }
        ])
        .setMePoints([
            {
                title: 'Philosophy: Be the dumbest person in the room',
                description:
                    'I am a strong believer in the "dumbest person in the room" philosophy. If one wishes to grow he needs to work with people who are more skilled.'
            },
            {
                title: 'Quick Learner',
                description:
                    'I have a passion for learning and often enjoy being thrown into environments I possess little to no knowledge of'
            },
            {
                title: 'Extensive closely related experience',
                description:
                    'Even though I am just starting my professional design journey, I have worked and led multiple teams in the past 6 years when I worked as a front end developer and collaborated with multiple of UI/UX and Product Designers'
            }
        ]),
    new Company('Microsoft', 'microsoft', microsoftLogo, 200)
        .setCompanyPoints((companyName) => [
            {
                title: `Well, Microsoft`,
                description: `
        Windows OS, Windows laptops, Typescript, Outlook. Microsoft does everything. It would come as no surprise that working at ${companyName} would be a dream come true.
            `
            },
            {
                title: 'Working in a Design-Mature Company',
                description: `The company's work and the company's website reflects a culture where design is respected and valued. The company thus perfectly fits into the kind of companies that I wish to work for.`
            },
            {
                title: 'Working and networking with Designers at the top of their game',
                description: `LinkedIn is a pretty handy resource when it comes to going through the people working in a particular company. Even without a search, just from being a customer, one would have no trouble estimating the skill level of the people working at ${companyName}. An opportunity to work with such designers would catapult my skill to unimaginable heights `
            }
        ])
        .setMePoints([
            {
                title: 'Philosophy: Be the dumbest person in the room',
                description:
                    'I am a strong believer in the "dumbest person in the room" philosophy. If one wishes to grow he needs to work with people who are more skilled.'
            },
            {
                title: 'Quick Learner',
                description:
                    'I have a passion for learning and often enjoy being thrown into environments I possess little to no knowledge of'
            },
            {
                title: 'Extensive closely related experience',
                description:
                    'Even though I am just starting my professional design journey, I have worked and led multiple teams in the past 6 years when I worked as a front end developer and collaborated with multiple of UI/UX and Product Designers'
            }
        ]),

    new Company('AMA', 'ama', amaLogo, 300)
        .setCompanyPoints((companyName) => [
            {
                title: `Well, AMA`,
                description: `
        I first heard about AMA while working as the front end developer for a marketing intelligence company which worked on connecting revenue with the marketing team. While working at the same company I first realized the value of the work that marketers do and I have immense respect for the profession. Transitively, an organization that connects Marketers such as AMA is also one I respect and would thus like to work for.
            `
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
                    'I am a strong believer in the "dumbest person in the room" philosophy. If one wishes to grow he needs to work with people who are more skilled.'
            },
            {
                title: 'Quick Learner',
                description:
                    'I have a passion for learning and often enjoy being thrown into environments I possess little to no knowledge of'
            },
            {
                title: 'Extensive closely related experience',
                description:
                    'Even though I am just starting my professional design journey, I have worked and led multiple teams in the past 6 years when I worked as a front end developer and collaborated with multiple of UI/UX and Product Designers'
            }
        ]),

    new Company('SpotHero', 'spothero', spotHeroLogo, 200)
        .setCompanyPoints((companyName) => [
            {
                title: `Parking?`,
                description: `
        I was very intrigued to find out that spotHero works to simplify parking. In our school parking is an area all our professors actively advise us to stay away from because according to them it is unsolvable. However as someone who is actively attracted to things people advise against, this is something that intrigues me. I am curious to find out how ${companyName} is actually making this happen.
            `
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
                    'I am a strong believer in the "dumbest person in the room" philosophy. If one wishes to grow he needs to work with people who are more skilled.'
            },
            {
                title: 'Quick Learner',
                description:
                    'I have a passion for learning and often enjoy being thrown into environments I possess little to no knowledge of'
            },
            {
                title: 'Extensive closely related experience',
                description:
                    'Even though I am just starting my professional design journey, I have worked and led multiple teams in the past 6 years when I worked as a front end developer and collaborated with multiple of UI/UX and Product Designers'
            }
        ]),
    new Company('Pax8', 'pax8', pax8Logo, 200)
        .setCompanyPoints((companyName) => [
            {
                title: `Cloud and it's challenges`,
                description: `
        I am currently working on a cloud based VSaaS/ACaaS company helping them target the retail market as a part of one my courses here at IUPUI. I find the entire cloud domain quite interesting and am curios about the challenges it presents. 
            `
            },
            {
                title: 'Working in a Design-Mature Company',
                description: `The company's work and the company's website reflects a culture where design is respected and valued. The company thus perfectly fits into the kind of companies that I wish to work for.`
            },
            {
                title: 'Working and networking with Designers at the top of their game',
                description: `LinkedIn is a pretty handy resource when it comes to going through the people working in a particular company. Even without a search, just from being a customer, one would have no trouble estimating the skill level of the people working at ${companyName}. An opportunity to work with such designers would catapult my skill to unimaginable heights `
            }
        ])
        .setMePoints([
            {
                title: 'Philosophy: Be the dumbest person in the room',
                description:
                    'I am a strong believer in the "dumbest person in the room" philosophy. If one wishes to grow he needs to work with people who are more skilled.'
            },
            {
                title: 'Quick Learner',
                description:
                    'I have a passion for learning and often enjoy being thrown into environments I possess little to no knowledge of'
            },
            {
                title: 'Extensive closely related experience',
                description:
                    'Even though I am just starting my professional design journey, I have worked and led multiple teams in the past 6 years when I worked as a front end developer and collaborated with multiple of UI/UX and Product Designers'
            }
        ]),
];
