import { Flex, Text } from "@mantine/core";
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
      <Image
        src="/wolf-stare.jpg"
        alt="wolf staring image"
        height={1280}
        width={1280}
        style={{
          maxWidth: 700,
          width: "100%",
          height: "auto",
          padding: "1rem",
        }}
      />
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
