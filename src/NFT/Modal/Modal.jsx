import { 
     StyledModal, 
     ModalCover,
     UserInfo, 
     BiddingInfo,
     BiddingForm

} from "./Modal.style";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { motion } from "framer-motion";
import data from "../App/data";

function Modal(props) {
     const {time} = data[props.modalID];

     const showNft = () =>{
         if (props.isModalActive.bid === true) {
               props.setModalState({report: false, bid: false})
         }else{
               props.setModalState({report: false, bid: true})
         }
     }; 
     return (
          <div>
               <ModalCover show={props.isModalActive.bid} onClick={showNft} />
               <StyledModal show={props.isModalActive.bid}>
                    <img src={`/nfts/nft-${props.modalID+1}.jpg`} alt="" />
                    <UserInfo>
                         <img src={`creators/creator-${props.modalID+1}.jpg`} alt="" />
                         <p>{`${data[props.modalID].creator}`}</p>
                         <p>Creator</p>
                    </UserInfo>
                    <BiddingInfo>
                         <div>
                              <p>Last bid</p>
                              <p>{props.lastBid} ETH</p>
                         </div>
                         <div>
                              <p>Auction ending in</p>
                              <p>{time.hour} : {time.minute} : {time.seconds}</p>
                         </div>
                    </BiddingInfo>
                    <BiddingForm>
                         <div>
                              <h4>Your Bid</h4>
                              <h4>{`${data[props.modalID].nft}`}</h4>    
                         </div>
                         <div>
                              <span>ETH</span>
                              <input placeholder="Minimun of 0.86 ETH" type="number" />
                         </div>
                         <button>Submit</button>
                    </BiddingForm>
               </StyledModal>
          </div>
     )
};

export default Modal;