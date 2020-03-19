import React, { useContext } from 'react';

import { Wrapper, Table, TableRow, TableContent, Button, Heading} from './styleds';

import { StateContext } from '../../../store/store';
import { GET_AVAILABLE_ROOMS } from '../../../store/actionTypes';

const RoomsTable = (props) => {
  const store = useContext(StateContext);
  const getAvailableRooms = e => {
    if(e) e.preventDefault();
    store.dispatch({
      type: GET_AVAILABLE_ROOMS,
    })
  }

  //useEffect(getAvailableRooms, []);
  return (
    <Wrapper>
      <Heading>Available rooms</Heading>
      <Button onClick={getAvailableRooms}>Refresh</Button>
      <Table>
        <TableRow heading>
          <TableContent heading>Room Name</TableContent>
          <TableContent heading>Players</TableContent>
          <TableContent heading>Spectators</TableContent>
        </TableRow>
        {store.state.availableRooms.map(room => 
          <TableRow
            key={room.name} 
            onDoubleClick={props.joinRoom(room.name)} 
            available={room.players.length < 2 || room.allowSpectators}
          >
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