import React ,{Component} from "react";
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import {Button,Grid,Typography,Checkbox,Box,Dialog,Divider,DialogTitle,DialogContent,DialogActions} from "@material-ui/core";
import {saveToken,getToken} from "./Common";


class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
     data:[],
     current_image:'',
     current_discription:'',
     current_title:'',
     setOpen:false,
     open:false,
     setLine:false,
     line:false
    };
    
  }


 cutIt = (event) => {
    // if (event.target.checked) {
    //   this.setState({line:true});
    // } else {
    //   this.setState({line:false});
    // }
  };

// cutMark(){
//   const {line7,setLine7} = this.state
//   this.setState({line7:false,setLine7:false})
      
    // cutIt =(event)=>{
    //   const {setLine} =this.state
    //    if(event.target.checked){
    //    setLine(true);
    //    }else{
    //    setLine(false);
    //    }
    //  };
// }


componentDidMount(){
    //alert(JSON.stringify(getToken()))

  // this.getData()  
  
  fetch( 'http://localhost:8000/get_data', {
    method: "GET",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': 'http://localhost:8000'

    },
}).then(response => {
    return response.json();
})
    .then((Response) => {
      console.log(Response)
        if (Response['success']) {
            this.setState({data:Response['data']})
           return
        }
    })




//     fetch( 'http://localhost:5000/get_data', {
//     method: "GET",
//     headers: {
//       'Content-Type': 'application/json',
//     },
// }).then(response => {
//     return response.json();
// })
//     .then((Response) => {
//       console.log(Response)
//         if (Response['success']) {
//             this.setState({data:Response['data']})
//            return
//         }
//     })

}

getData(){
  var data = getToken()
  console.log(data);
  console.log('fetching data');
 // alert(JSON.stringify(data))
  if(data=== null || data===undefined){
    return
  }
  this.setState({data:data})
}

  handleClickOpen = () => { 
    this.setState({setOpen:true});
  };
   
  handleClose = () => {
    this.setState({setOpen:false});
  };
    
  render(){
    const {data,setLine,line} =this.state
console.log("value ",data)

    

    return(

        <>
        {
          this.state.data.map((data)=>
          
          <>
         
         <Button   fullWidth  
         style={{'&:hover':{
          backgroundColor:'#eee'
         },
         padding:'16px 8px',
         marginLeft:"35px",
         marginRight:"35px",
         border:"1px solid #00000014",
         textTransform: 'none',
         textAlign: 'left',
         width:'100%'}}   >
        
        <Grid container item xs={12} lg={12} md={12}  >      
        
        <Grid item xs={3} lg={1} >
        
        <Checkbox style={{marginTop:"15px",marginLeft:'0px'}} color="secondary" onChange={this.cutIt} value="remember"  />
        </Grid>
        
        <Grid item xs={8} lg={9} style={{ marginLeft:'-30px'}}   onClick={()=>this.setState({current_discription:data.description,current_image:data.image,current_title:data.title,open:true})} >
        
        <Typography style={{color:'#000000DE',fontSize:'16px',fontFamily:" Muli,Roboto,'Helvetica',Arial,sans-serif",fontWeight:"450",textDecoration: line ? "line-through" : "none"}}  >{data.title}</Typography>

        <p  style={{color:"#0000008A",marginTop:'0px',marginBottom:'4px' ,fontSize:'14px',
        textDecoration: line ? "line-through" : "none"}}>{data.description.replaceAll('<p>','').replaceAll('</p>','')} </p>
           
            <Box display="flex"   > 
            <div  display="flex" style={{height:'22px',width:'75px',backgroundColor:'#00000014' ,marginRight:'8px'}}>
            <div style={{color:'green',fontSize:'16px' ,marginLeft:'8px',marginTop:'-3px'}}>● </div>
            <p style={{ marginLeft:'20px',marginTop:'-23px',fontSize:'11px'}}>Frontend</p>
            </div>
                </Box>    
        </Grid>
        
        <Grid item xs={1} lg={2} >
        <Box display="flex" flexDirection="row-reverse"> 
        <StarOutlineIcon style={{marginTop:"25px",marginRight:"10px",color:'#0000008A'}}/>
        <ErrorOutlineIcon style={{marginTop:"25px",marginRight:"20px",color:'#0000008A'}}/></Box>  
        </Grid>
        </Grid>
        </Button> 
        


 <Grid   align="center" style={{Width: "700"}}>
      <Dialog 
        open={this.state.open}
        onClose={()=>this.setState({open:false})} 
        aria-labelledby="form-dialog-title"
        maxWidth="false">

        <div style={{width: 1000}}>
        <DialogTitle id="form-dialog-title" 
        style={{ backgroundColor: "#122230",color: "#ffffff"}}
        >Content Toolbar</DialogTitle>
        <DialogContent>
        <Box> 
        <Typography   component="h2" variant="h5" >Content </Typography>
        </Box>  
         
        <Divider />
          
        <img src={this.state.current_image} alt="pic" style={{marginTop:'20px',borderRadius: "5px",height: "35vh",width: "60vw",}} />
       
        <Typography   component="h2" variant="h6" style={{marginTop:'10px',marginBottom:'10px',fontSize:'25px'}} 
        >{this.state.current_title} </Typography>
        
        <Typography   component="h3" variant="h7" > Content</Typography>
        
        <Typography paragraph >
          {this.state.current_discription.replaceAll('<p>','').replaceAll('</p>','')}
        </Typography>
        </DialogContent>
        
        <DialogActions>
          <Button onClick={()=>this.setState({open:false})} color="primary">close</Button>
        </DialogActions>
        </div>
      </Dialog>
      </Grid> 

</>
)
}     
</>

    );
  }
}
export default AddTask;