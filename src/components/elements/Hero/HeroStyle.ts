import styled from "styled-components";

export const HeroDiv = styled.div`
  padding: 6.25rem 6.25rem;
  width: 65%;
  align-items: center;
  min-height: 70vh;
  padding: 5rem 2.5rem;
`;

export const HeroSection = styled.section`
  display: flex;
  height: 100vh;
  max-width: 75rem;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #07005c;
  color: #d2b896;
  text-align: center;
  border-radius: .9375rem;
`;

export const HeroContent = styled.div`
  max-width: 43.75rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.25rem;
  color: white;
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1.875rem;
  color: white;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1.25rem;
  justify-content: center;
`;

export const Button = styled.button`
  padding: .625rem .625rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: .375rem;
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
  border: .125rem solid #fff;
  color: #fff;

  &:hover {
    background: #fff;
    color: #0b0d14;
  }
`;
