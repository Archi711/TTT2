import styled from 'styled-components';
import { breakPoints } from '../../../utils';
export const GridContainer = styled.section`
  background-color: ${props => props.theme.fontColor}; 
  color: ${props => props.theme.ncColor2};
  display: grid;
  grid-gap: .5em;
  max-width: 80vh;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  @media (max-width : ${breakPoints.mobileBreakpoint}px){
    grid-column: 1 / 3;
    max-width: 100%;
  }
`;
