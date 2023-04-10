import React, { useEffect, useState } from "react";
import "./solDetail.css";
import db from "../db.json"
import Config from "../Config";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SolutionDetail = () => {
    const[sfdata,setSfdata]=useState([])
    const salesforce = async () => {
        try {
            let res = await fetch(`${Config.host}/get-salesforce`)
            let salesforcedataa = await res.json()
            console.log({ salesforcedataa })
            setSfdata(salesforcedataa)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        salesforce()
    }, [])

    return (
        <>
      <Navbar/>
      {sfdata?.map((e,i)=>(
        <div key={i} >
            <div className="solut-details-first">
                
                <img style={{ width: "100%", height: "590px" ,position:"relative",objectFit:"cover"}} src={e.img} />
            </div>
            <div className="solut-details-abso" >
                {e.imgtxt}
                    {/* Reimagine the life sciences industry with */}
            </div>
            <div className="solut-details-imgabso"><img style={{width:"150px"}}src={e.imgonimg} alt=""/></div>

     <div className="soldetails-flex1st">
        <div className="soldetails-flex1stleft">
            <div>{e.title} </div>
           
            </div>
        <div className="soldetails-flex1stright">
        <div>{e.para1}</div>
       
        </div>
       
     </div>
     <div className="soldetails-flex2st">
        <div style={{border:"10px solid #FE602F", width:"85%",height:"0px"}}></div>
     <div style={{marginLeft:"-20px",marginTop:"-5%"}}>{e.para2}</div>
     </div>


            <div>
                {e?.sol.map((el, i) => (
                    <>
                        <div className="sol-det-mtr">
                            <div className="sol-det-imgdiv">
                                <div><img style={{width:"200px",height:"150px",justifyContent:"center",margin:"auto"}} src={el.img} /></div>
                                <div className="sol-det-imgtitle">{el.imgtitle}</div>
                            </div>
                            <div className="sol-det-descdiv">
                                <div className="sol-detdesctitle">{el.desctitle}</div>
                                <div style={{marginTop:"2%"}}>{el.desc}</div>
                            </div>
                        </div>
                    </>
                ))}
                    {/* <Footer/> */}
                    
            </div>
            </div>
            ))}
        <Footer/>
        </>
    )
}
export default SolutionDetail;