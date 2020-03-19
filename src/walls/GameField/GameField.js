import React, { useContext } from 'react';
import styled from 'styled-components';
import { breakPoints } from '../../utils';
import Field from '../Field/Field';
import { StateContext } from '../../store/store';


const GameField = (props) => {
  const store = useContext(StateContext);
  return (
    <GridContainer>
      {store.state.room.fieldStatus.map(
        (value, id) => 
          <Field
            value={value}
            key={id}
          > 
          </Field>
      )}
    </GridContainer>
  )
}


export const GridContainer = styled.section`
  background-color: ${props => props.theme.fontColor}; 
  color: ${props => props.theme.ncColor2};
  display: grid;
  grid-gap: .5em;
  max-width: 80vh;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  @media (max-width : ${breakPoints.mobileBreakpoint}px){
    grid-column: 1 / 3;
    max-width: 100%;
  }
`;



export default GameField;