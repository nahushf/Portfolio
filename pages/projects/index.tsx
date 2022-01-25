import { useState } from 'react';
import styled from 'styled-components';
import { AnimatedBlob } from '../../components/Blob';
import { ProjectList } from '../../components/ProjectList';
import { BackButton } from '../../components/reusableComponents';
import { maxDevice } from '../../constants/styles';
import { useIsDevice } from '../../useWindowSize';

const projects: IProject[] = [
    {
        id: 2,
        title: 'Farm2U',
        description: 'Connecting people to their local produce in an efficient manner',
        gradient: ['#58B96E', '#7DBD78'],
        image: 'Farm2U-splash.png',
        route: '/projects/farm2u'
    },
    {
        id: 3,
        title: 'Trupaws',
        description: 'Matching adopters with shelter animals',
        gradient: ['#F7516F', '#FED089'],
        image: 'Trupaws-splash.png',
        route: '/projects/trupaws'
    },
    {
        id: 1,
        title: 'Courtside',
        description: 'Enhancing the basketball experience for the visually impaired',
        gradient: ['#F4A58A', '#ED6B4E'],
        image: 'Courtside-splash.png',
        route: '/projects/courtside'
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(projects[2]);
    const openId = selectedProject?.id || -1;
    const isMobile = useIsDevice('mobile');
    return (
        <Container>
            <div className="project-list-container">
                <ProjectList
                    projects={projects}
                    openId={openId}
                    onMobileProjectChange={(project) => isMobile && setSelectedProject(project)}
                    onProjectMouseOver={(project) => {
                        if (!isMobile) {
                            if (openId !== project.id) {
                                setSelectedProject(project);
                            }
                        }
                    }}
                    onProjectMouseLeave={() => !isMobile && setSelectedProject(null)}
                />
                <h1>Projects</h1>
                <BackButton href="/" />
            </div>
            <div className="project-presentation">
                {selectedProject && <img src={`/${selectedProject?.image}`} />}
                <AnimatedBlob {...{ projects, selectedProject }} />
            </div>
        </Container>
    );
};

const Container = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    .project-list-container {
        padding: 24px 0px 24px 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h1 {
            display: flex;
            align-items: flex-end;
            flex: 1;
        }
    }
    .project-presentation {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        background: #f8f8f8;
        img {
            position: absolute;
            height: 50vh;
            margin-top: 4vh;
        }
    }
    ${maxDevice.mobile} {
        grid-template-columns: 1fr;
        .project-list-container {
            padding: 16px;
            min-width: 0;
            display: grid;
            grid-template-rows: 1fr max-content max-content;
        }
        .project-presentation {
            z-index: -1;
            height: 100vh;
            width: 100vw;
            position: fixed;
            left: 0px;
            top: 0px;
            img {
                display: none;
            }
        }
    }
`;

export default Projects;
