import React from "react";
import ButtonsList from "./ButtonsList";
import VideosList from "./VideosList";

const MainBody = () => {
  return (
    <div className="col-span-10 border border-slate-300">
      <ButtonsList />
      <VideosList />
    </div>
  );
};

export default MainBody;
