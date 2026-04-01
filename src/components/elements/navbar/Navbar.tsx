/** @format */

import {
  ButtonGroup,
  ExportButton,
  LogoText,
  NavbarContent,
  PreviewButton,
} from "./NavbarStyle";
import { PreviewIcon } from "../icons/AppIcons";

const Navbar: React.FC = () => {
  return (
    <NavbarContent>
      <LogoText>Zerix</LogoText>
      <ButtonGroup>
        <PreviewButton>
          <PreviewIcon />
          Preview
        </PreviewButton>
        <ExportButton>Export</ExportButton>
      </ButtonGroup>
    </NavbarContent>
  );
};
export default Navbar;
