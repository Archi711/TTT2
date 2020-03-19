
import React, { useState } from "react";
import ReactDOM from 'react-dom';
import {Container} from './styleds';


export const Modal = ({isShowing, hide, children, isFloating}) => isShowing ? ReactDOM.createPortal(
  <Container onClick={hide} out={isShowing} isFloating={isFloating}>
    {children}
  </Container> , document.body
) : null;

export const useModal = () => {
  const [isShowing, setIsShowing ] = useState(false);

  function toggle(){
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle
  }
}
