
import {useState,useEffect} from 'react';
import {Box,Typography} from '@mui/material'
import {SideBar,Videos} from '../components'
import { ApiCall } from '../utils/ApiCall';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const {searchTerm} = useParams()

  const [videos,setVideos] = useState([])
  useEffect(()=>{
     ApiCall(`search?part=snippet&q=${searchTerm}`)
     .then((res)=>{
      
       setVideos(res.data.items);
     })
  },[searchTerm])

  return (
    <Box p={2}  sx={{overflowY:'auto' , height:'90vh',justifyContent:'center'}} >
         
         <Typography variant='h4' 
             fontWeight='bold' md={2} sx={{color:'black'}} >
             <span style={{color:'blue'}} >
              searched for
             </span>
             <span  > {searchTerm}  </span>
         </Typography>
        <div >
         <Videos videos={videos} />
          
          </div>  
      
     </Box>
  )
}

export default SearchFeed
