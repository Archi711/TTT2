import React from 'react';
import { AUTHORIZE_REQ } from "./actionTypes";
import socket from '../api';

export const lightTheme = {
  primaryColor: "#FFF",
  secondaryColor: "#DFEE20",
  ndColor1: "#A4F109",
  ndColor2: "#e90058",
  fontColor : "#002b40",
  fontColor2 : "#8075A1",
  fontColor3 : "#3E3931",
}

export const darkTheme = {
  primaryColor: "#000D0C",
  secondaryColor: "#333334",
  ndColor1: "#18283E",
  ndColor2: "#35455D",
  fontColor: "#dbba9a",
  fontColor2: "#FFC932",
  fontColor3: "#BBA3A8",
}

export const initialState = {
  authorizationStatus : "NOT_AUTHORIZED",
  name : null,
  room : null,
  gameData : {
    winner : 0,
    fieldStatus : [0,0,0,0,0,0,0,0,0]
  },
  theme: darkTheme,
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