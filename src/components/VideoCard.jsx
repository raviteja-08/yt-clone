import React from 'react'
import {Link} from 'react-router-dom'
import { Box,Typography,Card,CardContent,CardMedia } from '@mui/material'
import {CheckCircle} from '@mui/icons-material';

 import {demoChannelUrl,demoVideoUrl ,demoChannelTitle ,demoVideoTitle ,demoProfilePicture,demoThumbnailUrl } from '../utils/constants'




const VideoCard = ({video}) => {
    // console.log(video)

  return (
    <Card sx={{width:'290px',boxShadow:'none'}} className='videoCard-whole'>
      <Link to={video.id.videoId ? `/video/${video.id.videoId}`:demoVideoUrl} >
       <CardMedia 
         alt=''
         className='videoCard-thumbnail'
         sx={{width:'100%',height:180}}
         image={video.snippet?.thumbnails?.high?.url} />
      </Link>
      <CardContent sx={{height:'116px' }}>
        <Link to={video.id.videoId ? `/video/${video.id.videoId}`:demoVideoUrl}>
        <Typography  sx={{variant:'subtitle3',fontWeight:'bold',fontSize:'15px'}}  >
           {video.snippet.title || demoVideoTitle }
        </Typography>
        </Link>

        <Link to={`/channel/${video.snippet.channelId}`} > 
          <Typography sx={{variant:'subtitle1',color:'gray',display:'flex'}}>
            {video.snippet.channelTitle || demoChannelTitle }
            <CheckCircle/>
          </Typography>
         </Link>

      </CardContent>
    </Card>
  )
}
/*

channelId: "UC783dnzJqf2ghHp_pFLYbGA"
channelTitle: "DM - Desi Melodies"
description: "Desi Melodies presents in association with Cape Of Good Films & Azeem Dayani the first single, 'Kya Loge Tum,' from B Praak's ..."
liveBroadcastContent: "none"publishTime: "2023-05-15T12:30:06Z"
publishedAt: "2023-05-15T12:30:06Z"
*/
export default VideoCard
