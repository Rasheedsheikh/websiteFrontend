import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Config from "../Config";
import { useSearchParams } from "react-router-dom";
const axios = require('axios');
const FormData = require('form-data');

const Industries = () => {
    const [industries, setIndu] = useState([])
    let [searchParams, setSearchParams] = useSearchParams();
    // const params=new URLSearchParams(location.search)
    // const id=params.get("id")
    // const id2=params.get("id2")
    // console.log({id2,id})

    const fileChange = async(e,id) => {
        // console.log(e)
        let imgFile = e.target.files[0];
        let formData = new FormData();
        formData.append('file', imgFile);
        formData.append('id',id)

        let res = fetch("http://localhost:2233/fileupload", { 
            method: 'POST',
            body: formData,
        });
        if (res.ok) {
            const updatedItem = await res.json();
            // update UI with updated data
        } else {
            console.error(res);
        }
    };

        // console.log(res.json(),'raja')
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'multipart/form-data' },
        //     body: {     
        //         "file":JSON.stringify(e.target.files[0])
        //     }
        // };
      

        // make PATCH request to API endpoint
       


  const handleButtonClick = (e) => {
    document.getElementById('image-input').click();
    

  
  };

    const [indus, setIndus] = useState({
        index: null,
        isHover: false
    })
    const navigate= useNavigate()
    const Industries = async () => {
        try {
            let res = await fetch(`${Config.host}/get-Industries`)
            let Industriesdataa = await res.json()
            console.log({ Industriesdataa })
            setIndu(Industriesdataa)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        Industries()
    }, [])

  return (
    <div>
       <div id="Industriess" >

{industries?.map((e, i) => (
    <div key={i} className="indusmainheading">
        <div 
        // onMouseEnter={() => setIndus({ index: i, isHover: true })}
        //     onMouseLeave={() => setIndus({ index: null, isHover: false })} 
            className="Indus-heading"> {e.heading}
            {/* {indus.index == i && indus.isHover && (
                <>

                    <button style={{ marginLeft: "5%" }} className="buttons" >
                        Edit
                    </button>
                </>
            )} */}

        </div>




    </div>
))}
</div>

<div style={{ width: "95%", margin: "auto" }} className="Indus-insder-cont">

{industries?.map((item, i) => (
    item?.insider?.map((e, j) => (
        <div onMouseEnter={() => setIndus({ index: j, isHover: true })}
            onMouseLeave={() => setIndus({ index: null, isHover: false })} key={j} className="Indus-insder-cont-child">
            <div><img className="insiderimg" style={{}} src={e.img} alt="" /></div>
            {indus.index == j && indus.isHover && (
                <>
                 <div>
     
      <input id="image-input" type="file" accept="image/*"  style={{ display: 'none' }} onChange={(e)=>fileChange(e._id)}/>
      <button className='buttons' onClick={handleButtonClick}>Change Image</button>
    </div>
    <div>
{/* <label for="file-upload" className="buttons">Change Image</label>

<input id="file-upload" 
onChange={(e)=>uploadImage(e)}
type="file"/> */}
             </div>           
                    
                    <Link to={`/industriesedit?id=${item._id}&id2=${e._id}`}> <button className="buttons" style={{ marginTop: "-10%" }} >
                        Edit
                    </button>
                    </Link>
                </>
            )}

            <div className="indus-title"> {e.title}</div>
            <div className="indus-desc" style={{ height: "100px" }}> {e.desc}</div>
            {/* <Link to="/learnn">   */}
            <div> <button onClick={() => navigate("/learnn")} className="buttons">Learn More</button></div>
            {/* </Link> */}


        </div>
    ))

))}


</div>

    </div>
  )
}

export default Industries