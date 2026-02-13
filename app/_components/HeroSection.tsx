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
      p={{
        base: "1rem",
        xs: "2rem",
        sm: "3rem",
        md: "4rem",
        lg: "5rem",
        xl: "6rem",
      }}
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
      <Title order={5} ta="center">
        {subtitle}
      </Title>
    </Flex>
  );
};

export default HeroSection;
