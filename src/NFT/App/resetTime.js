

function resetTime(data,index) {
     return new Promise((resolve, reject)=>{
          setTimeout(()=>{
               const oldTime = data[index].time;
               console.log(oldTime)
               resolve(oldTime)
          }, 7000)
     })
};

export default resetTime;