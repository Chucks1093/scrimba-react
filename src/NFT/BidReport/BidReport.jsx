import { StyleBidReport } from "./BidReport.style";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import { upArrow, downArrow } from "./BidReport.style";

function BidReport() {
     return (
          <StyleBidReport>
               <div>
                    <img src="/nft-1.jpg" alt="" width="19rem" />
                    <div>
                         <h4>Fakurian of Space</h4>
                         <p>Ryan Bergson</p>
                    </div>
               </div>
               <div>0.96 ETH</div>
               <div>12hr</div>
               <div>
                    <IoMdArrowDropdownCircle style={downArrow} />
                    <IoMdArrowDropupCircle style={upArrow} />
               </div>
          </StyleBidReport>
     )
};

export default BidReport;