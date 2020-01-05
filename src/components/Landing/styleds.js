import styled from 'styled-components';
import { breakPoints } from '../../utils';

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

export const MidSection = styled.form`
  margin: 5% 20%;
  color: ${props => props.theme.fontColor};
  background-color: ${props => props.theme.secondaryColor};
  @media (max-width: ${breakPoints.mobileBreakpoint}px) {
    margin: 5% 5%;
  }
`;

export const Label = styled.label`
  display: block;
  margin: 0 auto;
  font-weight: bold;
  width: 80%;
  font-size: 3vh;
  :nth-child(1){
    padding-top: 3%;
  }
`;

export const Input = styled.input`
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
  position: 'absolute';
  bottom: 0;
  width: 100%;
  font-size: 4vh;
  height: 3em;
  background-color: ${props => props.theme.ndColor1};
  border: none;
  color: ${props => props.theme.fontColor2};
  cursor: pointer;
  :hover {
    background-color: ${props => props.theme.ndColor2};
  }
`;

