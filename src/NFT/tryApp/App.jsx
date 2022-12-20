import styled from "styled-components";
import { useState, useEffect } from "react";
import getCurrentDate from "../App/reduceTime";

const Count = styled.p`
     font-size: 5rem;

`

function tryApp() {
     const [countDown, setCountDown] = useState({hour:2, minute: 30, seconds: 50});
     

     useEffect(()=>{
          setInterval(()=>{
               setCountDown((value)=>{
                    const newTime = getCurrentDate(value);
                    return newTime;
                    
               })
          }, 1000)
     }, [])

     return (
          <div><Count>{countDown.hour} : {countDown.minute} : {countDown.seconds}</Count></div>
     )
};

export default tryApp;