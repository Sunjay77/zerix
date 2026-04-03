/** @format */

import {
  HeroContent,
  HeroSection,
  Title,
  Subtitle,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  HeroDiv
} from "./HeroStyle";

const Hero: React.FC = () => {
  return (
          <HeroDiv>
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
           </HeroDiv>
  );
};

export default Hero;
