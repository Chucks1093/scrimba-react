import styled from "styled-components";

const StyledFooter = styled.div`
     color: white;
     display: flex;
     align-items: center;
     justify-content: space-around;
     width: 30%;
     min-width: 10rem;
     margin: .5rem auto 1rem;

     & a {
          font-size: 1.1rem;
          width: 3rem;
          color: #dddddd;
          height: 2.5rem;
          border-radius: .5rem;
          background: #2a3033;
          display: grid;
          text-decoration: none;
          place-items: center;
          /* box-shadow: 0rem .6rem .6rem rgba(0,0,0,0.4); */
          cursor: pointer;

          &:hover {
               background: #45494b
          }
     }

`
export default StyledFooter;