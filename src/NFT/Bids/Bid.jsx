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
     // const { position } = props.position;
     const [position, setPosition] = useState(props.index);

     // let timeValue= Number;
     // // Thinking of using useEffect Hook.
     // if (time.hour === 0  && time.minute !== 0 ) {
     //      timeValue =`${time.minute}m`
     // } else if (time.hour===0 && time.minute === 0) {
     //      timeValue = `${time.seconds}s`
     // } else {
     //      timeValue = `${time.hour}hr`
     // }
     // console.log(props.index)

     

     const shiftBackward=(e)=>{
          console.log(position)
          // if (props.index.position < 0) {
          //      props.index.position = data.length - 1;
          //      console.log("moved back")             
          //      console.log(props.index.position);

          // }
     }


     const showModal = () => {
          props.setModalState({report: false, bid: true});
          props.setModalID(props.id)
     }
     
     return (
          <StyledBid onKeyDown={shiftBackward} className={props.id==1 ? "active" : ""}  x={props.index.position}>
               <motion.img  src={`nfts/nft-${props.id+1}.jpg`} alt="nft" />
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