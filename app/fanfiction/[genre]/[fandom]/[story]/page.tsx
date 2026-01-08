import { Box, Button, Group, Stack, Title } from "@mantine/core";
import { sanityFetch } from "../../../../../sanity/lib/live";
import { STORY_PAGE_QUERY } from "../../../../../sanity/lib/queries";
import HeroSection from "../../../../_components/HeroSection";
import { STORY_PAGE_QUERYResult } from "../../../../../sanity/types";
import NotFound from "../../../../not-found";
import ImageContainer from "../../../../_components/ImageContainer";
import StoryInfo from "../../../../_components/StoryInfo";
import Link from "next/link";
import ChapterDropdown, {
  ChapterOption,
} from "../../../../_components/ChapterDropdown";

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

  const firstChapter = typedStory.firstChapter;
  const chapters: ChapterOption[] = typedStory.chapters || [];

  return (
    <Box pb="2rem">
      <HeroSection
        title={typedStory.title}
        subtitle={`Read this story from the ${typedStory.fandom.title} fandom!`}
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
        {firstChapter && (
          <Group pt="1rem">
            <Title order={5}>Read the first part:</Title>
            <Link
              href={`./${firstChapter.slug.current}`}
              style={{ textDecoration: "none" }}
            >
              <Button color="teal.7" radius="xl" size="lg">
                {typedStory.title} - {firstChapter.chapter_title}
              </Button>
            </Link>
          </Group>
        )}
        {chapters.length > 0 && (
          <ChapterDropdown storySlug={story} chapters={chapters} />
        )}
      </Stack>
    </Box>
  );
};

export default StoryPage;
