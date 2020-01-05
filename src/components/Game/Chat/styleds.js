import styled from 'styled-components';
import { breakPoints } from '../../../utils';


export const ChatContainer = styled.section`
  width:95%;
  height: 100%;
  margin: 0 5%;
  padding: .5em;
  background-color: transparent;
  color: ${props => props.theme.fontColor};
  @media ( max-width: ${breakPoints.mobileBreakpoint}px){
    margin: 0 auto;
  }
`;

export const Heading = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  padding: .5rem;
  margin: 0;
  border-radius: .1rem;
  background-color: ${props => props.theme.secondaryColor};
`;

export const PlayerList = styled.ul`
  text-decoration: none;
  margin: 0;
  padding: .33rem;
  background-color: ${props => props.theme.secondaryColor}
`;
