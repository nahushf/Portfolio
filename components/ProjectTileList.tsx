import { motion } from 'framer-motion';
import styled from 'styled-components';
import { PROJECTS } from '../constants/projects';
import { ProjectTile } from './ProjectTile';

const variants: IProjectTileVariant = {
    rest: {},
    show: { transition: { staggerChildren: 0.1 } },
    hover: {},
    active: {}
};

export const ProjectTileList = () => {
    return (
        <Container initial="rest" animate="rest" className="projects-list-container" variants={variants}>
            {PROJECTS.sort((a, b) => {
                return a.id > b.id ? 1 : a.id < b.id ? -1 : 0;
            }).map((project) => {
                return <ProjectTile project={project} key={project.id} />;
            })}
        </Container>
    );
};

const Container = styled(motion.div)``;
