import React, { useContext, useState } from 'react';

import { Wrapper, Table, TableRow, TableContent, Button, Heading} from './styleds';

import { StateContext } from '../../../../store/store';

const RoomsTable = (props) => {
  const store = useContext(StateContext);

  return (
    <Wrapper>
      <Heading>Available rooms</Heading>
      <Button>Refresh</Button>
      <Table>
        <TableRow heading>
          <TableContent heading>Room Name</TableContent>
          <TableContent heading>Players</TableContent>
          <TableContent heading>Spectators</TableContent>
        </TableRow>
        {store.state.availableRooms.map(room => 
          <TableRow key={room.name}>
            <TableContent>{room.name}</TableContent>
            <TableContent>{room.players.length}</TableContent>
            <TableContent>{room.allowSpectators ? "Yes" : "No"}</TableContent>
          </TableRow>  
        )}
      </Table>
    </Wrapper>
  )
}



export default RoomsTable;