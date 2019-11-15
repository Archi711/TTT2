import React, {useState} from 'react';
import Landing from '../Landing/Landing';
import socket from '../../api';

const App = (props) => {
  const [state, setState] = useState({auth : false});
  if(state.auth !== true) return <Landing authorized={(a) => a ? setState({auth : true}) : false} />;
  else {
    return `You, named: ${socket.name} are logged in room ${socket.room}`;
  }
}

export default App;