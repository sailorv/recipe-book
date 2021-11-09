import React from 'react';
import styled from 'styled-components';
import image404 from './../assets/error404recipebook.jpg';

const NoResultsContainer = styled.div`
  margin: 1rem auto;
  color: ${props => props.theme.dark};
  font-size: 1rem;
  display:flex;
  align-items: center;
  width: 80%;
`;

const NoResults = () => {
  return (
    <NoResultsContainer>
      <div width="30%">
        <img src={image404} alt="Nothing here" />
      </div>
      <div style={{paddingLeft: "2em"}}>
        <h2>Oops!</h2>
        <p className="no-results">We didn't find anything in our search. Try alternating between the singular or plural of your ingredient (e.g. "pepper" or "peppers"). You can also search for recipe names - not just ingredients.</p>
      </div>
    </NoResultsContainer>
  );
};

export default NoResults;
