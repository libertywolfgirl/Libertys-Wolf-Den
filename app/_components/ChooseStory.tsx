import { Box, Flex, Text } from "@mantine/core";
import Image from "next/image";

const ChooseStory = () => {
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      align="center"
      justify={{ base: "center", lg: "space-evenly" }}
      mt={{ base: "2rem", sm: "3.25rem", lg: "4.5rem" }}
    >
      <Text
        ta="center"
        fz={{ base: "2rem", md: "3rem", xl: "4rem" }}
        maw={{ base: "100%", lg: "25%" }}
        pb="1rem"
      >
        Are you ready to read?
      </Text>
      <Box
        pos="relative"
        w="100%"
        maw={{ base: 350, sm: 535, lg: 720 }}
        mah={{ base: "25vh", sm: "50vh" }}
        p="1rem"
        style={{ aspectRatio: "720 / 511" }}
      >
        <Image
          src="/wolf-stare.jpg"
          alt="wolf staring image"
          fill
          loading="lazy"
          decoding="async"
          quality={65}
          sizes="(max-width: 480px) 320px, (max-width: 768px) 500px, 720px"
          style={{ objectFit: "contain" }}
        />
      </Box>
      <Text
        ta="center"
        fz={{ base: "2rem", md: "3rem", xl: "4rem" }}
        maw={{ base: "100%", lg: "25%" }}
        pt="1rem"
      >
        Choose your story!
      </Text>
    </Flex>
  );
};

export default ChooseStory;
