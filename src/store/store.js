import React from 'react';
import { JOIN_ROOM, GET_AVAILABLE_ROOMS, CREATE_ROOM, UPDATE_DATA_PING, CHANGE_NAME, LOAD_OLD_STATE } from './actionTypes';
import { socket } from '../api';

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
          action.payload.responseStatus = res.status;
          if(!res.status){
            action.payload.availableRooms = res.rooms;
          }
          dispatch(action);
        })
        break;
      }
      case LOAD_OLD_STATE: 
      case JOIN_ROOM: {
        return new Promise((resolve, reject) => {
          socket.emit(action.type, action.payload, res => {
            action.payload = {
              name : action.payload.name
            }
            action.payload.responseStatus = res.status;
            if(!res.status){
              socket.emit(UPDATE_DATA_PING, { room : res.room });
              action.payload.room = res.room;
              resolve();
            }
            else reject();
            dispatch(action);
          })
        })
      }
      case CREATE_ROOM: {
        return new Promise((resolve, reject) => {
          socket.emit(action.type, action.payload, res => {
            action.payload = {
              name : action.payload.name
            }
            action.payload.responseStatus = res.status;
            if(!res.status){
              action.payload.room = res.room;
              resolve();
            }
            else reject();
            dispatch(action);
          })
        })
      }
      default : dispatch(action);
    }
  }
}

export const reducer = (state, action) => {

  switch(action.type){
    case LOAD_OLD_STATE:
    case CHANGE_NAME:
    case GET_AVAILABLE_ROOMS:
    case CREATE_ROOM :
    case UPDATE_DATA_PING:
    case JOIN_ROOM :  {
        return {
          ...state,
          ...action.payload
        }
    }
    default : return state;
  }
}

export const StateContext = React.createContext();

