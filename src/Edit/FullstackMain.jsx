import React, { useEffect, useState } from "react";
import "./industries.css"
import { useSearchParams,useLocation } from "react-router-dom";

// import Config from "../Config";
const FullstackMain = () => {
    const [title, setTitle] = useState("");
    const [para1, setPara1] = useState("");
    // const [img, setImg] = useState("");
    const [para2, setPara2] = useState("");


    const [title1, setTitle1] = useState(false);
    const [para11, setPara11] = useState(false);
    const [button1, setButton1] = useState(false);
        
    const[indu,setIndu]=useState([])
    let [searchParams, setSearchParams] = useSearchParams();
    const location=useLocation()
    // const router=useRouter()

    const params=new URLSearchParams(location.search)
    const id=params.get("id")
    const id2=params.get("id2")
    console.log({id2,id})

    const fullStackMain = async () => {
        try {
            let res = await fetch(`http://localhost:2233/${id}/fullStack`)
            let fullStackMaindataa = await res.json()
            console.log({ fullStackMaindataa })
            setIndu(fullStackMaindataa)
            setTitle(fullStackMaindataa.title)
            setPara1(fullStackMaindataa.para1)
            setPara2(fullStackMaindataa.para2)
        }
        catch (err) {
            console.log(err)
        }
    }

    

    useEffect(() => {
        fullStackMain()
    }, [])
 


    const handleSubmit = async (e) => {
        e.preventDefault();

        // make PATCH request to API endpoint
        const response = await fetch(`http://localhost:2233/fullStack/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, para2,para1})
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
        setTitle1(false)
        setButton1(false)
        setPara11(false)

       if(e=="editTitle"){
        setTitle1(true)
       }
       if(e=="editDesc"){
        setPara11(true)

       }
       if(e=="editButton"){
        setButton1(true)
       }
      
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

                    <input type="text" className="input-box"  value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    <div className="icon-container">
                        <img className="edit-icon" src="https://storage.googleapis.com/urgentcare-forms-demo/edi.png" alt="Edit"  onClick={e => updateFormData1('editTitle')} />
                        <img className="delete-icon" src="./Images/dlt.png" alt="Delete" onClick={(e)=>setTitle("")} />
                    </div>
                </div>
            </div>

            <div className="inputmainbo2" style={{width:"500px"}}>
                <div style={{ margin: "auto", width: "500px" }}> <label style={{ margin: "auto", textAlign: "center" }}>Phrase</label></div>
                <div className="input-container">

                    <input  style={{width:"430px"}}type="text" className="input-box" value={para1}  onChange={(e)=>setPara1(e.target.value)}/>
                    <div className="icon-container">
                        <img className="edit-icon" src="./Images/edi.png" alt="Edit"  onClick={e => updateFormData1('editDesc')} on />
                        <img className="delete-icon" src="./Images/dlt.png" alt="Delete"  onClick={(e)=>setPara1("")}/>
                    </div>
                </div>
            </div>

            <div className="inputmainbo3">
                <div style={{ margin: "auto", width: "500px" }}> <label style={{ margin: "auto", textAlign: "center" }}>Button</label></div>
                <div className="input-container">

                    <input type="text" className="input-box" value={para2}  onChange={(e)=>setPara2(e.target.value)} />
                    <div className="icon-container">
                        <img className="edit-icon" src="./Images/edi.png" alt="Edit"  onClick={e => updateFormData1('editButton')} />
                        <img className="delete-icon" src="./Images/dlt.png" alt="Delete"  onClick={(e)=>setPara2("")}/>
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
export default FullstackMain;