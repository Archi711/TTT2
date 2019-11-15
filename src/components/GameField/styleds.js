import styled from 'styled-components';

export const GridContainer = styled.section`
  background-color: #323131;
  color: #cb95aa;
  display: grid;
  grid-gap: .5em;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;

export const Field = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #000;
  font-size: 5rem;
  text-align: center;
`;