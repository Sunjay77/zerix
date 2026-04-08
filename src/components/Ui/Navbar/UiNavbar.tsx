import { BurgerIcon } from "../../elements/icons/AppIcons";
import { BurgerButton, LogoTxt, MobileMenu, MobileMenuItem, NavbarContent, NavCta, NavLi, NavLinks } from "./UiNavbarStyle";
import React, { useState } from "react";  

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      <BurgerButton onClick={() => setIsOpen(!isOpen)}> 
        <BurgerIcon />
      </BurgerButton>

      {isOpen && (                                        
        <MobileMenu>
          <MobileMenuItem onClick={() => setIsOpen(false)}>Home</MobileMenuItem>
          <MobileMenuItem onClick={() => setIsOpen(false)}>Features</MobileMenuItem>
          <MobileMenuItem onClick={() => setIsOpen(false)}>Pricing</MobileMenuItem>
          <MobileMenuItem onClick={() => setIsOpen(false)}>Contact</MobileMenuItem>
        </MobileMenu>
      )}
    </NavbarContent>
  );
};
export default Navbar;
