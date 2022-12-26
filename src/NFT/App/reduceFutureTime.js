const format = (value) =>value < 10 ? `0${value}` : value;

function reduceFutureTime(item){
     const waitTime = 17;
     const startSeconds = 1671983758;
     const currentSeconds = Math.floor(new Date().getTime()/1000);
     const distanceSeconds = currentSeconds - startSeconds;
     const futureSeconds = convertToSeconds(item.hour,item.minute, item.seconds) + waitTime; 
     const tempSeconds = futureSeconds- Math.abs(((futureSeconds + distanceSeconds) - futureSeconds) % futureSeconds);
     let total = tempSeconds==futureSeconds ? 0 : tempSeconds;
     if (total >= waitTime) {
          const totalSeconds = getSecondMinuteAndHour(Math.abs(total-waitTime));
          return {...totalSeconds,isWaiting: false};

     } else {
          const totalSeconds = getSecondMinuteAndHour(Math.floor(total%waitTime));
          return {...totalSeconds,isWaiting: true};
     }
};

function getSecondMinuteAndHour(value) {
     const remainingHour = Math.floor(value/3600);
     const remainingMinute = Math.floor((value%3600) / 60);
     const remainingSeconds = Math.floor(value%60);
     return {
          hour: format(remainingHour),
          minute: format(remainingMinute),
          seconds: format(remainingSeconds)
     }
}



function convertToSeconds(hour, minute, seconds) {
     const oneMinute =  60;
     const oneHour =  60 *60;
     const hourTime = hour * oneHour;
     const minuteTime = minute * oneMinute;       
     return hourTime + minuteTime + seconds;
};

export default reduceFutureTime;