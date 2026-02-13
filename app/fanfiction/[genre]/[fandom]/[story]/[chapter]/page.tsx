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
import { PortableText } from "@portabletext/react";
import classes from "./page.module.css";
import { staticFetch } from "../../../../../../sanity/lib/staticFetch";
import { removeDashesAndCapitalize } from "../../../../../_utils/removeDashesAndCapitalize";
import dynamic from "next/dynamic";

const ChapterPagination = dynamic(
  () => import("../../../../../_components/ChapterPagination"),
  {
    loading: () => <p>Loading...</p>,
  },
);
const Comments = dynamic(() => import("../../../../../_components/Comments"), {
  loading: () => <p>Loading...</p>,
});
const CommentForm = dynamic(
  () => import("../../../../../_components/CommentForm"),
  {
    loading: () => <p>Loading...</p>,
  },
);

type Props = {
  params: Promise<{
    story: string;
    chapter: string;
  }>;
};

export const revalidate = 60;

export const generateMetadata = async (props: Props) => {
  const params = await props.params;
  const { chapter } = params;
  const title = removeDashesAndCapitalize(chapter);

  return { title: `${title}` };
};

export const generateStaticParams = async () => {
  const data = await staticFetch<CHAPTER_PARAMS_QUERYResult>({
    query: CHAPTER_PARAMS_QUERY,
  });

  return data;
};

const ChapterPage = async (props: Props) => {
  const params = await props.params;
  const { story, chapter } = params;

  const { data: chapters } = await sanityFetch({
    query: CHAPTER_PAGE_QUERY,
    params: { storySlug: story, chapterSlug: chapter },
  });

  const typedChapter = chapters as CHAPTER_PAGE_QUERYResult;

  if (!typedChapter) return <NotFound />;

  const {
    chapter_title: chapterTitle,
    body,
    comments,
    _id: id,
  } = typedChapter || {};
  const storyTitle = typedChapter.story?.title || "";
  const completed = typedChapter.story?.completed || false;
  const prevSlug = typedChapter.prev?.slug.current || "";
  const nextSlug = typedChapter.next?.slug.current || "";

  return (
    <Box pb="1rem">
      <HeroSection title={storyTitle} subtitle={chapterTitle} />
      <Stack p={{ base: "1rem", sm: "1.5rem", lg: "2rem" }}>
        <Box
          className={classes.bodyContent}
          component="article"
          style={{
            contentVisibility: "auto",
            containIntrinsicSize: "1px 800px",
          }}
        >
          <PortableText value={body} />
        </Box>
        <ChapterPagination
          previous={prevSlug}
          next={nextSlug}
          completed={completed}
        />
        <Box
          style={{
            contentVisibility: "auto",
            containIntrinsicSize: "1px 600px",
          }}
        >
          <Comments comments={comments} />
          <CommentForm id={id} />
        </Box>
      </Stack>
    </Box>
  );
};

export default ChapterPage;
