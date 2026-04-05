
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navbar from "../components/elements/navbar/Navbar";
import LeftSideBar from "../components/elements/sidebar/leftsidebar/Leftsidebar";
import RightSideBar from "../components/elements/sidebar/rightsidebar/RightSideBar";

const RootLayout = () => (
  <>
    <Navbar />
    <div style={{ display: "flex", width: "100%" }}>
      <LeftSideBar />
      <Outlet />
      <RightSideBar />
    </div>
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
