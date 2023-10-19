import React from "react";
import SidePanel from "./SidePanel";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  return (
    <>
      <Header />
      <div className="grid grid-flow-col col-span-12">
        <SidePanel />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
