import React from "react";
import "./solDetail.css";
import db from "../db.json"
import Navbar from "./Navbar";
import Footer from "./Footer";

const SolutionDetail = () => {
    return (
        <>
      <Navbar/>
            <div className="solut-details-first">
                <img style={{ width: "100%", height: "590px" ,position:"relative"}} src="./Images/pix.jpg" />
            </div>
            <div className="solut-details-abso" >
                
                    Reimagine the life sciences industry with
            </div>
            <div className="solut-details-imgabso"><img style={{width:"150px"}}src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png" alt=""/></div>

     <div className="soldetails-flex1st">
        <div className="soldetails-flex1stleft">
            <div>Salesforce Development & Maintenance </div>
           
            </div>
        <div className="soldetails-flex1stright">
        <div>We came to realize that the traditional approach to Salesforce implementation simply wasn’t working for many enterprises regardless of their size. Tools full potential was not realized in many cases due to the complexity involved in managing the requirements, development and validation on top of the regular upgrades pushed by salesforce 3 times in a year. The desired long-term outcomes were rarely met due to the evolving product features and changing business environment. Salesforce was simply bolted onto the existing infrastructure and did little to solve real business problems. Our approach at Value Health is to change that.</div>
       
        </div>
       
     </div>
     <div className="soldetails-flex2st">
        <div style={{border:"10px solid #FE602F", width:"85%",height:"0px"}}></div>
     <div style={{marginLeft:"-20px",marginTop:"-5%"}}>Our vision is, to help healthcare and life sciences organizations build a true Salesforce ecosystem that enhances all other tools and delivers the desired outcomes at faster pace and significantly lows cost by leveraging our assets. This can only be achieved by truly using our framework and tools we built over the decade of experience.</div>
     </div>


            <div>
                {db?.Careers?.soldetails?.map((e, i) => (
                    <>
                        <div className="sol-det-mtr">
                            <div className="sol-det-imgdiv">
                                <div><img style={{width:"200px",height:"150px",justifyContent:"center",margin:"auto"}} src={e.img} /></div>
                                <div className="sol-det-imgtitle">{e.imgtitle}</div>
                            </div>
                            <div className="sol-det-descdiv">
                                <div className="sol-detdesctitle">{e.desctitle}</div>
                                <div style={{marginTop:"2%"}}>{e.desc}</div>
                            </div>
                        </div>
                    </>
                ))}
                    {/* <Footer/> */}
                    
            </div>
        <Footer/>
        </>
    )
}
export default SolutionDetail;