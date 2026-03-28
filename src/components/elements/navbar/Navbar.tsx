import { ButtonGroup, ExportButton, LogoText, NavbarContent, PreviewButton } from "./NavbarStyle";

const Navbar: React.FC = () => {
  return (
    <NavbarContent>
      <LogoText>Zerix</LogoText>
      <ButtonGroup>
        <PreviewButton>Preview</PreviewButton>
        <ExportButton>Export</ExportButton>
      </ButtonGroup>
    </NavbarContent>
  );
}
export default Navbar