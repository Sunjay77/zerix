import { LogoTxt, NavbarContent, NavCta, NavLi, NavLinks } from "./UiNavbarStyle";

const Navbar: React.FC = () => {
  return (
     <NavbarContent>
              <LogoTxt>Brand</LogoTxt>
              <NavLinks>
                <NavLi>
                  <a>Home</a>
                </NavLi>
                <NavLi>
                  <a>Features</a>
                </NavLi>
                <NavLi>
                  <a>Pricing</a>
                </NavLi>
                <NavLi>
                  <a>Contact</a>
                </NavLi>
              </NavLinks>
              <NavCta>Get Started</NavCta>
            </NavbarContent>
  );
};
export default Navbar;
