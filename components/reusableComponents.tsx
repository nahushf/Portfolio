import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { Fragment } from 'react';
import styled from 'styled-components';
import { isEmpty } from '../scripts/utils';

export const BackButton = ({ href, text }: { href: string; text?: string }) => {
    return (
        <Link href={href}>
            <BackButtonContainer>
                <FontAwesomeIcon icon="chevron-left" />
                &nbsp;{text ?? 'Back'}
            </BackButtonContainer>
        </Link>
    );
};

const BackButtonContainer = styled.div`
    font-weight: 400;
    font-size: 16px;
    height: 29px;
    display: flex;
    align-items: center;
    color: #1b1425;
    .svg-inline--fa {
        margin-right: 8px;
    }
    &:active {
        color: #000;
        font-size: 14px;
    }
`;

export const ProcessStep = ({ name, src }) => {
    return (
        <ProcessStepContainer className="process-step">
            <img className="process-image" src={src} />
            <div className="step-name">{name}</div>
        </ProcessStepContainer>
    );
};

const processThumbnailHeight = '124px';
const ProcessStepContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        height: ${processThumbnailHeight};
        margin-bottom: 16px;
    }
`;

export const ProcessStepsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    &::after {
        content: '';
        background: linear-gradient(137.49deg, #f4a58a 0%, #ed6b4e 96.01%);
        height: 5px;
        width: calc(100% - 1vw);
        position: absolute;
        left: 0px;
        top: calc(${processThumbnailHeight} / 2);
        z-index: -9;
    }
`;

export const ProjectBanner = ({ imgSrc }) => {
    return (
        <ProjectBannerContainer className="project-banner-container">
            <img src={imgSrc} />
        </ProjectBannerContainer>
    );
};

const ProjectBannerContainer = styled.div`
    margin: -24px -24px 0px -24px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70vh;
    img {
        height: 80%;
    }
`;

export const Overview = ({ projectName, projectDescription, salientPoints = [] }) => {
    const salientPointsPresent = !isEmpty(salientPoints);
    return (
        <OverviewContainer>
            <div className="overview" style={{ flex: salientPointsPresent ? 0.6 : 1 }}>
                <div className="project-name">{projectName}</div>
                {projectDescription}
            </div>
            {salientPointsPresent && (
                <div className="salient-points">
                    <div className="salient-points__title">Salient Points</div>
                    <ul>
                        {salientPoints.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>
            )}
        </OverviewContainer>
    );
};

const OverviewContainer = styled.div`
    padding: 40px 0px;
    display: flex;
    align-items: flex-start;
    gap: 32px;
    .overview {
        flex: 0.6;
        .project-name {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 16px;
        }
    }
    .salient-points {
        flex: 0.4;
        color: #9b9b9b;
        .salient-points__title {
            font-weight: 700;
        }
        ul {
            margin: 16px 0px;
        }
    }
`;

export const ProjectStat = ({ className, title, children }) => {
    return (
        <ProjectStatContainer className={`project-stat ${className}`}>
            <div className="project-stat__key">{title}</div>
            <div className="project-stat__value">{children}</div>{' '}
        </ProjectStatContainer>
    );
};

const ProjectStatContainer = styled.div`
    .project-stat__key {
        font-weight: 700;
    }
`;

export const ProjectStatsContainer = styled.div`
    margin: 40px 0px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 24px;
`;

export const SectionTitle = styled.div``;
export const SectionDescription = styled.div``;
export const Section = styled.div`
    margin-bottom: 40px;
    ${SectionTitle} {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 16px;
    }
    ${SectionDescription} {
        span {
            color: #9b9b9b;
        }
    }
`;

export const MajorPoint = ({ children, src }) => {
    return (
        <MajorPointContainer className="major-point__container">
            <img src={src} />
            <div className="major-point">{children}</div>
        </MajorPointContainer>
    );
};

export const MajorPointContainer = styled.div`
    height: 200px;
    display: flex;
    align-items: center;
    gap: 16px;
    font-weight: 700;
    width: 100%;
    margin: 16px auto 0px auto;
    img {
        height: 100%;
    }
`;

export const Insight = ({ headerText = 'Insight', className = '', index, header, children }) => {
    return (
        <InsightContainer className={`insight-container ${className}`}>
            <div className="index">
                {headerText} #{index}
            </div>
            <div className="header">{header}</div>
            <div className="content">{children}</div>
        </InsightContainer>
    );
};

const InsightContainer = styled.div`
    margin: 16px auto 0px auto;
    width: 50vw;
    .index,
    .header {
        font-weight: 700;
    }
    .header {
    }
    .content {
    }
`;

export const InsightsContainer = styled.div``;

export const ScreensSection = ({ title, children, srcs }) => {
    return (
        <ScreensSectionContainer className={srcs.length === 3 ? 'vertical' : ''}>
            <div className="screens-info">
                <div className="screens-section__title">{title}</div>
                <div className="screens-section__description">{children}</div>
            </div>
            <div className="screen-images">
                {srcs.map((src, index) => {
                    return <img src={src} key={index} />;
                })}
            </div>
        </ScreensSectionContainer>
    );
};

export const ScreensSectionContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    margin-top: 32px;
    display: flex;
    gap: 24px;
    .screens-info {
    width: 100%;
        .screens-section__title {
            font-weight: 700;
        }
    }
    .screen-images {
        display: flex;
        gap: 32px;
        img {
            height: 400px;
        }
    }
    &:nth-child(2n + 1) {
        flex-direction: row-reverse;
    }
    &.vertical {
        flex-direction: column-reverse;
        align-items: center;
    }
`;

export const ProjectInfoContainer = styled.div`
    max-width: 700px;
    margin: 0px auto;
`;

export const ProjectContainer = styled.div`
    font-size: 16px;
    line-height: 24px;
    padding: 24px;
`;

export const ProjectFooter = () => {
    return (
        <Fragment>
            <ContactContainer className="contact">
                Have some feedback for this project or just want to chat? Feel free to&nbsp;
                <a href="mailto:nahush.farkande@gmail.com">reach out to me</a>
            </ContactContainer>
            <FooterContainer className="project-footer">
                <BackButton href="/projects" text="Back to Projects" />
            </FooterContainer>
        </Fragment>
    );
};
const ContactContainer = styled(Section)`
    color: #6f6f6f;
    a {
        color: #000;
        text-decoration: underline;
    }
`;
const FooterContainer = styled.div``;
