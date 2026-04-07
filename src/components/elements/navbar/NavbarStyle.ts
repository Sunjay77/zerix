/** @format */

import styled from "styled-components";
export const NavbarContent = styled.nav`
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
`;

export const LogoText = styled.h1`
  font-size: 20px;
  color: #07005c;
`;

export const BaseButton = styled.button`
  padding: 6px 10px;
  font-size: 14px;
  gap: 5px;
  border-radius: 6px;
`;

export const PreviewButton = styled(BaseButton)`
  background-color: transparent;
  border: 1px solid #e0e0e0;
  color: gray;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: gray;
    color: white;
  }
`;

export const ExportButton = styled(BaseButton)`
  background: #07005c;
  border: none;
  color: #ffffff;
  cursor: pointer;
  &:hover{
    background-color: #261b9b;
    color: white;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

