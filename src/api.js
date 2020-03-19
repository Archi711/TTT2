import openSocket from 'socket.io-client';
import { UPDATE_DATA_PING } from './store/actionTypes';

export const socket = openSocket('http://192.168.1.19:3001');

export const subscribeToDataUpdate = cb => {
  socket.on(UPDATE_DATA_PING, data => {
    console.log("UPDATE_REQUEST_RECEIVED");
    cb(null, data);
  });
}

