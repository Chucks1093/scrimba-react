import { StyledTestBid, Line } from "./TestBid.style";
function TestBid() {
     return (
          <StyledTestBid>
               <img src="/nft-2.jpg" alt="" />
               <div>
                    <h3>Fanatisizing</h3>
                    <div>
                         <p>Current bid</p>
                         <span>1.50 ETH</span>
                    </div>
               </div>
               <Line />
               <div>
                    <p>@Sanjy_illustrator</p>
                    <p>04 hrs left</p>
               </div>
               <button>Place a Bid</button>
          </StyledTestBid>
     )
}

export default TestBid;