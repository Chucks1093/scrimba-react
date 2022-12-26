import convertToSeconds from "./covertToSeconds";

const generateLastBid =(maxTime, remainingTime)=> {
     const remainingSeconds = convertToSeconds(Number(remainingTime.hour), Number(remainingTime.minute), Number(remainingTime.seconds));
     const maxSeconds = convertToSeconds(Number(maxTime.hour), Number(maxTime.minute), Number(maxTime.seconds));
     const lostTime = maxSeconds - remainingSeconds;
     const value = Math.floor(lostTime/30);
     return (value * (2.54/60)).toFixed(2);
};

export default generateLastBid;