import { Button, Card, Flex, Group, Stack, Text, Title } from "@mantine/core";
import { Story } from "../../sanity/types";
import Image from "next/image";
import { urlFor } from "../_utils/imageUrl";
import Link from "next/link";
import { sanityFetch } from "../../sanity/lib/live";
import { FANDOM_SLUG_QUERY, GENRE_SLUG_QUERY } from "../../sanity/lib/queries";

const StoryCard = async ({ story }: { story: Story }) => {
  const { title, slug, genre, fandom, image, summary } = story;

  const { data: genreSlug } = await sanityFetch({
    query: GENRE_SLUG_QUERY,
    params: { title: genre },
  });

  const { data: fandomSlug } = await sanityFetch({
    query: FANDOM_SLUG_QUERY,
    params: { title: fandom },
  });

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
            href={`/fanfiction/${genreSlug?.slug.current}`}
            style={{ textDecoration: "none" }}
          >
            <Text c="dimmed">{genre}</Text>
          </Link>
          <Link
            href={`/fanfiction/${genreSlug?.slug.current}/${fandomSlug?.slug.current}`}
            style={{ textDecoration: "none" }}
          >
            <Text c="dimmed">{fandom}</Text>
          </Link>
        </Group>
        <Title order={6}>{title}</Title>
        {summary && <Text lineClamp={6}>{summary}</Text>}
      </Stack>
      <Link
        href={`/fanfiction/${genreSlug?.slug.current}/${fandomSlug?.slug.current}/${slug.current}`}
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
