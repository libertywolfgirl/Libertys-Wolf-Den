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

  return (
    <Box pos="relative">
      {completed && (
        <Badge pos="absolute" top={-12} left={12} style={{ zIndex: 10 }}>
          Complete
        </Badge>
      )}
      <Card mih={500} maw={300} shadow="sm" radius="md" withBorder>
        {image && (
          <ImageContainer image={image} title={title} maximumHeight={200} />
        )}
        <Stack h="100%" justify="space-evenly" gap="0.5rem">
          <Group justify="space-between" mt="xs">
            <Link
              href={`/fanfiction/${genre.slug.current}`}
              style={{ textDecoration: "none" }}
            >
              <Text c="dimmed">{genre.title}</Text>
            </Link>

            <Link
              href={`/fanfiction/${genre.slug.current}/${fandom.slug.current}`}
              style={{ textDecoration: "none" }}
            >
              <Text c="dimmed">{fandom.title}</Text>
            </Link>
          </Group>

          <Title order={6}>{title}</Title>
          {summary && <Text lineClamp={6}>{summary}</Text>}
        </Stack>
        <Link
          href={`/fanfiction/${genre.slug.current}/${fandom.slug.current}/${slug.current}`}
          style={{ textDecoration: "none" }}
        >
          <Button color="teal.6" fullWidth mt="xs" radius="md">
            Read Now
          </Button>
        </Link>
      </Card>
    </Box>
  );
};

export default StoryCard;
