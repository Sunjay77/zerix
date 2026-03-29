import styled from "styled-components";
export const NavbarContent = styled.nav`
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  align-items: center;
  background: #0a0a0a;
  border-bottom: 1px solid gray;
`;

export const LogoText = styled.h1`
  font-size: 20px;
  color: #ffffff;
`;

export const PreviewButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 14px;
  color: #ffffff;
  font-weight: bold;
  cursor:pointer;
`;

export const ExportButton = styled.button`
  background: #ffffff;
  color: #0a0a0a;
  border: none;
  padding: 7px 20px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;