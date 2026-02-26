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
      gap={{ base: "xs", md: "sm" }}
      p={{ base: "xs", sm: "sm", lg: "md" }}
      h="100%"
    >
      <Title order={3}>{name}</Title>
      {image && (
        <ImageContainer
          image={image}
          title={name}
          maxWidth={600}
          maxHeight={400}
        />
      )}
      <Text fw={600}>{gender}</Text>
      {age && <Text fw={600}>{age}</Text>}
      {species && <Text fw={600}>{species}</Text>}
      {description && <Text maw={800}>{description}</Text>}
    </Flex>
  );
};

export default CharacterSlide;
