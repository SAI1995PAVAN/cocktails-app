import React from "react";
import "./Searchbar.css";

const Searchbar = (props) => {
  const { input, handleInput } = props
  
  return (
    <section className="search-component">
      <form className="search-form">
        <label htmlFor="cocktail-name">Search Your Favorite Cocktail</label>
        <input type="text" id="cocktail-name" value={input} onChange={ handleInput}/>
      </form>
    </section>
  );
};

export default Searchbar;
