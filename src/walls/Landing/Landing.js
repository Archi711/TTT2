import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Modal, useModal } from '../../components/Modal/Modal';
import { useHistory } from 'react-router-dom';
import { StateContext } from '../../store/store';
import { CHANGE_NAME } from '../../store/actionTypes';
import { Label, Input, Button } from '../../bricks/common';



const Landing = (props) => {
    const { isShowing, toggle } = useModal();
    const [ errorMessage, setError ] = useState("");
    const history = useHistory();
    const store = useContext(StateContext);

    const handleClick = (type) => {
      return (e) => {
        e.preventDefault();
        let data = {
          name: e.target.form[0].value,
        }
        if (data.name === ""){
          setError("Check your name, and try again!");
          if(!isShowing) toggle();
        }
        else {
          store.dispatch({
            type: CHANGE_NAME,
            payload: data,
          })
          history.push(`/${type}`);
        }
      }
    }


    return (
            <Wrapper>
              <Label htmlFor="name">Pick your nickname: </Label>
              <Input data='name' id="name"></Input>
              <Button onClick={handleClick('join')} name="button1">Join room</Button>
              <Button onClick={handleClick('create')}  name="button2">Create room</Button>
              <Modal isShowing={isShowing} hide={toggle}>{errorMessage}</Modal>
            </Wrapper>     
    )
}

export const Wrapper = styled.form`
  display: grid;
  grid-auto-rows: minmax(30px, auto);
  grid-template-areas: 
        "label label label label"
        "textField textField textField textField"
        "button1 button1 button2 button2";
  grid-gap: .5rem;
`;


export default Landing;