import React from 'react'
import { useRecipes } from '../context/RecipeContext'

const Recipes = () => {

  const {data} = useRecipes();

  const renderRecipes = data.map(recipe => {
    return <div key={recipe.id}>{recipe.title}</div>
  })

  return (
    <div>
      {renderRecipes}
    </div>
  )
}

export default Recipes
