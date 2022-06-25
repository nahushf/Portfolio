import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import styled, { ThemeProvider, useTheme } from 'styled-components';
import { CitizensLogo } from '../../components/icons/CitizensLogo';
import {
    AnalystIcon,
    AnnotationIcon,
    DashboardIcon,
    EAIcon,
    ExecutiveIcon,
    FieldIcon,
    InterviewIcon,
    ManagerIcon,
    NCIcon,
    SensorLogo,
    TemplateIcon
} from '../../components/NetilionConserveIcons';
import { IconedListCard } from '../../components/reusable/IconedListCard';
import { UnderlinedLink } from '../../components/reusable/UnderlinedLink';
import { Emp, ImageDescription } from '../../components/reusableComponents';
import {
    BackButtonV2,
    Card,
    CardCollectionSection,
    CardContent,
    CardTitle,
    CaseStudyFooter,
    DesignProcess,
    DPSection,
    DPSectionContent,
    Hero,
    HeroStat,
    HeroStatsContainer,
    ListCard,
    ListCardTitle,
    ProcessSectionHeader,
    Section,
    SectionTitle,
    SplitSection,
    StatContent,
    StatContentItem
} from '../../components/scrollComponents';
import { NETILION_CONSERVE, PROJECTS } from '../../constants/projects';
import { maxDevice } from '../../constants/styles';
import benchmarkLogo from '../../public/netilion-conserve/benchmark-logo.png';
import currentWorkflow from '../../public/netilion-conserve/current-workflow.png';
import EHLongLogo from '../../public/netilion-conserve/EH-long-logo.png';
import EHShortLogo from '../../public/netilion-conserve/EH-short-logo.png';
import finalIdea from '../../public/netilion-conserve/final-idea.png';
import ideationFeatures from '../../public/netilion-conserve/ideation-features.png';
import informationArchitecture from '../../public/netilion-conserve/information-architecture.png';
import microsoftLogo from '../../public/netilion-conserve/microsoft-logo.png';
import annotationsAndChartsMF from '../../public/netilion-conserve/mid-fi/annotations-charts.png';
import dataConnectionsMF from '../../public/netilion-conserve/mid-fi/data-connections.png';
import memoryPalaceMF from '../../public/netilion-conserve/mid-fi/memory-palace.png';
import reportsMF from '../../public/netilion-conserve/mid-fi/reports.png';
import NetilionLogo from '../../public/netilion-conserve/netilion-logo.png';
import nirasLogo from '../../public/netilion-conserve/niras-logo.png';
import salesforceLogo from '../../public/netilion-conserve/salesforce-logo.png';
import annotationScreen from '../../public/netilion-conserve/screens/annotations.png';
import connectionsScreen from '../../public/netilion-conserve/screens/connections.png';
import homeScreen from '../../public/netilion-conserve/screens/home.png';
import memoryPalaceScreen from '../../public/netilion-conserve/screens/memory-palace.png';
import reportsScreen from '../../public/netilion-conserve/screens/reports.png';
import dataConnectionSketch from '../../public/netilion-conserve/sketches/data-connections.png';
import homeSketch from '../../public/netilion-conserve/sketches/home.png';
import memoryPalaceSketch from '../../public/netilion-conserve/sketches/memory-palace.png';
import teamPicture from '../../public/netilion-conserve/team-picture.png';
import thematicAnalysis from '../../public/netilion-conserve/thematic-analysis.png';

const sketches = {
    Home: homeSketch,
    'Memory Palace': memoryPalaceSketch,
    'Data Connections': dataConnectionSketch
};

const midFiScreens = {
    'Charts and Annotations': annotationsAndChartsMF,
    'Memory Palace': memoryPalaceMF,
    'Data Connections': dataConnectionsMF,
    Reports: reportsMF
};

const screens = [
    {
        title: `Custom Charts and Statistics`,
        src: homeScreen,
        desc: (
            <>
                Users can <Emp>build custom statistics and build custom charts</Emp> out of one or more readings that
                will be connected to the smart E+H sensors or to live excel sheets.
            </>
        )
    },
    {
        title: `Discussions anywhere on the UI`,
        src: annotationScreen,
        desc: (
            <>
                Users can start discussions on every section of the UI for smoother communication within the
                organization. These discussions can be turned into tasks that can be assigned to people within the
                organization.
            </>
        )
    },
    {
        title: `All Discussions and Tasks in one place`,
        src: memoryPalaceScreen,
        desc: (
            <>
                All <Emp>discussions and tasks can be found in one place</Emp>. Users can travel back in time to view
                past discussions and tasks.
            </>
        )
    },
    {
        title: `Simplified Report Generation`,
        src: reportsScreen,
        desc: (
            <>
                Users can build <Emp>report templates using UI component IDs</Emp> (time-range in this case) as
                placeholders. When the user clicks on &quot;Download&quot; the system will populate the placeholders
                with the corresponding values.
            </>
        )
    },
    {
        title: `Organization-wide visibility`,
        src: connectionsScreen,
        desc: (
            <>
                Users can view all the <Emp>E+H sensor connections and the connected excel sheets</Emp> in one place
                along&nbsp;
                <Emp>with their health</Emp> (using E+H&apos;s Heartbeat Technology) and replacement recommendations.
            </>
        )
    }
];

const competitorLogos = [
    [microsoftLogo, 'Microsoft sustainability cloud '],
    [salesforceLogo, 'Salesforce net zero cloud'],
    [benchmarkLogo, 'Benchmark ESG'],
    [nirasLogo, 'Niras SDG']
];

