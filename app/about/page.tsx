import { Box } from "@mantine/core";
import HeroSection from "../_components/HeroSection";
import AboutSection from "../_components/AboutSection";

const AboutPage = () => {
  return (
    <Box>
      <HeroSection title="About the Author" subtitle="Liberty aka pedepaulie" />
      <AboutSection />
    </Box>
  );
};

export default AboutPage;
