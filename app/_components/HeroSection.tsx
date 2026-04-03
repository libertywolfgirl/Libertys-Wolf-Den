import { Flex, Title } from "@mantine/core";
import classes from "./HeroSection.module.css";

const HeroSection = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap={{ base: "xs", sm: "md", lg: "xl" }}
      className={classes.container}
    >
      <Title
        order={1}
        ta="center"
        style={{
          contentVisibility: "visible",
          contain: "layout paint",
        }}
      >
        {title}
      </Title>
      <Title order={2} className={classes.heading}>
        {subtitle}
      </Title>
    </Flex>
  );
};

export default HeroSection;
