import React from "react";
import {
  ButtonGroup,
  ExportButton,
  LogoText,
  NavbarContent,
  PreviewButton,
} from "./NavbarStyle";
import { PreviewIcon } from "../icons/AppIcons";
import { Link, useNavigate } from "@tanstack/react-router";

interface HeaderProps {
  isPreview: boolean;
  setIsPreview: (isPreview: boolean) => void;
}

const Navbar: React.FC<HeaderProps> = ({ isPreview, setIsPreview }) => {
  const navigate = useNavigate();

  const handlePreview = () => {
    setIsPreview(!isPreview);
    navigate({ to: "/preview" });
  };

  return (
    <NavbarContent>
      <Link to="/">
        <LogoText>Zerix</LogoText>
      </Link>
      <ButtonGroup>
        <PreviewButton onClick={handlePreview}>
          <PreviewIcon />
          Preview
        </PreviewButton>
        <ExportButton>Export</ExportButton>
      </ButtonGroup>
    </NavbarContent>
  );
};

export default Navbar;
