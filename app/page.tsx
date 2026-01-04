import { Stack, Text, Title } from "@mantine/core";
import { sanityFetch } from "../sanity/lib/live";
import { FEATURED_STORIES_QUERY } from "../sanity/lib/queries";
import StoryGrid from "./_components/StoryGrid";
import { Story } from "../sanity/types";

const options = { next: { revalidate: 30 } };

export default async function HomePage() {
  const { data: featuredStories } = await sanityFetch({
    query: FEATURED_STORIES_QUERY,
  });

  return (
    <Stack
      justify="center"
      align="center"
      pt="6rem"
      pb="2rem"
      px="1rem"
      gap="5rem"
    >
      <Title order={1} ta="center">
        Liberty's Wolf Den
      </Title>
      <Text>
        Welcome to my den of stories. Feel free to browse fanfiction of all
        types written by me. Enjoy your stay.
      </Text>
      {featuredStories && featuredStories.length > 0 && (
        <StoryGrid stories={featuredStories as Story[]} />
      )}
    </Stack>
  );
}
