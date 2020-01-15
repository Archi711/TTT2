import styled from 'styled-components';
import { breakPoints } from '../../../../utils';


export const Wrapper = styled.section`
  grid-area: RoomsTable;
  display: grid;
  grid-template-columns: minmax(50%, 75%) auto;
  grid-template-rows: 4rem minmax(60%, 80%);
  grid-column-gap: 5px;
  grid-row-gap: 15px;
`;

export const Heading = styled.div`
  display: inline-flex;
  align-items: center;
  height: 100%;
  font-size: 2em;
  padding: .3rem;
  grid-area: 1 / 1 / 2 / 4;;
`;

export const Button = styled.button`
  grid-area:  1 / 4 / 2 / 5;
  background-color: ${props => props.theme.ndColor1};
  color: ${props => props.theme.fontColor2};
  border: none;
  border-radius: .3em;

  cursor: pointer;
  &:hover{
    background-color: ${props => props.theme.ndColor2};
  }
`;

export const Table = styled.div`
  grid-area: 2 / 1 / 3 / 5;
  max-height: 40vh;
  overflow-x: hidden;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 5fr minmax(15%,20%) minmax(15%,20%);
  &:hover{
    background-color: ${props => !props.heading ? props.theme.secondaryBColor : 'transparent'};
  }

  @media (max-width: ${breakPoints.mobileBreakpoint}px){
    grid-template-columns: minmax(40%, 70%) minmax(15%,30%) minmax(15%,30%);
  }
`;

export const TableContent = styled.span`
  border-right: 1px solid ${props => props.theme.fontColor2};
  border-bottom: ${props => props.heading ? "1px solid "+props.theme.fontColor2 : "none"};
  @media (max-width: ${breakPoints.mobileBreakpoint}px){
    font-size: 0.8em;
  }
  padding: .5rem;
  :last-child{
    border-right: 0;
  }
`;