

function resetTime(data,index) {
     return new Promise((resolve, reject)=>{
          setTimeout(()=>{
               const oldTime = data[index].time;
               resolve(oldTime)
          }, 10000)
     })
};

export default resetTime;