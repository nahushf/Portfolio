import { motion } from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';
import { maxDevice } from '../constants/styles';
import { Footer } from './Footer';
import { Landing } from './Landing';
import { OtherWork } from './OtherWork';
import { ProjectTileList } from './ProjectTileList';
import { HomePageSection } from './reusableComponents';

export const HomeContent = () => {
    const projectsContainer = useRef<HTMLDivElement>(null);
    const pageContainer = useRef<HTMLDivElement>(null);
    return (
        <Container ref={pageContainer}>
            <div className="home-page-content">
                <Landing onWorkClick={(e) => {
                            pageContainer.current.scrollTo({
                                left: 0,
                                top: projectsContainer.current.getBoundingClientRect().y,
                                behavior: 'smooth'
                            });
                        }}/> 
                <HomePageSection className="projects-container" ref={projectsContainer} id="projects-container">
                    <h2>Selected Work</h2>
                    <ProjectTileList />
                </HomePageSection>
                <OtherWork />
            </div>
            <Footer />
        </Container>
    );
};

const Container = styled(motion.div)`
    overflow: auto;
    min-height: 0;
    scroll-padding: 100px 0px 0px 0px;
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
    }
`;
