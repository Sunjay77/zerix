/** @format */

import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navbar from "../components/elements/navbar/Navbar";
import LeftSideBar from "../components/elements/leftsidebar/Leftsidebar";
import Hero from "../components/elements/Hero/Hero";
import RightSideBar from "../components/elements/rightsidebar/RightSideBar";

const RootLayout = () => (
  <>
    <Navbar />
    <div style={{ display: "flex" }}>
      <LeftSideBar />
      <Hero />
      <RightSideBar />
      <Outlet />
    </div>

    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
