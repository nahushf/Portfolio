import { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { ButtonWinona } from './ButtonWinona';

const SocialLink = ({ href, iconName }: { href: string, iconName: IconName }) => {
    return (
        <a href={href} target="_blank" rel="noreferrer" >
            <FontAwesomeIcon icon={['fab', iconName]} />
        </a>
    );
};

export const HomeLeft = () => {
    return (
        <Container>
            <div className="social-media-icons">
                <SocialLink
                    href="https://www.behance.net/nahushFarkande?tracking_source=search_users_recommended"
                    iconName="behance"
                />
                <SocialLink href="https://www.instagram.com/nahushfarkande/" iconName="instagram" />
                <SocialLink href="https://www.linkedin.com/in/nahushfarkande/" iconName="linkedin-in" />
            </div>
            <h1 className="name">Nahush Farkande</h1>
            <div className="title">UI/UX DESIGNER</div>
            <ButtonWinona text="View Projects" />
        </Container>
    );
};

const Container = styled.div`
    .social-media-icons {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 24px;
        .svg-inline--fa {
            height: 32px;
            cursor: pointer;
            width: 32px;
            &:active {
                color: #000;
            }
        }
    }
    .name {
        font-size: 88px;
        line-height: 88px;
    }
    .title {
        font-size: 24px;
        letter-spacing: 11px;
        font-weight: 300;
    }
    .button--winona {
        margin-top: 40px;
    }
`;
