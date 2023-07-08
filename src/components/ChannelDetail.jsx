import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { ApiCall } from '../utils/ApiCall';
import { Box } from '@mui/material';
import {ChannelCard,Videos} from './';




const ChannelDetail = ({setLoadingProgress}) => {
  // const id  ???? 
  const {id} = useParams();
  const [channel,setChannel] = useState(null);
  const [videos,setVideos] = useState(null);
  
  

  useEffect(()=>{
    setLoadingProgress(0);
       ApiCall(`channels?.part=snippet&id=${id}`)
       .then((data)=>{
        setChannel(data?.data?.items[0]);
        // console.log(channel)
        
       })
       setLoadingProgress(70);
       ApiCall(`search?channelId=${id}&part=snippet&order=date`)
       .then(res=>{
         setVideos(res.data.items)
        // console.log(res.data.items);
        setLoadingProgress(100);
       })
      

  },[id])
  return (
    <Box sx={{minHeight:'95vh'}}>
       <Box>
        <div style={{background:'blue',height:'300px',zIndex:10}}>
         {  channel?.brandingSettings?.image?.bannerExternalUrl &&  <img src={`${channel.brandingSettings.image.bannerExternalUrl}`} alt="" style={{height:'300px',width:'100%'}}/> }

        </div>
        <div id='channel-card-on-channel-detail' >

           <ChannelCard channel={channel} marginTop='-100px' />
        </div>
        <div className="">
          { videos && <Videos videos = {videos} />}
        </div>
       </Box>

    </Box>
  )
}

export default ChannelDetail
