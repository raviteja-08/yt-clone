import React from 'react'
import {useState,useEffect} from 'react';
import {Box,Stack,Typography} from '@mui/material'
import {Loading, SideBar,Videos} from '../components'
import { ApiCall } from '../utils/ApiCall';
import InfiniteScroll from 'react-infinite-scroll-component';

const Feed = ({nextPageToken,setNextPageToken}) => {
  
  const [videos,setVideos] = useState([])
  const [loading,setLoading] = useState(false)
  const [selectedCategory,setSelectedCategory]=useState('AI')
  useEffect(()=>{
    setLoading(true);
     ApiCall(`search?part=snippet&q=${selectedCategory}&pageToken=${nextPageToken}`)
     .then((res)=>{
       setVideos(res.data.items);
       console.log(res);
       console.count("useEffect..")
       setNextPageToken(res.data.nextPageToken);
      })
      setLoading(false)
    },[selectedCategory])
    
    /*&pageToken=${nextPageToken} */
    const fetchMoreData =()=>{
      
      ApiCall(`search?part=snippet&q=${selectedCategory}&pageToken=${nextPageToken}`)
      .then((res)=>{
        setVideos(videos.concat(res.data.items))
        console.log(res);
        
        setNextPageToken(res.data.nextPageToken);
      })

   }

  return (
    <Stack
    sx={{flexDirection:{sx:'column',md:'row'}}}  >

    <Box sx={{height:{ sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}} >
     
     <SideBar  selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

     <Typography  className='copyright'
        sx={{mt:1.5,color:'#fff'}}
         >
      copyright 2023 ytClone
     </Typography>
     



    </Box>
     <Box p={2}  sx={{overflowY:'auto' , height:'90vh',justifyContent:'center'}} >
         
         <Typography variant='h4' 
             fontWeight='bold' md={2} sx={{color:'black'}} >
             <span  > {selectedCategory}  </span>
             <span style={{color:'blue'}} >
              videos
             </span>
         </Typography>
        <div >
          {loading &&<Loading/>}
         <InfiniteScroll
             dataLength={videos.length}
             next={fetchMoreData}
             hasMore={videos.length<400}
             loader={<Loading/>}
         >
         {  <Videos videos={videos} />}


         </InfiniteScroll>
          
          </div>  
      
     </Box>


    </Stack>
  )
}

export default Feed
