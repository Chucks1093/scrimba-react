import styled from "styled-components";

const StyleBidReport = styled.div`
     display: grid;
     grid-template-columns: 2.5fr repeat(3, 1fr);
     gap: .7rem;
     align-items: center;
     margin-top: 1.5rem;

     & div:nth-child(1) {
          display: flex;
          justify-content: space-between;
          align-items: center;

          & div {
               margin-right: auto;
          }

          & h4 {
               font-size: .9rem;
          }

          & p {
               font-size: .8rem;
          }
          
          & img {
               height: 3.2rem;
               width: 3.2rem;
               border-radius: 50%;
               object-fit: cover;
               margin-right: 1rem;
          }
     }

     & div:nth-child(2), & div:nth-child(3) {
          font-size: .8rem;

     }

`

const upArrow = {
     color: "green",
     fontSize: "1.7rem",
     borderRadius: "50%",
     display: "inline-block",
     backgroundColor: "white"
};

const downArrow = {
     ...upArrow,
     color: "red",
     display: "none"

}

export {StyleBidReport, downArrow, upArrow};