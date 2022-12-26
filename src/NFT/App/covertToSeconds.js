

function convertToSeconds(hour, minute, seconds) {
     const oneMinute =  60;
     const oneHour =  60 *60;
     const hourTime = hour * oneHour;
     const minuteTime = minute * oneMinute;       
     return hourTime + minuteTime + seconds;
};

export default convertToSeconds;