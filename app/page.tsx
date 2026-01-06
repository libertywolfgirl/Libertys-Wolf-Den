import { Flex, Title } from "@mantine/core";
import { sanityFetch } from "../sanity/lib/live";
import { FEATURED_STORIES_QUERY } from "../sanity/lib/queries";
import StoryGrid from "./_components/StoryGrid";
import HomePageHero from "./_components/HomePageHero";
import BrowseAllButton from "./_components/BrowseAllButton";

const options = { next: { revalidate: 30 } };

export default async function HomePage() {
  const { data: featuredStories } = await sanityFetch({
    query: FEATURED_STORIES_QUERY,
  });

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap="1.5rem"
      mb="4rem"
    >
      <HomePageHero />
      <Title order={2} ta="center" mt="1.5rem">
        Featured Stories
      </Title>
      {featuredStories && featuredStories.length > 0 && (
        <StoryGrid stories={featuredStories} cols={3} />
      )}
      <BrowseAllButton href="/fanfiction" title="Fanfiction" />
    </Flex>
  );
}
