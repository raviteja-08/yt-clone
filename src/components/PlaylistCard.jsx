import React from 'react'
import {Link} from 'react-router-dom'
import { Box,Typography,Card,CardContent,CardMedia } from '@mui/material'
import {CheckCircle} from '@mui/icons-material';

const PlaylistCard = ({playlist}) => {
    console.log(playlist)
  return (
    <Card className='playlist-card-parent' sx={{width:'290px',boxShadow:'none',position:'relative'}}>
      <Link to={`/playlist/${playlist.id.playlistId}/0`} >
        <div className="playlist-card-dark" > &#9658; play</div>
       <CardMedia className='playlist-thumbnail'
         alt=''
         sx={{width:'100%',height:180}}
         image={playlist.snippet?.thumbnails?.high?.url} />
      </Link>
      <CardContent sx={{height:'116px' }}>
        <Link to={`/playlist/${playlist.id.playlistId}`}>
        <Typography  sx={{variant:'subtitle3',fontWeight:'bold',fontSize:'15px'}}  >
           {playlist?.snippet?.title }
        </Typography>
        </Link>

        <Link to={`/channel/${playlist.snippet.channelId}`} > 
          <Typography sx={{variant:'subtitle1',color:'gray',display:'flex'}}>
            {playlist.snippet.channelTitle }
            <CheckCircle/>
          </Typography>
         </Link>
        <Link to={`/playlist/${playlist?.id?.playlistId}`}>
             <Typography>
              View full playlist
             </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default PlaylistCard
