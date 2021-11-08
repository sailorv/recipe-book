import React from 'react';
import styled from 'styled-components';

const NoResultsContainer = styled.div`
  margin: 1rem auto;
  color: ${props => props.theme.dark};
  font-size: 1rem;
  text-align: center;
`;

const NoResults = () => {
  return (
    <NoResultsContainer>
      <p className="no-results">
        Nothing here
      </p>
    </NoResultsContainer>
  );
};

export default NoResults;
