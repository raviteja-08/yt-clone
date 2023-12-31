
import { Box,CardContent,CardMedia,Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { Link, useParams } from "react-router-dom"


const ChannelCard = ({channel,marginTop}) => {
 
 const {id} = useParams();
 marginTop=marginTop?marginTop:"-100px";
 return   (
    <Box id="channel-card-margin-top" sx={{boxShadow:'none',borderradius:'20px',width:'290px',marginTop:marginTop}}  >

     <Link to={channel?.id?.channelId?`/channel/${channel?.id?.channelId}`:`/channel/${id}`} >
        <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'start',justifyItems:'center',textAlign:'center'}}>
        
         <CardMedia image={channel?.snippet?.thumbnails?.high?.url} alt='' sx={{borderRadius:'50%',height:'180px',width:'180px',border:"1px solid green",margin:'auto'}} />
         
         <Typography variant="h6" sx={{display:'flex',justifyContent:'center'}}>
            {channel?.snippet?.title}
            <CheckCircle sx={{fontSize:'25px',color:'blue',marginLeft:'5px'}} />
         </Typography>
         {/* subscribers */ }
         <Typography>
            {channel?.statistics?.subscriberCount && `${channel?.statistics?.subscriberCount} subscribers`}
         </Typography>
        </CardContent>

     </Link>
    </Box>
  )}


export default ChannelCard
