import { RightSideBarHeading, RightSideBarSection, RightSideBarTxt } from "./RightSideBarStyle";

const RightSideBar: React.FC = () => {
  return (
    <RightSideBarSection>
      <RightSideBarHeading>Right Sidebar</RightSideBarHeading>
      <RightSideBarTxt>This is the right sidebar content.</RightSideBarTxt>
    </RightSideBarSection>
  );
};

export default RightSideBar;
