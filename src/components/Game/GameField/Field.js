import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { StateContext } from '../../../store/store';


const Field = props => {
  const { value } = props;
  const [sign, setSign] = useState("");
  const store = useContext(StateContext);
  
  const handleHover = (isHover) => {
    return e => {
      if(value) return;
      if(isHover){
        let sign = store.state.sign === 1 ? 'x' : 'o'; 
        setSign(sign);
      }
      else {
        setSign("");
      }
    }
  }

  const handleClick = e => {
    if(value) return;
    store.dispatch({}) // PLAYER MOVE
  }

  useEffect(()=>{
    setSign(value)
  }, [value])

  return (
    <FieldContainer
      value={value} 
      onMouseEnter={handleHover(true)}
      onMouseLeave={handleHover(false)}
      onClick={handleClick}>
      {sign}
    </FieldContainer>
  )
}


export default Field;



const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.primaryColor};
  color: rgba(${props => props.theme.primaryColor === "#FFF" ? "0,0,0," : "255,255,255,"}${props => props.value ? "1" : "0.5"});
  font-size: 5rem;
  text-align: center;
  user-select: none;
`;