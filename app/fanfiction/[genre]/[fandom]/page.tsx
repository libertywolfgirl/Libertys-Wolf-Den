import { Box, Text, Title } from "@mantine/core";
import { sanityFetch } from "../../../../sanity/lib/live";
import {
  FANDOM_PARAMS_QUERY,
  STORIES_FOR_FANDOM_QUERY,
} from "../../../../sanity/lib/queries";
import {
  FANDOM_PARAMS_QUERYResult,
  STORIES_FOR_FANDOM_QUERYResult,
} from "../../../../sanity/types";
import NotFound from "../../../not-found";
import HeroSection from "../../../_components/HeroSection";
import StoryGrid from "../../../_components/StoryGrid";
import { staticFetch } from "../../../../sanity/lib/staticFetch";
import ImageContainer from "../../../_components/ImageContainer";

export const revalidate = 60;

export async function generateStaticParams() {
  const data = await staticFetch<FANDOM_PARAMS_QUERYResult>({
    query: FANDOM_PARAMS_QUERY,
  });

  return data;
}

const FandomPage = async ({
  params,
}: {
  params: Promise<{ fandom: string }>;
}) => {
  const { fandom } = await params;

  const { data: stories } = await sanityFetch({
    query: STORIES_FOR_FANDOM_QUERY,
    params: { fandomSlug: fandom },
  });

  const typedStories = stories as STORIES_FOR_FANDOM_QUERYResult;

  const fandomName = typedStories[0]?.fandom.title;
  const fandomImage = typedStories[0]?.fandom.image;
  const fandomSummary = typedStories[0]?.fandom.summary;

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
      <Box mx="auto" my="3rem">
        {fandomImage && (
          <ImageContainer
            image={fandomImage}
            title={fandomName}
            padding="1rem"
          />
        )}
        {fandomSummary && (
          <Text py="2rem" maw={1500} mx="auto">
            {fandomSummary}
          </Text>
        )}
        <Title order={2} ta="center" my="2rem">
          Stories
        </Title>
        <StoryGrid stories={typedStories} cols={numCols} />
      </Box>
    </Box>
  );
};

export default FandomPage;
