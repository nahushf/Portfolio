import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, useAnimation, useViewportScroll } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useRef, useState } from 'react';
import Scrollbars, { ScrollbarProps } from 'react-custom-scrollbars-2';
import { InView } from 'react-intersection-observer';
import styled, { useTheme } from 'styled-components';
import { CUSTOM_EASING, HOME_SHOW_VARIANT, maxDevice, red, textColor } from '../constants/styles';
import { isEmpty } from '../scripts/utils';
import { useIsDevice } from '../useWindowSize';
import { CloseIcon } from './CloseIcon';
import { Footer } from './Footer';
import { Logo } from './icons/Logo';
import { MenuIcon } from './icons/MenuIcon';

export const BackButton = ({ href, text }: { href: string; text?: string }) => {
    return (
        <Link href={href}>
            <BackButtonContainer layoutId="back-button">
                <FontAwesomeIcon icon="chevron-left" />
                &nbsp;{text ?? 'Back'}
            </BackButtonContainer>
        </Link>
    );
};

const BackButtonContainer = styled(motion.div)`
    cursor: pointer;
    font-weight: 400;
    font-size: 16px;
    height: 29px;
    display: flex;
    align-items: center;
    color: #fafafa;
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
    margin: 72px -24px 0px -24px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70vh;
    img {
        height: 80%;
    }
`;

