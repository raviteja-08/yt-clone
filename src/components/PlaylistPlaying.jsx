import {useState,useEffect} from 'react'
import {Link,useParams} from 'react-router-dom'
import ReactPlayer from 'react-player'
import {Box,Stack,Typography} from '@mui/material'
import { CheckCircle } from '@mui/icons-material' 
import { ApiCall } from '../utils/ApiCall'
import {Videos} from './'

const PlaylistPlaying = () => {
    const playlistId = useParams().id;
    const position = useParams().position;
    const [video,setVideo] = useState();
    const [pDetail,setPDetail] = useState({});

  useEffect(()=>{
       
    ApiCall(`playlistItems?.part=snippet&playlistId=${playlistId}`)
    .then((res)=>{
           console.log(res?.data?.items)
           setPDetail(res?.data?.items);
          

    })
    // ApiCall(`videos?part=snippet,statistics&id=${pDetail[position]?.snippet?.resourceId?.videoId}`)
    //    .then((res)=>{
    //         console.log(res?.data?.items[0])
    //         setVideo(res?.data?.items[0]);
           
    //    })

  },[])
  return ( <></>
    // <Box minHeight='95vh' >
    //    <Stack direction={{xs:'column',md:'row'}} >
    //       <Box flex={1} >
    //           <Box sx={{width:'100%',position:'sticky',top:'86px'}} >
    //               <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls/>
    //                <Typography variant='h5' sx={{color:'black'}} >
    //                  {video?.snippet?.title}
    //                </Typography>

    //                <Stack direction={'row'} justifyContent={'space-between'} sx={{flexWrap:"wrap"}} py={1} px={2}>
    //                   <Link to={`/channel/${video?.snippet?.channelId}`}>
    //                     <Typography variant={{sm:'subtitle2',md:'h6'}} sx={{display:'flex'}} >
    //                       {video?.snippet?.channelTitle}
    //                       <CheckCircle sx={{color:'blue',fontSize:'22px'}} />
    //                     </Typography>
    //                   </Link> 
    //                   <div className="likes-views">

    //                 <Typography variant='body1' sx={{opacity:'0.7'}} >
    //                  { parseInt(video?.statistics?.viewCount).toLocaleString() } views
    //                 </Typography>
    //                 <Typography variant='body1' sx={{opacity:'0.7',marginLeft:'30px'}} >
    //                  {video?.statistics?.likeCount? (parseInt(video?.statistics?.likeCount)).toLocaleString():"hidden" } likes
    //                 </Typography>

    //                   </div>
    //                </Stack>
                   
    //            </Box>
    //       </Box>
    //       <Box px={2} py={{md:1,xs:5}} className="videoDetail-videos">
    //           <Videos videos={videos} direction='column'/>
    //       </Box>
    //    </Stack>

    // </Box>
  )
}

export default PlaylistPlaying
