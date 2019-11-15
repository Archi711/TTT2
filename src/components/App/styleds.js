import styled from 'styled-components';

export const GridContainer = styled.main`
  max-width: 100vw;
  display: grid;
  grid-template-columns: 70vw 30vw;
  grid-template-rows: 80vh 20vh;
  @media (max-width: 600px){
    grid-template-columns: 100vw;
  }
`;