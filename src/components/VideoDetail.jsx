import {useState,useEffect} from 'react'
import {Link,useParams} from 'react-router-dom'
import ReactPlayer from 'react-player'
import {Box,Stack,Typography} from '@mui/material'
import { CheckCircle } from '@mui/icons-material' 
import { ApiCall } from '../utils/ApiCall'
import {Videos} from './'

const VideoDetail = () => {
  const [video,setVideo]=useState(null);
  const [videos,setVideos]=useState([]);
  const {id} = useParams();
  useEffect(()=>{
       ApiCall(`videos?part=snippet,statistics&id=${id}`)
       .then((res)=>{
            console.log(res?.data?.items[0])
            setVideo(res?.data?.items[0]);
       })

       ApiCall(`search?.part=snippet&relatedToVideoId=${id}&type=video`)
       .then((res)=>{
            console.log(res.data.items);
            setVideos(res.data.items);
       })
  },[id]) 

  
  return (
    <Box minHeight='95vh' >
       <Stack direction={{xs:'column',md:'row'}} >
          <Box flex={1} >
              <Box sx={{width:'100%',position:'sticky',top:'86px'}} >
                  <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls/>
                   <Typography variant='h5' sx={{color:'black'}} >
                     {video?.snippet?.title}
                   </Typography>

                   <Stack direction={'row'} justifyContent={'space-between'} sx={{}} py={1} px={2}>
                      <Link to={`/channel/${video?.snippet?.channelId}`}>
                        <Typography variant={{sm:'subtitle1',md:'h6'}} sx={{display:'flex'}} >
                          {video?.snippet?.channelTitle}
                          <CheckCircle sx={{color:'blue',fontSize:'22px'}} />
                        </Typography>
                      </Link> 
                      <div className="likes-views">

                    <Typography variant='body1' sx={{opacity:'0.7'}} >
                     { parseInt(video?.statistics?.viewCount).toLocaleString() } views
                    </Typography>
                    <Typography variant='body1' sx={{opacity:'0.7',marginLeft:'30px'}} >
                     {video?.statistics?.likeCount? (parseInt(video?.statistics?.likeCount)).toLocaleString():"hidden" } likes
                    </Typography>

                      </div>
                   </Stack>
                   
               </Box>
          </Box>
          <Box px={2} py={{md:1,xs:5}} className="videoDetail-videos">
              <Videos videos={videos} direction='column'/>
          </Box>
       </Stack>

    </Box>
  )
}

export default VideoDetail
