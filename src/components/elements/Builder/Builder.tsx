import {
  HeroContent,
  HeroSection,
  Title,
  Subtitle,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  NavbarContent,
  LogoTxt,
  NavLinks,
  NavCta,
  Builder,
  OuterDiv,
  NavLi,
  FeaturesSection,
  FeaturesTitle,
  FeaturesParagraph,
  IconWrapper,
  IconBox,
} from "./BuilderStyle";

import { CloudLightningIcon, ShieldIcon, UpIcon } from "../icons/AppIcons";

const Hero: React.FC = () => {
  return (
    <OuterDiv>
      {/* Navbar */}
      <Builder>
        <NavbarContent>
          <LogoTxt>Brand</LogoTxt>
          <NavLinks>
            <NavLi>
              <a>Home</a>
            </NavLi>
            <NavLi>
              <a>Features</a>
            </NavLi>
            <NavLi>
              <a>Pricing</a>
            </NavLi>
            <NavLi>
              <a>Contact</a>
            </NavLi>
          </NavLinks>
          <NavCta>Get Started</NavCta>
        </NavbarContent>

        {/* Hero Section */}

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

        {/* Features */}

        <FeaturesSection>
          <FeaturesTitle>Our Features</FeaturesTitle>
          <FeaturesParagraph>
            Discover the amazing features we offer.
          </FeaturesParagraph>
          <IconWrapper>
            <IconBox>
              <CloudLightningIcon />
            </IconBox>

            <IconBox>
              <ShieldIcon />
            </IconBox>

            <IconBox>
              <UpIcon />
            </IconBox>
          </IconWrapper>
        </FeaturesSection>
      </Builder>
    </OuterDiv>
  );
};

export default Hero;
