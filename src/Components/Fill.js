import React, { useState } from "react";
import { TextField } from "@mui/material";
import "./Fill.css";
import { Grid,  Typography } from "@material-ui/core";
import { Stack } from "@mui/material";
// import React from "react";
import "./Fillm.css";
import UploadFileIcon from '@mui/icons-material/UploadFile';
// import {

//   withStyles,

// } from '@material-ui/core/styles';
import { useParams } from "react-router-dom";
// import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   status: {
//     danger: '#e53e3e',
//   },
//   palette: {
//     primary: {
//       main: '#0971f1',
//       darker: '#053e85',
//     },
//     neutral: {
//       main: '#64748B',
//       contrastText: '#fff',
//     },
//   },
// });


// const CssTextField = withStyles({
//   root: {
//     '& label.Mui-focused': {
//       color: '#FE602F',
//     },

//     root: {
//       '& .MuiOutlinedInput-notchedOutline': {
//         borderColor: '#FE602F',
//       },
//     },

//   },
// },
// )(TextField);

import Config from "../Config";

const Fill = () => {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Number: "",
    Email: "",
    ExperienceInYears: "",
    EducationQualification: ""

  })
  // const[k, setK]=useState("")

  // const uploadResume = (e) => {


  // }

  const { id } = useParams()

  const handledetails = (e) => {
    console.log(formData)
    e.preventDefault()
    const data = {

      "FirstName": formData.FirstName,
      "LastName": formData.LastName,
      "Email": formData.Email,
      "MobileNumber": formData.Number,
      "ExperienceInYears": formData.ExperienceInYears,
      "EducationQualification": formData.EducationQualification,
      "Resume": "1234",
      "jobID": id


    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetch(`${Config.host}/upload`, requestOptions)

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
    Number,
    Email,
    ExperienceInYears,
    EducationQualification } = formData;

  return (
    <div className="formmain">

      <form>
        <div className="submit">
          <button
            className="buttonsub"
            // variant="contained"
            // component="label"
            onClick={() => { handledetails() }}
          >

            submit

          </button>
        </div>
        {/* <div className="form">

          <div><CssTextField id="standard-basic" label="First Name" variant="standard"
            value={FirstName}
            onChange={e => updateFormData(e)}
            placeholder="First name"
            type="text"
            name="FirstName"
            required /></div>
          <div><CssTextField id="standard-basic" label="Last Name" variant="standard"
            value={LastName}
            onChange={e => updateFormData(e)}
            placeholder="LastName"
            type="text"
            name="LastName"
            required /></div>
          <div><CssTextField id="standard-basic" label="Mobile Number(+91)" variant="standard"
            value={Number}
            onChange={e => updateFormData(e)}
            placeholder="Number"
            type="Number"
            name="Number"
            required /></div>
          <div><CssTextField id="standard-basic" label="Email" variant="standard"
            value={Email}
            onChange={e => updateFormData(e)}
            placeholder="Email"
            type="Email"
            name="Email"
            required /></div>
          <div><CssTextField id="standard-basic" label="Experience in Years" variant="standard"
            value={ExperienceInYears}
            onChange={e => updateFormData(e)}
            placeholder="ExperienceInYears"
            type="text"
            name="ExperienceInYears"
            required /></div>
          <div><CssTextField id="standard-basic" label="Education Qualification" variant="standard"
            value={EducationQualification}
            onChange={e => updateFormData(e)}
            placeholder="EducationQualification"
            type="text"
            name="EducationQualification"
            required /></div>
   

          <center><Button
          variant="contained"
         component="label"
       
               >
          Upload Resume
          <input
           onChange={e => {uploadResume(e)}}
           placeholder="resume"
           name="resume"
           required
           type="file"
           
          />
       </Button>
          </center>
        </div> */}





        <Stack
          style={{


          }}
        >
          <Stack
            style={{
              width: "80%",
              marginTop: "80px",
              margin: "auto"
              // border: "1px solid blue",
              // height: "100px",
            }}

          >
            <Grid container
              spacing={4}
              style={{ padding: "20px" }}
            >
              <Grid item xl={6} lg={6} md={6} sm={12} xs={12}
                style={{ padding: "20px" }}
               
              >



{/* <TextField id="filled-basic" label="Filled" variant="filled"
 style={{ borderBottom: "#FE602F" , backgroundColor:"red"}}
 // id="firstname"
//  label={"First Name"}
 onChange={e => (e)}

 autoComplete="something-unsupported"
 name="FirstName"

 // value={FirstName}
 required 

 fullWidth
/>
               */}
                <TextField className="text"
                 variant="filled"
                  style={{ borderBottom: "#FE602F" }}
                  // variant="filled"
                  color="info"
                  // variant="outlined"
                  // id="firstname"
                  label="First Name"
                  onChange={e => console.log(e)}

                  autoComplete="something-unsupported"
                  name="FirstName"

                  value={FirstName}
                  required 

                  fullWidth

                />
                {/* <TextField className 
          style={{borderBottom:"#FE602F"}} label="First Name" variant="outlined"
            value={FirstName}
            onChange={e => updateFormData(e)}
            placeholder="First name"
            type="text"
            name="FirstName"
            required /> */}
              </Grid>

              <Grid item xl={6} lg={6} md={6} sm={12} xs={12}
                style={{ padding: "20px" }}
                //
              >

                <TextField className="text"
                 variant="filled"
                
                  id="lastname"
                  label={"Last Name"}
                  name="LastName"
                  value={LastName}
                  onChange={e => updateFormData(e)}
                  autoComplete="something-unsupported"
                  required
                  fullWidth
                />
              </Grid>



              <Grid item xl={6} lg={6} md={6} sm={12} xs={12}
               
                style={{ padding: "20px" }}
              >
                <TextField className="text"
                 variant="filled"
                
                  // id="mobileno"
                  label={"Mobile Number"}
                  onChange={e => updateFormData(e)}
                  // autoComplete="something-unsupported"
                  required
                  name="Number"
                  value={Number}
                  fullWidth
                />

              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={12} xs={12}
                style={{ padding: "20px" }}
               
              >
                <TextField className="text"
                 variant="filled"
                
                  // id="email"
                  label={"Email"}
                  onChange={e => updateFormData(e)}
                  // autoComplete="something-unsupported"
                  required
                  name="Email"
                  value={Email}
                  fullWidth
                >

                </TextField >

              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={12} xs={12}
                style={{ padding: "20px" }}
               

              >
                <TextField className="text"
                 variant="filled"
                
                  // id="experience"
                  label={"Experience in Years"}
                  onChange={e => updateFormData(e)}
                  // autoComplete="something-unsupported"
                  required
                  value={ExperienceInYears}
                  name={ExperienceInYears}
                  fullWidth

                />

              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={12} xs={12}
                style={{ padding: "20px" }}
               
              >
                <TextField
                className="text"
                  // id="qualification"
                  // label={"Qualification"}
                  // onChange={e => updateFormData(e)}
                  // autoComplete="something-unsupported"
                  // required
                  // name="EducationQualification"
                  variant="filled"
                  value={EducationQualification}
                  onChange={e => updateFormData(e)}
                  placeholder="EducationQualification"
                  type="text"
                  name="EducationQualification"
                  required
                  fullWidth
                />

              </Grid>
            </Grid>
          </Stack>
          <Stack style={{
            // width: "200px",
            // height: "40px",
            // border: "1px solid #FE602F",
            margin: "auto",
            marginTop: "50px",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}>
            {/* <Button style={{ color: "#FE602F", width: "100%", fontWeight: "600" }}

            >
              <UploadFileIcon style={{ color: "#FE602F", alignSelf: "center", marginRight: "10px" }} />
              <input
                type="file"
                hidden
              />
              Upload Resume
            </Button> */}

<div style={{width:"100%"}}>
<label for="file-upload" className="custom-file-upload">
  <i className="fa fa-cloud-upload"></i>  
    <UploadFileIcon style={{color:"#white",alignSelf:"center",marginRight:"10px",}}/>
 Upload Resume
</label>
<input id="file-upload" 

type="file"/>
</div>

          </Stack>
          <Stack style={{ margin: "auto", marginTop: "10px" }}>
            <Typography style={{ fontSize: "14px" }}>5mb max Size</Typography>
          </Stack>
        </Stack>
      </form>
    </div>


  )
}
export default Fill;