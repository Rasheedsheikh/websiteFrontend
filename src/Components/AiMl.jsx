import React from "react";
import "./solDetail.css";
import db from "../db.json"
import Navbar from "./Navbar";
import Footer from "./Footer";
import Navbar2 from "./Navbar2";

const AiMl = () => {
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

<div className="soldetails-flex1stAi">
        <div className="soldetails-flex1stleft">
            <div style={{width:"320px",marginLeft:"-12%"}}>AI&ML Services </div>
           
            </div>
        <div className="soldetails-flex1stright" style={{textAlign:"justify"}}>
        <div>Artificial Intelligence (AI) and Machine Learning (ML) are having a significant impact on the life sciences industry, providing innovative solutions and driving advancements in various fields such as drug discovery, medical imaging, and personalized medicine. Some examples of AI/ML usage in the life sciences industry are:</div>
<div> 1. Regulatory Intelligence: AI can be used to analyze any changes in the regulations around the world and how it can impact clinical trials in any given local market</div>
<div> 2. Predict Study Design: Help with study design using various protocol inclusion and exclusion criteria to see how the study can be designed optimally to drive innovation and help patient to get the cure they deserve faster and reduce cost of development</div>
<div>3 .Patient Support Services: Reduce patient support services cost by using conversation AI and self service models for patient to get access to drugs</div>
​
<div>   
In conclusion, AI and ML are transforming the life sciences industry by providing innovative solutions and driving advancements in various fields. The increased use of AI and ML in the life sciences industry is expected to improve patient outcomes and lead to the development of more effective and personalized treatments.</div>
       
       
       </div>
     </div>
     <div className="soldetails-flex2st">
        <div style={{border:"10px solid #FE602F", width:"125%",height:"0px"}}></div>
     <div style={{marginLeft:"-50px"}}>Our methodology of mobile first approach has proven faster ROI to many organizations we worked in the past since the application is made available in all devices with one development cost. We are also one of the pioneers to build progressive web application framework (PWA) as an alternate to mobile application to drive better adoption. The aim of PWAs is to provide a seamless experience for users, combining the best features of web and native apps to deliver fast, reliable, and engaging experiences..</div>
     </div>

            <div className="aicont">
                {db?.Careers?.AI?.map((e, i) => (
                    <>
                       <div>
                          <div className="" style={{}}>
                            <div style={{margin:"auto",alignItems:"center",justifyContent:"center",textAlign:"center"}}>
                             <img style={{width:"360px",height:"250px",borderRadius:"5px"}} src={e.img} alt=""/>
                                <div className="aiimgtit">{e.title}</div>
                            </div>
                          </div>



                       </div>
                 

                     
                    </>
                ))}
                   
            </div>
            <div style={{marginTop:"8%"}}>
        <Footer/>
        </div>
        </>
    )
}
export default AiMl;