import { 
     StyledApp, 
     StyledBody, 
     TopInfo, 
     BidContainer ,
     styledSearch,
     Comment,
     Account
} from "./App.style";

import TestBid from "../TestBid/TestBid";
import Modal from "../Modal/Modal";
import { IoIosStats } from "react-icons/io";
import Bid from "../Bids/Bid";
import Reports from "../Reports/Reports";

function App(){
     return (
          <StyledApp>
               {/* <Modal /> */}
               {/* <Reports /> */}
               <StyledBody />
               <TopInfo>
                    <IoIosStats style={styledSearch} />
                    <div>
                         <p>Balance</p>
                         <Account>
                              <img src="/eth.svg" alt="" />
                              <p>23,7600</p>
                         </Account>
                    </div>
                    <img src="/user.jpg" alt="user" />
               </TopInfo>
               <BidContainer>
                    <Bid />
               </BidContainer>
               <Comment>Made with <span>❤</span> by Anioke Sebastian.
               </Comment>
          </StyledApp>
     )
};

export default App;