/** @format */

import styled from "styled-components";
export const LeftSidebar = styled.div`
  width: 25vh;
  height: 100vh;
  background: black;
  border: solid black;
  color: gray;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-right: 1px solid gray;
  font-family: monospace;
`;
export const SidebarHeading = styled.h2`
  font-weight: 100;
  font-size: small;
  color: #6f7279;
  margin-top: 20px;
  padding-left: 5px;
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
    background: #1a1a1a;
  }
`;
