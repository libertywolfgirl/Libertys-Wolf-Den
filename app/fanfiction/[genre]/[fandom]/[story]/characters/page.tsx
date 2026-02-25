import { Box, Group, Title } from "@mantine/core";
import { sanityFetch } from "../../../../../../sanity/lib/live";
import { CHARACTERS_QUERY } from "../../../../../../sanity/lib/queries";
import { CHARACTERS_QUERYResult } from "../../../../../../sanity/types";
import NotFound from "../../../../../not-found";
import HeroSection from "../../../../../_components/HeroSection";
import DescriptionBubble from "../../../../../_components/DescriptionBubble";
import CharacterCarousel from "../../../../../_components/CharacterCarousel";

type Props = {
  params: Promise<{
    story: string;
  }>;
};

export const CharactersPage = async (props: Props) => {
  const params = await props.params;
  const { story } = params;

  const { data: characters } = await sanityFetch({
    query: CHARACTERS_QUERY,
    params: { storySlug: story },
  });

  const typedCharacters = characters as CHARACTERS_QUERYResult;

  if (!typedCharacters) return <NotFound />;

  const storyTitle = typedCharacters[0]?.story?.title || "";
  const characterNames = typedCharacters.map((char) => char.name);

  return (
    <Box>
      <HeroSection
        title={`The Characters of ${storyTitle}`}
        subtitle="Get a preview of what the characters are like!"
      />
      <Box
        mx="auto"
        my={{ base: "1rem", sm: "2rem", lg: "3rem" }}
        px={{ base: "0.5rem", sm: "1rem", lg: "2rem" }}
      >
        <Title order={2} ta="center" mt="5rem" mb="2.5rem">
          Characters
        </Title>
        <Group py="md">
          {characterNames.map((name) => (
            <DescriptionBubble key={name} description={name} />
          ))}
        </Group>
        <Title order={2} ta="center" mt="4rem">
          Explore
        </Title>
        <CharacterCarousel characters={typedCharacters} />
      </Box>
    </Box>
  );
};

export default CharactersPage;
