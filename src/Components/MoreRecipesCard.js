import React from 'react';
import {v4 as uuidv4} from 'uuid';
import styled from 'styled-components';

const MoreRecipeCard = styled.div`
  position: relative;
  width: 90vw;
  background: #fff;
  color: #000;
  padding: 0 0 1em 0;
  border-radius: 6px;
  margin: 1rem 0;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 48%;
  &:hover {
    cursor: pointer;
  }
  @media ${props => props.theme.device.tablet} {
    width: 32%;
  }
`;


const MoreRecipesCard = ({ someArray }) => {
  
  return someArray.map(arrayItem => {

    const imageURL = arrayItem.image;

    const imageStyle = {
      backgroundImage: `url(${imageURL})`
    };

    return (
      <MoreRecipeCard id={uuidv4()} className="RecipeCard">
        <div className="RecipeImage" style={imageStyle}></div>
        <div className="RecipeTitle">{arrayItem.name}</div>
        <div className="RecipeDescription">{arrayItem.text}</div>
      </MoreRecipeCard>
    );
  });

};

export default MoreRecipesCard;
