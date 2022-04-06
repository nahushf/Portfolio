import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import {CUSTOM_EASING} from '../constants/styles';


const variants = {
    rest: { transform: 'scale(1)', boxShadow: '0px 0px 0px transparent' },
    hover: {
        transform: 'scale(1.03)',
        boxShadow: '8px 0px 24px #000',
        transition: {
            ease: CUSTOM_EASING,
            duration: 0.2
        }
    },
    active: { transform: 'scale(1.005)' }
};

const cardVariants = {
    rest: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            ease: CUSTOM_EASING,
            duration: 0.2
        }
    },
    hover: {

        transition: {
            ease: CUSTOM_EASING,
            duration: 0.2
        }
    },
    active: { background: 'transparent' }
};

export const ProjectTile = ({
    project: { route, gradient, image, title, description, tags }
}: {
    project: IProject;
}) => {
    const router = useRouter();
    return (
        <Container
            initial="rest"
            animate="rest"
            whileHover="hover"
            whileTap="active"
            whileInView="show"
            variants={cardVariants}
            onClick={() => router.push(route)}
            className="project-tile" 
        >
            <div className="project-information">
                <motion.div
                    className="image-container"
                    style={{ background: `linear-gradient(137.49deg, ${gradient[0]} 0%, ${gradient[1]} 96.01%)` }}
                    variants={variants}
                >
                    <img src={image} />
                </motion.div>
                <div className="project-title">{title}</div>
                <div className="project-description">{description}</div>
                <div className="tags-container">
                    {tags.map((tag) => (
                        <div className="tag" key={tag}>
                            #{tag}
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

const Container = styled(motion.div)`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    cursor: pointer;
    border-radius: 12px;
    padding: 8px;
    &:hover {
        background: #291d37;
    }
    .project-information {
        .project-title {
            color: #fff;
            font-weight: 800;
            font-size: 40px;
            margin-top: 16px;
        }
        .project-description {
            font-size: 18px;
        }
    }
    .image-container {
        padding: 24px;
        padding-top: 60px;
        border-radius: 16px;
        max-height: 400px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: start;
        img {
            width: 100%;
        }
    }
    .tags-container {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        font-size: 14px;
        margin-top: 16px;
        .tag {
            background: #433658;
            padding: 4px 8px;
            border-radius: 20px;
            color: #9c92ab;
        }
    }
`;
