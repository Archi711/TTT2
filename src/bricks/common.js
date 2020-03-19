import styled from 'styled-components';
import { breakPoints } from '../utils';

export const Label = styled.label`
  grid-area: label${props => props.index};
  font-weight: bold;
  padding: .5em 10% .5em 10%;
  width: 100%;
  margin: 0 auto;
  font-size: 3vh;
  @media (max-width: ${breakPoints.mobileBreakpoint}px){
    font-size: 2vh;
  }
`;

export const Input = styled.input`
  grid-area: textField;
  margin: 3% auto;
  width: 80%;
  background-color: transparent;
  color: ${props => props.theme.fontColor};
  border: none;
  border-bottom: 1px ${props => props.theme.fontColor} solid;
  display: block;
  font-size: 4vh;
  padding: .4em;
  :nth-child(4){
    margin-bottom: 6%;
  }
  @media (max-width: ${breakPoints.mobileBreakpoint}px){
    font-size: 4vh;
  }
  :focus{
    outline-color: ${props => props.theme.fontColor2}
  }
  
`;

export const Button = styled.button`
  border-radius: 12px;
  padding: .5em;
  grid-area: ${props => props.name};
  font-size: 4vh;
  background-color: ${props => props.theme.ndColor1};
  border: none;
  color: ${props => props.theme.fontColor2};
  cursor: pointer;
  :hover {
    background-color: ${props => props.theme.ndColor2};
  }
  @media (max-width: ${breakPoints.mobileBreakpoint}px){
    font-size: 2.5vh;
  }
`;