import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { ChevronDown, ChevronDropDown } from '../components/ChevronDown';
import { Footer } from '../components/Footer';
import { Emp, Name, Navigation } from '../components/reusableComponents';
import { red } from '../constants/styles';
import ATTWin from '../public/AT&T-win.jpg';

const GlobalStyle = createGlobalStyle`

                    #__next {
                    }
`;

const AboutPage = () => {
    const winsSection = useRef<HTMLDivElement>(null);
    return (
        <>
            <Container>
                <GlobalStyle />
                <Navigation />

                <AboutSection className="primary-info">
                    <div className="about__left">
                        <div className="about__info">
                            <p>Hello, my name is </p>
                            <Name>Nahush Farkande</Name>
                            <p className="about__description">
                                I am an aspiring <Emp>UI/UX/Product designer</Emp> pursuing my Masters in Human Computer
                                Interaction at Indiana University. I worked as a front end engineer for around 6 years
                                before switching to design as my primary field.
                                <p>
                                    <Emp> &quot;Design is intelligence made visible&quot;</Emp>. This quote by Alina
                                    Wheeler perfectly encapsulates my outlook on design. I believe that good design can
                                    not only be effective in solving problems but also in helping businesses grow.
                                </p>
                                <p>In my free time I like to sing, sketch and accumulate dad jokes.</p>
                            </p>
                            <div
                                className="read-more"
                                onClick={() => winsSection.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                            >
                                Check out some of my recent achievements <ChevronDown fill={red} />
                            </div>
                        </div>
                    </div>
                    <div className="about__right">
                        <img src="/self.jpg" />
                    </div>
                </AboutSection>
                <AboutSection className="wins-section" id="wins-section" ref={winsSection}>
                    <h3>Here are some of the awards that my team projects have won:</h3>
                    <div className="wins-container">
                        <WinSection>
                            <div className="image-container">
                                <Image src={ATTWin} height="500px" width="400px" objectFit="contain" />
                            </div>
                            <article>
                                <article>
                                    The <Emp>Best Overall Product, Best Accessibility, and Best use of 5G</Emp> awards
                                    at the AT&T 5G Sports Hackathon
                                </article>
                                <div className="links-container">
                                    <Link href="/projects/courtside" passHref>
                                        <a target="_blank">
                                            View Project <ChevronDropDown fill={red} />{' '}
                                        </a>
                                    </Link>
                                    <Link
                                        href="https://soic.iupui.edu/news/soic-students-dominate-5g-hackathon/"
                                        passHref
                                    >
                                        <a>
                                            Read Article <ChevronDropDown fill={red} />{' '}
                                        </a>
                                    </Link>
                                </div>
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
                                    <ChevronDropDown fill={red} />{' '}
                                </a>
                            </Link>
                        </WinSection>
                        <WinSection>
                            <article>
                                <Emp>3rd Place</Emp> at the Monon30 Innovation Sprint at IUPUI
                            </article>
                        </WinSection>
                    </div>
                </AboutSection>
                {/* <AboutSection> */}
                {/* <h3>What I am currently upto</h3> */}
                {/* <HobbySection></HobbySection> */}
                {/* <article>Currently reading</article> */}
                {/* </AboutSection> */}
            </Container>
            <Footer />
        </>
    );
};

const HobbySection = styled.div``;

const AboutSection = styled.div`
    scroll-snap-align: start;
    height: 100vh;
    &.primary-info {
        display: grid;
        grid-template-columns: 1fr 1fr;

        align-items: center;
    }
    .wins-container {
        display: grid;
        align-items: flex-start;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: max-content max-content;
        grid-column-gap: 16px;
        grid-row-gap: 16px;
    }
    h3 {
        font-size: 24px;
        color: #fafafa;
        margin-bottom: 24px;
    }
    &.wins-section {
        padding: 24px;
    }
`;

const WinSection = styled.div`
    position: relative;
    flex-shrink: 0;
    height: 100%;
    &:first-child {
        grid-column-end: span 2;
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
        color: ${red};
        svg {
            transform: rotate(-90deg);
        }
    }
`;
const Container = styled.div`
    overflow: auto;
    max-width: 1024px;
    margin: 0 auto;
    padding-top: 4vh;
    font-size: 16px;
    scroll-padding: 80px;
    .about__left {
        display: flex;
        padding: 24px;
        padding-right: 0px;
        flex-direction: column;
        justify-content: space-between;
        p {
            font-size: 16px;
            line-height: 1.5;
        }
        .about__info {
            bottom: 24px;
            .about__description {
            }
            .read-more {
                color: ${red};
                display: flex;
                align-items: center;
                cursor: pointer;
                &:active {
                    color: #ccc;
                }
            }
        }
        ${Name} {
            font-size: 104px;
        }
    }
    .about__right {
        min-height: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            max-height: 61vh;
        }
    }
`;

export default AboutPage;
