/** @format */

import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width:200vh;
  background: linear-gradient(12deg, #0b0d14, #1b2233);
  color: #fff;
  text-align: center;
  padding: 0 2rem;
`;

export const HeroContent = styled.div`
  max-width: 700px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  margin-bottom: 2rem;
  color: #ccc;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

export const PrimaryButton = styled(Button)`
  background: #3a82f7;
  color: white;

  &:hover {
    background: #2b64c9;
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