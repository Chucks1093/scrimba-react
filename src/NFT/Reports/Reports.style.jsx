import styled from "styled-components";

const ReportCover = styled.div`
     height: 100vh;
     position: fixed;
     width: 100%;
     top: 0%;
     left: 0%;
     background-color: #1d221d8f;
     z-index: 1;
     display: ${(props)=>props.show ? "block" : "none"};
     
`

const StyledReport = styled.div`
     width: 75%;
     position: fixed;
     background: #242d35;
     color: #edeffd;
     z-index: 2;
     height: 27rem;
     left: 50%;
     top: 50%;
     transform: translate(-50%, -50%);
     padding: 1.7rem 1rem 1rem 1.4rem;
     border-radius: .7rem;
     max-width: 37rem;
     display: ${(props)=>props.show ? "block" : "none"};
     overflow-y: scroll;
     
     
     
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
`
export {
     ReportCover,
     StyledReport,
     Stats
}