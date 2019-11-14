
import React from "react";
import styled from 'styled-components';

const Container = styled.section`
  position: absolute;
  bottom: 0;
  width: 100vw;
  max-width: 100vw;
  margin: 0 auto;
  padding: 2em;
  background-color: #333334;
  color: #dbba9a;
  :after {
    content: "";
    width: 100%;
    height: 10%;
    display: block;
    position: 'absolute';
    background-color: #a64135;
  }
`;

const Modal = (props) => {
 if(props.display) return(
    <Container>
      {props.children}
   </Container>
 );
 else return null;
}


export default Modal;