import { StyleBidReport } from "./BidReport.style";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import { upArrow, downArrow } from "./BidReport.style";
import data from "../App/data";

function BidReport(props) {
     return (
          <StyleBidReport>
               <div>
                    <img src={`/nfts/nft-${props.id+1}.jpg`} alt="" width="19rem" />
                    <div>
                         <h4>{data[props.id].nft}</h4>
                         <p>{data[props.id].creator}</p>
                    </div>
               </div>
               <div>{props.cost} ETH</div>
               <div>{props.sold===true ? "Sold": "Pending..."}</div>
               <div>
                    <IoMdArrowDropdownCircle style={downArrow} />
                    <IoMdArrowDropupCircle style={upArrow} />
               </div>
          </StyleBidReport>
     )
};

export default BidReport;