import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
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
  MenuItem,
  InputAdornment
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import regsiter from '../assets/erm-sign.png'

function RegisterPage() {
  const [languageList, setLanguageList] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");
   const [showPassword, setShowPassword] = useState(false);

   const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  
    const handleTogglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const languagesWithFlags = [];
        const languageMap = new Map();

        data.forEach((country) => {
          if (country.languages) {
            Object.entries(country.languages).forEach(([code, language]) => {
              if (!languageMap.has(language)) {
                languageMap.set(language, {
                  name: language,
                  flag: country.flags.svg,
                });
              }
            });
          }
        });

        const languageArray = Array.from(languageMap.values());
        setLanguageList(languageArray);
        const ukLanguage = languageArray.find(
          (lang) => lang.name === "English"
        );
        if (ukLanguage) {
          setSelectedLanguage(ukLanguage.name);
        }
      })
      .catch((error) => console.error("Error fetching languages:", error));
  }, []);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value); 
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
          justifyContent: "space-around",
          paddingX:6,
          display:'flex',
          backgroundColor: "whitesmoke",
        }}
      >
        <Grid item  sx={{marginTop:5,marginBottom:4} }>
          <Paper elevation={3} sx={{ padding: 4 }}>
            <Typography sx={{textAlign:"center",fontSize:"30px",fontWeight:"700"}}>
              Sign Up
            </Typography>
            <Typography sx={{textAlign:"center",color:"rgba(0, 0, 0, 0.7)",marginBottom:4}}>
            You can access your personal account
            </Typography>
            <Box component="form">
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    sx={{backgroundColor:"rgba(249, 249, 249, 1)"}}
                    
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    sx={{backgroundColor:"rgba(249, 249, 249, 1)"}}
                    
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{marginTop:2}}>
                <Grid item xs={6}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    sx={{backgroundColor:"rgba(249, 249, 249, 1)"}}
                    
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    sx={{backgroundColor:"rgba(249, 249, 249, 1)"}}
                  />
                </Grid>
              </Grid>
            
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
              <TextField
                label="Confirm Password"
               
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
              <Box sx={{display:"flex",gap:6}}>
              <TextField
      label="Select Language"
      select
      variant="outlined"
      margin="normal"
      value={selectedLanguage}
      onChange={handleLanguageChange}
      sx={{width:"250px"}}
    >
      {languageList.map((language) => (
        <MenuItem key={language.name} value={language.name}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={language.flag}
              alt={language.name}
              style={{ width: 20, height: 14, marginRight: 8 }}
            />
            {language.name}
          </Box>
        </MenuItem>
      ))}
    </TextField>

              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="I agree to the terms and conditions"
                sx={{width:'200px',fontSize:"1rem",lineHeight:"16.8px"}}
              />
              </Box>
             
               <Button  fullWidth sx={{ marginTop: 2,backgroundColor:"rgba(15, 96, 255, 1)",fontSize:"22px",fontWeight:"700",color:"#FFFFFF",borderRadius:"5px" }}>
                             Sign Up
                           </Button>
            </Box>
            
            <Typography variant="body1" align="center" sx={{ marginY: 2 }} color="textSecondary">
                      Already have an account? <Link to="/"><span style={{color:"rgba(15, 96, 255, 1)",marginLeft:"4px"}}>Login</span> </Link>
                       </Typography>
                       <Box sx={{display:"flex",gap:2,alignItems:"center"}}>
                       <hr style={{width:"190px",height:"1px",color:"rgba(49, 49, 49, 1)",opacity:"0.75"}}/>
                       <Typography  align="center" sx={{ marginY: 2 ,color:"rgba(0, 0, 0, 1)"}} >
                         Or Sign Up with:
                       </Typography>
                       <hr style={{width:"190px",height:"1px",color:"rgba(49, 49, 49, 1)",opacity:"0.75"}}/>
           
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

        <Grid item  sx={{height:"800px",marginTop:5,boxShadow:"0 0 0 4 rgba(0, 0, 0, 0.25)",borderRadius:"30px"}}>
          <Box
            component="img"
            src={regsiter}
            alt="Register Illustration"
            sx={{ width: "100%" ,height:"100%"}}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default RegisterPage;
