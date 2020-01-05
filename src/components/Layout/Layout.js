import React , {useContext } from 'react';
import Landing from '../Landing/Landing';
import Game from '../Game/Game';
import { LayoutContainer } from './styleds';

import { StateContext } from '../../store/store';


const Layout = () => {
  const store = useContext(StateContext);

  return (
  <LayoutContainer>
    {store.state.authorizationStatus === "AUTHORIZE_SUCCESS" ? <Game /> : <Landing />}
  </LayoutContainer>
  )
  
}




export default Layout;