import React, { useEffect, useState } from "react";
import "./industries.css"
import { useSearchParams,useLocation } from "react-router-dom";

import Config from "../Config";
const Whyworkwithus = () => {
    const [title1, setTitle1] = useState("");
    const [title2, setTitle2] = useState("");
    const [desc, setDesc] = useState("");

    // const [title1, setTitle1] = useState(false);
    // const [desc1, setDesc1] = useState(false);
    // const [button1, setButton1] = useState(false);
        
    const[indu,setIndu]=useState([])
    let [searchParams, setSearchParams] = useSearchParams();
    const location=useLocation()
    // const router=useRouter()

    const params=new URLSearchParams(location.search)
    const id=params.get("id")
    // const id2=params.get("id2")
    console.log({id})

    const workwithus = async () => {
        try {
            let res = await fetch(`http://localhost:2233/${id}/workwithus`)
            let whyworkdataa = await res.json()
            console.log({ whyworkdataa })
            setIndu(whyworkdataa)
            setTitle1(whyworkdataa.title1)
            setTitle2(whyworkdataa.title2)
            setDesc(whyworkdataa.desc)
            // setButton(Industriesdataa.button)
        }
        catch (err) {
            console.log(err)
        }
    }

    

    useEffect(() => {
    workwithus()
    }, [])
 


    const handleSubmit = async (e) => {
        e.preventDefault();

        // make PATCH request to API endpoint
        const response = await fetch(`http://localhost:2233/workwithus/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title1, title2, desc})
        });

        // handle response from API
        if (response.ok) {
            const updatedItem = await response.json();
            // update UI with updated data
        } else {
            console.error(response);
        }
    };

 

    const updateFormData1 = (e) =>{
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
      
    }
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

                    <input type="text" className="input-box"  value={title1} onChange={(e)=>setTitle1(e.target.value)}/>
                    <div className="icon-container">
                        <img className="edit-icon" src="./Images/edi.png" alt="Edit"  onClick={e => updateFormData1('editTitle')} />
                        <img className="delete-icon" src="./Images/dlt.png" alt="Delete" onClick={(e)=>setTitle1("")} />
                    </div>
                </div>
            </div>
            <div className="inputmainbo2" style={{width:"500px"}}>
                <div style={{ margin: "auto", width: "500px" }}> <label style={{ margin: "auto", textAlign: "center" }}>Heading2</label></div>
                <div className="input-container">

                    <input  style={{width:"430px"}}type="text" className="input-box" value={title2}  onChange={(e)=>setTitle2(e.target.value)}/>
                    <div className="icon-container">
                        <img className="edit-icon" src="./Images/edi.png" alt="Edit"  onClick={e => updateFormData1('editDesc')} on />
                        <img className="delete-icon" src="./Images/dlt.png" alt="Delete"  onClick={(e)=>setTitle2("")}/>
                    </div>
                </div>
            </div>

            <div className="inputmainbo2" style={{width:"500px"}}>
                <div style={{ margin: "auto", width: "500px" }}> <label style={{ margin: "auto", textAlign: "center" }}>Phrase</label></div>
                <div className="input-container">

                    <input  style={{width:"430px"}}type="text" className="input-box" value={desc}  onChange={(e)=>setDesc(e.target.value)}/>
                    <div className="icon-container">
                        <img className="edit-icon" src="./Images/edi.png" alt="Edit"  onClick={e => updateFormData1('editDesc')} on />
                        <img className="delete-icon" src="./Images/dlt.png" alt="Delete"  onClick={(e)=>setDesc("")}/>
                    </div>
                </div>
            </div>

 
            <div className="buttonmain">
                <div> <button className="buttons1" onClick={handleSubmit} style={{ height: "40px", width: "138px" }}  >Save</button></div>
                <div> <button onClick={() => { }} className="button2"> Cancel </button></div>
            </div>
            {/* </>

  ))} */}
</div>
        </>
    )
}
export default Whyworkwithus;