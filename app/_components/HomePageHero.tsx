import { Box, Flex, Title } from "@mantine/core";
import Image from "next/image";

const HomePageHero = () => {
  return (
    <Box
      pos="relative"
      w="100%"
      h="25rem"
      style={{
        aspectRatio: "16 / 9",
      }}
    >
      <Image
        src="/wolf-pack.jpg"
        alt="wolf pack background image"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        decoding="async"
        style={{
          objectFit: "cover",
          objectPosition: "50% 40%",
        }}
      />

      <Flex
        pos="absolute"
        inset={0}
        align="center"
        justify="center"
        style={{ zIndex: 1 }}
      >
        <Title
          order={1}
          ta="center"
          fw={800}
          c="blue.9"
          maw="90%"
          style={{
            contain: "layout paint",
          }}
        >
          Liberty&apos;s Wolf Den
        </Title>
      </Flex>
    </Box>
  );
};

export default HomePageHero;
