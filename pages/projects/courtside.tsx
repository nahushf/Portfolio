import 'locomotive-scroll/dist/locomotive-scroll.css';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import styled, { ThemeProvider, useTheme } from 'styled-components';
import { BallIcon, CloudIcon, MobileIcon } from '../../components/CourtsideIcons';
import { Footer } from '../../components/Footer';
import { Emp, Navigation, ScreensSection } from '../../components/reusableComponents';
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
import FiveGSports from '../../public/5G-sports.png';
import ATTLogo from '../../public/AT&T-5g-logo.png';
import bannerImage from '../../public/courtside/courtside-banner.png';
import FiveG from '../../public/5G.png';
import RemoteCoachingImage from '../../public/courtside/remote-coaching.png';
import BrailleDisplayImage from '../../public/courtside/braille-display.png';
import VirtualBoxingImage from '../../public/courtside/virtual-boxing.png';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import ideaIllustration from '../../public/courtside/idea-illustration.png';
import problemIllustration from '../../public/courtside/problem-statement-illustration.png';
import initialSystemDesign from '../../public/courtside/initial-system-design.png';
import navigationDesign from '../../public/courtside/navigation.png';
import informationArchitecture from '../../public/courtside/information-architecture.png';
import matchList from '../../public/courtside/screens/1-Match-List.png';
import matchDetails from '../../public/courtside/screens/2-Match-Details.png';
import matchAudio from '../../public/courtside/screens/3-Match-Audio.png';
import matchStats from '../../public/courtside/screens/4-Match-Stats.png';
import voiceAssistant from '../../public/courtside/screens/5-Voice-Assistant-1.png';
import voicePlay from '../../public/courtside/screens/6-Voice-Play.png';
import teamFunyuns from '../../public/courtside/team-funyuns.jpg';
import win1 from '../../public/courtside/award-1.jpg';
import win2 from '../../public/courtside/award-2.jpg';
import win3 from '../../public/courtside/award-3.jpg';
import { PROJECTS } from '../../constants/projects';
import { ProjectTile } from '../../components/ProjectTile';

const wins = [win1, win2, win3];

const screens = {
    'Match List': matchList,
    'Match Details': matchDetails,
    'Match Audio': matchAudio,
    'Match Statistics': matchStats,
    'Voice Assistant (Start)': voiceAssistant,
    'Voice Assistant (Play)': voicePlay
};

const BasketballAudio = dynamic(() => import('../../components/BasketballAudio'), {
    ssr: false
});

const courtsideColor = 'linear-gradient(137.49deg, #f4a58a 0%, #ed6b4e 96.01%)';

const explorationIdeas = [
    {
        title: 'Remote Coaching',
        img: RemoteCoachingImage,
        content: (
            <>
                Using VR and 5G coaches could train players from any part of the world. The coach could use some
                wearable tech that would transmit the posture and location of the coach to a player in another part of
                the world. The player could then interact with the projection of the coach as if the coach was standing
                in front of them.
            </>
        )
    },
    {
        title: 'Tactile Braille displays for the visually impaired to “feel” the sport',
        img: BrailleDisplayImage,
        content: (
            <>
                Tactile braille displays could map out the locations and movements of players on the field. These
                displays could then be used by the visually impaired to see/feel how the players are moving
            </>
        )
    },
    {
        title: 'Virtual Boxing',
        img: VirtualBoxingImage,
        content: (
            <>
                Movements of boxers could be mapped in the VR world to allow two boxers to box virtually without coming
                in contact with each other.
            </>
        )
    }
];

