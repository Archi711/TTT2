import React from 'react';
import { JOIN_ROOM, GET_AVAILABLE_ROOMS, CREATE_ROOM } from './actionTypes';
import socket from '../api';

export const lightTheme = {
  primaryColor: "#FFF",
  secondaryColor: "#DFEE20",
  secondaryBColor: "#eFEf30",
  ndColor1: "#A4F109",
  ndColor2: "#e90058",
  fontColor : "#002b40",
  fontColor2 : "#8075A1",
  fontColor3 : "#3E3931",
}

export const darkTheme = {
  primaryColor: "#000D0C",
  secondaryColor: "#333334",
  secondaryBColor: "#444445",
  ndColor1: "#18283E",
  ndColor2: "#35455D",
  fontColor: "#dbba9a",
  fontColor2: "#FFC932",
  fontColor3: "#0CCF61",
}

export const initialState = {
  name : null,
  room : null,
  availableRooms : [],
  theme: darkTheme,
  responseStatus : 0,
  isPlayer : null,
}

//for(let a = 0; a < 15; a++) initialState.availableRooms.push({name: "Archi's", players: [1,2,3], allowSpectators: true})

export const state = initialState;

export function asyncMiddleware(dispatch){
  return (action) => {
    switch(action.type){
      case GET_AVAILABLE_ROOMS: {
        action.payload = {};
        socket.emit(action.type, res => {
          action.payload.status = res.status;
          if(!res.status){
            action.payload.rooms = res.rooms;
          }
          dispatch(action);
        })
        break;
      }
      case JOIN_ROOM: {
        
        socket.emit(action.type, action.payload, res => {
          action.payload.status = res.status;
          if(!res.status){
            action.payload.isPlayer = res.isPlayer;
            action.payload.room = res.room;
            action.payload.sign = res.sign;
          }
          dispatch(action);
        })
        break;
      }
      case CREATE_ROOM: {
        socket.emit(action.type, action.payload, res => {
          action.payload.status = res.status;
          if(!res.status){
            action.payload.room = res.room;
            action.payload.sign = res.sign;
          }
          dispatch(action);
        })
        break;
      }
      default : dispatch(action);
    }
  }
}

export const reducer = (state, action) => {
  switch(action.type){
    case GET_AVAILABLE_ROOMS: {
      if(!action.payload.status){
        return {
          ...state,
          availableRooms : action.payload.rooms,
        }
      }
      else return {
          ...state,
          responseStatus : action.payload.status,
      }
    }
    case JOIN_ROOM: {
      if(!action.payload.status){
        return {
          ...state,
          isPlayer : action.payload.isPlayer,
          room : action.payload.room,
          
        }
      }
      else return {
        ...state,
        responseStatus : action.payload.status,
      }
    }
    case CREATE_ROOM: {
      if(!action.payload.status){
        return {
          ...state,
          room: action.payload.room,
          isPlayer: true,
          sign: action.payload.sign,
        }
      }
      else return {
        ...state,
        responseStatus : action.payload.status,
      }
    }
    default : return state;
  }
}


export const StateContext = React.createContext();