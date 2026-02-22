import React, { createContext, useContext, useState } from 'react'

export const RecipeContext = createContext(null);

export const useRecipes = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipes must be used within RecipeContextProvider");
  }
  return context;
};

const RecipeContextProvider = ({ children }) => {

    const [data, setData] = useState([]);
    console.log('data', data)

    return (
        <RecipeContext.Provider value={{ data, setData }}>
            {children}
        </RecipeContext.Provider>
    )
}

export default RecipeContextProvider
