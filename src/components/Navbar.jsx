import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-6 py-4 shadow-lg">
      
      <h1 className="text-2xl font-semibold tracking-wide text-green-400">
        RecipeVault
      </h1>

      <div className="flex gap-6 text-sm font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-green-400 border-b-2 border-green-400 pb-1"
              : "hover:text-green-400 transition-all duration-300"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/recipes"
          className={({ isActive }) =>
            isActive
              ? "text-green-400 border-b-2 border-green-400 pb-1"
              : "hover:text-green-400 transition-all duration-300"
          }
        >
          Recipes
        </NavLink>

        <NavLink
          to="/create-recipe"
          className={({ isActive }) =>
            isActive
              ? "text-green-400 border-b-2 border-green-400 pb-1"
              : "hover:text-green-400 transition-all duration-300"
          }
        >
          Create
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-green-400 border-b-2 border-green-400 pb-1"
              : "hover:text-green-400 transition-all duration-300"
          }
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;