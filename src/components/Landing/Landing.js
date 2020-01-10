import React, { useState } from 'react';
import {Just, Head, MidSection, Input, Button, Label} from './styleds';
import Modal from '../Modal/Modal';
import useModal from '../Modal/useModal';
import JoinForm from './JoinForm';
import CreateForm from './CreateForm';



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
    <>
      <Label htmlFor="name">Your nick: </Label>
        <Input data='name' id="name"></Input>
        <Button onClick={handleClick('join')} name="joinButton">Join room</Button>
      <Button onClick={handleClick('create')}  name="createButton">Create room</Button>
    </>;

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