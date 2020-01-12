import React, { useState } from 'react';
import {Just, Head, MidSection, Input, Button, Label, Wrapper} from './styleds';
import Modal from '../Modal/Modal';
import useModal from '../Modal/useModal';
import JoinForm from './JoinForm/JoinForm';
import CreateForm from './CreateForm/CreateForm';



const Landing = (props) => {
    const { isShowing, toggle } = useModal();
    const [ errorMessage, setError ] = useState("");
    const [ name, setName ] = useState("");
    const [ shownForm, setShownForm ] = useState("main");


    const handleClick = (type) => {
      return (e) => {
        e.preventDefault();
        let data = {
          name: e.target.form[0].value,
        }
        if (data.name === ""){
          setError("Check your name, and try again!");
          if(!isShowing) toggle();
        }
        else {
          setName(data.name);
          setShownForm(type);
        }
      }
    }

    let content = 
    <Wrapper>
      <Label htmlFor="name">Pick your nickname: </Label>
        <Input data='name' id="name"></Input>
        <Button onClick={handleClick('join')} name="button1">Join room</Button>
      <Button onClick={handleClick('create')}  name="button2">Create room</Button>
    </Wrapper>;

    if(shownForm !== "main")
      content = shownForm === "join" ? <JoinForm username={name} /> : <CreateForm username={name}/>;

    return (
      <>
        <Just>just...</Just>
        <Head>Tic tac toe</Head>
        <MidSection content={shownForm}>
          {content}
        </MidSection>
        <Modal isShowing={isShowing} hide={toggle}>{errorMessage}</Modal>
      </>
    )
}



export default Landing;