import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import styled, { useTheme } from 'styled-components';
import { HOME_FADE_PROPS, maxDevice } from '../constants/styles';
import { Footer } from './Footer';
import { Landing } from './Landing';
import { OtherWork } from './OtherWork';
import { ProjectTileList } from './ProjectTileList';
import { Emp, HomePageSection } from './reusableComponents';
import Link from 'next/link';
import { ChevronDropDown } from './ChevronDown';
import ATTWin from '../public/AT&T-win.jpg';
import ScrollBars from 'react-custom-scrollbars-2';

export const HomeContent = () => {
    const projectsContainer = useRef<HTMLDivElement>(null);
    const pageContainer = useRef<ScrollBars>(null);
    const { primary } = useTheme() as any;
    const winsSection = useRef<HTMLDivElement>(null);
    return (
        <Container autoHide>
            <div className="home-page-content">
                <Landing />
                <HomePageSection
                    className="projects-container"
                    ref={projectsContainer}
                    id="projects-container"
                    {...HOME_FADE_PROPS}
                >
                    <h2>Selected Work</h2>
                    <ProjectTileList />
                </HomePageSection>
                <HomePageSection className="wins-section" id="wins-section" ref={winsSection}>
                    <h3>Achievements</h3>
                    <div className="wins-container">
                        <WinSection>
                            <div className="image-container">
                                <Image src={ATTWin} height="400px" width="400px" objectFit="contain" />
                            </div>
                            <article>
                                <article>
                                    The <Emp>Best Overall Product, Best Accessibility, and Best use of 5G</Emp> awards
                                    at the AT&T 5G Sports Hackathon
                                </article>
                                <div className="links-container">
                                    <Link href="/projects/courtside" passHref>
                                        <a target="_blank">
                                            View Project <ChevronDropDown fill={primary} />{' '}
                                        </a>
                                    </Link>
                                    <Link
                                        href="https://soic.iupui.edu/news/soic-students-dominate-5g-hackathon/"
                                        passHref
                                    >
                                        <a>
                                            Read Article <ChevronDropDown fill={primary} />{' '}
                                        </a>
                                    </Link>
                                </div>
                            </article>
                        </WinSection>
                        <WinSection>
                            <article>
                                <Emp>1st Place</Emp> at the &quot;21st century Education&quot; Design Sprint at IUPUI.
                            </article>
                        </WinSection>
                        <WinSection>
                            <article>
                                <Emp>2nd Place</Emp> at the &quot;Neighbourhoods of the Future&quot; Design Sprint
                                sponsored by the School of Informatics and Computing
                            </article>
                            <Link href="https://soic.iupui.edu/news/students-design-sprint-challenge/" passHref>
                                <a target="_blank">
                                    Read Article
                                    <ChevronDropDown fill={primary} />{' '}
                                </a>
                            </Link>
                        </WinSection>
                        <WinSection>
                            <article>
                                <Emp>3rd Place</Emp> at the Monon30 Innovation Sprint at IUPUI
                            </article>
                        </WinSection>
                    </div>
                </HomePageSection>
                <OtherWork />
            </div>
            <Footer />
        </Container>
    );
};

const WinSection = styled.div`
    position: relative;
    flex-shrink: 0;
    height: 100%;
    &:first-child {
        grid-column-end: span 3;
        display: flex;
        align-items: center;
        gap: 24px;
    }
    padding: 16px;
    background: #291d37;
    border-radius: 8px;
    article {
        margin-bottom: 16px;
    }
    .links-container {
        display: flex;
        gap: 16px;
    }
    a {
        color: #fafafa;
        text-decoration: underline;
        display: flex;
        color: ${(props) => props.theme.primary};
        svg {
            transform: rotate(-90deg);
        }
    }
    ${maxDevice.mobile} {
        &:first-child {
            flex-direction: column;
        }
    }
`;

const Container = styled(ScrollBars)`
    overflow: auto;
    min-height: 0;
    scroll-padding: 100px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    font-weight: 100;
    margin: 0 auto;
    min-width: 0;
    width: 100%;
    .wins-section {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h3 {
            margin-bottom: 24px;
        }
        .wins-container {
            display: grid;
            align-items: flex-start;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: max-content max-content;
            grid-column-gap: 16px;
            grid-row-gap: 16px;
            font-size: 16px;
        }
    }
    .home-page-content {
        margin: 0 auto;
        padding: 24px;
        max-width: 1024px;
        .landing {
        }
        .button--winona {
            margin-bottom: 24px;
        }
        .projects-container {
            .projects-list-container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-column-gap: 24px;
                grid-row-gap: 24px;
            }
        }
        .description {
        }
    }
    ${maxDevice.mobile} {
        padding: 16px;
        .intro-title {
            font-size: 16px;
        }
        .button--winona {
            margin-bottom: 16px;
        }
        .home-page-content {
            .projects-container {
                .projects-list-container {
                    grid-template-columns: 1fr;
                }
            }
        }
        .wins-section,
        #other-work {
            height: unset;
            margin-top: 100px;
        }
        .wins-section {
            .wins-container {
                grid-template-columns: 1fr;
                ${WinSection} {
                    grid-column-end: span 1;
                }
            }
        }

    h2, h3 {
        font-size: ${(props) => props.theme.mobileH1FontSize};
    }
    }
`;
