import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

function App() {
  const App_Id = "5e6cd3a8";
  const App_Key = "514dc3d935e31c77640604f63ec23ebe";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${App_Id}&app_key=${App_Key}`;
  const [counter, setCounter] = useState(0);
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  useEffect(() => {
    getRecipes();
    console.log("effect has been run");
  }, [query]);
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${App_Id}&app_key=${App_Key}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    console.log("search",search)
    setSearch("")
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={handleSearch}
        />
        <button className="search-button" type="submit">
          search{" "}
        </button>
      </form>
      <div className="recipes">
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          img={recipe.recipe.image}
          cal={recipe.recipe.calories}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
       </div>
    </div>
  );
}

export default App;
