import React, { useContext } from 'react';
import { StateContext } from '../../store/store';


import { ChatContainer, Heading, PlayerList } from './styleds';

const Chat = (props) => {
  const store = useContext(StateContext);


  return ( 
    <ChatContainer >
      <Heading > CHAT </Heading>
      <PlayerList > 
        { 
          store.state.room.players ? 
            store.state.room.players.map(
              p => <li key={p.name}>{p.name}{p.status}</li>) :
              "" 
        }    
      </PlayerList> 
    </ChatContainer>
  )
}

export default Chat;