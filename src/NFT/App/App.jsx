import { 
     StyledApp, 
     StyledBody, 
     TopInfo, 
     BidContainer ,
     styledSearch,
     Comment,
     Account
} from "./App.style";
import Modal from "../Modal/Modal";
import { IoIosStats } from "react-icons/io";
import Bid from "../Bids/Bid";
import Reports from "../Reports/Reports";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import data from "./data";
import reduceTIme from "./reduceTime";
import resetTime from "./resetTime";
import generateLastBid from "./generateLastBid";
import getLocalStorage from "../Reports/getLocalStorage";


function App(){
     const [nftData, setnftData] = useState(data);
     const [balance, setBalance] = useState(5.17495);
     const [showModal, setShowModal] = useState
     ({report:false, bid: false});
     const [modalID, setModalID] = useState(0);
     const [reportItems, setReportItems] = useState(getLocalStorage);
     const [position, setPosition] = useState(0);


     const movePosition=(e)=>{
          setPosition((value)=>{
               if (e.keyCode == "37"){
                    return Number(value + 1);
               }else if (e.keyCode == "39"){
                    return Number(value - 1)
               }else {
                    return value;
               }
          })
     }



     useEffect(()=>{
          nftData.map((item, i)=> {
               if (item.time.hour===0 && item.time.minute ===0 && item.time.seconds ===2) {
                    resetTime(data, i).then((value) => {
                         setnftData((allItem)=>{
                              let restoredTime = allItem[i];
                              restoredTime.time = value;
                              return allItem;
                         })
                    })
               }
          })
     }, [nftData])


     useEffect(()=>{
          nftData.map((item, i)=> {
               const storedNfts = getLocalStorage();
               const newStoredNfts = storedNfts.map((value)=>{
                    if (item.time.hour===0 && item.time.minute ===0 && item.time.seconds ===1) {
                         if (!value.sold){
                              if (value.id === i) {
                                   value.sold = true;
                                   value.amount >= item.lastBid ? value.purchased = true : value.purchased = false;
                              }
                         }
                    }else {
                         if (!value.sold){
                              if (value.id === i) {
                                   value.amount >= item.lastBid ? value.purchased = true : value.purchased = false;
                              }
                         }
                    }
                    return value;
               })
               localStorage.setItem("nft", JSON.stringify(newStoredNfts))
               setReportItems(newStoredNfts)
          })
     },[nftData])
     
     useEffect(()=>{
          setInterval(()=>{
               setnftData((value)=>{
                    return value.map((item, i)=>{
                         if (item.time.hour===0 && item.time.minute ===0 && item.time.seconds ===0 ) {
                              return item;
                    }else {
                         const newTime = reduceTIme(item.time);
                         return {
                              ...item,
                              time: {...newTime}
                         };   
                    }
              }) 
          })
        }, 1000)  
     }, [])

     useEffect(()=>{
          setnftData((value)=> {
               return value.map((item)=>{
                    const lastBid = generateLastBid();
                    return {
                         ...item,
                         lastBid: lastBid

                    }
               })
          })
          setInterval(()=>{
               setnftData((value)=> {
                    return value.map((item)=>{
                         const prevLastBid = Number(item.lastBid);
                         const lastBid = Number(generateLastBid());
                         const newBid = (balance * (lastBid/2.5)).toFixed(2)
                         
                         return {
                              ...item,
                              lastBid: newBid <= prevLastBid ? prevLastBid : newBid
     
                         }
                    })
               })
          }, 7000)
     }, [])

     return (
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
                         <motion.img src="/loader.svg" alt="" initial={{opaciy: 1}} transition={{delay: 2.5}} animate={{opacity: 0}} />
               <Comment>Made with <span>❤</span> by Anioke Sebastian.
               </Comment>
          </StyledApp>
     )
};

export default App;