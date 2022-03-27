import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faBehance, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faEnvelope, faPause, faPlay, fas } from '@fortawesome/free-solid-svg-icons';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Script from 'next/script';
import { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { AnimationLayout } from '../components/AnimationLayout';
import { EmailIcon } from '../components/InstaIcon';
import { black, maxDevice, minDevice, textColor } from '../constants/styles';
import '../styles/globals.css';

library.add(fab, fas, faBehance, faInstagram, faLinkedinIn, faChevronRight, faPlay, faPause, faEnvelope);

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'ClashDisplay';
        src: url('/fonts/ClashDisplay-SemiBold.otf');
        font-weight: 600;
    }
    @font-face {
        font-family: 'ClashDisplay';
        src: url('/fonts/ClashDisplay-Medium.otf');
        font-weight: 500;
    }   
    html, body {
        color: ${textColor};
        font-family: 'Poppins' !important;
        background: ${black};
    }
    body {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        font-size: 24px;
        font-weight: 300;
    }
    h1 {
        font-size: 88px;
        margin: 0px;
        font-family: 'ClashDisplay';
        font-weight: 500;
        line-height: 88px;
    }
    h1, h2, h3, h4 {
        color: #fafafa;
    }
    h3 {
        letter-spacing: -1px;
        font-size: 40px;

    }
    h1, h3{
        color: #fafafa;
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
    ${minDevice.tablet} {
        * {
// cursor: none !important
        }
    }
    ${maxDevice.tablet} {
        h1 {
            font-size: 48px;
            line-height: 48px;
            letter-spacing: -2px;
        }
    }
    .mobile-only {
        ${minDevice.mobile} {
            display: none !important;
        }
    }
    .tablet-only {
        ${minDevice.tablet} {
            display: none;
        }
        ${maxDevice.mobile} {
            display: none;
        }
    }
    .desktop-only {
        ${maxDevice.tablet} {
            display: none;
        }
    }
    .till-desktop {
        ${maxDevice.desktop} {
            display: none;
        }
    }
    .till-tablet {
        ${minDevice.tablet} {
            display: none;
        }
    }
    .not-tablet {
        ${maxDevice.tablet} {
            display: none !important;
        }
        ${maxDevice.mobile} {
            display: block !important;                
        }
    }
    .not-mobile {
        ${maxDevice.mobile} {
            display: none !important;
        }
    }
    .not-desktop {
        ${minDevice.tablet} {
            display: none !important;
        }
    }
    .before-desktop-only {
        ${minDevice.desktop} {
            display: none !important;
        }
    }
    .after-desktop-only {
        ${maxDevice.desktop} {
            display: none !important;
        }
    }
`;

const AnimatedCursor = dynamic(() => import('../components/AnimatedCursor'), {
    ssr: false
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Fragment>
            <Head>
                <title>Nahush Farkande</title>
            </Head>
            <Script
                id="clarity-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "apgj3t3slt")
      `
                }}
            />
            <GlobalStyle />
            <AnimatedCursor />
            <Component {...pageProps} />
            <MailIcon
                data-cursor-text="Contact"
                data-cursor-size="80"
                data-gradient-start="#4a4a4a"
                data-gradient-end="#4a4a4a"
                href="mailto: nahush.farkande@gmail.com"
            >
                <EmailIcon />
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
    border-radius: 100px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(24px);
    background: rgb(41, 29, 55, 0.5);
    ${maxDevice.tablet} {
        bottom: 16px;
        right: 16px;
    }
`;

export default MyApp;
