import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";

export const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    const baseURL = process.env.REACT_APP_BASE_URL;

    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `${baseURL}recipes/savedRecipes/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSavedRecipes();
  }, []);
  return (
    <div>
      <h1>Saved Recipes for Daily Meal Plan</h1>
      <ul>
        {savedRecipes.map((recipe) => (
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
            </div>
            <img src={recipe.imageUrl} alt={recipe.name} />
            <h5>
              Cooking Time:&nbsp;
              {recipe.cookingTime} minutes
            </h5>
            <h4>COOKING INSTRUCTIONS</h4>
            <span
              dangerouslySetInnerHTML={{ __html: recipe.instructions }}
            ></span>
            <h4>INGREDIENTS</h4>
            <span
              dangerouslySetInnerHTML={{ __html: recipe.ingredients }}
            ></span>
          </li>
        ))}
      </ul>
    </div>
  );
};
