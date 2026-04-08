import styled from "styled-components";

export const NavbarContent = styled.nav`
  position: relative; /* add this */
  background: #07005c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: var(--navbar-height);
  width: 100%;
  color: white;
`;
export const LogoTxt = styled.h1`
  font-size: 20px;
  color: white;
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 32px;
  list-style: none;
  color: white;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavCta = styled.button`
  border-radius: 5px;
  border: none;
  padding: 0.625rem 0.625rem;
  background: #20159d;
  color: white;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
  &:hover {
    background: #372bba;
  }
`;

export const NavLi = styled.li`
  cursor: pointer;
`;

// Burger Menu

export const BurgerButton = styled.button`
  gap: 5px;
  display:none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: white;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: calc(var(--navbar-height) + 0.5rem);
  right: 1.5rem;
  width: 220px;
  background: white;
  border-radius: 12px;
  padding: 0.5rem;
  z-index: 100;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(0, 0, 0, 0.06);
  animation:  0.2s ease forwards;
`;

export const MobileMenuItem = styled.div`
  padding: 0.7rem 1rem;
  font-size: 14px;
  color: #1a1a2e;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: #f4f4f8;
    color: #07005c;
  }
`;
