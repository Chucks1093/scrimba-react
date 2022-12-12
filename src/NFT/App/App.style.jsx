import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const StyledApp = styled.div`
     & h2 {
          text-align: center;
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



     }

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
     & span {
          color: #ff4e4e;
     }
`
const BidContainer = styled.div`
     margin-top: 3rem;
     padding: 0 0 0 4rem;
     /* transform: translateX(10%); */
`

const styledSearch = {
     width: "3rem",
     height: "3rem",
     borderRadius: ".8rem",
     padding: ".6rem",
     color: "#edeffd",
     backgroundColor: "#353a3d",
     boxShadow: " 0 2rem 3rem rgba(0,0,0,0.4)"
};

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
     Account
};