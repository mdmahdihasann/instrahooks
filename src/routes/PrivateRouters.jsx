import React, { useEffect, useState } from "react";
import SideBar from "../components/common/SideBar";
import { Outlet } from "react-router-dom";
import Login from "../page/Login";
import { useAuth } from "../hooks/useAuth";

const PrivateRouters = () => {
  const { auth } = useAuth();
  const [show, isShow] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      isShow(true);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <SideBar />
      <div class="max-w-6xl mx-auto w-full py-10">
        <Outlet />
      </div>
      {/* {show && <Login />} */}
      {!auth?.authToken ? <Login/> : ""}
    </div>
  );
};

export default PrivateRouters;
