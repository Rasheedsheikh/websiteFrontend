import React from "react";
import "./solDetail.css";
import db from "../db.json"
import Navbar from "./Navbar";
import Footer from "./Footer";

const FullStack = () => {
    return (
        <>
      <Navbar/>
            <div className="solut-details-first">
                <img style={{ width: "100%", height: "590px" ,position:"relative"}} src="https://www.larchitecturedaujourdhui.fr/wp-content/uploads/2021/10/sigmund-rWE7bTqgMJE-unsplash-scaled.jpg" alt="" />
            </div>
            <div className="mernpic">
                <img style={{objectFit:"cover",width:"700px"}} src="./Images/Mern.png" alt=""/>
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

<div className="soldetails-flex1st" style={{gap:"8%"}}>
        <div className="soldetails-flex1stleft">
            <div>Full Stack Development & Maintenance </div>
           
            </div>
        <div className="soldetails-flex1stright">
        <div>Our full-stack developers are trained to work on both client-side (front-end) and server-side (back-end) components of a web application. Our developers are familiar with a variety of technologies, including HTML, CSS, JavaScript (for front-end), and at least one server-side programming language such as Python, Ruby, Java, PHP, or Node.js (for back-end), as well as database management systems like MySQL, MongoDB, or PostgreSQL.</div>
       
        </div>
       
     </div>
     <div className="soldetails-flex2st">
        <div style={{border:"10px solid #FE602F", width:"125%",height:"0px"}}></div>
     <div style={{marginLeft:"-50px",marginTop:"-7%"}}>Our methodology of mobile first approach has proven faster ROI to many organizations we worked in the past since the application is made available in all devices with one development cost. We are also one of the pioneers to build progressive web application framework (PWA) as an alternate to mobile application to drive better adoption. The aim of PWAs is to provide a seamless experience for users, combining the best features of web and native apps to deliver fast, reliable, and engaging experiences..</div>
     </div>

            <div>
                {db?.Careers?.FullStack?.map((e, i) => (
                    <>
                        <div className="sol-det-mtr" style={{gap:"5%"}}>
                            <div className="sol-det-imgdiv" style={{marginTop:"3%",marginBottom:"3%"}}>
                                <div><img style={{width:"330px",height:"210px",justifyContent:"center",margin:"auto",borderRadius:"10px"}} src={e.img} alt="" /></div>
                                
                            </div>
                            <div className="sol-det-descdiv" >
                                <div className="sol-detdesctitle">{e.desctitle}</div>
                                <div style={{marginTop:"2%"}}>{e.desc}</div>
                            </div>
                        </div>
                    </>
                ))}
                   
            </div>
        <Footer/>
        </>
    )
}
export default FullStack;