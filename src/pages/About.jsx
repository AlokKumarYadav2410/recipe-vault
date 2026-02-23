import React from "react";
import ScrollReveal from "../components/ScrollReveal";

const About = () => {
  return (
    <ScrollReveal>
      <div className="max-w-4xl mx-auto px-6 space-y-16">

      {/* Hero Section */}
      <div className="text-center space-y-6 animate-fadeUp">
        <h1 className="text-5xl font-bold bg-linear-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
          About RecipeVault
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          RecipeVault is a modern, interactive platform designed to help cooking enthusiasts create, manage, and explore recipes. Built with React, Tailwind CSS, and Context API, it demonstrates clean architecture, responsive design, and dynamic user experiences.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        <ScrollReveal delay={100}>
          <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-transform duration-500 animate-fadeUp delay-100">
          <h2 className="text-2xl font-semibold text-green-400 mb-2">Create Recipes</h2>
          <p className="text-gray-300">
            Easily add your favorite recipes with title, ingredients, instructions, and images. Your recipes are stored and editable anytime.
          </p>
        </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
             <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-transform duration-500 animate-fadeUp delay-200">
          <h2 className="text-2xl font-semibold text-green-400 mb-2">Organize & Edit</h2>
          <p className="text-gray-300">
            Update, delete, and categorize your recipes seamlessly. Context API ensures smooth state management across the app.
          </p>
        </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-transform duration-500 animate-fadeUp delay-300">
          <h2 className="text-2xl font-semibold text-green-400 mb-2">Explore Recipes</h2>
          <p className="text-gray-300">
            Browse all recipes in a clean, interactive layout. Hover over recipe cards to see animations and click to view full details.
          </p>
        </div>
        </ScrollReveal>
      </div>

      {/* Footer CTA */}
      <div className="text-center animate-fadeUp delay-400">
        <p className="text-gray-300 text-lg">
          RecipeVault is your modern kitchen companion. Start creating and exploring today!
        </p>
      </div>
    </div>
    </ScrollReveal>
  );
};

export default About;