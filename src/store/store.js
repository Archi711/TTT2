import React from 'react';
//import socket from '../api';

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
  name : null,
  room : null,
  availableRooms : null,
  theme: darkTheme,
}

export const state = initialState;

export function asyncMiddleware(dispatch){
  return (action) => {
    switch(action.type){
      default : dispatch(action);
    }
  }
}

export const reducer = (state, action) => {
  switch(action.type){
    
    default : return state;
  }
}


export const StateContext = React.createContext();