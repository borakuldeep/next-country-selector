import Head from "next/head";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import Store from "../store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Store>
      <Head>
        <link
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </Store>
  );
}

export default MyApp;
