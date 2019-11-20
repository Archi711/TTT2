import React from 'react';
import { GridContainer } from './styleds';
import GameField from '../Game/GameField/GameField';
import Chat from '../Game/Chat/Chat';
import Console from '../Game/Console/Console';

const Game = () => {


  return (
    <GridContainer>
      <GameField></GameField>
      <Chat></Chat>
      <Console></Console>
    </GridContainer>
  )
}

export default Game;