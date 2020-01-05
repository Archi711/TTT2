import styled from 'styled-components';
import { breakPoints } from '../../utils';

export const GridContainer = styled.main`
  max-width: 90vw;
  min-height:100vh;
  padding: 1vw;
  grid-row-gap: 2vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 7fr 3fr;
  grid-template-rows: 7fr 3fr;
  @media (max-width: ${breakPoints.mobileBreakpoint}px){
    grid-template-columns: 1fr;
  }
`;