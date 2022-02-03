import styled from 'styled-components';
import {
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

const Farm2U = () => {
    return (
        <Container>
            <ProjectBanner imgSrc="/farm2u/banner.png" />
            <ProjectInfoContainer>
                <Overview
                    projectName="Farm2U"
                    projectDescription="
                    Farm2U is a mealbox service which curates meal boxes based on locally grown ingredients thereby
                    allowing users to eat local and curb the environmental impact of consuming globally sourced
                    ingredients
                    "
                />
                <ProjectStatsContainer>
                    <ProjectStat title="Duration" className="duration">
                        8 weeks
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
                <Section className="process">
                    <SectionTitle>Process</SectionTitle>
                    <ProcessStepsContainer>
                        <ProcessStep name="Research" src="/farm2u/research.png" />
                        <ProcessStep name="Analyze" src="/farm2u/analyze.png" />
                        <ProcessStep name="Ideate" src="/farm2u/ideate.png" />
                        <ProcessStep name="Prototype" src="/farm2u/prototype.png" />
                        <ProcessStep name="Evaluate" src="/farm2u/evaluate.png" />
                    </ProcessStepsContainer>
                </Section>
                <Section>
                    <SectionTitle>Background</SectionTitle>
                    <SectionDescription>
                        Our Design prompt was to look for a significant problem area in the area of climate change and
                        to come up with a solution that addresses the identified problem area. Our research was
                        initiallly focused on identifying a problem area and subsequently on coming up with a solution
                    </SectionDescription>
                </Section>
                <Section>
                    <SectionTitle>The Problem</SectionTitle>
                    <SectionDescription>
                        Our Design prompt was to look for a significant problem area in the area of climate change and
                        to come up with a solution that addresses the identified problem area. Our research was
                        initiallly focused on identifying a problem area and subsequently on coming up with a solution
                    </SectionDescription>
                    <MajorPoint src="/farm2u/problem-illustration.png">
                        Making sustainable* consumer choices is challenging, even when motivation is present due to:
                        <ul>
                            <li>Local choices not being easily accessible to consumers</li>
                            <li>Unclear, inaccessible, and sometimes misleading consumer information</li>
                            <li>Difficulty in effectively planning consumption of purchased goods</li>
                        </ul>
                    </MajorPoint>
                </Section>
                <Section>
                    <SectionTitle>Why did we choose this problem?</SectionTitle>
                    <SectionDescription>
                        From our empirical and secondary research we obtained the following insights into the problems
                        faced by people when it comes to living a sustainble life
                    </SectionDescription>
                    <InsightsContainer>
                        <Insight index="1" header="Consumers want more visibility in the supply chain">
                            <ul>
                                <li>
                                    Consumers want to know where and how products are made, but this information is not
                                    widely available (Growth from Knowledge, 2019)
                                </li>
                                <li>
                                    Consumers have indicated they may even be “willing to pay 2% to 10% more for
                                    products from companies that provide greater supply chain transparency.” (Kraft,
                                    Valdez, & Zheng, 2018)
                                </li>
                            </ul>
                        </Insight>
                        <Insight index="2" header="Consumers want to reduce their food wastage">
                            Average U.S. household wastes 31.9% of purchased food (Yu & Jaenicke, 2020)
                        </Insight>
                        <Insight index="3" header="Local choices are not accessible">
                            Consumers face difficulty either finding locally sourced items or do not have the
                            information on how to make use of them
                        </Insight>
                        <Insight index="4" header="Unsustainable choices are too convenient">
                            Items shipped from long distances or wrapped in plastic are for more accessible and
                            convenient as compared to sustainable alternatives
                        </Insight>
                    </InsightsContainer>
                </Section>
                <Section className="personas">
                    <SectionTitle>Personas</SectionTitle>
                    <SectionDescription>
                        To better empathize with the users we constructed the following two personas which represent the
                        categories of consumers we encountered in our research
                    </SectionDescription>
                    <img src="/farm2u/persona-1.png" />
                    <img src="/farm2u/persona-2.png" />
                </Section>
                <Section>
                    <SectionTitle>Problem Statement</SectionTitle>
                    <SectionDescription>
                        Based on our research we realized that connecting people to their local produce address all of the
                        points mentioned in our problem. Based on this notion we finalized the following problem
                        statement
                    </SectionDescription>
                    <MajorPoint src="/farm2u/problem-statement-illustration.png">
                        How might enable people to connect with their local produce in a way that not only exposes them
                        to effectively using them but also reduces wastage.
                    </MajorPoint>
                </Section>
                <Section>
                    <SectionTitle>Our Solution</SectionTitle>
                    <SectionDescription>
                        To address our problem statement we came up with Farm2U. What is Farm2U? you may ask. At it’s
                        core,
                    </SectionDescription>
                    <MajorPoint src="/farm2u/solution-illustration.png">
                        Farm2U is a meal box curation service using locally sourced ingredients
                    </MajorPoint>
                </Section>
                <Section>
                    <SectionTitle>How will it work?</SectionTitle>
                    <SectionDescription>
                        The service will have two components:
                        <ul>
                            <li>
                                A backend which will construct meal boxes out of the produce locally available to the
                                user
                            </li>
                            <li>
                                An application which will allow the user to order from the constructed list of meal
                                boxes. Users can up their sustainability quotient either by opting for self pickup from
                                a designated location as opposed to home delivery or by returning used containers from
                                previous orders from the service
                            </li>
                        </ul>
                    </SectionDescription>
                </Section>
                <Section>
                    <SectionTitle>How is it sustainable?</SectionTitle>
                    <SectionDescription>Farm2U strives to be sustainable through the following ways</SectionDescription>
                    <MajorPoint src="/farm2u/sustainability-illustration.png">
                        <li>
                            Shortening the supply chain
                            <ul>
                                <li>Requires less transportation</li>
                                <li>Less opportunity for spoilage</li>
                            </ul>
                        </li>
                        <li>
                            Reusable boxes and packaging- customers can exchange their containers with every delivery or
                            pick-up
                        </li>
                        <li>Only providing the exact amount of ingredients to lessen the chance of food waste</li>
                    </MajorPoint>
                </Section>
                <Section>
                    <SectionTitle>Mobile Screens</SectionTitle>
                    <ScreensSection
                        title="User Onboarding"
                        srcs={['/farm2u/onboarding-1.png', '/farm2u/onboarding-2.png']}
                    >
                        The user’s dietary preferences and allergies are noted by the system. This information will be
                        used to personalize the meal box curation process.
                    </ScreensSection>
                    <ScreensSection
                        title="Location Information"
                        srcs={['/farm2u/location-1.png', '/farm2u/location-2.png', '/farm2u/location-3.png']}
                    >
                        The user will be asked for his/her location and will subsequently be shown the nearby pickup
                        locations and farms from which the produce will be sourced
                    </ScreensSection>
                    <ScreensSection
                        title="Meal box listing and filtering"
                        srcs={['/farm2u/meal-list.png', '/farm2u/filter.png']}
                    >
                        The user will be able to view a list of curated meal boxes
                    </ScreensSection>
                    <ScreensSection
                        title="Meal box Information"
                        srcs={['/farm2u/meal-info.png', '/farm2u/farm-info.png']}
                    >
                        The user will be given some minimal information about a meal box such as the prep time and the
                        farms the ingredients have been sourced from
                    </ScreensSection>
                    <ScreensSection
                        title="Customize Meal and Order"
                        srcs={['/farm2u/meal-customization.png', '/farm2u/cart.png']}
                    >
                        Upon Selecting a meal the user will be able to tweak the ingredients and place an order. On the
                        cart screen the user will be able to select pickup or delivery
                    </ScreensSection>
                    <ScreensSection
                        title="Validation of having made a sustainable choice"
                        srcs={['/farm2u/validation.png']}
                    >
                        On placing an order the user will be shown a screen giving them a glimpse of the impact they
                        have made by making choosing our service
                    </ScreensSection>
                    <ScreensSection
                        title="Post order Information"
                        srcs={['/farm2u/order-details.png', '/farm2u/post-order-meal-info.png']}
                    >
                        On receiving their order, the user will be able to use the qr code on the meal box to view their
                        order and to view the cooking instructions for their meal box
                    </ScreensSection>
                </Section>
                <Section>
                    <SectionTitle>Final Thoughts and Reflection</SectionTitle>
                    <SectionDescription>
                        Going through this project certainly was an interesting experience. This was my first project as
                        a grad student pursuing a degree in HCI and it taught/exposed me to a number of aspects
                        regarding working on a design project
                        <ul>
                            <li>
                                First and foremost this project exposed me to the value of a breadth first approach to
                                brainstorming. To give you some context, While looking at climate change and thinking
                                about the specific problem to tackle, me and my team brainstormed a collection of 50+
                                ideas which helped us look at the problem area from multiple angles and pick out the one
                                problem that resonated with all of us. This breadth first approach to brainstorming has
                                become one of the pillars of my design philosophy ever since.
                            </li>
                            <li>
                                Secondly, it exposed me to the internal push and pull which is present in any team and
                                helped me think through ways to keep the team dynamics healthy from my end.
                            </li>
                        </ul>
                    </SectionDescription>
                </Section>
                <ProjectFooter />
            </ProjectInfoContainer>
        </Container>
    );
};

const Container = styled(ProjectContainer)`
    .project-banner-container {
        background: linear-gradient(180deg, #58b96e 0%, #7dbd78 100%);
        position: relative;
        box-shadow: inset 0px -19px 50px rgb(0 0 0 / 10%);
        overflow: hidden;
        img {
            position: absolute;
            height: 150%;
            top: 80px;
        }
    }
    .insight-container {
        .index {
            color: #58b96e;
        }
    }
    ${ProjectInfoContainer} {
        ${ProjectStatsContainer} {
            margin-top: 0px;
        }
        ${Section} {
            ${ProcessStepsContainer} {
                &::after {
                    background: linear-gradient(180deg, #58b96e 0%, #7dbd78 100%);
                }
            }
            &.personas {
                ${SectionDescription} {
                    margin-bottom: 16px;
                }
                img {
                    height: 400px;
                }
            }
        }
    }
`;

export default Farm2U;
