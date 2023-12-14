import React, { useEffect, useState } from 'react'
import {YouTue_Link} from "../utils/Constants"
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const VideoContainer = () => {

    const [page,setPage]=useState(1);
    const [videos,setVideos]=useState([]);
    const handleScroll=()=>{
      if(window.innerHeight+document.documentElement.scrollTop +1 >= document.documentElement.scrollHeight){
        setPage(prev=>prev+1)
      }
    }
    const getVideo=async ()=>{
    const data=await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&${page}&regionCode=US&key=AIzaSyAWnQfXLhMr9GsTiCToBiIPdkEXCcMKZL4`);
    const json=await data.json();
    setTimeout(()=>{
      setVideos((prevVideos) => [...prevVideos, ...json.items]);
    },1000)
}
useEffect(()=>{
  window.addEventListener("scroll",handleScroll);
  return ()=>window.removeEventListener("scroll",handleScroll);
},[])

  useEffect(()=>{
    getVideo();
  },[page])

  return   videos.length===0? (
    <Shimmer />
  ):
  (
    <div className='grid grid-cols-4  '>
      {
        videos.map(video=>(
          <Link key={video.id} to={"/watch?v="+video.id}  >
            <VideoCard  info={video} />
          </Link> 
          ))
      }
    </div>
  )
}

export default VideoContainer
