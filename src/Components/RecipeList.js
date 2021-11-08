import React from 'react';
import RecipeCard from './RecipeCard';
import {v4 as uuidv4} from 'uuid';

const RecipeList = ({ recipes }) => {
  return recipes.map((recipe) => {
    return (
      <RecipeCard
        className="recipe-card"
        recipe={recipe}
        key={uuidv4()}
      />
    );
  });
};

export default RecipeList;
