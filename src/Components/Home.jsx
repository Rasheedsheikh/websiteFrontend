import React, { useEffect, useState } from "react";

import './style.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import { Grid } from "@material-ui/core";
// import video from "./video.mp4"

import "./Fill.css";
import "./intro.css";
import "./whyStyle.css"
import Config from "../Config";

import { Link } from "react-router-dom";
import Career from "./Career";

import Mapp from "./Mapp";


const Home = () => {
    const [data, setData1] = useState([])
    const [flag, setFlag] = useState(false)
    const [activeItem, setActiveItem] = useState(true)

    const handleItemEnter = (index) => {

        setActiveItem(index);
    };

    const handleItemLeave = () => {
        setActiveItem(null);
    };

    useEffect(() => {
        show()
    }, [])

    // useEffect(() => {
    //     console.log({URL: window.location.pathname});
    //     if (window.location.pathname.includes("career")) {
    //         setFlag(true)
    //     }
    //     else {
    //         setFlag(false)
    //     }

    // },[])


    const show = async () => {
        try {
            let res = await fetch(`${Config.host}/home`)
            let dataa = await res.json()
            console.log(dataa.data)
            setData1(dataa.data)
        }
        catch (err) {
            console.log(err)
        }
    }
    // console.log(db)





    return (
        <>
            <div className="Nav">
                <div className="NavLeft">
                    <img style={{ width: "253px", height: "60px", }} src="./Images/Logo SVG(White).png" alt="/" />
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


                                {activeItem===i && (
              <div className="dropdown-menu" style={{ textDecoration: "none"}}>
                {e?.options.map((option, optionIndex) => (
                  <div style={{}}className="hoveroptions" key={optionIndex}>{option}</div>
                ))}
              </div>
            )}
                            {/* { console.log(e,i)} */}
                        </div>
                    ))}
                </div>
            </div>
            {!flag && <div>

       
                <div className="main-box-1" >

                    <div>
                        {/* <div className="white-bg-box-1">
                        <div className="POWEROF">THE POWER OF</div>
                        <div className="TECH" style={{color:"#FE602F"}}>TECHNOLOGY</div>
                        </div> */}
                        <div >
                            <video className='videoTag' autoPlay loop muted style={{ marginTop: "-10%", height: "800px", width: "100%", zIndex: "-2" }}>
                                <source src="https://vhs-overview-video.s3.amazonaws.com/media/VHS+Overview+16.9.mp4" type='video/mp4' />
                            </video>

                        </div>

                    </div>

                </div>

                <div id="Services" className="Service">
                    {data?.Total?.Services?.what?.map((e, i) => (
                        <div key={i}>
                            <div className="ServiceMain">{e.title}</div>

                            <div className="serviceDual">{e.desc}</div>

                        </div>
                    )
                        //    { console.log(e,i)}
                    )}
                </div>

                <div className="shapes">


                    {/* {data?.Total.Services.shapes.map((e, i) => ( */}
                    {data?.Total?.Services?.shapes?.map((obj, i) => (
                        <div key={i} className="shapes1" style={i % 2 === 1 ? { backgroundColor: "#F5F5F5", border: "none" } : { backgroundColor: "white" }}>
                            <div className="numb">{obj.number}</div>

                            <div className="abso">

                                <div className="service-heading">{obj.heading}</div>

                                <div>
                                    {obj?.desc?.map((el, i) => (
                                        <div key={i} className="service-desc">
                                            <ul style ={{}}>
                                            <li style ={{}}>{el}
                                            </li></ul>
                                            {/* <div style={{ margin: "auto", marginLeft: "15px" }}>{el}</div> */}
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                        //    { console.log(e,i)}    
                    ))}
                </div>

                <div id="Industriess">
                    {data?.Total?.Industries?.heading?.map((e, i) => (
                        <div key={i} >
                            <div className="Indus-heading"> {e}</div>

                        </div>
                    ))}
                </div>

                <div style={{ width: "95%", margin: "auto" }} className="Indus-insder-cont">
                    {data?.Total?.Industries?.insider?.map((e, i) => (
                        <div key={i} className="Indus-insder-cont-child">
                            <div><img className="insiderimg" src={e.img} alt="" /></div>
                            <div className="indus-title"> {e.title}</div>
                            <div className="indus-desc"> {e.desc}</div>
                            <Link to="/learn">  <div> <button className="buttons">Learn More</button></div>
                            </Link>

                        </div>
                    ))}
                </div>
                <div >
                    <div id="Solution" className="Solution" style={{ width: "99%", margin: "auto" }}>
                        <div className="Solution-heading-cont" >
                            {data?.Total?.Solutions?.heading?.map((e, i) => (
                                <div key={i} className="solu-back">
                                    <div className="sol-heading-title">
                                        <div className="sol-heading-title-div"> {e.title}</div>
                                    </div>
                                    <div>
                                        <div className="sol-desc"> {e.desc}</div>

                                    </div>

                                </div>
                            ))}
                        </div>

                        <div className="Solution-images" >
                            {data?.Total?.Solutions?.Images?.map((e, i) => (
                                <div key={i} className="sol-img-abs" >
                                    <div className="solImgdiv"><img style={{ width: "180px", height: "160px" }} src={e.img} alt="" />
                                        <div className="solution-images-title">{e.title}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {data?.Total?.Testimonials?.main?.map((e, i) => (
                    <div key={i}>
                        <div className="testimo-title">{e.title}</div>
                        <center >
                            <img className="testimoImg" style={{ width: "151px", height: "151px", borderRadius: "50%" }} src={e.img} alt="" /></center>
                        <div className="carouse">
                            <Carousel
                                showThumbs={true}
                                infiniteLoop={true}
                                swipeable={false}
                                dynamicHeight={false} >
                                {e?.slide.map((el, i) =>
                                (
                                    <div key={i} style={{ width: "85%", justifyContent: "center", margin: "auto", marginTop: "3%" }}>
                                        <div className="slider-desc">{el.desc}</div>
                                        <div className="slider-role-name" style={{ marginTop: "5%" }}>
                                            <div>{el.name}</div>
                                            <div>{el.role}</div>
                                        </div>
                                        <div style={{ marginBottom: "5%" }}>{el.at}</div>
                                    </div>
                                ))}

                            </Carousel>
                        </div>

                    </div>
                ))}

                <div className='why-main-box' style={{ width: "99%", margin: "auto" }}>
                    {data?.Total?.Testimonials?.why?.map((e, i) => (
                        <div key={i} >


                            <h1>{e.title}</h1>
                            <div className='why-main-box-1'>
                                {/* <div className="why-flex-main"> */}
                                <div className="why-flex">
                                    <div>

                                        {e?.desc?.map((el, i) => (
                                            <div key={i}>
                                                <div className='why-text-box'>
                                                    <div className='why-oranged'><p>{el.number}</p></div>
                                                    <div style={{ marginTop: "5%" }}>{el.detail}   </div>
                                                </div>
                                            </div>
                                        ))
                                        }


                                    </div>
                                </div>


                                <div className='why-img-box'>
                                    <img src="./Images/OBJECTS.jpg" alt="" />
                                </div>
                            </div>

                        </div>



                    ))}
                    {/* <Why/> */}



                    <div id="Community">
                        {data?.Total?.community?.map((e, i) => (

                            <div key={i} className="community-title">
                                <div className="community">

                                    <div>{e.title}</div>
                                </div>
                                <div className="com-mainParent">
                                    <div><img style={{ width: "500px", height: "740px", marginTop: "15px" }} src={e.IMG} alt="" /></div>
                                    {e?.details?.map((el, i) => (
                                        <div key={i}>

                                            <div className="commu-heading">
                                                <div>{el.heading1}</div>
                                                <div style={{ color: "#FE602F" }}>{el.heading2}</div>
                                            </div>
                                            <div>
                                                <div className="commu-desc">{el.desc}</div>
                                            </div>
                                            <div>
                                                <center> <Link to="/career"><button className="buttons" style={{ marginBottom: "10px" }}>Join us</button></Link>
                                                </center>
                                            </div>
                                            <div className="commu-images">
                                                {e?.images?.map((element, i) => (
                                                    <div key={i}>
                                                        <div><img style={{ width: "350px", height: "244px" }} src={element} alt="" /></div></div>
                                                ))}
                                            </div>

                                        </div>
                                    ))}

                                </div>
                            </div>
                        ))}
                    </div>


                    <Stack className="contact-parent" flexDirection={"row"} style={{ width: "95%" }}>
                        <Grid container spacing={4}>
                            {data?.Total?.Testimonials?.contact?.map((e, i) => (
                                <Grid key={i} item xl={6} lg={6} md={6} sm={12} xs={12} style={{ marginTop: "20px" }}>
                                    <div className="contact">{e.title}</div>

                                    {e?.quote?.map((el, i) => (
                                        <div key={i} className="contact-quote">
                                            <div>{el.line1}</div>
                                            <div style={{ color: "#FE602F" }}>{el.line2}</div>
                                        </div>
                                    ))}

                                    {e?.address?.map((ele, i) => (
                                        <div key={i} className="address">
                                            <div>{ele.line1}</div>
                                            <div>{ele.line2}</div>
                                            <div>{ele.Email}</div>
                                            <div>{ele.telephone}</div>
                                        </div>
                                    ))}
                                    <hr style={{ width: "393px", height: "10px", left: "116px", top: "5969.78px", background: "#FE602F" }} />
                                </Grid>
                            ))}

                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} className="email">{data?.Total?.Testimonials?.contact &&
                                <Stack
                                    style={{
                                        width: "70%",
                                        //   marginTop:"80px",
                                        margin: "auto"

                                    }}

                                >
                                    <Grid container
                                        spacing={4}
                                        style={{ padding: "10px", marginTop: "7px" }}
                                    >
                                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}
                                            style={{ padding: "10px" }}
                                        //  className="textborder"
                                        >


                                            <TextField
                                                className="text"
                                                style={{ borderBottom: "#FE602F" }}
                                                variant="filled"
                                                //   id="Lastname"
                                                label={"First Name"}
                                                autoComplete="something-unsupported"
                                                required
                                                value={""}
                                                fullWidth

                                            />
                                        </Grid>
                                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}
                                            style={{ padding: "10px" }}
                                        //  className="textborder"
                                        >



                                            <TextField
                                                className="text"
                                                style={{ borderBottom: "#FE602F" }}
                                                variant="filled"
                                                id="firstname"
                                                label={"Last Name"}
                                                autoComplete="something-unsupported"
                                                required
                                                //   value={""}
                                                fullWidth

                                            />
                                        </Grid>


                                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}
                                            style={{ padding: "10px" }}
                                        //  className="textborder"
                                        >



                                            <TextField
                                                className="text"
                                                style={{ borderBottom: "#FE602F" }}
                                                variant="filled"
                                                //   id="firstname"
                                                label={"Email"}
                                                autoComplete="something-unsupported"
                                                required
                                                //   value={""}
                                                fullWidth

                                            />
                                        </Grid>


                                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}
                                            style={{ padding: "10px" }}
                                        //  className="textborder"
                                        >



                                            <TextField
                                                className="text"
                                                style={{ borderBottom: "#FE602F" }}
                                                variant="filled"
                                                //   id="firstname"
                                                label={"Leave Your message"}
                                                autoComplete="something-unsupported"
                                                required
                                                //   value={""}
                                                fullWidth

                                            />
                                        </Grid>
                                    </Grid>
                                </Stack>

                            }

                                <button className="Emailbutt">Submit</button>
                            </Grid>
                        </Grid>
                    </Stack>


                    <div className="location">
                        <center className="loc-title">Locate us</center>
                        <Mapp />
                    </div>



                    {data?.Total?.Footer?.map((obj, i) => (
                        <div key={i} className="footerParent">
                            <div className="footerMain">
                                {/* <div><img style={{width:"264px", height:"248px"}} src={e.img}/> </div> */}
                                <div className="footerLeft">
                                    <div>
                                        {obj?.line1?.map((e, i) => (
                                            <div key={i} className="footerline1" >{e}</div>
                                        ))}
                                    </div>

                                    <div>
                                        {obj?.line2?.map((e, i) => (
                                            <div key={i} className="footerline1" >{e}</div>
                                        ))}
                                    </div>
                                </div>

                                <div>

                                    {obj?.line3?.map((e, i) => (
                                        <div key={i}>
                                            {/* <div> <img style={{width:"30px", height:"20px"}} src="./Images/n.jpg"/></div> */}
                                            <div className="footerline2">{e}</div>
                                        </div>
                                    ))}
                                </div>

                                <div>
                                    {obj?.line4?.map((e, i) => (
                                        <div key={i}>

                                            <div className="footerline1">{e.title}</div>
                                            <div>
                                                {e?.icons?.map((ele, i) => (
                                                    <div key={i}>
                                                        <img style={{ border: "1px solid white", width: "41.75px", height: "46.5px", backgroundColor: "white", borderRadius: "10px" }} src={ele} alt="" />
                                                    </div>
                                                ))}
                                            </div>

                                        </div>
                                    ))}
                                </div>



                            </div>
                        </div>

                    ))}

                </div>
            </div>}
            <div>
                {flag &&
                    <div><Career /></div>}
            </div>
        </>
    )
}
export default Home