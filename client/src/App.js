/* My MERN Meal Planner App consist of the: 
   - Navigation Bar placed at the top of the web page to route to the Home, Create Recipe, 
     Saved Recipe and User Registration/Login pages
     The Saved Recipes is the Result Page
     When you click on each item of the Navigation Bar, the URL in the browser changes accordingly
*/
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";
import { AddRecipe } from "./pages/add-recipe";
import { SavedRecipes } from "./pages/saved-recipes";
import { Auth } from "./pages/auth";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/saved-recipes" element={<SavedRecipes />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
