import { Flex, Stack, Text, Title } from "@mantine/core";
import Image from "next/image";

const HomePageHero = () => {
  return (
    <Flex pos="relative" w="100%" align="center" justify="center">
      <Image
        src="/wolf-pack.jpg"
        alt="wolf pack background image"
        fill
        priority
        fetchPriority="high"
        objectFit="cover"
        objectPosition="50% 40%"
      />
      <Stack
        justify="center"
        align="center"
        py="7rem"
        px="1rem"
        gap="3rem"
        mih="22rem"
        pos="relative"
        style={{ zIndex: 1 }}
      >
        <Title order={1} ta="center" fw={800} c="blue.1">
          Liberty&apos;s Wolf Den
        </Title>
        <Text
          fz={{ base: "1rem", xs: "1.15rem", md: "1.3rem" }}
          maw="30rem"
          ta="center"
          fw={800}
          c="blue.0"
        >
          Welcome to my den of stories. Feel free to browse fanfiction of all
          types written by me. Enjoy your stay.
        </Text>
      </Stack>
    </Flex>
  );
};

export default HomePageHero;
