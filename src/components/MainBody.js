import React, { useEffect } from "react";
import ButtonsList from "./ButtonsList";
import VideosList from "./VideosList";
import { closeMenu } from "../redux/appSlice";

const MainBody = () => {
  
  return (
    <div className="col-span-11 border border-slate-300">
      <ButtonsList />
      <VideosList />
    </div>
  );
};

export default MainBody;
