import { Box, Flex, Title } from "@mantine/core";
import { sanityFetch } from "../../sanity/lib/live";
import { GENRES_WITH_STORIES_QUERY } from "../../sanity/lib/queries";
import { GENRES_WITH_STORIES_QUERYResult } from "../../sanity/types";
import HeroSection from "../_components/HeroSection";
import StoryGrid from "../_components/StoryGrid";
import BrowseAllButton from "../_components/BrowseAllButton";
import NotFound from "../not-found";
import SearchBar from "../_components/SearchBar";

const FanfictionPage = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) => {
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
      <Box pt={{ base: "1rem", sm: "2rem", lg: "3rem" }}>
        <SearchBar />
      </Box>
      <Box
        mx="auto"
        my={{ base: "1rem", sm: "2rem", lg: "3rem" }}
        px={{ base: "0.5rem", sm: "1rem", lg: "2rem" }}
      >
        <Title
          order={2}
          ta="center"
          my={{ base: "0.5rem", sm: "1rem", lg: "2rem" }}
        >
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
