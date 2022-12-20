

function reduceTime(item){
     const totalSeconds = convertToSeconds(item.hour,item.minute, item.seconds) - 1;
     // console.log("totalSeconds", totalSeconds);
     const remainingHour = Math.floor(totalSeconds/3600);
     const remainingMinute = Math.floor((totalSeconds%3600) / 60);
     const remainingSeconds = Math.floor(totalSeconds%60);
     return {
          hour: remainingHour,
          minute: remainingMinute,
          seconds: remainingSeconds
     }
};   

function convertToSeconds(hour, minute, seconds) {
     const oneMinute =  60;
     const oneHour =  60 *60;
     const hourTime = hour * oneHour;
     const minuteTime = minute * oneMinute;
     return hourTime + minuteTime + seconds;
};

export default reduceTime;