import React, { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Box} from '@mui/material';
import './index.css'
import {Feed,Navbar,VideoDetail,SearchFeed,ChannelDetail} from "./components"

const App = () => {
  const [nextPageToken,setNextPageToken] = useState('');

  return (
    
     <BrowserRouter>
     <Box sx ={{background:'white'}} >
       
       <Navbar/>

       <Routes>

        <Route path="/" exact element={<Feed nextPageToken={nextPageToken} setNextPageToken={setNextPageToken} />} />
        <Route path="/feed/:category" exact element={<Feed/>} />
        <Route path ='/video/:id' element={<VideoDetail/>} />
        <Route path='/channel/:id' element ={<ChannelDetail/>}/>
        <Route path='/search/:searchTerm' element={<SearchFeed/>} />

         
       </Routes>
     </Box>
         
     </BrowserRouter>
   
  )
}

export default App
