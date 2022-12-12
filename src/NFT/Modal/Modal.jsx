import { 
     StyledModal, 
     ModalCover,
     UserInfo, 
     BiddingInfo,
     BiddingForm

} from "./Modal.style";
import { BsBookmarkCheckFill } from "react-icons/bs";

function Modal() {
     return (
          <div>
               <ModalCover />
               <StyledModal>
                    <img src="/nft-1.jpg" alt="" />
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