import styled from 'styled-components';

export const Just = styled.h5`
  font-style: italic;
  font-size: 90%;
  text-align: center;
  padding: .2em 1em;
  
  margin: .5em;
  font-weight: 100;

`;
export const Head = styled.h2`
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

export const MidSection = styled.form`
  margin: 5% 20%;
  text-align: center;
  background-color: #d0d2cc;
  color: #894d28;
  @media (max-width: 600px) {
    margin: 5% 5%;
  }
`;

export const Input = styled.input`
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

export const Button = styled.button`
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

