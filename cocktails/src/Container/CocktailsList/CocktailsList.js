import React from "react";
import Cocktail from "../Cocktail/Cocktail";
import "./CocktailsList.css";
import NoCocktailsFound from "../../Pages/NoCocktailsFound/NoCocktailsFound";


const CocktailsList = (props) => {
  const { cocktailsData } = props;
  return (
    <section className="cocktailslist-component">
      {cocktailsData.length > 0 ?
        <div className="cocktails-container">
          {cocktailsData.map((cocktail) => {
            const { idDrink, strDrink, strGlass, strAlcoholic, strDrinkThumb } =
              cocktail;
            return (
              <Cocktail
                key={idDrink}
                id={idDrink}
                name={strDrink}
                category={strGlass}
                nature={strAlcoholic}
                image={strDrinkThumb}
              />
            );
          })
          }
      
        </div> : <NoCocktailsFound />}
    </section>
  );
};

export default CocktailsList;
