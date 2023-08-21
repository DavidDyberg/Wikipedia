import React from "react";
import "../searchbar/index.css";

const SearchBar = () => {


  return (
    <div className="cont">
      <form className="form">
        <input type="text" className="form-input" name="search" />

      </form>
    </div>
  );
};

export default SearchBar;