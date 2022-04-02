import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { forwardRef, ReactNode, useRef } from 'react';
import styled from 'styled-components';
import { ChevronDown } from '../components/ChevronDown';
import { Footer } from '../components/Footer';
import { ProjectTile } from '../components/ProjectTile';
import { AnimatedName, Emp, Name, Navigation } from '../components/reusableComponents';
import { COMPANIES } from '../constants/companySpecificPoints';
import { PROJECTS } from '../constants/projects';
import { CUSTOM_EASING, darkBackground, HOME_FADE_PROPS, textColor } from '../constants/styles';
import endMeme from '../public/end-meme.png';

const CompanyPage = ({ companyName }) => {
    const router = useRouter();
    if (!companyName) {
        companyName = router.query.companyName;
    }
    const currentCompany = COMPANIES.find((company) => company.slug === companyName);
    if (!currentCompany) {
        return null;
    }

    const whyCompanySection = useRef<HTMLDivElement>(null);
    return (
        <Container>
            <Navigation variants />
            <div className="page-content">
                <div className="landing">
                    <div className="intro-content">
                        <div className="intro-beginning">
                            <AnimatedName name={'Nahush.'} />
                            <motion.div {...HOME_FADE_PROPS} className="plus">
                                +
                            </motion.div>
                            <motion.div
                                {...HOME_FADE_PROPS}
                                className="logo-container"
                                style={{ width: currentCompany.logoWidth + 'px' }}
                            >
                                <Image src={currentCompany.logo} layout="responsive"></Image>
                            </motion.div>
                        </div>
                        <motion.div {...HOME_FADE_PROPS} className="intro-text">
                            Hello {currentCompany.companyName}, Thanks for considering me as a candidate for your
                            company. I really appreciate it. I am passionate about problem solving and design and I
                            think I would be a really good fit at your company.
                            <p>
                                I have collected a couple of my projects which I think you would like. Be sure to check
                                out <Link href="/projects/courtside">Courtside</Link>, which won me the AT&T 5G Sports
                                Hackathon.
                            </p>
                        </motion.div>
                    </div>
                    <motion.div
                        {...HOME_FADE_PROPS}
                        className="see-why"
                        onClick={() => {
                            if (whyCompanySection?.current) {
                                whyCompanySection.current.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'center',
                                    inline: 'nearest'
                                });
                            }
                        }}
                    >
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
                    ref={whyCompanySection}
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
                <div className="end-of-page">
                    <div className="end-meme-container">
                        <Image src={endMeme} layout="responsive" objectFit="contain" />
                    </div>
                    <p>Thanks for letting me ramble on..</p>{' '}
                    <p>
                        <Emp>Wanna chat?</Emp> Check out my contact information in the footer below
                    </p>{' '}
                </div>
            </div>
            <Footer />
        </Container>
    );
};

CompanyPage.getInitialProps = ({ query }) => {
    return query;
};

const ReasonSection = forwardRef<any, { className?: string; title: string | JSX.Element; children: ReactNode }>(
    ({ className = '', title, children }, ref) => {
        return (
            <motion.div
                className={`reason ${className}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                ref={ref}
            >
                <div className="background" />
                <div className="reason-content-container">
                    <h3>{title}</h3>
                    <div className="reason-content">{children}</div>
                </div>
            </motion.div>
        );
    }
);

const PointsSection = forwardRef<any, { className: string; title: string | JSX.Element; points: IPoint[] }>(
    ({ className = '', title, points }, ref) => {
        return (
            <ReasonSection className="points-section" title={title} ref={ref}>
                <>
                    {points.map((point, index) => {
                        return <Point {...point} key={index} />;
                    })}
                </>
            </ReasonSection>
        );
    }
);

export interface IPoint {
    title: string;
    description: string;
}

const Point = ({ title, description }: IPoint) => {
    if (typeof description === 'string' && !description.endsWith('.')) {
        description += '.';
    }
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
            justify-content: center;
            align-items: center;
            position: relative;
            ${Name} {
                display: flex;
            }
            .logo-container {
                width: 300px;
            }

            .intro-content {
                display: grid;
                grid-template-columns: 1fr 1fr;
                justify-items: center;
                .intro-text {
                    font-size: 16px;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    a {
                        color: #fafafa;
                        display: inline-block;
                        &:active {
                            transform: scale(0.95);
                        }
                    }
                }

                .plus {
                    font-size: 56px;
                    text-align: center;
                }
            }
            .see-why {
                cursor: pointer;
                position: absolute;
                font-size: 16px;
                display: flex;
                flex-direction: column;
                align-items: center;
                bottom: 0px;
                transition: 0.1s transform ease-in-out;
                &:hover {
                    color: #fafafa;
                }
                &:active {
                    transform: scale(0.95);
                }
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
        .end-of-page {
            display: flex;
            flex-direction: column;

            padding-top: 80px;
            .end-meme-container {
                margin-bottom: 24px;
                height: 240px;
                span {
                    height: 100% !important;
                }
            }
            p {
                margin-bottom: 0px;
                text-align: center;
                font-size: 16px;
            }
        }
    }
`;

export default CompanyPage;
