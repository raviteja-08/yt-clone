import  axios,{ Axios } from "axios";
const baseUrl = 'https://youtube-v31.p.rapidapi.com';
const options = {
    method: 'GET',
   
    params: {
      
      maxResults: '50',
     
    },
    headers: {
      'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  export const ApiCall = async(url)=>{
   console.log(`${baseUrl}/${url}`)    
   const res =  await axios.get(`${baseUrl}/${url}`,options);
   return res;
  }

