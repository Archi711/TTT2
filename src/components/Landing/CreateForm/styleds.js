import styled from 'styled-components';

export const Wrapper = styled.section`
  grid-area: wrapper;
  display: grid;
  grid-gap: .5em;
  grid-template-areas:
    "label label label label label"
    "textField textField textField textField textField"
    "label1 switch1 . label2 switch2"
    "button1 button1 button1 button1 button1"
`;

export const SwitchCheckBox = styled.input.attrs({type: 'checkbox'})`
  grid-area: switch${props => props.index};
  margin: 50% auto;
  padding: .5em;
`;

