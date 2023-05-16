import React, { useEffect, useState } from "react";
import "./solDetail.css";
import db from "../db.json"
import Navbar from "./Navbar";
import Footer from "./Footer";
import Navbar2 from "./Navbar2";
import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import { Grid } from "@material-ui/core";


const AiMl = () => {
    const [botdata, setBotdata] = useState([])
    const fulstack = async () => {
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
console.log({botdata})

    useEffect(() => {
        fulstack()
    }, [])
    return (
        <>
      <Navbar2/>
            <div className="solut-details-first">
                <img style={{ width: "100%", height: "590px" ,position:"relative",objectFit:"cover"}} src="https://img.freepik.com/free-photo/concentrated-businessman-clicking-virtual-3d-icon_651396-906.jpg?w=2000" />
            </div>
            


{/* 
     <div className="soldetails-flex1st">
        <div className="soldetails-flex1stleft">
            <div>Full Stack Development & Maintenance </div>
           
            </div>
            </div>
        <div className="soldetails-flex1stright">
        <div>Our full-stack developers are trained to work on both client-side (front-end) and server-side (back-end) components of a web application. Our developers are familiar with a variety of technologies, including HTML, CSS, JavaScript (for front-end), and at least one server-side programming language such as Python, Ruby, Java, PHP, or Node.js (for back-end), as well as database management systems like MySQL, MongoDB, or PostgreSQL.
        </div>
       
     </div>
     <div className="soldetails-flex2st">
        <div style={{border:"10px solid #FE602F", width:"85%",height:"0px"}}></div>
     <div style={{marginLeft:"-20px",marginTop:"-5%"}}>Our methodology of mobile first approach has proven faster ROI to many organizations we worked in the past since the application is made available in all devices with one development cost. We are also one of the pioneers to build progressive web application framework (PWA) as an alternate to mobile application to drive better adoption. The aim of PWAs is to provide a seamless experience for users, combining the best features of web and native apps to deliver fast, reliable, and engaging experiences..</div>
     </div> */}
 {botdata?.map((e,i)=>(
                <>
<Grid container style={{paddingLeft:"5%",paddingRight:"5%"}} className="soldetails-flex1stAi">
        <Grid item sm={12} md={4} lg={4} className="soldetails-flex1stleft">
           
            <div style={{paddingRight:"4%"}}>{e.title} </div>
            <div style={{border:"10px solid #FE602F", width:"100%",marginLeft:"-25%",marginTop:{lg:"50%"}}}></div>
            </Grid>
            <Grid item sm={12} md={8} lg={8} className="soldetails-flex1stright" style={{textAlign:"justify"}}>
        <div>{e.para1}</div>
<div>{e.line1}</div>
<div> {e.line2}</div>
<div> {e.line3}</div>
​
<div>   
{e.para2}</div>

          <div 
          className="soldetails-flex2st"
          >
        
     <div >{e.para3}</div>
   
     </div> 
       
       </Grid>
     </Grid>
 

            <Grid container
            className="aicont"
            >
                {e?.grid?.map((el, i) => (
                    
                       <Grid item sm={12} md={4} lg={4} style={{marginTop:"15px",margin:"auto",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
                          <div className="" style={{}}>
                            <div style={{marginTop:"15px"}} >
                             <img style={{width:"360px",height:"250px",borderRadius:"5px"}} src={el.img} alt=""/>
                                <div
                                 className="aiimgtit"
                                >{el.title}</div>
                            </div>
                          </div>



                       </Grid>
                 

                     
                    
                ))}
                   
            </Grid>
            </>
            ))}
            <div style={{marginTop:"8%"}}>
        <Footer/>
        </div>
        </>
    )
}
export default AiMl;