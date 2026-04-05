/** @format */

import { LeftSidebar, SidebarHeading, SidebarItem } from "./LeftSideBarStyle";
import {
  WindowsIcon,
  HeroIcon,
  FeatureIcon,
  CtaIcon,
  FooterIcon,
} from "../../icons/AppIcons";
const LeftSideBar: React.FC = () => {
  function handleNavClick(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <LeftSidebar>
      <SidebarHeading>COMPONENTS</SidebarHeading>
      <SidebarItem onClick={() => handleNavClick('navbar')}>
        <WindowsIcon /> <h3>Navbar</h3>
      </SidebarItem>
      <SidebarItem onClick={() => handleNavClick('hero')}>
        <HeroIcon /> <h3>Hero</h3>
      </SidebarItem>
      <SidebarItem onClick={() => handleNavClick('features')}>
        <FeatureIcon /> <h3>Features</h3>
      </SidebarItem>
      <SidebarItem onClick={() => handleNavClick('cta')}>
        <CtaIcon /> <h3>CTA</h3>
      </SidebarItem>
      <SidebarItem onClick={() => handleNavClick('footer')}>
        <FooterIcon /> <h3>Footer</h3>
      </SidebarItem>
    </LeftSidebar>
  );
};

export default LeftSideBar;
