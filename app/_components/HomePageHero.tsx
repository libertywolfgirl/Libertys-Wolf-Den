import { Box, Flex, Title } from "@mantine/core";
import Image from "next/image";

const HomePageHero = () => {
  return (
    <Box
      pos="relative"
      w="100%"
      h={{ base: 120, sm: 240, lg: 400 }}
      style={{ overflow: "hidden" }}
    >
      <Image
        src="/wolf-pack.webp"
        alt="wolf pack background image"
        fill
        priority
        fetchPriority="high"
        quality={50}
        sizes="100vw"
        objectFit="cover"
        objectPosition="50% 40%"
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
          c="#00FFFF"
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
