import { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { ButtonWinona } from './ButtonWinona';

const SocialLink = ({ href, iconName }: { href: string; iconName: IconName }) => {
    return (
        <a href={href} target="_blank" rel="noreferrer">
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
            <div className="page-header">
                <ButtonWinona text="View Projects" href="projects" />
                <div className="title">UI/UX DESIGNER</div>
                <h1 className="name">Nahush Farkande</h1>
            </div>
        </Container>
    );
};

const Container = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .social-media-icons {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
        margin-bottom: 24px;
        .svg-inline--fa {
            height: 32px;
            width: 32px;
            color: #1b1425;
            &:active {
                color: #000;
            }
        }
        a {
            cursor: none;
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
        margin-bottom: 24px;
    }
`;
