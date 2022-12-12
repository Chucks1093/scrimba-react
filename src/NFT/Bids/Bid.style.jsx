
import styled from "styled-components";

const StyledBid = styled.div`
     width: 21rem;
     position: relative;
     border-radius: .6rem;
     background: #202528;
     color: #edeffd;
     padding: 1rem;
     box-shadow:  0 2rem 3rem rgba(0,0,0,0.4);

     & > img {
          width: 100%;
          height: 45vh;
          object-fit: cover;
          border-radius: .6rem;

     }

     & > div:nth-child(2) {
          position: absolute;
          top: 2rem;
          right: 2rem;
          color: white;
          font-weight: 500;
          background: #81818162;
          border-radius: .35rem;
          backdrop-filter: blur(20px);
          display: flex;
          align-items: center;
          padding: .7rem;
          box-shadow: 0 .6rem 1rem rgba(0,0,0,0.4);

          & span {
               margin-left: .3rem;
               font-size: .8rem;
          }

     }

     & > div:nth-child(3) {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: .5rem 0 1rem 0;

          & img {
              width: 2rem;
              height: 2rem;
              object-fit: cover;
              border-radius: 50%;
          }

          & h3{
               font-size: 1.3rem;

          }
     }


     & > p {
          margin-bottom: .8rem ;

     }


`;


const BiddingState = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     margin: 1.5rem 0 0 0;
     color: #c8c9cc;
     
     & > div{
          display: flex;
          justify-content: space-between;
          align-items: center;
     }
     & p:nth-child(1) {
          margin: 0;
          font-size: .7rem;
     }
     & p:nth-child(2) {
          margin: 0;
          font-size: 1rem;
          font-weight: bold;
          
     }
     
     & button{
          height: 2rem;
          display: block;
          width: 9rem;
          border-radius: .3rem;
          background: #ffffff;
          font-weight: bold;
          box-shadow:  0 1rem 1rem rgba(0,0,0,0.4);
          border: 1px solid white;
     }
     
     
`;
const clock = {
     fontWeight: "bold",
     fontSize: "1rem"

}

const lastBid = {
     fontSize: "2rem",
     order: "1",
}

export {
     StyledBid, 
     BiddingState, 
     clock,
     lastBid
}