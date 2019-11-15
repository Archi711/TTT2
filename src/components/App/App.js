import React, {useState} from 'react';
import Landing from '../Landing/Landing';
import { GridContainer } from './styleds';
import GameField from '../GameField/GameField';
import Chat from '../Chat/Chat';
import Console from '../Console/Console';

const App = (props) => {
  const [state, setState] = useState({auth : false});
  if(!state.auth){
    return <Landing authorized={(a) => a ? setState({auth : true}) : false} />;
  }
  else {
    return (
      <GridContainer>
        <GameField></GameField>
        <Chat></Chat>
        <Console></Console>
      </GridContainer>
    )
  }
}

export default App;