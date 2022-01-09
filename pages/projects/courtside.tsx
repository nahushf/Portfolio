import styled from 'styled-components';
import dynamic from 'next/dynamic';
import {BackButton} from '../../components/reusableComponents';

const BasketballAudio = dynamic(() => import('../../components/BasketballAudio'), {
    ssr: false
});

const ProjectStat = ({ className, title, children }) => {
    return (
        <div className={`project-stat ${className}`}>
            <div className="project-stat__key">{title}</div>
            <div className="project-stat__value">{children}</div>{' '}
        </div>
    );
};

const ProcessStep = ({ name, src }) => {
    return (
        <div className="process-step">
            <img className="process-image" src={`/courtside/${src}`} />
            <div className="step-name">{name}</div>
        </div>
    );
};

const Insight = ({ index, header, children }) => {
    return (
        <div className="insight-container">
            <div className="index">Insight #{index}</div>
            <div className="header">{header}</div>
            <div className="content">{children}</div>
        </div>
    );
};

const Limitation = ({ index, header, children }) => {
    return (
        <div className="limitation-container">
            <div className="index">Limitation #{index}</div>
            <div className="header">{header}</div>
            <div className="content">{children}</div>
        </div>
    );
};

const MajorPoint = ({ children, src }) => {
    return (
        <div className="major-point__container">
            <img src={`/courtside/${src}`} />
            <div className="major-point">{children}</div>
        </div>
    );
};

const ScreensSection = ({ title, children, srcs }) => {
    return (
        <div className="screens-section__container">
            <div className="screens-info">
                <div className="screens-section__title">{title}</div>
                <div className="screens-section__description">{children}</div>
            </div>
            <div className="screen-images">
                {srcs.map((src, index) => {
                    return <img src={`/courtside/${src}`} key={index} />;
                })}
            </div>
        </div>
    );
};

