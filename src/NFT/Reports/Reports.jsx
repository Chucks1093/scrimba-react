import { ReportCover, StyledReport, Stats } from "./Reports.style";
import BidReport from "../BidReport/BidReport";

function Reports(){
     return(
          <div>
               <StyledReport>
                    <div>
                         <h3>Reports</h3>
                         <p>30 0ctober, 2020</p>
                    </div>
                    <Stats>
                         <div>
                              <p>NFT</p>
                              <p>Price</p>
                              <p>Status</p>
                              <p>Stake</p>
                         </div>
                         <div>
                              <BidReport />
                              <BidReport />
                              <BidReport />

                         </div>
                    </Stats>
               </StyledReport>
               <ReportCover />
          </div>
     )
}

export default Reports;