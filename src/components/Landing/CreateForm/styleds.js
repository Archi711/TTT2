import styled from 'styled-components';

export const Wrapper = styled.form`
  display: grid;
  grid-gap: .5em;
  grid-template-columns: minmax(20%, auto);
  grid-template-areas:
    "label label label label label"
    "textField textField textField textField textField"
    "label1 switch1 . label2 switch2"
    "button1 button1 button1 button1 button1"
`;

