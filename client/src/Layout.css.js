import styled, { createGlobalStyle } from 'styled-components';
import Paper from '@material-ui/core/Paper';


export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }
`;

export const Page = styled(Paper)`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 70px;
  min-height: calc(100vh - 70px);
  
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex-grow: 1;
  padding: 60px;
`;

