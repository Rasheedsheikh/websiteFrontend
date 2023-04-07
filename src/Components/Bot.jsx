import React from "react";
import "./solDetail.css";
import db from "../db.json"
import Navbar from "./Navbar";
import Footer from "./Footer";

const Bot = () => {
    return (
        <>
      <Navbar/>
            <div className="solut-details-first">
                <img style={{ width: "100%", height: "590px" ,position:"relative"}} src="https://previews.123rf.com/images/alphaspirit/alphaspirit1307/alphaspirit130700086/21139567-teamwork-works-together-to-build-a-gear-system.jpg" />
            </div>
            <div className="botpicabso">
                <img style={{width:"350px",height:"250px"}} src="/Images/Group 1345.png" alt=""/>
            </div>
            




<div className="soldetails-flex1stbot" >
        <div className="soldetails-flex1stleftbot" style={{}}>
            <div>Build,Operate & Transfer Model  </div>
           
            </div>
         <div className="soldetails-flex1stright">
        <div>The Build-Operate-Transfer (BOT) model is well suited for innovative product development companies or companies who are in the ideation stage of product or companies who are in various stages of fund raising. The BOT model is a partnership model we enter with our customers where are contracted to design, build, and operate a product or technology capabilities for a specified period of time, after which ownership is transferred back to the customer. This is model frees up lot of working capital for our customers and allows them to focus on go to market strategies and divert the money where it matter the most.
        </div>
       </div>
       </div>
  
     <div className="soldetails-flex2st">
     <div style={{border:"10px solid #FE602F", width:"90%",height:"0px",marginTop:"3%"}}></div>
     <div style={{marginTop:"-2%",marginLeft:"-2.8%",marginRight:"2%"}}>In our BOT model, we take on the financial risk of developing the technology capabilities, with the expectation of earning a return on investment through the operation and maintenance of the project during the operating period. We will be responsible for ensuring that the deliverables meets the agreed-upon performance standards.</div>
     </div>
   






<div>
    <img style={{width:"90%",marginTop:"8%",marginLeft:"5%"}} src="/Images/Bot.jpg" alt="" />
</div>
        
        <Footer/>
        </>
    )
}
export default Bot;