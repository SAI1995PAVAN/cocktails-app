import React from "react";
import { Link } from "react-router-dom";
import "./Cocktail.css";

const Cocktail = (props) => {
  const { id, name, nature, category, image } = props;
  return (
    <div className="single-cocktail" key={id}>
      <div className="cocktail-image">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-content">
        <h2 className="cocktail-name">{name}</h2>
        <h3 className="cocktail-type">{category}</h3>
        <h4 className="alcoholic-ornot">{nature}</h4>
        <Link to={`/cocktail/${id}`} className='details-button'>
        Details
          </Link>
      </div>
    </div>
  );
};

export default Cocktail;
