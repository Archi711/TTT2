import React from 'react';
import styled from 'styled-components';
import { breakPoints } from '../../utils';

const Home = props => {


  return (
    <MainContainer>
      <Just>just...</Just>
      <Head>Tic tac toe</Head>
      <MidSection>
        {props.children}
      </MidSection>
    </MainContainer>
  )
}

export const MainContainer = styled.main`
  min-height: 100vh;
  background: ${props => props.theme.primaryColor};
`;
export const Just = styled.div`
  font-style: italic;
  font-size: 90%;
  text-align: center;
  padding: .7em 1em;
  display: block;
  text-align: center;
  box-sizing: border-box;
  font-weight: 100;
  color : ${props => props.theme.fontColor2};
`;
export const Head = styled.h2`
  padding: .1em .5em;
  margin: 0% 20%;
  font-size: 10vh;
  border-radius: 5px;
  background-color: ${props => props.theme.secondaryColor};
  color: ${props => props.theme.fontColor};
  text-align: center;
  font-weight: 100;
  @media (max-width: ${breakPoints.mobileBreakpoint}px){
      margin: 0% 5%;
      font-size: 6vh;
      padding: .01em .2em;
  }
`;

export const MidSection = styled.section`
  margin: 5% 20%;
  padding: .5em;
  display: grid;
  color: ${props => props.theme.fontColor};
  background-color: ${props => props.theme.secondaryColor};
  @media (max-width: ${breakPoints.mobileBreakpoint}px) {
    margin: 5% 5%;
  }
`;

export default Home;
      