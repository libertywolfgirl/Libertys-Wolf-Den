import { Flex, Text, Title } from "@mantine/core";
import { CHARACTERS_QUERYResult } from "../../sanity/types";
import ImageContainer from "./ImageContainer";

type CharacterType = NonNullable<CHARACTERS_QUERYResult[0]>;

const CharacterSlide = ({ character }: { character: CharacterType }) => {
  const { name, gender, age, species, description, image } = character;

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap="md"
      p="xl"
      h="100%"
    >
      <Title order={3}>{name}</Title>
      {image && (
        <ImageContainer
          image={image}
          title={name}
          maxWidth={800}
          padding="1rem"
        />
      )}
      <Text>{gender}</Text>
      <Text>{age}</Text>
      <Text>{species}</Text>
      <Text maw={1000}>{description}</Text>
    </Flex>
  );
};

export default CharacterSlide;
