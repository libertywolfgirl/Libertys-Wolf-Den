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
import { staticFetch } from "../../../../../sanity/lib/staticFetch";
import { removeDashesAndCapitalize } from "../../../../_utils/removeDashesAndCapitalize";
import AllFanfictionSection from "../../../../_components/AllFanfictionSection";
import dynamic from "next/dynamic";
import Loading from "../../../../loading";
import Link from "next/link";

const StoryInfo = dynamic(() => import("../../../../_components/StoryInfo"), {
  loading: () => <Loading />,
});
const FirstChapter = dynamic(
  () => import("../../../../_components/FirstChapter"),
  {
    loading: () => <Loading />,
  },
);
const ChapterDropdown = dynamic(
  () => import("../../../../_components/ChapterDropdown"),
  {
    loading: () => <Loading />,
  },
);

type Props = {
  params: Promise<{
    story: string;
    fandom: string;
    genre: string;
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
  const { story, fandom, genre } = params;

  const { data: storyData } = await sanityFetch({
    query: STORY_PAGE_QUERY,
    params: { storySlug: story },
  });

  const typedStory = storyData as STORY_PAGE_QUERYResult;

  if (!typedStory) return <NotFound />;

  const {
    title,
    fandom: { title: fandomTitle },
    image,
    firstChapter,
    chapters,
  } = typedStory;

  return (
    <Box>
      <HeroSection
        title={title}
        subtitle={`Read this story from the ${fandomTitle} fandom!`}
      />
      <Box
        mx="auto"
        my={{ base: "1rem", sm: "2rem", lg: "3rem" }}
        px={{ base: "0.5rem", sm: "1rem", lg: "2rem" }}
      >
        {image && (
          <ImageContainer
            image={image}
            title={title}
            padding="1.5rem"
            maxHeight={500}
            minHeight={300}
          />
        )}
        <StoryInfo story={typedStory} />
        <Group justify="space-evenly">
          {firstChapter ? (
            <FirstChapter
              url={`./${story}/${firstChapter.slug.current}`}
              title={title}
              chapterTitle={firstChapter.chapter_title}
            />
          ) : (
            <Text ta="center" pt="1rem">
              First Chapter Coming Soon...
            </Text>
          )}
          {chapters.length > 0 && (
            <ChapterDropdown storySlug={story} chapters={chapters} />
          )}
        </Group>
        <Flex
          align="Center"
          justify="center"
          mt={{ base: "3rem", sm: "4rem", lg: "5rem" }}
        >
          <Link
            href={`/fanfiction/${genre}/${fandom}/${story}/characters`}
            style={{ textDecoration: "none" }}
          >
            <Button radius="xl" size="xl">
              <Title order={6} c="white">
                Learn About the Characters
              </Title>
            </Button>
          </Link>
        </Flex>
      </Box>
      <Flex justify="center" mb={{ base: "0.5rem", md: "1rem" }}>
        <AllFanfictionSection />
      </Flex>
    </Box>
  );
};

export default StoryPage;
