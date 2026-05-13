import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AI Fashion Generator</title>

        <meta
          name="description"
          content="AI Fashion & Outfit Generator platform to create celebrity outfit styles instantly."
        />

        <meta
          name="keywords"
          content="AI Fashion Generator, Celebrity Outfit Generator, AI Outfit Creator, Fashion AI"
        />

        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="AI Fashion Generator" />

        <meta
          property="og:description"
          content="Generate celebrity fashion and outfit styles using AI."
        />

        <meta
          property="og:url"
          content="https://project-one-live.vercel.app/"
        />

        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Component {...pageProps} />
    </>
  );
    }
