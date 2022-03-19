import dynamic from 'next/dynamic';
import styled from 'styled-components';
import {
    BackButton,
    Emp,
    Insight,
    InsightsContainer,
    MajorPoint,
    Overview,
    ProcessStep,
    ProcessStepsContainer,
    ProjectBanner,
    ProjectContainer,
    ProjectFooter,
    ProjectInfoContainer,
    ProjectStat,
    ProjectStatsContainer,
    ScreensSection,
    Section,
    SectionDescription,
    SectionTitle
} from '../../components/reusableComponents';

const BasketballAudio = dynamic(() => import('../../components/BasketballAudio'), {
    ssr: false
});

const Courtside = () => {
    return (
        <Container>
            <ProjectBanner imgSrc="/courtside/banner.png" />
            <ProjectInfoContainer>
                <Overview
                    projectName="Courtside"
                    projectDescription={
                        <>
                            Courtside is an application/service that is aimed at <Emp>enhancing the Basketball experience for
                            the visually impaired</Emp>. The service is inspired by games such as Beep ball and Golf(where the
                            balls contain sensors). The app is primarily aimed towards the visually impaired but can
                            also enhance the experience of the average user by <Emp>bringing them closer to the Courtside
                            experience</Emp>.
                        </>
                    }
                    salientPoints={[
                        `Won the Best Accessibility, Best use of 5G and the Overall grand prize at the AT&T 5G Sports Hackathon`,
                        `Got us nominated for the Elite 50 Award at IUPUI`
                    ]}
                />
                <div className="secondary-banner">
                    <img src="/courtside/award-1.jpg" />
                    <img src="/courtside/award-2.jpg" />
                    <img src="/courtside/award-3.jpg" />
                </div>
                <ProjectStatsContainer>
                    <ProjectStat title="Duration" className="duration">
                        48 hours
                    </ProjectStat>
                    <ProjectStat title="Tools" className="tools">
                        Figma, Python
                    </ProjectStat>
                    <ProjectStat title="My Contributions" className="contributions">
                        Conceptualized Initial idea, Prototyping, Research
                    </ProjectStat>
                    <ProjectStat title="Team" className="team">
                        1 Data Science Student, 4 HCI Students
                    </ProjectStat>
                </ProjectStatsContainer>
                <Section className="process not-mobile">
                    <SectionTitle>Process</SectionTitle>
                    <ProcessStepsContainer>
                        <ProcessStep name="Research" src="/courtside/research.png" />
                        <ProcessStep name="Brainstorming" src="/courtside/brainstorming.png" />
                        <ProcessStep name="Expert Validation" src="/courtside/expert-validation.png" />
                        <ProcessStep name="Prototyping" src="/courtside/prototyping.png" />
                    </ProcessStepsContainer>
                </Section>
                <Section className="process-mobile mobile-only">
                    <SectionTitle>Process</SectionTitle>
                    <img src="/courtside/process_map.png" />
                </Section>
                <Section className="research">
                    <SectionTitle>Research</SectionTitle>
                    <SectionDescription>
                        As part of our research we found information about what 5g is and some problems areas in sports
                        which could be tackled using 5g
                    </SectionDescription>
                    <InsightsContainer>
                        <Insight index="1" header="What is 5G?">
                            5th Generation wireless technology Higher internet speeds Ultra low latency
                        </Insight>
                        <Insight index="2" header="Poor experience for the visually impaired">
                            The current method with which the visually impaired access a game such as basketball, is
                            with the use of headphones which only deliver the commentary of any match
                        </Insight>
                        <Insight index="3" header="Courtside experience is too expensive">
                            The courtside seats offer the richest basketball experience but are often too expensive for
                            the average joe to afford. Sound is the primary factory that contributes to the courtside
                            experience
                        </Insight>
                    </InsightsContainer>
                </Section>
                <Section className="problem-statement">
                    <SectionTitle>Problem Statement</SectionTitle>
                    <SectionDescription>
                        Based on our research we finalized the following problem statement
                    </SectionDescription>
                    <MajorPoint src="/courtside/problem-statement-illustration.png">
                        How might we enhance the basketball experience for the visually impaired and improve upon the
                        experience of the average joe with the use of sound
                    </MajorPoint>
                </Section>
                <Section className="brainstorming">
                    <SectionTitle>Brainstorming and Initial Solution</SectionTitle>
                    <SectionDescription>
                        We used the information we gathered in our research to guide our brainstorming sessions. After a
                        few brief sessions we decided on the following solution which we thought could best address our
                        problem:
                    </SectionDescription>
                    <MajorPoint src="/courtside/idea-illustration.png">
                        A service that uses a combination of tactile braille displays and sensors in the ball to give
                        the visually impaired a touch based alternative to experiencing basketball
                    </MajorPoint>
                </Section>
                <Section className="expert-validation">
                    <SectionTitle>Expert Validation</SectionTitle>
                    <SectionDescription>
                        We used the information we gathered in our research to guide our brainstorming sessions. After a
                        few brief sessions we decided on the following solution which we thought could best address our
                        problem:
                    </SectionDescription>
                    <div className="limitations-container">
                        <Insight headerText="Limitation" index="1" header="Tactile Braille displays are too expensive">
                            The service would make use of tactile braille displays which are too expensive for the
                            average joe. Let alone for the visually impaired and their limited earning potential
                        </Insight>
                        <Insight headerText="Limitation" index="2" header="The actual experience is in the sound ">
                            While a tactile display would give the users an idea of where the players are located, the
                            actually joy of any sport lies in the energy at the venue and not just the technicals of the
                            sport
                        </Insight>
                        <Insight headerText="Limitation" index="3" header="Does not address ordinary sports fans">
                            While the tactile display would definitely enhance the experience of the visually impaired,
                            such a service would be useless for people who can see clearly and would thus not address
                            the latter part of our problem statement.
                        </Insight>
                    </div>
                </Section>
                <Section className="rethinking">
                    <SectionTitle>Rethinking the idea</SectionTitle>
                    <SectionDescription>
                        Using our conversations with the experts, we decided to rethink our initial idea. and came up
                        with the following solution:
                    </SectionDescription>
                    <MajorPoint src="/courtside/idea-illustration.png">
                        An application that live streams gameplay audio from sensors embedded within the basketball and
                        provides a spatial audio simulation of a courtside experience for the users.{' '}
                    </MajorPoint>
                </Section>
                <Section className="prototyping">
                    <SectionTitle>Prototyping</SectionTitle>
                    <SectionDescription>
                        After validating our new idea with the experts we decided to come up with a plan to demonstrate
                        our idea in the limited timespan of 48 hours which was the duration of the Hackathon. Our
                        demonstration was consisted of two parts. One part was the UI and a figma prototype and the
                        second part was a proof on concept demonstrating the movement of a ball using sound.
                    </SectionDescription>
                </Section>
                <Section className="audio-poc">
                    <SectionTitle>Audio POC</SectionTitle>
                    <SectionDescription>
                        As part of our proof of concept we used something like the following to illustrate that sound
                        can be used as an effective medium to convey the position of the ball.{' '}
                        <span>(Please use headphones for the best experience)</span>
                    </SectionDescription>
                    <BasketballAudio />
                </Section>
                <Section className="mobile-app">
                    <SectionTitle>Mobile App</SectionTitle>
                    <SectionDescription>
                        For the UI we started off trying to design a UI targetted at the visually impaired. This
                        involved trying to think how to build a system that could be traversed by someone who cannot
                        see.{' '}
                    </SectionDescription>
                    <img src="/courtside/initial-system-design.png" className="initial-system-design" />
                    <ImageDescription>
                        Fig1. Initial system design: One initial direction we explored visualized the system as a system
                        of pits where each pit had multiple levels and each pit was analogous to a certain part of the
                        UI, such as a pit for the settings part of the UI, another for accessing games, etc. And each
                        pit had multiple levels that the user could jump between and each level represented substeps in
                        a part of the UI. We imagined we could use a three finger swipe to jump between pits and two
                        finger swipes to jump between levels in a pit
                    </ImageDescription>
                    <SectionDescription>
                        With some guidance from William Lawrence who works as an accessibility expert at AT&T, we
                        realized that we can design an ordinary mobile UI and let the inbuilt Talkback and Voice Over
                        features present in the iOS and Android Operating systems handle the accessibility for the
                        visually impaired. Keeping this in mind we designed the following screens
                    </SectionDescription>
                    <ScreensSection
                        srcs={['/courtside/match-list.png', '/courtside/match-details.png']}
                        title="Match list and details"
                    >
                        The starting screens of the application. Users can see all the games that are being hosted on
                        the app and then tap any game to view some more detailed information about the game. On the
                        details page the user would have the ability to buy the ‘virtual ticket’ which you enable them
                        to access the spatial audio experience of the game
                    </ScreensSection>
                    <ScreensSection
                        srcs={['/courtside/match-stats.png', '/courtside/match-audio.png']}
                        title="Match screens and spatial audio experience"
                    >
                        Once the user purchases the ‘virtual ticket’ they can go to the match screen where they will be
                        given access to information such as the match and player statistics. Here they can also access
                        the audio experience which will be the USP of this application. The audio experience will be a
                        combination of the sounds of the audience, the commentary and the sounds of the ball and the
                        players moving on the court. The users will also be able to customize the audio by reducing or
                        increasing the volumes of each component of the audio
                    </ScreensSection>
                    <ScreensSection
                        srcs={['/courtside/voice-assistant-1.png', '/courtside/voice-assistant-2.png']}
                        title="Voice Assistant"
                    >
                        As an additional layer of accessibility for the visually impaired the application would also
                        contain a voice assistant feature where the user can use his/her voice to move around in the
                        application.
                    </ScreensSection>
                </Section>
                <Section className="final-thoughts">
                    <SectionTitle>Final Thoughts</SectionTitle>
                    <SectionDescription>
                        Overall, we were really proud of what we made. From the beginning none of us went into this
                        hackathon with the intention of winning something. Our main focus the whole time was to build
                        something of value and we believe our product really hit the mark. Not the mention that the
                        prize money was also quite handy.
                    </SectionDescription>
                    <img src="/courtside/team-funyuns.jpg" />
                    <ImageDescription>Team Funyuns for the win!!</ImageDescription>
                </Section>
                <ProjectFooter />
            </ProjectInfoContainer>
        </Container>
    );
};
const ImageDescription = styled.div`
    font-size: 12px;
    line-height: 18px;
    color: #9b9b9b;
`;

