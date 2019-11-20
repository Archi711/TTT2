import React, {useContext, useRef} from 'react';
import {Just, Head, MidSection, Input, Button} from './styleds';
import Modal from '../Modal/Modal';
import useModal from '../Modal/useModal';
import { StateContext } from '../../store/store';
import { AUTHORIZE_REQ } from '../../store/actionTypes';



const Landing = (props) => {

  const store = useContext(StateContext);
  const { isShowing, toggle } = useModal();
  let modalMessage = useRef("");


  function listener(e){
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
          <Input placeholder="Your nick: " data='nick'></Input>
          <Input placeholder="Room: " data='room'></Input> 
          <Button type='submit'>Go!</Button>
        </MidSection>
        <Modal isShowing={isShowing} hide={toggle}>{modalMessage.current}</Modal>
      </>
    )
}



export default Landing;