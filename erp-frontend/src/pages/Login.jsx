import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  IconButton,
  InputAdornment,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Login from "../assets/Login.png";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          justifyContent: "space-between",
          color: "white",
          padding: "10px 10px 0px 10px",
          height: "80px",
          fontFamily:"sans-serif"
        }}
      >
        <Typography sx={{ color: "#000000", fontWeight: 500, fontSize: "30px", margin: ".9rem 2rem" }}>Logo</Typography>
        <Box sx={{ padding: "1rem 2.8rem" }}>
          <Button
            sx={{
              backgroundColor: "#0F60FF",
              color: "#FFFFFF",
              marginRight: "10px",
              width: "96px",
              height: "36px",
              borderRadius: "3px",
              fontWeight: "700",
              textTransform: "capitalize",
              fontSize: "18px",
               fontFamily:"sans-serif"
            }}
          >
            Login
          </Button>
          <Button sx={{ color: "#0F60FF", fontSize: "18px", fontWeight: "700", textTransform: "capitalize" }}>
            Sign Up
          </Button>
        </Box>
      </Box>

      <Grid
        container
        sx={{
          alignItems: "center",
          justifyContent: "space-around",
          paddingX:6,
          backgroundColor: "whitesmoke",
        }}
      >
        <Grid item  sx={{ width: "600px", height: "600px", color: "#FFFFFF", borderRadius: "14px" }}>
          <Paper elevation={3} sx={{ padding: 4 }}>
            <Typography sx={{ fontSize: "40px", fontWeight: "700", textAlign: "center", textTransform: "uppercase" }}>
              Login
            </Typography>
            <Typography
              sx={{ fontSize: "22px", color: "rgba(0, 0, 0, 0.7)", textAlign: "center", lineHeight: "42px" }}
            >
              Login to access your account
            </Typography>
            <Box component="form">
              <TextField
                label="Email"
                fullWidth
                margin="normal"
                sx={{
                
                  height: "54px",
                  borderRadius: "5px",
                  backgroundColor: "rgba(249, 249, 249, 1)",
                  border:"1.3px solid rgba(0, 0, 0, 0.6)"
                }}
              />
              <TextField
                label="Password"
               
                type={showPassword ? "text" : "password"}
                fullWidth
                margin="normal"
                sx={{
                 
                  height: "54px",
                  borderRadius: "5px",
                  backgroundColor: "rgba(249, 249, 249, 1)",
                    border:"1.3px solid rgba(0, 0, 0, 0.6)"
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <FormControlLabel control={<Checkbox sx={{backgroundColor:"rgba(255, 255, 255, 1)"}} />} label="Remember Me" sx={{fontSize:"1rem",fontWeight:"500"}} />
              <Button  fullWidth sx={{ marginTop: 2,backgroundColor:"rgba(15, 96, 255, 1)",fontSize:"25px",fontWeight:"700",color:"#FFFFFF",borderRadius:"5px" }}>
                Login
              </Button>
            </Box>
            <Typography variant="body1" align="center" sx={{ marginY: 2 }} color="textSecondary">
            Don’t have an account? <Link to="/register"><span style={{color:"rgba(15, 96, 255, 1)",marginLeft:"4px"}}>Sign up</span> </Link>
            </Typography>
            <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <hr style={{width:"200px",height:"1px",color:"rgba(49, 49, 49, 1)",opacity:"0.75"}}/>
            <Typography  align="center" sx={{ marginY: 2 ,color:"rgba(0, 0, 0, 1)"}} >
              Or login with:
            </Typography>
            <hr style={{width:"200px",height:"1px",color:"rgba(49, 49, 49, 1)",opacity:"0.75"}}/>

            </Box>  
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button  color="primary" startIcon={<FacebookIcon  sx={{width:"28px",height:"28px", fontSize:""}} />} sx={{padding:"19px 25px 19px 28px",border:"1.19px solid rgba(0, 0, 0, 1)",width:"150px"}}>
                 
                </Button>
              </Grid>
              <Grid item>
                <Button color="error" startIcon={<GoogleIcon  sx={{width:"28px",height:"28px"}}/>} sx={{padding:"19px 25px 19px 28px",border:"1.19px solid rgba(0, 0, 0, 1)",width:"150px"}}>
                  
                </Button>
              </Grid>
              <Grid item>
                <Button color="default" startIcon={<AppleIcon sx={{width:"28px",height:"28px"}} />} sx={{padding:"19px 25px 19px 28px",border:"1.19px solid rgba(0, 0, 0, 1)",width:"150px"}}>
                
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item  sx={{ marginTop:4, boxShadowX: "4px" }}>
          <Box
            component="img"
            src={Login}
            alt="Login Illustration"
            sx={{ width: "100%", height: "750px",borderRadius: "14px" ,boxShadow: "10px 10px 20px rgba(228, 213, 213, 0.2)"}}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default LoginPage;
