/** @format */

import { LeftSidebar, SidebarHeading, SidebarItem } from "./LeftSideBarStyle";
import { WindowsIcon } from "../icons/WindowsIcon";
import { HeroIcon } from "../icons/HeroIcon";
import { FeatureIcon } from "../icons/FeatureIcon";
import { CtaIcon } from "../icons/CtaIcon";
import { FooterIcon } from "../icons/FooterIcon";
const LeftSideBar: React.FC = () => {
  return (
    <LeftSidebar>
      <SidebarHeading>COMPONENTS</SidebarHeading>
      <SidebarItem>
        <WindowsIcon /> <h3>Navbar</h3>{" "}
      </SidebarItem>
      <SidebarItem>
        {" "}
        <HeroIcon /> <h3>Hero</h3>{" "}
      </SidebarItem>
      <SidebarItem>
        {" "}
        <FeatureIcon /> <h3>Features</h3>{" "}
      </SidebarItem>
      <SidebarItem>
        {" "}
        <CtaIcon /> <h3>CTA</h3>{" "}
      </SidebarItem>
      <SidebarItem>
        {" "}
        <FooterIcon /> <h3>Footer</h3>{" "}
      </SidebarItem>
    </LeftSidebar>
  );
};

export default LeftSideBar;
