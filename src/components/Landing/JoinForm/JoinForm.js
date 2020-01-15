import React, { useContext } from 'react';
import styled from 'styled-components';
import RoomsTable from './RoomsTable/RoomsTable';
import { breakPoints } from '../../../utils';
import { Button as templateBtn } from './RoomsTable/styleds';
import { StateContext } from '../../../store/store';
import { JOIN_ROOM } from '../../../store/actionTypes';

const JoinForm = (props) => {
  const store = useContext(StateContext);

  const handleSubmit = param => {
    return (e) => {
      let data = {};
      data.username = props.username;
      data.name = param ? param : e.target[0].value;
    
      store.dispatch({
       type: JOIN_ROOM,
        payload: data,
      })
    } 
  }

  return (
    <Wrapper onSubmit={handleSubmit()}>
      <RoomsTable joinRoom={handleSubmit}></RoomsTable>
      <Label>Or enter name to join private room: </Label>
      <Input></Input>
      <Button type='submit'>Connect</Button>
    </Wrapper>
  )

}

const Button = styled(templateBtn)`
  grid-area: Button;
  padding: .5em;
`;

const Wrapper = styled.form`
  display: grid;
  grid-row-gap: 20px;
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