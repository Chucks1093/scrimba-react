import styled from "styled-components";

const ModalCover = styled.div`
     height: 100vh;
     position: fixed;
     width: 100%;
     top: 0%;
     left: 0%;
     background-color: #1d221d8f;
     transition: .5s opacity ease;
     z-index: ${(props)=>props.show ? 3 : -1};
     opacity: ${(props)=>props.show ? 1 : 0};
`

const StyledModal = styled.div`
     color: #252424;
     height: 90%;
     width: 60%;
     z-index: 4;
     background-color: #f6f6f9;
     top: 50%;
     left: 50%;
     position: fixed;
     border-radius: .6rem;
     max-width: 29rem;
     min-width: 21rem;
     padding: 0rem;
     max-height: 37rem;
     box-shadow:  0 2rem 3rem rgba(0,0,0,0.4);
     opacity: ${(props)=>props.show ? 1 : 0};


     & > img {
          border-radius: .6rem;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 15%;
     }
     
     
`;

const UserInfo = styled.div`
     & {
          position: absolute;
          top: calc(39% - 3rem);
          left: 50%;
          transform: translateX(-50%);
          
     }
     & img {
          padding: .2rem;
          background-color: white;
          width: 5rem;
          height: 5rem;
          border-radius: 50%;
          object-fit: cover;
          margin: 0 auto;
          display: block;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

     }
     & p:nth-child(2) {
          font-weight: bold;
     }

     & p:nth-child(3) {
          text-align: center;
          font-size: .8rem;
     }



`;

const BiddingInfo = styled.div`
     display: flex;
     justify-content: space-between;
     margin-top: 4.3rem;
     padding: 0 1.6rem;
     &.isWaiting {
          & div:nth-child(2) p:nth-child(1) {
               color: #389979;
          }
     }

     & div:nth-child(1) p:nth-child(1) {
          color: gray;
          
     }
     & div:nth-child(2) p:nth-child(1) {
          color: #e64956;;
          
     }
     & div p:nth-child(1) {
          font-size: .75rem;

     }
     & div p:nth-child(2) {
          font-size: 1.2rem;
          font-weight: 500;
     }

`
     
const BiddingForm = styled.form`
     margin-top: 1.3rem;
     & div:nth-child(1) {
          display: flex;
          justify-content: space-between;
          padding: 0 1.6rem;

     }

     & div:nth-child(2) {
          width: 70%;
          height: 2.6rem;
          display: flex;
          margin: 2rem auto 0;
          border-radius: .75rem;
          border: 1px solid gray;

     }

     & span {
          width: 20%;
          height: 100%;
          display: grid;
          place-items: center;
          margin: 0;
          background: #f0f0f0;
          border-radius: .75rem 0 0 .75rem;
     }

     & input{
          display: inline-block;
          width: 80%;
          height: 100%;
          border: none;
          text-indent: 1rem;
          border-radius: 0 .75rem .75rem 0;
          

     }


     &.failed {
          & div:nth-child(2) {
               border: 2px solid red;
          }
          & input {
               color: red;
          }
     }


     &.success {
          & div:nth-child(2) {
               border: 2px solid #318f46;
          }
          & input {
               color: #19702c;
          }
     }
     & button {
          margin: 1.5rem auto 0;
          width: 70%;
          height: 2.7rem;
          display: block;
          border-radius: .6rem;
          cursor: pointer;
          font-weight: bold;
        color: #edeffd;
          background: #181a1e;

          &:hover {
               background: #0d0e11c3;
          }
          &:active {
               background: #14161a; 
          }
     }
`

export { 
     ModalCover, 
     StyledModal, 
     UserInfo, 
     BiddingInfo,
     BiddingForm
}