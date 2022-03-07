import React, { useState } from 'react';
import {TextField,MenuItem,Grid,FormControl,InputLabel,Button,Select,
  Table,TableBody,TableCell,TableHead,TableContainer,TableRow,Checkbox
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Details } from '@material-ui/icons';

 


const useStyles = makeStyles(theme => ({
  formDiv: {
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  notFormDiv:{
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center"
  },
  note:{
    fontSize: "13px",
    color: "#fff0ec"
  },
  inputFields:{
    width:"100%",
    color: "white",
    background: "lightgrey",
    border: "1px solid black",
    borderRadius: "5px",
  },
  headings:{
    textDecoration: "underline",
    color: "black",
    fontSize:"2rem"
  }

    }));

const FormToFill=()=>{
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [totalDetails,setTotalDetails]=useState([])
    const [selectedIndex,setSelectedIndex]=useState(-1)
    const [showError, setShowError] = useState(false);
    const classes = useStyles();

 const handleSubmit=(event)=>{
  event.preventDefault()
  setShowError(true)
  if(selectedIndex!==-1
    ){
      if(firstName!=="" &&
  lastName!==""
  ){
    debugger
   let newArr=[...totalDetails]
   newArr[selectedIndex].firstName=firstName
   newArr[selectedIndex].lastName=lastName
   newArr[selectedIndex].gender=gender
   newArr[selectedIndex].phoneNumber=phoneNumber
   newArr[selectedIndex].email=email
    setTotalDetails([...newArr])
    setSelectedIndex(-1)
    handleResetAllState()
  
  }

  }
  else{
    // firstName!=="" &&
    // lastName!=="" &&
    // phoneNumber!=="" &&
    // email!="" &&
    // gender!==""
  
  if(firstName!=="" &&
  lastName!=="" 
 
  ){
    let data={
      firstName:firstName,
      lastName:lastName,
      phoneNumber:phoneNumber,
      email:email,
      gender:gender
    }
    setTotalDetails([...totalDetails,data])
    handleResetAllState()

  }}
  console.log(firstName,lastName,email,gender)
 }
 const handleResetAllState=()=>{
  setLastName("")
  setFirstName("")
  setEmail("")
  setPhoneNumber("")
  setGender("")
  setShowError(false)
 }
 const handleSelectedIndex=(index,details)=>{
  setSelectedIndex(index)
  
  setFirstName(details.firstName)
  setLastName(details.lastName)
  setGender(details.gender)
  setEmail(details.email)
  setPhoneNumber(details.phoneNumber)
 }

  return(

 
    <Grid container>
       <Grid item xs={12} className={classes.formDiv}>
         <p className={classes.headings}>Fill in the Details.
           </p>
         </Grid>
         <Grid item xs={12} className={classes.formDiv}>

      <form onSubmit={handleSubmit}>
    
      <Grid container spacing={2} className={classes.formDiv} >
      <Grid item xs={8}>
    <TextField id="outlined-basic" className={classes.inputFields} label="First Name" variant="outlined"
    value={firstName}
    error={showError && firstName===""}
    helperText={showError && firstName===""?"Enter your First Name it is a required field.":""}
    placeholder='Enter your First Name here'
    onChange={(e)=>{setFirstName(e.target.value)}} />
    </Grid>
    <Grid item xs={8}>
    <TextField id="outlined-basic" label="Last Name" className={classes.inputFields} variant="outlined" 
    value={lastName}
    error={showError && lastName===""}
    helperText={showError && lastName==""?"Enter your Last Name it is a required field.":""}
    placeholder='Enter your Last Name here'
    onChange={(e)=>{setLastName(e.target.value)}} />
    </Grid>
    <Grid item xs={8}>
    <TextField id="outlined-basic" label="Phone No." className={classes.inputFields} variant="outlined" 
    value={phoneNumber}
    placeholder='Enter your Contact No. here'
    onChange={(e)=>{setPhoneNumber(e.target.value)}} />
    </Grid>
    
    <Grid item xs={8}>
    <TextField id="outlined-basic" label="email" className={classes.inputFields} variant="outlined" 
    value={email}
    placeholder='Enter your email here'
    onChange={(e)=>{setEmail(e.target.value)}} />
    </Grid>
    <Grid item xs={8} style={{display: "flex",
    justifyContent: "space-between"}}>

   
    <Grid item xs={selectedIndex==-1?10:8} >
    <FormControl className={classes.inputFields} >
        <InputLabel id="demo-simple-select-label" placeholder='Enter your Gender' style={{marginLeft:"5px"}}>Select Gender</InputLabel>
    <Select
    labelId="Gender"
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    style={{marginLeft:"5px"}}
    value={gender}
    label="Gender"
    placeholder='Enter your Gender'
    onChange={(event)=>{ setGender(event.target.value);}}
  >
    <MenuItem value={"Male"}>Male</MenuItem>
    <MenuItem value={"Female"}>Female</MenuItem>
  
  </Select>
  </FormControl>
  </Grid>
  <Grid item xs={selectedIndex==-1?2:4} className={selectedIndex==-1?classes.formDiv:classes.notFormDiv}>
    {
      selectedIndex==-1?

    
  <Button variant="contained" style={{    color: "azure",
    background: "red",
    // marginLeft: "20%",
    height: "2.5rem"
    }} type="submit">
        Success
      </Button>
      :
      <>
      <Button variant="contained" style={{    color: "azure",
    background: "green",
    // marginLeft: "20%",
    height: "2.5rem"
    }} type="submit">
        Done
      </Button>
      <Button variant="contained" style={{    color: "azure",
    background: "red",
    // marginLeft: "20%",
    height: "2.5rem"
    }} onClick={()=>{setSelectedIndex(-1)
      handleResetAllState()}}>
        Cancel
      </Button>
      </>
  }
  </Grid>
  </Grid>
    </Grid>
    
    </form>
 </Grid>
 {totalDetails.length>0?
 <>
 <Grid item xs={12} className={classes.formDiv}>
 <p className={classes.headings}>Saved Details
     </p>
     </Grid>
     <Grid item xs={12} className={classes.note}>
     ** To update any detail into the  table select a row.
     </Grid>
     <Grid item xs={12} className={classes.formDiv}>
 <TableContainer>
 <Table sx={{ minWidth: 630 }} aria-label="simple table">
   <TableHead> 
     <TableRow>
       <TableCell align="left"> <h3>First Name
         </h3></TableCell>
       <TableCell align="left"><h3>Last Name </h3></TableCell>
       <TableCell align="left"><h3>Contact No. </h3></TableCell>
       <TableCell align="left"><h3>Email </h3></TableCell>
       <TableCell align="left"><h3>Gender </h3></TableCell>
     </TableRow>
   </TableHead>
   <TableBody style={{color:"white"}}>
     {totalDetails.map((ele,index) => (
       
       <TableRow
         key={index}
         style={selectedIndex==index?{backgroundColor: "steelblue",color:"white"}:{}}
         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
         onClick={()=>{handleSelectedIndex(index,ele)}}
       >
         <TableCell   style={selectedIndex==index?{color:"white"}:{}}>
           {ele.firstName}
         </TableCell>
         <TableCell style={selectedIndex==index?{color:"white"}:{}}>{ele.lastName}</TableCell>
         <TableCell style={selectedIndex==index?{color:"white"}:{}}>{ele.phoneNumber}</TableCell>
         <TableCell style={selectedIndex==index?{color:"white"}:{}}>{ele.email}</TableCell>
         <TableCell style={selectedIndex==index?{color:"white"}:{}}>{ele.gender}</TableCell>
        
       </TableRow>
     ))}
   </TableBody>
 </Table>
</TableContainer>

</Grid>
</>
:null}
</Grid>
  )
}

export default FormToFill