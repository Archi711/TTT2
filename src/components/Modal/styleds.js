
import styled from 'styled-components';

export const Container = styled.section`
  ${
    props => props.isFloating ? 
    `
      
    
    `
    :
    `position: absolute;
    bottom: 0;
    width: 100vw;
    max-width: 100vw;`

  }
  
  margin: 0 auto;
  padding: 2em;
  background-color: ${props => props.theme.secondaryColor};
  color: ${props => props.theme.fontColor};
`;