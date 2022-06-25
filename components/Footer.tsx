import styled from 'styled-components';
import { BehanceIcon, EmailIcon, InstaIcon, LinkedInIcon } from './InstaIcon';
import { HomePageSection } from './reusableComponents';

export const FooterBottom = () => {
    return (
        <FooterBottomContainer className="footer__bottom">
            <div className="social">
                <a href="https://www.behance.net/nahushFarkande">
                    <BehanceIcon />
                </a>
                <a href="https://www.instagram.com/nahushfarkande">
                    <InstaIcon />
                </a>
                <a href="https://www.linkedin.com/in/nahushfarkande/">
                    <LinkedInIcon />
                </a>
                <a href="mailto: nahush.farkande@gmail.com">
                    <EmailIcon />
                </a>
            </div>
            <div className="courtesy">©2022 Nahush Farkande. Hand Coded with ❤️ &nbsp;and 🍺</div>
        </FooterBottomContainer>
    );
};

export const Footer = ({ css = '' }) => {
    return (
        <Container className="footer" data-scroll-section>
            <div className="greet">
                <strong>Hello again!!</strong> {` Thanks for visiting my portfolio. Let's connect! `}
            </div>
            <FooterBottom />
        </Container>
    );
};

const FooterBottomContainer = styled.div`
    margin-top: 16px;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    .courtesy {
        color: #7e7787;
        text-align: center;
    }
    .social {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 40px;
    }
`;

const Container = styled(HomePageSection)`
    width: 100vw;
    color: #fff;
    background: #291d37;
    margin-top: 56px;
    padding: 24px;
    z-index: 99;
    width: 100%;
    min-width: 0;
    .greet {
        font-size: 16px;
        color: #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 56px;
        strong {
            font-size: 24px;
            color: white;
        }
    }
`;
