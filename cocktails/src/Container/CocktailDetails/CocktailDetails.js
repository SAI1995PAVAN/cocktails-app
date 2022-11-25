import React, { useState, useEffect,useCallback } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CocktailDetails.css";
import Loading from "../../Pages/Loading/Loading";


const CocktailDetails = () => {
  const { productId } = useParams();
  const [singleCocktailData, setSingleCocktailData] = useState({});
  const [singleCocktailLoading, setSingleCocktailLoading] = useState(true);
  

  const fetchingCocktailDetails = useCallback(async () => {
    setSingleCocktailLoading(true)
    try {
      let response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${productId}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      if (response.status === 200) {
        
        setSingleCocktailLoading(false);
        setSingleCocktailData(response.data.drinks[0]);
      } else {
        setSingleCocktailLoading(false)
      }
     
    } catch (error) {
      console.log(error.response);
    }
  },[productId])

  useEffect(() => {
    if (productId) {
      fetchingCocktailDetails();
    }
  }, [productId,fetchingCocktailDetails]);



  return (
    singleCocktailLoading?<Loading />:
    <section className="selected-cocktail-details-component">
    
    <Link to="/" className="back-home">
      Back home
    </Link>
      
    <h1>{singleCocktailData.strDrink}</h1>
    <div className="selected-cocktail-details-container">
      <div className="selected-cocktail-image">
            <img src={singleCocktailData.strDrinkThumb} alt={singleCocktailData.strDrink} />
      </div>
      <div className="selected-cocktail">
        <p className="selected-cocktail-detail">
          <span className="highlight-property">Name:</span>{" "}
          {singleCocktailData.strDrink}
        </p>
        <p className="selected-cocktail-detail">
          <span className="highlight-property">Category:</span>{" "}
          {singleCocktailData.strCategory}
        </p>
        <p className="selected-cocktail-detail">
          <span className="highlight-property">Info:</span>{" "}
          {singleCocktailData.strAlcoholic}
        </p>
        <p className="selected-cocktail-detail">
          <span className="highlight-property">Glass:</span>{" "}
          {singleCocktailData.strGlass}
        </p>
        <p className="selected-cocktail-detail">
          <span className="highlight-property">Instructions:</span>{" "}
          {singleCocktailData.strInstructions}
        </p>
        <p className="selected-cocktail-detail">
          <span className="highlight-property">Ingredients:</span>
          {
            (singleCocktailData.strIngredient1 ? singleCocktailData.strIngredient1 : null,
              singleCocktailData.strIngredient2 ? singleCocktailData.strIngredient2 : null,
              singleCocktailData.strIngredient3 ? singleCocktailData.strIngredient3 : null,
              singleCocktailData.strIngredient4 ? singleCocktailData.strIngredient4 : null)
          }
        </p>
      </div>
        </div>
        
  </section>
);
  };

export default CocktailDetails;
