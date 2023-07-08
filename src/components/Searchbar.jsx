import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'; 
import {Paper,IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const Searchbar = () => {
  const navigator = useNavigate();
  let [search,setSearch]= useState("") ; 
  return (
    <Paper
     component='form'
     onSubmit={(e)=>{
        e.preventDefault();
        if(search){
          navigator(`/search/${search}`)
          setSearch('');
        }
     }}
     sx={{
        borderRadius:20,
        border:'1px solid #e3e3e3',
        pl:2,
        boxShadow:'none',
        mr:{sm:5}
     }}
    >
        <input className='search-bar'
          placeholder='search...'
          value={search}
          onChange={(e)=>{setSearch(e.target.value)}}
        />
        <IconButton 
          type='submit'
          sx={{p:'10px',color:'blue'}} >
            <SearchIcon/>
        </IconButton>

    </Paper>
  )
}

export default Searchbar
