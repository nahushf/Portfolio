import '../styles/globals.css';
import { AppProps } from 'next/app';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faBehance, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, fas } from '@fortawesome/free-solid-svg-icons';
import { createGlobalStyle } from 'styled-components';
import { Fragment } from 'react';
import { AnimationLayout } from '../components/AnimationLayout';
import dynamic from 'next/dynamic';

library.add(fab, fas, faBehance, faInstagram, faLinkedinIn, faChevronRight);

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
        font-weight: 200;
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
        </Fragment>
    );
}

export default MyApp;
