import { Carousel, CarouselSlide } from "@mantine/carousel";
import { CHARACTERS_QUERYResult } from "../../sanity/types";
import { Box, Flex, Paper } from "@mantine/core";
import CharacterSlide from "./CharacterSlide";

const CharacterCarousel = ({
  characters,
}: {
  characters: CHARACTERS_QUERYResult;
}) => {
  return (
    <Flex
      justify="center"
      align="center"
      pt={{ base: "1rem", sm: "1.75rem", lg: "2.5rem" }}
      mx="xs"
    >
      <Paper w={{ base: "100%", md: "fit-content" }}>
        <Carousel
          height="100%"
          w="100%"
          maw={1000}
          p={{ base: "xs", md: "sm" }}
          controlsOffset="sm"
          emblaOptions={{
            loop: true,
          }}
        >
          {characters.map((char) => (
            <CarouselSlide key={char._id}>
              <CharacterSlide character={char} />
            </CarouselSlide>
          ))}
        </Carousel>
      </Paper>
    </Flex>
  );
};

export default CharacterCarousel;
