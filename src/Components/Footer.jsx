import React, { useEffect, useState } from "react";

import Config from "../Config";
const Footer=()=>{
    const [data ,setData1]=useState([])
    useEffect(()=>{
        show()
    },[])

    const show= async()=>{
            try{
              let res= await fetch(`${Config.host}/home`)
              let dataa= await res.json()
              console.log(dataa.data)
              setData1(dataa.data)
            }
            catch(err){
         console.log(err)
            }
          }
    return(
        <>
                {data?.Total?.Footer?.map((obj, i) => (
                    <div key={i} className="footerParent">
                        <div className="footerMain">
                            {/* <div><img style={{width:"264px", height:"248px"}} src={e.img}/> </div> */}
                            <div className="footerLeft">
                                <div>
                                    {obj?.line1?.map((e, i) => (
                                        <div key={i} className="footerline1" >{e}</div>
                                    ))}
                                </div>

                                <div>
                                    {obj?.line2?.map((e, i) => (
                                        <div  key={i} className="footerline1" >{e}</div>
                                    ))}
                                </div>
                            </div>

                            <div>

                                {obj?.line3?.map((e, i) => (
                                       <div className="footerline2">
                                       <div> <img style={{width:"60px", height:"45px",objectFit:"cover",justifyContent:"center",margin:"auto",alignContent:"center",marginLeft:"30%",marginBottom:"2%"}} src="./Images/valueFooter.png"/></div>
                                      
                                       <div>{e}</div>
                                       </div>
                                ))}
                            </div>

                            <div>
                                {obj?.line4?.map((e, i) => (
                                    <div  key={i}>
                                        <div> <img src="./Images/Group 1146.jpg" alt=""/></div>
                                        <div className="footerline1">{e.title}</div>
                                        <div>
                                            {e?.icons?.map((ele, i) => (
                                                <div key={i} >
                                                    <img style={{ border: "1px solid white", width: "41.75px", height: "46.5px", backgroundColor: "white", borderRadius: "10px" }} src={ele}  alt=""/>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                ))}
                            </div>



                        </div>
                    </div>

                ))}
        </>
    )
}

export default Footer;