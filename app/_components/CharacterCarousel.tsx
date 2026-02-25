import { Carousel, CarouselSlide } from "@mantine/carousel";
import { CHARACTERS_QUERYResult } from "../../sanity/types";
import { Box, Flex } from "@mantine/core";
import CharacterSlide from "./CharacterSlide";

const CharacterCarousel = ({
  characters,
}: {
  characters: CHARACTERS_QUERYResult;
}) => {
  return (
    <Flex justify="center" pt="2.5rem" mx="xs">
      <Carousel
        withIndicators
        height="100%"
        w="100%"
        maw={1200}
        bg="orange"
        p="xl"
        controlsOffset="xs"
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
    </Flex>
  );
};

export default CharacterCarousel;
