import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Config from "../Config";

const Industries = () => {
    const [industries, setIndu] = useState([])
  
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
            <div><img className="insiderimg" src={e.img} alt="" /></div>
            {/* {indus.index == j && indus.isHover && (
                <>
                    <button className="buttons" style={{ marginTop: "-50%" }} >
                        Change Image
                    </button>
                    <Link to={`/industriesedit?id=${item._id}&id2=${e._id}`}  > <button className="buttons" style={{ marginTop: "-50%" }} >
                        Edit
                    </button>
                    </Link>
                </>
            )} */}

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