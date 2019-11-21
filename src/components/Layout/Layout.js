import React , {useContext } from 'react';
import Landing from '../Landing/Landing';
import Game from '../Game/Game';

import { StateContext } from '../../store/store';


const Layout = () => {
  const store = useContext(StateContext);

  return store.state.authorizationStatus === "AUTHORIZE_SUCCESS" ? <Game /> : <Landing />
}




export default Layout;