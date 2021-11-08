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
`;

const Bookmark = styled.span`
  font-size: 1.8em;
  font-weight: 900;
  color: ${props => props.theme.primaryColor};
`;

const scrollToTop = () => {
  document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Header = ({ appTitle }) => {
  return (
    <Head onClick={() => scrollToTop()}>
      <Menu><i class="fas fa-bars"></i></Menu>
      <Title className="app-title">
        {appTitle}
      </Title>
      <Bookmark><i class="far fa-bookmark"></i></Bookmark>
    </Head>
  );
};

export default Header;
