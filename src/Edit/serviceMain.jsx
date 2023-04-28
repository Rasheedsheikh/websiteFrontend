import React, { useEffect, useState } from "react";
import "./industries.css"
import { useSearchParams,useLocation } from "react-router-dom";

import Config from "../Config";
const ServiceMainEdit = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
 

    const [title1, setTitle1] = useState(false);
    const [desc1, setDesc1] = useState(false);
    const [desc22, setDesc22] = useState(false);
        
    const[serv,setServ]=useState([])
    let [searchParams, setSearchParams] = useSearchParams();
    const location=useLocation()
    // const router=useRouter()

    const params=new URLSearchParams(location.search)
    const id=params.get("id")
    const id2=params.get("id2")
    console.log({id2,id})

    const services = async () => { 
        try {
            let res = await fetch(`http://localhost:2233/${id}/what/${id2}`)
            let servicesdataa = await res.json()
            console.log({ servicesdataa })
            setServ(servicesdataa)
            setTitle(servicesdataa.title)
            setDesc(servicesdataa.desc)
            // setDesc2(servicesdataa.desc[1])
            // setDesc3(servicesdataa.desc[2])
            // setButton(servicesdataa.desc2)
        }
        catch (err) {
            console.log(err)
        }
    }

    

    useEffect(() => {
        services()
    }, [])
  


    const handleSubmit = async (e) => {
        e.preventDefault();

        // make PATCH request to API endpoint
        const response = await fetch(`http://localhost:2233/servicesmain/${id2}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title,desc})
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
    //     setDesc22(false)
    //     setDesc1(false)

    //    if(e==="editTitle"){
    //     setTitle1(true)
    //    }
    //    if(e==="editDesc"){
    //     setDesc1(true)

    //    }
    //    if(e==="editButton"){
    //     setDesc22(true)
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

                    <input type="text" className="input-box" value={title}  onChange={(e)=>setTitle(e.target.value)}/>
                    <div className="icon-container">
                        <img className="edit-icon" src="./Images/edi.png" alt="Edit"   />
                        <img className="delete-icon" src="./Images/dlt.png" alt="Delete" onClick={(e)=>setTitle("")} />
                    </div>
                </div>
            </div>


          



            <div className="inputmainbo3">
                <div style={{ margin: "auto", width: "500px" }}> <label style={{ margin: "auto", textAlign: "center" }}>Phrase</label></div>
                <div className="input-container">

                    <input type="text" className="input-box" value={desc} onChange={(e)=>setDesc(e.target.value)} />
                    <div className="icon-container">
                        <img className="edit-icon" src="./Images/edi.png" alt="Edit" />
                        <img className="delete-icon" src="./Images/dlt.png" alt="Delete" onClick={(e)=>setDesc("")}/>
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
export default ServiceMainEdit;