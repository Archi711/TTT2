import React, { useContext } from 'react';
import styled from 'styled-components';
import { breakPoints } from '../../utils';
import GameField from '../../walls/GameField/GameField';
import Chat from '../../walls/Chat/Chat';
import Console from '../../walls/Console/Console';
import { StateContext } from '../../store/store';
import { subscribeToDataUpdate } from '../../api';
import { UPDATE_DATA_PING } from '../../store/actionTypes';
import { Redirect } from 'react-router-dom';

const Game = () => {
  const store = useContext(StateContext);
  subscribeToDataUpdate((err, data) => {
    store.dispatch({
      type: UPDATE_DATA_PING,
      payload: data,
    })
  })

  return (
    store.state.room ? 
    <>
    <GridContainer>
      <GameField></GameField>
      <Chat></Chat>
      <Console></Console>
    </GridContainer>
    </>
    :
    <Redirect to="/" />
  )
}

const GridContainer = styled.main`
  max-width: 90vw;
  min-height:100vh;
  background: ${props => props.theme.primaryColor};
  padding: 1vw;
  grid-row-gap: 2vh;
  margin: 0 auto;
  display: grid;
  box-shadow: 0px 0px 0px 5vw ${props => props.theme.primaryColor};
  grid-template-columns: 7fr 3fr;
  grid-template-rows: 7fr 3fr;
  @media (max-width: ${breakPoints.mobileBreakpoint}px){
    grid-template-columns: 1fr;
  }
`;

export default Game;