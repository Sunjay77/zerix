import styled from "styled-components";
export const NavbarContent = styled.nav`
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.625rem 1.875rem;
  align-items: center;
  border-bottom: 0.0625rem solid var(--border-color);
`;

export const LogoText = styled.h1`
  color: var(--Buttons-color);
`;

export const BaseButton = styled.button`
  padding: 0.375rem 0.625rem;
  font-size: 0.875rem;
  gap: 0.3125rem;
  border-radius: 0.375rem;
`;

export const PreviewButton = styled(BaseButton)`
  background-color: transparent;
  border: 0.0625rem solid #e0e0e0;
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
  &:hover {
    background-color: #261b9b;
    color: white;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;
