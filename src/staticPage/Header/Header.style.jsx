import styled from "styled-components";

const StyledHeader = styled.header`
     background-color: #1c1f24;
     color: #edeffd;
     height: 12vh;
     display: flex;
     align-items: center;
     justify-content: center;
     
     & img {
          margin-right: .7rem;
          

     }

     & nav {
          width: 94%;

     }

     & li {
          display: flex;
          align-items: center;
          
     }
     & ul {
          padding: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          list-style-type : none;
     }

     & h3{
          color: #00D8FF
     }

`


export { StyledHeader };