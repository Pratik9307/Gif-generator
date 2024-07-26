import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
 const Random = () => {

  const[gif,seTgif]=useState('');
  const[loading,setloading]=useState('false')
   

  async function fetchdata(){
    setloading(true); 
    const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const {data}=await axios.get(url)
    const Imagesource=data.data.images.downsized_large.url;
    seTgif(Imagesource )
    setloading(false);
    
  }


  useEffect(()=>{
      fetchdata();
  },[]);

  function clickHandler(){
    seTgif(fetchdata);
  }
  return (
    <div className='w-1/2  bg-green-500 mt-11 rounded-lg border-black flex flex-col items-center gap-y-5  '>
      <h1 className=' mt-[15px] text-3xl underline uppercase font-bold'>  
       A Random Gif
      </h1>

      {
        loading ? (Spinner) : (  <img src={gif} width="450"></img>)
      }
    
      <button   
      className=' mb-[20px] w-10/12 bg-white rounded-lg mt-[50px] text-lg py-2' onClick={clickHandler}> Generate Gif</button>
    </div>
  )
}
export default Random;

