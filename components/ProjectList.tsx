import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { EventHandler, Fragment, MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { black, maxDevice } from '../constants/styles';
import { useIsDevice } from '../useWindowSize';
import { ButtonWinona } from './ButtonWinona';

const ProjectListItem = ({
    project,
    onMouseOver = () => {},
    onMouseLeave = () => {},
    isOpen,
    isLast,
    onClick = () => {}
}: {
    project: IProject;
    onMouseOver?;
    onMouseLeave?;
    isOpen: boolean;
    isLast: boolean;
    onClick?: EventHandler<MouseEvent>;
}) => {
    const toggleClose = () => {
        onMouseLeave();
    };
    const toggleOpen = () => {
        onMouseOver();
    };
    const isMobile = useIsDevice('mobile');
    return (
        <div
            className={` project-list-item ${isOpen ? 'open' : ''} ${isLast ? 'last' : ''}`}
            onClick={onClick}
            onMouseOver={toggleOpen}
            onMouseLeave={toggleClose}
            style={{ order: (isMobile ? 1 : -1) * project.id }}
            data-gradient-start={project.gradient[0]}
            data-gradient-end={project.gradient[1]}
        >
            <FontAwesomeIcon icon="chevron-right" />
            <h3 className="project-title">{project.title}</h3>
            <div className="project-description">{project.description}</div>
            <ButtonWinona text="View Project" href={project.route}></ButtonWinona>
            <img className="mobile-only" src={`/${project.image}`} />
        </div>
    );
};

const getNodePageOffset = (node: HTMLDivElement) => {
    const { scrollLeft, offsetWidth } = node;
    return scrollLeft / offsetWidth;
};

export const ProjectList = ({
    projects,
    onProjectMouseOver,
    onProjectMouseLeave,
    openId,
    onMobileProjectChange
}: {
    projects: IProject[];
    openId: number;
    onProjectMouseLeave: (project: IProject) => void;
    onProjectMouseOver: (project: IProject) => void;
    onMobileProjectChange: (newProject: IProject) => void;
}) => {
    const router = useRouter();
    const container = useRef<HTMLDivElement>(null);
    const navBar = useRef<HTMLDivElement>(null);
    const isMobile = useIsDevice('mobile');
    const [currentPage, setCurrentPage] = useState(0);

    const updatePage = useCallback(
        (updatedPage: number) => {
            setCurrentPage(updatedPage);
            const updatedProject = projects.find((project) => project.id === updatedPage + 1);
            if (isMobile) {
                onMobileProjectChange(updatedProject);
            }
            return updatedProject;
        },
        [setCurrentPage, isMobile, onMobileProjectChange]
    );

    const updateThumb = useCallback(
        (updatedProject: IProject) => {
            if (!navBar.current) {
                return;
            }
            const thumb: HTMLSpanElement = navBar.current.querySelector('.thumb') as HTMLSpanElement;
            thumb.style.background = `linear-gradient(137.49deg, ${updatedProject.gradient[0]} 0%, ${updatedProject.gradient[1]} 96.01%)`;
            thumb.style.marginLeft = `${(updatedProject.id - 1) * 33.33}%`;
        },
        [navBar.current]
    );

    const handleProjectListMobileScroll = useCallback(
        (e) => {
            if (!container.current || !isMobile || !navBar.current) {
                return;
            }
            const pageOffset = getNodePageOffset(e.target as HTMLDivElement);
            console.log(pageOffset);
            const newPage = Math.round(pageOffset);
            const newProject = updatePage(newPage);
            console.log(newPage);
            // navBar.current.style.paddingLeft = `${pageOffset * 33.33}%`;
            updateThumb(newProject);
        },
        [navBar.current, currentPage]
    );

    useEffect(() => {
        const defaultProject = updatePage(Math.round(getNodePageOffset(container.current)));
        // navBar.current.style.paddingLeft = `0%`;
        updateThumb(defaultProject);
    }, []);
    return (
        <Fragment>
            <Container
                data-cursor-size="90"
                data-cursor-text="View Project"
                ref={container}
                onScroll={handleProjectListMobileScroll}
            >
                {projects.map((project) => (
                    <ProjectListItem
                        isLast={project.id === 3}
                        isOpen={project.id === openId}
                        project={project}
                        key={project.id}
                        onMouseOver={() => onProjectMouseOver(project)}
                        onMouseLeave={() => onProjectMouseLeave(project)}
                        onClick={() => !isMobile && router.push(project.route)}
                    />
                ))}
            </Container>
            <CarouselNav className="mobile-only" ref={navBar}>
                <span className="thumb"></span>
            </CarouselNav>
        </Fragment>
    );
};

const generateTabsClipPath = (tabGap = 4) => {
    const tabSpread = 33.33;
    const firstGap = `${tabGap}px`;
    const secondGap = `${tabGap * 2}px`;
    const tabWidth = tabSpread - tabGap / 3;
    return `polygon(
            ${tabWidth}% 0%,
            0% 0%,
            0% 100%,
            ${tabWidth}% 100%,
            ${tabWidth}% 0%,
            calc(${tabWidth}% + ${firstGap}) 0%,
            calc(${tabWidth}% + ${firstGap}) 100%,
            calc(${tabWidth * 2}% + ${firstGap}) 100%,
            calc(${tabWidth * 2}% + ${firstGap}) 0%,
            calc(${tabWidth * 2}% + ${secondGap}) 0%,
            calc(${tabWidth * 2}% + ${secondGap}) 100%,
            ${tabWidth * 3}% 100%,
            ${tabWidth * 3}% 0%,
            calc(${tabWidth * 2}% + ${secondGap}) 0%
)`;
};

const CarouselNav = styled.div`
    height: 4px;
    background: #e7e7e7;
    width: 40%;
    border-radius: 2px;
    justify-self: center;
    position: relative;
    overflow: hidden;
    margin-bottom: 16px;
    clip-path: ${generateTabsClipPath()};
    .thumb {
        width: 33.33%;
        display: block;
        height: 100%;
        border-radius: 2px;
        transition: background 0.2s linear;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    &::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;
    -ms-overflow-style: none;
    .project-list-item {
        display: grid;
        grid-template-columns: 24px 1fr;
        border-bottom: 1px solid #e5e5e5;
        align-items: center;
        justify-content: center;
        max-height: calc(48px + 24px + 24px);
        transition: max-height 0.2s ease-out;
        overflow: hidden;
        &.last {
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
                color: ${black};
            }
            .svg-inline--fa {
                color: #1b1425;
                transform: rotate(90deg);
            }
        }
    }
    ${maxDevice.mobile} {
        overflow: auto;
        scroll-snap-type: x mandatory;
        flex-direction: row;
        .project-list-item {
            position: relative;
            scroll-snap-align: start;
            grid-template-columns: 1fr;
            flex: 1;
            flex-shrink: 0;
            min-width: calc(100vw - 32px);
            border-bottom: 0px;
            max-height: 100% !important;
            grid-template-rows: max-content max-content max-content 1fr;
            align-items: flex-start;
            .svg-inline--fa {
                display: none;
            }
            .project-title {
                padding: 0px;
                color: ${black};
            }
            .project-description {
                margin-top: 8px;
            }
            img {
                width: 80vw;
                justify-self: center;
                align-self: center;
                position: absolute;
                margin-top: 15vh;
            }
        }
    }
`;
