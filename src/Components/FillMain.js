// import React, { useState } from "react";
// import { TextField } from "@mui/material";
// import "./Fill.css";
// import { Grid, Typography } from "@material-ui/core";
// import { Stack } from "@mui/material";

// import "./Fillm.css";
// import UploadFileIcon from '@mui/icons-material/UploadFile';

// import { useParams } from "react-router-dom";


// const Fill = () => {
//   const [formData, setFormData] = useState({
//     FirstName: "",
//     LastName: "",
//     Number: "",
//     Email: "",
//     ExperienceInYears: "",
//     EducationQualification: ""

//   })


//   const { id } = useParams()

//   const handledetails = (e) => {
//     console.log(formData)
//     e.preventDefault()
//     const data = {

//       "FirstName": formData.FirstName,
//       "LastName": formData.LastName,
//       "Email": formData.Email,
//       "MobileNumber": formData.Number,
//       "ExperienceInYears": formData.ExperienceInYears,
//       "EducationQualification": formData.EducationQualification,
//       "Resume": "1234",
//       "jobID": id


//     }

//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data)
//     };
//     fetch('http://localhost:2233/upload', requestOptions)

//       .then(data => {
//         console.log(data)
//         return data.json();
//       })
//       .then(post => {
//         alert("sucesss")
//       });


//   }


//   const updateFormData = (event) =>
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value
//     });

//   const {
//     FirstName,
//     LastName,
//     Number,
//     Email,
//     ExperienceInYears,
//     EducationQualification } = formData;

//   return (
//     <div className="formmain">

//       <form>
//         <div className="submit">
//           <button
//             className="buttonsub"
          
//             onClick={() => { handledetails() }}
//           >

//             submit

//           </button>
//         </div>






//         <Stack
//           style={{


//           }}
//         >
//           <Stack
//             style={{
//               width: "80%",
//               marginTop: "80px",
//               margin: "auto"

//             }}

//           >
//             <Grid container
//               spacing={4}
//               style={{ padding: "20px" }}
//             >
//                      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}
//                 style={{ padding: "20px" }}

//               >

//                 <TextField className="text"
//                   variant="filled"

//                   id="Firstname"
//                   label={"First Name"}
//                   name="FirstName"
//                   value={FirstName}
//                   onChange={e => updateFormData(e)}
//                   autoComplete="something-unsupported"
//                   required
//                   fullWidth
//                 />
//               </Grid>
          

//               <Grid item xl={6} lg={6} md={6} sm={12} xs={12}
//                 style={{ padding: "20px" }}

//               >

//                 <TextField className="text"
//                   variant="filled"

//                   id="lastname"
//                   label={"Last Name"}
//                   name="LastName"
//                   value={LastName}
//                   onChange={e => updateFormData(e)}
//                   autoComplete="something-unsupported"
//                   required
//                   fullWidth
//                 />
//               </Grid>



//               <Grid item xl={6} lg={6} md={6} sm={12} xs={12}

//                 style={{ padding: "20px" }}
//               >
//                 <TextField className="text"
//                   variant="filled"
//                   label={"Mobile Number"}
//                   onChange={e => updateFormData(e)}
//                   required
//                   name="Number"
//                   value={Number}
//                   fullWidth
//                 />

//               </Grid>
//               <Grid item xl={6} lg={6} md={6} sm={12} xs={12}
//                 style={{ padding: "20px" }}
//               >
//                 <TextField className="text"
//                   variant="filled"
//                   label={"Email"}
//                   onChange={e => updateFormData(e)}

//                   required
//                   name="Email"
//                   value={Email}
//                   fullWidth
//                 >

//                 </TextField >

//               </Grid>
//               <Grid item xl={6} lg={6} md={6} sm={12} xs={12}
//                 style={{ padding: "20px" }}

//               >

//                 <TextField className="text"
//                   variant="filled"

//                   id="ExperienceInYears"
//                   label={"Last Name"}
//                   name="ExperienceInYears"
//                   value={ExperienceInYears}
//                   onChange={e => updateFormData(e)}
//                   autoComplete="something-unsupported"
//                   required
//                   fullWidth
//                 />
//               </Grid>
//               <Grid item xl={6} lg={6} md={6} sm={12} xs={12}
//                 style={{ padding: "20px" }}

//               >
//                 <TextField
//                   className="text"
//                   variant="filled"
//                   value={EducationQualification}
//                   onChange={e => updateFormData(e)}
//                   placeholder="EducationQualification"
//                   type="text"
//                   name="EducationQualification"
//                   required
//                   fullWidth
//                 />

//               </Grid>
//             </Grid>
//           </Stack>
//           <Stack style={{

//             margin: "auto",
//             marginTop: "50px",
//             flexDirection: "row",
//             justifyContent: "space-evenly",
//           }}>


//             <div style={{ width: "100%" }}>
//               <label for="file-upload" className="custom-file-upload">
//                 <i className="fa fa-cloud-upload"></i>
//                 <UploadFileIcon style={{ color: "#white", alignSelf: "center", marginRight: "10px", }} />
//                 Upload Resume
//               </label>
//               <input id="file-upload"

//                 type="file" />
//             </div>

//           </Stack>
//           <Stack style={{ margin: "auto", marginTop: "10px" }}>
//             <Typography style={{ fontSize: "14px" }}>5mb max Size</Typography>
//           </Stack>
//         </Stack>
//       </form>
//     </div>


//   )
// }
// export default Fill;