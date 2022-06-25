import logo from './logo.svg';
import './App.css';
import  React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import './index.css'

const App=()=> {
 const[p,setP]=useState(0)
 const[t,setT]=useState(0)
 const[r,setR]=useState(0)
 const[si,setSi]=useState(0)
 const calculateInterest = () => {
  setSi(p*t*r/100)
 }
  return (
    <div className='div'>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple Interest 
          </Typography>
          
        </Toolbar>
      </AppBar>
      <br/>
      <TextField onChange={(event)=> setP(event.target.value)} id="outlined-basic" label="p" variant="outlined" />
      <TextField onChange={(event)=> setT(event.target.value)} id="outlined-basic" label="t" variant="outlined" />
      <TextField onChange={(event)=> setR(event.target.value)} id="outlined-basic" label="r" variant="outlined" />
      <br/>
      <br/>
      <Button onClick={()=> calculateInterest()} className='but' variant="contained">calculate</Button>
      <Typography variant="h6" gutterBottom component="div">
        Simple Interest is : {si}
      </Typography>
    </Box>
    </div>
  );
}

export default App;
