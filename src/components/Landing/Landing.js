import socket from '../../api';
import React, {useState} from 'react';
import {Just, Head, MidSection, Input, Button} from './styleds';
import Modal from '../Modal/Modal';
import { ConnectionError, debounce } from '../../utils';



const Landing = (props) => {
  let[state,setState] = useState({auth : false, error: new ConnectionError(0)});

  function listener(e){
    e.preventDefault();
    let data = {
      name : e.target[0].value,
      room : e.target[1].value
    }
    socket.emit('login', data);

    socket.on('success', () => {
      socket.name = data.name;
      socket.room = data.room;
      props.authorized(true);
      setState({
        auth : true
      })
    });
    socket.on('error', (code) => {
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
        <MidSection onSubmit={debounce(listener, 1000)}>
          <Input placeholder="Your nick: " data='nick'></Input>
          <Input placeholder="Room: " data='room'></Input> 
          <Button type='submit'>Go!</Button>
        </MidSection>
        <Modal display={state.error.code !== 0}>{state.error.msg}</Modal>
      </>
    )
  }
  else return 0;
}



export default Landing;