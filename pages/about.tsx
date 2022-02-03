import styled from 'styled-components';
import { Navigation } from '../components/reusableComponents';

const AboutPage = () => {
    return (
        <Container>
            <div className="about__left">
                <Navigation />
                <div className="about__info">
                    <p>Hello, my name is </p>
                    <h1>Nahush Farkande</h1>
                    <p className="about__description">
                        I am an aspiring UI/UX/Product designer pursuing my Masters in Human Computer Interaction at
                        Indiana University. I worked as front end engineer for 6 years before switching to design as my
                        primary field. In my free time I like to sing, sketch and accumulate dad jokes. Most recently I
                        managed to bag the Best Overall Product Prize at the AT&T 5G Sports Hackathon and the 2nd place
                        at a Design Sprint Competition held by my University
                    </p>
                </div>
            </div>
            <div className="about__right">
                <img src="/self.jpg" />{' '}
            </div>
        </Container>
    );
};

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    .about__left {
        display: flex;
        padding: 24px;
        justify-content: flex-start;
        p {
            font-size: 16px;
            line-height: 1.5;
        }
        .about__info {
            position: absolute;
            bottom: 24px;
            width: 70vw;
            .about__description {
                background: rgba(255, 255, 255, 0.8);
            }
        }
    }
    .about__right {
        img {
            max-width: 50vw;
        }
    }
`;

export default AboutPage;
