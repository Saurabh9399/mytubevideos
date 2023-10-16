import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SidePanel = () => {
  const mySidePanelOpen = useSelector((store) => store.app.isSidePanelOpen);

  // Early return pattern
  if (!mySidePanelOpen) return null;

  return (
    <div className="col-span-1 border border-slate-300 p-5 shadow-lg">
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Shorts</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Recurring Live</li>
        <li>Purchase</li>
      </ul>
    </div>
  );
};

export default SidePanel;
