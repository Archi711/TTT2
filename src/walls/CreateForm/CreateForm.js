import React, { useState, useContext, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { Wrapper } from './styleds';
import { Label, Input, Button } from '../../bricks/common';
import Switch from './Switch';
import  { Modal, useModal } from '../../components/Modal/Modal';
import { CREATE_ROOM } from '../../store/actionTypes';
import { StateContext } from '../../store/store';

const CreateForm = (props) => {
  const {isShowing, toggle} = useModal(false);
  const [errorMessage, setErrorMessage] = useState("");
  const store = useContext(StateContext);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
        name: store.state.name,
        roomname: e.target[0].value,
        isPublic: !e.target[1].checked,
        allowSpec: e.target[2].checked,
    }
    if(e.target[0].value){
      store.dispatch({
        type: CREATE_ROOM,
        payload: data,
      }).then(p => {
        history.push(`/game/${data.roomname}`);
      })
    }
    else {
      setErrorMessage("Check room name, and try again!");
      toggle();
    }
  }

  useEffect(() => {
    if(store.state.responseStatus === 1)
    setErrorMessage("This room name is used, pick another one!");
  }, [store.state.responseStatus]);

  return (
    store.state.name ? 
    <Wrapper onSubmit={handleSubmit}>
      <Label>Room name: </Label>
      <Input></Input>
      <Label index='1'>Private room: </Label>
      <Switch index={1}></Switch>
      <Label index='2'>Allow spectators: </Label>
      <Switch index={2}></Switch>
      <Button name="button1" type='submit'>Go!</Button>
      <Modal isShowing={isShowing} hide={toggle}>{errorMessage}</Modal>
    </Wrapper>
    :
    <Redirect to={{
      pathname: "/error",
      state: {code : 401}
    }}
    />
  )
}


export default CreateForm;