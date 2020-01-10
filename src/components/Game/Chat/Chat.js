import React, { useContext } from 'react';
import { StateContext } from '../../../store/store';


import { ChatContainer, Heading, PlayerList } from './styleds';

const Chat = (props) => {
  const store = useContext(StateContext);



  
  console.log(store.players)

  return ( 
    <ChatContainer >
      <Heading > CHAT </Heading>
      <PlayerList > <li> { store.players ? store.players[0] : "" }</li> </PlayerList> 
    </ChatContainer>
  )
}

export default Chat;