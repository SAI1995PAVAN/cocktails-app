import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import CocktailDetails from "./Container/CocktailDetails/CocktailDetails";
import About from "./Components/About/About";
import MainApp from "./Container/MainApp/MainApp";
import InvalidPage from "./Pages/InvalidPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="about" element={<About />} />
        <Route path="cocktail/:productId" element={<CocktailDetails />} />
        <Route path="*" element={ <InvalidPage />}/>
      </Routes>
    </div>
  );
}

export default App;
