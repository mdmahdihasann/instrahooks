import React from "react";
import SideBar from "../components/common/SideBar";
import { Outlet } from "react-router-dom";

const PrivateRouters = () => {
  return (
    <div>
      <SideBar />
      <div class="max-w-6xl mx-auto w-full py-10">
        <Outlet />
      </div>
    </div>
  );
};

export default PrivateRouters;
