import { Button, Card, Flex, Group, Stack, Text, Title } from "@mantine/core";
import { Story, STORY_QUERYResult } from "../../sanity/types";
import Image from "next/image";
import { urlFor } from "../_utils/imageUrl";
import Link from "next/link";

type StoryCardStory = NonNullable<STORY_QUERYResult>;

const StoryCard = ({ story }: { story: StoryCardStory }) => {
  const { title, slug, genre, fandom, image, summary } = story;

  return (
    <Card mih={500} maw={300} shadow="sm" radius="md" withBorder>
      {image && (
        <Flex align="center" justify="center">
          <Image
            src={urlFor(image).url()}
            alt={title}
            width={300}
            height={600}
            style={{ width: "auto", height: "100%", maxHeight: 200 }}
          />
        </Flex>
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
  );
};

export default StoryCard;