const secondaryBannerGap = 32;
const Container = styled(ProjectContainer)`
    font-size: 16px;
    line-height: 24px;
    padding: 24px;
    .project-banner-container {
        background: linear-gradient(137.49deg, #f4a58a 0%, #ed6b4e 96.01%);
    }
    ${ProjectInfoContainer} {
        .secondary-banner {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            gap: ${secondaryBannerGap}px;
            img {
                height: 35vw;
                box-shadow: 0px 28px 60px rgba(0, 0, 0, 0.1);
            }
        }
        .insight-container {
            .index {
                color: #ed6b4e;
            }
        }
        ${Section} {
            &.process-mobile {
                img {
                    width: 95%;
                    margin: 0px auto;
                }
            }
            &.research {
            }
            &.problem-statement {
            }
            &.mobile-app {
                img.initial-system-design {
                    width: 100%;
                }
                ${ImageDescription} {
                    margin-bottom: 16px;
                }
                .screens-section__container {
                }
            }
            &.final-thoughts {
                display: flex;
                flex-direction: column;
                img {
                    align-self: center;
                    width: 100%;
                    margin-top: 16px;
                }
                .image-description {
                }
            }
            ${ProcessStepsContainer} {
                &::after {
                    background: linear-gradient(137.49deg, #f4a58a 0%, #ed6b4e 96.01%);
                }
            }
        }
    }
`;

export default Courtside;
