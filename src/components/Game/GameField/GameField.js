import React, { useContext } from 'react';
import { GridContainer }from './styleds';
import Field from './Field';
import { StateContext } from '../../../store/store';


const GameField = (props) => {
  const store = useContext(StateContext);
  return (
    <GridContainer>
      {store.state.room.gameData.fields.map(
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



export default GameField;