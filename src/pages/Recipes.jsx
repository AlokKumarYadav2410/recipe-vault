import React from "react";
import { useRecipes } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";
import ScrollReveal from "../components/ScrollReveal";
import { useNavigate } from "react-router-dom";

const Recipes = () => {
  const { data } = useRecipes();

  const navigate = useNavigate();

  if (data.length === 0) {
    return (
      <div className="text-center py-20 text-gray-400">
        <h2 className="text-2xl">No recipes yet 👨‍🍳</h2>
        <p className="mt-2">Start by creating your first recipe!</p>
        <button onClick={() => navigate("/create-recipe")} className="mt-4 px-4 py-2 cursor-pointer bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          Create Recipe
        </button>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
      {data.map((recipe, index) => (
          <ScrollReveal key={recipe.id} delay={index * 100}>
            <RecipeCard recipe={recipe} />
          </ScrollReveal>
      ))}
    </div>
  );
};

export default Recipes;