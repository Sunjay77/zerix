import styled from "styled-components";

export const OuterDiv = styled.div`
  padding: 3rem 3rem;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

// Navbar

export const NavbarContent = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 64px;
  color: white;
`;

export const LogoTxt = styled.h1`
  font-size: 20px;
  color: white;
  cursor: pointer;
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 32px;
  list-style: none;
  color: white;
`;

export const NavCta = styled.button`
  border-radius: 5px;
  border: none;
  padding: .625rem .625rem;
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

// HeroSection

export const Builder = styled.div`
  background: #07005c;
  border-radius: .9375rem;
  height:100%;
  width:100%;
`;

export const HeroSection = styled.section`
  display: flex;
  height: 50%;
  max-width: 75rem;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

// Features

export const FeaturesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  background-color: #372bba;
  height: 50%;
  justify-content: center;
  row-gap: 10px;
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
  gap: 1.25rem;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-top: 20px;
`;

export const IconBox = styled.div`
  background-color: #1e1e1e;
  border-radius: 12px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
