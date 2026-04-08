import styled from "styled-components";

export const NavbarContent = styled.nav`
  background: #07005c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  height: 4rem;
  width: 100vh;
  color: white;
`;

export const LogoTxt = styled.h1`
  font-size: 1.25rem;
  color: white;
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  color: white;
`;

export const NavCta = styled.button`
  border-radius: 0.3125rem;
  border: none;
  padding: 10px 10px;
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