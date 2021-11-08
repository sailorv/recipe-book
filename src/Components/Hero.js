import React from 'react';
import styled from 'styled-components';

const SpeechBubble = styled.span`
  position: relative;
  margin: auto;
  width: fit-content;
  background: ${props => props.theme.accentColor};
  border-radius: 2rem;
  color: #fff;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  text-align: center;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 60%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-bottom-color: ${props => props.theme.accentColor};
    border-top: 0;
    border-left: 0;
    margin-left: -10px;
    margin-top: -20px;
  }
`;

const messages = [
  `Type an ingredient or a dish to search thousands of recipes.`,
];

const getRandom = arr => {
  return arr[(arr.length * Math.random()) | 0];
};

const Hero = () => {
  return (
    <React.Fragment>
      <SpeechBubble className="speech-bubble">
        {getRandom(messages)}
      </SpeechBubble>
    </React.Fragment>
  );
};

export default Hero;
