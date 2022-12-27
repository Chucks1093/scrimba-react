import styled from "styled-components";

const StyledPhone= styled.div`
     display: none;
     @media screen and (max-width : 800px) {
          display: block;
          height: 100vh;
          color: white;
          text-align: center;
          position: relative;
          background-color: #212931;

          & div {
               position: absolute;
               top: 18%;
               left: 50%;
               transform: translateX(-50%);
               width: 100%;
          }

          & img {
               object-fit: contain;
               height: 15rem;
               margin: 0 auto;
               transform: translateX(10%);
          }

          & h3 {
               text-align: center;
               font-size: 1rem;
               width: 70%;
               margin: 1rem auto;
               font-weight: 450;
               color: #dfd3d3;
          }

          & span{
               display: block;
               margin-left: .4rem;
          }

          & button {
               display: flex;
               justify-content: center;
               align-items: center;
               margin: 1.7rem auto 0;
               width: 9rem;
               height: 2.8rem;
               border-radius: .8rem;
               border: none;
               background-color: #cacfe2;
               box-shadow: 0 1rem 2rem #27262666;
               &:active {
                    background-color: #eaecf1;
                    box-shadow: 0 0rem 3rem rgba(0,0,0,0.4);  
               }
          }
          
     
     

     }


`
export default StyledPhone;