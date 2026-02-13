import { Box, Flex, Text } from "@mantine/core";
import Image from "next/image";

const ChooseStory = () => {
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      align="center"
      justify="space-evenly"
      mt={{ base: "2rem", sm: "3.25rem", lg: "4.5rem" }}
    >
      <Text
        ta="center"
        fz={{ base: "2rem", md: "3rem", xl: "4rem" }}
        maw={{ base: "100%", lg: "25%" }}
      >
        Are you ready to read?
      </Text>
      <Box
        pos="relative"
        w="100%"
        maw={720}
        p="1rem"
        style={{ aspectRatio: "1000 / 710" }}
      >
        <Image
          src="/wolf-stare.jpg"
          alt="wolf staring image"
          priority
          fetchPriority="high"
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 720px) 100vw, 720px"
        />
      </Box>
      <Text
        ta="center"
        fz={{ base: "2rem", md: "3rem", xl: "4rem" }}
        maw={{ base: "100%", lg: "25%" }}
      >
        Choose your story!
      </Text>
    </Flex>
  );
};

export default ChooseStory;
