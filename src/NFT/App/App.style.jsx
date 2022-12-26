import styled from "styled-components";
import { createGlobalStyle } from "styled-components";



const StyledApp = styled.div`
     overflow-x: hidden;
     position: relative;
     display: block;
     @media screen and (max-width : 800px) {
          display: none;

     }
     & h2 {
          text-align: center;
     }
     & > img {
          margin: 0 auto;
          position: absolute;
          top: 50%;
          left: 50%;

          object-fit: contain;
          width: 13%;
          transform: translate(-50%, -50%);
     }
`


const TopInfo = styled.div`
     & {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          position: relative;
          padding: 0 1rem;
          margin-top: 1.5rem;
     }

     & > div {
          background: #202528;
          border-radius: .5rem;
          width: 25%;
          color: #edeffd;
          border: 1px solid #edeffd7f;

     }

     & > div > p {
          font-size: .6rem;
          text-align: center;
          margin-top: .4rem;

     }


     & > img {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          object-fit: cover;

     }

  
`

const ButtonContainer = styled.div`
     position: absolute;
     height: 6rem;
     width: 100%;
     top: 50%;
     left: 0%;
     transform: translateY(-50%);
     display: flex;
     justify-content: space-between;
     align-items: center;

     &  div {
          height: 90vh;
          width: 13vh;
          display: grid;
          place-items: center;
          opacity: 0;
          transition: .5s opacity ease;

          &:hover {
               opacity: 1;
          }
     }

     &  span {
          color: #888383;
          object-fit: contain;
          width: fit-content;
          height: fit-content;
          padding: 0;
          border-radius: 1rem;
          font-size: 4rem;
          background-color: #3d3b3b;
          display: grid;
          place-items: center;
          cursor: pointer;
          box-shadow:  0 2rem 3rem rgba(0,0,0,0.4);

          &:hover {
               color: #cecbcb;
          }

          &:active {
               color: #9e9797;
               box-shadow:  0 1rem 3rem rgba(0,0,0,0.4);

          }
     }
`;

const Account = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     margin: .1rem 0 .4rem;

     &  img {
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
          display: block;



     };

     & p {
          font-weight: bold; 
          margin-left: .2rem;
     }

`
const Comment = styled.p`
     text-align: center;
     margin: 3rem 0 0 0;
     color: #edeffd;
     font-size: .75rem;
     position: absolute;
     bottom: 2%;
     width: 100%;
     & span {
          color: #ff4e4e;
     }
`
const BidContainer = styled.div`
     padding: 6rem 0 0 0;
     background: transparent;
     position: relative;
     padding: 0 0 0 3rem;
     display: flex;                
     height: calc(45vh + 20rem);
`

const styledSearch = {
     width: "3rem",
     height: "3rem",
     borderRadius: ".8rem",
     padding: ".6rem",
     zIndex: "1",
     color: "#edeffd",
     backgroundColor: "#353a3d",
     boxShadow: " 0 2rem 3rem rgba(0,0,0,0.4)"
};

const Phone = styled.h3`
     display: none;
    @media screen and (max-width : 800px) {
     display: block;
     color: white;
     text-align: center;
     position: absolute;
     left: 50%;
     top: 50%;
     transform: translate(-50%, -50%);
     
     

}

`

const StyledBody = createGlobalStyle`
     body{
          background-color: #181a1e;
     }

     * {
          box-sizing: border-box;
          font-family: Segoe UI;
          margin:0;
     }


`

export {
     StyledApp, 
     StyledBody, 
     TopInfo, 
     BidContainer, 
     styledSearch,
     Comment,
     Account,
     ButtonContainer,
     Phone
};