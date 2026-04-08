import React from "react";
import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navbar from "../components/elements/navbar/Navbar";
import LeftSideBar from "../components/elements/sidebar/leftsidebar/Leftsidebar";
import RightSideBar from "../components/elements/sidebar/rightsidebar/RightSideBar";
import styled from "styled-components";

const MainContent = styled.div<{ ispreview?: boolean }>`
  width: 100%;
  height: 100vh;
  display: ${(props) => (props.ispreview ? "block" : "flex")};
`;

const RootLayout = () => {
  const location = useLocation();
  const isPreview = location.pathname === "/preview";
  console.log(isPreview);
  return (
    <React.Fragment>
      {!isPreview && <Navbar />}
      <MainContent ispreview={isPreview}>
        {!isPreview && <LeftSideBar />}
        <Outlet />
        {!isPreview && <RightSideBar />}
      </MainContent>
      <TanStackRouterDevtools />
    </React.Fragment>
  );
};

export const Route = createRootRoute({ component: RootLayout });
