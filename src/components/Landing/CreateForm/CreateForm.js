import React, { useState, useContext, useEffect } from 'react';

import { Wrapper } from './styleds';
import { Label, Input, Button } from '../styleds';
import Switch from './Switch';
import useModal from '../../Modal/useModal';
import Modal from '../../Modal/Modal';
import { CREATE_ROOM } from '../../../store/actionTypes';
import { StateContext } from '../../../store/store';

const CreateForm = (props) => {
  const {isShowing, toggle} = useModal(false);
  const [errorMessage, setErrorMessage] = useState("");
  const store = useContext(StateContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    e.persist();
    console.log(e);
    if(e.target[0].value){
      store.dispatch({
        type: CREATE_ROOM,
        payload: {
          username: props.username,
          name: e.target[0].value,
          isPublic: !e.target[1].checked,
          allowSpec: e.target[2].checked,
        }
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
  )
}


export default CreateForm;