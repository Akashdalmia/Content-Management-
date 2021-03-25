import React, { useState } from "react";
import "../App.css";
import {
  Grid,Box,Checkbox,InputBase,Button,Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions,CssBaseline,Divider,Drawer,Hidden,List,ListItem,ListItemIcon,ListItemText,Toolbar,Typography,Select,InputLabel,MenuItem,makeStyles,useTheme,IconButton,} from "@material-ui/core";
import PropTypes from "prop-types";
import MenuIcon from "@material-ui/icons/Menu";
import SortIcon from "@material-ui/icons/Sort";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
// import StarIcon from "@material-ui/icons/Star";
// import ErrorIcon from "@material-ui/icons/Error";
// import ScheduleIcon from "@material-ui/icons/Schedule";
// import TodayIcon from "@material-ui/icons/Today";
// import DoneIcon from "@material-ui/icons/Done";
// import DeleteIcon from "@material-ui/icons/Delete";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import lake from "./lake.jpg";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
//import AddTask from "./AddTask";
import TextEditor from "./TextEditor";
import Addtask from "./AddTask";
const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
  },
  Header: {
    marginTop: "-65px",
    height: "194px",
    backgroundColor: " #122230",
  },
  search: {
    margin: "40px",
    marginRight: "40px",
    position: "relative",
    borderRadius: "7px",
    backgroundColor: "#ffffff",
    padding: "10px",
  },
  searchIcon: {
    position: "absolute",
    alignItems: "center",
    marginTop: "-15px",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(3em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "90ch",
      "&:focus": {
        width: "90ch",
      },
    },
  },
  sort: {
    marginTop: "40px",
    marginRight: "35px",
    marginLeft: "35px",
    borderTopRightRadius: "6px",
    borderTopLeftRadius: "6px",
    backgroundColor: "#ffffff",
    paddingBottom: "10px",
    borderBottom: "1px solid #00000014",
  },
  formControl: {
    minWidth: 120,
  },
  img: {
    borderRadius: "5px",
    height: "35vh",
    width: "60vw",
  },
  sorticon: {
    alignItems: "center",
    marginTop: "15px",
    marginRight: "15px",
    marginLeft: "15px",
    color: "#0000008A",
  },
  containt: {
    "&:hover": {
      backgroundColor: "#eee",
    },
    padding: "16px 8px",
    marginLeft: "35px",
    marginRight: "35px",
    border: "1px solid #00000014",
    textTransform: "none",
    textAlign: "left",

    // backgroundColor:'#ffffff'
  },
  staricon1: {
    marginTop: "10px",
    marginLeft: "20px",
    marginBottom: "20px",
  },
  sidebarheader: {
    height: "193px",
    backgroundColor: " #122230",
    fontFamily: " Muli,Roboto,'Helvetica',Arial,sans-serif",
    fontWeight: "550",
  },
  sidebarpara: {
    color: "#ffffff",
    fontSize: "30px",
    paddingTop: "35px",
  },
  todoicon: {
    fontSize: "30px",
    marginRight: "20px",
  },
  formControl1: {
    minWidth: 150,
    backgroundColor: "#122230",
    marginLeft: "40px",
    marginTop: "30px",
  },
  button: {
    "&:hover": {
      boxShadow:
        "0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
    backgroundColor: "#122230",
    color: "#ffffff",
    padding: "10px",
    marginBottom: "20px",
    marginLeft: "25px",
    marginRight: "25px",
    borderRadius: "3px",
    marginTop: "-30px",
    fontFamily: " Muli,Roboto,'Helvetica',Arial,sans-serif",
    boxShadow:
      "0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)",
      cursor: "pointer",
  },
  todotitel: {
    backgroundColor: "#122230",
    color: "#ffffff",
  },
  textfeild1: {
    margin: "2px",

    paddingBottom: "10px",
  },
  textfield2: {
    paddingRight: "6px",
  },
  textcolordesign: {
    "&:hover": {
      textDecoration: "underline",
    },
    color: "#000000",
    textDecoration: "none",
  },
  allList: {
    "&:hover": {
      backgroundColor: "#61dafb",
      borderTopRightRadius: "40px",
      borderBottomRightRadius: "40px",
      fontFamily: " Muli,Roboto,'Helvetica',Arial,sans-serif",
      fontWeight: "550",
    },
  },
  appbartitle: {
    marginLeft: "20px",
    color: "grey",
    fontFamily: " Muli,Roboto,'Helvetica',Arial,sans-serif",
  },
  list: {
    fontFamily: " Muli,Roboto,'Helvetica',Arial,sans-serif",
    fontSize: "14px",
    color: "#0000008A",
  },
  paper: { maxWidth: "65vw" },
  paper1: { maxWidth: "850px" },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // const container1 = window !== undefined ? () => window().document.body : undefined;
  const [johen, mail] = React.useState("");
  const handleChange1 = (event) => {
    mail(event.target.value);
  };

  const [open1, setOpen1] = React.useState(false);
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };


  const drawer = (
    <div>
      <Box className={classes.sidebarheader}>
        <Typography
          align="center"
          component="h2"
          variant="h6"
          className={classes.sidebarpara}
        >
          <CheckBoxOutlinedIcon className={classes.todoicon} /> To Do{" "}
        </Typography>
        <FormControl
          style={{ color: "#ffffff" }}
          align="center"
          className={classes.formControl1}
        >
          <InputLabel
            style={{ color: "#ffffff" }}
            align="center"
            id="demo-simple-select-label"
          >
            havi hr@havi.co
          </InputLabel>

          <Select
            style={{ color: "#ffffff" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={johen}
            onChange={handleChange1}
          >
            <MenuItem value={10}>ad@havi.co</MenuItem>
            <MenuItem value={20}>vk@havi.co</MenuItem>
            <MenuItem value={30}>gs@havi.co</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <div className={classes.toolbar} />
      <Grid align="center">
        <Box
          align="center"
          elevation={6}
          onClick={handleClickOpen1}
          className={classes.button}
        >
          Add task
        </Box>
        
        <Dialog
         classes={{paper: classes.paper1}}
          open={open1}
          onClose={handleClose1}
          aria-labelledby="form-dialog-title"          
        >

        <div style={{height:550}}>
          <DialogTitle id="form-dialog-title" className={classes.todotitel}>
            New Assignment
            <Button onClick={handleClose1} style={{float:"right"}} color="secondary">
                    close
                  </Button>
          </DialogTitle>
          
          <DialogContent>
            <Box display="flex" flexDirection="row-reverse">
              <LabelOutlinedIcon className={classes.staricon1} />
              <StarOutlineIcon className={classes.staricon1} />
              <ErrorOutlineIcon className={classes.staricon1} />
             
            </Box>    
              <Divider />
           
           
            <TextEditor />

           
          </DialogContent>
          </div>
        </Dialog>
      </Grid>

      <Divider />

      <div className={classes.list}>
        <List>
          <ListItem button className={classes.allList}>
            <ListItemIcon>
              <MenuIcon />
            </ListItemIcon>
            <ListItemText style={{ color: "#000000DE" }} primary="All" />
          </ListItem>
        </List>

        {/* <Typography className={classes.appbartitle}> FILTER </Typography>
        <List>
          <ListItem button className={classes.allList}>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText style={{ color: "#000000DE" }} primary="Starred" />
          </ListItem>

          <ListItem button className={classes.allList}>
            <ListItemIcon>
              <ErrorIcon />
            </ListItemIcon>
            <ListItemText style={{ color: "#000000DE" }} primary="Priority" />
          </ListItem>

          <ListItem button className={classes.allList}>
            <ListItemIcon>
              <ScheduleIcon />
            </ListItemIcon>
            <ListItemText style={{ color: "#000000DE" }} primary="Seduled" />
          </ListItem>

          <ListItem button className={classes.allList}>
            <ListItemIcon>
              <TodayIcon />
            </ListItemIcon>
            <ListItemText style={{ color: "#000000DE" }} primary="Today" />
          </ListItem>

          <ListItem button className={classes.allList}>
            <ListItemIcon>
              <DoneIcon />
            </ListItemIcon>
            <ListItemText style={{ color: "#000000DE" }} primary="Done" />
          </ListItem>

          <ListItem button className={classes.allList}>
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText style={{ color: "#000000DE" }} primary="Deleted" />
          </ListItem>

         
        </List> */}

        <Typography className={classes.appbartitle}> LABELS </Typography>
        <List>
          <ListItem button className={classes.allList}>
            <ListItemIcon>
              <span style={{ color: "green" }}>
                {" "}
                <LabelOutlinedIcon />
              </span>
            </ListItemIcon>
            <ListItemText style={{ color: "#000000DE" }} primary="Frontend" />
          </ListItem>

          <ListItem button className={classes.allList}>
            <ListItemIcon>
              <span style={{ color: "red" }}>
                {" "}
                <LabelOutlinedIcon />
              </span>
            </ListItemIcon>
            <ListItemText style={{ color: "#000000DE" }} primary="Backend" />
          </ListItem>

          <ListItem button className={classes.allList}>
            <ListItemIcon>
              <span style={{ color: "orange" }}>
                {" "}
                <LabelOutlinedIcon />
              </span>
            </ListItemIcon>
            <ListItemText style={{ color: "#000000DE" }} primary="API" />
          </ListItem>

          <ListItem button className={classes.allList}>
            <ListItemIcon>
              <span style={{ color: "#0091EA" }}>
                {" "}
                <LabelOutlinedIcon />
              </span>
            </ListItemIcon>
            <ListItemText style={{ color: "#000000DE" }} primary="Issue" />
          </ListItem>

          <ListItem button className={classes.allList}>
            <ListItemIcon>
              <span style={{ color: "rgb(145 14 154 / 50%)" }}>
                <LabelOutlinedIcon />
              </span>
            </ListItemIcon>
            <ListItemText style={{ color: "#000000DE" }} primary="Mobile" />
          </ListItem>

         
        </List>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const [Orderby, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [line, setLine] = useState(false);
  const cutIt = (event) => {
    if (event.target.checked) {
      setLine(true);
    } else {
      setLine(false);
    }
  };

  const [line1, setLine1] = useState(false);
  const cutIt1 = (event) => {
    if (event.target.checked) {
      setLine1(true);
    } else {
      setLine1(false);
    }
  };

  const [line2, setLine2] = useState(false);
  const cutIt2 = (event) => {
    if (event.target.checked) {
      setLine2(true);
    } else {
      setLine2(false);
    }
  };

  const [line3, setLine3] = useState(false);
  const cutIt3 = (event) => {
    if (event.target.checked) {
      setLine3(true);
    } else {
      setLine3(false);
    }
  };

  const [line4, setLine4] = useState(false);
  const cutIt4 = (event) => {
    if (event.target.checked) {
      setLine4(true);
    } else {
      setLine4(false);
    }
  };

  const [line5, setLine5] = useState(false);
  const cutIt5 = (event) => {
    if (event.target.checked) {
      setLine5(true);
    } else {
      setLine5(false);
    }
  };

  const [line6, setLine6] = useState(false);
  const cutIt6 = (event) => {
    if (event.target.checked) {
      setLine6(true);
    } else {
      setLine6(false);
    }
  };

  const [line7, setLine7] = useState(false);
  const cutIt7 = (event) => {
    if (event.target.checked) {
      setLine7(true);
    } else {
      setLine7(false);
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container direction="column">
          <Grid container>
            <Grid item xs={12} className={classes.Header}>
              <Box position="static">
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <Toolbar>
                      <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                      >
                        <MenuIcon />
                      </IconButton>
                      <SearchIcon style={{ color: "#0000008A" }} />
                    </Toolbar>
                  </div>

                  <InputBase
                    placeholder="Search"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
              </Box>

              <Box
                display="flex"
                flexDirection="row-reverse"
                className={classes.sort}
              >
                <SortIcon className={classes.sorticon} />
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">
                    Order by
                  </InputLabel>

                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Orderby}
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Order by</MenuItem>
                    <MenuItem value={20}>Start Date</MenuItem>
                    <MenuItem value={30}>End Date</MenuItem>
                    <MenuItem value={40}>Title</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <CssBaseline />


            <Addtask/>



            <Button
              fullWidth
              style={{ backgroundColor: line ? "#F8F8F8" : "null" }}
              className={classes.containt}
            >
              <Grid container item xs={12} lg={12} md={12}>
                <Grid item xs={3} lg={1} md={1}>
                  <Checkbox
                    style={{ marginTop: "15px", marginLeft: "0px" }}
                    color="secondary"
                    onChange={cutIt}
                    value="remember"
                  />
                </Grid>

                <Grid
                  item
                  xs={8}
                  lg={9}
                  md={9}
                  style={{ marginLeft: "-30px" }}
                  onClick={handleClickOpen}
                >
                  <Typography
                    style={{
                      color: "#000000DE",
                      fontSize: "16px",
                      fontFamily: " Muli,Roboto,'Helvetica',Arial,sans-serif",
                      fontWeight: "450",
                      textDecoration: line ? "line-through" : "none",
                    }}
                  >
                    Sunt fugiat officia nisi minim sunt duis
                  </Typography>
                  <p
                    style={{
                      color: "#0000008A",
                      marginTop: "0px",
                      marginBottom: "4px",
                      fontSize: "14px",
                      textDecoration: line ? "line-through" : "none",
                    }}
                  >
                    Eiusmod eiusmod sint aliquip exercitation cillum. Magna
                    nulla officia ex consectetur ea ad excepter qui.{" "}
                  </p>

                  <Box display="flex">
                    <div
                      display="flex"
                      style={{
                        height: "22px",
                        width: "75px",
                        backgroundColor: "#00000014",
                        marginRight: "8px",
                      }}
                    >
                      <div
                        style={{
                          color: "green",
                          fontSize: "16px",
                          marginLeft: "8px",
                          marginTop: "-3px",
                        }}
                      >
                        ●{" "}
                      </div>
                      <p
                        style={{
                          marginLeft: "20px",
                          marginTop: "-23px",
                          fontSize: "11px",
                        }}
                      >
                        Frontend
                      </p>
                    </div>
                  </Box>
                </Grid>

                <Grid item xs={1} lg={2} md={2} onClick={handleClickOpen}>
                  <Box display="flex" flexDirection="row-reverse">
                    <StarOutlineIcon
                      style={{
                        marginTop: "25px",
                        marginRight: "10px",
                        color: "#0000008A",
                      }}
                    />
                    <ErrorOutlineIcon
                      style={{
                        marginTop: "25px",
                        marginRight: "20px",
                        color: "#0000008A",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Button>

            <Grid align="center">
              <Dialog
                classes={{ paper: classes.paper }}
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                
              >
                <DialogTitle
                  id="form-dialog-title"
                  className={classes.todotitel}
                >
                  Content Toolbar
                </DialogTitle>
                <DialogContent>
                  <Box>
                    <Typography
                      component="h2"
                      variant="h5"
                      className={classes.containtmargin}
                    >
                      Content{" "}
                    </Typography>
                  </Box>
                  <DialogContentText>
                    <Divider />
                  </DialogContentText>

                  <img src={lake} alt="pic" className={classes.img} />
                  <Typography
                    component="h2"
                    variant="h6"
                    className={classes.containtmargin}
                  >
                    Early Sunrise{" "}
                  </Typography>
                  <Typography
                    component="h3"
                    variant="h7"
                    className={classes.containtmargin}
                  >
                    {" "}
                    Content
                  </Typography>

                  <Typography paragraph className={classes.containtparagraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Rhoncus dolor purus non enim praesent elementum
                    facilisis leo vel. Risus at ultrices mi tempus imperdiet.
                    Semper risus in hendrerit gravida rutrum quisque non tellus.
                    Convallis convallis tellus id interdum velit laoreet id
                    donec ultrices. Odio morbi quis commodo odio aenean sed
                    adipiscing. Amet nisl suscipit adipiscing bibendum est
                    ultricies integer quis. Cursus euismod quis viverra nibh
                    cras. Metus vulputate eu scelerisque felis imperdiet proin
                    fermentum leo. Mauris commodo quis imperdiet massa
                    tincidunt. Cras tincidunt lobortis feugiat vivamus at augue.
                    At augue eget arcu dictum varius duis at consectetur lorem.
                    Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                    sapien faucibus et molestie ac. Consequat mauris nunc congue
                    nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                    facilisi etiam dignissim diam. Pulvinar elementum integer
                    enim neque volutpat ac tincidunt. Ornare suspendisse sed
                    nisi lacus sed viverra tellus. Purus sit amet volutpat
                    consequat mauris. Elementum eu facilisis sed odio morbi.
                    Euismod lacinia at quis risus sed vulputate odio. Morbi
                    tincidunt ornare massa eget egestas purus viverra accumsan
                    in. In hendrerit gravida rutrum quisque non tellus orci ac.
                    Pellentesque nec nam aliquam sem et tortor. Habitant morbi
                    tristique senectus et. Adipiscing elit duis tristique
                    sollicitudin nibh sit. Ornare aenean euismod elementum nisi
                    quis eleifend. Commodo viverra maecenas accumsan lacus vel
                    facilisis. Nulla posuere sollicitudin aliquam ultrices
                    sagittis orci a.
                  </Typography>
                  <Typography paragraph className={classes.containtparagraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Rhoncus dolor purus non enim praesent elementum
                    facilisis leo vel. Risus at ultrices mi tempus imperdiet.
                    Semper risus in hendrerit gravida rutrum quisque non tellus.
                    Convallis convallis tellus id interdum velit laoreet id
                    donec ultrices. Odio morbi quis commodo odio aenean sed
                    adipiscing. Amet nisl suscipit adipiscing bibendum est
                    ultricies integer quis. Cursus euismod quis viverra nibh
                    cras. Metus vulputate eu scelerisque felis imperdiet proin
                    fermentum leo. Mauris commodo quis imperdiet massa
                    tincidunt. Cras tincidunt lobortis feugiat vivamus at augue.
                    At augue eget arcu dictum varius duis at consectetur lorem.
                    Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                    sapien faucibus et molestie ac.
                  </Typography>
                  <Typography paragraph className={classes.containtparagraph}>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla
                    est ullamcorper eget nulla facilisi etiam dignissim diam.
                    Pulvinar elementum integer enim neque volutpat ac tincidunt.
                    Ornare suspendisse sed nisi lacus sed viverra tellus. Purus
                    sit amet volutpat consequat mauris. Elementum eu facilisis
                    sed odio morbi. Euismod lacinia at quis risus sed vulputate
                    odio. Morbi tincidunt ornare massa eget egestas purus
                    viverra accumsan in. In hendrerit gravida rutrum quisque non
                    tellus orci ac. Pellentesque nec nam aliquam sem et tortor.
                    Habitant morbi tristique senectus et. Adipiscing elit duis
                    tristique sollicitudin nibh sit. Ornare aenean euismod
                    elementum nisi quis eleifend. Commodo viverra maecenas
                    accumsan lacus vel facilisis. Nulla posuere sollicitudin
                    aliquam ultrices sagittis orci a.
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    close
                  </Button>
                </DialogActions>
              </Dialog>
            </Grid>

            <Button fullWidth className={classes.containt}>
              <Grid container item xs={12} lg={12} md={12}>
                <Grid item xs={3} lg={1}>
                  <Checkbox
                    style={{ marginTop: "15px", marginLeft: "0px" }}
                    color="secondary"
                    onClick={cutIt1}
                    value="remember"
                  />
                </Grid>

                <Grid
                  item
                  xs={8}
                  lg={9}
                  style={{ marginLeft: "-30px" }}
                  onClick={handleClickOpen}
                >
                  <Typography
                    style={{
                      color: "#000000DE",
                      fontSize: "16px",
                      fontFamily: " Muli,Roboto,'Helvetica',Arial,sans-serif",
                      fontWeight: "450",
                      textDecoration: line1 ? "line-through" : "none",
                    }}
                  >
                    Proident tempor est nulla irure ad est
                  </Typography>
                  <p
                    style={{
                      color: "#0000008A",
                      marginTop: "0px",
                      marginBottom: "4px",
                      fontSize: "14px",
                      textDecoration: line1 ? "line-through" : "none",
                    }}
                  >
                    Id nulla nulla proident deserunt deserunt proident in quis.
                    Cillum reprehenderit labore id anim laborum.{" "}
                  </p>

                  <Box display="flex">
                    <div
                      display="flex"
                      style={{
                        height: "22px",
                        width: "75px",
                        backgroundColor: "#00000014",
                        marginRight: "8px",
                      }}
                    >
                      <div
                        style={{
                          color: "green",
                          fontSize: "16px",
                          marginLeft: "8px",
                          marginTop: "-3px",
                        }}
                      >
                        ●{" "}
                      </div>
                      <p
                        style={{
                          marginLeft: "20px",
                          marginTop: "-23px",
                          fontSize: "11px",
                        }}
                      >
                        Frontend
                      </p>
                    </div>

                    <div
                      display="flex"
                      style={{
                        height: "22px",
                        width: "55px",
                        backgroundColor: "#00000014",
                        marginRight: "8px",
                      }}
                    >
                      <div
                        style={{
                          color: "#0091EA",
                          fontSize: "16px",
                          marginLeft: "8px",
                          marginTop: "-3px",
                        }}
                      >
                        ●{" "}
                      </div>
                      <p
                        style={{
                          marginLeft: "20px",
                          marginTop: "-23px",
                          fontSize: "11px",
                        }}
                      >
                        Issue
                      </p>
                    </div>
                  </Box>
                </Grid>

                <Grid item xs={1} lg={2} onClick={handleClickOpen}>
                  <Box display="flex" flexDirection="row-reverse">
                    <StarOutlineIcon
                      style={{
                        marginTop: "25px",
                        marginRight: "10px",
                        color: "#0000008A",
                      }}
                    />
                    <ErrorOutlineIcon
                      style={{
                        marginTop: "25px",
                        marginRight: "20px",
                        color: "#0000008A",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Button>

            <Button fullWidth className={classes.containt}>
              <Grid container item xs={12} lg={12} md={12}>
                <Grid item xs={3} lg={1}>
                  <Checkbox
                    style={{ marginTop: "15px", marginLeft: "0px" }}
                    color="secondary"
                    onClick={cutIt2}
                    value="remember"
                  />
                </Grid>

                <Grid
                  item
                  xs={8}
                  lg={9}
                  style={{ marginLeft: "-30px" }}
                  onClick={handleClickOpen}
                >
                  <Typography
                    style={{
                      color: "#000000DE",
                      fontSize: "16px",
                      fontFamily: " Muli,Roboto,'Helvetica',Arial,sans-serif",
                      fontWeight: "450",
                      textDecoration: line2 ? "line-through" : "none",
                    }}
                  >
                    Proident tempor est nulla irure ad est
                  </Typography>
                  <p
                    style={{
                      color: "#0000008A",
                      marginTop: "0px",
                      marginBottom: "4px",
                      fontSize: "14px",
                      textDecoration: line2 ? "line-through" : "none",
                    }}
                  >
                    Id nulla nulla proident deserunt deserunt proident in quis.
                    Cillum reprehenderit labore id anim laborum.{" "}
                  </p>

                  <Box display="flex">
                    <div
                      display="flex"
                      style={{
                        height: "22px",
                        width: "50px",
                        backgroundColor: "#00000014",
                        marginRight: "8px",
                      }}
                    >
                      <div
                        style={{
                          color: "#FF9800",
                          fontSize: "16px",
                          marginLeft: "8px",
                          marginTop: "-3px",
                        }}
                      >
                        ●{" "}
                      </div>
                      <p
                        style={{
                          marginLeft: "20px",
                          marginTop: "-23px",
                          fontSize: "11px",
                        }}
                      >
                        API
                      </p>
                    </div>
                  </Box>
                </Grid>

                <Grid item xs={1} lg={2} onClick={handleClickOpen}>
                  <Box display="flex" flexDirection="row-reverse">
                    <StarOutlineIcon
                      style={{
                        marginTop: "25px",
                        marginRight: "10px",
                        color: "#0000008A",
                      }}
                    />
                    <ErrorOutlineIcon
                      style={{
                        marginTop: "25px",
                        marginRight: "20px",
                        color: "#0000008A",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Button>

            <Button fullWidth className={classes.containt}>
              <Grid container item xs={12} lg={12} md={12}>
                <Grid item xs={3} lg={1}>
                  <Checkbox
                    style={{ marginTop: "15px", marginLeft: "0px" }}
                    color="secondary"
                    onClick={cutIt3}
                    value="remember"
                  />
                </Grid>

                <Grid
                  item
                  xs={8}
                  lg={9}
                  style={{ marginLeft: "-30px" }}
                  onClick={handleClickOpen}
                >
                  <Typography
                    style={{
                      color: "#000000DE",
                      fontSize: "16px",
                      fontFamily: " Muli,Roboto,'Helvetica',Arial,sans-serif",
                      fontWeight: "450",
                      textDecoration: line3 ? "line-through" : "none",
                    }}
                  >
                    Proident tempor est nulla irure ad est
                  </Typography>
                  <p
                    style={{
                      color: "#0000008A",
                      marginTop: "0px",
                      marginBottom: "4px",
                      fontSize: "14px",
                      textDecoration: line3 ? "line-through" : "none",
                    }}
                  >
                    Id nulla nulla proident deserunt deserunt proident in quis.
                    Cillum reprehenderit labore id anim laborum.{" "}
                  </p>

                  <Box display="flex">
                    <div
                      display="flex"
                      style={{
                        height: "22px",
                        width: "75px",
                        backgroundColor: "#00000014",
                        marginRight: "8px",
                      }}
                    >
                      <div
                        style={{
                          color: "green",
                          fontSize: "16px",
                          marginLeft: "8px",
                          marginTop: "-3px",
                        }}
                      >
                        ●{" "}
                      </div>
                      <p
                        style={{
                          marginLeft: "20px",
                          marginTop: "-23px",
                          fontSize: "11px",
                        }}
                      >
                        Frontend
                      </p>
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={1} lg={2} onClick={handleClickOpen}>
                  <Box display="flex" flexDirection="row-reverse">
                    <StarOutlineIcon
                      style={{
                        marginTop: "25px",
                        marginRight: "10px",
                        color: "#0000008A",
                      }}
                    />
                    <ErrorOutlineIcon
                      style={{
                        marginTop: "25px",
                        marginRight: "20px",
                        color: "#0000008A",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Button>

            <Button fullWidth className={classes.containt}>
              <Grid container item xs={12} lg={12} md={12}>
                <Grid item xs={3} lg={1}>
                  <Checkbox
                    style={{ marginTop: "15px", marginLeft: "0px" }}
                    color="secondary"
                    onClick={cutIt4}
                    value="remember"
                  />
                </Grid>
                <Grid
                  item
                  xs={8}
                  lg={9}
                  style={{ marginLeft: "-30px" }}
                  onClick={handleClickOpen}
                >
                  <Typography
                    style={{
                      color: "#000000DE",
                      fontSize: "16px",
                      fontFamily: " Muli,Roboto,'Helvetica',Arial,sans-serif",
                      fontWeight: "450",
                      textDecoration: line4 ? "line-through" : "none",
                    }}
                  >
                    Proident tempor est nulla irure ad est
                  </Typography>
                  <p
                    style={{
                      color: "#0000008A",
                      marginTop: "0px",
                      marginBottom: "4px",
                      fontSize: "14px",
                      textDecoration: line4 ? "line-through" : "none",
                    }}
                  >
                    Id nulla nulla proident deserunt deserunt proident in quis.
                    Cillum reprehenderit labore id anim laborum.{" "}
                  </p>

                  <Box display="flex">
                    <div
                      display="flex"
                      style={{
                        height: "22px",
                        width: "75px",
                        backgroundColor: "#00000014",
                        marginRight: "8px",
                      }}
                    >
                      <div
                        style={{
                          color: "green",
                          fontSize: "16px",
                          marginLeft: "8px",
                          marginTop: "-3px",
                        }}
                      >
                        ●{" "}
                      </div>
                      <p
                        style={{
                          marginLeft: "20px",
                          marginTop: "-23px",
                          fontSize: "11px",
                        }}
                      >
                        Frontend
                      </p>
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={1} lg={2} onClick={handleClickOpen}>
                  <Box display="flex" flexDirection="row-reverse">
                    <StarOutlineIcon
                      style={{
                        marginTop: "25px",
                        marginRight: "10px",
                        color: "#0000008A",
                      }}
                    />
                    <ErrorOutlineIcon
                      style={{
                        marginTop: "25px",
                        marginRight: "20px",
                        color: "#0000008A",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Button>

            <Button fullWidth className={classes.containt}>
              <Grid container item xs={12} lg={12} md={12}>
                <Grid item xs={3} lg={1}>
                  <Checkbox
                    style={{ marginTop: "15px", marginLeft: "0px" }}
                    color="secondary"
                    onClick={cutIt5}
                    value="remember"
                  />
                </Grid>

                <Grid
                  item
                  xs={8}
                  lg={9}
                  style={{ marginLeft: "-30px" }}
                  onClick={handleClickOpen}
                >
                  <Typography
                    style={{
                      color: "#000000DE",
                      fontSize: "16px",
                      fontFamily: " Muli,Roboto,'Helvetica',Arial,sans-serif",
                      fontWeight: "450",
                      textDecoration: line5 ? "line-through" : "none",
                    }}
                  >
                    Proident tempor est nulla irure ad est
                  </Typography>
                  <p
                    style={{
                      color: "#0000008A",
                      marginTop: "0px",
                      marginBottom: "4px",
                      fontSize: "14px",
                      textDecoration: line5 ? "line-through" : "none",
                    }}
                  >
                    Id nulla nulla proident deserunt deserunt proident in quis.
                    Cillum reprehenderit labore id anim laborum.{" "}
                  </p>

                  <Box display="flex">
                    <div
                      display="flex"
                      style={{
                        height: "22px",
                        width: "75px",
                        backgroundColor: "#00000014",
                        marginRight: "8px",
                      }}
                    >
                      <div
                        style={{
                          color: "green",
                          fontSize: "16px",
                          marginLeft: "8px",
                          marginTop: "-3px",
                        }}
                      >
                        ●{" "}
                      </div>
                      <p
                        style={{
                          marginLeft: "20px",
                          marginTop: "-23px",
                          fontSize: "11px",
                        }}
                      >
                        Frontend
                      </p>
                    </div>
                  </Box>
                </Grid>

                <Grid item xs={1} lg={2} onClick={handleClickOpen}>
                  <Box display="flex" flexDirection="row-reverse">
                    <StarOutlineIcon
                      style={{
                        marginTop: "25px",
                        marginRight: "10px",
                        color: "#0000008A",
                      }}
                    />
                    <ErrorOutlineIcon
                      style={{
                        marginTop: "25px",
                        marginRight: "20px",
                        color: "#0000008A",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Button>

            <Button fullWidth className={classes.containt}>
              <Grid container item xs={12} lg={12} md={12}>
                <Grid item xs={3} lg={1}>
                  <Checkbox
                    style={{ marginTop: "15px", marginLeft: "0px" }}
                    color="secondary"
                    onClick={cutIt6}
                    value="remember"
                  />
                </Grid>

                <Grid
                  item
                  xs={8}
                  lg={9}
                  style={{ marginLeft: "-30px" }}
                  onClick={handleClickOpen}
                >
                  <Typography
                    style={{
                      color: "#000000DE",
                      fontSize: "16px",
                      fontFamily: " Muli,Roboto,'Helvetica',Arial,sans-serif",
                      fontWeight: "450",
                      textDecoration: line6 ? "line-through" : "none",
                    }}
                  >
                    Proident tempor est nulla irure ad est
                  </Typography>
                  <p
                    style={{
                      color: "#0000008A",
                      marginTop: "0px",
                      marginBottom: "4px",
                      fontSize: "14px",
                      textDecoration: line6 ? "line-through" : "none",
                    }}
                  >
                    Id nulla nulla proident deserunt deserunt proident in quis.
                    Cillum reprehenderit labore id anim laborum.{" "}
                  </p>

                  <Box display="flex">
                    <div
                      display="flex"
                      style={{
                        height: "22px",
                        width: "75px",
                        backgroundColor: "#00000014",
                        marginRight: "8px",
                      }}
                    >
                      <div
                        style={{
                          color: "green",
                          fontSize: "16px",
                          marginLeft: "8px",
                          marginTop: "-3px",
                        }}
                      >
                        ●{" "}
                      </div>
                      <p
                        style={{
                          marginLeft: "20px",
                          marginTop: "-23px",
                          fontSize: "11px",
                        }}
                      >
                        Frontend
                      </p>
                    </div>
                  </Box>
                </Grid>

                <Grid item xs={1} lg={2} onClick={handleClickOpen}>
                  <Box display="flex" flexDirection="row-reverse">
                    <StarOutlineIcon
                      style={{
                        marginTop: "25px",
                        marginRight: "10px",
                        color: "#0000008A",
                      }}
                    />
                    <ErrorOutlineIcon
                      style={{
                        marginTop: "25px",
                        marginRight: "20px",
                        color: "#0000008A",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Button>

            <Button fullWidth className={classes.containt}>
              <Grid container item xs={12} lg={12} md={12}>
                <Grid item xs={3} lg={1}>
                  <Checkbox
                    style={{ marginTop: "15px", marginLeft: "0px" }}
                    color="secondary"
                    onClick={cutIt7}
                    value="remember"
                  />
                </Grid>

                <Grid
                  item
                  xs={8}
                  lg={9}
                  style={{ marginLeft: "-30px" }}
                  onClick={handleClickOpen}
                >
                  <Typography
                    style={{
                      color: "#000000DE",
                      fontSize: "16px",
                      fontFamily: " Muli,Roboto,'Helvetica',Arial,sans-serif",
                      fontWeight: "450",
                      textDecoration: line7 ? "line-through" : "none",
                    }}
                  >
                    Proident tempor est nulla irure ad est
                  </Typography>
                  <p
                    style={{
                      color: "#0000008A",
                      marginTop: "0px",
                      marginBottom: "4px",
                      fontSize: "14px",
                      textDecoration: line7 ? "line-through" : "none",
                    }}
                  >
                    Id nulla nulla proident deserunt deserunt proident in quis.
                    Cillum reprehenderit labore id anim laborum.{" "}
                  </p>

                  <Box display="flex">
                    <div
                      display="flex"
                      style={{
                        height: "22px",
                        width: "75px",
                        backgroundColor: "#00000014",
                        marginRight: "8px",
                      }}
                    >
                      <div
                        style={{
                          color: "green",
                          fontSize: "16px",
                          marginLeft: "8px",
                          marginTop: "-3px",
                        }}
                      >
                        ●{" "}
                      </div>
                      <p
                        style={{
                          marginLeft: "20px",
                          marginTop: "-23px",
                          fontSize: "11px",
                        }}
                      >
                        Frontend
                      </p>
                    </div>
                  </Box>
                </Grid>

                <Grid item xs={1} lg={2} onClick={handleClickOpen}>
                  <Box display="flex" flexDirection="row-reverse">
                    <StarOutlineIcon
                      style={{
                        marginTop: "25px",
                        marginRight: "10px",
                        color: "#0000008A",
                      }}
                    />
                    <ErrorOutlineIcon
                      style={{
                        marginTop: "25px",
                        marginRight: "20px",
                        color: "#0000008A",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Button>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
