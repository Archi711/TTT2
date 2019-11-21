import React from 'react';
import { AUTHORIZE_REQ } from "./actionTypes";
import socket from '../api';

export const initialState = {
  authorizationStatus : "NOT_AUTHORIZED",
  name : null,
  room : null,
  gameData : null
}

export const state = initialState;

export function asyncMiddleware(dispatch){
  return (action) => {
    switch(action.type){
      case AUTHORIZE_REQ: {
        socket.emit(AUTHORIZE_REQ, action.payload, (res) => {
          console.log("RESPONSE: "+res);
          action.response = res;
          dispatch(action);
        });
        break;
      }
      default : dispatch(action);
    }
  }
}

export const reducer = (state, action) => {
  switch(action.type){
    case AUTHORIZE_REQ: {
      if(action.response === "AUTHORIZE_SUCCESS"){
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
    }


    default : return state;
  }
}


export const StateContext = React.createContext();