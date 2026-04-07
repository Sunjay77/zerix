/** @format */

import {
  ButtonGroup,
  ExportButton,
  LogoText,
  NavbarContent,
  PreviewButton,
} from "./NavbarStyle";
import { PreviewIcon } from "../icons/AppIcons";
import { Link } from "@tanstack/react-router";

const Navbar: React.FC = () => {
  return (
    <NavbarContent>
      <Link to="/">
        <LogoText>Zerix</LogoText>
      </Link>
      <ButtonGroup>
        <Link to="/preview">
          <PreviewButton>
            <PreviewIcon />
            Preview
          </PreviewButton>
        </Link>

        <ExportButton>Export</ExportButton>
      </ButtonGroup>
    </NavbarContent>
  );
};
export default Navbar;
