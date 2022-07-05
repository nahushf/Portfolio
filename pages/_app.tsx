import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faBehance, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faEnvelope, faPause, faPlay, fas } from '@fortawesome/free-solid-svg-icons';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { Fragment, useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import styled, { createGlobalStyle, DefaultTheme, ThemeProvider } from 'styled-components';
import { EmailIcon } from '../components/InstaIcon';
import { black, darkBackground, maxDevice, minDevice, red, textColor } from '../constants/styles';
import '../styles/globals.css';

library.add(fab, fas, faBehance, faInstagram, faLinkedinIn, faChevronRight, faPlay, faPause, faEnvelope);

const GlobalStyle = createGlobalStyle<any>`
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
        color: ${(props) => props.theme.paragraph};
        font-family: 'Poppins' !important;
        background: ${(props) => props.theme.background};
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
        font-size: 93px;
        margin: 0px;
        font-weight: 500;
        color: ${(props) => props.theme.empText};
        line-height: 1;
            letter-spacing: -3px;
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

    ul {
        li {
            list-style-type: circle;
        }
    }

    ${maxDevice.mobile} {
        body {
            font-size: 14px;
            h1 {
                font-size: 32px;
            }
        }
    }
`;

const AnimatedCursor = dynamic(() => import('../components/AnimatedCursor'), {
    ssr: false
});

const appTheme_DEP: DefaultTheme = {
    background: black,
    headline: '#fffffe',
    paragraph: textColor,
    button: red,
    buttonText: black,
    primary: red,
    empText: '#fafafa',
    cardBackground: darkBackground,
    cardRadius: '16px',
    caseStudyColor: '#fafafa',
    bodyFontSize: '20px',
    mobileBodyFontSize: '16px',
    mobileH1FontSize: '32px',
    mobileH2FontSize: '24px',
    darkBackground: '#11071e'
};

const appTheme = {
    background: '#0f0e17',
    headline: '#fffffe',
    paragraph: '#a7a9be',
    button: '#ff8906',
    buttonText: '#fffffe',
    empText: '#fffffe',
    stroke: '#000',
    primary: '#ff8906',
    secondary: '#f25f4c',
    tertiary: '#e53170'
};

function MyApp({ Component, pageProps }: AppProps) {
    const containerRef = useRef(null);
    const { asPath } = useRouter();
    return (
        <Fragment>
            <LocomotiveScrollProvider
                options={{ smooth: true }}
                watch={[]}
                location={asPath}
                onLocationChange={(scroll: any) => scroll.scrollTo(0, { duration: 0, disableLerp: true })}
                containerRef={containerRef}
            >
                <ThemeProvider theme={appTheme_DEP}>
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
                    <div data-scroll-container ref={containerRef} style={{ width: '100%' }}>
                        {/* <div data-scroll-container id="test"> */}
                        {/* <h1 data-scroll-target="#test">abcccc</h1> */}
                        {/* <div className="section" data-scroll-section> */}
                        {/* <div> */}
                        {/* <h1 data-scroll>Hey</h1> */}
                        {/* <p */}
                        {/* data-scroll */}
                        {/* data-scroll-direction="horizontal" */}
                        {/* data-scroll-speed="5" */}
                        {/* style={{ marginLeft: '20vw' }} */}
                        {/* > */}
                        {/* 👋 */}
                        {/* </p> */}
                        {/* </div> */}
                        {/* </div> */}
                        {/* <div className="section" data-scroll-section> */}
                        {/* <div> */}
                        {/* <h2 data-scroll data-scroll-speed="1"> */}
                        {/* Looks like rain */}
                        {/* </h2> */}
                        {/* <p data-scroll data-scroll-speed="4"> */}
                        {/* 🌧 */}
                        {/* </p> */}
                        {/* </div> */}
                        {/* </div> */}
                        {/* <div className="section" data-scroll-section> */}
                        {/* <div> */}
                        {/* <h2 data-scroll data-scroll-speed="1"> */}
                        {/* Have an apple */}
                        {/* </h2> */}
                        {/* <p data-scroll data-scroll-direction="horizontal" data-scroll-speed="-6"> */}
                        {/* 🍎 */}
                        {/* </p> */}
                        {/* </div> */}
                        {/* </div> */}
                        {/* </div> */}
                        <Component {...pageProps} />
                    </div>
                    <MailIcon
                        data-cursor-text="Contact"
                        data-cursor-size="80"
                        data-gradient-start="#4a4a4a"
                        data-gradient-end="#4a4a4a"
                        href="mailto: nahush.farkande@gmail.com"
                    >
                        <EmailIcon />
                    </MailIcon>
                </ThemeProvider>
            </LocomotiveScrollProvider>
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
    ${maxDevice.mobile} {
        height: 56px;
        width: 56px;
    }
`;

export default MyApp;
