import React, { useEffect, useState } from "react";
import "./solDetail.css";
import db from "../db.json"
import Navbar from "./Navbar";
import Footer from "./Footer";
import Navbar2 from "./Navbar2";
import Config from "../Config";
import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const SolutionDetail = () => {
    const [soldata, setSoldata] = useState([])
    const [indus, setIndus] = useState({
        index: null,
        isHover: false
    })
    const sol = async () => {
        try {
            let res = await fetch(`${Config.host}/get-salesforce`)
            let soldataa = await res.json()
            // console.log({ soldataa })
            setSoldata(soldataa)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        sol()
    }, [])
    return (
        <>
            <Navbar2 />
            <div>
                {soldata?.map((e, i) => (
                    <>
                        <div className="solut-details-first">
                            <img style={{ width: "100%", height: "590px", position: "relative" }} src={e.img} />
                        </div>
                        {/* <div className="solut-details-abso" >

                            {e.imgtxt}
                        </div>
                        <div className="solut-details-imgabso"><img style={{ width: "150px" }} src={e.imgonimg} alt="" /></div> */}

                        <Grid container
                        //  className="soldetails-flex1st"
                        >
                            <Grid item md={4} lg={4} sm={12}
                                className="soldetails-flex1stleft"
                            >
                                <div onMouseEnter={() => setIndus({ index: i, isHover: true })}
                                            onMouseLeave={() => setIndus({ index: null, isHover: false })}>
                                    <div style={{ padding: "10%" }}>{e.title}</div>
                                    {indus.index == i && indus.isHover && (
                <>              
                    <Link to={`/salesmainedit?id=${e._id}`}  > <button className="buttons" style={{ marginTop: "-10%" }} >
                        Edit
                    </button>
                    </Link>
                </>
            )}
                                    </div>
                                <div style={{ border: "10px solid #FE602F", width: "60%", height: "0px" }}></div>

                            </Grid>
                            <Grid item md={8} lg={8} sm={12}
                                // className="soldetails-flex1stright" 
                                style={{ marginTop: "3%" }}>
                                <div>{e.para1}
                                            
                                          </div>
                                <div style={{ marginTop: "3%" }}>{e.para2}</div>
                            </Grid>

                        </Grid>
                        <div className="soldetails-flex2st">



                        </div>


                        <div style={{padding:"2%"}}>
                            {e?.sol?.map((el, i) => (
                                <>
                                    <Grid container 
                                    className="sol-det-mtr"
                                    
                                    >
                                        <Grid item sm={12} md={3} lg={3}
                                         className="sol-det-imgdiv"
                                        
                                        >
                                            <div><img style={{ width: "200px", height: "150px", justifyContent: "center", margin: "auto" }} src={el.img} /></div>
                                            <div
                                                className="sol-det-imgtitle"
                                            >{el.imgtitle}</div>
                                        </Grid>
                                        <Grid item sm={12} md={9} lg={9} 
                                         className="sol-det-descdiv" style={{paddingLeft:"7%"}}
                                        >
                                            
                                            <div 
                                            className="sol-detdesctitle"
                                             onMouseEnter={() => setIndus({ index: i, isHover: true })}
                                            onMouseLeave={() => setIndus({ index: null, isHover: false })}
                                            >{el.desctitle}
                                                                                       {indus.index == i && indus.isHover && (
                <>              
                    <Link to={`/salesforceedit?id=${e._id}&id2=${el._id}`}  > <button className="buttons" style={{ marginTop: "-10%" }} >
                        Edit
                    </button>
                    </Link>
                </>
            )}
                                            </div>
                                            <div style={{ marginTop: "2%" }}>{el.desc}</div>

 
                                        </Grid>
                                    </Grid>
                                </>
                            ))}
                            {/* <Footer/> */}

                        </div>
                    </>
                ))}
            </div>
            <Footer />
        </>
    )
}
export default SolutionDetail;