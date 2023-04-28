import React, { useEffect, useState } from "react";
import "./industries.css"
import { useSearchParams,useLocation } from "react-router-dom";

import Config from "../Config";
const WhyChooseEdit = () => {
    const [role, setRole] = useState("");
    const [desc, setDesc] = useState("");
    const[name,setName]=useState("");
    const[img,setImg]=useState("")
   
        
    const[indu,setIndu]=useState([])
    let [searchParams, setSearchParams] = useSearchParams();
    const location=useLocation()
    // const router=useRouter()

    const params=new URLSearchParams(location.search)
    const id=params.get("id")
    const id2=params.get("id2")
    console.log({id2,id})

    const whychoose = async () => {
        try {
            let res = await fetch(`http://localhost:2233/${id}/slide/${id2}`)
            let whychoosedataa = await res.json()
            console.log({ whychoosedataa })
          
            setRole(whychoosedataa.role)
            setDesc(whychoosedataa.desc)
            setName(whychoosedataa.name)
            // setButton(whychoosedataa.button)
        }
        catch (err) {
            console.log(err)
        }
    }

    

    useEffect(() => {
        whychoose()
    }, [])
 


    const handleSubmit = async (e) => {
        e.preventDefault();

        // make PATCH request to API endpoint
        const response = await fetch(`http://localhost:2233/testimonials/${id2}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, desc ,})
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
                <div style={{ margin: "auto", width: "500px" }}> <label style={{ margin: "auto", textAlign: "center" }}>Role</label></div>
                <div className="input-container">

                    <input type="text" className="input-box"  value={role} onChange={(e)=>setRole(e.target.value)}/>
                    <div className="icon-container">
                        <img className="edit-icon" src="./Images/edi.png" alt="Edit"   />
                        <img className="delete-icon" src="./Images/dlt.png" alt="Delete" onClick={(e)=>setRole("")} />
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



           <div className="inputmainbo3">
                <div style={{ margin: "auto", width: "500px" }}> <label style={{ margin: "auto", textAlign: "center" }}>Name</label></div>
                <div className="input-container">

                    <input type="text" className="input-box" value={name}  onChange={(e)=>setName(e.target.value)} />
                    <div className="icon-container">
                        <img className="edit-icon" src="./Images/edi.png" alt="Edit"   />
                        <img className="delete-icon" src="./Images/dlt.png" alt="Delete"  onClick={(e)=>setName("")}/>
                    </div>
                </div>
            </div>
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
export default WhyChooseEdit;