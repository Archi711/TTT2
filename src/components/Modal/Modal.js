
import React from "react";
import ReactDOM from 'react-dom';
import {Container} from './styleds';


const Modal = ({isShowing, hide, children}) => isShowing ? ReactDOM.createPortal(
  <Container onClick={hide} out={isShowing}>
    {children}
  </Container> , document.body
) : null;

export default Modal;