import Image from 'next/image';
import styled from 'styled-components';
import { Footer } from '../../components/Footer';
import {
    Emp,
    ImageDescription,
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
const importAll = (require) =>
    require.keys().reduce((acc, next) => {
        acc[next.replace('./', '')] = require(next);
        return acc;
    }, {});

function extractSrcName(entry) {
    return parseInt(entry[0].split('-')[0]);
}
const wireframeSrcs = importAll(
    (require as any).context('../../public/farm2u/wireframes', false, /\.(png|jpe?g|svg)$/)
) as any;
const wireframes = Object.entries(wireframeSrcs as Record<string, any>)
    .map(([frameName, src]) => {
        return [
            ...frameName
                .split('.')[0]
                .split('-')
                .map((str, index) => (!index ? parseInt(str) : str)),
            src
        ];
    })
    .sort(([a], [b]) => {
        return a > b ? 1 : a < b ? -1 : 0;
    });
const Farm2U = () => {
    return (
        <Container>
            <Navigation />
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
                    <ProjectStat title="My Contributions" className="contributions">
                        Observations, User Interviews, Affinity Mapping, Brainstorming, Prototyping, User Evaluation
                    </ProjectStat>
                    <ProjectStat title="Team" className="team">
                        5 HCI Students
                    </ProjectStat>
                    <ProjectStat title="Duration" className="duration">
                        8 weeks
                    </ProjectStat>
                    <ProjectStat title="Tools" className="tools">
                        Figma
                    </ProjectStat>
                </ProjectStatsContainer>
                <Section className="process not-mobile">
                    <SectionTitle>Process</SectionTitle>
                    <ProcessStepsContainer>
                        <ProcessStep name="Research" src="/farm2u/research.png" />
                        <ProcessStep name="Analyze" src="/farm2u/analyze.png" />
                        <ProcessStep name="Ideate" src="/farm2u/ideate.png" />
                        <ProcessStep name="Prototype" src="/farm2u/prototype.png" />
                        <ProcessStep name="Evaluate" src="/farm2u/evaluate.png" />
                    </ProcessStepsContainer>
                </Section>
                <Section className="process_mobile mobile-only">
                    <SectionTitle>Process</SectionTitle>
                    <img src="/farm2u/process_map.png" />
                </Section>
                <Section>
                    <SectionTitle>The Challenge</SectionTitle>
                    <SectionDescription>
                        Our Design prompt was to look for a significant problem area in the area of climate change and
                        to come up with a solution that addresses the identified problem area. Our research was
                        initiallly focused on identifying a problem area and subsequently on coming up with a solution
                    </SectionDescription>
                </Section>
                <Section>
                    <SectionTitle>Narrowing down the Problem</SectionTitle>
                    <SectionDescription>
                        The area of climate change and sustainability is far too broad to be solved by one solution.
                        Hence we decided to boil down to a specific problem in the area of climate change. To do this we
                        spoke to a{' '}
                        <Emp>
                            few people in our network to understand what problems they face when trying to live
                            sustainably
                        </Emp>
                        . What we found was,
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
                    <SectionTitle>Sustainability and consumers</SectionTitle>
                    <SectionDescription>
                        Next, in <Emp>order to understand sustainability and consumers better</Emp> we conducted desk
                        research and conducted interviews with people who implement some form of sustainability in their
                        lifestyle as well as people who don&apos;t.
                    </SectionDescription>
                    <InsightsContainer>
                        <Insight index="1" header="Consumers want more visibility in the supply chain">
                            <ul>
                                <li>
                                    Consumers want to know where and how products are made, but this information is not
                                    widely available <a href="">(Growth from Knowledge, 2019)</a>
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
                        Based on our research we realized that connecting people to their local produce address all of
                        the points mentioned in our problem. Based on this notion we finalized the following problem
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
                <Section className="wireframes">
                    <SectionTitle>Wireframes</SectionTitle>
                    <SectionDescription>
                        {wireframes.map(([frameIndex, frameName, frameSrc]) => (
                            <div className="wireframe-container" key={frameIndex}>
                                <Image src={frameSrc as any} />
                                <ImageDescription>{frameName}</ImageDescription>
                            </div>
                        ))}
                    </SectionDescription>
                </Section>
                <Section>
                    <SectionTitle>Mobile Screens</SectionTitle>
                    <ScreensSection title="User Onboarding" srcs={['/farm2u/preferences.mp4']}>
                        The user’s dietary preferences and allergies are noted and used to curate meal boxes.{' '}
                    </ScreensSection>
                    <ScreensSection title="Location Information" srcs={['/farm2u/location-information.mp4']}>
                        The user&apos;s location will be taken to identify nearby farms and pickup locations.
                    </ScreensSection>
                    <ScreensSection title="Meal box listing and filtering" srcs={['/farm2u/list-filters.mp4']}>
                        The user will be able to view a list of curated meal boxes.
                    </ScreensSection>
                    <ScreensSection title="Meal box Information" srcs={['/farm2u/meal-info-and-farms.mp4']}>
                        The user will be given some <Emp>minimal information</Emp> about a meal box such as the prep
                        time and the farms the ingredients have been sourced from.
                    </ScreensSection>
                    <ScreensSection title="Customize Meal and Order" srcs={['/farm2u/cart-and-customization.mp4']}>
                        The user will be able to tweak the ingredients and place an order. On the cart screen the user
                        will be able to select pickup or delivery.
                    </ScreensSection>
                    <ScreensSection
                        title="Validation of having made a sustainable choice"
                        srcs={['/farm2u/thank-you.png']}
                    >
                        On placing an order the user will be shown a screen giving them a glimpse of the impact they
                        have made by making choosing our service
                    </ScreensSection>
                    <ScreensSection title="Post order Information" srcs={['/farm2u/post-order-flow.mp4']}>
                        On receiving their order, the user will be able to use the qr code on the meal box to view their
                        order and to view the cooking instructions for their meal box
                    </ScreensSection>
                </Section>
                <Section>
                    <SectionTitle>Final Thoughts and Reflection</SectionTitle>
                    <SectionDescription>
                        Going through this project certainly was an interesting experience. This was my first project as
                        a grad student pursuing a degree in HCI and it taught/exposed me to a number of aspects
                        regarding team design project
                        <ol>
                            <li>
                                <Emp> The value of a breadth first approach to brainstorming</Emp>. While looking at
                                climate change and thinking about the specific problem to tackle, me and my team
                                brainstormed a collection of <Emp>50+ ideas</Emp>{' '}
                            </li>
                            <li>
                                <Emp>Validating an idea with professors and users early on</Emp>. In the initial stages
                                of the project while we were struggling with the ideation, speaking to our professors
                                gave us the understanding of what makes an effective solution and helped us align our
                                research with the ideation process.
                            </li>
                            <li>
                                Secondly, it exposed me to the <Emp>internal push and pull</Emp> which is present in any
                                team and helped me think through ways to keep the team dynamics healthy by keeping a{' '}
                                <Emp>constant stream of communication</Emp> about problems faced by my teammates and&nbsp;
                                <Emp>handling moments of friction as calmly as possible</Emp>.{' '}
                            </li>
                        </ol>
                    </SectionDescription>
                </Section>
                <ProjectFooter />
            </ProjectInfoContainer>
            <Footer />
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
    ${Section} {
        &.wireframes {
            ${SectionDescription} {
                display: grid;
                grid-gap: 24px;
                grid-template-columns: repeat(5, 1fr);
            }
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
            &.process_mobile {
                img {
                    width: 100%;
                    margin: 0px auto;
                }
            }
            &.personas {
                display: flex;
                flex-direction: column;
                ${SectionDescription} {
                    margin-bottom: 16px;
                }
                img {
                    height: 400px;
                    align-self: center;
                }
            }
        }
    }
`;

export default Farm2U;
