import React from 'react';
import styled from 'styled-components';
import MoreRecipesCard from './MoreRecipesCard';

const MoreRecipesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
`;

const MoreRecipes = () => {
  const someArray = [
    {
      name: 'Really Amazing Pie',
      image: 'https://images.unsplash.com/photo-1587248720327-8eb72564be1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      text: 'Check out our pie recipes to keep you warm through the winter.'
    },
    {
      name: 'Breakfast Recipes',
      image: 'https://images.unsplash.com/photo-1568051243851-f9b136146e97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
      text: 'The most important meal of the day.'
    },
    {
      name: 'Soup Season',
      image: 'https://images.unsplash.com/photo-1541095441899-5d96a6da10b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
      text: 'some tex3t'
    }
  ];

  return (
    <React.Fragment>
      <h2>Need some ideas? Try these recipes.</h2>
      <MoreRecipesWrapper>
        <MoreRecipesCard 
          someArray={someArray}
        />
      </MoreRecipesWrapper>
    </React.Fragment>
  )
  
};

export default MoreRecipes;
