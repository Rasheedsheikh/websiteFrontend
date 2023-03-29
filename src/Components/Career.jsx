import React, { useEffect, useState } from "react"
import db from "../db.json"
import './Career.css';
// import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom"
import { Checkbox, Grid, Typography } from "@material-ui/core";
import { Stack } from "@mui/material";
// import React, { useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Popover from "@mui/material/Popover";
import FilterListIcon from "@mui/icons-material/FilterList";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Dialog from '@mui/material/Dialog';

import Config from "../Config";
const Career = () => {
  const [data, setData] = useState([])
  // const[ searchdata, setSearchdata]=useState([])
  const [searchQuery, setSearchQuery] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  // const [checked, setChecked] = useState(false);

const [open1, setOpen] = React.useState(false);

  const handleClickOpen = (e) => {
    setOpen(true);
    setElement(e)
  };

  const handleClose1 = () => {
    setOpen(false);
  };


  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  //   check box function

  const handleChange = (event) => {
    // setChecked(event.target.checked);
    setChecked(checked)
  };
  const names = [
    "Analytics",
    "Design",
    "Development",
    "Management",
    "Marketing",
  ];

  // const navigate = useNavigate()
  // const [showDropdown, setShowDropdown] = useState(false);
  // const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const[ element, setElement]=useState(null);
const[checked,setChecked]=useState(false);
  // const handleCheckboxChange = (event) => {
  //   const checkboxValue = event.target.value;
  //   const isSelected = event.target.checked;

  //   if (isSelected) {
  //     setSelectedCheckboxes([...selectedCheckboxes, checkboxValue]);
  //   } else {
  //     setSelectedCheckboxes(
  //       selectedCheckboxes.filter((value) => value !== checkboxValue)
  //     );
  //   }
  // };

  // const filteredData = data.filter(item => item.name.includes(searchQuery));

  // const routeChange = (path) => {

  //   navigate(path);
  // }
  useEffect(() => {
    show()

  }, [])
  const show = async () => {
    try {
      let res = await fetch(`${Config.host}/jobs`)
      let data = await res.json()
      console.log(data)
      setData(data)
    }
    catch (err) {
      console.log(err)
    }
  }
  // console.log(db)

  const handleImp= async()=>{
    try{
      
      let res = await fetch(`${Config.host}/searchjob?searchTxt=${searchQuery}`)
      let Seardata = await res.json()
      console.log(Seardata)
      setData(Seardata)
    
  }
  catch (err) {
    console.log(err)
  }
}

useEffect(()=>{

},[element])
  return (
    <>

      {/* <Navbar/> */}
      {db.Careers.header.map((e, i) => (

        <div   key={i} className="headerMain">
          <div className="headerleft">
            <div className="headerlefttitle">
              <div>{e.title1}</div>
              <div style={{ color: "#FE602F" }}> {e.title2}</div>
            </div>
            <div className="headerdesc"> {e.desc}</div>
          </div>
          <div>
          <img style={{ height: "320.1400146484375px", width: "400px", borderRadius: "0px",marginTop:"10px" }} src="./Images/career.jpg"  alt=""/>
          </div>
          </div>
        
      ))}

      {db.Careers.functions.map((e, i) => (
    //     <div className="functions">
    //       <div className="job-pen">{e.name}</div>
          
    //       <div className="rightfunction">
    //         <div className="searchdiv">
    //           <form action="#">
    //             <input class="search-container" type="text" placeholder="Search..."  onChange={(e) => setSearchQuery(e.target.value)} />
    //             <button className="searchicon" type="submit"><i class="fa fa-search" onClick={handleImp} ></i></button>
    //           </form>
    //         </div>

          
              
             


              
    //           <div>
    //    <button className="filter-button" onClick={() => setShowDropdown(!showDropdown)}>Filter</button>
    //   {showDropdown && (
    //     <div>
    //       <label>
    //         <input
    //           type="checkbox"
    //           value="option1"
    //           onChange={handleCheckboxChange}
    //           checked={selectedCheckboxes.includes('option1')}
    //         />
    //         development
    //       </label>
    //       <label>
    //         <input
    //           type="checkbox"
    //           value="option2"
    //           onChange={handleCheckboxChange}
    //           checked={selectedCheckboxes.includes('option2')}
    //         />
    //         Option 2
    //       </label>
    //       <label>
    //         <input
    //           type="checkbox"
    //           value="option3"
    //           onChange={handleCheckboxChange}
    //           checked={selectedCheckboxes.includes('option3')}
    //         />
    //         Option 3
    //       </label>
    //       <label>
    //         <input
    //           type="checkbox"
    //           value="option4"
    //           onChange={handleCheckboxChange}
    //           checked={selectedCheckboxes.includes('option4')}
    //         />
    //         Option 4
    //       </label>
    //       <label>
    //         <input
    //           type="checkbox"
    //           value="option5"
    //           onChange={handleCheckboxChange}
    //           checked={selectedCheckboxes.includes('option5')}
    //         />
    //         Option 5
    //       </label>
    //     </div>
    //   )}
    // </div>
    


  









    //         </div>
    //       </div>
    <div  key={i}>
    <Stack>
      <Stack
        flexDirection={"row"}
        style={{
          width: "80%",
          margin: "auto",
         //  border: "1px solid red",
         //  paddingBottom: "20px",
          justifyContent: "space-between",
        }}
      >
        {/* job oppenings stack */}
        <Grid container>
          <Grid item lg={4}
          sm={12}>
              <Stack style={{ paddingLeft: "20px" }}>
          <Stack style={{ marginTop: "10px" }}>
            <Typography style={{ fontSize: "38px", fontWeight: "600" ,color: "#000000"}}>
              Job Openings
            </Typography>
          </Stack>
        </Stack>
          </Grid>
          <Grid item sm={12} lg={5}>
          <Stack
          flexDirection={"row"}
          style={{ 
              border: "0.499378px solid #BDBDBD",
              marginTop: "14px",
          justifyContent:'space-between' }}
        >
          <div style={{ alignSelf: "center" }}>
            <InputBase
              title={"search "}
              placeholder={"search"}
              // inputProps={{ "aria-label": "search" }}
              // value={""}
              onChange={(e) => setSearchQuery(e.target.value)}
              fullWidth
              style={{
                  // minWidth:"170px",
              // paddingLeft:"40px",
              // paddingRight:"40px"
              }}
            />
          </div>
          <div
            style={{
              alignSelf: "end",
              background: "#FE602F",
              color: "white",
              width: "12%",
              // margin:"auto",
              display:"flex",
              height: "100%",
              // justifyItems:"flex-end",
              alignItems:"end"
            }}
          >
            <div >
              <SearchIcon
              onClick={handleImp}
                style={{
                  alignSelf: "center",
                  marginLeft: "15px",
                  marginTop: "10px",
                  fontSize: "25px",
                }}
              />
            </div>
          </div>
        </Stack>
          </Grid>

          {/* filter */}

          <Grid item sm={12} lg={2}>
          <Stack style={{margin:"auto"}}>
          <Stack
            style={{
              marginRight: "20px",
              alignSelf: "center",
              marginTop: "15px",
              flexDirection:"row",
              justifyContent:"space-between"
            }}
          >
            <FilterListIcon
            style={{color:"#FE602F"}}
              fontSize="large"
              aria-describedby={id}
              //    variant="contained"
              onClick={handleClick}
            />
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Stack style={{ padding: "10px" }}>
                <Grid container>
                  <Grid
                    item
                    xl={10}
                    lg={10}
                    md={10}
                    sm={10}
                    xs={10}
                    style={{ padding: "10px" }}
                  >
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Stack style={{margin:"auto"}}>
                        {
                          names?.map((option,index) => {
                            return (
                              <Stack   key={i} flexDirection={"row"}>
                                <FormGroup>
                                  <FormControlLabel
                                    control={
                                      <Checkbox
                                      style={{color:"orange"}}
                                        checked={option[index].checked}
                                        onClick={(event) => {
                                          // setHandloomChecked(event.target.checked)
                                          handleChange(event.target.checked);
                                        }}
                                      />
                                    }
                                    label={option}
                                  />
                                </FormGroup>
                              </Stack>
                            );
                          })}
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>
              </Stack>
              {/* <Typography style={{ padding: "10px" }}>The content of the Popover.</Typography> */}
            </Popover>
            <Typography 
            style={{alignSelf:"center",
          fontSize:"14px",
      padding:"4px",
      color:"#FE602F"
  }}
            >Filter</Typography>
          </Stack>
        </Stack>
          </Grid>
        </Grid>
        

        {/* Muibar stack */}
        
        {/* filter */}
        
      </Stack>
    </Stack>
  </div>



      ))}

      {data?.map((e, i) => (

        <div  key={i}>
          <div className="jobparent">
            <div className="jobs">
              <div className="jobTitle">{e.title}</div>
              <hr />
              <div className="jobdetails">
                <div> <span style={{fontWeight:"600"}}>Experience</span>:{e.Experience}</div>
                <div><span style={{fontWeight:"600"}}>jobtype:</span>{e.jobtype}</div>
                <div> <span style={{fontWeight:"600"}}>Location:</span>{e.Location}</div>
              </div>

              <div className="jobdesc"><span style={{fontWeight:"600"}}>Description:</span>{e.desc}</div>

              <div className="buttonmain">
                <div> <button className="buttons" style={{    height: "40px",width: "138px"}}>view</button></div>
                <div> <button onClick={() => { handleClickOpen(e)   }}  className="button2"> Apply </button></div>
              </div>
            </div>
          </div>
        </div>
      ))}
  <Dialog md={12} open={open1} onClose={handleClose1}>
    {console.log(element,"12345")}
    
    <>
  {element &&
      <div className="Applymain">
          <div className="ApplytitleMain">
         <div className="Applytitle">{element?.title}</div>
         <Link to={`/fill/${element?._id}`}><div><button className="button2" >Apply</button></div></Link>
         </div>
         
         <div className="Applydetails">
      <div className="det">
          <div>Experience:</div>
          <div className="apply-values">{element?.Experience}</div>
     </div>
      <div><div> jobtype:</div><div className="apply-values">{element?.jobtype}</div></div>
      <div><div>Location:</div><div className="apply-values">{element?.Location}</div></div>
      <div><div> Job Function:</div><div className="apply-values">{element?.jobFunction}</div></div>
      <div><div> Education:</div><div className="apply-values">{element?.Education}</div></div>
      <div><div> Schedule:</div><div className="apply-values">{element?.Schedule}</div></div>
      </div>
      
      <hr/>

      <div>
          <div>Full Job Description</div>
         {element?.desc2.map((el,i)=>(
          < div  key={i}>
         <ul><li> {el}
         </li></ul>
          </div>
         ))}
      </div>
      </div>
}

  {/* ))} */}
         

  </>

  </Dialog>
      <Footer/>
    </>
  )
}
export default Career