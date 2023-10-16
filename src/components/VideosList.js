import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideosList = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const data = await response.json();
    console.log(data);
    setVideos(data.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((item) => (
        <Link to={"/watch?v=" + item.id}>
          <VideoCard info={item} key={item.id} />
        </Link>
      ))}
      <VideoCard info={videos[0]} />
    </div>
  );
};

export default VideosList;
