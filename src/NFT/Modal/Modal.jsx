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
import { useEffect, useState } from "react";
import getLocalStorage from "../Reports/getLocalStorage";


function Modal(props) {
     const { time } = props.nftData[props.modalID]

     const format = (value) =>value < 10 ? `0${value}` : value;
     
     const addToReport = (e) => {
          e.preventDefault();
          const input = e.currentTarget.previousElementSibling.children[1];
          let lastBid =  props.nftData[props.modalID].lastBid;
          let bidValue = input;
          if (bidValue.value < lastBid) {
               bidValue.type = "text";
               bidValue.value = "This is too small";
               console.log(bidValue)
               setTimeout(()=>{
                    bidValue.type = "number";
                    bidValue.value = ""
               }, 3000);
               
          } else if (bidValue.value > lastBid) {
               props.nftData[props.modalID].lastBid = bidValue.value;
               let nftItems = getLocalStorage();
               nftItems.push({id : props.modalID, amount: bidValue.value, sold: false});
               console.log(nftItems)
               localStorage.setItem("nft", JSON.stringify(nftItems));
               bidValue.type = "text";
               bidValue.value = "Bid Successful";
               setTimeout(()=>{
                    bidValue.type = "number";
                    bidValue.value = ""
               }, 1000);
          }
          

     }
     

     const showNft = () =>{
         if (props.isModalActive.bid === true) {
               props.setModalState({report: false, bid: false})
         }else{
               props.setModalState({report: false, bid: true})
         }
     }

     
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
                              <p>{props.nftData[props.modalID].lastBid} ETH</p>
                         </div>
                         <div>
                              <p>Auction ending in</p>
                              <p>{format(time.hour)} : {format(time.minute)} : {format(time.seconds)}</p>
                         </div>
                    </BiddingInfo>
                    <BiddingForm>
                         <div>
                              <h4>Your Bid</h4>
                              <h4>{`${data[props.modalID].nft}`}</h4>    
                         </div>
                         <div>
                              <span>ETH</span>
                              <input placeholder={`Minimun of ${props.nftData[props.modalID].lastBid}ETH`} type="number" />
                         </div>
                         <button onClick={addToReport}>Submit</button>
                    </BiddingForm>
               </StyledModal>
          </div>
     )
};

export default Modal;