import styled from "styled-components";
import { useState, useEffect } from "react";
import { convertToSeconds, reduceFutureTime } from "./reduceFutureTime";

const Count = styled.p`
     font-size: 5rem;

`
const auctionTime = {hour:5, minute: 39, seconds: 0}
function tryApp() {
     const [countDown, setCountDown] = useState(auctionTime);

     function reduceTime() {  
          setCountDown(()=>{
               const newTime = reduceFutureTime(auctionTime);
               return newTime;
          })
     }
     
     useEffect(()=>{
          setInterval(()=>{
               setCountDown(()=>{
                    const newTime = reduceFutureTime(auctionTime);
                    return newTime;
                    
               })
          }, 1000)
     }, [])

     return (
          <div><Count>{countDown.hour} : {countDown.minute} : {countDown.seconds}</Count>

          <button>Reduce time</button>
          </div>
          
     )
};

export default tryApp;