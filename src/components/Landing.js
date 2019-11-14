import socket from '../api';
import styled from 'styled-components';
import React, {useState} from 'react';

const Just = styled.h5`
  font-style: italic;
  font-size: 90%;
  text-align: center;
  padding: .2em 1em;
  
  margin: .5em;
  font-weight: 100;

`;
const Head = styled.h2`
  padding: .1em .5em;
  margin: 0% 5%;
  font-size: 10vh;
  color : #232323;
  border: 1px #FFF solid;
  border-radius: 5px;
  background-color: #fff3fb;
  color: #002b40;
  text-align: center;
  font-weight: 100;
  @media (max-width: 600px){
      font-size: 6vh;
      padding: .01em .2em;
  }
`;

const MidSection = styled.form`
  margin: 5% 20%;
  text-align: center;
  background-color: #d0d2cc;
  color: #894d28;
  @media (max-width: 600px) {
    margin: 5% 5%;
  }
`;

const Input = styled.input`
  margin: 5%;
  width: 80%;
  border: none;
  font-size: 5vh;
  padding: .4em;
  :nth-child(2){
    margin: 0% 5% 5%;;
  }
  @media (max-width: 600px){
    font-size: 4vh;
}
`;

const Button = styled.button`
  position: 'absolute';
  bottom: 0;
  width: 100%;
  font-size: 4vh;
  height: 3em;
  background-color: #002b40;
  color: #fff3fb;
  cursor: pointer;
  :hover {
    background-color: #001a30;
  }
`;

const Landing = (props) => {
  let[,setState] = useState();

  async function l(e){
    e.preventDefault();
    let data = {
      name : e.target[0].value,
      room : e.target[1].value
    }
    socket.emit('login', data);

    socket.on('success', () => {
      socket.name = data.name;
      socket.room = data.room;
      props.authorized(true);
      setState({})
    });
    socket.on('room unavailable', () => {
      alert("You tried to enter busy room! Try another one."); 
    });
  }

  if(socket.name == null) {
    return (
      <>
        <Just>just...</Just>
        <Head>Tic tac toe</Head>
        <MidSection onSubmit={l}>
          <Input placeholder="Your nick: " data='nick'></Input>
          <Input placeholder="Room: " data='room'></Input> 
          <Button type='submit'>Go!</Button>
        </MidSection>
        
      </>
    )
  }
  else return 0;
}



export default Landing;