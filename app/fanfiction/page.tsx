import { Box, Flex, Title } from "@mantine/core";
import { sanityFetch } from "../../sanity/lib/live";
import { GENRES_WITH_STORIES_QUERY } from "../../sanity/lib/queries";
import { GENRES_WITH_STORIES_QUERYResult } from "../../sanity/types";
import HeroSection from "../_components/HeroSection";
import StoryGrid from "../_components/StoryGrid";
import BrowseAllButton from "../_components/BrowseAllButton";

const FanfictionPage = async () => {
  const { data: genres } = await sanityFetch({
    query: GENRES_WITH_STORIES_QUERY,
  });

  const typedGenres = genres as GENRES_WITH_STORIES_QUERYResult;

  return (
    <Box>
      <HeroSection
        title="Fanfiction"
        subtitle="Explore my collection of fanfiction stories"
      />
      <Box mx="auto" my="2rem">
        <Title order={2} ta="center" my="2rem">
          Genres
        </Title>
        <Title order={6} fw={400} ta="center">
          Discover stories across various genres, each with its own unique
          flavor and style.
        </Title>
        {typedGenres &&
          typedGenres.length > 0 &&
          typedGenres.map((genre) => (
            <Flex
              key={genre._id}
              direction="column"
              mt="5rem"
              gap="2rem"
              align="center"
              justify="center"
            >
              <Title order={3} ta="center">
                {genre.title}
              </Title>
              <StoryGrid stories={genre.stories} cols={genre.stories.length} />
              <BrowseAllButton
                href={`/fanfiction/${genre.slug.current}`}
                title={`${genre.title} Stories`}
              />
            </Flex>
          ))}
      </Box>
    </Box>
  );
};

export default FanfictionPage;
