import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { CUSTOM_EASING, maxDevice } from '../constants/styles';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Tilt = require('react-parallax-tilt').default;

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
    project: { route, gradient, image, title, description, tags, badges, comingSoon }
}: {
    project: IProject;
}) => {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    const ImageWrapper = isMounted ? Tilt : 'div';
    const imageWrapperProps = {
        className: 'image-container parallax-effect-glare-scale',
        style: { background: `linear-gradient(137.49deg, ${gradient[0]} 0%, ${gradient[1]} 96.01%)` },
        ...(isMounted
            ? {
                  glareEnable: true,
                  glareMaxOpacity: 0.6,
                  scale: 1.02,
                  transitionSpeed: 1500,
                  tiltMaxAngleY: 10,
                  perspective: 1000,
                  tiltMaxAngleX: 10
              }
            : {})
    };
    try {
        return (
            <Container
                initial="rest"
                animate="rest"
                whileHover="hover"
                whileTap="active"
                whileInView="show"
                variants={cardVariants}
                onClick={() => !comingSoon && router.push(route)}
                className={`project-tile ${comingSoon ? 'coming-soon' : ''}`}
            >
                <div className="project-information">
                    <ImageWrapper {...imageWrapperProps}>
                        <div className="image-layout-container" style={{ transform: 'translateZ(60px)' }}>
                            <Image src={image} className="inner-element" layout="responsive" objectFit="contain" />
                        </div>
                        <div className="badges-container">
                            {badges?.length &&
                                badges.map(({ img, tagline }, index) => (
                                    <div className="badge-container" key={index}>
                                        <Image src={img} objectFit="contain" height={56} width={56} layout="fixed" />
                                        <div className="badge-tooltip">{tagline}</div>
                                    </div>
                                ))}
                        </div>
                    </ImageWrapper>
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
    } catch (e) {
        console.log(e);
    }
};

const Container = styled(motion.div)`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    border-radius: 12px;
    padding: 8px;
    cursor: pointer !important;
    &:hover {
        background: #291d37;
    }
    .project-information {
        height: 100%;
        display: flex;
        flex-direction: column;
        .project-title {
            color: #fff;
            font-weight: 800;
            font-size: 40px;
            margin-top: 16px;
        }
        .project-description {
            font-size: 18px;
            height: 48px;
        }
    }
    &.coming-soon {
        .image-container {
            &::after {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate3d(-50%, -50%, 110px);
                color: white;
                background: #9b9b9b;
                text-align: center;
                font-size: 20px;
                background-image: url('/under-construction.png');
                height: 100px;
                width: 167px;
                background-size: contain;
                background-position: center;
                box-shadow: 0px 8px 24px  rgba(51, 53, 79, 0.5);
            }
            &::before {
                content: '';
                height: 100%;
                width: 100%;
                background: rgba(0, 0, 0, 0.3);
                position: absolute;
                top: 0px;
                left: 0px;
                transform: translate3d(0, 0, 0px);
            }
            .image-layout-container {
                opacity: 0.3;
            }
        }
    }
    .image-container {
        position: relative;
        padding: 24px;
        flex: 1;
        padding-top: 60px;
        border-radius: 16px;
        max-height: 400px;
        display: flex;
        justify-content: center;
        align-items: start;
        transform-style: preserve-3d;
        cursor: pointer;
        .glare-wrapper {
            border-radius: 16px !important;
        }
        .image-layout-container {
            width: 90%;
            transform: translateZ(60px);
            cursor: pointer;
        }
        .badges-container {
            position: absolute;
            bottom: 16px;
            left: 16px;
            display: flex;
            transform: translateZ(60px);
            .badge-container {
                display: flex;
                position: relative;
                .badge-tooltip {
                    opacity: 0;
                    position: absolute;
                    padding: 4px;
                    border-radius: 4px;
                    background: #444;
                    font-size: 12px;
                    min-width: max-content;
                    bottom: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    color: #fff;
                    border: 1px solid #666;
                    transition: 0.15s ease-in-out;
                }
                &:hover {
                    .badge-tooltip {
                        opacity: 1;
                    }
                }
            }
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
    ${maxDevice.tablet} {
        .project-information {
            .project-title {
                font-size: ${(props) => props.theme.mobileH1FontSize};
            }
            .project-description {
                font-size: ${(props) => props.theme.mobileBodyFontSize};
            }
        }
    }
`;
