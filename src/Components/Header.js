import React from 'react';
import styled from 'styled-components';

const Head = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 9vh;
  z-index: 2;
  padding: 0 2em;
  background: #fff;

`;

const Title = styled.span`
  font-size: 1.8em;
  font-weight: 900;
  color: ${props => props.theme.primaryColor};
  flex-grow: 1;
`;

const Menu = styled.span`
  font-size: 1.8em;
  font-weight: 900;
  color: ${props => props.theme.primaryColor};
  flex-grow: 1;
  visibility: hidden;
`;

const Bookmark = styled.span`
  font-size: 1.8em;
  font-weight: 900;
  color: ${props => props.theme.primaryColor};
  visibility: hidden;
`;

const scrollToTop = () => {
  document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Header = ({ appTitle }) => {
  return (
    <Head onClick={() => scrollToTop()}>
      <Menu><i className="fas fa-bars"></i></Menu>
      <Title className="app-title">
        {appTitle}
      </Title>
      <Bookmark><i className="far fa-bookmark"></i></Bookmark>
    </Head>
  );
};

export default Header;
