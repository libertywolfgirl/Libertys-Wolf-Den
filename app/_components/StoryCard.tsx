import { Button, Card, Group, Stack, Text, Title } from "@mantine/core";
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
    <Card h={400} shadow="sm" padding="lg" radius="md" withBorder>
      {image && (
        <Card.Section>
          <Image
            src={urlFor(image).url()}
            alt={title}
            width={300}
            height={150}
            style={{ objectFit: "cover" }}
          />
        </Card.Section>
      )}
      <Stack h="100%" justify="space-evenly">
        <Group justify="space-between" mt="md" mb="xs">
          <Link
            href={`/fanfiction/${genreSlug.slug.current}`}
            style={{ textDecoration: "none" }}
          >
            <Text size="sm" c="dimmed">
              {genre}
            </Text>
          </Link>
          <Link
            href={`/fanfiction/${genreSlug.slug.current}/${fandomSlug.slug.current}`}
            style={{ textDecoration: "none" }}
          >
            <Text size="sm" c="dimmed">
              {fandom}
            </Text>
          </Link>
        </Group>
        <Title order={4}>{title}</Title>
        {summary && (
          <Text size="sm" lineClamp={5}>
            {summary}
          </Text>
        )}
      </Stack>
      <Link
        href={`/fanfiction/${genreSlug.slug.current}/${fandomSlug.slug.current}/${slug.current}`}
        style={{ textDecoration: "none" }}
      >
        <Button color="teal.6" fullWidth mt="md" radius="md">
          Read Now
        </Button>
      </Link>
    </Card>
  );
};

export default StoryCard;
