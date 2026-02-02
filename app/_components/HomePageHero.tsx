import { Box, Flex, Stack, Text, Title } from "@mantine/core";
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
      <Flex
        align="center"
        py="7rem"
        px="1rem"
        mih="25rem"
        pos="relative"
        style={{ zIndex: 1 }}
      >
        <Title order={1} ta="center" fw={800} c="blue.9">
          Liberty&apos;s Wolf Den
        </Title>
      </Flex>
    </Flex>
  );
};

export default HomePageHero;
