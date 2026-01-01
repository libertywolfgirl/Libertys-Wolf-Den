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
      <main className="container mx-auto min-h-screen max-w-3xl p-8">
        <h1 className="text-4xl font-bold mb-8">Chapters</h1>
        <ul className="flex flex-col gap-y-4">
          {chapters.map((chapter) => (
            <li className="hover:underline" key={chapter._id}>
              <Link href={`/${chapter.slug.current}`}>
                <h2 className="text-xl font-semibold">
                  {chapter.chapter_title}
                </h2>
                <p>{new Date(chapter.publishedAt).toLocaleDateString()}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </Stack>
  );
}
