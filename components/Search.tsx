import { useState, useContext, FormEvent } from "react";
import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

import { StoreContext } from "../store";
import countryList from "../data/countries";
import styles from "../styles/Search.module.css";

const getSearchUrl = (country) =>
  `https://restcountries.eu/rest/v2/name/${country}?fields=name;population;latlng`;

const Search = () => {
  const [country, setCountry] = useState("");
  const [_, dispatch] = useContext(StoreContext);

  const fetchData = async (
    e: FormEvent = null,
    countrySelected: string = ""
  ) => {
    e && e.preventDefault();

    const seacrhCountry = countrySelected || country;
    countrySelected !== "" && setCountry(countrySelected);

    if (seacrhCountry) {
      const URL = getSearchUrl(seacrhCountry);
      try {
        const response = await fetch(URL);

        const countryData = await response.json();

        if (countryData.status === 404) {
          dispatch({
            type: "SET_ERROR",
            payload: {
              searchItems: [],
              searchDetails: [],
              error: "Country not found. Please try again.",
            },
          });
        }
        // check for valid results
        else if (Array.isArray(countryData)) {
          const payload = {
            searchItems: countryData?.map((c) => c.name) || [],
            searchDetails: countryData,
            error: "",
          };

          dispatch({ type: "SET_SEARCH_ITEMS", payload });
        }
      } catch (err) {
        dispatch({
          type: "SET_ERROR",
          payload: {
            searchItems: [],
            searchDetails: [],
            error: "Oops Something went wrong!!",
          },
        });
      }
    } else {
      dispatch({
        type: "SET_SEARCH_ITEMS",
        payload: { searchItems: [], searchDetails: [], error: "" },
      });
    }
  };

  return (
    <form className={`${styles.searchform}`} onSubmit={(e) => fetchData(e)}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={countryList.map((option) => option.name)}
        style={{ width: 300 }}
        onChange={(e, val) => fetchData(null, val)}
        renderInput={(params) => (
          <TextField
            {...params}
            className={styles.searchinput}
            label="search a country..."
            onChange={(e) => setCountry(e.target.value)}
          />
        )}
      />
      <div className={styles.buttoncontainer}>
        <Button
          variant={country ? "contained" : null}
          color={country ? "primary" : "inherit"}
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
        </Button>
      </div>
    </form>
  );
};

export default Search;
