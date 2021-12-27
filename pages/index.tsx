import { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
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
            <div className="title">UI/UX Designer</div>
        </Container>
    );
};

const SocialLink = ({ href, iconName }: { href: string, iconName: IconName }) => {
    return (
        <a href={href} target="_blank" >
            <FontAwesomeIcon icon={['fab', iconName]} />
        </a>
    );
};

const Container = styled.div`
    .social-media-icons {
        display: flex;
        align-items: center;
        gap: 12px;
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
    }
`;

export default Home;
