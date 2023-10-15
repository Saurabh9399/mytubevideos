import React from "react";

const SidePanel = () => {
  return (
    <div className="col-span-2 border border-slate-300 p-5 shadow-lg">
      <ul>
        <li>Home</li>
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
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Recurring Live</li>
        <li>Purchase</li>
      </ul>
    </div>
  );
};

export default SidePanel;