export const Overview = ({
    projectName,
    projectDescription,
    salientPointsTitle = 'Salient Points' as any,
    salientPoints = []
}) => {
    const salientPointsPresent = !isEmpty(salientPoints);
    return (
        <OverviewContainer>
            <div className="overview" style={{ flex: salientPointsPresent ? 0.6 : 1 }}>
                <div className="project-name">{projectName}</div>
                {projectDescription}
            </div>
            {salientPointsPresent && (
                <div className="salient-points">
                    <Emp className="salient-points__title">{salientPointsTitle}</Emp>
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
    display: flex;
    align-items: flex-start;
    gap: 32px;
    .overview {
        flex: 0.6;
        .project-name {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 16px;
            color: #fafafa;
        }
    }
    .salient-points {
        flex: 0.4;
        color: ${(props) => props.theme.paragraph};
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
        color: #fafafa;
        font-weight: 700;
    }
`;

export const ProjectStatsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 24px;
`;

export const SectionTitle = styled.div``;
export const SectionDescription = styled.div``;
export const Section = styled.div`
    ${SectionTitle} {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 16px;
        color: #fafafa;
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
    color: #fafafa;
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
    margin: 0px auto 0px auto;
    width: 80%;
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    grid-template-rows: max-content 1fr;
    grid-column-gap: 32px;
    background: ${(props) => props.theme.cardBackground};
    padding: 16px;
    border-radius: 8px;
    .content {
        grid-row-end: span 2;
    }
    .header {
        grid-row-start: 2;
    }
    .index,
    .header {
        font-weight: 700;
        color: #fafafa;
    }
    .header {
    }
    .content {
    }
`;

export const InsightsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 16px;
`;

export const ScreensSection = ({ title, children, srcs }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    return (
        <ScreensSectionContainer className={`screens-section ${srcs.length === 3 ? 'vertical' : ''}`}>
            <div className="screens-info">
                <div className="screens-section__title">{title}</div>
                <div className="screens-section__description">{children}</div>
            </div>
            <InView
                className="screen-images"
                onChange={(inView, entry) => {
                    if (!videoRef.current) {
                        return;
                    }
                    if (inView) {
                        videoRef.current.play();
                    } else {
                        videoRef.current.pause();
                        videoRef.current.currentTime = 0;
                    }
                }}
            >
                {srcs.map((src, index) => {
                    if (src.endsWith('mp4')) {
                        return (
                            <video loop width={300} autoPlay muted ref={videoRef} key={index}>
                                <source src={src} />
                                Your browser does not support videos
                            </video>
                        );
                    }
                    return <img src={src} key={index} />;
                })}
            </InView>
        </ScreensSectionContainer>
    );
};

export const ScreensSectionContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    margin-top: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    .screens-section__title {
        color: #fafafa;
    }
    .screens-info {
        padding-left: 80px;
        margin-top: 80px;
        width: 100%;
        .screens-section__title {
            margin-bottom: 24px;
            font-weight: 700;
        }
    }
    .screen-images {
        display: flex;
        gap: 32px;
        justify-self: center;
        img {
            height: 400px;
            box-shadow: 8px 8px 24px 0px rgba(0, 0, 0, 0.1);
        }
    }
    &:nth-child(2n + 1) {
        flex-direction: row-reverse;
    }
    &.vertical {
        flex-direction: column-reverse;
        align-items: center;
    }
    ${maxDevice.mobile} {
        grid-template-columns: 1fr;
        .screens-info {
            padding-left: 0px;
        }
    }
`;

export const ProjectInfoContainer = styled.div`
    max-width: 1024px;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    gap: 80px;
    padding: 40px 0px;
`;

export const ProjectContainer = styled.div`
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    padding: 24px;
    .footer {
        margin: 0px -24px -24px -24px;
        width: 100vw;
    }
`;

export const ProjectFooter = () => {
    return (
        <Fragment>
            <ContactContainer className="contact">
                Have some feedback for this project or just want to chat? Feel free to&nbsp;
                <a href="mailto:nahush.farkande@gmail.com">reach out to me</a>
            </ContactContainer>
            <FooterContainer className="project-footer">
                <BackButton href="/" text="Back to Projects" />
            </FooterContainer>
        </Fragment>
    );
};
const ContactContainer = styled(Section)`
    color: #6f6f6f;
    a {
        color: ${textColor};
        text-decoration: underline;
    }
`;
const FooterContainer = styled.div``;

export const NavLink_DEP = ({
    href,
    text = null,
    newTab = false,
    active = false
}: {
    href: string;
    newTab?: boolean;
    text?: string | JSX.Element;
    active?: boolean;
}) => {
    return (
        <NavLinkContainer
            href={href}
            {...(newTab ? { target: '_blank' } : {})}
            className={`${active ? 'active' : ''}`}
            rel="noreferrer"
        >
            {text}
        </NavLinkContainer>
    );
};

const NavLinkContainer = styled.a`
    cursor: pointer;
    text-decoration: underline;
    text-transform: uppercase;
    font-size: 16px;
    padding: 12px 0px;
    height: 45px;
    &:active {
        transform: scale(0.9);
    }
    &.active {
        position: relative;
        &::before {
            content: '';
            position: absolute;
            height: 100%;
            width: 100%;
            background: #ffef60;
            height: 15px;
            margin-top: 8px;
            z-index: -1;
        }
    }
`;

const variants = {
    hidden: { opacity: 0, marginLeft: '-6px' },
    enter: { opacity: 1, marginLeft: '0px' },
    exit: { opacity: 0, marginLeft: '-6px' }
};
const containerVariant = {};

export const NavMenu = ({ options, toggleContent }) => {
    const [open, setOpen] = useState(false);
    const animationControl = useAnimation();
    return (
        <NavMenuContainer
            className={`${open ? 'open' : ''}`}
            onMouseOver={() => {
                setOpen(true);
                animationControl.start('enter');
            }}
            onMouseLeave={() => {
                animationControl.start('exit').then(() => setOpen(false));
            }}
            {...({ $totalOptions: options.length } as any)}
        >
            <NavLinkContainer as="div" className="toggle">
                {toggleContent}
            </NavLinkContainer>
            <div className="options-container">
                {options.map((option, index) => {
                    return (
                        <NavLinkContainer
                            as={motion.a}
                            initial="hidden"
                            animate={animationControl}
                            transition={{ type: 'linear', delay: index * 0.05 }}
                            variants={variants}
                            key={index}
                            target="_blank"
                            href={option.href}
                        >
                            {option.content}
                        </NavLinkContainer>
                    );
                })}
            </div>
        </NavMenuContainer>
    );
};

const NavMenuContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    .options-container {
        height: 45px;
        align-items: center;
        gap: 24px;
        display: flex;
        display: none;
    }
    &.open {
        .options-container {
            display: flex;
        }
    }
`;

const socialOptions = [
    { content: 'Behance', href: 'https://www.behance.net/nahushFarkande?tracking_source=search_users_recommended' },
    { content: 'Instagram', href: 'https://www.instagram.com/nahushfarkande/' },
    { content: 'StackOverflow', href: 'https://stackoverflow.com/users/4712758/nahush-farkande' },
    { content: 'LinkedIn', href: 'https://www.linkedin.com/in/nahushfarkande/' }
];

export const Navigation_DEP = () => {
    const { pathname } = useRouter();
    return (
        <Navigation_DEPContainer className="navigation">
            <NavMenu toggleContent="Social" options={socialOptions} />
            <NavLink_DEP href="https://medium.com/@nahush.farkande" text="Blog" newTab />
            <NavLink_DEP href="projects" text="Projects" />
            <NavLink_DEP href="about" text="About" active={pathname === '/about'} />
        </Navigation_DEPContainer>
    );
};

const Navigation_DEPContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 24px;
    .svg-inline--fa {
        height: 32px;
        width: 32px;
        color: #1b1425;
        &:active {
            color: #000;
        }
    }
`;

export const Navigation = ({ variants }: { variants?: { initial; animate; exit } | boolean }) => {
    const router = useRouter();
    const { initial, animate, exit } =
        (typeof variants === 'boolean' && variants === true ? HOME_SHOW_VARIANT(1.7) : variants) || {};
    const isMobile = useIsDevice('mobile');
    const [menuOpen, setMenuOpen] = useState(false);
    const { paragraph } = useTheme();
    return (
        <NavigationContainer variants={{ initial, animate, exit }} initial="initial" animate="animate" exit="exit">
            <NavLink href="/" className="brand-container">
                <Logo />
            </NavLink>
            <div className="navigation-toggle mobile-only" onClick={() => isMobile && setMenuOpen(!menuOpen)}>
                <MenuIcon />
            </div>
            <motion.div
                animate={menuOpen ? 'open' : 'closed'}
                initial="closed"
                variants={{ closed: { x: isMobile ? '100%' : 0 }, open: { x: 0 } }}
                transition={{ duration: 0.5, ease: CUSTOM_EASING }}
                className={`nav-items-container `}
            >
                <div className="close-button-container" onClick={() => setMenuOpen(false)}>
                    <CloseIcon className="mobile-only" fill={paragraph} />
                </div>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="https://medium.com/@nahush.farkande" newTab>
                    Blog
                </NavLink>
                <NavLink href="/static/Resume.pdf">Resume</NavLink>
            </motion.div>
        </NavigationContainer>
    );
};

export const NavLink = ({ href, className = '', children, newTab = false }) => {
    const router = useRouter();
    return (
        <Link {...{ href }}>
            <a
                className={`nav-item ${className || ''} ${router.pathname === href ? 'active' : ''}`}
                {...(newTab ? { target: '_blank' } : {})}
            >
                {children}
            </a>
        </Link>
    );
};

const NavigationContainer = styled(motion.div)`
    background: rgb(27, 19, 37, 0.8);
    z-index: 9999;
    position: fixed;
    top: 0px;
    left: 0px;
    padding: 16px 24px;
    width: 100vw;
    display: flex;
    align-items: center;
    backdrop-filter: blur(24px);
    justify-content: space-between;
    .brand-container {
        display: flex;
        align-items: center;
    }
    img {
        height: 40px;
    }
    .logo {
        display: flex;
        font-weight: bold;
        font-size: 72px;
        line-height: 72px;
        letter-spacing: -5px;
        color: ${(props) => props.theme.empText};
    }
    .nav-items-container {
        display: flex;
        align-items: center;
        gap: 32px;
        .nav-item {
            padding: 8px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 400;
            &:active {
                color: #e0e0e0;
            }
            &.active {
                color: white;
            }
        }
    }
    ${maxDevice.mobile} {
        .nav-items-container {
            .close-button-container {
                left: 0px;
                top: 0px;
                height: 80px;
                width: 80px;
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                svg {
                    height: 42px;
                    width: 42px;
                }
            }
            background: ${(props) => props.theme.darkBackground};
            height: 100vh;
            width: 90vw;
            position: fixed;
            top: 0px;
            right: 0px;
            flex-direction: column;
            gap: 16px;
            padding-top: 80px;
        }
        .logo {
            font-size: 56px;
            letter-spacing: -3px;
            line-height: 1;
        }
        .navigation-toggle {
            display: flex;
            align-items: center;
        }
    }
`;

export const Name = styled(motion.div)`
    font-size: 96px;
    font-weight: bold;
    line-height: 96px;
    letter-spacing: -1vh;
    color: white;
    padding: 0px 10px;
    .full-stop {
        color: ${red};
    }
    ${maxDevice.mobile} {
        padding: 0px;
        font-size: 39px;
        line-height: 1;
        letter-spacing: -2px;
    }
`;

export const Emp = styled.span`
    color: ${(props) => props.theme.empText} !important;
    font-weight: bold;
`;

export const HomePageSection = styled(motion.div)`
    scroll-snap-align: start;
    flex-shrink: 0;
`;

export const FullStop = styled.div.attrs(() => ({ children: '.' }))`
    color: ${(props) => props.theme.primary};
`;

const parentVariant = {
    initial: {},
    animate: {
        transition: { delayChildren: 0.4, staggerChildren: 0.05 }
    }
};

const letterVariant = {
    initial: { y: 400 },
    animate: {
        y: 0,
        transition: {
            ease: CUSTOM_EASING,
            duration: 0.5
        }
    }
};

export const AnimatedTitle = ({ text }) => {
    const isMobile = useIsDevice('mobile');
    return (
        <motion.div variants={parentVariant} initial="initial" animate="animate">
            {[...text.split('')].map((chr: string, index: number) => {
                return chr === ' ' ? (
                    isMobile ? (
                        <br key={index} />
                    ) : (
                        <Fragment key={index}>&nbsp;</Fragment>
                    )
                ) : (
                    <motion.span
                        key={index}
                        variants={letterVariant}
                        className="animated-title__char"
                        style={{ display: 'inline-block' }}
                    >
                        {chr}
                    </motion.span>
                );
            })}
        </motion.div>
    );
};

export const AnimatedName = ({ name = 'Nahush Farkande.' }) => {
    return (
        <AnimatedNameContainer>
            <AnimatedTitle text={name} />
        </AnimatedNameContainer>
    );
};

const AnimatedNameContainer = styled(Name)`
    overflow: hidden;
    .animated-title__char:last-child {
        color: ${(props) => props.theme.primary};
    }
    ${maxDevice.mobile} {
    }
`;

export const ImageDescription = styled.div`
    font-size: 12px;
    line-height: 18px;
    color: ${(props) => props.theme.paragraph};
`;

export const CustomScroll = (props: ScrollbarProps) => {
    return <Scrollbars renderView={(viewProps) => <div className="scroll-view" {...viewProps} />} {...props} />;
};
