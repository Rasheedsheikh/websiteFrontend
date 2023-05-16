import React, { Fragment, useEffect, useState } from "react";
import "./solDetail.css";
import db from "../db.json"
import Navbar from "./Navbar";
import Footer from "./Footer";
import Navbar2 from "./Navbar2";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Bot = () => {
    const [botdata, setBotdata] = useState([])
    const [indus, setIndus] = useState({
        index: null,
        isHover: false
    })

    const BOT = async () => {
        try {
            let res = await fetch("http://localhost:2233/get-bot")
            let data = await res.json()
            console.log({ data })
            setBotdata(data)
        }
        catch (err) {
            console.log(err)
        }
    }
// console.log({fuldata})
    useEffect(() => {
        BOT()
    }, [])
    return (
        <>
      <Navbar2/>
    <div>
        {botdata?.map((e,i)=>(
            <div key={i}>
      
            <div className="solut-details-first">
                <img style={{ width: "100%", height: "590px" ,position:"relative",objectFit:"cover"}} src="https://previews.123rf.com/images/alphaspirit/alphaspirit1307/alphaspirit130700086/21139567-teamwork-works-together-to-build-a-gear-system.jpg" />
            </div>
            <div className="botpicabso">
                <img style={{width:"350px",height:"250px"}} src="/Images/Group 1345.png" alt=""/>
            </div>
            




<Grid container className="soldetails-flex1stbot">
        <Grid item sm={12} md={4} lg={4} className="soldetails-flex1stleftbot" style={{}}>
            <div onMouseEnter={() => setIndus({ index: i, isHover: true })}
                                    onMouseLeave={() => setIndus({ index: null, isHover: false })}>{e.title}
                                      {indus.index == i && indus.isHover && (
                <>              
                    <Link to={`/botedit?id=${e._id}`}  > <button className="buttons" style={{ marginTop: "-10%" }} >
                        Edit
                    </button>
                    </Link>
                </>
            )} </div>
            <div style={{border:"10px solid #FE602F", width:"90%",height:"0px",marginTop:"3%"}}></div>
           
            </Grid>
            <Grid item sm={12} md={8} lg={8} className="soldetails-flex1stright">
        <div>{e.para1}</div>
        <div style={{marginTop:"2%"}}>{e.para2}</div>
 
       </Grid>
       </Grid>
  
     <div className="soldetails-flex2st">
   
    
     </div>
   






<div>
    <img style={{width:"90%",marginTop:"8%",marginLeft:"5%"}} src="/Images/Bot.jpg" alt="" />
</div>
</div>

))}
</div>
        
        <Footer/>
        </>
    )
}
export default Bot;