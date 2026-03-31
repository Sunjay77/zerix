import { HeroContent, HeroSection,Title,Subtitle, ButtonGroup,PrimaryButton,SecondaryButton } from "../Hero/HeroStyle";

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroContent>
        <Title>Welcome to Our App</Title>
        <Subtitle>Your journey starts here!</Subtitle>
        <ButtonGroup>
          <PrimaryButton>Get Started</PrimaryButton>
          <SecondaryButton>Learn More</SecondaryButton>
        </ButtonGroup>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;