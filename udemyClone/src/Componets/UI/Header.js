import React from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/material/styles';
import LanguageIcon from '@mui/icons-material/Language';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Typography, Toolbar, InputBase, FormControl, InputAdornment, Button } from '@mui/material'
const BootstrapInput = styled(InputBase)(() => ({
    '& .MuiInputBase-input': {

        padding: "10px"
        //   transition: theme.transitions.create([
        //     'border-color',
        //     'background-color',
        //     'box-shadow',
        //   ]),
        // Use the system font instead of the default Roboto font.
        //   fontFamily: [
        //     '-apple-system',
        //     'BlinkMacSystemFont',
        //     '"Segoe UI"',
        //     'Roboto',
        //     '"Helvetica Neue"',
        //     'Arial',
        //     'sans-serif',
        //     '"Apple Color Emoji"',
        //     '"Segoe UI Emoji"',
        //     '"Segoe UI Symbol"',
        //   ].join(','),
        //   '&:focus': {
        //     boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        //     borderColor: theme.palette.primary.main,
        //   },
    },
}));

const Header = () => {
    let navigate=useNavigate()
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{ pl: 1, pr: 1, pt: 1, pb: 1 }}>
                    <Box sx={{display: "flex",flexDirection: "row", alignItems: "center" ,justifyContent:"space-between"}}>
                            <Box sx={{display:"flex",justifyContent:"space-between"}}>
                          
                            </Box>
                            <Box>
                                <Box style={{
                                    height: "2.8rem",
                                    border: "1px solid #1c1d1f",
                                    borderRadius: "9999px",
                                    padding: "5px",
                                    backgroundColor: "#f7f9fa",
                                    margin: "0 1.2rem"
                                }}>
                                    <FormControl variant="standard">
                                        <BootstrapInput id="bootstrap-input" startAdornment={
                                            <InputAdornment position="start">
                                                <AccountCircle />
                                            </InputAdornment>
                                        } placeholder="search for anything" />
                                    </FormControl>
                                </Box>
                            </Box>
                            <Box>
                                <Typography>Udemy Business</Typography>
                            </Box>
                            <Box>
                                <Typography>Teach on udemy</Typography>
                            </Box>
                            <Box>
                                <AddShoppingCartIcon />
                            </Box>
                            <Box>
                                <Box sx={{ border: "1px solid black", padding: "5px" }}>
                                    <Button onClick={()=>{navigate("/login")}} sx={{ width: "100%", background: "#fff" }} color="success">Login</Button>
                                </Box>
                            </Box>
                            <Box sx={{ border: "1px solid black", padding: "5px" }}>
                                <Button  onClick={()=>{navigate("/signup")}} sx={{ width: "100%", background: "#fff" }} color="success">signup</Button>
                            </Box>
                            <Box>

                                <Button>signup</Button>

                            </Box>
                            <Box>

                                <LanguageIcon />

                            </Box>
                        </Box> 
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header


