import React from 'react';
import styled from 'styled-components';

const CardLink = styled.a`
  text-decoration: none;
  &:link {
    color: ${props => props.theme.dark};
  }
  &:active {
    color: ${props => props.theme.primary};
  }
  &:visited {
    color: #9e9e9e;
  }
`;

const Card = styled.div`
  position: relative;
  width: 90vw;
  background: #fff;
  border-radius: 6px;
  margin: 1rem 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    cursor: pointer;
  }

  @media ${props => props.theme.device.tablet} {
    width: 48.5%;
  }
`;

const RecipeTitle = styled.p`
  font-weight: 900;
  font-size: 1.3rem;
`;

const RecipeCard = ({ recipe }) => {
  const { label, url, healthLabels, dishType, cuisineType, image } = recipe.recipe;

  const cuisineTypeFormatted = (s) => {
    if (s.includes("central europe")) {
      return 'Central European';
    } else if (s.includes("eastern europe")) {
      return 'Eastern European';
    } else {
      return <div style={{textTransform: 'capitalize', display: 'inline'}}>{ s }</div>;
    }
  }

  const vegetarianVegan = () => {
    if (healthLabels.includes("Vegetarian") && !healthLabels.includes("Vegan")) {
      return <div className="tag">vegetarian</div>;
    } else if (healthLabels.includes("Vegan")) {
      return <div className="tag">vegan</div>;
    } else {
      return "";
    }
  };

  

  const glutenFree = () => {
    if (healthLabels.includes("Gluten-Free")) {
      return <div className="tag">gluten-free</div>;
    } else {
      return "";
    }
  };

  const gluten = glutenFree(healthLabels);
  const vegetarian = vegetarianVegan(healthLabels);
  
  return (
    <Card>
      <CardLink href={url} target="_blank">
        <img src={ image } className="recipe-image" alt={ label } />
        <RecipeTitle className="title">{ label }</RecipeTitle>
        <div>{ cuisineTypeFormatted(cuisineType) } { dishType } dish.</div>
        <div>{gluten} {vegetarian}</div>
      </CardLink>
    </Card>
  );
};

export default RecipeCard;
