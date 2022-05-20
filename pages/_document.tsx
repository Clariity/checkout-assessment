import Document, { Html, Head, Main, NextScript } from "next/document";

import { ThemeScript } from "../scripts/theme-script";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <ThemeScript defaultDarkTheme="dark" defaultLightTheme="light" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
