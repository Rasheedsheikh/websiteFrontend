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


const Home = () => {
    const [data, setData1] = useState([])

    const [servdata, setservData] = useState([])
    const [industries, setIndu] = useState([])
    const [testimonials, setTesti] = useState([])
    const [solution, setSolu] = useState([])
    const [community, setCommu] = useState([])
    const [contact, setContact] = useState([])
    const [whychoose, setWhy] = useState([])


    const [flag, setFlag] = useState(false)
    const [activeItem, setActiveItem] = useState(true)
    const navigate = useNavigate()
    const videoRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);
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


    useEffect(() => {
        const updateTextElements = () => {
            const video = videoRef.current;
            const text1 = document.getElementById("text1");
            const text2 = document.getElementById("text2");
            const text3 = document.getElementById("text3");
            const text4 = document.getElementById("text4");
            const text5 = document.getElementById("text5");
            const text6 = document.getElementById("text6");
            const text7 = document.getElementById("text7");


            if (video.currentTime > 0 && video.currentTime < 10) {
                text1.style.display = "block";
                text2.style.display = "none";
                text3.style.display = "none";
                text4.style.display = "none";
                text5.style.display = "none";
                text6.style.display = "none";
                text7.style.display = "none";
            } else if (video.currentTime >= 10 && video.currentTime < 16) {
                text1.style.display = "none";
                text2.style.display = "block";
                // text2.style.paddingLeft="30%"
                text3.style.display = "none";
                text4.style.display = "none";
                text5.style.display = "none";
                text6.style.display = "none";
                text7.style.display = "none";
            } else if (video.currentTime > 16 && video.currentTime < 22) {
                text1.style.display = "none";
                text2.style.display = "none";
                text3.style.display = "block";
                // text3.style.paddingLeft="30%"
                text4.style.display = "none";
                text5.style.display = "none";
                text6.style.display = "none";
                text7.style.display = "none";
            }
            else if (video.currentTime >= 22 && video.currentTime < 27) {
                text1.style.display = "none";
                text2.style.display = "none";
                text3.style.display = "none";
                text4.style.display = "block";
                // text4.style.paddingLeft="25%"
                text5.style.display = "none";
                text6.style.display = "none";
                text7.style.display = "none";
            }
            else if (video.currentTime >= 27 && video.currentTime < 31) {
                text1.style.display = "none";
                text2.style.display = "none";
                text3.style.display = "none";
                text4.style.display = "none";
                text5.style.display = "block";
                // text5.style.paddingLeft="30%"
                text6.style.display = "none";
                text7.style.display = "none";
            }
            else if (video.currentTime >= 31 && video.currentTime < 36) {
                text1.style.display = "none";
                text2.style.display = "none";
                text3.style.display = "none";
                text4.style.display = "none";
                text5.style.display = "none";
                text6.style.display = "block";
                // text6.style.paddingLeft="30%"
                text7.style.display = "none";
            }

            else if (video.currentTime >= 36 && video.currentTime < 41) {
                text1.style.display = "none";
                text2.style.display = "none";
                text3.style.display = "none";
                text4.style.display = "none";
                text5.style.display = "none";
                text6.style.display = "none";
                text7.style.display = "block";
                // text7.style.paddingLeft="10%"
            }


            else {
                text1.style.display = "none";
                text2.style.display = "none";
                text3.style.display = "none";
                text4.style.display = "none";
                text5.style.display = "none";
                text6.style.display = "none";
                text7.style.display = "none";
            }
        };

        const video = videoRef.current;
        video.addEventListener('timeupdate', updateTextElements);

        return () => {
            video.removeEventListener('timeupdate', updateTextElements);
        };
    }, []);



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

    // industries
    const Industries = async () => {
        try {
            let res = await fetch(`${Config.host}/get-Industries`)
            let Industriesdataa = await res.json()
            // console.log({ Industriesdataa })
            setIndu(Industriesdataa)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        Industries()
    }, [])


    // solutions

    const solutions = async () => {
        try {
            let res = await fetch(`${Config.host}/get-solutions`)
            let solutionsdataa = await res.json()
            // console.log({ solutionsdataa })
            setSolu(solutionsdataa)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        solutions()
    }, [])

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

    const handlenavbar=()=>{
        setIndex(true)
    }
    const handlenavbarleave=()=>{
        setIndex(false)
    }
    return (
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

            {!flag && <div>


                <div className="main-box-1" >

                    <div>
                        {/* <div className="white-bg-box-1">
                        <div className="POWEROF">THE POWER OF</div>
                        <div className="TECH" style={{color:"#FE602F"}}>TECHNOLOGY</div>
                        </div> */}
                        <div >
                            <video ref={videoRef} className='videoTag' autoPlay loop muted style={{ marginTop: "-9%", height: "800px", width: "100%", zIndex: "-2", position: "relative" }}>
                                <source src="https://vhs-overview-video.s3.amazonaws.com/media/Final%20Video.mp4" type='video/mp4' />
                            </video>
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
                            <div key={i}>

                                <div className="ServiceMain">{obj.title}</div>

                                <div className="serviceDual">{obj.desc}</div>

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
                            <div key={j} className="shapes1" style={{ backgroundColor: "white" }}>
                                <div className="numb">{obj.number}</div>

                                <div className="abso">

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

                                    </div>
                                </div>
                            </div>
                        ))
                        //    { console.log(e,i)}    
                    ))}
                </div>

                <div id="Industriess">
                    {industries?.map((e, i) => (
                        <div key={i} >
                            <div className="Indus-heading"> {e.heading}</div>

                        </div>
                    ))}
                </div>

                <div style={{ width: "95%", margin: "auto" }} className="Indus-insder-cont">
                    {industries?.map((item, i) => (
                        item?.insider?.map((e, j) => (
                            <div key={j} className="Indus-insder-cont-child">
                                <div><img className="insiderimg" src={e.img} alt="" /></div>    
                                <div className="indus-title"> {e.title}</div>
                                <div className="indus-desc" style={{height:"100px"}}> {e.desc}</div>
                                {/* <Link to="/learnn">   */}
                                <div> <button onClick={() => navigate("/learnn")} className="buttons">Learn More</button></div>
                                {/* </Link> */}

                            </div>
                        ))
                    ))}
                </div>
                <div >
                    <div id="Solution" className="Solution" style={{ width: "99%", margin: "auto" }}>
                        <div className="Solution-heading-cont" >
                            {solution?.map((item, i) => (
                                item?.heading?.map((e, j) => (
                                    <div key={j} className="solu-back">
                                        <div className="sol-heading-title">
                                            <div className="sol-heading-title-div">{e.title}</div>
                                        </div>
                                        <div>
                                            <div className="sol-desc"> {e.desc}</div>
                                        </div>
                                    </div>
                                ))
                            ))}
                        </div>

                        <div className="Solution-images" >
                            {/* Dont ever delete this never delete this */}
                            {/* {data?.Total?.Solutions?.Images?.map((e, i) => ( */}
                            {/* <div key={i} className="sol-img-abs" > */}
                            {/* <div className="solImgdiv"><img style={{ width: "130px", height: "60px" }} src={e.img} alt="" /> */}
                            {/* <div className="solution-images-title">{e.title}</div> */}
                            {/* </div> */}
                            <div style={{ margin: "auto", alignItems: "center", justifyContent: "center",textAlign:"center",marginLeft:"4%" }}><img style={{width:"1200px", alignItems: "center"}} src="/Images/Copy.png" /></div>
                            {/* </div> */}
                            {/* ))} */}
                        </div>

                    </div>
                </div>

                {/* {data?.Total?.Testimonials?.main?.map((e, i) => ( */}

                {testimonials?.map((obj, i) => (
                 
                    <div key={i}>
                        <div className="testimo-title">{obj.title}</div>

                        <div className="carouse">
                            <Carousel

                                showThumbs={true}
                                infiniteLoop={true}
                                swipeable={false}
                                dynamicHeight={false} >
                           

                                {obj?.slide.map((el, i) =>
                                (
                                    <div key={i} style={{ width: "85%", justifyContent: "center", margin: "auto", marginTop: "%" }}>
                                        <div>
                            <img className="testimoImg" style={{ width: "151px", height: "151px", borderRadius: "50%",objectFit:"cover" }} src={el.img} alt="" /></div>
                               
                                        <div className="slider-desc" style={{marginTop:"2%"}}>{el.desc}</div>
                                        <div className="slider-role-name" style={{ marginTop: "5%" }}>
                                            <div>{el.name}</div>
                                         
                                        </div>
                                        <div style={{ marginBottom: "5%", fontSize: "20px", fontWeight: "700" }}>{el.role}</div>
                                        {/* <div >{el.at}</div> */}
                                    </div>
                                ))}

                            </Carousel>
                        </div>

                    </div>

                ))}

                <div className='why-main-box' style={{ width: "99%", margin: "auto" }}>
                    {whychoose?.map((e, i) => (
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
                                                    <div style={{ marginTop: "5%" }}>{el.detail}</div>
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
                        {community?.map((e, i) => (

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
                                                <center> <Link to="/careerm"><button className="buttons" style={{ marginBottom: "8px" }}>Join us</button></Link>
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
                            {contact?.map((e, i) => (
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


                                            <TextField
                                                className="text"
                                                style={{ borderBottom: "#FE602F" }}
                                                variant="filled"
                                                id="firstname"
                                                label={"First Name"}
                                                autoComplete="something-unsupported"
                                                required
                                                //   value={""}
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
                                                id="lastname"
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