import { ExportButton, LogoText, NavbarContent, PreviewButton } from "./NavbarStyle";

const Navbar: React.FC = () => {
  return (
    <NavbarContent>
      <LogoText>Zerix</LogoText>
      <div>
        <PreviewButton>Preview</PreviewButton>
        <ExportButton>Export</ExportButton>
      </div>
    </NavbarContent>
  );
}
export default Navbar