import { Stack, Text, Title } from "@mantine/core";
import Link from "next/link";
import { CHAPTERS_QUERY } from "../sanity/lib/queries";
import { sanityFetch } from "../sanity/lib/live";

const options = { next: { revalidate: 30 } };

export default async function HomePage() {
  const { data: chapters } = await sanityFetch({
    query: CHAPTERS_QUERY,
  });

  return (
    <Stack
      justify="center"
      align="center"
      pt="6rem"
      pb="2rem"
      px="1rem"
      gap="5rem"
    >
      <Title order={1} ta="center">
        Liberty's Wolf Den
      </Title>
      <Text>
        Welcome to my den of stories. Feel free to browse fanfiction of all
        types written by me. Enjoy your stay.
      </Text>
      {/* 
        Show three features fanfic cards.
          1. Fetch stories that are flagged as featured.
          2. Fetch first chapter of each story.
       */}
    </Stack>
  );
}
