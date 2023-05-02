import React, { useEffect, useState } from 'react'
import Config from "../Config";
import { Link, useNavigate } from "react-router-dom";

const Services = () => {
    const [servdata, setservData] = useState([])
    const [indus, setIndus] = useState({
        index: null,
        isHover: false
    })

    const service = async () => {
        try {
            let res = await fetch(`${Config.host}/get-service`)
            let servicedataa = await res.json()
            // console.log({ servicedataa })
            setservData(servicedataa)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        service()
    }, [])


  return (
    <div>
                <div id="Services" className="Service">
                    {/* {data?.Total?.Services?.what?.map((e, i) => ( */}

                    {/* {servdata?.what?.map((e, i) => (


                        <div key={i}>

                            <div className="ServiceMain">{e.title}</div>

                            <div className="serviceDual">{e.desc}</div>

                        </div>
                    )

                    )} */}
                    {servdata?.map((item, i) => (
                        item.what.map((obj, j) => (
                            <div onMouseEnter={() => setIndus({ index: j, isHover: true })}
                                onMouseLeave={() => setIndus({ index: null, isHover: false })} key={i}>

                                <div className="ServiceMain">{obj.title}</div>

                                <div className="serviceDual">{obj.desc}</div>
{/* 
                                {indus.index == j && indus.isHover && (
                                    <>

                                        <Link to={`/servicemainedit?id=${item._id}&id2=${obj._id}`}  >  <button style={{ marginLeft: "5%" }} className="edbuttons" >
                                            Edit
                                        </button>
                                        </Link>
                                    </>
                                )} */}

                            </div>


                        ))
                    ))
                    }
                    {/* {console.log(servdata +
                        "1234567")} */}
                    {/* { console.log(e)} */}
                </div>

                <div className="shapes">


                    {/* {data?.Total.Services.shapes.map((e, i) => ( */}
                    {/* {data?.Total?.Services?.shapes?.map((obj, i) => ( */}

                    {servdata?.map((item, i) => (
                        item.shapes.map((obj, j) => (
                            <div onMouseEnter={() => setIndus({ index: j, isHover: true })}
                                onMouseLeave={() => setIndus({ index: null, isHover: false })} key={j} className="shapes1" style={{ backgroundColor: "white" }}>
                                <div className="numb">{obj.number}</div>

                                <div className="abso" style={{width:"90%"}}>

                                    <div className="service-heading">{obj.heading}</div>

                                    <div>
                                        {obj?.desc?.map((el, i) => (
                                            <div key={i} className="service-desc">
                                                <ul style={{}}>
                                                    <li style={{}}>{el}
                                                    </li></ul>

                                                {/* <div style={{ margin: "auto", marginLeft: "15px" }}>{el}</div> */}
                                            </div>

                                        ))}

                                        {/* {indus.index == j && indus.isHover && (
                                            <>

                                                <Link to={`/serviceedit?id=${item._id}&id2=${obj._id}`}  >  <button style={{ marginLeft: "5%" }} className="edbuttons" >
                                                    Edit
                                                </button>
                                                </Link>
                                            </>
                                        )} */}
                                    </div>
                                </div>
                            </div>
                        ))
                        //    { console.log(e,i)}    
                    ))}
                </div>
    </div>
    
  )
}

export default Services