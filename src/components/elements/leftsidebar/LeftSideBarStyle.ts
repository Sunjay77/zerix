/** @format */

import styled from "styled-components";
export const LeftSidebar = styled.div`
  width: 280px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-right: 2px solid #e0e0e0;
  font-family: monospace;
  padding-left: 20px;
  position:sticky;
`;
export const SidebarHeading = styled.h2`
  font-weight: 100;
  font-size: small;
  margin-top: 20px;
`;

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 7px;
  border-radius: 10px;
  &:hover {
    color: white;
    background: #6c63ff;
  }
`;