const ScrollTriggerProxy = () => {
    // const { scroll } = useLocomotiveScroll();
    // useEffect(() => {
    // if (!scroll) {
    // return () => {};
    // }
    // const element = scroll?.el;
    // scroll.on('scroll', ScrollTrigger.update);
    // ScrollTrigger.scrollerProxy(element, {
    // scrollTop(value) {
    // return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
    // },
    // getBoundingClientRect() {
    // return {
    // top: 0,
    // left: 0,
    // width: window.innerWidth,
    // height: window.innerHeight
    // };
    // },
    // pinType: element.style.transform ? 'transform' : 'fixed'
    // });
    // return () => {
    // ScrollTrigger.addEventListener('refresh', () => scroll?.update());
    // ScrollTrigger.refresh();
    // };
    // }, [scroll]);
    return null;
};

const wrapperClass = 'scroll-wrap';

const NetilionConserve = () => {
    const theme = useTheme();
    const containerRef = useRef(null);
    const projectDescriptor = NETILION_CONSERVE;
    // const { scroll } = useLocomotiveScroll();
    const keyFeatureSection = useRef<HTMLDivElement>(null);
    const [contentWidth, setContentWidth] = useState(0);
    useEffect(() => {
        if (!keyFeatureSection.current) {
            return;
        }
        setContentWidth((keyFeatureSection.current.querySelector(`.${wrapperClass}`) as HTMLDivElement).offsetWidth);
    }, []);
    // useEffect(() => {
    // if (!scroll) {
    // return;
    // }
    // gsap.registerPlugin(ScrollTrigger);

    // scroll.on('scroll', ScrollTrigger.update);

    // const element = scroll?.el;
    // scroll.on('scroll', ScrollTrigger.update);
    // ScrollTrigger.scrollerProxy(element, {
    // scrollTop(value) {
    // return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
    // },
    // getBoundingClientRect() {
    // return {
    // top: 0,
    // left: 0,
    // width: window.innerWidth,
    // height: window.innerHeight
    // };
    // },
    // pinType: element.style.transform ? 'transform' : 'fixed'
    // });
    // const scrollWrapper = keyFeatureSection.current.querySelector('.abc') as HTMLDivElement;
    // const scrollerWidth = scrollWrapper.offsetWidth;
    // const horizontalScrollWidth = scrollerWidth - window.innerWidth;
    // gsap.to('.abc', {
    // scrollTrigger: {
    // scroller: element, //locomotive-scroll
    // scrub: true,
    // trigger: '#key-features',
    // pin: true,
    // start: 'center center',
    // end: scrollerWidth
    // },
    // x: horizontalScrollWidth,
    // ease: 'none'
    // });
    // ScrollTrigger.scrollerProxy(scroller);
    // }, [scroll]);
    return (
        <ThemeProvider theme={{ ...theme, caseStudyColor: projectDescriptor.cssGradient }}>
            <Container data-scroll-container ref={containerRef}>
                <ScrollTriggerProxy />
                {/* <Navigation /> */}
                <BackButtonV2 />
                <div className="case-study-container">
                    <Hero
                        title={projectDescriptor.title}
                        index={projectDescriptor.id.toString().padStart(2, '0')}
                        tagline={projectDescriptor.description}
                    >
                        <Image
                            src={projectDescriptor.image}
                            objectFit="contain"
                            priority
                            alt="Netilion Conserve hero image"
                        />
                    </Hero>
                    <HeroStatsContainer>
                        <HeroStat className="for">
                            <SectionTitle>For</SectionTitle>
                            <StatContent>
                                <Image objectFit="contain" src={EHLongLogo} alt="E+H Full Logo"></Image>
                            </StatContent>
                        </HeroStat>
                        <HeroStat className="type-and-deliverables">
                            <SectionTitle>Project Type & Deliverables</SectionTitle>
                            <StatContent>
                                <StatContentItem>Product Design </StatContentItem>
                                <StatContentItem>Business Design</StatContentItem>
                                <StatContentItem>Figma Prototype</StatContentItem>
                            </StatContent>
                        </HeroStat>
                        <HeroStat className="details">
                            <SectionTitle>Project Details</SectionTitle>
                            <StatContent>
                                <StatContentItem>
                                    <Emp>Role</Emp>
                                    <div className="detail-content">Product designer</div>
                                </StatContentItem>
                                <StatContentItem>
                                    <Emp>Team</Emp>
                                    <div className="detail-content">3 HCI Students</div>
                                </StatContentItem>
                                <StatContentItem>
                                    <Emp>Duration</Emp>
                                    <div className="detail-content">10 weeks</div>
                                </StatContentItem>
                            </StatContent>
                        </HeroStat>
                    </HeroStatsContainer>
                    <SplitSection title="The Client" className="the-client">
                        <p>
                            <Emp>Endress and Hauser</Emp> is a company that manufactures&nbsp;
                            <abbr title="Internet of Things">IoT</abbr>-based precision measurement instruments such as
                            flow meters, pressure meters, level meters, etc. which can transmit readings over the
                            internet.
                        </p>
                        <div className="eh-image-container">
                            <Image
                                src={EHShortLogo}
                                objectFit="contain"
                                layout="responsive"
                                alt="E+H Short Logo"
                            ></Image>
                        </div>
                        <p>
                            The company also sells a suite of digital products called{' '}
                            <Emp>Netillion Water Network Insights (NWNI)</Emp> which works with&nbsp;
                            <abbr title="Internet of Things">IoT</abbr>-based sensors to provide various water network
                            insights in the Food & beverage, wastewater, and chemical industries.
                        </p>
                        <Image src={NetilionLogo} objectFit="contain" height={120} alt="Netilion Logo" />
                        <p>
                            To better understand how water treatment plants work, E+H connected us with{' '}
                            <Emp>Citizen&apos;s Energy</Emp> which is a company that owns water treatment plants in
                            downtown Indianapolis.
                        </p>
                        <CitizensLogo />
                    </SplitSection>
                    <SplitSection title="Our Challenge" className="our-challenge">
                        Build a sustainability tracking system for Water Treatment Companies.
                    </SplitSection>
                    <SplitSection title="My Contributions">
                        <ol>
                            <li>
                                Designed interview questionnaires and guided the conversation during the plant visit and
                                interviews.
                            </li>
                            <li>Ideation and Sketching.</li>
                            <li>Constructed the Medium and High Fidelity Prototypes.</li>
                            <li>Conducted evaluations on the medium-fidelity prototype.</li>
                        </ol>
                    </SplitSection>
                    <CardCollectionSection id="problem-and-solution">
                        <Card>
                            <CardTitle>Problem Statement</CardTitle>
                            <CardContent>
                                How might we make it easier for water treatment and community water companies to track
                                their sustainability progress and activities?
                            </CardContent>
                        </Card>
                        <Card>
                            <CardTitle>Solution</CardTitle>
                            <CardContent>
                                A sustainability dashboard called <Emp>Netilion Conserve</Emp> that will allow users to
                                start discussions on all measurements and charts to simplify communications as well as
                                provide a template-based report generation system.
                            </CardContent>
                        </Card>
                    </CardCollectionSection>
                    <CardCollectionSection className="connected" title="How will it work" id="how-will-it-work">
                        <Card className="centered">
                            <CardTitle>Smart E+H meters</CardTitle>
                            <SensorLogo />
                            <CardContent>
                                Smart meters manufactured by E+H will send readings from all over the water treatment
                                plant to a server.
                            </CardContent>
                        </Card>
                        <Card className="centered">
                            <CardTitle>Netilion Conserve</CardTitle>
                            <NCIcon />
                            <CardContent>The desktop application makes sense of the isolated data.</CardContent>
                        </Card>
                        <div className="card-group">
                            <IconedListCard>
                                <Emp>Sustainability Insights and Dashboards</Emp>
                                <DashboardIcon />
                                <p>Customized dashboards and an ability to generate custom visualizations.</p>
                            </IconedListCard>
                            <IconedListCard>
                                <Emp>Template-based Report generation</Emp>
                                <TemplateIcon />
                                <p>
                                    Users can upload report templates that the system will auto-fill for easier reports.
                                </p>
                            </IconedListCard>
                            <IconedListCard>
                                <Emp>Annotation-based communications</Emp>
                                <AnnotationIcon />
                                <p>
                                    Messages and tasks can be attached to any part of the UI for better communication.
                                </p>
                            </IconedListCard>
                        </div>
                    </CardCollectionSection>
                    <Section id="key-features" title="Key Features" ref={keyFeatureSection}>
                        <div className={wrapperClass}>
                            {screens.map(({ src, desc, title }, index) => (
                                <div className="screen-info-container" key={index}>
                                    <div className="screen-info">
                                        <div className="screen-info__title">
                                            <Emp>{title}</Emp>
                                        </div>
                                        <div className="screen-info__description">{desc}</div>
                                    </div>
                                    <div className="screen__image-wrapper" key={index}>
                                        <Image
                                            src={src}
                                            objectFit="contain"
                                            layout="responsive"
                                            alt={`${title} - screen`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>
                    <DesignProcess
                        title={(renderLink) => (
                            <>
                                {renderLink({
                                    id: 'research',
                                    children: 'Research',
                                    navigateID: 'formative-research'
                                })}
                                {renderLink({
                                    id: 'define',
                                    children: 'Define',
                                    navigateID: 'formative-research'
                                })}
                                {renderLink({
                                    navigateID: 'solution-requirements',
                                    children: 'Ideation',
                                    id: 'ideation'
                                })}
                                {renderLink({
                                    navigateID: 'solution-requirements',
                                    children: 'Prototyping',
                                    id: 'prototype'
                                })}
                                {renderLink({
                                    navigateID: 'expert-validation',
                                    children: 'Evaluation',
                                    id: 'evaluation'
                                })}
                                {renderLink({
                                    navigateID: 'expert-validation',
                                    children: 'Final Design',
                                    id: 'final-design'
                                })}
                                {/* {renderLink({ */}
                                {/* navigateID: 'expert-validation', */}
                                {/* children: 'Business Design', */}
                                {/* id: 'business' */}
                                {/* })} */}
                            </>
                        )}
                    >
                        <DPSection id="research" sectionId="research">
                            <SectionTitle>Research</SectionTitle>
                            <DPSectionContent>
                                I used the following methods to conduct my research -
                                <div className="methods-group">
                                    <Card className="card">
                                        <EAIcon />
                                        <Emp>Environmental Analysis</Emp>
                                    </Card>
                                    <Card className="card">
                                        <InterviewIcon />
                                        <Emp>Interviews</Emp>
                                    </Card>
                                    <Card className="card">
                                        <FieldIcon />
                                        <Emp>Field Visit</Emp>
                                    </Card>
                                </div>
                                <p>See how and why I performed these methods below.</p>
                            </DPSectionContent>
                        </DPSection>
                        <DPSection id="ea" sectionId="research" className="research-description-section">
                            <SectionTitle>Environmental Analysis</SectionTitle>
                            <DPSectionContent>
                                <ResearchDiv>
                                    <Emp>Goal</Emp>
                                    <p>
                                        To understand how water treatment works and the current sustainability tracking
                                        landscape in the water treatment industry.
                                    </p>
                                </ResearchDiv>
                                <ResearchDiv>
                                    <Emp>How did I do it?</Emp>
                                    <p>
                                        The team researched online to fill each section of this Environmental Analysis
                                        template. I read&nbsp;
                                        <Link
                                            href="https://docs.google.com/document/d/1--7kBDQk3-HJzp1gI3vN_SOoLwYWSX95X7sTZKEQJAw/edit"
                                            passHref
                                        >
                                            <UnderlinedLink target="_blank">
                                                20 online articles about sustainability in the water treatment industry,
                                                watched 15-20 videos,
                                            </UnderlinedLink>
                                        </Link>
                                        &nbsp; and went through the financial reports of Citizen&apos;s Energy (assigned
                                        customer).
                                    </p>
                                </ResearchDiv>
                                <ResearchDiv>
                                    <Emp>Challenges faced</Emp>
                                    <ol>
                                        <li>Understanding competitors&apos; products that were paid.</li>
                                    </ol>
                                </ResearchDiv>
                                <ResearchDiv>
                                    <Emp>How I overcame them</Emp>
                                    <ol>
                                        <li>
                                            Watched advertisement and promo videos about competitors&apos; products on
                                            youtube.
                                        </li>
                                    </ol>
                                </ResearchDiv>
                            </DPSectionContent>
                        </DPSection>
                        <DPSection
                            id="other-research-methods"
                            sectionId="research"
                            className="research-description-section"
                        >
                            <SectionTitle>Interviews & Field Visit</SectionTitle>
                            <DPSectionContent>
                                <ResearchDiv>
                                    <Emp>Goal</Emp>
                                    <p>
                                        To understand Citizen’s Energy’s water treatment process, E+H sensors used, The
                                        stakeholders involved, and their pain points.
                                    </p>
                                </ResearchDiv>
                                <ResearchDiv>
                                    <Emp>How did I do it?</Emp>
                                    <p>Interviewed the following stakeholders - </p>
                                    <ol>
                                        <li>
                                            The <Emp>E+H Sponsor</Emp> for this project.
                                        </li>
                                        <li>
                                            The <Emp>Plant Manager</Emp> at the Citizen&apos;s Energy water treatment
                                            plant in Indianapolis.
                                        </li>
                                        <li>
                                            The <Emp>Environmental Steward</Emp> at Citizen&apos;s Energy.
                                        </li>
                                    </ol>
                                </ResearchDiv>
                                <ResearchDiv>
                                    <Emp>Challenges faced</Emp>
                                    <ol>
                                        <li>Understanding the jargon involved in Water treatment processes.</li>
                                    </ol>
                                </ResearchDiv>
                                <ResearchDiv>
                                    <Emp>How I overcame them</Emp>
                                    <ol>
                                        <li>
                                            Watched&nbsp;
                                            <Link
                                                href="https://youtube.com/playlist?list=PLMw6dmk-6yGoJAuW9I5r386ciEDfBkwQv"
                                                passHref
                                            >
                                                <UnderlinedLink target="_blank">
                                                    videos about industrial water processes
                                                </UnderlinedLink>
                                            </Link>
                                            &nbsp; by the Veolia Group on youtube.
                                        </li>
                                    </ol>
                                </ResearchDiv>
                            </DPSectionContent>
                        </DPSection>
                        <DPSection id="thematic-analysis" sectionId="define">
                            <SectionTitle>Thematic Analysis</SectionTitle>
                            <DPSectionContent>
                                I along with the team posted all our findings on a Figjam board where we used affinity
                                mapping to identify themes and group findings according to themes.
                                <div className="affinity-image-container image-container">
                                    <Image
                                        src={thematicAnalysis}
                                        layout="responsive"
                                        alt="Thematic Analysis screenshot"
                                    />
                                </div>
                            </DPSectionContent>
                        </DPSection>
                        <DPSection id="key-insights" sectionId="define">
                            <SectionTitle>Key Insights</SectionTitle>
                            <DPSectionContent>
                                Here are some of the key insights from our research -
                                <InsightRow>
                                    <ListCard>
                                        <ListCardTitle>Insight #1</ListCardTitle>
                                        <Emp>A sustainable outlook is beneficial for companies</Emp>
                                        <p>
                                            Companies with a better sustainability footprint attract more talent and
                                            business.
                                        </p>
                                    </ListCard>
                                    <ListCard>
                                        <ListCardTitle>Takeaway #1</ListCardTitle>
                                        <Emp>A massive shift to sustainability</Emp>
                                        <p>Companies are incentivized to build a sustainable outlook.</p>
                                    </ListCard>
                                </InsightRow>
                                <InsightRow>
                                    <ListCard>
                                        <ListCardTitle>Insight #2</ListCardTitle>
                                        <Emp>Increased spending on sustainability</Emp>
                                        <p>Companies are ramping up their spending on sustainable activities.</p>
                                    </ListCard>
                                    <ListCard>
                                        <ListCardTitle>Takeaway #2</ListCardTitle>
                                        <Emp>Sustainability is a good market.</Emp>
                                        <p>
                                            With companies willing to spend, there is room for building a profitable
                                            product.
                                        </p>
                                    </ListCard>
                                </InsightRow>
                                <InsightRow>
                                    <ListCard>
                                        <ListCardTitle>Insight #3</ListCardTitle>
                                        <Emp>The current workflow is very time-consuming</Emp>
                                        <p>
                                            The current process of collecting data, generating a report, and devising a
                                            sustainability strategy takes over 80 hours.
                                        </p>
                                    </ListCard>
                                    <ListCard>
                                        <ListCardTitle>Takeaway #3</ListCardTitle>
                                        <Emp>Need for efficiency</Emp>
                                        <p>An ideal solution would reduce this time drastically.</p>
                                    </ListCard>
                                </InsightRow>
                                <InsightRow>
                                    <ListCard>
                                        <ListCardTitle>Insight #5</ListCardTitle>
                                        <Emp>Slow Moving Industry</Emp>
                                        <p>
                                            Replacing sensors and infrastructure happens very rarely in the water
                                            treatment industry.
                                        </p>
                                    </ListCard>
                                    <ListCard>
                                        <ListCardTitle>Takeaway #5</ListCardTitle>
                                        <Emp>Backward Compatibility</Emp>
                                        <p>
                                            An ideal solution would be one that not only works with the new E+H smart
                                            sensors but also provides backward compatibility for other sensors that are
                                            currently in use.
                                        </p>
                                    </ListCard>
                                </InsightRow>
                            </DPSectionContent>
                        </DPSection>
                        <DPSection id="current-workflow" sectionId="define">
                            <SectionTitle>Current Workflow</SectionTitle>
                            <DPSectionContent>
                                <Image src={currentWorkflow} objectFit="contain" alt="current workflow diagram" />
                            </DPSectionContent>
                        </DPSection>
                        <DPSection id="pain-points" sectionId="define">
                            <SectionTitle>Users and their pain points</SectionTitle>
                            <DPSectionContent>
                                <Card>
                                    <ExecutiveIcon />
                                    <CardTitle>Sustainability Executive</CardTitle>
                                    <CardContent>
                                        <ul>
                                            <li>Long data refresh times</li>
                                            <li>Delegation</li>
                                            <li>Data Errors</li>
                                        </ul>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <AnalystIcon />
                                    <CardTitle>Data Analyst</CardTitle>
                                    <CardContent>
                                        <ul>
                                            <li>Data errors and troubleshooting</li>
                                            <li>Isolated Data</li>
                                        </ul>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <ManagerIcon />
                                    <CardTitle>Plant Manager</CardTitle>
                                    <CardContent>
                                        <ul>
                                            <li>Tracking tasks in the strategy</li>
                                            <li>Data collection</li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </DPSectionContent>
                        </DPSection>
                        <DPSection id="competitors" sectionId="define">
                            <SectionTitle>Competitors</SectionTitle>
                            <DPSectionContent>
                                <div className="competitors-wrapper">
                                    {competitorLogos.map(([logoSrc, competitorName]) => {
                                        return (
                                            <Card key={competitorName as string}>
                                                <Image
                                                    src={logoSrc}
                                                    objectFit="contain"
                                                    alt={`${competitorName} - logo`}
                                                    layout="responsive"
                                                />
                                                {competitorName}
                                            </Card>
                                        );
                                    })}
                                </div>
                                <div className="shortcomings">
                                    <Emp>The shortcomings we found in these competitors </Emp>
                                    <ul>
                                        <li>No simplification for data collection.</li>
                                        <li>Weak support for data troubleshooting.</li>
                                        <li>No Improvement in communication and delegation.</li>
                                    </ul>
                                </div>
                            </DPSectionContent>
                        </DPSection>
                        <DPSection id="solution-rationale" sectionId="define">
                            <SectionTitle>Solution Rationale</SectionTitle>
                            <DPSectionContent>
                                Any solution we conceptualize needed to -
                                <ol>
                                    <li>Allow easy insight into the organization&apos;s sustainability footprint.</li>
                                    <li>Simplify communication throughout the organization.</li>
                                    <li>Reduce the time taken to generate a report.</li>
                                </ol>
                            </DPSectionContent>
                        </DPSection>
                        <DPSection id="ideation" sectionId="ideation">
                            <SectionTitle>Ideation</SectionTitle>
                            <DPSectionContent>
                                <p>
                                    For the ideation phase, we conceptualized 3 features for each major pain point and
                                    voted internally(shown by the stamps) to finalize a set of features in the final
                                    product. The features in blue are the features that I conceptualized.
                                </p>{' '}
                                <Image
                                    layout="responsive"
                                    objectFit="contain"
                                    src={ideationFeatures}
                                    alt="Ideated features figjam screenshot"
                                />
                            </DPSectionContent>
                        </DPSection>
                        <DPSection id="final-idea" sectionId="ideation">
                            <SectionTitle>Final Idea</SectionTitle>
                            <DPSectionContent>
                                <p>
                                    In order to finalize an idea we ran the Plant Manager and the Environmental Steward
                                    at Citizen&apos;s Energy, as well as the E+H Sponsor through our ideas and finalized
                                    the following set of features.
                                </p>
                                <Image
                                    layout="responsive"
                                    objectFit="contain"
                                    src={finalIdea}
                                    alt="Finalized features screenshot"
                                />
                            </DPSectionContent>
                        </DPSection>
                        <DPSection id="information-architecture" sectionId="prototype">
                            <SectionTitle>Information Architecture</SectionTitle>
                            <DPSectionContent>
                                <Image
                                    layout="responsive"
                                    objectFit="contain"
                                    src={informationArchitecture}
                                    alt="Information Architecture diagram"
                                />
                            </DPSectionContent>
                        </DPSection>
                        <DPSection id="sketches" sectionId="prototype">
                            <SectionTitle>Sketches</SectionTitle>
                            <DPSectionContent>
                                <p>We sketched out the following screens for the desktop application - </p>
                                <div className="sketches-container">
                                    {Object.entries(sketches).map(([imageName, imageSrc], index) => {
                                        return (
                                            <div className="sketch-image-container" key={index}>
                                                <Image
                                                    objectFit="contain"
                                                    src={imageSrc}
                                                    layout="responsive"
                                                    alt={`${imageName} screen sketch`}
                                                ></Image>
                                                <ImageDescription>{imageName}</ImageDescription>
                                            </div>
                                        );
                                    })}
                                </div>
                            </DPSectionContent>
                        </DPSection>
                        <DPSection id="mid-fi" sectionId="prototype">
                            <SectionTitle>Medium Fidelity Designs</SectionTitle>
                            <DPSectionContent>
                                <p>
                                    Next, I converted all of the sketches into a medium-fidelity Figma prototype which
                                    we could use to perform usability tests.
                                </p>
                                <div className="mid-fi-screens-container">
                                    {Object.entries(midFiScreens).map(([imageName, imageSrc], index) => {
                                        return (
                                            <div className="mid-fi-image-container" key={index}>
                                                <Image
                                                    objectFit="contain"
                                                    src={imageSrc}
                                                    layout="responsive"
                                                    alt={`${imageName} screen mock-up`}
                                                ></Image>
                                                <ImageDescription>{imageName}</ImageDescription>
                                            </div>
                                        );
                                    })}
                                </div>
                            </DPSectionContent>
                        </DPSection>
                        <DPSection id="evaluations" sectionId="evaluation">
                            <SectionTitle>Usability Testing</SectionTitle>
                            <DPSectionContent>
                                Next, I evaluated the medium-fidelity prototype with the Plant Manager and Environmental
                                Steward at Citizen&apos;s Energy and the E+H sponsor and found the following key issues
                                with our design.
                                <ol>
                                    <li>
                                        <Emp>Goals ought to be shown on the charts</Emp> and not just the stats.
                                    </li>
                                    <li>
                                        There is <Emp>no time range</Emp> shown on the charts page.
                                    </li>
                                    <li>
                                        For adding charts and stats, there is no way to capture values that might be
                                        combinations of <Emp>readings from multiple sensors and excel sheets.</Emp>
                                    </li>
                                </ol>
                                <Link
                                    href="https://indiana-my.sharepoint.com/:x:/g/personal/nafark_iu_edu/EY6oqYksgKVBq0GFZa4DPjgBWVbhXCPpKHwjdfvgHvcRAA?e=ajfm4x"
                                    passHref
                                >
                                    <UnderlinedLink target="_blank">
                                        Here is the entire list of issues we found with our designs
                                    </UnderlinedLink>
                                </Link>
                            </DPSectionContent>
                        </DPSection>
                        <DPSection id="final-designs" sectionId="final-design">
                            <SectionTitle>Final Figma Prototype</SectionTitle>
                            <DPSectionContent>
                                <iframe
                                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJXaxEpqsaAznBkglnlOCzG%2FIOT-Endress-%252B-Hauser%3Fpage-id%3D2%253A2%26node-id%3D2%253A11433%26viewport%3D487%252C213%252C0.02%26scaling%3Dscale-down%26starting-point-node-id%3D2%253A10601%26show-proto-sidebar%3D1%26hide-ui%3D1"
                                    allowFullScreen
                                ></iframe>
                            </DPSectionContent>
                        </DPSection>
                        {/* <DPSection id="business-design" sectionId="business"> */}
                        {/* <SectionTitle>The Business Side</SectionTitle> */}
                        {/* <DPSectionContent> */}
                        {/* <p>Next we developed the business side of this product </p> */}
                        {/* </DPSectionContent> */}
                        {/* </DPSection> */}
                    </DesignProcess>
                    <SplitSection title="Reflection">
                        <ul>
                            <li>
                                <Emp>Understanding industrial processes:</Emp> This project exposed me to the
                                complexities of understanding the industrial processes (water treatment in this case).
                                It taught me the value of educating yourself about the industry-specific terminology and
                                jargon before actually speaking with the industry professionals
                            </li>
                            <li>
                                <Emp>Early Evaluations:</Emp> The evaluations performed on the medium-fidelity prototype
                                allowed us to eliminate a large number of errors earlier on in the design process{' '}
                            </li>
                        </ul>
                    </SplitSection>
                    <Section title="Final Thoughts" className="final-thoughts">
                        <p>
                            This was an interesting and challenging project where we got to learn about an entirely new
                            domain that we had no familiarity with. Overall we are all proud of the outcome of the
                            project and the growth we all experienced. Special thanks to <Emp>Matt Walsh</Emp> from E+H,{' '}
                            <Emp>Justin Redman, and Anne McIver</Emp> from Citizen&apos;s Energy for their time and
                            effort in helping us throughout the design process. Finally, this wouldn&&apos;apos;t have
                            been possible without our mentor <Emp>Professor Lou Lenzi</Emp> whose insights and
                            mentorship were the guiding lights throughout this project.
                        </p>
                        <div className="team-image-container">
                            <Image
                                src={teamPicture}
                                objectFit="contain"
                                layout="responsive"
                                alt="Photograph of the team at the water treatment plant."
                            />
                            <ImageDescription>
                                The team with Matt Walsh and Justin Redman at the Water treatment plant.
                            </ImageDescription>
                        </div>
                    </Section>
                    <CaseStudyFooter projects={[PROJECTS[1], PROJECTS[2]]}></CaseStudyFooter>
                </div>
            </Container>
        </ThemeProvider>
    );
};

const InsightRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 16px;
    ${ListCard} {
        &:last-child {
            ${ListCardTitle} {
                color: #4adf67;
                background: none;
                -webkit-text-fill-color: unset;
                -webkit-background-clip: unset;
            }
        }
    }
`;

const ResearchDiv = styled.div``;
const Container = styled.div`
    width: 100%;
    font-size: 16px;
    p {
        margin-top: 0px;
        margin-bottom: 24px;
    }
    .case-study-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        .our-challenge {
            .section-content {
                display: flex;
                flex-direction: column;
                gap: 24px;
                align-items: flex-start;
            }
        }
        .the-client {
            .section-content {
                display: flex;
                flex-direction: column;
                gap: 24px;
                align-items: flex-start;
                .eh-image-container {
                    height: 120px;
                    width: 180px;
                }
                svg {
                    width: 300px;
                }
            }
        }
        #how-will-it-work {
            .section-content {
                align-items: center;
                ${Card} {
                    padding: 16px;
                    height: 300px;
                    svg {
                        height: 120px;
                    }
                }
                .card-group {
                    flex: 2;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    gap: 16px;
                    ${ListCard} {
                        &:first-child,
                        &:last-child {
                            &::after {
                                height: 50%;
                                width: 100px;
                            }
                        }
                        &:first-child {
                            &::after {
                                transform: translateY(-4px);
                                border-top: 8px solid ${(props) => props.theme.cardBackground};
                                border-left: 8px solid ${(props) => props.theme.cardBackground};
                            }
                        }
                        &:last-child {
                            &::after {
                                transform: translateY(calc(-100% + 4px));
                                border-bottom: 8px solid ${(props) => props.theme.cardBackground};
                                border-left: 8px solid ${(props) => props.theme.cardBackground};
                            }
                        }
                        &::after {
                            content: '';
                            z-index: -1;
                            position: absolute;
                            top: 50%;
                            left: -50px;
                            height: 8px;
                            width: 80%;
                        }
                    }
                }
            }
        }
    }
    #key-features {
        display: flex;
        flex-direction: column;
        .section-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            .${wrapperClass} {
                display: flex;
                flex-direction: column;
                gap: 100px;
                .screen-info-container {
                    display: grid;
                    grid-template-columns: 0.75fr 1fr;
                    grid-column-gap: 24px;
                    align-items: center;
                    .screen-info__title {
                        margin-bottom: 16px;
                        font-size: 20px;
                    }
                    &:nth-child(2n) {
                        grid-template-columns: 1fr 0.75fr;
                        .screen-info {
                            grid-column: 2;
                        }
                        .screen__image-wrapper {
                            grid-column: 1;
                            grid-row: 1;
                        }
                    }
                }
            }
        }
    }
    .final-thoughts {
        .team-image-container {
            width: 300px;
            margin: auto;
            ${ImageDescription} {
                margin-top: 16px;
                text-align: center;
            }
        }
    }
    #design-process {
        align-items: flex-start;
        .section-content {
            min-width: 0;
            .design-process-section {
                ${DPSectionContent} {
                    .solution-requirement-checklist {
                        li {
                            &::marker {
                                content: '✓ ';
                                color: green;
                                margin-right: 16px;
                                display: inline-block;
                            }
                        }
                    }
                }
                &#research {
                    .methods-group {
                        display: flex;
                        gap: 16px;
                        margin: 24px 0px;
                        .card {
                            flex: 1;
                            align-items: center;
                            flex-shrink: 0;
                            width: 33%;
                            svg {
                                height: 100px;
                            }
                            ${Emp} {
                                text-align: center;
                            }
                        }
                    }
                }
                &.research-description-section {
                    ${DPSectionContent} {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        grid-template-rows: repeat(3, max-content);
                        grid-gap: 24px 24px;
                        ${ResearchDiv} {
                            grid-column-end: span 2;
                            &:last-child,
                            &:nth-last-child(2) {
                                grid-column-end: span 1;
                            }
                            &:last-child {
                                border-left: 1px solid ${(props) => props.theme.text};
                                padding-left: 16px;
                            }
                        }
                    }
                    &#other-research-methods {
                        p {
                            margin-bottom: 8px !important;
                        }
                    }
                }
                &#thematic-analysis {
                    .affinity-image-container {
                        margin-top: 24px;
                    }
                }
                &#pain-points {
                    ${DPSectionContent} {
                        display: grid;
                        gap: 16px;
                        grid-template-columns: 1fr 1fr 1fr;
                        ${Card} {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            ${CardTitle} {
                                height: 48px;
                                font-size: 16px;
                                text-align: center;
                            }
                            ul {
                                margin: 0px;
                                padding-left: 16px;
                            }
                        }
                    }
                }
                &#ideation,
                &#final-idea,
                &#sketches,
                &#mid-fi {
                }
                &#competitors {
                    .competitors-wrapper {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        grid-template-rows: 112px 112px;
                        grid-gap: 24px;
                        margin-bottom: 24px;
                        ${Card} {
                            display: grid;
                            grid-template-columns: 72px 1fr;
                            align-items: center;
                        }
                    }
                }
                &#sketches {
                    .sketches-container {
                        display: flex;
                        flex-direction: column;
                        gap: 32px;
                        .sketch-image-container {
                            width: 400px;
                            margin: auto;
                            text-align: center;
                        }
                    }
                }
                &#mid-fi {
                    .mid-fi-screens-container {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        grid-gap: 16px;
                        ${ImageDescription} {
                            margin-top: 8px;
                            text-align: center;
                        }
                    }
                }
                &#final-designs {
                    iframe {
                        width: 100%;
                        height: 500px;
                    }
                }
                &.screens-container {
                    ${DPSectionContent} {
                        ${Card} {
                            display: flex;
                            flex-wrap: wrap;
                            flex-direction: row;
                            gap: 16px;
                            justify-content: space-between;
                            .screen-image-container {
                                flex: 1 0 160px;
                                flex-shrink: 0;
                                .screen-name {
                                    margin-top: 4px;
                                    text-align: center;
                                }
                            }
                        }
                    }
                }
            }
        }
        .section-content {
            display: flex;
            flex: 1;
            flex-direction: column;
            gap: 100px;
            padding-top: 112px;
            .wins-container {
                display: flex;
                .win-image-container {
                    flex: 1;
                }
            }
        }
    }
    ${maxDevice.tablet} {
        .case-study-container {
            #how-will-it-work {
                .section-content {
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: max-content max-content;
                    display: grid;
                    .card-group {
                        grid-column-end: span 2;
                        ${IconedListCard} {
                            grid-template-rows: 1fr;
                            position: relative;
                            width: 100%;
                            svg {
                                grid-row-end: span 1;
                            }
                            p {
                                display: none;
                            }
                            &::after {
                                content: '';
                                position: absolute;
                                background: ${(props) => props.theme.cardBackground};
                                left: 24px;
                                top: 50%;
                                transform: translateY(-50%);
                                border-top: 0px;
                                border-bottom: 0px;
                                width: 100%;
                            }
                            &:first-child,
                            &:last-child {
                                &::after {
                                    transform: unset;
                                    height: 10px;
                                    width: 100%;
                                }
                            }
                            &:first-child {
                            &::before {

                                    content: '';
                                    border: 10px solid ${(props) => props.theme.cardBackground};
                                    border-bottom: 0px;
                                    border-left: 0px;
                                    position: absolute;
                                    right: -24px;
                                    height: 300%;
                                    bottom: 0px;
                                    width: 100%;
                                    z-index: -1;
                            }
                                &::after {
                                    border-top: 0px;
                                    border-left: 0px;
                                }
                            }
                            &:last-child {
                                &::before {
                                    content: '';
                                    border-left: 10px solid ${(props) => props.theme.cardBackground};
                                    position: absolute;
                                    right: -24px;
                                    height: 300%;
                                    bottom: 50%;
                                }
                                &::after {
                                    border-bottom: 0px;
                                    border-left: 0px;
                                }
                            }
                        }
                    }
                }
            }
            #design-process {
                .section-content {
                    #research {
                        .methods-group {
                            gap: 8px;
                            display: grid;
                            grid-template-columns: max-content max-content;
                            justify-items: center;
                            justify-content: center;
                            ${Card} {
                                width: 132px;
                                svg {
                                    height: 64px;
                                }
                                ${Emp} {
                                    font-size: 12px;
                                }
                                &:last-child {
                                    grid-column-end: span 2;
                                }
                            }
                        }
                    }
                    #pain-points {
                        ${DPSectionContent} {
                            display: flex;
                            flex-direction: column;
                            gap: 8px;
                            ${Card} {
                                display: grid;
                                grid-template-columns: 100px 1fr;
                                ${ListCardTitle} {
                                    text-align: left;
                                    height: unset;
                                }
                                svg {
                                    grid-row-end: span 2;
                                    justify-self: center;
                                }
                            }
                        }
                    }
                    #competitors {
                        ${DPSectionContent} {
                            .competitors-wrapper {
                                display: flex;
                                flex-direction: column;
                                gap: 8px;
                                ${Card} {
                                    height: 80px;
                                    grid-template-columns: 50px 1fr;
                                }
                            }
                        }
                    }
                    #pain-points,
                    #competitors {
                        ${DPSectionContent} {
                            width: 100%;
                            max-width: 400px;
                            ${Card} {
                            }
                        }
                    }
                    #sketches {
                        .sketches-container {
                            .sketch-image-container {
                                width: 100%;
                            }
                        }
                    }
                }
            }
        }
    }
    ${maxDevice.mobile} {
        .case-study-container {
            .hero {
                .section-content {
                    margin-bottom: -32px;
                    margin-top: 64px;
                }
            }
            ${HeroStatsContainer} {
                .for {
                    ${StatContent} {
                        width: 240px;
                    }
                }
            }
            .the-client {
                p {
                    margin-bottom: 8px;
                }
                .section-content {
                    gap: 16px;
                    align-items: center;
                    .eh-image-container {
                        display: flex;
                        span {
                            flex: 1;
                        }
                    }
                }
            }
            #problem-and-solution {
                .section-content {
                    gap: 8px;
                }
            }
            #how-will-it-work {
                .section-content {
                    padding: 0px 32px;
                    gap: 8px;
                    & > ${Card} {
                        position: relative;
                        width: 100%;
                        &::after {
                            content: '';
                            border: 10px solid ${(props) => props.theme.cardBackground};
                            width: 32px;
                            height: 100%;
                            position: absolute;
                            z-index: -1;
                            top: 50%;
                            transform: translateY(-5px);
                        }
                        &:first-child {
                            &::after {
                                border-left: 0px;
                                right: -24px;
                            }
                        }
                        &:nth-child(2) {
                            &::after {
                                border-right: 0px;
                                border-bottom: 0px;
                                left: -24px;
                            }
                        }
                    }
                    .card-group {
                        width: 100%;
                        gap: 8px;
                        ${IconedListCard} {
                            grid-template-rows: 1fr;
                            position: relative;
                            width: 100%;
                            svg {
                                grid-row-end: span 1;
                            }
                            p {
                                display: none;
                            }
                            &::after {
                                content: '';
                                position: absolute;
                                background: ${(props) => props.theme.cardBackground};
                                left: -24px;
                                top: 50%;
                                transform: translateY(-50%);
                                border-top: 0px;
                                border-bottom: 0px;
                            }
                            &:first-child,
                            &:last-child {
                                &::after {
                                    transform: unset;
                                    height: 10px;
                                    width: 100%;
                                }
                            }
                            &:first-child {
                                &::after {
                                    border-top: 0px;
                                    border-left: 0px;
                                }
                            }
                            &:last-child {
                                &::before {
                                    content: '';
                                    border-left: 10px solid ${(props) => props.theme.cardBackground};
                                    position: absolute;
                                    left: -24px;
                                    height: 300%;
                                    bottom: 50%;
                                }
                                &::after {
                                    border-bottom: 0px;
                                    border-left: 0px;
                                }
                            }
                        }
                    }
                }
            }
            #key-features {
                .section-content {
                    .scroll-wrap {
                        .screen-info-container {
                            display: flex;
                            flex-direction: column;
                            .screen__image-wrapper {
                                display: flex;
                                width: 100%;
                                margin-top: 24px;
                                span {
                                    flex: 1;
                                }
                            }
                        }
                    }
                }
            }
            #design-process {
                .design-process-title {
                    min-width: 0;
                    ${ProcessSectionHeader} {
                        display: none;
                    }
                }
                .section-content {
                    padding-top: 0px;
                    ${SectionTitle} {
                        font-size: 20px;
                    }
                    #mid-fi {
                        ${DPSectionContent} {
                            .mid-fi-screens-container {
                                grid-template-columns: 1fr;
                            }
                        }
                    }
                    #key-insights {
                        ${DPSectionContent} {
                            ${InsightRow} {
                                gap: 8px;
                                ${ListCard} {
                                    margin-top: 8px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default NetilionConserve;
