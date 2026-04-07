import {
  HeroContent,
  HeroSection,
  Title,
  Subtitle,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  HeroDiv,
  NavbarContent,
  LogoTxt,
} from "./HeroStyle";

const Hero: React.FC = () => {
  return (
    <HeroDiv>
      <NavbarContent>
        <LogoTxt>Zerix</LogoTxt>
        <a>Home</a>
        <a>Features</a>
        <a>Pricing</a>
        <a>Contact</a>
      </NavbarContent>
      <HeroSection>
        <HeroContent>
          <Title>Welcome</Title>
          <Subtitle>Your journey starts here!</Subtitle>
          <ButtonGroup>
            <PrimaryButton>Get Started</PrimaryButton>
            <SecondaryButton>Learn More</SecondaryButton>
          </ButtonGroup>
        </HeroContent>
      </HeroSection>
    </HeroDiv>
  );
};

export default Hero;
