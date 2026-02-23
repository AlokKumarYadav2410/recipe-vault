import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

const Home = () => {
  return (
    <div className="text-center py-20 space-y-6">
      <ScrollReveal>
        <h1 className="text-5xl font-bold bg-linear-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
          Welcome to RecipeVault
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
          Manage, create, and organize your favorite recipes in one beautiful
          place. Built with React, Context API, and Tailwind CSS, designed for
          performance and clean architecture.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={400}>
        <div className="flex justify-center gap-4 pt-6">
          <Link
            to="/create-recipe"
            className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-500 transition shadow-lg"
          >
            Create Recipe
          </Link>

          <Link
            to="/recipes"
            className="px-6 py-3 border border-green-500 rounded-lg animate-bounce hover:bg-green-500/10 transition"
          >
            View Recipes
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Home;