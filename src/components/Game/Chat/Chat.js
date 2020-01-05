import React, {useContext} from 'react';
import { StateContext } from '../../../store/store';


import {ChatContainer, Heading, PlayerList} from './styleds';

const Chat = (props) => {
  const store = useContext(StateContext);


  return (
    <ChatContainer>
        <Heading>CHAT</Heading>
        <PlayerList></PlayerList>
    </ChatContainer>
  )
}

export default Chat;