const Courtside = () => {
    const theme = useTheme();
    const containerRef = useRef(null);
    return (
        <ThemeProvider theme={{ ...theme, caseStudyColor: courtsideColor }}>
            <Container data-scroll-container ref={containerRef}>
                {/* <Navigation /> */}
                <BackButtonV2 />
                <div className="case-study-container">
                    <Hero
                        title={'Courtside'}
                        index="01"
                        tagline="Enhancing the basketball experience for the visually impaired"
                    >
                        <Image src={bannerImage} objectFit="contain" priority />
                    </Hero>
                    <HeroStatsContainer>
                        <HeroStat className="for">
                            <SectionTitle>For</SectionTitle>
                            <StatContent>
                                <Image objectFit="contain" src={ATTLogo} width={200}></Image>
                            </StatContent>
                        </HeroStat>
                        <HeroStat className="type-and-deliverables">
                            <SectionTitle>Project Type & Deliverables</SectionTitle>
                            <StatContent>
                                <StatContentItem>Hackathon Project</StatContentItem>
                                <StatContentItem>Application Prototype</StatContentItem>
                                <StatContentItem>Proof of concept</StatContentItem>
                            </StatContent>
                        </HeroStat>
                        <HeroStat className="details">
                            <SectionTitle>Project Details</SectionTitle>
                            <StatContent>
                                <StatContentItem>
                                    <Emp>Role</Emp>
                                    <div className="detail-content">UX designer</div>
                                </StatContentItem>
                                <StatContentItem>
                                    <Emp>Team</Emp>
                                    <div className="detail-content">4 HCI Students, 1 Bioinformatics student</div>
                                </StatContentItem>
                                <StatContentItem>
                                    <Emp>Duration</Emp>
                                    <div className="detail-content">
                                        48 hours Hackathon + 2 weeks research and ideation
                                    </div>
                                </StatContentItem>
                            </StatContent>
                        </HeroStat>
                    </HeroStatsContainer>
                    <SplitSection title="Our Challenge" className="our-challenge">
                        Conceptualize solutions that would leverage 5G to disrupt the way we experience, consume and
                        engage with sports.
                        <Image src={FiveGSports} objectFit="contain"></Image>
                    </SplitSection>
                    <SplitSection title="My Contributions">
                        <ol>
                            <li>
                                Conceptualized <Emp>initial and final</Emp> idea.
                            </li>
                            <li>
                                <Emp>Spoke with professors</Emp> to validated ideas.
                            </li>
                            <li>
                                Constructed App <Emp>Prototype</Emp>.
                            </li>
                        </ol>
                    </SplitSection>
                    <CardCollectionSection>
                        <Card>
                            <CardTitle>Problem Statement</CardTitle>
                            <CardContent>
                                How might we enhance the basketball experience for the visually impaired and improve
                                upon the experience of the average joe with the use of sound
                            </CardContent>
                        </Card>
                        <Card>
                            <CardTitle>Solution</CardTitle>
                            <CardContent>
                                A service that uses sound to enhance the Basketball experience for the visually
                                impaired.
                            </CardContent>
                        </Card>
                    </CardCollectionSection>
                    <CardCollectionSection className="connected" title="How will it work">
                        <Card className="centered">
                            <CardTitle>Smart Ball</CardTitle>
                            <BallIcon />
                            <CardContent>
                                Sensors embedded within the ball capture the location of the ball on the court and the
                                audio of the <Emp>ball bouncing</Emp>, <Emp>the players</Emp> and{' '}
                                <Emp>the audience</Emp>.
                            </CardContent>
                        </Card>
                        <Card className="centered">
                            <CardTitle>Cloud</CardTitle>
                            <CloudIcon />
                            <CardContent>
                                The audio and GPS data is sent to the cloud server where the audio signal is run through{' '}
                                <Emp>noise reduction</Emp>.
                            </CardContent>
                        </Card>
                        <Card className="centered">
                            <CardTitle>App</CardTitle>
                            <MobileIcon />
                            <CardContent>
                                The location and audio information is delivered user to construct a{' '}
                                <Emp>spatial audio experience</Emp>
                                that is delivered through the <Emp>mobile app</Emp>.
                            </CardContent>
                        </Card>
                    </CardCollectionSection>
                    <Section title="Spatial Audio Experience">
                        <BasketballAudio />
                    </Section>
                    <Section className="mobile-app">
                        <SectionTitle>Mobile App</SectionTitle>
                        <ScreensSection srcs={['/courtside/match-list-and-details.mp4']} title="Match list and details">
                            The users can see all upcoming games on the application and can tap a game to see more
                            details and buy a virtual ticket
                        </ScreensSection>
                        <ScreensSection
                            srcs={['/courtside/match-details.mp4']}
                            title="Match screens and spatial audio experience"
                        >
                            On purchasing a &apos;virtual ticket&apos; users can view the match details and access the{' '}
                            <Emp>spatial audio experience</Emp> which will be constructed using the sensors in the ball.
                        </ScreensSection>
                        <ScreensSection srcs={['/courtside/voice-assistant.mp4']} title="Voice Assistant">
                            The app would also host a voice assistant to further simplify operation for the visually
                            impaired
                        </ScreensSection>
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
                                    navigateID: 'solution-requirements',
                                    children: 'Ideation',
                                    id: 'ideation'
                                })}
                                {renderLink({
                                    navigateID: 'expert-validation',
                                    children: 'Validation',
                                    id: 'validation'
                                })}
                                {renderLink({ navigateID: 'sketches', children: 'Design', id: 'design' })}
                            </>
                        )}
                    >
                        <DPSection id="formative-research" sectionId="research">
                            <SectionTitle>Formative Research</SectionTitle>
                            <DPSectionContent>
                                We conducted some online research to understand 5G and how it can be applied in sports.
                                What we found out about 5G was that compared to previous generations it has
                                <div className="research-viz">
                                    <Card>
                                        <CardTitle>Low Latency</CardTitle>
                                    </Card>
                                    <Image src={FiveG} height={102} objectFit="contain" />
                                    <div className="lower-research-points">
                                        <Card>
                                            <CardTitle>Greater Network Capacity</CardTitle>
                                        </Card>
                                        <Card>
                                            <CardTitle>Higher Speed</CardTitle>
                                        </Card>
                                    </div>
                                </div>
                                Due to the fast paced nature of sports the <Emp>Low latency</Emp> aspect of 5G{' '}
                                <Emp>stood out the most</Emp> to us.
                            </DPSectionContent>
                        </DPSection>
                        <DPSection id="solution-requirements" sectionId="ideation">
                            <SectionTitle>Solution Requirements</SectionTitle>
                            <DPSectionContent>
                                Before moving to ideation we came up with a certain set of rules to guide our ideation.
                                The solution would need to
                                <ol className="solution-requirement-list">
                                    <li>Employ accessibility effectively(Specific award for accessibility)</li>
                                    <li>Address the needs of a significant target audience</li>
                                    <li>Make effective use of 5G(Specific award for use of 5G)</li>
                                    <li>Engages the fans</li>
                                </ol>
                            </DPSectionContent>
                        </DPSection>
                        <DPSection id="explorations" sectionId="ideation">
                            <SectionTitle>Explorations</SectionTitle>
                            <DPSectionContent>
                                Using our understanding of 5G we performed an initial round of ideas to see which
                                solution areas stood out to us. The ideas that I came up with are as follows
                                <ol className="exploration-idea-list">
                                    {explorationIdeas.map(({ title, img, content }, index) => {
                                        return (
                                            <li key={index}>
                                                <Emp>{title}</Emp>
                                                <div className="exploration-image-container">
                                                    <Image src={img} layout="responsive" objectFit="contain"></Image>
                                                </div>
                                                <div className="idea-content">{content}</div>
                                            </li>
                                        );
                                    })}
                                </ol>
                            </DPSectionContent>
                        </DPSection>
                        <DPSection id="final-idea" sectionId="ideation">
                            <SectionTitle>Finalized Idea: {explorationIdeas[1].title}</SectionTitle>
                            <DPSectionContent>
                                This idea satisfies the following requirements
                                <ol className="solution-requirement-checklist">
                                    <li>
                                        Employ accessibility effectively{' '}
                                        <Emp>(The idea keeps in mind the accessibility for the visually impaired)</Emp>
                                    </li>
                                    <li>
                                        Address the needs of a significant target audience{' '}
                                        <Emp>(Opens up a sports experience for the visually impaired)</Emp>
                                    </li>
                                    <li>
                                        Make effective use of 5G{' '}
                                        <Emp>(Effective mapping of player positions would require low latency)</Emp>
                                    </li>
                                    <li>
                                        Engages the fans{' '}
                                        <Emp>(Adds another layer of interacttion for an entire demographic)</Emp>
                                    </li>
                                </ol>
                            </DPSectionContent>
                        </DPSection>
                        <DPSection id="expert-validation" sectionId="validation">
                            <SectionTitle>Expert Validation</SectionTitle>
                            <DPSectionContent>
                                I spoke with 2 professors in our university to validate our idea while the rest of the
                                team spoke with 2 additional professors. Together we identified the following
                                limitations in the idea.
                                <ListCard>
                                    <ListCardTitle>Limitation #1</ListCardTitle>
                                    <Emp>Tactile Braille displays are too expensive</Emp>
                                    <p>
                                        The service would make use of tactile braille displays which are too expensive
                                        for the average joe. Let alone for the visually impaired and their limited
                                        earning potential.
                                    </p>
                                </ListCard>
                                <ListCard>
                                    <ListCardTitle>Limitation #2</ListCardTitle>
                                    <Emp>The actual experience is in the sound</Emp>
                                    <p>
                                        While a tactile display would give the users an idea of where the players are
                                        located, the actually joy of any sport lies in the energy at the venue and not
                                        just the technicals of the sport
                                    </p>
                                </ListCard>
                                <ListCard>
                                    <ListCardTitle>Limitation #3</ListCardTitle>
                                    <Emp>Does not address ordinary sports fans</Emp>
                                    <p>
                                        While the tactile display would definitely enhance the experience of the
                                        visually impaired, such a service would be useless for people who can see
                                        clearly and would thus not address the latter part of our problem statement.
                                    </p>
                                </ListCard>
                            </DPSectionContent>
                        </DPSection>
                        <DPSection id="rethinking" sectionId="validation">
                            <SectionTitle>Rethinking the Idea</SectionTitle>
                            <p>
                                Keeping the <Emp>Limitations</Emp> in mind I realized that instead of a feel based
                                product, a sound based product might have more to offer to the visually impaired which
                                led us to the following solution:
                            </p>

                            <Image objectFit="contain" src={ideaIllustration} height={200} />
                            <Emp as="p">
                                An application that live streams gameplay audio from sensors embedded within the
                                basketball and provides a spatial audio simulation of a courtside experience for the
                                users through a mobile application.
                            </Emp>
                        </DPSection>
                        <DPSection className="app-sketches" id="sketches" sectionId="design">
                            <SectionTitle>App Sketches</SectionTitle>
                            <DPSectionContent>
                                <p>The solution would have two components</p>
                                <div className="solution-formula">
                                    <ListCard>
                                        <ListCardTitle>Smart Ball with sensors</ListCardTitle>
                                    </ListCard>
                                    +
                                    <ListCard>
                                        <ListCardTitle>Mobile App for audio experience</ListCardTitle>
                                    </ListCard>
                                </div>
                                <p>
                                    For the mobile app we decided to sketch an experience that the visually impaired can
                                    easily navigate using audio and gestures. The following images illustrate how the
                                    gestures would work.
                                </p>
                                <Image src={initialSystemDesign} objectFit="contain" />
                                <Image src={navigationDesign} objectFit="contain" />
                                <p>
                                    However upon consultation with William Lawrence who is the accessibility expert at
                                    AT&T we realised that this experience was <Emp>not technically feasible</Emp>.
                                    Android and iOS already come with their own <Emp>Talkback</Emp> and&nbsp;
                                    <Emp>VoiceOver</Emp> screen reader features which provide an{' '}
                                    <Emp>inbuilt gesture based navigation system</Emp> for all applications.
                                </p>
                                <a href="https://www.levelaccess.com/part-1-mobile-screen-readers/">
                                    Read More about Talkback and Voiceover here
                                </a>
                            </DPSectionContent>
                        </DPSection>
                        <DPSection id="information-architecture" sectionId="design">
                            <SectionTitle>Information Architecture</SectionTitle>
                            <DPSectionContent>
                                <Image src={informationArchitecture} objectFit="contain" layout="responsive" />
                            </DPSectionContent>
                        </DPSection>
                        <DPSection className="screens-container" id="screens" sectionId="design">
                            <SectionTitle>Screens</SectionTitle>
                            <DPSectionContent>
                                <Card>
                                    {Object.entries(screens).map(([screenName, screenSrc], index) => {
                                        return (
                                            <div className="screen-image-container" key={index}>
                                                <Image src={screenSrc as any} layout="responsive" />
                                                <div className="screen-name">{screenName}</div>
                                            </div>
                                        );
                                    })}
                                </Card>
                            </DPSectionContent>
                        </DPSection>
                    </DesignProcess>
                    <SplitSection title="Next Steps">
                        The future roadmap of this project will look like the following:
                        <ul>
                            <li>
                                <Emp>Usability Evaluation:</Emp> The prototype of the mobile application will need to be
                                tested to iron out any usability issues for the visually impaired
                            </li>
                            <li>
                                <Emp>Prototype and Validation: </Emp> A prototype of the <Emp>Smart Basketball</Emp>{' '}
                                will be needed to perform research in order to validate that the visuallu impaired
                                actually enjoy a spatial audio experience of basketball
                            </li>
                            <li>
                                <Emp>Mobile Application development:</Emp> The mobile app which would deliver the
                                spatial audio experience will have to be developed
                            </li>
                        </ul>
                    </SplitSection>
                    <SplitSection title="Learnings">
                        <ul>
                            <li>
                                <Emp>Early Research:</Emp> While working on this project we began our ideation and
                                research much before the hackathon. This allowed us to control the depth of our research
                                and iterate through our ideas
                            </li>
                            <li>
                                <Emp>Expert Validation:</Emp> This project exposed me to the value of expert validation.
                                Our winning idea was only generated after the professors we consulted walked us through
                                the limitations of our initial idea. Additionally speaking with the experts also allowed
                                us to anticipate the kind of questions that would rise up while pitching our concept and
                                thus prepared us well to present an all-encompassing solution
                            </li>
                        </ul>
                    </SplitSection>
                    <Section title="Final Thoughts" className="final-thoughts">
                        Overall, we were really proud of what we made. From the beginning none of us went into this
                        hackathon with the intention of winning something. Our main focus the whole time was to build
                        something of value and we believe our product really hit the mark. Not the mention that the
                        prize money was also quite handy.
                        <div className="wins-container">
                            {wins.map((win, index) => (
                                <img src={win.src} key={index} />
                            ))}
                        </div>
                    </Section>
                    <CaseStudyFooter projects={[PROJECTS[1], PROJECTS[2]]}></CaseStudyFooter>
                </div>
            </Container>
        </ThemeProvider>
    );
};

const secondaryBannerGap = 32;
const Container = styled.div`
    width: 100%;
    font-size: 16px;
    .case-study-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        .our-challenge {
            .section-content{
                display: flex;
                flex-direction: column;
                gap: 24px;
                align-items: flex-start;
            }
        }
    }
    .final-thoughts {
        .wins-container {
            margin-top: 32px;
            display: flex;
            justify-content: center;
            gap: 32px;
            img {
                height: 30vw;
            }
        }
    }
    #design-process {
        align-items: flex-start;
        .design-process-header {
            flex-shrink: 0;
            ${SectionTitle} {
                flex: 1;
                flex-shrink: 0;
            }
        }
        .design-process-section {
            ${DPSectionContent} {
                a {
                    text-decoration: underline;
                    font-size: 14px;

                    &:hover {
                        color: ${(props) => props.theme.empText};
                    }
                    &:active {
                        color: #5c516c;
                    }
                    color: #5c516c;
                }
                .solution-requirement-list,
                .solution-requirement-checklist {
                    li {
                        margin-bottom: 12px;
                    }
                }

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
            &.app-sketches {
                .solution-formula {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    ${ListCard} {
                        margin-top: 0px;
                    }
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
`;

export default Courtside;
