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



     // useEffect(()=>{
     //      console.log("ran me")
     //      setReportItems((value)=>{
     //           return value.map((report, index)=>{
     //                props.nftData.findIndex((x, i) => {
     //                     if (i === report.id) {
     //                          console.log(report.id)
     //                          return {
     //                               ...report,
     //                               sold: !sold
     //                          }
     //                     }
     //                     console.log(report)
     //                })
     //           })
     //      })
     // },[props.isModalActive.report === false ? true : false])

     // useEffect(()=>{
     //      setReportItems((value)=>{
     //           props.nftData.map((item,i)=>{
     //                const { hour, minute, seconds } = item.time;
     //                if (hour==0 && minute==0 && seconds==0) {
     //                     console.log("rAN timeout")
     //                     return value.map((reportItem) => {
     //                          if (reportItem.id === i) {
     //                               reportItem.sold = true
     //                          }
     //                          console.log(reportItem)
     //                     })
     //                }
     //           })
     //      })
     // },[props.isModalActive.report === false ? true : false])

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