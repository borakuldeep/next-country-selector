import Head from "next/head";

import Store from "../store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Store>
      <Head>
        <meta property="og:title" content="Country Finder" key="title" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </Store>
  );
}

export default MyApp;
