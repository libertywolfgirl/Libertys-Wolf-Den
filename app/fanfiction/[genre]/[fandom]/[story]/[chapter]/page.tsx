import { sanityFetch } from "../../../../../../sanity/lib/live";
import { CHAPTER_PAGE_QUERY } from "../../../../../../sanity/lib/queries";

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

  return (
    <div>
      <h1>Chapter</h1>
    </div>
  );
};

export default ChapterPage;
