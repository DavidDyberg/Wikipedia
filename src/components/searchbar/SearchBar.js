import React from "react";
import "../searchbar/index.css";
import searchIcon from '../../images/searchIcon.svg'

const SearchBar = () => {
  return (
    <div className="cont" >
      <form className="form">
        <input type="text" className="form-input" name="search" />
        <button type="submit" className="submit-btn">
          <img src={searchIcon} alt="searchIcon" className="search-icon" height={50} width={50}/>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;