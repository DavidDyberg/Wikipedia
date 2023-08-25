import React, { useState } from "react";
import "../searchbar/index.css";
import searchIcon from '../../images/searchIcon.svg'
import Select from "../select";
import { languages } from "../../languages";

const SearchBar = ({ language, setLanguage }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const url =
    "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=";

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const val = e.target.elements.search.value;

    if (!val) {
      setError("Please enter a valid search term");
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${url}${val}`);
      const data = await response.json();
      const searchResults = data.query.search;

      if (searchResults.length < 1) {
        setError("No matching results. Please try again");
        setResults([]);
      } else {
        setResults(searchResults);
      }
    } catch (error) {
      setError("There was an error...");
      setResults([]);
    }

    setLoading(false);
  };

  return (
    <div className="box">
      <form className="form" onSubmit={handleFormSubmit}>
        <input type="text" className="form-input" name="search"/>
        <div className="buttons-container">
          <Select item={languages} language={language} setLanguage={setLanguage} />
          <button type="submit" className="submit-btn">
            <img src={searchIcon} alt="searchIcon" className="search-icon" height={50} width={50}/>
          </button>
        </div>
      </form>

      {loading && <div className="loading"></div>}

      {error && <div className="error">{error}</div>}

      {results.length > 0 && (
        <div className="results">
          {results.map((item) => (
            <a
              key={item.pageid}
              href={`http://en.wikipedia.org/?curid=${item.pageid}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>{item.title}</h4>
              <p dangerouslySetInnerHTML={{ __html: item.snippet }} />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
export default SearchBar;