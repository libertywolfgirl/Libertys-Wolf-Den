import { Box, Stack } from "@mantine/core";
import { sanityFetch } from "../../../../../sanity/lib/live";
import { STORY_WITH_FIRST_CHAPTER_QUERY } from "../../../../../sanity/lib/queries";
import HeroSection from "../../../../_components/HeroSection";
import { STORY_WITH_FIRST_CHAPTER_QUERYResult } from "../../../../../sanity/types";
import NotFound from "../../../../not-found";
import ImageContainer from "../../../../_components/ImageContainer";
import StoryInfo from "../../../../_components/StoryInfo";

const StoryPage = async ({
  params,
}: {
  params: Promise<{ story: string }>;
}) => {
  const { story } = await params;

  const { data: storyData } = await sanityFetch({
    query: STORY_WITH_FIRST_CHAPTER_QUERY,
    params: { storySlug: story },
  });

  const typedStory = storyData as STORY_WITH_FIRST_CHAPTER_QUERYResult;

  const fandomName = typedStory?.fandom.title;

  if (!typedStory) {
    return <NotFound />;
  }

  return (
    <Box pb="2rem">
      <HeroSection
        title={typedStory.title}
        subtitle={`Read this story from the ${fandomName} fandom!`}
      />
      <Stack px="2rem">
        {typedStory.image && (
          <ImageContainer
            image={typedStory.image}
            title={typedStory.title}
            padding="2rem"
          />
        )}
        <StoryInfo story={typedStory} />
      </Stack>
    </Box>
  );
};

export default StoryPage;
