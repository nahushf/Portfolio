import styled from 'styled-components';
import {
    Insight,
    InsightsContainer,
    MajorPoint,
    Navigation,
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

export const Trupaws = () => {
    return (
        <Container>
            <Navigation /> 
            <ProjectBanner imgSrc="/trupaws/banner.png" />
            <ProjectInfoContainer>
                <Overview
                    projectName="Trupaws"
                    projectDescription="Trupaws is a pet matching website that helps users find pets to adopt from the shelters near them"
                />
                <ProjectStatsContainer>
                    <ProjectStat title="Duration" className="duration">
                        4 weeks
                    </ProjectStat>
                    <ProjectStat title="Tools" className="tools">
                        Figma
                    </ProjectStat>
                    <ProjectStat title="My Contributions" className="contributions">
                        Research, Brainstorming, Prototyping, User Evaluation
                    </ProjectStat>
                    <ProjectStat title="Team" className="team">
                        5 HCI Students
                    </ProjectStat>
                </ProjectStatsContainer>
                <Section className="process not-mobile">
                    <SectionTitle>Process</SectionTitle>
                    <ProcessStepsContainer>
                        <ProcessStep name="Research" src="/trupaws/research.png" />
                        <ProcessStep name="Analyze" src="/trupaws/analyze.png" />
                        <ProcessStep name="Ideate" src="/trupaws/ideate.png" />
                        <ProcessStep name="Prototype" src="/trupaws/prototype.png" />
                        <ProcessStep name="Evaluate" src="/trupaws/evaluate.png" />
                    </ProcessStepsContainer>
                </Section>
                <Section className="process-mobile mobile-only">
                    <SectionTitle>Process</SectionTitle>
                    <img src="/trupaws/process_map.png" />
                </Section>
                <Section>
                    <SectionTitle>Background</SectionTitle>
                    <SectionDescription>
                        For this project we were tasked with finding our own problem area, boiling down to a specific
                        well defined problem and then coming up with a solution for the same. Me and my team ended up
                        choosing pet adoption and animal shelters because most of the members in my team were pet owners
                        in some capacity and we all ended up resonating with this particular problem area
                    </SectionDescription>
                </Section>
                <Section>
                    <SectionTitle>Problem Statement</SectionTitle>
                    <SectionDescription>
                        Based on our research we finalized the following problem statement
                    </SectionDescription>
                    <MajorPoint src="/trupaws/problem-illustration.png">
                        How might we help adopters find pets that match their capabilities and interests and decrease
                        the burden on animal shelters?
                    </MajorPoint>
                </Section>
                <Section>
                    <SectionTitle>Why did we choose this problem?</SectionTitle>
                    <SectionDescription>
                        Upon looking at the problem area more closely we stumbled upon the following insights
                    </SectionDescription>
                    <InsightsContainer>
                        <Insight
                            index="1"
                            header="Only about half of the animals entering shelters end up getting adopted"
                        >
                            About 6-8 million animals enter animal shelters each year but only about 3-4 million animals
                            end up getting adopted
                        </Insight>
                        <Insight index="2" header="People say they want to adopt but aren’t adopting">
                            In a survey done by the American Humane Association, 56% of prospective dog owners said they
                            would adopt a dog from a shelter. But only 22% of dogs in the US have actually been adopted
                            from shelters.
                        </Insight>
                        <Insight index="3" header="Myths about shelter animals">
                            From our interviews we realized that there are a number of myths about shelter animals and
                            the one that stood out the most was that shelter animals are often percieved as “damaged
                            goods”. This wasn’t always true.
                        </Insight>
                    </InsightsContainer>
                </Section>
                <Section>
                    <SectionTitle>So why aren’t shelter animals being adopted</SectionTitle>
                    <SectionDescription>
                        Once we finalized our problem we decided to dig a little deeper into what specific hurdles,
                        people and shelters were facing when it came to adopting pets. And here is what we found
                    </SectionDescription>
                    <InsightsContainer>
                        <Insight headerText="Challenge" index="1" header="Lack of shelter resources">
                            Shelters often struggle to obtain enough resources to house and feed all animals that show
                            up at their door
                        </Insight>
                        <Insight headerText="Challenge" index="2" header="Fear of pet issues">
                            Many prospective pet owners fear behavioral health issues often seen in shelter pets
                        </Insight>
                        <Insight headerText="Challenge" index="3" header="Breed Favoritism">
                            Many prospective pet owners prefer specific pet breeds, such as preferring a labrador
                            retriever over a pit bull mix
                        </Insight>
                        <Insight headerText="Challenge" index="3" header="Pet Re-homing">
                            Many who adopt shelter animals end up returning the animal back to the shelter
                        </Insight>
                    </InsightsContainer>
                </Section>
                <Section className="solution">
                    <SectionTitle>Our Solution</SectionTitle>
                    <SectionDescription>
                        To address our problem statement we came up with Trupaws. What is Trupaws? It is
                    </SectionDescription>
                    <MajorPoint src="/trupaws/logo.png">
                        A web-based platform to help shelters communicate the behaviors and personality of their animals
                        to potential adopters so as to faciliate an informed adoption process
                    </MajorPoint>
                </Section>
                <Section className="competitors">
                    <SectionTitle>How is it different?</SectionTitle>
                    <div className="competitor-images">
                        {[1, 2, 3, 4, 5].map((index) => (
                            <img key={index} src={`/trupaws/competitor-${index}.png`} />
                        ))}
                    </div>
                    <SectionDescription>
                        There are already a bunch of pet matching applications out there. So how does our website
                        differ? Where our site defers is it provides a framework for shelters to communicate the
                        behaviors and personalities of their animals to the users. This in turn allows adopters to
                        assess how well an animal can fit into their lifestyle and make an informed decision about which
                        animal to adopt.
                    </SectionDescription>
                </Section>
                <Section>
                    <SectionTitle>Mobile screens - Posting a pet</SectionTitle>
                    <ScreensSection srcs={['/trupaws/posting-overview.png']} title="Post a pet">
                        This flow is used by animal shelters, to post an animal onto the website. The initial screen
                        gives an overview of what the process
                    </ScreensSection>
                    <ScreensSection
                        srcs={[
                            '/trupaws/choose-animal.png',
                            '/trupaws/general-info.png',
                            '/trupaws/characteristics.png'
                        ]}
                        title="Animal Information"
                    >
                        The posting process starts by first asking for what kind of animal is being posted followed by
                        some general information and characteristics about the animal.
                    </ScreensSection>
                    <ScreensSection
                        srcs={['/trupaws/evaluations-1.png', '/trupaws/evaluations-2.png']}
                        title="Evaluations"
                    >
                        Next some evaluation tests are presented which are meant to test how the animal behaves under
                        certain conditions and the animal’s response is noted using emojis and text.
                    </ScreensSection>
                    <ScreensSection srcs={['/trupaws/profile-1.png', '/trupaws/profile-2.png']} title="Pet Profile">
                        Finally the profile of the shelter animal is ready and the person posting the pet can view all
                        the entered information
                    </ScreensSection>
                </Section>
                <Section>
                    <SectionTitle>Mobile screens - Finding pets to adopt</SectionTitle>
                    <ScreensSection
                        srcs={['/trupaws/find-1.png', '/trupaws/find-2.png', '/trupaws/breed-info.png']}
                        title="Initial screens"
                    >
                        The user’s preferences are taken
                    </ScreensSection>
                    <ScreensSection
                        srcs={['/trupaws/activities.png', '/trupaws/family-dynamics.png', '/trupaws/existing-pets.png']}
                        title="Activities and Family Dynamics"
                    >
                        Next the user is asked what kind of activies they would like to indulge in with ther pet and
                        about the different people and pets already present in their family
                    </ScreensSection>
                    <ScreensSection
                        srcs={['/trupaws/find-characteristics.png', '/trupaws/issues.png']}
                        title="Characteristics and Issues"
                    >
                        Next the user is asked for some characteristics in their ideal pet and the kind of behaviors
                        they are willing to handle.
                    </ScreensSection>
                </Section>
                <Section>
                    <SectionTitle>Final Thoughts and Reflection</SectionTitle>
                    <SectionDescription>
                        The most interesting part of this project was thinking of ways to try and understand the users
                        and shelters and finding a way that they can be matched. We definitely see room for improvement
                        in the way the shelters will be posting their animals onto the platform. Even though the process
                        we came up with is thorough, it does seem to be quite time consuming. Shelters, with their
                        limited resources, would definitely find it challenging to enter so much information for each
                        animal. <p>Overall the entire project was quite enjoyable and challenging at the same time.</p>
                    </SectionDescription>
                </Section>
                <ProjectFooter />
            </ProjectInfoContainer>
        </Container>
    );
};

const Container = styled(ProjectContainer)`
    .project-banner-container {
        background: linear-gradient(100.38deg, #f7516f -81.19%, #fed089 211.72%);
        position: relative;
        box-shadow: inset 0px -19px 50px rgb(0 0 0 / 10%);
        overflow: hidden;
        img {
            position: absolute;
            height: 180%;
            top: -140px;
        }
    }

    .insight-container {
        .index {
            color: #f97b78;
        }
    }
    ${Section} {
        &.process-mobile {
            img {
                width: 95%;
                margin: 0px auto;
            }
        }
        &.solution {
            img {
                width: 224px;
                height: auto;
            }
            .major-point__container {
                height: 160px;
            }
        }
        &.competitors {
            .competitor-images {
                margin: 32px 0px;
                flex-wrap: wrap;
                justify-content: center;
                display: flex;
                align-items: center;
                gap: 32px;
                img {
                    height: 40px;
                }
            }
        }
    }
`;
export default Trupaws;
