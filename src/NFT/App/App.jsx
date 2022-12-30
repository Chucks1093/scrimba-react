import { 
     StyledApp, 
     StyledBody, 
     TopInfo, 
     BidContainer ,
     styledSearch,
     Account,
     ButtonContainer,
} from "./App.style";
import Modal from "../Modal/Modal";
import { IoIosStats } from "react-icons/io";
import Bid from "../Bids/Bid";
import Reports from "../Reports/Reports";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import data from "./data";
import resetTime from "./resetTime";
import generateLastBid from "./generateLastBid";
import getLocalStorage from "../Reports/getLocalStorage";
import reduceFutureTime from "./reduceFutureTime";
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from "react-icons/bs";
import Phone from "../Phone/Phone";
import Footer from "../Footer/Footer";



function App(){
     const [nftData, setnftData] = useState(data);
     const [balance, setBalance] = useState(9.17495);
     const [showModal, setShowModal] = useState
     ({report:false, bid: false});
     const [modalID, setModalID] = useState(0);
     const [reportItems, setReportItems] = useState(getLocalStorage);
     const [position, setPosition] = useState(0);

     // Move Cards with left and right key
     const movePosition=(e)=>{
          const btn = e.currentTarget.id;
          setPosition((value)=>{
               if (e.keyCode == "37" || btn === "leftBtn"){
                    return Number(value + 1);
               }else if (e.keyCode == "39" || btn === "rightBtn"){
                    return Number(value - 1)
               }else {
                    return value;
               }
          })
     };

     // Reduce auction time every second.
     useEffect(()=>{
          setInterval(()=>{
               setnftData((value)=>{
                    return value.map((item, i)=>{
                         if (item.time.hour==0 && item.time.minute==0 && item.time.seconds==0 && !item.time.isWaiting) {
                              return item;
                         } else {
                              const newTime = reduceFutureTime(data[i].time);
                              return {
                                   ...item,
                                   time: {
                                        hour: newTime.hour,
                                        minute: newTime.minute,
                                        seconds: newTime.seconds,
                                        isWaiting: newTime.isWaiting
                                   }
                              };   
                         }
                    }) 
               })
          }, 1000)  
     }, [])

     // Update bidding Status and bidding stake of local storage items every second.

     useEffect(()=>{
          nftData.map((item, i)=> {
               const storedNfts = getLocalStorage();
               const newStoredNfts = storedNfts.map((value)=>{
                    const currentDate= Math.floor((new Date().getTime()/1000));
                    
                    if (Number(currentDate) >= Number(value.bidEndingTime)) {
                         value.sold = true;
                         let lastBid = generateLastBid(data[value.id].time, {hour: 0, minute: 0, seconds: 0})
                         lastBid = Number(lastBid);
                         value.amount = Number(value.amount);
                         value.amount >= lastBid ? value.purchased = true : value.purchased = false;
                    } else if (Number(currentDate) < Number(value.bidEndingTime)) {
                         if ( Number(i) == Number(value.id)) {
                              const remainingTime = item.time;
                              let lastBid = generateLastBid(data[value.id].time, remainingTime);
                              value.amount = Number(value.amount);
                              lastBid = Number(lastBid)
                              if (value.amount <= lastBid) {
                                   value.purchased = false;
                              } else  if (value.amount >= lastBid) {
                                   value.purchased = true;
                              }
                         }
                    }
                    return value;
               })
               localStorage.setItem("nft", JSON.stringify(newStoredNfts))
               setReportItems(newStoredNfts)
          })
     },[nftData])
     
    

     //Reset the time 
     useEffect(()=>{
          nftData.map((item, i)=> {
               if (item.time.hour==0 && item.time.minute ==0 && item.time.seconds ==2 && !item.time.isWaiting) {
                    resetTime(data, i).then((value) => {
                         setnftData((allItem)=>{
                              let restoredTime = allItem[i];
                              restoredTime.time = reduceFutureTime(value);
                              return allItem;
                         })
                    })
               }
          })
     }, [nftData])

     //Restore the time and update the lastbid
     useEffect(()=>{
          setnftData((value)=>{
               return value.map((item, i)=>{
                    if (item.time.hour==0 && item.time.minute==0 && item.time.seconds==0 && !item.time.isWaiting) {
                         return item;
                    } else {
                         const newTime = reduceFutureTime(data[i].time);
                         return {
                              ...item,
                              time: {
                                   hour: newTime.hour,
                                   minute: newTime.minute,
                                   seconds: newTime.seconds,
                                   isWaiting: newTime.isWaiting
                              }
                         };   
                    }
               }) 
          })
          setnftData((value)=> {
               return value.map((item, index)=>{
                    if (item.time.isWaiting) {
                         return {
                              ...item,
                              lastBid: 0
                         }
                    } else if (!item.time.isWaiting) {
                         const maxTime = data[index].time;
                         const remainingTime = item.time;
                         const lastBid = generateLastBid(maxTime, remainingTime);
                         return {
                              ...item,
                              lastBid: lastBid

                         }
                    }
               })
          })

     }, [])

     // generate last bid value
     useEffect(()=>{
          setInterval(()=>{
               setnftData((value)=> {
                    return value.map((item, index)=>{
                         if (item.time.isWaiting) {
                              return {
                                   ...item,
                                   lastBid: 0.00
                              }
                         } else if (!item.time.isWaiting) {
                              const maxTime = data[index].time;
                              const remainingTime = item.time;
                              const lastBid = generateLastBid(maxTime, remainingTime);
                              return {
                                   ...item,
                                   lastBid: item.lastBid >= lastBid ? item.lastBid : lastBid

                              }
                         }
                    })
               })
          }, 5000)
     }, [])

     return (
          <div>
               <Phone />
               <StyledApp>
                    <Modal 
                         isModalActive={showModal}
                         setModalState={setShowModal}
                         modalID={modalID}
                         nftData={nftData}
                         setBalance={setBalance}
                         balance={balance}

                    />
                    <Reports
                         isModalActive={showModal}
                         setModalState={setShowModal} 
                         reportItems={reportItems}
                         setReportItems={setReportItems}
                    />
                    <StyledBody />
                    <TopInfo>
                         <IoIosStats 
                              onClick={()=>setShowModal({report: true, bid:false})}
                              onMouseOver={({target})=>target.style.backgroundColor = "#484d50"} 
                              onMouseOut={({target})=>target.style.backgroundColor = "#353a3d"}
                              style={styledSearch} 
                         />
                         <div>
                              <p>Balance</p>
                              <Account>
                                   <img src="/eth.svg" alt="" />
                                   <p>{balance}</p>
                              </Account>
                         </div>
                         <motion.img src="/user.jpg" alt="user"  />
                    </TopInfo>
                    <BidContainer as={motion.div} onKeyDown={movePosition} animate={{x: 0, opacity: 1}} initial={{x:500, opacity: 0}} transition={{delay: 3}}>
                         {nftData.map((item,i)=>(
                              <Bid
                                   key={i} 
                                   id={i}
                                   index={i + position}
                                   setModalState={setShowModal}  
                                   item={item}
                                   setModalID={setModalID}  
                              />
                              ))}
                    </BidContainer>
                    <ButtonContainer>
                         <div ><span style={{display: position > 0 ?"none" : "grid"}} id="leftBtn" onClick={movePosition}><BsFillArrowLeftSquareFill /></span></div>
                         <div ><span style={{display: position < -39 ?"none" : "grid"}} onClick={movePosition} id="rightBtn" ><BsFillArrowRightSquareFill /></span></div>
                         
                    </ButtonContainer>
                    <motion.img src="/loader.svg" alt="" initial={{opaciy: 1}} transition={{delay: 2.5}} animate={{opacity: 0}} />
                    <Footer />
               </StyledApp>
          </div>
     )
};

export default App;