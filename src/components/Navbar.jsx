import React from 'react'
import {Stack} from '@mui/material';
import {Link} from 'react-router-dom';
import { logo } from '../utils/constants';
import {Searchbar} from '../components';
// import logo from '../utils/logo.jpg'
const Navbar = () => {
  return (
   <Stack direction="row" alignItems='center' p={2} 
   sx={{position:"sticky",zIndex:2, background:"white",top:0,justifyContent:'space-between'}}  >

  <Link to='/' style={{display:'flex',alignItems:'center'}}  > 
    <img src={logo} alt="not found" height='45px' /> 
  </Link>
  <Searchbar/>
  

   </Stack>
  )
}

export default Navbar
