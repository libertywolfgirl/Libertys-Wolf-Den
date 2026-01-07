import { Group, Stack, Text, Title } from "@mantine/core";
import { STORY_WITH_FIRST_CHAPTER_QUERYResult } from "../../sanity/types";

const StoryInfo = ({
  story,
}: {
  story: STORY_WITH_FIRST_CHAPTER_QUERYResult;
}) => {
  const { title, summary, pairings, notes } = story || {};

  return (
    <Stack
      maw={1400}
      mx="auto"
      p="2rem"
      style={{
        border: "1px solid var(--mantine-color-green-9)",
        borderRadius: "8px",
      }}
    >
      <Group>
        <Title order={6}>Title:</Title>
        <Text>{title}</Text>
      </Group>
      {summary && (
        <Group>
          <Title order={6}>Summary: </Title>
          <Text maw={1200}>{summary}</Text>
        </Group>
      )}
    </Stack>
  );
};

export default StoryInfo;
