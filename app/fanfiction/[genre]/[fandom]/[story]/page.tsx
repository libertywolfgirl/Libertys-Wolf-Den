import { Box, Button, Flex, Group, Text, Title } from "@mantine/core";
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
import { removeDashesAndCapitalize } from "../../../../_utils/removeDashesAndCapitalize";
import AllFanfictionSection from "../../../../_components/AllFanfictionSection";

type Props = {
  params: Promise<{
    story: string;
  }>;
};

export const generateMetadata = async (props: Props) => {
  const params = await props.params;
  const { story } = params;
  const title = removeDashesAndCapitalize(story);

  return { title: `${title}` };
};

export const generateStaticParams = async () => {
  const data = await staticFetch<STORY_PARAMS_QUERYResult>({
    query: STORY_PARAMS_QUERY,
  });

  return data;
};

const StoryPage = async (props: Props) => {
  const params = await props.params;
  const { story } = params;

  const { data: storyData } = await sanityFetch({
    query: STORY_PAGE_QUERY,
    params: { storySlug: story },
  });

  const typedStory = storyData as STORY_PAGE_QUERYResult;

  if (!typedStory) return <NotFound />;

  const { title, fandom, image, firstChapter, chapters } = typedStory;

  return (
    <Box>
      <HeroSection
        title={title}
        subtitle={`Read this story from the ${fandom.title} fandom!`}
      />
      <Box
        mx="auto"
        my={{ base: "1rem", sm: "2rem", lg: "3rem" }}
        px={{ base: "0.5rem", sm: "1rem", lg: "2rem" }}
      >
        {image && (
          <ImageContainer image={image} title={title} padding="1.5rem" />
        )}
        <StoryInfo story={typedStory} />
        <Group justify="space-evenly">
          {firstChapter ? (
            <Group pt="1rem" justify="center">
              <Title order={5}>Read the first part:</Title>
              <Link
                href={`./${story}/${firstChapter.slug.current}`}
                style={{ textDecoration: "none" }}
              >
                <Button radius="xl" size="lg">
                  <Title order={6} c="white">
                    {title} - {firstChapter.chapter_title}
                  </Title>
                </Button>
              </Link>
            </Group>
          ) : (
            <Text ta="center" pt="1rem">
              First Chapter Coming Soon...
            </Text>
          )}
          {chapters.length > 0 && (
            <ChapterDropdown storySlug={story} chapters={chapters} />
          )}
        </Group>
      </Box>
      <Flex justify="center" mb={{ base: "0.5rem", md: "1rem" }}>
        <AllFanfictionSection />
      </Flex>
    </Box>
  );
};

export default StoryPage;
