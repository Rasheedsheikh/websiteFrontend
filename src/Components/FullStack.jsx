import React, { useEffect, useState , Fragment} from "react";
import "./solDetail.css";
import db from "../db.json"
import Navbar from "./Navbar";
import Footer from "./Footer";
import Navbar2 from "./Navbar2";
import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import { Grid } from "@material-ui/core";
import Config from "../Config";
import { Link } from "react-router-dom";

const FullStack = () => {
    const [indus, setIndus] = useState({
        index: null,
        isHover: false
    })

    const [fuldata, setFuldata] = useState([])
    const fulstack = async () => {
        try {
            let res = await fetch("http://localhost:2233/get-fullStack")
            let data = await res.json()
            console.log({ data })
            setFuldata(data)
        }
        catch (err) {
            console.log(err)
        }
    }
console.log({fuldata})
    useEffect(() => {
        fulstack()
    }, [])
    return (
        <Fragment>
            <Navbar2 />
            <div>
                {fuldata?.map((e, i) => 
                    // {console.log(fuldata)}
                    <Fragment key={i}>

                        <div className="solut-details-first" >
                            <img style={{ width: "100%", height: "590px", position: "relative" ,marginTop:"-2%"}} src={e.image} alt="" />
                        </div>
                        {/* <div className="mernpic">
                            <img style={{ objectFit: "cover", width: "700px" }} src="./Images/Mern.png" alt="" />
                        </div> */}
                        <Grid container
                            //  className="soldetails-flex1st" 
                            style={{ marginTop: "3%" }}
                        >
                            <Grid item sm={12} md={4} lg={4}
                                className="soldetails-flex1stleft"
                            >
                                <div style={{ paddingLeft: "7%" }}
                                onMouseEnter={() => setIndus({ index: i, isHover: true })}
                                onMouseLeave={() => setIndus({ index: null, isHover: false })}>{e.title}
                                  {indus.index == i && indus.isHover && (
                <>              
                    <Link to={`/fullstackmainedit?id=${e._id}`}  > <button className="buttons" style={{ marginTop: "-10%" }} >
                        Edit
                    </button>
                    </Link>
                </>
            )} </div>
                                <Stack sx={{ marginTop: { lg: "30px", md: "30px", xl: "30px" }, border: "10px solid #FE602F", width: "70%", height: "0px", }}></Stack>

                            </Grid>
                            <Grid item sm={12} md={8} lg={8} style={{ paddingRight: "3%" }}
                                className="soldetails-flex1stright"
                            >
                                <div>{e.para1}</div>

                                <div
                                    style={{ marginTop: "1%" }}
                                >{e.para2}</div>
                                


                            </Grid>

                        </Grid>

                        <div className="soldetails-flex2st">


                        </div>

                        <div>
                {e?.ful?.map((el, i) => (
                    <>
                        <Grid container  spacing={2}
                        // className="sol-det-mtr"
                         >
                            <Grid item sm={12} md={3} lg={3}
                             className="sol-det-imgdiv"
                              style={{marginTop:"3%",marginBottom:"3%",paddingLeft:"5%",objectFit:"cover"}}>
                                <div style={{margin:"auto",justifyContent:"center",alignSelf:"center",textAlign:"center"}}><img style={{width:"100%",height:"210px",justifyContent:"center",margin:"auto",borderRadius:"10px",textAlign:"center"}} src={el.img} alt="" /></div>
                                
                            </Grid>
                            
                            <Grid item sm={12} md={9} lg={9}
                           
                             className="sol-det-descdiv" 
                             style={{marginTop:"3%"}}
                             >
                                 <div style={{paddingLeft:"10%",paddingRight:"10%"}}>
                                <div className="sol-detdesctitle" onMouseEnter={() => setIndus({ index: i, isHover: true })}
                                    onMouseLeave={() => setIndus({ index: null, isHover: false })}>{el.desctitle}
                                      {indus.index == i && indus.isHover && (
                        
                    <Link to={`/fullstackedit?id=${e._id}&id2=${el._id}`}  > <button className="buttons" style={{ marginTop: "-10%" }} >
                        Edit
                    </button>
                    </Link>
          
            
            )}
                                    </div>

                                <div style={{marginTop:"2%"}}>{el.desc}</div>
                                </div>
                            </Grid>
                        </Grid>
                    </>
                ))}
                   
            </div>

                    </Fragment>
                )}
            </div>
            <Footer />
        </Fragment>
    )
}
export default FullStack;