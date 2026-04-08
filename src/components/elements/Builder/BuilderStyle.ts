import styled from "styled-components";

// Navbar

export const NavbarContent = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  height: 4rem;
  color: white;
`;

export const LogoTxt = styled.h1`
  font-size: 1.25rem;
  color: white;
  cursor: pointer;
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  color: white;
`;

export const NavCta = styled.button`
  border-radius: 0.3125rem;
  border: none;
  padding: 10px 10px;
  background: #20159d;
  color: white;
  cursor: pointer;
  &:hover {
    background: #372bba;
  }
`;

export const NavLi = styled.li`
  cursor: pointer;
`;
export const OuterDiv = styled.div`
  padding: 48px 48px;
  width: 90%;
  max-width: 75rem;
  margin: 0 auto;
`;

export const Builder = styled.div`
  background: #07005c;
  border-radius: 15px;
`;

export const HeroSection = styled.section`
  display: flex;
  height: 100%;
  max-width: 1200px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #d2b896;
  text-align: center;
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

// Features

export const FeaturesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0;
  background-color: #372bba;
  height: 100%;
  justify-content: center;
  row-gap: 0.625rem;
`;

export const FeaturesTitle = styled.h1`
  color: white;
`;

export const FeaturesParagraph = styled.p`
  color: white;
  text-align: center;
`;

export const FeaturesCards = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  gap: 0.9375rem;
  margin-top: 1.25rem;
`;

export const IconBox = styled.div`
  background-color: #1e1e1e;
  border-radius: 0.75rem;
  width: 3.125rem;
  height: 3.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
