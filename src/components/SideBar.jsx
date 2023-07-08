import React from 'react'
import {Stack} from '@mui/material'
import { categories } from '../utils/constants';
import { useNavigate,useParams,Link } from 'react-router-dom';

const SideBar = (props) => {
  
    
  return (
    <Stack direction="row"
      sx={{overflowY:"auto",
           height:{sx:'auto',md:'95%'},
           flexDirection:{md:'column'}
      }}
    >
    {categories.map((curCategory)=>
       <button className='category-btn' onClick={()=>{props.setSelectedCategory(curCategory.name)}}
        style={{
          background:curCategory.name===props.selectedCategory &&'blue',color:'#fff'
        }}
        key={curCategory.name} >
          
          
              
            <span style={{color:curCategory.name===props.selectedCategory ?'white':'blue',marginRight:'15px'}}  >{curCategory.icon}</span>
            <span style={{color:curCategory.name===props.selectedCategory ?'white':'blue'}}>{curCategory.name}</span>
           
          
          
       </button>
       
       )
    }

    </Stack>
  )
}

export default SideBar
