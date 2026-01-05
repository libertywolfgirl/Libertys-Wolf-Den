import { Box, Title } from "@mantine/core";
import { sanityFetch } from "../sanity/lib/live";
import { FEATURED_STORIES_QUERY } from "../sanity/lib/queries";
import StoryGrid from "./_components/StoryGrid";
import { Story } from "../sanity/types";
import HomePageHero from "./_components/HomePageHero";

const options = { next: { revalidate: 30 } };

export default async function HomePage() {
  const { data: featuredStories } = await sanityFetch({
    query: FEATURED_STORIES_QUERY,
  });

  return (
    <Box mx="auto" mb="2rem">
      <HomePageHero />
      <Title order={2} ta="center" mb="2rem">
        Featured Stories
      </Title>
      {featuredStories && featuredStories.length > 0 && (
        <StoryGrid stories={featuredStories as Story[]} />
      )}
    </Box>
  );
}
