import '../styles/globals.css';
import { AppProps } from 'next/app';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faBehance, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, fas, faPlay, faPause, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styled, { createGlobalStyle } from 'styled-components';
import { Fragment } from 'react';
import { AnimationLayout } from '../components/AnimationLayout';
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab, fas, faBehance, faInstagram, faLinkedinIn, faChevronRight, faPlay, faPause, faEnvelope);

const GlobalStyle = createGlobalStyle`
    html {
        color: #4a4a4a;
        font-family: 'Poppins';
    }
    body {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        font-size: 24px;
        font-weight: 300;
        color: #616060;
    }
    h1 {
        letter-spacing: -4px;
        font-size: 88px;
        margin: 0px;
    }
    h3 {
        letter-spacing: -1px;
        font-size: 40px;
    }
    h1, h3{
        color: #1b1425;
        font-weight: 600;
        margin: 0px;
    }
    #__next {
        width: 100%;
        flex: 1;
        display: flex;
        flex-direction: column
        main {
            flex: 1;
            display: flex;
            flex-direction: column;
            width: 100%;
        }
        .layout-animation-container {
            width:100%;
        }
    }
`;

const AnimatedCursor = dynamic(() => import('../components/AnimatedCursor'), {
    ssr: false
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Fragment>
            <GlobalStyle />
            <AnimatedCursor />
            <AnimationLayout>
                <Component {...pageProps} />
            </AnimationLayout>
            <MailIcon
                data-cursor-text="Contact"
                data-cursor-size="80"
                data-gradient-start="#4a4a4a"
                data-gradient-end="#4a4a4a"
                href="mailto: nahush.farkande@gmail.com"
            >
                <FontAwesomeIcon icon="envelope" />
            </MailIcon>
        </Fragment>
    );
}

const MailIcon = styled.a`
    position: fixed;
    bottom: 32px;
    right: 32px;
    height: 80px;
    width: 80px;
    border: 1px solid #4a4a4a;
    border-radius: 100px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: none;
`;

export default MyApp;
