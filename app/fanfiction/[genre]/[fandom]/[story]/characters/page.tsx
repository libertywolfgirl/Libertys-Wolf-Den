import { Box, Button, Group, Title, Flex } from "@mantine/core";
import { sanityFetch } from "../../../../../../sanity/lib/live";
import {
  CHARACTERS_PARAMS_QUERY,
  CHARACTERS_QUERY,
} from "../../../../../../sanity/lib/queries";
import {
  CHARACTERS_PARAMS_QUERYResult,
  CHARACTERS_QUERYResult,
} from "../../../../../../sanity/types";
import HeroSection from "../../../../../_components/HeroSection";
import Link from "next/link";
import { staticFetch } from "../../../../../../sanity/lib/staticFetch";
import { removeDashesAndCapitalize } from "../../../../../_utils/removeDashesAndCapitalize";
import DescriptionBubble from "../../../../../_components/DescriptionBubble";
import CharacterCarousel from "../../../../../_components/CharacterCarousel";

type Props = {
  params: Promise<{
    story: string;
    fandom: string;
    genre: string;
  }>;
};

export const generateMetadata = async (props: Props) => {
  const params = await props.params;
  const { story } = params;
  const title = removeDashesAndCapitalize(story);

  return { title: `${title} Characters` };
};

export const generateStaticParams = async () => {
  const data = await staticFetch<CHARACTERS_PARAMS_QUERYResult>({
    query: CHARACTERS_PARAMS_QUERY,
  });

  return data;
};

const CharactersPage = async (props: Props) => {
  const params = await props.params;
  const { story, fandom, genre } = params;

  const { data: characters } = await sanityFetch({
    query: CHARACTERS_QUERY,
    params: { storySlug: story },
  });

  const typedCharacters = characters as CHARACTERS_QUERYResult;

  if (typedCharacters.length === 0)
    return (
      <Title order={1} ta="center" pt="1rem">
        Characters Coming Soon...
      </Title>
    );

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
        <Title
          order={2}
          ta="center"
          mt={{ base: "3rem", sm: "4rem", lg: "5rem" }}
          mb={{ base: "1rem", sm: "1.75rem", lg: "2.5rem" }}
        >
          Characters
        </Title>
        <Group py="md">
          {characterNames.map((name) => (
            <DescriptionBubble key={name} description={name} />
          ))}
        </Group>
        <Title
          order={2}
          ta="center"
          mt={{ base: "2rem", sm: "3rem", lg: "4rem" }}
        >
          Explore
        </Title>
        <CharacterCarousel characters={typedCharacters} />
        <Flex
          align="Center"
          justify="center"
          mt={{ base: "3rem", sm: "4rem", lg: "5rem" }}
        >
          <Link
            href={`/fanfiction/${genre}/${fandom}/${story}`}
            style={{ textDecoration: "none" }}
          >
            <Button radius="xl" size="xl" h={{ base: "5rem", xs: "3.5rem" }}>
              <Title order={4} c="white">
                Read {storyTitle} Now
              </Title>
            </Button>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default CharactersPage;
