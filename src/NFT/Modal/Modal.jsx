import { 
     StyledModal, 
     ModalCover,
     UserInfo, 
     BiddingInfo,
     BiddingForm

} from "./Modal.style";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { motion } from "framer-motion";
function Modal(props) {

     const showNft = () =>{
         if (props.isModalActive.bid === true) {
               props.setModalState({report: false, bid: false})
         }else{
               props.setModalState({report: false, bid: true})
         }
          console.log(props.isModalActive)

     } 
     return (
          <div>
               <ModalCover show={props.isModalActive.bid} onClick={showNft} />
               <StyledModal show={props.isModalActive.bid}>
                    <img src="/ft-1.jpg" alt="" />
                    <UserInfo>
                         <img src="/user.jpg" alt="" />
                         <p>Ryan Begson</p>
                         <p>Creator</p>
                    </UserInfo>
                    <BiddingInfo>
                         <div>
                              <p>Last bid</p>
                              <p>0.96 ETH</p>
                         </div>
                         <div>
                              <p>Auction ending in</p>
                              <p>04 : 45 : 32</p>
                         </div>
                    </BiddingInfo>
                    <BiddingForm>
                         <div>
                              <h4>Your Bid</h4>
                              <h4>Fakurian of Space</h4>    
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