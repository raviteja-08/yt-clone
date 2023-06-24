import { Stack,Box } from '@mui/material'
import React from 'react'
import {VideoCard,ChannelCard} from '../components'

const Videos = ({videos,direction}) => {
    // console.log(videos)
  return (
    <Stack direction={direction||'row'} flexWrap="wrap" justifyContent="center" gap={2} >
      
      {videos.map((item,index)=>(
         <Box key={index} > 
           {item.id.videoId && <VideoCard video={item}/>}
           {item.id.channelId && <ChannelCard channel={item} />}
         </Box>
      ))
     } 
      

    </Stack>
  )
}

export default Videos
