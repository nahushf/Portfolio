import Link from 'next/link';
import { createContext, forwardRef, memo, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import styled from 'styled-components';
import { FooterBottom } from './Footer';
import { LeftArrow } from './LeftArrow';
import { ProjectTile } from './ProjectTile';
import { Emp } from './reusableComponents';

export const ProcessSectionHeader = styled.div`
    line-height: 2;
    cursor: pointer;
    &:hover {
        color: ${(props) => props.theme.empText};
    }
    &:active {
        color: ${(props) => props.theme.textColor};
    }
    &.active {
        color: ${(props) => props.theme.empText};
    }
`;

export const Hero = ({ index, title, tagline, children, className = '' }) => {
    return (
        <HeroContainer
            title={
                <>
                    <div className="title-index">{index}</div>
                    <div className="case-study-title">{title}</div>
                    <div className="case-study-tagline">{tagline}</div>
                </>
            }
            className={className}
        >
            <div className="background" />
            {children}
        </HeroContainer>
    );
};

export interface ISectionProps {
    title?: string | JSX.Element | (() => JSX.Element);
    children: ReactNode;
    className?: string;
    titleScrollTarget?: string;
    id?: string;
    scrollSection?: boolean;
}

const SectionImpl = (
    { title = '', children, className = '', titleScrollTarget = '', id = '', scrollSection = true }: ISectionProps,
    ref
) => {
    return (
        <SectionContainer
            className={className || ''}
            id={id}
            {...(scrollSection ? { 'data-scroll-section': true, 'data-scroll': true } : {})}
            ref={ref as any}
        >
            {title ? (
                title instanceof Function ? (
                    title()
                ) : (
                    <SectionTitle
                        {...(titleScrollTarget
                            ? {
                                  'data-scroll': true,
                                  'data-scroll-sticky': true,
                                  'data-scroll-target': titleScrollTarget
                              }
                            : {})}
                    >
                        {title}
                    </SectionTitle>
                )
            ) : null}
            <div className="section-content">{children}</div>{' '}
        </SectionContainer>
    );
};
export const Section = forwardRef(SectionImpl);

export const SplitSection = (props: ISectionProps) => {
    return <SplitSectionContainer {...props} />;
};

export const CardContent = styled.div``;
export const Card = styled.div`
    border-radius: ${(props) => props.theme.cardRadius};
    background: ${(props) => props.theme.cardBackground};
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    &.centered {
        align-items: center;
        ${CardContent} {
            text-align: center;
        }
    }
`;

export const HorizontalCard = styled(Card)`
    flex-direction: row;
`;

export const ListCardTitle = styled.div`
    font-weight: bold;
    background: ${(props) => props.theme.caseStudyColor};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const CardTitle = styled(ListCardTitle)`
    font-size: 24px;
    font-weight: bold;
    background: ${(props) => props.theme.caseStudyColor};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const ListCard = styled.div`
    margin-top: 16px;
    padding: 16px;
    background: ${(props) => props.theme.cardBackground};
    border-radius: ${(props) => props.theme.cardRadius};
`;

export const CardCollectionSection = styled(Section)`
    .section-content {
        display: flex;
        gap: 16px;
        position: relative;
        ${Card} {
            flex: 1;
        }
    }
    &.connected {
        .section-content {
            &::after {
                z-index: -1;
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                height: 8px;
                width: 80%;
                background: ${(props) => props.theme.cardBackground};
            }
        }
    }
`;

export const SectionContainer = styled.div`
    padding: 0px calc(50vw - 512px);
    margin-bottom: 112px;
    .section-content {
        p,
        ol,
        ul {
            margin: 8px 0px;
        }
        ol,
        ul {
            padding-left: 16px;
            li {
                margin-bottom: 8px;
            }
        }
    }
`;
export const SectionTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: ${(props) => props.theme.empText};
    margin-bottom: 24px;
`;
export const HeroContainer = styled(SplitSection)`
    height: 90vh;
    // margin-top: 88px;
    margin-bottom: 32px;
    grid-template-columns: 1fr 1fr !important;
    color: ${(props) => props.theme.background};
    position: relative;
    align-items: center;
    .background {
        position: absolute;
        top: 0px;
        left: 50%;
        transform: translateX(-50%);
        width: 100vw;
        height: 100%;
        background: ${(props) => props.theme.caseStudyColor};
    }
    .section-content {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    ${SectionTitle} {
        z-index: 1;
        color: ${(props) => props.theme.background};
        .title-index {
            font-size: 16px;
        }
        .case-study-title {
            font-size: 93px;
            font-weight: bold;
            letter-spacing: -3px;
            line-height: 1;
        }
        .case-study-tagline {
        }
    }
`;
export const SplitSectionContainer = styled(Section)`
    display: grid;
    grid-template-columns: max-content 1fr;
    ${SectionTitle} {
        width: 400px;
        flex-shrink: 0;
    }
`;

export const HeroStatsContainer = styled(Section)`
    padding-top: 0px;
    .section-content {
        display: flex;
        gap: 40px;
    }
`;

export const HeroStat = styled.div`
    flex-shrink: 0;
    flex: 1;
    &.for {
        flex: 0.5;
        .stat-content {
            display: flex;
            justify-content: center;
        }
    }
    .stat-content {
        .stat-content-item {
            line-height: 2;
        }
    }
`;

export const DPSectionContent = styled.div`
    ol.exploration-idea-list {
        li {
            margin-bottom: 32px;
            .exploration-image-container {
                margin: 16px 0px;
                width: 100%;
                max-width: 350px;
            }
            ${Emp} {
                margin-bottom: 16px;
            }
            .idea-content {
                margin-top: 16px;
            }
        }
    }
    .research-viz {
        gap: 24px;
        margin: 32px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;

        ${Card} {
            padding: 16px;
            width: 245px;

            ${CardTitle} {
                font-size: 16px;
                display: flex;
                justify-content: center;
            }
        }
        .lower-research-points {
            display: flex;
            gap: 72px;
            ${Card} {
                ${CardTitle} {
                    -webkit-background-clip: unset;
                    -webkit-text-fill-color: unset;
                    background: none;
                    color: ${(props) => props.theme.empText};
                }
            }
        }
    }
`;

export const DPSectionContext = createContext({ setScrollSection() {}, currentElementIds: [] });

export const DesignProcessImpl = ({
    title,
    ...props
}: Omit<ISectionProps, 'title'> & {
    title: (renderLink: (props: { id: string; children: ReactNode; navigateID: string }) => JSX.Element) => JSX.Element;
}) => {
    const { scroll } = useLocomotiveScroll();
    const [currentElementIds, setCurrentElementIds] = useState('');
    useEffect(() => {
        if (!scroll) {
            return;
        }

        scroll.on('scroll', (obj) => {
            const elementIds = Object.entries(obj.currentElements)
                .map(([key, element]: any[]) => element.el.getAttribute('data-section-id'))
                .filter((a) => a) as string[];
            setCurrentElementIds(() => {
                return elementIds.toString();
            });
        });
    }, [scroll, currentElementIds, setCurrentElementIds]);
    const renderProcessLink = useCallback(
        ({ id, children, navigateID }) => {
            const latestSectionId = currentElementIds.split(',').pop() || '';
            return (
                <ProcessSectionHeader
                    className={`${latestSectionId === id ? 'active' : ''}`}
                    onClick={() =>
                        scroll.scrollTo(navigateID.startsWith('#') ? navigateID : `#${navigateID}`, {
                            offset: 288,
                            disableLerp: true
                        })
                    }
                >
                    {children}
                </ProcessSectionHeader>
            );
        },
        [scroll, currentElementIds.toString(), setCurrentElementIds]
    );
    return (
        <DPSectionContext.Provider value={{ currentElementIds: currentElementIds.split(','), setScrollSection() {} }}>
            <DesignProcessContainer
                id="design-process"
                title={() => {
                    return (
                        <div
                            className="design-process-title"
                            data-scroll
                            data-scroll-sticky
                            data-scroll-target="#design-process"
                            style={{ paddingTop: '100px' }}
                        >
                            <SectionTitle>Design Process</SectionTitle>
                            {title(renderProcessLink)}
                        </div>
                    );
                }}
                {...props}
            ></DesignProcessContainer>
        </DPSectionContext.Provider>
    );
};

