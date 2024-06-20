import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
`;

const HomeHeader = styled.h1`
  text-align: center;
  color: ${props => props.theme.colors.text};
`;

const HomeParagraph = styled.p`
  text-align: center;
  color: ${props => props.theme.colors.text};
`;

const HomeButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 200px;
  margin: 0 auto;
  align-items: center;
`;

const HomeButton = styled(Link)`
  background: ${props => props.theme.colors.primary};
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #000;
  font-size: 2em;
  margin: 0.5em;
  text-align: center;
`;

const HomeInput = styled.input`
  font-size: 2em;
  width: 140px;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
`;

export const Home: React.FC = () => {
  const idRef = useRef<HTMLInputElement>(null);

  return (
    <HomeContainer>
      <HomeHeader>create a game</HomeHeader>
      <HomeButtonContainer>
        <HomeButton to="/game">local</HomeButton>
        <HomeButton to="/game/bot">bot</HomeButton>
      </HomeButtonContainer>
    </HomeContainer >
  );
};
