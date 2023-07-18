import React, { useContext } from 'react'
import {useState,useEffect} from 'react';
import {Box,Stack,Typography} from '@mui/material'
import {Loading, SideBar,Videos} from '../components'
import { ApiCall } from '../utils/ApiCall';
import InfiniteScroll from 'react-infinite-scroll-component';


const Feed = ({nextPageToken,setNextPageToken,setLoadingProgress}) => {
  const [videos,setVideos] = useState([])
  const [loading,setLoading] = useState(false)
  const [selectedCategory,setSelectedCategory]=useState('Machine Learning')

 

  useEffect(()=>{
    setLoading(true);
    setLoadingProgress(40);
     ApiCall(`search?part=snippet&q=${selectedCategory}&pageToken=${nextPageToken}`)
     .then((res)=>{
       setLoadingProgress(80);
       setVideos(res.data.items);
       setNextPageToken(res.data.nextPageToken);
       setLoadingProgress(100);
      })
      setLoading(false)
    },[selectedCategory])
    
    /*&pageToken=${nextPageToken} */
    const fetchMoreData =()=>{
      
      ApiCall(`search?part=snippet&q=${selectedCategory}&pageToken=${nextPageToken}`)
      .then((res)=>{
        setVideos(videos.concat(res.data.items))
        
        
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
             fontWeight='bold' md={2} sx={{color:'black',textAlign:"center"}} >
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
             hasMore={videos.length<1000}
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
