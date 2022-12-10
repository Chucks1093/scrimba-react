import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

const StyledApp = styled.div`
     width: 30rem;
     margin: 4rem auto 0rem;
     box-shadow: 0 2rem 3rem rgba(0,0,0,0.4);

     * {
          box-sizing: border-box;
          font-family: Segoe UI;

     };

     


`
const StyledBody = createGlobalStyle`
     body{
          background-color: tomato;
     }
`
export { StyledApp, StyledBody } 