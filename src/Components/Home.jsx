import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import data? from "../data.json"
import './style.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { borderRadius } from "@mui/system";
import Why from "./Why";
import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/material";
import {  Grid, MenuItem,  Typography } from "@material-ui/core";
import "./Fill.css";
import "./intro.css";
import "./whyStyle.css"

import {

    withStyles,

} from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { textDecoration } from "@chakra-ui/react";
// import Why from "./why";

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#FE602F',
        },
        // '& .MuiInput-underline': {
        //   // borderBottomColor: '#FE602F',
        // },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                backgroundColor: "white",
            },
            '&:hover fieldset': {
                // borderColor: '#FE602F',
            },
            '&.Mui-focused fieldset': {
                // borderColor: '#FE602F',
            },
            root: {
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#FE602F',
                },
            },

        },
    },
})(TextField);

const Home = () => {
    const [data, setData1]= useState([])
    useEffect(()=>{
        show()
    },[])

    const show= async()=>{
            try{
              let res= await fetch('http://localhost:2233/home')
              let dataa= await res.json()
              console.log(dataa.data)
              setData1(dataa.data)
            }
            catch(err){
         console.log(err)
            }
          }
    // console.log(db)


    return (
        <>
            <div className="Nav">
                <div className="NavLeft">
                    <img style={{ width: "253px", height: "50px" }} src="/images/logo (1).jpg" alt="/" />
                </div>

                <div className="NavRight">
                    {data?.Total?.NavRoutes?.map((e, i) => (
                       <Link style={{textDecoration:"none", color:"#000000"}} to={e.path}><div>{e.name}</div></Link> 
                        //    { console.log(e,i)}
                    ))}
                </div>
            </div>

{/* <div className="main-box-1">

<div className="white-bg">
     <div className="white-bg-box-1">
        <h1>THE POWER OF <span className="head-span-class">TECHNOLOGY</span></h1>
     </div>
     <div className="white-bg-box-2">
        <div className="orange-circle"></div>
     </div>
</div>

<div className="black-bg">
    
</div>

<div className="top-text">
    <p>Today's Healthcare and Life Sciences Companies depend on Technology and Innovation to provide a healthier tomorrow for patients and the entire ecosystem</p>
</div>

<div className="top-stip">
    <img src="./images/strips.jpg" width="140px" height="130px"  />
</div>

<div className="top-img">
    <img src="./images/img-1.jpg" width="520px"   />
</div>

</div> */}
<div className="main-box-1">

<div className="white-bg">
     <div className="white-bg-box-1">
        <h1>THE POWER OF <span className="head-span-class">TECHNOLOGY</span></h1>
     </div>
     <div className="white-bg-box-2">
        <div className="orange-circle"></div>
     </div>
</div>

<div className="black-bg">
    
</div>

<div className="top-text">
    <p>Today's Healthcare and Life Sciences Companies depend on Technology and Innovation to provide a healthier tomorrow for patients and the entire ecosystem</p>
</div>

<div className="top-stip">
    <img src="./images/strips.jpg" width="140px" height="130px"  />
</div>

<div className="top-img">
    <img src="./images/img-1.jpg" width="520px" height="370px"  />
</div>

</div>

            <div className="Service">
                {data?.Total?.Services?.what?.map((e, i) => (
                    <div>
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
                    <div className="shapes1" style={i%2==1?{backgroundColor:"#F5F5F5",border:"none"}:{backgroundColor:"white"}}>
                        <div className="numb">{obj.number}</div>

                        <div className="abso">

                            <div className="service-heading">{obj.heading}</div>

                            <div>
                                {obj?.desc?.map((el, i) => (
                                    <div className="service-desc">
                                        <ul >
                                            <li>{el}
                                            </li></ul></div>
                                ))}

                            </div>
                        </div>
                    </div>
                    //    { console.log(e,i)}    
                ))}
            </div>

            <div>
                {data?.Total?.Industries?.heading?.map((e, i) => (
                    <>
                        <div className="Indus-heading"> {e}</div>

                    </>
                ))}
            </div>

            <div className="Indus-insder-cont">
                {data?.Total?.Industries?.insider?.map((e, i) => (
                    <div className="Indus-insder-cont-child">
                        <div><img className="insiderimg" src={e.img} /></div>
                        <div className="indus-title"> {e.title}</div>
                        <div className="indus-desc"> {e.desc}</div>
                      <Link to="/learn">  <div> <button className="buttons">Learn More</button></div>
                      </Link>

                    </div>
                ))}
            </div>
            <div className="Solution">
                <div className="Solution-heading-cont">
                    {data?.Total?.Solutions?.heading?.map((e, i) => (
                        <div className="solu-back">
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
                        <div className="sol-img-abs" >
                            <div className="solImgdiv"><img style={{ width: "250px", height: "230px" }} src={e.img} /> </div>
                            <div className="solution-images-title">{e.title}</div>
                        </div>
                    ))}
                </div>

            </div>

            {data?.Total?.Testimonials?.main?.map((e, i) => (
                <>
                    <div className="testimo-title">{e.title}</div>
                    <center >
                        <img className="testimoImg" style={{ width: "180px", height: "150px", borderRadius: "45%" }} src={e.img} /></center>
                    <div className="carouse">
                        <Carousel 
                          showThumbs={true}
                          infiniteLoop={true}
                          swipeable={false}
                          dynamicHeight={false} >
                            {e?.slide.map((el, i) =>
                            (
                                <div style={{width:"85%",justifyContent:"center",margin:"auto",marginTop:"3%"}}>
                                    <div className="slider-desc">{el.desc}</div>
                                    <div className="slider-role-name" style={{marginTop:"5%"}}>
                                    <div>{el.name}</div>
                                    <div>{el.role}</div>
                                    </div>
                                    <div>{el.at}</div>
                                </div>
                            ))}

                        </Carousel>
                    </div>

                </>
            ))}

            <div className='why-main-box'>
                 {data?.Total?.Testimonials?.why?.map((e, i) => (
                    <div  >

                     
                        <h1>{e.title}</h1>
                        <div className='why-main-box-1'>
                        {/* <div className="why-flex-main"> */}
                            <div className="why-flex">
                                <div>
                                  
                                            {e?.desc?.map((el,i) => (
                                                    <>
                                            <div className='why-text-box'>
                <div className='why-oranged'><p>{el.number}</p></div>
                <div>{el.detail}   </div>
                </div>
                                                     </>
                                                ))
                                            }
                                        
                                    
                                </div>
                            </div>


                            <div className='why-img-box'>
                <img src="./images/OBJECTS.jpg" alt="" />
            </div>
                        </div>
                    
                    </div>



                ))} 
                {/* <Why/> */}



                <div>
                    {data?.Total?.community?.map((e, i) => (

                        <div className="community-title">
                            <div className="community">

                                <div>{e.title}</div>
                            </div>
                            <div className="com-mainParent">
                                <div><img style={{ width: "500px", height: "740px", marginTop: "15px" }} src={e.IMG} /></div>
                                {e?.details?.map((el, i) => (
                                    <div>

                                        <div className="commu-heading">
                                            <div>{el.heading1}</div>
                                            <div style={{ color: "#FE602F" }}>{el.heading2}</div>
                                        </div>
                                        <div>
                                            <div className="commu-desc">{el.desc}</div>
                                        </div>  
                                        <div>
                                            <center> <button className="buttons" style={{ marginBottom: "10px" }}>Join us</button>
                                            </center>
                                        </div>
                                        <div className="commu-images">
                                            {e?.images?.map((element, i) => (
                                                <div>
                                                    <div><img style={{ width: "350px", height: "244px" }} src={element} /></div></div>
                                            ))}
                                        </div>

                                    </div>
                                ))}

                            </div>
                        </div>




                    ))}
                </div>

 
                <Stack className="contact-parent" flexDirection={"row"}>
                    <Grid container spacing={4}>
                    {data?.Total?.Testimonials?.contact?.map((e, i) => (
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12} style={{marginTop:"20px"}}>
                            <div className="contact">{e.title}</div>

                            {e?.quote?.map((el, i) => (
                                <div className="contact-quote">
                                    <div>{el.line1}</div>
                                    <div style={{ color: "#FE602F" }}>{el.line2}</div>
                                </div>
                            ))}

                            {e?.address?.map((ele, i) => (
                                <div className="address">
                                    <div>{ele.line1}</div>
                                    <div>{ele.line2}</div>
                                    <div>{ele.Email}</div>
                                    <div>{ele.telephone}</div>
                                </div>
                            ))}
                            <hr style={{width: "393px",height: "10px",left: "116px",top: "5969.78px",background: "#FE602F"}}/>

                        </Grid>



                    ))}

                     <Grid item xl={6} lg={6} md={6} sm={12} xs={12} className="email">{ data?.Total?.Testimonials?.contact && 
                      <Stack
                      style={{
                          width:"70%",
                        //   marginTop:"80px",
                          margin:"auto"
                          // border: "1px solid blue",
                          // height: "100px",
                        }}
                      
                      >
                      <Grid container
                              spacing={4}
                               style={{padding:"10px", marginTop:"7px"}}
                              >
                                  <Grid item xl={6} lg={6} md={6} sm={12} xs={12}
                                 style={{padding:"10px"}}
                                //  className="textborder"
                                 >
                      
                                 
                      
                                 <TextField
                                 className="text"
                                 style={{borderBottom:"#FE602F"}}
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
                                 style={{padding:"10px"}}
                                //  className="textborder"
                                 >
                      
                                 
                      
                                 <TextField
                                  className="text"
                                 style={{borderBottom:"#FE602F"}}
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
                                 style={{padding:"10px"}}
                                //  className="textborder"
                                 >
                      
                                 
                      
                                 <TextField
                                  className="text"
                                 style={{borderBottom:"#FE602F"}}
                                 variant="filled"
                                //   id="firstname"
                                  label={"Email"}
                                  autoComplete="something-unsupported"
                                  required
                                //   value={""}
                                  fullWidth
                      
                                />
                      </Grid>
                      
                      
                      
                      
 
                      
                      
                                  
                        
                                  {/* <Grid item xl={12} lg={12} md={12} sm={12} xs={12}
                                  style={{padding:"10px"}}
                                //   className="textborder"
                      
                                  >
                                                           <TextField
                                                            className="text"
                                               variant="filled"
                                                id="email"
                                                label={"Email"}
                                                autoComplete="something-unsupported"
                                                required
                                                value={""}
                                                // fullWidth
                                              />
                      
                                  </Grid> */}
             
                                  {/* <Grid item xl={12} lg={12} md={12} sm={12} xs={12}
                                  style={{padding:"10px"}}
                                //   className="textborder"
                      
                                  >
                                                           <TextField
                                                            className="text"
                                               variant="filled"
                                                id="qualification"
                                                label={"Leave Your Message"}
                                                autoComplete="something-unsupported"
                                                required
                                                value={""}
                                                fullWidth
                      
                                              />
                      
                                  </Grid> */}

<Grid item xl={12} lg={12} md={12} sm={12} xs={12}
                                 style={{padding:"10px"}}
                                //  className="textborder"
                                 >
                      
                                 
                      
                                 <TextField
                                  className="text"
                                 style={{borderBottom:"#FE602F"}}
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
            <img src="https://img.staticmb.com/mbphoto/locality/original_images/2021/Dec/24/71976_MAP.png" alt="/"/>
           </div>



                {data?.Total?.Footer?.map((obj, i) => (
                    <div className="footerParent">
                        <div className="footerMain">
                            {/* <div><img style={{width:"264px", height:"248px"}} src={e.img}/> </div> */}
                            <div className="footerLeft">
                                <div>
                                    {obj?.line1?.map((e, i) => (
                                        <div className="footerline1" >{e}</div>
                                    ))}
                                </div>

                                <div>
                                    {obj?.line2?.map((e, i) => (
                                        <div className="footerline1" >{e}</div>
                                    ))}
                                </div>
                            </div>

                            <div>

                                {obj?.line3?.map((e, i) => (
                                    <div>
                                     {/* <div> <img style={{width:"30px", height:"20px"}} src="./Images/n.jpg"/></div> */}
                                    <div className="footerline2">{e}</div>
                                    </div>
                                ))}
                            </div>

                            <div>
                                {obj?.line4?.map((e, i) => (
                                    <div>
                                       
                                        <div className="footerline1">{e.title}</div>
                                        <div>
                                            {e?.icons?.map((ele, i) => (
                                                <div>
                                                    <img style={{ border: "1px solid white", width: "41.75px", height: "46.5px", backgroundColor: "white", borderRadius: "10px" }} src={ele} />
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


        </>
        // <>hi</>

    )
}
export default Home