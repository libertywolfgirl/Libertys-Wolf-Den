import { Flex, Stack, Title } from "@mantine/core";
import { sanityFetch } from "../sanity/lib/live";
import { FEATURED_STORIES_QUERY } from "../sanity/lib/queries";
import HomePageHero from "./_components/HomePageHero";
import WelcomeSection from "./_components/WelcomeSection";
import AllFanfictionSection from "./_components/AllFanfictionSection";
import dynamic from "next/dynamic";
import Loading from "./loading";

const StoryGrid = dynamic(() => import("./_components/StoryGrid"), {
  loading: () => <Loading />,
});

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
      gap={{ base: "1rem", sm: "2rem", lg: "3rem" }}
    >
      <HomePageHero />
      <WelcomeSection />
      {featuredStories && featuredStories.length > 0 && (
        <Stack>
          <Title order={2} ta="center" pb={{ base: "0.5rem", md: "1rem" }}>
            Featured Stories
          </Title>
          <StoryGrid stories={featuredStories} cols={3} heading={3} />
        </Stack>
      )}
      <Flex justify="center" mb={{ base: "0.5rem", md: "1rem" }}>
        <AllFanfictionSection />
      </Flex>
    </Flex>
  );
};

export default HomePage;
