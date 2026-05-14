import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AI Fashion Generator</title>

        <meta
          name="description"
          content="AI Fashion Generator creates celebrity-inspired outfits, viral AI fashion looks, influencer aesthetics, and premium style transformations instantly."
        />

        <meta
          name="google-site-verification"
          content="M5WmBTYNtral_t5q5XrbumUCb5lFyxy8YU18YTmC8ZU"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
            }
