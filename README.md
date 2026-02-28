# RecipeVault 🍲

RecipeVault is a modern React recipe app where users can browse seeded recipes, add new ones through a form, and view detailed recipe pages with animated UI sections.

It is built as a practice project using React, Vite, Context API, React Router, Tailwind CSS v4, and React Hook Form.

## ✨ Features

- Responsive navigation with active route highlighting
- Home, About, Recipes, Create Recipe, and Recipe Details pages
- Recipe listing in animated card layout
- Recipe detail view with ingredients and instructions rendered as lists
- Recipe creation form with required field checks and toast feedback
- In-view scroll reveal animations using `IntersectionObserver`
- Global state management with React Context
- Seeded sample recipes available on first load

## 🧱 Tech Stack

- **Frontend:** React 19, Vite 7
- **Routing:** React Router DOM 7
- **State:** React Context API
- **Forms:** React Hook Form
- **Notifications:** React Toastify
- **Styling:** Tailwind CSS 4 + custom CSS animations
- **Utilities:** NanoID

## 📁 Project Structure

```text
recipe-vault/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ RecipeCard.jsx
│  │  └─ ScrollReveal.jsx
│  ├─ context/
│  │  └─ RecipeContext.jsx
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  ├─ Recipes.jsx
│  │  ├─ RecipeDetails.jsx
│  │  ├─ CreateRecipe.jsx
│  │  └─ About.jsx
│  ├─ routes/
│  │  └─ MainRoutes.jsx
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ index.html
├─ package.json
└─ vite.config.js
```

## 🚀 Getting Started

### 1) Prerequisites

- Node.js 18+ (Node.js 20+ recommended)
- npm (comes with Node.js)

### 2) Install dependencies

```bash
npm install
```

### 3) Run development server

```bash
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

## 📜 Available Scripts

```bash
npm run dev      # Start Vite dev server
npm run build    # Create production build
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## 🔄 How Data Works

- Recipes are initialized from hardcoded seed data in `RecipeContext`.
- New recipes are added to React state in memory.
- Data currently resets on page refresh (no backend or localStorage persistence yet).

## ✅ Current Validation Behavior

In `CreateRecipe`, the app checks:

- Image URL
- Title
- Chef name
- Category
- Description
- Ingredients
- Instructions

If any required input is missing, a toast error is shown.

## 🛣️ Roadmap Ideas

- Add edit and delete recipe actions
- Persist recipes with localStorage or a backend API
- Add stronger field-level validation rules and error messages
- Add search and category filters in the recipes listing
- Add unit/component tests (e.g., with Vitest + React Testing Library)

## 📄 License

This project is currently for learning/practice purposes.