
import { PreviewIcon } from "../../elements/icons/AppIcons";
import {
  ButtonGroup,
  ExportButton,
  LogoText,
  NavbarContent,
  PreviewButton,
} from "./UiNavbarStyle";


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
