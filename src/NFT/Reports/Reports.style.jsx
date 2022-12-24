import styled from "styled-components";

const ReportCover = styled.div`
     height: 100vh;
     position: fixed;
     width: 100%;
     top: 0%;
     left: 0%;
     background-color: #1d221d8f;
     transition: .5s opacity ease;
     z-index: ${(props)=>props.show ? 1 : -1};
     opacity: ${(props)=>props.show ? 1 : 0};
     
`

const StyledReport = styled.div`
     width: 90%;
     position: fixed;
     background: #242d35;
     color: #edeffd;
     z-index: 2;
     height: 70vh;
     left: 50%;
     top: 50%;
     padding: 1.7rem 1rem 1rem 1.4rem;
     min-width: 22rem;
     border-radius: .7rem;
     max-width: 37rem;
     overflow-y: scroll;
     opacity: ${(props)=>props.show ? 1 : 0};

     &::-webkit-scrollbar {
          background-color: #3e4449;
          /* border-radius: .7rem; */
          position: relative;
          right: 10%;
     }

     &::-webkit-scrollbar-thumb {
          background-color: #f7b373;
          width: 2rem;
          height: 5rem;
     }
     
     

     & > div:nth-child(1) {
          display: flex;
          justify-content: space-between;
     }
`
const Stats = styled.div`
     & > div:nth-child(1) {
          display: grid;
          grid-template-columns: 2.5fr repeat(3, 1fr);
          gap: .7rem;
          margin: 2rem 0  1rem 0;
     }
     & > div:nth-child(2) {
          /* overflow-y: scroll; */

     } 
`
export {
     ReportCover,
     StyledReport,
     Stats
}