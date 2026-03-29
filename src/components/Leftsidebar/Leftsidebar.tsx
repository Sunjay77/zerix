import { LeftSidebar, SidebarHeading } from "./LeftSideBarStyle";
const LeftSideBar: React.FC = () => {
  return (
    <LeftSidebar>
      <SidebarHeading>COMPONENTS</SidebarHeading>
      <h3>Navbar</h3>
      <h3>Hero</h3>
      <h3>Features</h3>
      <h3>CTA</h3>
      <h3>Footer</h3>
    </LeftSidebar>
  );
}

export default LeftSideBar