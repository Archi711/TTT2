import React , {useContext, useEffect, useRef} from 'react';
import Landing from '../Landing/Landing';
import Game from '../Game/Game';

import { StateContext } from '../../store/store';


const Layout = () => {
  const store = useContext(StateContext);
  console.log(store.state);
  let content = useRef(<Landing></Landing>);
  useEffect(() => {
    if(store.state.authorizationStatus === "AUTHORIZE_SUCCESS") content.current = <Game></Game>;
  }, [store.state.authorizationStatus])
  return content.current;
}




export default Layout;