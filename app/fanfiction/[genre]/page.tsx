import { Box, Flex, Title } from "@mantine/core";
import HeroSection from "../../_components/HeroSection";
import { sanityFetch } from "../../../sanity/lib/live";
import {
  FANDOMS_WITH_STORIES_QUERY,
  GENRE_PARAMS_QUERY,
} from "../../../sanity/lib/queries";
import NotFound from "../../not-found";
import {
  FANDOMS_WITH_STORIES_QUERYResult,
  GENRE_PARAMS_QUERYResult,
} from "../../../sanity/types";
import StoryGrid from "../../_components/StoryGrid";
import BrowseAllButton from "../../_components/BrowseAllButton";
import { staticFetch } from "../../../sanity/lib/staticFetch";

export const revalidate = 60;

export async function generateStaticParams() {
  const data = await staticFetch<GENRE_PARAMS_QUERYResult>({
    query: GENRE_PARAMS_QUERY,
  });

  return data;
}

const GenrePage = async ({
  params,
}: {
  params: Promise<{ genre: string }>;
}) => {
  const { genre } = await params;

  const { data: fandoms } = await sanityFetch({
    query: FANDOMS_WITH_STORIES_QUERY,
    params: { genreSlug: genre },
  });

  const typedFandoms = fandoms as FANDOMS_WITH_STORIES_QUERYResult;

  if (!typedFandoms || typedFandoms.length === 0) {
    return <NotFound />;
  }

  const genreName = typedFandoms[0].stories[0].genre.title;
  const lowerCasegenre = genreName.toLowerCase();
  const singularGenre = lowerCasegenre.replace(/s$/, "");

  return (
    <Box px={{ base: 0, sm: "1rem", lg: "2rem" }}>
      <HeroSection
        title={genreName}
        subtitle={`Check out my fanfiction based on ${lowerCasegenre}!`}
      />
      <Box mx="auto" my={{ base: "1rem", sm: "2rem", lg: "3rem" }}>
        <Title
          order={2}
          ta="center"
          my={{ base: "0.5rem", sm: "1rem", lg: "2rem" }}
        >
          Fandoms
        </Title>
        <Title order={6} fw={400} ta="center">
          Explore stories from all of your favorite fandoms from the{" "}
          {singularGenre} genre.
        </Title>
        {typedFandoms &&
          typedFandoms.length > 0 &&
          typedFandoms.map((fandom) => (
            <Flex
              key={fandom._id}
              direction="column"
              mt={{ base: "2rem", sm: "3rem", lg: "4rem" }}
              gap={{ base: "1rem", sm: "1.5rem", lg: "2rem" }}
              align="center"
              justify="center"
            >
              <Title order={3} ta="center">
                {fandom.title}
              </Title>
              <StoryGrid
                stories={fandom.stories}
                cols={fandom.stories.length}
              />
              <BrowseAllButton
                href={`/fanfiction/${genre}/${fandom.slug.current}`}
                title={`${fandom.title} Stories`}
              />
            </Flex>
          ))}
      </Box>
    </Box>
  );
};

export default GenrePage;
