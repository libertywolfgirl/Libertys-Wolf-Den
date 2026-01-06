import { Box, Title } from "@mantine/core";
import { sanityFetch } from "../../../../sanity/lib/live";
import { STORIES_FOR_FANDOM_QUERY } from "../../../../sanity/lib/queries";
import { STORIES_FOR_FANDOM_QUERYResult } from "../../../../sanity/types";
import NotFound from "../../../not-found";
import HeroSection from "../../../_components/HeroSection";
import StoryGrid from "../../../_components/StoryGrid";

const FandomPage = async ({ params }: { params: { fandom: string } }) => {
  const { fandom } = await params;

  const { data: stories } = await sanityFetch({
    query: STORIES_FOR_FANDOM_QUERY,
    params: { fandomSlug: fandom },
  });

  const typedStories = stories as STORIES_FOR_FANDOM_QUERYResult;

  const fandomName = typedStories[0]?.fandom.title;

  const numCols = typedStories.length < 5 ? typedStories.length : 5;

  if (!typedStories || typedStories.length === 0) {
    return <NotFound />;
  }

  return (
    <Box>
      <HeroSection
        title={fandomName}
        subtitle={`Browse all of my ${fandomName} fanfiction!`}
      />
      <Box mx="auto" my="4rem">
        <Title order={2} ta="center" my="2rem">
          Stories
        </Title>
        <StoryGrid stories={typedStories} cols={numCols} />
      </Box>
    </Box>
  );
};

export default FandomPage;