const Courtside = () => {
    return (
        <Container>
            <div className="banner-container">
                <img src="/courtside/banner.png" />
            </div>
            <div className="project-info">
                <div className="overview-container">
                    <div className="overview">
                        <div className="project-name">Courtside</div>
                        Courtside is an application/service that is aimed at enhancing the Basketball experience for the
                        visually impaired. The service is inspired by games such as Beep ball and Golf(where the balls
                        contain sensors). The app is primarily aimed towards the visually impaired but can also enhance
                        the experience of the average user by bringing them closer to the Courtside experience.
                    </div>
                    <div className="salient-points">
                        <div className="salient-points__title">Salient Points</div>
                        <ul>
                            <li>
                                Won the Best Accessibility, Best use of 5G and the Overall grand prize at the AT&T 5G
                                Sports Hackathon
                            </li>
                            <li>Got us nominated for the Elite 50 Award at IUPUI</li>
                        </ul>
                    </div>
                </div>
                <div className="secondary-banner">
                    <img src="/courtside/award-1.jpg" />
                    <img src="/courtside/award-2.jpg" />
                    <img src="/courtside/award-3.jpg" />
                </div>
                <div className="project-stats">
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
                </div>
                <div className="process section">
                    <SectionTitle>Process</SectionTitle>
                    <div className="process-steps-container">
                        <ProcessStep name="Research" src="research.png" />
                        <ProcessStep name="Brainstorming" src="brainstorming.png" />
                        <ProcessStep name="Expert Validation" src="expert-validation.png" />
                        <ProcessStep name="Prototyping" src="prototyping.png" />
                    </div>
                </div>

                <div className="research section">
                    <SectionTitle>Research</SectionTitle>
                    <SectionDescription>
                        As part of our research we found information about what 5g is and some problems areas in sports
                        which could be tackled using 5g
                    </SectionDescription>
                    <div className="insights-container">
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
                    </div>
                </div>
                <div className="problem-statement section">
                    <SectionTitle>Problem Statement</SectionTitle>
                    <SectionDescription>
                        Based on our research we finalized the following problem statement
                    </SectionDescription>
                    <MajorPoint src="problem-statement-illustration.png">
                        How might we enhance the basketball experience for the visually impaired and improve upon the
                        experience of the average joe with the use of sound
                    </MajorPoint>
                </div>
                <div className="brainstorming section">
                    <SectionTitle>Brainstorming and Initial Solution</SectionTitle>
                    <SectionDescription>
                        We used the information we gathered in our research to guide our brainstorming sessions. After a
                        few brief sessions we decided on the following solution which we thought could best address our
                        problem:
                    </SectionDescription>
                    <MajorPoint src="idea-illustration.png">
                        A service that uses a combination of tactile braille displays and sensors in the ball to give
                        the visually impaired a touch based alternative to experiencing basketball
                    </MajorPoint>
                </div>
                <div className="expert-validation section">
                    <SectionTitle>Expert Validation</SectionTitle>
                    <SectionDescription>
                        We used the information we gathered in our research to guide our brainstorming sessions. After a
                        few brief sessions we decided on the following solution which we thought could best address our
                        problem:
                    </SectionDescription>
                    <div className="limitations-container">
                        <Limitation index="1" header="Tactile Braille displays are too expensive">
                            The service would make use of tactile braille displays which are too expensive for the
                            average joe. Let alone for the visually impaired and their limited earning potential
                        </Limitation>
                        <Limitation index="2" header="The actual experience is in the sound ">
                            While a tactile display would give the users an idea of where the players are located, the
                            actually joy of any sport lies in the energy at the venue and not just the technicals of the
                            sport
                        </Limitation>
                        <Limitation index="3" header="Does not address ordinary sports fans">
                            While the tactile display would definitely enhance the experience of the visually impaired,
                            such a service would be useless for people who can see clearly and would thus not address
                            the latter part of our problem statement.
                        </Limitation>
                    </div>
                </div>
                <div className="rethinking section">
                    <SectionTitle>Rethinking the idea</SectionTitle>
                    <SectionDescription>
                        Using our conversations with the experts, we decided to rethink our initial idea. and came up
                        with the following solution:
                    </SectionDescription>
                    <MajorPoint src="idea-illustration.png">
                        An application that live streams gameplay audio from sensors embedded within the basketball and
                        provides a spatial audio simulation of a courtside experience for the users.{' '}
                    </MajorPoint>
                </div>
                <div className="prototyping section">
                    <SectionTitle>Prototyping</SectionTitle>
                    <SectionDescription>
                        After validating our new idea with the experts we decided to come up with a plan to demonstrate
                        our idea in the limited timespan of 48 hours which was the duration of the Hackathon. Our
                        demonstration was consisted of two parts. One part was the UI and a figma prototype and the
                        second part was a proof on concept demonstrating the movement of a ball using sound.
                    </SectionDescription>
                </div>
                <div className="audio-poc section">
                    <SectionTitle>Audio POC</SectionTitle>
                    <SectionDescription>
                        As part of our proof of concept we used something like the following to illustrate that sound
                        can be used as an effective medium to convey the position of the ball.{' '}
                        <span>(Please use headphones for the best experience)</span>
                    </SectionDescription>
                    <BasketballAudio />
                </div>
                <div className="mobile-app section">
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
                    <ScreensSection srcs={['match-list.png', 'match-details.png']} title="Match list and details">
                        The starting screens of the application. Users can see all the games that are being hosted on
                        the app and then tap any game to view some more detailed information about the game. On the
                        details page the user would have the ability to buy the ‘virtual ticket’ which you enable them
                        to access the spatial audio experience of the game
                    </ScreensSection>
                    <ScreensSection
                        srcs={['match-stats.png', 'match-audio.png']}
                        title="Match screens and spatial audio experience"
                    >
                        Once the user purchases the ‘virtual ticket’ they can go to the match screen where they will be
                        given access to information such as the match and player statistics. Here they can also access
                        the audio experience which will be the USP of this application. The audio experience will be a
                        combination of the sounds of the audience, the commentary and the sounds of the ball and the
                        players moving on the court. The users will also be able to customize the audio by reducing or
                        increasing the volumes of each component of the audio
                    </ScreensSection>
                    <ScreensSection srcs={['voice-assistant-1.png', 'voice-assistant-2.png']} title="Voice Assistant">
                        As an additional layer of accessibility for the visually impaired the application would also
                        contain a voice assistant feature where the user can use his/her voice to move around in the
                        application.
                    </ScreensSection>
                </div>
                <div className="final-thoughts section">
                    <SectionTitle>Final Thoughts</SectionTitle>
                    <SectionDescription>
                        Overall, we were really proud of what we made. From the beginning none of us went into this
                        hackathon with the intention of winning something. Our main focus the whole time was to build
                        something of value and we believe our product really hit the mark. Not the mention that the
                        prize money was also quite handy.
                    </SectionDescription>
                    <img src="/courtside/team-funyuns.jpg" />
                    <ImageDescription>Team Funyuns for the win!!</ImageDescription>
                </div>
                <div className="contact section">
                    Have some feedback for this project or just want to chat? Feel free to&nbsp;
                    <a href="mailto:nahush.farkande@gmail.com">reach out to me</a>
                </div>
                <div className="project-footer">
                    <BackButton href="/projects" text="Back to Projects" />
                </div>
            </div>
        </Container>
    );
};
const SectionTitle = styled.div``;
const ImageDescription = styled.div`
    font-size: 12px;
    color: #9b9b9b;
`;
const SectionDescription = styled.div``;
const secondaryBannerGap = 32;
const processThumbnailHeight = '124px';
const Container = styled.div`
    font-size: 16px;
    line-height: 24px;
    padding: 24px;
    .banner-container {
        margin: -24px -24px 0px -24px;
        background: linear-gradient(137.49deg, #f4a58a 0%, #ed6b4e 96.01%);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 70vh;
        img {
            height: 80%;
        }
    }
    .project-info {
        max-width: 700px;
        margin: 0px auto;
        .overview-container {
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
        }
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
        .project-stats {
            margin: 40px 0px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-column-gap: 24px;
            .project-stat {
                .project-stat__key {
                    font-weight: 700;
                }
            }
        }
        .section {
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
            .insights-container .insight-container,
            .limitation-container {
                margin: 16px auto 0px auto;
                width: 50vw;
                .index,
                .header {
                    font-weight: 700;
                }
                .index {
                    color: #ed6b4e;
                }
                .header {
                }
                .content {
                }
            }
            .major-point__container {
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
            }
            &.process {
                .process-steps-container {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    position: relative;
                    .process-step {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        img {
                            height: ${processThumbnailHeight};
                            margin-bottom: 16px;
                        }
                    }
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
                    width: 100%;
                    margin: 0 auto;
                    margin-top: 32px;
                    display: flex;
                    gap: 24px;
                    .screens-info {
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
            &.contact {
                color: #6f6f6f;
                a {
                    color: #000;
                    text-decoration: underline;
                }
            }
        }
    }
`;

export default Courtside;
