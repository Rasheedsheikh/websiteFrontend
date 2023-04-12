import React, { useEffect, useState } from "react";
import Config from "../Config";
import "./HomeNav.css"
 const HomeNav=()=>{
    const[data,setData1]=useState([])
    const [flag, setFlag] = useState(false)
    const [activeItem, setActiveItem] = useState(true)
    const handleItemEnter = (index) => {

        setActiveItem(index);
    };

    const handleItemLeave = () => {
        setActiveItem(null);
    };
    const show = async () => {
        try {
            let res = await (await fetch(`${Config.host}/home`)).json();
            // let dataa = await res.json()
            // console.log(dataa.data)
            setData1(res.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{
show()
    },[])
    return(
        <>
         <div className="Navbar">
                <div className="NavLe">
                    <img style={{ width: "253px", height: "50px", marginTop: "2px",objectFit:"cover" }} src="./Images/Logo SVG(White).png" alt="/" />
                </div>

                <div className="NavRi">
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
        </>
    )
 }

 export default HomeNav;