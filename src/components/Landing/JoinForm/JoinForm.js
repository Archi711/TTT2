import React, { useState } from 'react';
import styled from 'styled-components';
import RoomsTable from './RoomsTable/RoomsTable';
import { breakPoints } from '../../../utils';
import { Button as templateBtn } from './RoomsTable/styleds';

const JoinForm = (props) => {
  
  return (
    <Wrapper>
      <RoomsTable></RoomsTable>
      <Label>Or enter name to join private room: </Label>
      <Input></Input>
      <Button type='submit'>Connect</Button>
    </Wrapper>
  )

}

const Button = styled(templateBtn)`
  grid-area: Button;
`;

const Wrapper = styled.form`
  display: grid;
  grid-row-gap: 5px;
  grid-column-gap: 25px;
  grid-template-areas: 
    "RoomsTable RoomsTable RoomsTable"
    "Label Input Button";
  @media (max-width: ${breakPoints.mobileBreakpoint}px){
    grid-template-areas: 
      "RoomsTable RoomsTable"
      "Label Label"
      "Input Button";
  }
`;

const Label = styled.label`
  grid-area: Label;
  display:inline-flex;
  padding: .3rem;
  border-left: 1px solid ${props => props.theme.fontColor};
`;

const Input = styled.input`
  grid-area: Input;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${props => props.theme.fontColor};
  color: ${props => props.theme.fontColor};
`;






export default JoinForm;