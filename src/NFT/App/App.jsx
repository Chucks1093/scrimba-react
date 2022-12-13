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
     const [showModal, setShowModal] = useState({report:false, bid: false});
   

     return (
          <StyledApp>
               <Modal 
                    isModalActive={showModal}
                    setModalState={setShowModal}
               
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
                              <p>23,7600</p>
                         </Account>
                    </div>
                    <img src="/user.jpg" alt="user" />
               </TopInfo>
               <BidContainer as={motion.div} animate={{x: 0}} initial={{x:800}}>
                    {data.map((item,i) =>(
                         <Bid
                              x={i}
                              setModalState={setShowModal}  key={i} 
                              item={item}
                         />
                    ))}
               </BidContainer>
               <Comment>Made with <span>❤</span> by Anioke Sebastian.
               </Comment>
          </StyledApp>
     )
};

export default App;