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

  if (!typedStories || typedStories.length === 0) {
    return <NotFound />;
  }

  const { title, image, summary } = typedStories[0];

  const fandomName = typedStories[0]?.fandom.title;
  const fandomImage = typedStories[0]?.fandom.image;
  const fandomSummary = typedStories[0]?.fandom.summary;

  const numCols = typedStories.length < 5 ? typedStories.length : 5;

  return (
    <Box>
      <HeroSection
        title={title}
        subtitle={`Browse all of my ${title} fanfiction!`}
      />
      <Box
        mx="auto"
        my={{ base: "1rem", sm: "2rem", lg: "3rem" }}
        px={{ base: "0.5rem", sm: "1rem", lg: "2rem" }}
      >
        {image && <ImageContainer image={image} title={title} padding="1rem" />}
        {summary && (
          <Text
            py={{ base: "1rem", sm: "1.5rem", lg: "2rem" }}
            maw={1500}
            mx="auto"
          >
            {summary}
          </Text>
        )}
        <Title
          order={2}
          ta="center"
          my={{ base: "1rem", sm: "1.5rem", lg: "2rem" }}
        >
          Stories
        </Title>
        <StoryGrid stories={typedStories} cols={numCols} />
      </Box>
    </Box>
  );
};

export default FandomPage;
