import { StyledBid, BiddingState,  } from "./Bid.style";
import {AiOutlineClockCircle} from "react-icons/ai";
import { clock,lastBid } from "./Bid.style";
import {SiBetfair} from "react-icons/si";
import { TiArrowUnsorted } from "react-icons/ti";


function Bid(){
     return (
          <StyledBid>
               <img src="/nft-5.jpg" alt="nft" />
               <div> <AiOutlineClockCircle style={clock}/> <span>12h left</span> </div>
               <div>
                    <h3>Fakurian of Space</h3>
                    <img src="/user.jpg" alt="user" />
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
                    <button>Place a bid <SiBetfair /></button>
               </BiddingState>
          </StyledBid>
     )
}

export default Bid;