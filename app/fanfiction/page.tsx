import { Box, Flex, Text, Title } from "@mantine/core";
import { sanityFetch } from "../../sanity/lib/live";
import { GENRES_WITH_STORIES_QUERY } from "../../sanity/lib/queries";
import { GENRES_WITH_STORIES_QUERYResult } from "../../sanity/types";
import HeroSection from "../_components/HeroSection";
import StoryGrid from "../_components/StoryGrid";
import BrowseAllButton from "../_components/BrowseAllButton";
import NotFound from "../not-found";
import SearchBar from "../_components/SearchBar";
import SearchResults from "../_components/SearchResults";
import ChooseStory from "../_components/ChooseStory";
import DescriptionBubble from "../_components/DescriptionBubble";

export const metadata = {
  title: "Fanfiction",
  description:
    "List of fanfiction genre and sample stories with a search function",
};

const FanfictionPage = async (props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  const { data: genres } = await sanityFetch({
    query: GENRES_WITH_STORIES_QUERY,
  });

  const typedGenres = genres as GENRES_WITH_STORIES_QUERYResult;

  if (!typedGenres || typedGenres.length === 0) {
    return <NotFound />;
  }

  return (
    <Box>
      <HeroSection
        title="Fanfiction"
        subtitle="Explore my collection of fanfiction stories"
      />
      <Box
        w={{ base: "100%", md: "80%" }}
        mx="auto"
        pt={{ base: "1rem", sm: "2rem", lg: "3rem" }}
      >
        <Text fw={600} pb="xs">
          Looking for something specific?
        </Text>
        <SearchBar />
        {query && <SearchResults query={query} />}
      </Box>
      <ChooseStory />
      <Box
        mx="auto"
        my={{ base: "2rem", sm: "3rem", lg: "4rem" }}
        px={{ base: "0.5rem", sm: "1rem", lg: "2rem" }}
      >
        <Title
          order={2}
          ta="center"
          my={{ base: "0.5rem", sm: "1rem", lg: "2rem" }}
        >
          Genres
        </Title>
        <DescriptionBubble
          description="Discover stories across various genres, each with its own unique
          flavor and style."
        />
        {typedGenres &&
          typedGenres.length > 0 &&
          typedGenres.map((genre) => (
            <Flex
              key={genre._id}
              direction="column"
              mt={{ base: "2rem", sm: "3rem", lg: "4rem" }}
              gap={{ base: "1rem", sm: "1.5rem", lg: "2rem" }}
              align="center"
              justify="center"
            >
              <Title order={3} ta="center">
                {genre.title}
              </Title>
              <StoryGrid stories={genre.stories} cols={genre.stories.length} />
              <BrowseAllButton
                href={`/fanfiction/${genre.slug.current}`}
                title={`Stories Based on ${genre.title}`}
              />
            </Flex>
          ))}
      </Box>
    </Box>
  );
};

export default FanfictionPage;
