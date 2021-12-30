import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styled from 'styled-components';

const ProjectListItem = ({
    project,
    onMouseOver = () => {},
    onMouseLeave = () => {},
    isOpen,
    isInitial
}: {
    project: IProject;
    onMouseOver?;
    onMouseLeave?;
    isOpen: boolean;
    isInitial: boolean;
}) => {
    const toggleClose = () => {
        onMouseLeave();
    };
    const toggleOpen = () => {
        onMouseOver();
    };
    return (
        <div
            className={` project-list-item ${isOpen ? 'open' : ''} ${isInitial ? 'initial' : ''}`}
            onMouseOver={toggleOpen}
            onMouseLeave={toggleClose}
            style={{order: project.id}}
            data-gradient-start={project.gradient[0]}
            data-gradient-end={project.gradient[1]}
        >
            <FontAwesomeIcon icon="chevron-right" />
            <h3 className="project-title">{project.title}</h3>
            <div className="project-description">{project.description}</div>
        </div>
    );
};

export const ProjectList = ({
    projects,
    onProjectMouseOver,
    onProjectMouseLeave,
    openId
}: {
    projects: IProject[];
    openId: number;
    onProjectMouseLeave: (project: IProject) => void;
    onProjectMouseOver: (project: IProject) => void;
}) => {
    return (
        <Container data-cursor-size="90" data-cursor-text="View Project">
            {projects.map((project) => (
                <ProjectListItem
                    isInitial={project.id === 1}
                    isOpen={project.id === openId}
                    project={project}
                    key={project.id}
                    onMouseOver={() => onProjectMouseOver(project)}
                    onMouseLeave={() => onProjectMouseLeave(project)}
                />
            ))}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    .project-list-item {
        display: grid;
        grid-template-columns: 24px 1fr;
        border-bottom: 1px solid #e5e5e5;
        align-items: center;
        justify-content: center;
        max-height: calc(48px + 24px + 24px);
        transition: max-height 0.2s ease-out;
        overflow: hidden;
        &.initial {
            align-items: flex-start;
            max-height: calc(48px + 24px);
            .project-title {
                padding-top: 0px;
            }
        }
        .svg-inline--fa {
            height: 48px;
            transition: transform 0.2s ease-out, color 0.2s ease-out;
            color: #c4c4c4;
            justify-self: center;
        }
        .project-title {
            padding: 24px;
            color: #c4c4c4;
            transition: color 0.2s ease-out;
        }
        .project-description {
            grid-column-end: span 2;
            padding-bottom: 16px;
        }
        &.open {
            max-height: 200px;
            .project-title {
                color: #1b1425;
            }
            .svg-inline--fa {
                color: #1b1425;
                transform: rotate(90deg);
            }
        }
    }
`;
