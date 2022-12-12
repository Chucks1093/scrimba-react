import styled from "styled-components";

const StyledTestBid = styled.div`
     padding: 1rem;
     background: #161515;
     border: 1px solid #ebe7e7;
     color: #ebe7e7;
     width: 21rem;

     & img {
          width: 100%;
          display: block;
          color: #ebe7e7;
          height: 45vh;

     }

     & > div {
          display: flex;
          justify-content: space-between;
          margin: 1rem 0 0;
     }

     & h3 {

     }

     & button {
          width: 100%;
          height: 2.5rem;
     }
`
const Line = styled.div`
     height: 1px;
     width: 100%;
     /* background: #ebe7e7; */
     background-image: linear-gradient(to right, black, white, black);
`

export {StyledTestBid, Line};