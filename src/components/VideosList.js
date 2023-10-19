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
      <Link to={"/watch?v=" + videos[8]?.id}>
        {" "}
        <AddVideoCard info={videos[8]} />
      </Link>
      {videos.map((item) => (
        <Link to={"/watch?v=" + item.id} key={item.id}>
          <VideoCard info={item} />
        </Link>
      ))}
    </div>
  );
};

export default VideosList;
