import { Stack,Box } from '@mui/material'
import React from 'react'
import {VideoCard,ChannelCard,PlaylistCard} from '../components'

const Videos = ({videos,direction}) => {
  const notAPlayList=(d)=>{
    if(d.id.playlistId)
       return true
    return false   
  }
  videos.filter(notAPlayList);
  return (
    <Stack direction={direction||'row'} alignItems={"center"} flexWrap="wrap" justifyContent="center" gap={2} >
      {videos.map((item,index)=>(
         <Box key={index} > 
           {item.id.videoId && <VideoCard video={item}/>}
           {item.id.channelId && <ChannelCard channel={item} />}
           {/* {item.id.playlistId && <PlaylistCard playlist = {item} />} */}
         </Box>
      ))
     } 
      

    </Stack>
  )
}

export default Videos;
