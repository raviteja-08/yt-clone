import React from 'react'
import Rolling from '../utils/Rolling.gif'
const Loading = () => {
  return (
    <div style={{display:"block",display:'flex',justifyContent:'center'}}  >
      <img className='loading-gif' style={{height:"150px",width:"150px"}} src={Rolling} alt="Loading.." />
    </div>
  )
}

export default Loading;
