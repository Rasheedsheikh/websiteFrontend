import React, { useEffect, useRef, useState } from "react";

import './style.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "@fontsource/nunito";
import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import { Grid } from "@material-ui/core";

// import video from "./video.mp4"

import "./Fill.css";
import "./intro.css";
import "./whyStyle.css"
import Config from "../Config";

import { Link, useNavigate } from "react-router-dom";
import Career from "./Career";

import Mapp from "./Mapp";
import HomeNav from "./HomeNav";
import Services from "./Services";
import Industries from "./Industries";
import Solutions from "./Solutions";
import Newsroom from "./Newsroom";


const Home = () => {
    const [data, setData1] = useState([])

    const [videoh, setVideoh] = useState([])
    const [servdata, setservData] = useState([])
    const [industries, setIndu] = useState([])
    const [testimonials, setTesti] = useState([])
    const [solution, setSolu] = useState([])
    const [community, setCommu] = useState([])
    const [contact, setContact] = useState([])
    const [whychoose, setWhy] = useState([])
    const [isAdmin, setisAdmin] = useState(false)

    const [flag, setFlag] = useState(false)
    const [activeItem, setActiveItem] = useState(true)
    const navigate = useNavigate()
    const videoRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);

    const [formData, setFormData] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Message: ""
    })


    const handleItemEnter = (index) => {

        setActiveItem(index);
    };

    const handleItemLeave = () => {
        setActiveItem(null);
    };

    useEffect(() => {
        show()
    }, [])

    // useEffect(()=>{
    //     service()
    // })

    const [text, setText] = useState(0);
    const texts = ['A leading provider of life scienece and health care solutions', 'Patient support programs', "Drug adherence programs", "Decentralized clinical trials", "eBenefit verification", "ePedegree Solutions", "Let Us Drive Patients Outcome Together"];
    const [index, setIndex] = useState(false);
    const [indus, setIndus] = useState({
        index: null,
        isHover: false
    })

    // useEffect(() => {
    //     // const interval = setInterval(() => {
    //     //   setIndex(prevIndex => (prevIndex + 1) % texts.length);
    //     // }, 8000);

    //     // return () => clearInterval(interval);

    //     setTimeout(() => setIndex(0), 1000);
    //     setTimeout(() => setIndex(1), 10000);
    //     setTimeout(() => setIndex(2), 15000);
    //     setTimeout(() => setIndex(3), 18000);
    //     setTimeout(() => setIndex(4), 22000);
    //     setTimeout(() => setIndex(5), 27000);
    //     setTimeout(() => setIndex(6), 32000)
    // }, []);

    // useEffect(() => {
    //     setText(texts[index]);
    // }, [index]);
    // const updateTextElements = () => {
    //     const video = videoRef.current;
    //     const text1 = document.getElementById("text1");
    //     const text2 = document.getElementById("text2");
    //     const text3 = document.getElementById("text3");
    //     const text4 = document.getElementById("text4");
    //     const text5 = document.getElementById("text5");
    //     const text6 = document.getElementById("text6");
    //     const text7 = document.getElementById("text7");


    //     if (video.currentTime > 0 && video.currentTime < 10) {
    //         text1.style.display = "block";
    //         text2.style.display = "none";
    //         text3.style.display = "none";
    //         text4.style.display = "none";
    //         text5.style.display = "none";
    //         text6.style.display = "none";
    //         text7.style.display = "none";
    //     } else if (video.currentTime >= 10 && video.currentTime < 16) {
    //         text1.style.display = "none";
    //         text2.style.display = "block";
    //         // text2.style.paddingLeft="30%"
    //         text3.style.display = "none";
    //         text4.style.display = "none";
    //         text5.style.display = "none";
    //         text6.style.display = "none";
    //         text7.style.display = "none";
    //     } else if (video.currentTime > 16 && video.currentTime < 22) {
    //         text1.style.display = "none";
    //         text2.style.display = "none";
    //         text3.style.display = "block";
    //         // text3.style.paddingLeft="30%"
    //         text4.style.display = "none";
    //         text5.style.display = "none";
    //         text6.style.display = "none";
    //         text7.style.display = "none";
    //     }
    //     else if (video.currentTime >= 22 && video.currentTime < 27) {
    //         text1.style.display = "none";
    //         text2.style.display = "none";
    //         text3.style.display = "none";
    //         text4.style.display = "block";
    //         // text4.style.paddingLeft="25%"
    //         text5.style.display = "none";
    //         text6.style.display = "none";
    //         text7.style.display = "none";
    //     }
    //     else if (video.currentTime >= 27 && video.currentTime < 31) {
    //         text1.style.display = "none";
    //         text2.style.display = "none";
    //         text3.style.display = "none";
    //         text4.style.display = "none";
    //         text5.style.display = "block";
    //         // text5.style.paddingLeft="30%"
    //         text6.style.display = "none";
    //         text7.style.display = "none";
    //     }
    //     else if (video.currentTime >= 31 && video.currentTime < 36) {
    //         text1.style.display = "none";
    //         text2.style.display = "none";
    //         text3.style.display = "none";
    //         text4.style.display = "none";
    //         text5.style.display = "none";
    //         text6.style.display = "block";
    //         // text6.style.paddingLeft="30%"
    //         text7.style.display = "none";
    //     }

    //     else if (video.currentTime >= 36 && video.currentTime < 41) {
    //         text1.style.display = "none";
    //         text2.style.display = "none";
    //         text3.style.display = "none";
    //         text4.style.display = "none";
    //         text5.style.display = "none";
    //         text6.style.display = "none";
    //         text7.style.display = "block";
    //         // text7.style.paddingLeft="10%"
    //     }


    //     else {
    //         text1.style.display = "none";
    //         text2.style.display = "none";
    //         text3.style.display = "none";
    //         text4.style.display = "none";
    //         text5.style.display = "none";
    //         text6.style.display = "none";
    //         text7.style.display = "none";
    //     }
    // };


    // const video = videoRef.current;
    // video.addEventListener('timeupdate', updateTextElements);

    // return () => {
    //     video.removeEventListener('timeupdate', updateTextElements);
    // };



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
    // console.log(db)






    // testimonials
    const Testimonials = async () => {
        try {
            let res = await fetch(`${Config.host}/get-testimonials`)
            let Testimonialsdataa = await res.json()
            console.log({ Testimonialsdataa })
            setTesti(Testimonialsdataa)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        Testimonials()
    }, [])



    const mainvideo = async () => {
        try {
            let res = await fetch("http://localhost:2233/get-video")
            let mainvideodataa = await res.json()
            console.log({ mainvideodataa })
            setVideoh(mainvideodataa)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        mainvideo()
    }, [])

    // industries



    // solutions



    // community
    const Community = async () => {
        try {
            let res = await fetch(`${Config.host}/get-community`)
            let communitydataa = await res.json()
            // console.log({ communitydataa })
            setCommu(communitydataa)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        Community()
    }, [])

    // contact

    const Contact = async () => {
        try {
            let res = await fetch(`${Config.host}/get-contact`)
            let Contactdataa = await res.json()
            // console.log({ Contactdataa })
            setContact(Contactdataa)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        Contact()
    }, [])
    // why choose us

    const whyChoose = async () => {
        try {
            let res = await fetch(`${Config.host}/get-whyChoose`)
            let whyChoosedataa = await res.json()
            // console.log({ whyChoosedataa })
            setWhy(whyChoosedataa)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        whyChoose()
    }, [])

    const handlenavbar = () => {
        setIndex(true)
    }
    const handlenavbarleave = () => {
        setIndex(false)
    }




    //Email

    const handledetails = (e) => {
        console.log(formData)
        // e.preventDefault()
        const data = {

            "FirstName": formData.FirstName,
            "LastName": formData.LastName,
            "Email": formData.Email,
            "Message": formData.Message,


        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch(`${Config.host}/post-email`, requestOptions)

            .then(data => {
                return data.json();
            })
            .then(post => {
                alert("sucesss")
            });


    }


    const updateFormData = (event) =>
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

    const {
        FirstName,
        LastName,
        Email,
        Message
    } = formData;


    return (
        <>
            <nav onMouseEnter={handlenavbar} onMouseLeave={handlenavbarleave}>{index ?
                <div className="Nav">
                    <div className="NavLeft">
                        <img style={{ width: "250px", height: "50px", marginTop: "10px" }} src="./Images/logo (1).jpg" alt="/" />
                    </div>

                    <div className="NavRight">
                        {data?.Total?.NavRoutes?.map((e, i) => (
                            <div key={i} onMouseEnter={() => handleItemEnter(i)}
                                onMouseLeave={handleItemLeave}
                            >

                                {/* <Link style={{textDecoration:"none", color:"#000000"}} to={e.path} ><div>{e.name}</div></Link>  */}
                                <a style={{ textDecoration: "none", color: "#FFFFFF" }}

                                    href={e.path} onClick={() => {
                                        if (e.path === "#career") {
                                            setFlag(true)



                                        } else {
                                            setFlag(false)
                                        }
                                    }} >
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


            {!flag && <div>



                <div className="main-box-1" >

                    <div>
                        {/* <div className="white-bg-box-1">
                        <div className="POWEROF">THE POWER OF</div>
                        <div className="TECH" style={{color:"#FE602F"}}>TECHNOLOGY</div>
                        </div> */}
                        <div>
                            {videoh?.map((e, i) => (


                                <video ref={videoRef} className='videoTag' autoPlay loop muted style={{ marginTop: "-9%", height: "75%", width: "100%", zIndex: "-2", position: "relative" }}>
                                    <source src={e.vid} type='video/mp4' />
                                </video>
                            ))}
                            <div className="txt-ovr"></div>
                            <div className="text-overlay">
                                {/* <div>A leading provider of life scienece and health care solutions</div> */}
                                {/* <div>{text}</div> */}


                                <div id="text1" className="vidtx">A leading provider of life science and health care solutions</div>
                            </div>
                            <div className="text-overlay2">
                                <div id="text2" className="vidtx" >Patient support programs</div>
                            </div>

                            <div className="text-overlay3">
                                <div id="text3" className="vidtx" >Drug adherence programs</div>
                            </div>

                            <div className="text-overlay4">
                                <div id="text4" className="vidtx" >Decentralized clinical trials</div>
                            </div>
                            <div className="text-overlay5">
                                <div id="text5" className="vidtx" >eBenefit verification</div>
                            </div>
                            <div className="text-overlay6">
                                <div id="text6" className="vidtx">ePedigree Solutions</div>
                            </div>
                            <div className="text-overlay7">
                                <div id="text7" className="vidtx" >Let Us Drive Patients Outcome Together</div>
                            </div>



                        </div>

                    </div>

                </div>

                <Services />

                <Industries />
                <Solutions />

                <Newsroom />

                {/* {data?.Total?.Testimonials?.main?.map((e, i) => ( */}



                <div className='why-main-box' style={{ width: "99%", margin: "auto" }}>
                    {whychoose?.map((e, i) => (
                        <div >


                            <h1>{e.title}</h1>
                            <div className='why-main-box-1'>
                                {/* <div className="why-flex-main"> */}
                                <div className="why-flex">
                                    <div>

                                        {e?.desc?.map((el, i) => (
                                            <div key={i} onMouseEnter={() => setIndus({ index: i, isHover: true })}
                                                onMouseLeave={() => setIndus({ index: null, isHover: false })}>
                                                <div className='why-text-box'>
                                                    <div className='why-oranged'><p>{el.number}</p></div>
                                                    <div style={{ marginTop: "5%" }}>{el.detail}
                                                        {indus.index == i && indus.isHover && (
                                                            <>

                                                                <Link to={`/whychooseedit?id=${e._id}&id2=${el._id}`}><button style={{ marginLeft: "10%" }} className="edbuttons" >
                                                                    Edit
                                                                </button>
                                                                </Link>
                                                            </>
                                                        )}


                                                    </div>

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



                    <Stack id="Community">
                        {community?.map((e, i) => (

                            <Stack key={i}
                                className="community-title"
                            >
                                <div
                                    className="community">

                                    <div>{e.title}</div>
                                </div>
                                <Grid container spacing={2} style={{ marginTop: "2%" }}
                                //   className="com-mainParent" 
                                >
                                    <Grid item md={5} sm={12} lg={5} >
                                        <img style={{ width: "100%", height: "95%", marginTop: "15px" }} src={e.IMG} alt="" /></Grid>
                                    {e?.details?.map((el, i) => (
                                        <Grid item md={7} sm={12} lg={7} key={i} >
                                            <Grid container>
                                                <Grid item md={12} sm={12} lg={12}
                                                    className="commu-heading"
                                                    key={i} onMouseEnter={() => setIndus({ index: i, isHover: true })}
                                                    onMouseLeave={() => setIndus({ index: null, isHover: false })}
                                                >
                                                    <div>{el.heading1}</div>
                                                    <div style={{ color: "#FE602F" }}>{el.heading2}</div>
                                                    {indus.index == i && indus.isHover && (
                                                        <>

                                                            <Link to={`/communityedit?id=${e._id}&id2=${el._id}`}><button style={{ marginLeft: "10%", marginTop: "-15%" }} className="edbuttons" >
                                                                Edit
                                                            </button>
                                                            </Link>
                                                        </>
                                                    )}
                                                </Grid>
                                                <div>
                                                    <div className="commu-desc">{el.desc}</div>
                                                </div>
                                                <div>
                                                    <Stack style={{ alignSelf: "center", justifyContent: "center", alignItems: "center", marginLeft: "100%" }}> <Link to="/careerm">
                                                        <center><button className="buttons" style={{ margin: "auto", alignSelf: "center", justifyContent: "center", alignItems: "center", marginLeft: "100%" }}>Join us</button>
                                                        </center></Link>



                                                    </Stack>

                                                </div>
                                                <Grid container className="commu-images">



                                                    {e?.images?.map((element, i) => (
                                                        <Grid item md={5} lg={5.5} sm={12} key={i}>
                                                            <Stack style={{ padding: "10px", marginLeft: "-20px" }}>
                                                                <div><img style={{ width: "360px", height: "240px" }} src={element} alt="" /></div>
                                                            </Stack>
                                                        </Grid>
                                                    ))}
                                                </Grid>
                                            </Grid>

                                        </Grid>
                                    ))}

                                </Grid>
                            </Stack>
                        ))}
                    </Stack>


                    <Stack className="contact-parent" flexDirection={"row"} style={{ width: "95%" }}>
                        <Grid container spacing={4}>
                            {contact?.map((e, i) => (
                                <Grid key={i} item xl={6} lg={6} md={6} sm={12} xs={12} style={{ marginTop: "20px" }}
                                    onMouseEnter={() => setIndus({ index: i, isHover: true })}
                                    onMouseLeave={() => setIndus({ index: null, isHover: false })}
                                >
                                    <div className="contact">{e.title}</div>

                                    <div key={i} className="contact-quote">
                                        <div>{e.heading1}</div>
                                        <div style={{ color: "#FE602F" }}>{e.heading2}</div>


                                    </div>



                                    <div key={i} className="address">
                                        <div>{e.line1}</div>
                                        <div>{e.line2}</div>
                                        <div>{e.Email}</div>
                                        <div>{e.telephone}</div>



                                        {indus.index == i && indus.isHover && (
                                            <>

                                                <Link to={`/contactedit?id=${e._id}`}><button style={{ marginLeft: "10%", marginTop: "-15%" }} className="edbuttons" >
                                                    Edit
                                                </button>
                                                </Link>
                                            </>
                                        )}
                                    </div>


                                    <hr style={{ width: "393px", height: "10px", left: "116px", top: "5969.78px", background: "#FE602F" }} />


                                </Grid>
                            ))}

                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} className="email">{contact &&
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


                                            {/* <TextField
                                                className="text"
                                                style={{ borderBottom: "#FE602F" }}
                                                variant="filled"
                                                id="Firstname"
                                                label={"Email"}
                                                onChange={e => updateFormData(e)}
                                                value={firstName}
                                                autoComplete="something-unsupported"
                                                required
                                                //   value={""}
                                                fullWidth

                                            /> */}
                                            <TextField className="text"
                                                variant="filled"
                                                style={{ borderBottom: "#FE602F" }}
                                                // variant="filled"
                                                color="info"
                                                // variant="outlined"
                                                // id="firstname"
                                                label="First Name"
                                                onChange={e => updateFormData(e)}

                                                autoComplete="something-unsupported"
                                                name="FirstName"

                                                value={FirstName}
                                                required

                                                fullWidth

                                            />
                                        </Grid>
                                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}
                                            style={{ padding: "10px" }}
                                        //  className="textborder"
                                        >



                                            {/* <TextField
                                                className="text"
                                                style={{ borderBottom: "#FE602F" }}
                                                variant="filled"
                                                id="Lastname"
                                                label="Last Name"
                                                onChange={e => updateFormData(e)}
                                                value={LastName}
                                                autoComplete="something-unsupported"
                                                required
                                                //   value={""}
                                                fullWidth

                                            /> */}


                                            <TextField className="text"
                                                variant="filled"
                                                style={{ borderBottom: "#FE602F" }}
                                                // variant="filled"
                                                color="info"
                                                // variant="outlined"
                                                // id="firstname"
                                                label="Last Name"
                                                onChange={e => updateFormData(e)}

                                                autoComplete="something-unsupported"
                                                name="LastName"

                                                value={LastName}
                                                required

                                                fullWidth

                                            />
                                        </Grid>


                                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}
                                            style={{ padding: "10px" }}
                                        //  className="textborder"
                                        >
                                            {/* <TextField
                                                className="text"
                                                style={{ borderBottom: "#FE602F" }}
                                                variant="filled"
                                                //   id="firstname"
                                                label={"Email"}
                                                onChange={e => updateFormData(e)}
                                                value={Email}
                                                autoComplete="something-unsupported"
                                                required
                                                //   value={""}
                                                fullWidth
                                            /> */}


                                            <TextField className="text"
                                                variant="filled"
                                                style={{ borderBottom: "#FE602F" }}
                                                // variant="filled"
                                                color="info"
                                                // variant="outlined"
                                                // id="firstname"
                                                label="Email"
                                                onChange={e => updateFormData(e)}

                                                autoComplete="something-unsupported"
                                                name="Email"

                                                value={Email}
                                                required

                                                fullWidth

                                            />
                                        </Grid>


                                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}
                                            style={{ padding: "10px" }}
                                        //  className="textborder"
                                        >
                                            {/* <TextField
                                                className="text"
                                                style={{ borderBottom: "#FE602F" }}
                                                variant="filled"
                                                //   id="firstname"
                                                label={"Message"}
                                                onChange={e => updateFormData(e)}
                                                value={Message}
                                                autoComplete="something-unsupported"
                                                required
                                                //   value={""}
                                                fullWidth
                                            /> */}

                                            <TextField className="text"
                                                variant="filled"
                                                style={{ borderBottom: "#FE602F" }}
                                                // variant="filled"
                                                color="info"
                                                // variant="outlined"
                                                // id="firstname"
                                                label="Message"
                                                onChange={e => updateFormData(e)}

                                                autoComplete="something-unsupported"
                                                name="Message"

                                                value={Message}
                                                required

                                                fullWidth

                                            />
                                        </Grid>
                                    </Grid>
                                </Stack>
                            }
                                <button className="Emailbutt" onClick={() => handledetails()}>Submit</button>
                            </Grid>
                        </Grid>
                    </Stack>


                    <div className="location">
                        <center className="loc-title">Locate us</center>
                        <Mapp />
                    </div>

                    {data?.Total?.Footer?.map((obj, i) => (
                        <div key={i} className="footerParent" style={{ margin: "auto" }}>
                            <div className="footerMain">
                                {/* <div><img style={{width:"264px", height:"248px"}} src={e.img}/> </div> */}
                                <div className="footerLeft">
                                    <div>
                                        {obj?.line1?.map((e, i) => (
                                            <a style={{ textDecoration: "none" }} href={e.route}>
                                                <div key={i} className="footerline1">
                                                    {e}
                                                </div>
                                            </a>
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

                                            <div className="footerline2">
                                                <div> <img style={{ width: "60px", height: "45px", objectFit: "cover", justifyContent: "center", margin: "auto", alignContent: "center", marginLeft: "30%", marginBottom: "2%" }} src="./Images/valueFooter.png" /></div>

                                                <div>{e}</div>
                                            </div>
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
                                                        <img style={{ border: "1px solid white", width: "41.75px", height: "45.5px", backgroundColor: "white", borderRadius: "10px" }} src={ele} alt="" />
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
export default Home;