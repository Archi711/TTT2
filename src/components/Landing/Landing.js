import React, { useContext } from 'react';
import {Just, Head, MidSection, Input, Button, Label} from './styleds';
import Modal from '../Modal/Modal';
import useModal from '../Modal/useModal';
import { StateContext } from '../../store/store';
import { AUTHORIZE_REQ } from '../../store/actionTypes';



const Landing = (props) => {

  const store = useContext(StateContext);
  const { isShowing, toggle } = useModal();

  function listener(e){
    toggle();
    e.preventDefault();
    let data = {
      name: e.target[0].value,
      room : e.target[1].value
    }
    store.dispatch({
      type: AUTHORIZE_REQ,
      payload: data
    });
  }

    return (
      <>
        <Just>just...</Just>
        <Head>Tic tac toe</Head>
        <MidSection onSubmit={listener}>
          <Label htmlFor="name">Your nick: </Label>
            <Input data='name' id="name"></Input>
          <Label htmlFor="room"> Room:</Label>
            <Input data='room' id="room"></Input>
          <Button type='submit'>Go!</Button>
        </MidSection>
        <Modal isShowing={isShowing} hide={toggle}>If nothing is happening, check your connection!</Modal>
      </>
    )
}



export default Landing;