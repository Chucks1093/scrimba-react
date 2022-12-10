import styled from "styled-components";



const StyledMain = styled.div`
     & {
          position: relative;
          overflow: hidden;
          color: white;
          padding: 2rem 0 5rem 1rem;   
          background: #1f1c1c;
     };


     & ul {
          width: 96%;
          margin: 2rem 0 0 0;

     };

     & li::before{
          content: "";
          display: inline-block;
          background-color: #00b7ff;
          height: .7rem;
          width: .7rem;
          border-radius: 50%;
          transform: translate(-100%, 20%);

     }

     & li {
          margin-bottom: 1rem;
          font-size: .9rem;
          list-style-type: none;
     }

 

     & .back-logo {
          position: absolute;
          top: 50%;
          height: 13rem;
          left: 100%;
          display: block;
          filter: grayscale(2);
          transform: translate(-50%, -50%) rotate(45deg);
          opacity: 0.2;

     };


`;
export default StyledMain;