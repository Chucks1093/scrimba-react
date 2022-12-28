
import styled from "styled-components";

const StyledBid = styled.div`
     width: 21rem;
     position: absolute;
     top:10%;
     border-radius: .8rem;
     background: #202528;
     color: #edeffd; 
     padding: ${(props)=>props.x ==1 ? "1rem" : "1rem"};
     box-shadow:  0 1.7rem 1.7rem rgba(0,0,0,0.4);

     &.active {
          /* background: #e75a5a; */
          top: 5%;

          & > img {
               height: 52vh;
          }
     }

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
          justify-content: center;
          align-items: center;
          margin: .5rem 0 1rem 0;

          & img {
              width: 1.3rem;
              height: 1.3rem;
              object-fit: cover;
              border-radius: 50%;
          }
          
          & h3{
               margin-right: .9rem;
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
          display: flex;
          justify-content: center;
          align-items: center;
          width: 9rem;
          border-radius: .3rem;
          background: #ffffff;
          font-weight: bold;
          box-shadow:  0 .7rem 1rem rgba(0,0,0,0.4);
          border: 1px solid white;
          cursor: pointer;

          &:active {
               background: #a39d9d;
          }
     }
     
     
`;

const bidBtnSymbol = {
    display: "block",
    marginLeft: ".5rem",
    color: "#2b2b2b"

}
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
     lastBid,
     bidBtnSymbol
}