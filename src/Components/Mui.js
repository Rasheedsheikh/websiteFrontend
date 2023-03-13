import { Checkbox, Grid, Typography } from "@material-ui/core";
import { Stack } from "@mui/material";
import React, { useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Popover from "@mui/material/Popover";
import FilterListIcon from "@mui/icons-material/FilterList";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
const Mui= () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [checked, setChecked] = useState(false);

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
    setChecked(event.target.checked);
  };
  const names = [
    "Analytics",
    "Design",
    "Development",
    "Management",
    "Marketing",
  ];
  return (
    <div>
      <Stack>
        <Stack
          flexDirection={"row"}
          style={{
            width: "70%",
            margin: "auto",
            border: "1px solid red",
            paddingBottom: "20px",
            justifyContent: "space-between",
          }}
        >
          {/* job oppenings stack */}
          <Grid container>
            <Grid item lg={4}
            sm={12}>
                <Stack style={{ paddingLeft: "20px" }}>
            <Stack style={{ marginTop: "10px" }}>
              <Typography style={{ fontSize: "32px", fontWeight: "600" }}>
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
                inputProps={{ "aria-label": "search" }}
                value={""}
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
                            names?.map((option) => {
                              return (
                                <Stack flexDirection={"row"}>
                                  <FormGroup>
                                    <FormControlLabel
                                      control={
                                        <Checkbox
                                          checked={checked}
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
  );
};

export default Mui;