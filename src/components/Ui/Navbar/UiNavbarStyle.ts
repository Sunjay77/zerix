import styled from "styled-components";

export const NavbarContent = styled.nav`
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
`;

export const NavCta = styled.button`
  border-radius: 5px;
  border: none;
  padding: .625rem .625rem;
  background: #20159d;
  color: white;
  cursor: pointer;
  &:hover {
    background: #372bba;
  }
`;

export const NavLi = styled.li`
  cursor: pointer;
`;
