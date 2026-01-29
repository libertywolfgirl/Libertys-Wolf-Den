import { Box } from "@mantine/core";
import HeroSection from "../_components/HeroSection";
import AboutSection from "../_components/AboutSection";

export const metadata = {
  title: "About",
  description: "Information about the fanfiction author",
};

const AboutPage = () => {
  return (
    <Box>
      <HeroSection title="About the Author" subtitle="Liberty aka PedePaulie" />
      <AboutSection />
    </Box>
  );
};

export default AboutPage;
