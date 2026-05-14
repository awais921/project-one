import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          AI Fashion Generator | Celebrity Outfit & AI Style Creator
        </title>

        <meta
          name="description"
          content="Create viral celebrity outfits, luxury fashion looks, influencer aesthetics, and premium AI-generated outfit transformations instantly with our AI Fashion Generator."
        />

        <meta
          name="keywords"
          content="AI Fashion Generator, AI Outfit Generator, Celebrity Outfit Generator, AI Style Creator, Fashion AI, AI Clothing Generator, Luxury Fashion AI, Viral Outfit Generator"
        />

        <meta name="robots" content="index, follow" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <meta
          property="og:title"
          content="AI Fashion Generator | Celebrity Outfit Creator"
        />

        <meta
          property="og:description"
          content="Generate realistic celebrity outfits, luxury fashion styles, and viral AI fashion transformations instantly."
        />

        <meta
          property="og:url"
          content="https://project-one-live.vercel.app/"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:site_name"
          content="AI Fashion Generator"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="AI Fashion Generator"
        />

        <meta
          name="twitter:description"
          content="Create celebrity outfit styles and AI fashion transformations instantly."
        />

        <link
          rel="canonical"
          href="https://project-one-live.vercel.app/"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
            }
