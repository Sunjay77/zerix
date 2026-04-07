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
  padding: 0.625rem 0.625rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 0.375rem;
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
  border: 0.125rem solid #fff;
  color: #fff;

  &:hover {
    background: #fff;
    color: #0b0d14;
  }
`;

export const NavbarContent = styled.nav`
  height: 64px;
  width: 100%;
  display: flex;
  justify-content:
  padding: 10px 30px;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  background: #07005c;
  color: white;
`;

export const LogoTxt = styled.h1`
  font-size: 20px;
  color: var(--Buttons-color);
`;
