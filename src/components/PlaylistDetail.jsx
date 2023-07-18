import React from 'react'
import { ApiCall } from '../utils/ApiCall'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';


const PlaylistDetail = () => {
  const playlistId = useParams().id;
  console.log(playlistId);

  useEffect(()=>{
       
    ApiCall(`playlistItems?.part=snippet&playlistId=${playlistId}`)
    .then((res)=>{
           console.log(res)
    })

  },[])
  return (
    <div>
      
    </div>
  )
}

export default PlaylistDetail
