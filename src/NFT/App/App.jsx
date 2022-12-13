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
import { useState } from "react";
import { motion } from "framer-motion";
import data from "./data";

function App(){
     const [balance, setBalance] = useState(3.17495);
     const [showModal, setShowModal] = useState({report:false, bid: false});
     const [modalID, setModalID] = useState(0);
     const generateLastBid =() => {
          let lastBid = (Math.random()* 1.1).toFixed(2);
          return lastBid;
     }


     return (
          <StyledApp>
               <Modal 
                    isModalActive={showModal}
                    setModalState={setShowModal}
                    modalID={modalID}
               
               />
               <Reports
                    isModalActive={showModal}
                    setModalState={setShowModal} 
               />
               <StyledBody />
               <TopInfo>
                    <IoIosStats onClick={()=>setShowModal({report: true, bid:false})} style={styledSearch} />
                    <div>
                         <p>Balance</p>
                         <Account>
                              <img src="/eth.svg" alt="" />
                              <p>{balance}</p>
                         </Account>
                    </div>
                    <img src="/user.jpg" alt="user" />
               </TopInfo>
               <BidContainer as={motion.div} animate={{x: 0}} initial={{x:800}}>
                    {data.map((item,i) =>(
                         <Bid
                              key={i} 
                              x={i}
                              setModalState={setShowModal}  
                              item={item}
                              setModalID={setModalID}
                              lastBid={generateLastBid()}
                         />
                    ))}
               </BidContainer>
               <Comment onClick={generateLastBid}>Made with <span>❤</span> by Anioke Sebastian.
               </Comment>
          </StyledApp>
     )
};

export default App;