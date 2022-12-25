// 1671907837
function reduceFutureTime(item){
     const waitTime = 10;
     const startSeconds = 1671983758;
     const currentSeconds = Math.floor(new Date().getTime()/1000);
     const distanceSeconds = currentSeconds - startSeconds;
     const futureSeconds = convertToSeconds(item.hour,item.minute, item.seconds) + waitTime; 
     const tempSeconds = futureSeconds- Math.abs((futureSeconds - distanceSeconds) % futureSeconds);
     let total = tempSeconds==futureSeconds ? 0 : tempSeconds;
     if (total >= waitTime) {
          const totalSeconds = Math.abs(total-waitTime)
          const remainingHour = Math.floor(totalSeconds/3600);
          const remainingMinute = Math.floor((totalSeconds%3600) / 60);
          const remainingSeconds = Math.floor(totalSeconds%60);
          return {
               hour: remainingHour,
               minute: remainingMinute,
               seconds: remainingSeconds
          }

     } else {
          const totalSeconds = Math.floor(total%waitTime);
          const remainingHour = Math.floor(totalSeconds/3600);
          const remainingMinute = Math.floor((totalSeconds%3600) / 60);
          const remainingSeconds = Math.floor(totalSeconds%60);
          return {
               hour: remainingHour,
               minute: remainingMinute,
               seconds: remainingSeconds
          }
     }
};   

function convertToSeconds(hour, minute, seconds) {
     const oneMinute =  60;
     const oneHour =  60 *60;
     const hourTime = hour * oneHour;
     const minuteTime = minute * oneMinute;       
     return hourTime + minuteTime + seconds;
};

export default reduceFutureTime;