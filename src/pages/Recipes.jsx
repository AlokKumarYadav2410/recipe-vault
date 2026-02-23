import React from "react";
import { useRecipes } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";
import ScrollReveal from "../components/ScrollReveal";

const Recipes = () => {
  const { data } = useRecipes();

  if (data.length === 0) {
    return (
      <div className="text-center py-20 text-gray-400">
        <h2 className="text-2xl">No recipes yet 👨‍🍳</h2>
        <p className="mt-2">Start by creating your first recipe!</p>
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