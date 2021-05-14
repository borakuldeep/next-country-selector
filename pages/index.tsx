import Head from "next/head";
import dynamic from "next/dynamic";

import Search from "../components/Search";
import Info from "../components/Info";
import {StoreContext} from "../store";
import { useContext } from "react";
import styles from "../styles/Home.module.css";


const MapWithNoSSR = dynamic(() => import("../components/Map"), {
  ssr: false,
});

export default function Home() {

  const [state, _] = useContext(StoreContext);

  // remove countries with empty lat lng
  const validLatLngCountries =
    (state?.searchDetails?.length &&
      state.searchDetails.filter((item) => item.latlng[0] && item.latlng[1])) ||
    [];


    // map center - first country found or london default
  const center: Array<number> = validLatLngCountries.length
    ? [validLatLngCountries[0].latlng[1], validLatLngCountries[0].latlng[0]]
    : [-0.481, 51.323];

  return (
    <div className={styles.container}>
      <Head>
        <title>Country Finder</title>
        <meta name="Country finder" content="Finds country and display their population" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <main className={styles.main}>
          <div id="map" className={styles.map}>
            <MapWithNoSSR data={validLatLngCountries} center={center}/>
          </div>
          <Search />
          <Info />
        </main>
      
    </div>
  );
}
