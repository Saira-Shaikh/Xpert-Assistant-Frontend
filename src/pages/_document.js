import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Your site description" />
          <title>Xpert Assistant</title>
          <link
            rel="icon"
            type="image/png"
            sizes="120x120"
            href="/Subtract.png"
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

export default MyDocument;
