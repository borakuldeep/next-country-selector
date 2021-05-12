import { useState } from "react";

import styles from "../styles/Search.module.css";

const getSearchUrl = (country) =>
  `https://restcountries.eu/rest/v2/name/${country}?fields=name;population;latlng`;

const Search = () => {
  const [country, setCountry] = useState("");

  const fetchData = (e) => {
    e.preventDefault();
    const URL = getSearchUrl(country);
    try {
      fetch(URL).then((res) => console.log("res: ", res.json())); // save results globally
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className={styles.searchform} onSubmit={fetchData}>
      <input
        className={styles.searchinput}
        type="text"
        placeholder="search country"
        onChange={(e) => setCountry(e.target.value)}
      />
      <div className={styles.separator} />
      <div>
        <button
          className={styles.searchbutton}
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
