import React from 'react';

import { SwitchCheckBox, Wrapper } from './styleds';
import { Label, Input, Button } from '../styleds';

const CreateForm = (props) => {
  
  return (
    <Wrapper>
      <Label>Room name: </Label>
      <Input></Input>
      <Label index='1'>Private room: </Label>
      <SwitchCheckBox index='1'></SwitchCheckBox>
      <Label index='2'>Allow spectators: </Label>
      <SwitchCheckBox index='2'></SwitchCheckBox>
      <Button name="button1">Go!</Button>
    </Wrapper>
  )
}


export default CreateForm;