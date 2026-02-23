import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-semibold text-white group-hover:text-green-400 transition">
          {recipe.title}
        </h2>

        <p className="text-xs text-gray-300">By: {recipe.chef}</p>

        <p className="text-sm text-gray-400 line-clamp-1">
          {recipe.description}
        </p>

        <div className="flex justify-between items-center pt-2">
          <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
            {recipe.category}
          </span>

          <Link
            to={`/recipes/details/${recipe.id}`}
            className="text-sm text-green-400 hover:underline"
          >
            View →
          </Link>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-linear-to-r from-green-500/10 to-emerald-500/10"></div>
    </div>
  );
};

export default RecipeCard;