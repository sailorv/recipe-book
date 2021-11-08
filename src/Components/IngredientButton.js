import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: #fff;
  color: ${props => props.theme.primaryColor};
  border: solid 1px ${props => props.theme.lightGray};
  padding: 20px;
  margin: 0.3rem 0.3rem 0.3em 0;
  border-radius: 20px;
  font-size: 1rem;
  transition: 0.3s;

  &:hover {
    background: ${props => props.theme.secondaryColor};
    border-color: ${props => props.theme.secondaryColor};
    cursor: pointer;
  }
`;

const IngredientButton = ({ searches, setSearches }) => {
  const removeIngredient = ingredient => {
    setSearches([
      ...searches,
      [...searches[searches.length - 1].filter(item => item !== ingredient)]
    ]);
  };

  const generateIngredientButtons = searches => {
    const lastSearch = searches[searches.length - 1] || [];
    return lastSearch.map(ingredient => {
      return (
        <Button
          className="ingredient-btn"
          onClick={() => removeIngredient(ingredient)}
          key={ingredient}
        >
          {ingredient} <i className="fas fa-times-circle"></i>
        </Button>
      );
    });
  };

  return <React.Fragment>{generateIngredientButtons(searches)}</React.Fragment>;
};

export default IngredientButton;
