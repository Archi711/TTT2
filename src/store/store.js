import React from 'react';
import { AUTHORIZE_REQ } from "./actionTypes";
import socket from '../api';

export const initialState = {
  authorizationStatus : "NOT_AUTHORIZED",
  nick : null,
  room : null,
  gameData : null
}

export const state = initialState;

export const reducer = (state, action) => {
  switch(action.type){
    case AUTHORIZE_REQ: {
      console.log("req send");
      socket.emit(AUTHORIZE_REQ, action.payload, (res) => {
        console.log("RESPONSE: "+res);
        if(res === "AUTHORIZE_SUCCESS"){
          console.log('wtf')
          return {
            ...state,
            authorizationStatus : "AUTHORIZE_SUCCESS",
            name : action.payload.name,
            room : action.payload.room,
          }
        }
        else{
          return {
            ...state,
            authorizationStatus : "AUTHORIZE_FAILURE",
            name : action.payload.name,
            room : action.payload.room,
          }
        }
      });
      return state;
    }


    default : return state;
  }
}


export const StateContext = React.createContext();