import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Config from "../Config";

const Navbar=()=>{
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
              <div className="Nav">
                <div className="NavLeft">
                    <img style={{ width: "253px", height: "50px" }} src="./Images/logo (1).jpg" alt="/" />
                </div>

                <div className="NavRight">
                    {data?.Total?.NavRoutes?.map((e, i) => (
                        <div key={i}>
                     <Link style={{textDecoration:"none", color:"#000000"}} to={e.path}><div>{e.name}</div></Link> 
                           {/* { console.log(e,i)} */}
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Navbar;