export const DesignProcess = memo(DesignProcessImpl);

const DesignProcessContainer = styled(SplitSection)``;

export const DPSection = ({ sectionId, className = '', ...props }) => {
    const { currentElementIds } = useContext(DPSectionContext);
    const [isCurrentSection, setIsCurrentSection] = useState(false);
    useEffect(() => {
        if (currentElementIds.includes(sectionId)) {
            setIsCurrentSection(true);
        }
    }, [currentElementIds]);
    return (
        <DPSectionContainer
            className={`${className} ${isCurrentSection ? 'current' : ''} design-process-section`}
            {...props}
            data-scroll
            data-section-id={sectionId}
        />
    );
};

const DPSectionContainer = styled.div`
    ${SectionTitle} {
        width: 100%;
    }
    ${DPSectionContent} {
    }
`;

export const BackButtonV2 = () => {
    return (
        <Link href="/" passHref>
            <BackButtonContainer>
                <LeftArrow />
            </BackButtonContainer>
        </Link>
    );
};

const BackButtonContainer = styled.a`
    position: fixed;
    left: 32px;
    top: 32px;
    height: 80px;
    width: 80px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    background: ${(props) => props.theme.background};
    svg {
        height: 32px;
        width: 32px;
    }
    &::before {
        position: absolute;
        content: '';
        height: calc(100% + 4px);
        width: calc(100% + 4px);
        border-radius: 100px;
        background: ${(props) => props.theme.caseStudyColor};
        z-index: -1;
    }
`;

export const CaseStudyFooter = ({ projects }: { projects: IProject[] }) => {
    return (
        <>
            <CaseStudyFooterContainer>
                <SectionTitle>Thanks for reading.</SectionTitle> Feel free to check out some more of my projects
                <div className="footer-projects">
                    {projects.map((project) => (
                        <ProjectTile key={project.id} project={project} />
                    ))}
                </div>
                <FooterBottom />
            </CaseStudyFooterContainer>
        </>
    );
};

const CaseStudyFooterContainer = styled(Section)`
    background: ${(props) => props.theme.cardBackground};
    padding-top: 56px;
    padding-bottom: 56px;
    margin-bottom: 0px;
    .footer-projects {
        margin-top: 24px;
        display: flex;
        gap: 24px;
    }
    .footer__bottom {
        margin-top: 56px;
        gap: 0px;
    }
`;

export const StatContentItem = styled.div`
    margin: 8px 0px;
`;
export const StatContent = styled.div``;
