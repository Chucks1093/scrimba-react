import { StyledBid, BiddingState,  } from "./Bid.style";
import {AiOutlineClockCircle} from "react-icons/ai";
import { clock,lastBid,bidBtnSymbol } from "./Bid.style";
import {SiBetfair} from "react-icons/si";
import { TiArrowUnsorted } from "react-icons/ti";
import { motion } from "framer-motion";

function Bid(props){
     
     if (props.item.time.hour === 0) {

     }
     return (
          <StyledBid x={props.x}>
               <motion.img  src={`nfts/nft-${props.x+1}.jpg`} alt="nft" />
               <div> <AiOutlineClockCircle style={clock}/> <span>12h left</span> </div>
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
                              <p>0.96 ETH</p>
                         </div>
                    </div>
                    <button onClick={()=>props.setModalState({report: false, bid: true})}> <span>Place a bid </span><SiBetfair style={bidBtnSymbol} /></button>
               </BiddingState>
          </StyledBid>
     )
}

export default Bid;