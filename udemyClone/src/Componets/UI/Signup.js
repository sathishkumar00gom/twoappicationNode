import React,{useState} from "react";
import {Box,Typography,Grid,InputBase, Button} from '@mui/material'
import { alpha, styled } from '@mui/material/styles';
import AuthService from "../services/AuthService";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      border: '1px solid #ced4da',
      fontSize: 16,
      width: '100%',
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));
const Signup=()=>{
    const [state,setState]=useState({
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        let data={
            email:state.email,
            password:state.password
        }
       let resp= await AuthService.Signup(data)
       console.log("respsignup",resp)
    }
    return (
    <>
    <Box sx={{mt:30}}>
        <Grid container>
            <Grid item xs={4}>
            </Grid>
            <Grid item xs={4}>
                <Box>
                <Typography>signup In to Your Udemy Account</Typography>
                </Box>
                <hr/>
                <Grid item xs={12}>  
                    <BootstrapInput fullWidth name="email" value={state.email} onChange={handleChange} id="bootstrap-input" sx={{mb:2}}/>
                </Grid>
                <Grid item xs={12}>  
                    <BootstrapInput fullWidth name="password" value={state.password} onChange={handleChange}  id="bootstrap-input" sx={{mb:2}} />
                </Grid>
                <Grid item xs={12}>  
                   <Button  onClick={handleSubmit} fullWidth variant="contained" color="success" >signup</Button>
                </Grid>
            </Grid>
            <Grid item xs={4}>
            </Grid>
        </Grid>
    </Box>
    </>)
}
export default Signup