import React from "react";

const VideoCard = ({ info }) => {
    if (!info || !info.snippet) {
      return null; 
    }
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className=" w-[310px] bg-gray-100 m-[35px] rounded-xl shadow-lg ">
      <img className="h-[150px] w-[310px] rounded-lg"  alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-semibold " >{title}</li>
        <li className="text-gray-700 " >{channelTitle}</li>
        <li className="text-gray-500" >{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
