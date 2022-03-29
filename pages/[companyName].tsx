import styled from 'styled-components';
import { Footer } from '../components/Footer';
import { AnimatedName, AnimatedTitle, FullStop, Name, Navigation } from '../components/reusableComponents';
import roLogo from '../public/ro-logo.png';
import Image from 'next/image';
import { ChevronDown } from '../components/ChevronDown';
import { CUSTOM_EASING, darkBackground, HOME_FADE_PROPS, textColor } from '../constants/styles';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants/projects';
import { ProjectTile } from '../components/ProjectTile';
import { useRouter } from 'next/router';
import { COMPANIES } from '../constants/companySpecificPoints';
import { useEffect } from 'react';

const companyName = 'Ro';

const companyPoints = [
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
];

const mePoints = [
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
];

const CompanyPage = ({ companyName }) => {
    if (!companyName) {
        companyName = useRouter().query.companyName;
    }
    const currentCompany = COMPANIES.find((company) => company.slug === companyName);
    if (!currentCompany) {
        return null;
    }
    return (
        <Container>
            <Navigation variants />
            <div className="page-content">
                <div className="landing">
                    <AnimatedName />
                    <motion.div {...HOME_FADE_PROPS} className="plus">+</motion.div>
                    <motion.div {...HOME_FADE_PROPS} className="logo-container" style={{ width: currentCompany.logoWidth + 'px' }}>
                        <Image src={currentCompany.logo} layout="responsive"></Image>
                    </motion.div>
                    <motion.div {...HOME_FADE_PROPS} className="see-why">
                        See Why{' '}
                        <motion.span
                            animate={{ transform: 'translateY(5px)' }}
                            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 0.5, ease: CUSTOM_EASING }}
                        >
                            <ChevronDown fill={textColor} />
                        </motion.span>{' '}
                    </motion.div>
                </div>
                <PointsSection
                    className="why-company"
                    title={`I want to work at ${currentCompany.companyName} because...`}
                    points={currentCompany.companyPoints}
                />
                <PointsSection className="why-me" title="I'm a good fit because..." points={currentCompany.mePoints} />
                <ReasonSection
                    className="specific-projects"
                    title="Lastly, here are some of my projects that you might like..."
                >
                    {[PROJECTS[2], PROJECTS[1]].map((project) => (
                        <ProjectTile key={project.id} project={project} />
                    ))}
                </ReasonSection>
                <div className="reason specific-projects"></div>
            </div>
            <Footer />
        </Container>
    );
};

CompanyPage.getInitialProps = ({ query }) => {
    return query;
};

const ReasonSection = ({ className = '', title, children }) => {
    return (
        <motion.div className={`reason ${className}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <div className="background" />
            <div className="reason-content-container">
                <h3>{title}</h3>
                <div className="reason-content">{children}</div>
            </div>
        </motion.div>
    );
};

const PointsSection = ({ className = '', title, points }) => {
    return (
        <ReasonSection className="points-section" title={title}>
            <>
                {points.map((point, index) => {
                    return <Point {...point} key={index} />;
                })}
            </>
        </ReasonSection>
    );
};

const Point = ({ title, description }) => {
    return (
        <div className="point">
            <h4>{title}</h4>
            <div className="description">{description}</div>
        </div>
    );
};

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .page-content {
        max-width: 1024px;
        margin: auto;
        padding: 0px 24px;
        .reason-content {
            display: flex;
            gap: 24px;
            margin-top: 24px;
            .point {
                border: 1px solid #362844;
                flex: 1;
                flex-shrink: 0;
                padding: 16px;
                border-radius: 16px;
                font-size: 16px;
                background: ${darkBackground};
                h4 {
                    margin-top: 0px;
                    margin-bottom: 24px;
                }
            }
            .project-tile {
                &:hover {
                    background: #362844 !important;
                }
            }
        }
        .landing {
            height: 98vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            ${Name} {
                display: flex;
            }
            .plus {
                font-size: 56px;
            }
            .logo-container {
                width: 300px;
            }
            .see-why {
                position: absolute;
                font-size: 16px;
                display: flex;
                flex-direction: column;
                align-items: center;
                bottom: 0px;
            }
        }
        .reason {
            display: flex;
            flex-direction: column;
            position: relative;
            padding: 80px 0px;
            .background {
                z-index: -99;
                position: absolute;
                top: 0px;
                height: 100%;
                width: 100vw;
                align-self: center;
            }
            &:nth-child(2n) {
                .background {
                    background: ${darkBackground};
                }
                .point {
                    background: #362844;
                }
            }
            &.specific-projects {
                padding: 24px 56px;
            }
        }
    }
`;

export default CompanyPage;
