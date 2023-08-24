import React from "react";
import "../searchbar/index.css";
import searchIcon from '../../images/searchIcon.png'
import Select from "../select";
import { languages } from "../../languages";

const SearchBar = ( { language, setLanguage }) => {
  return (
    <div className="cont" >
      <form className="form">
        <input type="text" className="form-input" name="search" />
        <Select item={languages} language={language} setLanguage={setLanguage} />
        <button type="submit" className="submit-btn">
          <img src={searchIcon} alt="searchIcon" className="search-icon"/>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;