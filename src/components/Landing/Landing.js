import socket from '../../api';
import React, {useState} from 'react';
import {Just, Head, MidSection, Input, Button} from './styleds';
import Modal from '../Modal/Modal';
import useModal from '../Modal/useModal';
import { ConnectionError } from '../../utils';



const Landing = (props) => {
  const [state,setState] = useState({auth : false, error: new ConnectionError(0)});
  const { isShowing, toggle } = useModal();
  function listener(e){
    e.preventDefault();
    let data = {
      name : e.target[0].value,
      room : e.target[1].value
    }
    socket.emit('userLogin', data);

    socket.on('loginSuccess', () => {
      socket.name = data.name;
      socket.room = data.room;
      props.authorized(true);
      setState({
        auth : true
      })
    });
    socket.on('ConnectionError', (code) => {
      toggle();
      setState({
        auth: false,
        error : new ConnectionError(code)
      })
    });
  }

  if(socket.name == null) {
    return (
      <>
        <Just>just...</Just>
        <Head>Tic tac toe</Head>
        <MidSection onSubmit={listener}>
          <Input placeholder="Your nick: " data='nick'></Input>
          <Input placeholder="Room: " data='room'></Input> 
          <Button type='submit'>Go!</Button>
        </MidSection>
        <Modal isShowing={isShowing} hide={toggle}>{state.error.msg}</Modal>
      </>
    )
  }
  else return 0;
}



export default Landing;