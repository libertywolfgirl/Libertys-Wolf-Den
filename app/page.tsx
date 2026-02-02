import { Flex, Title } from "@mantine/core";
import { sanityFetch } from "../sanity/lib/live";
import { FEATURED_STORIES_QUERY } from "../sanity/lib/queries";
import StoryGrid from "./_components/StoryGrid";
import HomePageHero from "./_components/HomePageHero";
import BrowseAllButton from "./_components/BrowseAllButton";
import WelcomeSection from "./_components/WelcomeSection";

export const revalidate = 60;

const HomePage = async () => {
  const { data: featuredStories } = await sanityFetch({
    query: FEATURED_STORIES_QUERY,
  });

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap="1.5rem"
      mb="2rem"
    >
      <HomePageHero />
      <WelcomeSection />
      <Title order={2} ta="center" mt="1.5rem">
        Featured Stories
      </Title>
      {featuredStories && featuredStories.length > 0 && (
        <StoryGrid stories={featuredStories} cols={3} />
      )}
      <BrowseAllButton href="/fanfiction" title="Fanfiction" />
    </Flex>
  );
};

export default HomePage;
