import { Box, Button, Group, Stack, Title } from "@mantine/core";
import { sanityFetch } from "../../../../../sanity/lib/live";
import {
  STORY_PAGE_QUERY,
  STORY_PARAMS_QUERY,
} from "../../../../../sanity/lib/queries";
import HeroSection from "../../../../_components/HeroSection";
import {
  STORY_PAGE_QUERYResult,
  STORY_PARAMS_QUERYResult,
} from "../../../../../sanity/types";
import NotFound from "../../../../not-found";
import ImageContainer from "../../../../_components/ImageContainer";
import StoryInfo from "../../../../_components/StoryInfo";
import Link from "next/link";
import ChapterDropdown from "../../../../_components/ChapterDropdown";
import { staticFetch } from "../../../../../sanity/lib/staticFetch";

export async function generateStaticParams() {
  const data = await staticFetch<STORY_PARAMS_QUERYResult>({
    query: STORY_PARAMS_QUERY,
  });

  return data;
}

const StoryPage = async ({
  params,
}: {
  params: Promise<{ story: string }>;
}) => {
  const { story } = await params;

  const { data: storyData } = await sanityFetch({
    query: STORY_PAGE_QUERY,
    params: { storySlug: story },
  });

  const typedStory = storyData as STORY_PAGE_QUERYResult;

  if (!typedStory) return <NotFound />;

  const { title, fandom, image, firstChapter, chapters } = typedStory;

  return (
    <Box pb={{ base: "1rem", sm: "2rem", lg: "3rem" }}>
      <HeroSection
        title={title}
        subtitle={`Read this story from the ${fandom.title} fandom!`}
      />
      <Stack px={{ base: "0.5rem", sm: "1rem", lg: "2rem" }} gap={0}>
        {image && (
          <ImageContainer image={image} title={title} padding="1.5rem" />
        )}
        <StoryInfo story={typedStory} />
        <Group justify="space-evenly">
          {firstChapter && (
            <Group pt="1rem" justify="center">
              <Title order={5}>Read the first part:</Title>
              <Link
                href={`./${story}/${firstChapter.slug.current}`}
                style={{ textDecoration: "none" }}
              >
                <Button color="teal.9" radius="xl" size="lg">
                  <Title order={6} c="white">
                    {title} - {firstChapter.chapter_title}
                  </Title>
                </Button>
              </Link>
            </Group>
          )}
          {chapters.length > 0 && (
            <ChapterDropdown storySlug={story} chapters={chapters} />
          )}
        </Group>
      </Stack>
    </Box>
  );
};

export default StoryPage;
