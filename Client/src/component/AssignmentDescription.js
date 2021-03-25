import React from 'react';
import {Grid,Box,Paper,CssBaseline,Drawer, Divider,Hidden,IconButton,List} from "@material-ui/core";
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import lake from "./lake.jpg";

const drawerWidth = 210;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
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
  Header:{
    marginTop:'-65px',
    height:'194px',
    backgroundColor:' #122230',
  },
  sort:{
    marginTop:'70px',
    marginRight:'40px',
    marginLeft:'40px',
    height:'60px',
    borderRadius: '7px',
    backgroundColor: '#ffffff',
    paddingBottom:'10px',
    borderBottom:'1px solid',
  },
  sidebarheader:{
    height:'190px',
    backgroundColor:' #122230',
  },
  sidebarpara:{
    color:'#ffffff',
    fontSize:'20px',
    paddingTop:'40px',
  },
  head:{
    color:'#ffffff',
    fontSize:'30px',
    paddingTop:'10px',
  },
  formControl1:{
    minWidth: 150,
    backgroundColor:'#122230',
    textDecorationColor:'#ffffff',
    marginLeft:'15px',
    marginTop:'30px',
  },
  contenttool:{
      padding:'20px'
  },
  containt:{
    marginRight:'40px',
    marginLeft:'40px',
  },
 img:{
     borderRadius:'5px',
     marginLeft:'20px'
 },
 containtmargin:{
     padding:'20px'
 },
 containtparagraph:{
     paddingLeft:'20px',
     paddingRight:'20px',
 }
}));
function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  const drawer = (
    
    <div>
    <Box className={classes.sidebarheader} >
    <Typography  align="center" component="h2" variant="h6" className={classes.sidebarpara} > Sidebar Header</Typography>
    </Box>

      <div className={classes.toolbar} />
      <Typography   component="h2" variant="h6" >Sidebar containt </Typography>
      <Divider />
      <List>
        {['Single-line item', 'Single-line item', 'Single-line item', 'Single-line item','Single-line item','Single-line item','Single-line item','Single-line item','Single-line item','Single-line item'].map((text) => (
          <ListItem button key={text}>        
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
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
       

        <Grid container direction="column" >
        <Grid container  > 
        <Grid item xs={12} className={classes.Header}>
        <Box position="static" >
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
          <Typography  align="center" component="h2" variant="h6" className={classes.head} >Header </Typography>
        </Toolbar>
            </div>
        </Box>

        <Box  className={classes.sort}>
        <Typography   component="h1" variant="h6" className={classes.contenttool}  >Content Toolbar </Typography>
        </Box>
        </Grid>

        <CssBaseline />
        
        <Grid item xs={12}  className={classes.containt}>
        <Paper  className={classes.containt1} >
        <Typography   component="h2" variant="h5" className={classes.containtmargin} >Content </Typography>
        <img src={lake} alt="pic" height="350" width='700' className={classes.img}/>
        <Typography   component="h2" variant="h6" className={classes.containtmargin} >Early Sunrise </Typography>
        <Typography   component="h3" variant="h7" className={classes.containtmargin} ><del>vhfhvhf</del> Content</Typography>
        
        <Typography paragraph className={classes.containtparagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        <Typography paragraph className={classes.containtparagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph className={classes.containtparagraph}>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        </Paper>  
        </Grid>
        
        
                    
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
