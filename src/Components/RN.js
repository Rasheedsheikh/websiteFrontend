// IMPORTING APIS

import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
  ListItemIcon,
  Grid,
  Switch
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { BrowserRouter, Route, Link } from "react-router-dom";

// IMPORTING ICONS
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import PersonIcon from "@material-ui/icons/Person";
import BookmarksIcon from "@material-ui/icons/Bookmarks";

// REACT APP IMPORTS
import Home from "./Home";
import Services from "./Services";
import Industries from "./Industries";
import Solutions from "./Solutions";
import Careers from "./Career";

// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function HideOnScroll() {
//   const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {/* {children} */}
    </Slide>
  );
}

const RN = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <BrowserRouter>
          <AppBar>
            <Toolbar>
              <Typography
                variant="h5"
                component="p"
                color="textSecondary"
                className={classes.title}
              >
                LOGO
              </Typography>
              {/* <Grid style={{width:"100px;"}}>
                <img src="./images/logo (1).jpg" />
              </Grid> */}
              LOGO
              {isMobile ? (
                <>
                  <IconButton
                    color="textPrimary"
                    className={classes.menuButton}
                    edge="start"
                    aria-label="menu"
                    onClick={handleMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    KeepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                  >
                    <MenuItem
                      onClick={() => setAnchorEl(null)}
                      component={Link}
                      to={"/"}
                    >
                      <ListItemIcon>
                        {/* <HomeIcon /> */}
                      </ListItemIcon>
                      <Typography variant="h6"> Home</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchorEl(null)}
                      component={Link}
                      to={ "/Services"}
                    >
                      <ListItemIcon>
                        {/* <SchoolIcon /> */}
                      </ListItemIcon>
                      <Typography variant="h6"> Services </Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchorEl(null)}
                      component={Link}
                      to={ "/Industries"}
                    >
                      <ListItemIcon>
                        {/* <PersonIcon /> */}
                      </ListItemIcon>
                      <Typography variant="h6"> Industries</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchorEl(null)}
                      component={Link}
                      to={ "/Solutions"}
                    >
                      <ListItemIcon>
                        {/* <BookmarksIcon /> */}
                      </ListItemIcon>
                      <Typography variant="h6"> Solutions </Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchorEl(null)}
                      component={Link}
                      to={ "/"}
                    >
                      <ListItemIcon>
                        {/* <HomeIcon /> */}
                      </ListItemIcon>
                      <Typography variant="h6"> Careers</Typography>
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <div style={{ marginRight: "2rem" }}>
                  <Button variant="text" color="default"
                      component={Link}
                      to={ "/"}
                      onClick={() => setAnchorEl(null)}>
                    {/* <HomeIcon /> */}
                    Home
                  </Button>
                  <Button variant="text" color="default" component={Link}
                      onClick={() => setAnchorEl(null)}
                      to={ "/Services"}>
                    {/* <SchoolIcon /> */}
                    Services
                  </Button>
                  <Button variant="text" color="default" component={Link}
                      onClick={() => setAnchorEl(null)}
                      to={ "/Industries"}>
                    {/* <PersonIcon /> */}
                    Industries
                  </Button>
                  <Button variant="text" color="default"component={Link}
                      onClick={() => setAnchorEl(null)}
                      to={ "/Solutions"}>
                    {/* <BookmarksIcon /> */}
                    Solutions
                  </Button>
                  <Button variant="text" color="default"component={Link}
                      onClick={() => setAnchorEl(null)}
                      to={ "/Careers"}>
                    {/* <BookmarksIcon /> */}
                    Careers
                  </Button>
                </div>
              )}
            </Toolbar>
          </AppBar>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/Services"} component={Services} />
            <Route exact path={"/Industries"} component={Industries} />
            <Route exact path={"/Solutions"} component={Solutions} />
            <Route exact path={"/Career"} component={Careers} />
          </Switch>
        </BrowserRouter>
      </HideOnScroll>
    </div>
  );
};

export default RN;