import { StyledBid, BiddingState,  } from "./Bid.style";
import {AiOutlineClockCircle} from "react-icons/ai";
import { clock,lastBid,bidBtnSymbol } from "./Bid.style";
import {SiBetfair} from "react-icons/si";
import { TiArrowUnsorted } from "react-icons/ti";
import { motion } from "framer-motion";
import data from "../App/data";
import getCurrentDate from "../App/reduceTime";
import { useState } from "react";



function Bid(props){
     const { time } = props.item;
     let { index } = props;
     
     if (index < -5) {
          index = data.length - Math.abs(index);
     }
    
     const cardVariant = {
          active: {
               height: "52vh"
          },
          inactive: {
               scaleY: 1
          }
     }

     const showModal = () => {
          props.setModalState({report: false, bid: true});
          props.setModalID(props.id)
     }
     
     return (
          <StyledBid 
               as={motion.div}  
               animate={{transform: `translateX(${(index * 100) + index * 10 + "%"})`, filter: `brightness(${index==1 ? "100%" : "50%"})`, top: `${index==1 ? "6%" : "10%"}`,}}
               >
               <motion.img  src={`nfts/nft-${props.id+1}.jpg`} alt="nft" variants={cardVariant} animate={index==1 ? "active" : ""} />
               <div> <AiOutlineClockCircle style={clock}/> <span> {time.hour===0? `${time.minute}m` :  `${time.hour}hr`} left</span> </div>
               <div>
                    <h3>{props.item.nft}</h3>
                    <img src={`creators/creator-${props.id+1}.jpg`} alt="user" />
               </div>
               <BiddingState>
                    <div>
                         <div>
                              <TiArrowUnsorted style={lastBid} />
                         </div>
                         <div>
                              <p>Last Bid</p>
                              <p>{props.item.lastBid} ETH</p>
                         </div>
                    </div>
                    <button onClick={showModal}><span>Place a bid </span><SiBetfair style={bidBtnSymbol} /></button>
               </BiddingState>
          </StyledBid>
     )
};

export default Bid;