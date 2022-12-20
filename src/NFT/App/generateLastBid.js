const generateLastBid =()=> {
     const lastBid = (Math.random() * 1.1).toFixed(2);
     return lastBid;
};

export default generateLastBid;