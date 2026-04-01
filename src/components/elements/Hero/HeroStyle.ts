/** @format */

import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #6c63ff;
  color: #fff;
  text-align: center;
  padding: 60px 40px;
`;

export const HeroContent = styled.div`
  max-width: 700px;
`;

export const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  color: white;
`;

export const Subtitle = styled.p`
  font-size: 20px;
  margin-bottom: 30px;
  color: white;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 10px 10px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

export const PrimaryButton = styled(Button)`
  background: #7439c7;
  color: white;

  &:hover {
    background: #942dcf;
  }
`;

export const SecondaryButton = styled(Button)`
  background: transparent;
  border: 2px solid #fff;
  color: #fff;

  &:hover {
    background: #fff;
    color: #0b0d14;
  }
`;
