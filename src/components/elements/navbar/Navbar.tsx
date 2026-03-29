import { ButtonGroup, ExportButton, IconItem, LogoText, NavbarContent, PreviewButton } from "./NavbarStyle";
import { PreviewIcon } from "../../icons/PreviewIcon";

const Navbar: React.FC = () => {
  return (
    <NavbarContent>
      <LogoText>Zerix</LogoText>
      <ButtonGroup>
        <IconItem>
          <PreviewIcon />
          <span>Preview</span>
        </IconItem>
        <ExportButton>Export</ExportButton>
      </ButtonGroup>
    </NavbarContent>
  );
}
export default Navbar