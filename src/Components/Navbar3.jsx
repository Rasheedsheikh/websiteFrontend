import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Config from "../Config";
import db from "../db.json";
import HomeNav from "./HomeNav";

const Navbar3=()=>{
    const [data ,setData1]=useState([])
    const [flag, setFlag] = useState(false)
    const [activeItem, setActiveItem] = useState(true)
    const [index, setIndex] = useState(false);


    const handlenavbar=()=>{
        setIndex(true)
    }
    const handlenavbarleave=()=>{
        setIndex(false)
    }
    const handleItemEnter = (index) => {

        setActiveItem(index);
    };

    const handleItemLeave = () => {
        setActiveItem(null);
    };
    useEffect(()=>{
        show()
    },[])

    const show= async()=>{
            try{
              let res= await fetch(`${Config.host}/home`)
              let dataa= await res.json()
              console.log(dataa.data)
              setData1(dataa.data)
            }
            catch(err){
         console.log(err)
            }
          }
    return(
        <>
         <nav onMouseEnter={handlenavbar}  onMouseLeave={handlenavbarleave}>{index ?
                <div className="Nav">
                    <div className="NavLeft">
                        <img style={{ width: "253px", height: "50px", marginTop: "10px" }} src="./Images/logo (1).jpg" alt="/" />
                    </div>

                    <div className="NavRight">
                        {data?.Total?.NavRoutes?.map((e, i) => (
                            <div key={i} onMouseEnter={() => handleItemEnter(i)}
                                onMouseLeave={handleItemLeave}
                            >

                                {/* <Link style={{textDecoration:"none", color:"#000000"}} to={e.path} ><div>{e.name}</div></Link>  */}
                                <a style={{ textDecoration: "none", color: "#FFFFFF" }}

                                    href={e.path} onClick={() => e.path === "#career" ? setFlag(true) : setFlag(false)}>
                                    <div className="navrightchild">
                                        <div>{e.name}</div>
                                    </div></a>


                                {activeItem === i && (
                                    <div className={activeItem ? "dropdown-menu" : ""} style={{ textDecoration: "none" }}>
                                        {e?.options.map((option, optionIndex) => (
                                            <>
                                                <a style={{ textDecoration: "none", color: "#000000" }} onClick={() => setActiveItem(null)} href={option.url}>
                                                    <div style={{ gap: "10%" }} className="hoveroptions" key={optionIndex}>{option.label}
                                                    </div>
                                                </a>
                                            </>
                                        ))}
                                    </div>
                                )}
                                {/* { console.log(e,i)} */}
                            </div>
                        ))}
                    </div>
                </div>
                :
                <HomeNav />}
            </nav>
        </>
    )
}

export default Navbar3;