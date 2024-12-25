import { useState } from 'react'
import Login from './pages/Login'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import RegisterPage from './pages/SignUp'

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "'Urbanist',sans-serif", // Replace with your desired font family
    },
  });

  return (
    <>
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
      </Routes>
    </Router>
    </ThemeProvider>
    </>
  )
}

export default App
