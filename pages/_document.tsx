import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document<{ styleTags: Node }> {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage((App) => (props: JSX.IntrinsicAttributes) => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }

    render() {
        return (
            <Html prefix={`og: http://ogp.me/ns#`}>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;1,200;1,300;1,400&display=swap" rel="stylesheet"></link>
                    <link rel="manifest" href="/manifest.json" />
                    <meta property="og:title" content="Nahush Farkande" />
                    <meta name="image" property="og:image" content="/website_thumbnail.png" />
                    <meta name="author" content="Example Author" />
                    <meta property="og:description" content="Example Description" />
                    <meta property="og:url" content="https://example.com" />
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
