import { Box, Stack } from "@mantine/core";
import { sanityFetch } from "../../../../../../sanity/lib/live";
import {
  CHAPTER_PAGE_QUERY,
  CHAPTER_PARAMS_QUERY,
} from "../../../../../../sanity/lib/queries";
import {
  CHAPTER_PAGE_QUERYResult,
  CHAPTER_PARAMS_QUERYResult,
} from "../../../../../../sanity/types";
import NotFound from "../../../../../not-found";
import HeroSection from "../../../../../_components/HeroSection";
import ChapterPagination from "../../../../../_components/ChapterPagination";
import { PortableText } from "@portabletext/react";
import classes from "./page.module.css";
import { staticFetch } from "../../../../../../sanity/lib/staticFetch";

export const revalidate = 60;

export async function generateStaticParams() {
  const data = await staticFetch<CHAPTER_PARAMS_QUERYResult>({
    query: CHAPTER_PARAMS_QUERY,
  });

  return data;
}

const ChapterPage = async (props: {
  params: Promise<{ story: string; chapter: string }>;
}) => {
  const params = await props.params;
  const { story, chapter } = params;

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
    <Box pb="1rem">
      <HeroSection title={storyTitle} subtitle={typedChapter.chapter_title} />
      <Stack
        className={classes.bodyContent}
        p={{ base: "1rem", sm: "1.5rem", lg: "2rem" }}
      >
        <PortableText value={typedChapter.body} />
        <ChapterPagination previous={prevSlug} next={nextSlug} />
      </Stack>
    </Box>
  );
};

export default ChapterPage;
