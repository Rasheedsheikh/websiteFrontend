import React, { useEffect, useState } from "react";
import "./industries.css"
import { useSearchParams,useLocation } from "react-router-dom";

import Config from "../Config";
const CareerEdit = () => {
    const [title, setTitle] = useState("");
    const[ Experience,setExperience]=useState("")
    const [desc, setDesc] = useState("");
    const [desc2, setDesc2] = useState("");
    const [jobtype, setJobtype] = useState("");
    const [Location, setLocation] = useState("");
    const [Schedule, setSchedule] = useState("");
    const [Education, setEducation] = useState("");
  
        
    const[indu,setIndu]=useState([])
    let [searchParams, setSearchParams] = useSearchParams();
    const location=useLocation()
    // const router=useRouter()

    const params=new URLSearchParams(location.search)
    const id=params.get("id")
    // const id2=params.get("id2")
    console.log({id})

    const JOBS = async () => {
        try {
            let res = await fetch(`http://localhost:2233/${id}/jobs`)
            let JOBSdataa = await res.json()
            console.log({ JOBSdataa })
          
            setTitle(JOBSdataa.title)
            setExperience(JOBSdataa.Experience)
            setDesc(JOBSdataa.desc)
            setDesc2(JOBSdataa.desc2)
            setExperience(JOBSdataa.Experience)
            setLocation(JOBSdataa.Location)
            setSchedule(JOBSdataa.Schedule)
            setJobtype(JOBSdataa.jobtype)
            
            // setButton(JOBSdataa.button)
        }
        catch (err) {
            console.log(err)
        }
    }

    

    useEffect(() => {
        JOBS()
    }, [])
 


    const handleSubmit = async (e) => {
        e.preventDefault();

        // make PATCH request to API endpoint
        const response = await fetch(`http://localhost:3000/jobs/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title,Experience, desc,desc2,Experience,Schedule,Location,jobtype })
        });

        // handle response from API
        if (response.ok) {
            const updatedItem = await response.json();
            // update UI with updated data
        } else {
            console.error(response);
        }
    };

 

    // const updateFormData1 = (e) =>{
    //     setTitle1(false)
    //     setButton1(false)
    //     setDesc1(false)

    //    if(e=="editTitle"){
    //     setTitle1(true)
    //    }
    //    if(e=="editDesc"){
    //     setDesc1(true)

    //    }
    //    if(e=="editButton"){
    //     setButton1(true)
    //    }
      
    // }
    return (
        <>
       

      <div >
            <div className="adminnav" style={{ display: "flex", justifyContent: "space-between" }}>
                <div><img style={{ width: "250px", height: "50px", marginTop: "10px" }} src="./Images/logo (1).jpg" alt="" /></div>
                <div className="navadm"> Admin</div>
            </div>

            {/* {indu.map((e,i)=>(
                <> */}
            <div className="inputmainbo" >
                <div style={{ margin: "auto", width: "500px" }}> <label style={{ margin: "auto", textAlign: "center" }}>Header 1</label></div>
                <div className="input-container">

                    <input type="text" className="input-box"  value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    <div className="icon-container">
                        <img className="edit-icon" src="./Images/edi.png" alt="Edit"   />
                        <img className="delete-icon" src="./Images/dlt.png" alt="Delete" onClick={(e)=>setTitle("")} />
                    </div>
                </div>
            </div>
            <div className="inputmainbo" >
                <div style={{ margin: "auto", width: "500px" }}> <label style={{ margin: "auto", textAlign: "center" }}>Header 2</label></div>
                <div className="input-container">

                    <input type="text" className="input-box"  value={Experience} onChange={(e)=>setExperience(e.target.value)}/>
                    <div className="icon-container">
                        <img className="edit-icon" src="./Images/edi.png" alt="Edit"   />
                        <img className="delete-icon" src="./Images/dlt.png" alt="Delete" onClick={(e)=>setExperience("")} />
                    </div>
                </div>
            </div>


            <div className="inputmainbo2" style={{width:"500px"}}>
                <div style={{ margin: "auto", width: "500px" }}> <label style={{ margin: "auto", textAlign: "center" }}>Phrase</label></div>
                <div className="input-container">

                    <input  style={{width:"430px"}}type="text" className="input-box" value={desc}  onChange={(e)=>setDesc(e.target.value)}/>
                    <div className="icon-container">
                        <img className="edit-icon" src="./Images/edi.png" alt="Edit"/>
                        <img className="delete-icon" src="./Images/dlt.png" alt="Delete"  onClick={(e)=>setDesc("")}/>
                    </div>
                </div>
            </div>


            <div className="inputmainbo2" style={{width:"500px"}}>
                <div style={{ margin: "auto", width: "500px" }}> <label style={{ margin: "auto", textAlign: "center" }}>Phrase</label></div>
                <div className="input-container">

                    <input  style={{width:"430px"}}type="text" className="input-box" value={desc2}  onChange={(e)=>setDesc2(e.target.value)}/>
                    <div className="icon-container">
                        <img className="edit-icon" src="./Images/edi.png" alt="Edit"/>
                        <img className="delete-icon" src="./Images/dlt.png" alt="Delete"  onClick={(e)=>setDesc2("")}/>
                    </div>
                </div>
            </div>



            <div className="inputmainbo2" style={{width:"500px"}}>
                <div style={{ margin: "auto", width: "500px" }}> <label style={{ margin: "auto", textAlign: "center" }}>Phrase</label></div>
                <div className="input-container">

                    <input  style={{width:"430px"}}type="text" className="input-box" value={jobtype}  onChange={(e)=>setJobtype(e.target.value)}/>
                    <div className="icon-container">
                        <img className="edit-icon" src="./Images/edi.png" alt="Edit"/>
                        <img className="delete-icon" src="./Images/dlt.png" alt="Delete"  onClick={(e)=>setJobtype("")}/>
                    </div>
                </div>
            </div>



            <div className="inputmainbo2" style={{width:"500px"}}>
                <div style={{ margin: "auto", width: "500px" }}> <label style={{ margin: "auto", textAlign: "center" }}>Phrase</label></div>
                <div className="input-container">

                    <input  style={{width:"430px"}}type="text" className="input-box" value={Location}  onChange={(e)=>setLocation(e.target.value)}/>
                    <div className="icon-container">
                        <img className="edit-icon" src="./Images/edi.png" alt="Edit"/>
                        <img className="delete-icon" src="./Images/dlt.png" alt="Delete"  onClick={(e)=>setLocation("")}/>
                    </div>
                </div>
            </div>



            <div className="inputmainbo2" style={{width:"500px"}}>
                <div style={{ margin: "auto", width: "500px" }}> <label style={{ margin: "auto", textAlign: "center" }}>Phrase</label></div>
                <div className="input-container">

                    <input  style={{width:"430px"}}type="text" className="input-box" value={Schedule}  onChange={(e)=>setSchedule(e.target.value)}/>
                    <div className="icon-container">
                        <img className="edit-icon" src="./Images/edi.png" alt="Edit"/>
                        <img className="delete-icon" src="./Images/dlt.png" alt="Delete"  onClick={(e)=>setSchedule("")}/>
                    </div>
                </div>
            </div>



{/* 
            <div className="inputmainbo2" style={{width:"500px"}}>
                <div style={{ margin: "auto", width: "500px" }}> <label style={{ margin: "auto", textAlign: "center" }}>Phrase</label></div>
                <div className="input-container">

                    <input  style={{width:"430px"}}type="text" className="input-box" value={desc}  onChange={(e)=>setDesc(e.target.value)}/>
                    <div className="icon-container">
                        <img className="edit-icon" src="./Images/edi.png" alt="Edit"/>
                        <img className="delete-icon" src="./Images/dlt.png" alt="Delete"  onClick={(e)=>setDesc("")}/>
                    </div>
                </div>
            </div> */}



      
            <div className="buttonmain">
                <div> <button className="buttons1"  style={{ height: "40px", width: "138px" }} onClick={handleSubmit} >Save</button></div>
                <div> <button onClick={() => { }} className="button2"> Cancel </button></div>
            </div>
            {/* </>

  ))} */}
</div>
        </>
    )
}
export default CareerEdit;