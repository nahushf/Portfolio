import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faBehance, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { createGlobalStyle } from 'styled-components';
import { Fragment } from 'react';
import { AnimationLayout } from '../components/AnimationLayout';

library.add(fab, fas, faBehance, faInstagram, faLinkedinIn);

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
    }
    h1 {
        font-size: 88px;
        font-weight: bold;
        letter-spacing: -4px;
        font-weight: 600;
        margin: 0px;
    }
    #__next {
        padding: 24px;
        flex: 1;
        display: flex;
        flex-direction: column
        main {
            flex: 1;
            display: flex;
            flex-direction: column
        }
    }
`;

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Fragment>
            <GlobalStyle />
            <AnimationLayout>
                <Component {...pageProps} />
            </AnimationLayout>
        </Fragment>
    );
}

export default MyApp;
