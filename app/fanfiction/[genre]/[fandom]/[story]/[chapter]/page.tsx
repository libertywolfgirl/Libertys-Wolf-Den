import { Box, Stack } from "@mantine/core";
import { sanityFetch } from "../../../../../../sanity/lib/live";
import { CHAPTER_PAGE_QUERY } from "../../../../../../sanity/lib/queries";
import { CHAPTER_PAGE_QUERYResult } from "../../../../../../sanity/types";
import NotFound from "../../../../../not-found";
import HeroSection from "../../../../../_components/HeroSection";
import ChapterPagination from "../../../../../_components/ChapterPagination";

const ChapterPage = async ({
  params,
}: {
  params: Promise<{ story: string; chapter: string }>;
}) => {
  const { story, chapter } = await params;

  const { data: chapters } = await sanityFetch({
    query: CHAPTER_PAGE_QUERY,
    params: { storySlug: story, chapterSlug: chapter },
  });

  const typedChapter = chapters as CHAPTER_PAGE_QUERYResult;

  if (!typedChapter) return <NotFound />;

  const storyTitle = typedChapter.story?.title || "";
  const prevSlug = typedChapter.prev?.slug.current || "";
  const nextSlug = typedChapter.next?.slug.current || "";

  return (
    <Box pb="2rem">
      <HeroSection title={storyTitle} subtitle={typedChapter.chapter_title} />
      <Stack px="2rem">
        <ChapterPagination previous={prevSlug} next={nextSlug} />
      </Stack>
    </Box>
  );
};

export default ChapterPage;
