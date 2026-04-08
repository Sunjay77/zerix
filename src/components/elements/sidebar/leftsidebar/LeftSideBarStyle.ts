import styled from "styled-components";
export const LeftSidebar = styled.div`
  width: 15rem;
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-right: .125rem solid var(--border-color);
  padding-left: 1.25rem;
  position: sticky;
  top: 0;
`;
export const SidebarHeading = styled.h2`
  font-size: small;
  margin-top: 1.25rem;
`;

export const SidebarItem = styled.button`
  display: flex;
  border:none;
  align-items: center;
  gap: .625rem;
  cursor: pointer;
  padding: .4375rem;
  border-radius: .625rem;
  background:transparent;
  &:hover {
    color: white;
    background: var(--Buttons-color);
  }
    
`;
