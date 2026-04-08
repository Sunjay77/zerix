import React, { useState } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navbar from "../components/elements/navbar/Navbar";
import LeftSideBar from "../components/elements/sidebar/leftsidebar/Leftsidebar";
import RightSideBar from "../components/elements/sidebar/rightsidebar/RightSideBar";

const RootLayout = () => {
  const [isPreview, setIsPreview] = useState<boolean>(false);

  return (
    <React.Fragment>
      <Navbar isPreview={isPreview} setIsPreview={setIsPreview} />
      <div style={{ display: "flex", width: "100%" }}>
        <LeftSideBar />
        <Outlet />
        <RightSideBar />
      </div>
      <TanStackRouterDevtools />
    </React.Fragment>
  );
};

export const Route = createRootRoute({ component: RootLayout });
