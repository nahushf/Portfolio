import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import styled from 'styled-components';
import { AnimationLayout } from '../components/AnimationLayout';
import { AnimatedBlob } from '../components/Blob';
import { ProjectList } from '../components/ProjectList';

const projects: IProject[] = [
    {
        id: 2,
        title: 'Farm2U',
        description: 'Connecting people to their local produce in an efficient manner',
        gradient: ['#58B96E', '#7DBD78'],
        image: 'Farm2U-splash.png'
    },
    {
        id: 3,
        title: 'Trupaws',
        description: 'Matching adopters with shelter animals',
        gradient: ['#F7516F', '#FED089'],
        image: 'Trupaws-splash.png'
    },
    {
        id: 1,
        title: 'Courtside',
        description: 'Enhancing the basketball experience for the visually impaired',
        gradient: ['#F4A58A', '#ED6B4E'],
        image: 'Courtside-splash.png'
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(projects[2]);
    const openId = selectedProject?.id || -1;
    return (
        <Container>
            <div className="project-list-container">
                <ProjectList
                    projects={projects}
                    openId={openId}
                    onProjectMouseOver={(project) => {
                        if (openId !== project.id) {
                            setSelectedProject(project);
                        }
                    }}
                    onProjectMouseLeave={() => setSelectedProject(null)}
                />
                <h1>Projects</h1>
                <Link href="/">
                    <div className="back-link">
                        <FontAwesomeIcon icon="chevron-left" /> Back
                    </div>
                </Link>
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
        padding: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h1 {
            display: flex;
            align-items: flex-end;
            flex: 1;
        }
        .back-link {
            font-weight: 400;
            height: 29px;
            display: flex;
            align-items: center;
            color: #1b1425;
            .svg-inline--fa {
                margin-right: 8px;
            }
            &:active {
                color: #000;
                font-size: 22px;
            }
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
`;

export default Projects;
