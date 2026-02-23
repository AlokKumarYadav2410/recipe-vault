import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRecipes } from "../context/RecipeContext";
import ScrollReveal from "../components/ScrollReveal";

const RecipeDetails = () => {
    const { id } = useParams();
    const { data } = useRecipes();
    const navigate = useNavigate();

    const recipe = data.find((r) => r.id === id);

    if (!recipe) {
        return (
            <div className="text-center py-20 text-gray-400">
                <h2 className="text-2xl">Recipe not found 😢</h2>
                <button
                    className="mt-4 px-6 py-2 bg-green-500 rounded-lg hover:bg-green-400 transition"
                    onClick={() => navigate("/recipes")}
                >
                    Go Back
                </button>
            </div>
        );
    }

    const ingredients = recipe.ingredients.split(",").map((i) => i.trim());
    const instructions = recipe.instructions.split(",").map((i) => i.trim());

    return (
        <div className=" mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl overflow-hidden mt-10">

            {/* Recipe Image */}
            <div className="h-64 sm:h-96 overflow-hidden">
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-8 space-y-6">
                <ScrollReveal delay={200}>
                    <h1 className="text-4xl font-bold text-green-400">{recipe.title}</h1>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                    <div className="flex flex-wrap gap-4 items-center">
                        <span className="text-sm bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                            {recipe.category}
                        </span>
                        <span className="text-sm text-gray-400">By: {recipe.chef}</span>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Description</h2>
                        <p className="text-gray-300">{recipe.description}</p>
                    </div>
                </ScrollReveal>
                <ScrollReveal delay={400}>
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                            {ingredients.map((ing, idx) => (
                                <li key={idx}>{ing}</li>
                            ))}
                        </ul>
                    </div>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
                        <ol className="list-decimal list-inside text-gray-300 space-y-1">
                            {instructions.map((step, idx) => (
                                <li key={idx}>{step}</li>
                            ))}
                        </ol>
                    </div>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                    <div className="flex justify-end">
                        <button
                            onClick={() => navigate("/recipes")}
                            className="px-6 py-2 bg-green-500 rounded-lg cursor-pointer active:scale-95 hover:bg-green-400 transition"
                        >
                            Back to Recipes
                        </button>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
};

export default RecipeDetails;