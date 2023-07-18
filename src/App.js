import React, { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Box} from '@mui/material';
import './index.css'
import {Feed,Navbar,VideoDetail,SearchFeed,ChannelDetail,PlaylistPlaying} from "./components"
import LoadingBar from 'react-top-loading-bar';



const App = () => {
  const [nextPageToken,setNextPageToken] = useState('');
  const [loadingProgress,setLoadingProgress] = useState(0);
  return (
    

      <BrowserRouter>
     

        <Box sx ={{background:'white'}} >
          <LoadingBar color='blue' progress={loadingProgress} />
          <Navbar/>
           
          <Routes>

            <Route path="/" exact element={<Feed nextPageToken={nextPageToken} setNextPageToken={setNextPageToken} setLoadingProgress={setLoadingProgress}/>} />
            {/* <Route path="/feed/:category" exact element={<Feed/>} setLoadingProgress={setLoadingProgress}/> */}
            <Route path ='/video/:id' element={<VideoDetail setLoadingProgress={setLoadingProgress}/>} />
            <Route path='/channel/:id' element ={<ChannelDetail setLoadingProgress={setLoadingProgress}/>}/>
            {/* <Route path='/playlist/:id/:position' element={<PlaylistPlaying/>}/> */}
            <Route path='/playlist/:id/:position' element={<PlaylistPlaying/>}/>
            <Route path='/search/:searchTerm' element={<SearchFeed setLoadingProgress={setLoadingProgress}/>} />

            
          </Routes>
        </Box>   
      
      </BrowserRouter>

    
   
  )
}

export default App
