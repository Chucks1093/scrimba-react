import { StyledBid, BiddingState,  } from "./Bid.style";
import {AiOutlineClockCircle} from "react-icons/ai";
import { clock,lastBid,bidBtnSymbol } from "./Bid.style";
import {SiBetfair} from "react-icons/si";
import { TiArrowUnsorted } from "react-icons/ti";
import { motion } from "framer-motion";
import data from "../App/data";
import getCurrentDate from "../App/reduceTime";
import { useEffect } from "react";


function Bid(props){
     const { time } = props.item;
     // let timeValue= Number;
     // // Thinking of using useEffect Hook.
     // if (time.hour === 0  && time.minute !== 0 ) {
     //      timeValue =`${time.minute}m`
     // } else if (time.hour===0 && time.minute === 0) {
     //      timeValue = `${time.seconds}s`
     // } else {
     //      timeValue = `${time.hour}hr`
     // }


     const showModal = () => {
          props.setModalState({report: false, bid: true});
          props.setModalID(props.x)
     }
     
     return (
          <StyledBid x={props.x}>
               <motion.img  src={`nfts/nft-${props.x+1}.jpg`} alt="nft" />
               <div> <AiOutlineClockCircle style={clock}/> <span> {time.hour===0? `${time.minute}m` :  `${time.hour}hr`} left</span> </div>
               <div>
                    <h3>{props.item.nft}</h3>
                    <img src={`creators/creator-${props.x+1}.jpg`} alt="user" />
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