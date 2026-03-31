/** @format */

import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navbar from "../components/elements/navbar/Navbar";
import LeftSideBar from "../components/Leftsidebar/Leftsidebar";
import Hero from "../components/Hero/Hero";

const RootLayout = () => (
  <>
    <Navbar />
    <div style={{ display: "flex" }}>
      <LeftSideBar />
      <div style={{display: "flex:1"}}>
      <Hero />
      <Outlet />
      </div>
    </div>
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
