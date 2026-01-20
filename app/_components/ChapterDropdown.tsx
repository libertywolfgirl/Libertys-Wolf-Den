"use client";

import { Box, Select, Title } from "@mantine/core";
import { Slug } from "sanity";

export type ChapterOption = {
  slug: Slug;
  chapter_number: number;
  chapter_title: string;
};

const ChapterDropdown = ({
  storySlug,
  chapters,
}: {
  storySlug: string;
  chapters: ChapterOption[];
}) => {
  return (
    <Box pt="1rem">
      <Title order={5} mb="xs">
        Jump to a chapter:
      </Title>
      <Select
        data={chapters.map((c) => ({
          value: c.slug.current,
          label: `${c.chapter_number + 1}: ${c.chapter_title}`,
        }))}
        placeholder="Select chapter"
        onChange={(slug) => {
          if (!slug) return;
          window.location.href = `./${storySlug}/${slug}`;
        }}
      />
    </Box>
  );
};

export default ChapterDropdown;
