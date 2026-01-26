import {
  Badge,
  Box,
  Button,
  Card,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { STORY_QUERYResult } from "../../sanity/types";
import Link from "next/link";
import ImageContainer from "./ImageContainer";

type StoryCardStory = NonNullable<STORY_QUERYResult>;

const StoryCard = ({ story }: { story: StoryCardStory }) => {
  const { title, slug, genre, fandom, completed, image, summary } = story;
  const genreTitle = genre.title.replace(/s$/, "");

  return (
    <Box pos="relative">
      {completed && (
        <Badge pos="absolute" top={-12} left={12} style={{ zIndex: 10 }}>
          Complete
        </Badge>
      )}
      <Card
        mih={{ base: 425, md: 525 }}
        maw={325}
        shadow="sm"
        radius="md"
        withBorder
      >
        {image && (
          <ImageContainer image={image} title={title} maximumHeight={200} />
        )}
        <Stack h="100%" justify="space-evenly" gap="0.5rem">
          <Group justify="space-between" mt="xs">
            <Link
              href={`/fanfiction/${genre.slug.current}`}
              style={{ textDecoration: "none" }}
            >
              <Text fw={300}>{genreTitle}</Text>
            </Link>

            <Link
              href={`/fanfiction/${genre.slug.current}/${fandom.slug.current}`}
              style={{ textDecoration: "none" }}
            >
              <Text fw={300}>{fandom.title}</Text>
            </Link>
          </Group>

          <Title order={6}>{title}</Title>
          {summary && <Text lineClamp={6}>{summary}</Text>}
        </Stack>
        <Link
          href={`/fanfiction/${genre.slug.current}/${fandom.slug.current}/${slug.current}`}
          style={{ textDecoration: "none" }}
        >
          <Button fullWidth mt="2rem" radius="md" size="md">
            Read Now
          </Button>
        </Link>
      </Card>
    </Box>
  );
};

export default StoryCard;
