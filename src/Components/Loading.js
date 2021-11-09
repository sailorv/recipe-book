import React from 'react';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
  margin: auto;
`;

const Spinner = () => {

  return (
    <SpinnerContainer>
      <svg
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        className="lds-ellipsis"
        style={{ background: 'none' }}
      >
        <circle cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke="#ffcb64" stroke-linecap="round" stroke-dashoffset="0" stroke-dasharray="100, 200">
          <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 50 50" to="360 50 50" dur="2.5s" repeatCount="indefinite"/>
          <animate attributeName="stroke-dashoffset" values="0;-30;-124" dur="1.25s" repeatCount="indefinite"/>
          <animate attributeName="stroke-dasharray" values="0,200;110,200;110,200" dur="1.25s" repeatCount="indefinite"/>
        </circle>
      </svg>
    </SpinnerContainer>
  );
};

export default Spinner;
