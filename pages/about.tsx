import styled from 'styled-components';
import { BackButton, Emp, Name, Navigation } from '../components/reusableComponents';

const AboutPage = () => {
    return (
        <Container>
            <div className="about__left">
                <Navigation />
                <div className="about__info">
                    <p>Hello, my name is </p>
                    <Name>Nahush Farkande</Name>
                    <p className="about__description">
                        I am an aspiring <Emp>UI/UX/Product designer</Emp> pursuing my Masters in Human Computer Interaction at
                        Indiana University. I worked as front end engineer for 6 years before switching to design as my
                        primary field. In my free time I like to sing, sketch and accumulate dad jokes. Most recently I
                        managed to bag the <Emp>Best Overall Product</Emp> Prize at the <Emp>AT&T 5G Sports Hackathon</Emp> and the 2nd place
                        at a Design Sprint Competition which took place at my University
                    </p>

                    <BackButton href="/" />
                </div>
            </div>
            <div className="about__right">
                <img src="/self.jpg" />
            </div>
        </Container>
    );
};

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    overflow: hidden;
    align-items: center;
    max-width: 1024px;
    margin: 0 auto;
    padding-top: 4vh;
    .about__left {
        display: flex;
        padding: 24px;
        flex-direction: column;
        justify-content: space-between;
        p {
            font-size: 16px;
            line-height: 1.5;
        }
        .about__info {
            bottom: 24px;
            .about__description {
            }
        }
        ${Name} {
            font-size: 104px;
        }
    }
    .about__right {
        min-height: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            max-height: 61vh;
        }
    }
`;

export default AboutPage;
