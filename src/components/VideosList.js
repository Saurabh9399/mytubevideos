import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { AddVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideosList = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const data = await response.json();
    setVideos(data.items);
  };
  return (
    <div className="flex flex-wrap">
      <AddVideoCard info={videos[8]}/>
      {videos.map((item) => (
        <Link to={"/watch?v=" + item.id} key={item.id}>
          <VideoCard info={item} />
        </Link>
      ))}
      <VideoCard info={videos[0]} />
    </div>
  );
};

export default VideosList;
