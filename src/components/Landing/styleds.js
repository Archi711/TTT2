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
  padding: .5em;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(30px, auto);
  grid-template-areas: ${props => {
    if(props.content === 'main')
      return `
        "label label label label"
        "textField textField textField textField"
        "joinButton joinButton createButton createButton"
      `
    else if(props.content === 'join')
    return ``;
    else return ``;
  }

  };
  grid-gap: .5em;
  color: ${props => props.theme.fontColor};
  background-color: ${props => props.theme.secondaryColor};
  @media (max-width: ${breakPoints.mobileBreakpoint}px) {
    margin: 5% 5%;
  }
`;

export const Label = styled.label`
  grid-area: label;
  font-weight: bold;
  width: 80%;
  margin: 3% auto;
  font-size: 3vh;
  @media (max-width: ${breakPoints.mobileBreakpoint}px){
    margin: 0 auto;
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

