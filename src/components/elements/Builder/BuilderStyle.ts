import styled from "styled-components";

export const OuterDiv = styled.div`
  padding: 3rem 3rem;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Builder = styled.div`
  background: #07005c;
  border-radius: .625rem;
  
`;

export const HeroSection = styled.section`
  display: flex;
  height: 100vh;
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
`