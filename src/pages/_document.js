import Document, { Html, Head, Main, NextScript } from 'next/document';

class LAVLIDocument extends Document {
  render() {
    return (
      <Html lang="de">
        <Head>
          <link
            rel="preload"
            href="/fonts/c8ca8f1e-b34a-4dd0-9e89-f9cf135f425c.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/e033ae2c-04d6-4ad3-9533-1ba65ec45c43.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/faaba122-0508-40a3-acfb-f74709081e74.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/070ec778-3332-4191-9fd8-8fdd2ca1b2b3.woff"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default LAVLIDocument;
