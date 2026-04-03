/** @format */

import styled from "styled-components";

export const HeroDiv = styled.div`
  padding: 100px 100px;
  width: 60%;
  align-items: center;
  min-height: 70vh;
  padding: 80px 40px;
`;

export const HeroSection = styled.section`
  display: flex;
  height: 100vh;
  max-width: 1200px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #07005c;
  color: #d2b896;
  text-align: center;
  border-radius: 15px;
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
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

export const PrimaryButton = styled(Button)`
  background: #20159d;
  color: white;
  cursor: pointer;
  &:hover {
    background: #372bba;
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
