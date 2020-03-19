import React, {useState} from 'react';
import styled from 'styled-components';



const Switch = (props) => {
  const [isChecked, change] = useState(false);
  const handleChange = () => {
    change(!isChecked); 
  }
  return (
    <Label index={props.index}>
      <Checkbox onChange={handleChange}></Checkbox>
      <Checkmark isChecked={isChecked}></Checkmark>
    </Label>
  )
}

const Label = styled.label`
  grid-area: switch${props => props.index};
  display: block;
  cursor: pointer;
  padding: .5em;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select:none;
`;
const Checkbox = styled.input.attrs({type: 'checkbox'})`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const Checkmark = styled.div`
  width: 2em;
  height: 2em;
  user-select:none;
  background-color: ${props => props.theme.ndColor2};
  &:hover {
    background-color: ${props => props.theme.fontColor2};
  }
  &:after{
    background-color: ${props => props.theme.fontColor3};
    content: "";
    display: ${props => props.isChecked ? "block" : 'none'};
    position: relative;
    top:25%;
    left: 25%;
    width: 50%;
    height: 50%;
    border-radius:50%;
  }
`;

export default Switch;