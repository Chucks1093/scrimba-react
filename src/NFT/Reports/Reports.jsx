import { ReportCover, StyledReport, Stats } from "./Reports.style";
import BidReport from "../BidReport/BidReport";
import getLocalStorage from "./getLocalStorage";
import { useEffect, useState } from "react";
import { Reorder } from "framer-motion";

function Reports(props){
     const currentDate = {
          year : new Date().getFullYear(),
          month: new Date().getMonth(),
          day: new Date().getDate()
     };

     useEffect(()=>{
          props.setReportItems(getLocalStorage)

     }, [props.isModalActive.report === false ? true : false])
     return(
          <div>
               <StyledReport show={props.isModalActive.report}>
                    <div>
                         <h3>Reports</h3>
                         <p>{currentDate.year}/{currentDate.month +1}/{currentDate.day}</p>
                    </div>
                    <Stats>
                         <div>
                              <p>NFT</p>
                              <p>Price</p>
                              <p>Status</p>
                              <p>Stake</p>
                         </div>
                         <div>
                              {props.reportItems.map((item, i) =>(
                                   <BidReport 
                                        key={i}
                                        id={item.id}
                                        cost={item.amount}
                                        sold={item.sold}
                                        purchased={item.purchased}
                                   />
                              ))}
                         </div>
                    </Stats>
               </StyledReport>
               <ReportCover 
                    onClick={()=>props.setModalState({report: false, bid: false})}
                    show={props.isModalActive.report}
               />
          </div>
     )
};

export default Reports;