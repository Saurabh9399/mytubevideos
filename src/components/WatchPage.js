import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu(false));

    return () => {
      dispatch(closeMenu(true));
    };
  });
  return (
    <div className="grid col-span-11">
      <iframe
        width="950"
        height="500"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
