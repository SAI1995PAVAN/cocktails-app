import React, { useState, useEffect,useCallback} from "react";
import Searchbar from "../Searchbar/Searchbar";
import "./MainApp.css";
import axios from "axios";
import CocktailsList from "../CocktailsList/CocktailsList";
import Loading from "../../Pages/Loading/Loading";
import Error from "../../Pages/Error/Error";

let URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const MainApp = React.memo(() => {
  const [input, setInput] = useState("");
  const [cocktailsData, setCocktailsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  

const handleInput = (e) => {
    setInput(e.target.value);
  };

 const cocktailsFetch = async (input) => {
    let response = await axios.get(`${URL}${input}`);
    if (response.status===200) {
   
      setLoading(false);
      setError(false);
      response.data.drinks ? setCocktailsData(response.data.drinks) : setCocktailsData([]);
      
    } else {
      setLoading(false);
      setError(false);
      
    }
  };

  const errorFetch = () => {
   setLoading(false);
    setError(true);
  };

  const displayCocktailsData =useCallback(() => {
    setLoading(true);
    setError(false);
    if (input) {
     try {
        cocktailsFetch(input);
      } catch (error) {
        errorFetch(error);
      }
    } else {
      try {
        cocktailsFetch("a");
      } catch (error) {
        console.log(error.response)
        errorFetch(error);
      }
    }
    
  }, [input])
  
  

  useEffect(() => {
    displayCocktailsData();
  
  }, [input,displayCocktailsData]);

  return (
    <section className="main-app">
      <Searchbar input={input} handleInput={handleInput} />
      {loading ?
        <Loading /> : error ?
          <Error /> : <CocktailsList cocktailsData={cocktailsData} />}
      
    </section>
  );
});

export default MainApp;
