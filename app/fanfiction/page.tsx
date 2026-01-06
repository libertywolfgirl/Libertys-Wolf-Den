import { Box, Button, Flex, Title } from "@mantine/core";
import { sanityFetch } from "../../sanity/lib/live";
import { GENRES_WITH_STORIES_QUERY } from "../../sanity/lib/queries";
import { GENRES_WITH_STORIES_QUERYResult, Story } from "../../sanity/types";
import HeroSection from "../_components/HeroSection";
import StoryGrid from "../_components/StoryGrid";
import Link from "next/link";

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
      <Box mx="auto" mt="4rem" mb="6rem">
        <Title order={2} ta="center" my="2rem">
          Genres
        </Title>
        <Title order={6} fw={400} ta="center" mb="5rem">
          Discover stories across various genres, each with its own unique
          flavor and style.
        </Title>
        {typedGenres &&
          typedGenres.length > 0 &&
          typedGenres.map((genre) => (
            <Flex
              key={genre._id}
              direction="column"
              mb="5rem"
              gap="2rem"
              align="center"
              justify="center"
            >
              <Title order={3} ta="center">
                {genre.title}
              </Title>
              <StoryGrid stories={genre.stories} cols={genre.stories.length} />
              <Link
                href={`/fanfiction/${genre.slug.current}`}
                style={{ textDecoration: "none" }}
              >
                <Button color="teal.9" radius="xl" size="lg">
                  Browse All {genre.title} Stories
                </Button>
              </Link>
            </Flex>
          ))}
      </Box>
    </Box>
  );
};

export default FanfictionPage;
