import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {

  const[gif,seTgif]=useState('');
  const[loading,setloading]=useState('false')
  const[tag,settag]=useState("");
   

  async function fetchdata(){
    setloading(true); 
    const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
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
  function changeHandler(event){
    settag(event.target.value)
  }
  return (
    <div className='w-1/2  bg-blue-500 mt-11 rounded-lg border-black flex flex-col items-center gap-y-5  '>
      <h1 className=' mt-[15px] text-3xl underline uppercase font-bold'>  
        Random Gif
      </h1>

      {
        loading ? (Spinner) : (  <img src={gif} width="450"></img>)
      }
      <input className="w-10/12 text-lg py-2 rounded-lg mb-[2px] text-center "
            onChange={changeHandler}
        />

      
      <button   
      className=' mb-[20px] w-10/12 bg-white rounded-lg mt-[50px] text-lg py-2' onClick={clickHandler}> Generate Gif</button>
    </div>
  )
}
export default Tag;