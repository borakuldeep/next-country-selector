import { useState, useContext, FormEvent } from "react";

import { StoreContext } from "../store";
import styles from "../styles/Search.module.css";

const getSearchUrl = (country) =>
  `https://restcountries.eu/rest/v2/name/${country}?fields=name;population;latlng`;

const Search = () => {
  const [country, setCountry] = useState("");
  const [_, dispatch] = useContext(StoreContext);

  const fetchData = async (e: FormEvent) => {
    e.preventDefault();
    if (country) {
      const URL = getSearchUrl(country);
      try {
        const response = await fetch(URL);
        const countryData = await response.json();

        // check for valid results
        if (Array.isArray(countryData)) {
          const payload = {
            searchItems: countryData?.map((c) => c.name) || [],
            searchDetails: countryData,
          };

          dispatch({ type: "SET_SEARCH_ITEMS", payload });
        }
      } catch (err) {
        console.error(err);
      }
    } 
    else {
      dispatch({ type: "SET_SEARCH_ITEMS", payload: { searchItems: [], searchDetails: [] } });
    }
  };

  return (
    <form className={`${styles.searchform}`} onSubmit={(evt) => fetchData(evt)}>
      <input
        className={`form-control ${styles.searchinput}`}
        type="text"
        placeholder="search country"
        onChange={(e) => setCountry(e.target.value)}
      />
      <div className={styles.buttoncontainer}>
        <button
          className={`btn btn-light ${styles.searchbutton}`}
          type="submit"
          title="search button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default Search;
