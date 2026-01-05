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
      p="6rem"
      gap="xl"
      className={classes.container}
    >
      <Title order={1}>{title}</Title>
      <Title order={5} ta="center">
        {subtitle}
      </Title>
    </Flex>
  );
};

export default HeroSection;
