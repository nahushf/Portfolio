import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import styled from 'styled-components';
import { black, maxDevice } from '../constants/styles';
import { ArrowIcon } from './arrowIcon';
import { Footer } from './Footer';
import { BehanceIcon, EmailIcon, InstaIcon, LinkedInIcon } from './InstaIcon';
import { ProjectTileList } from './ProjectTileList';
import { Emp, HomePageSection, Name } from './reusableComponents';

export const HomeContent = () => {
    const projectsContainer = useRef<HTMLDivElement>(null);
    const pageContainer = useRef<HTMLDivElement>(null);
    return (
        <Container ref={pageContainer}>
            <div className="home-page-content">
                <HomePageSection className="landing">
                    <div className="intro-title">Hi there, I am</div>
                    <Name className="name">
                        Nahush Farkande<span className="full-stop">.</span>
                    </Name>
                    <div className="description">
                        I’m a UI/UX Designer who is passionate about solving problems. Currently pursuing my Masters in
                        Human Computer Interaction Indiana University. Previously I have led multiple UI development
                        teams while coordinating with a number of designers, before jumping on the design bandwagon
                        myself. Most recently, I managed to bag the <Emp>Best Overall Product</Emp> award at the AT&T 5G
                        Sports Hackathon.
                    </div>
                    <div className="links-container">
                        <Link href="">
                            <motion.span
                                className="link-content"
                                onClick={(e) => {
                                    pageContainer.current.scrollTo({
                                        left: 0,
                                        top: projectsContainer.current.getBoundingClientRect().y,
                                        behavior: 'smooth'
                                    });
                                }}
                            >
                                <img src="/arrow.png" /> View my work
                            </motion.span>
                        </Link>
                        <Link href="/about">
                            <span className="link-content">
                                <ArrowIcon fill="#fff" />
                                Read my story
                            </span>
                        </Link>
                    </div>
                </HomePageSection>
                <HomePageSection className="projects-container" ref={projectsContainer} id="projects-container">
                    <h2>Selected Work</h2>
                    <ProjectTileList />
                </HomePageSection>
            </div>
            <Footer />
        </Container>
    );
};

const Container = styled(motion.div)`
    overflow: auto;
    min-height: 0;
    scroll-snap-type: y mandatory;
    display: flex;
    flex-direction: column;
    font-weight: 100;
    margin: 0 auto;
    min-width: 0;
    width: 100%;
    .home-page-content {
        margin: 0 auto;
        padding: 24px;
        max-width: 1024px;
        .landing {
            height: 95vh;
            margin-top: 80px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 32px;
            padding-top: 7vh;
        }
        .intro-title {
            font-size: 24px;
        }
        .button--winona {
            margin-bottom: 24px;
        }
        .intro-title,
        .description {
            line-height: 1.8;
            font-size: 18px;
        }
        .links-container {
            display: flex;
            align-items: center;
            font-size: 20px;
            gap: 16px;
            .link-content {
                padding: 8px;
                cursor: pointer;
                color: white;
                display: flex;
                align-items: center;
                gap: 8px;
                border: 1px solid #fff;
                border-radius: 100px;
                &:first-child {
                    border: 1px solid #f87e77;
                    background: #f87e77;
                    color: ${black};
                    img {
                        transform: rotate(90deg);
                    }
                }
            }
        }
        .projects-container {
            h2 {
                color: #fafafa;
            }
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
    }
`;
