import React, { useEffect, useState } from "react";
// import db from "../db.json";
import "./Apply.css";
import { Link, useParams } from "react-router-dom"
import Config from "../Config";

const Apply=()=>{
    const {id}=useParams()
    // const navigate= useNavigate()
    const[data, setData]=useState([])
    // const[step, setStep]=useState(1)

    useEffect(()=>{
       show()
    },[])

    const show= async()=>{
        try{
          let res= await fetch(`${Config.host}/jobs/${id}`)
          let data= await res.json()
          console.log(data)
          setData(data)
        }
        catch(err){
     console.log(err)
        }
      }
    return(
        <div  className="mainApply">
        {data?.map((e,i)=>(
            <div  key={i} className="Applymain">
                <div className="ApplytitleMain">
               <div className="Applytitle">{e.title}</div>
               <Link to={`/fill/${id}`}><div><button className="button2" >Apply</button></div></Link>
               </div>
               
               <div className="Applydetails">
            <div className="det">
                <div>Experience:</div>
                <div className="apply-values">{e.Experience}</div>
           </div>
            <div><div> jobtype:</div><div className="apply-values">{e.jobtype}</div></div>
            <div><div>Location:</div><div className="apply-values">{e.Location}</div></div>
            <div><div> Job Function:</div><div className="apply-values">{e.jobFunction}</div></div>
            <div><div> Education:</div><div className="apply-values">{e.Education}</div></div>
            <div><div> Schedule:</div><div className="apply-values">{e.Schedule}</div></div>
            </div>
            
            <hr/>

            <div>
                <div>Full Job Description</div>
               {e.desc2.map((el,i)=>(
                <div className="req">
               <ul><li> {el}
               </li></ul>
                </div>
               ))}
            </div>
            </div>
        ))}

        </div>
    )
}

export default Apply