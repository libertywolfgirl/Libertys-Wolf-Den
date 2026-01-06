import { Box, Flex, Title } from "@mantine/core";
import HeroSection from "../../_components/HeroSection";
import { sanityFetch } from "../../../sanity/lib/live";
import { FANDOMS_WITH_STORIES_QUERY } from "../../../sanity/lib/queries";
import NotFound from "../../not-found";
import { FANDOMS_WITH_STORIES_QUERYResult } from "../../../sanity/types";
import StoryGrid from "../../_components/StoryGrid";
import BrowseAllButton from "../../_components/BrowseAllButton";

export const revalidate = 60;

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

  const genreName = typedFandoms[0].stories[0].genre.title;

  if (!typedFandoms || typedFandoms.length === 0) {
    return <NotFound />;
  }

  return (
    <Box>
      <HeroSection
        title={genreName}
        subtitle={`Check out my ${genreName} fanfiction!`}
      />
      <Box mx="auto" my="2rem">
        <Title order={2} ta="center" my="2rem">
          Fandoms
        </Title>
        <Title order={6} fw={400} ta="center" mb="4rem">
          Explore stories from all of your favorite fandoms from the {genreName}{" "}
          genre.
        </Title>
        {typedFandoms &&
          typedFandoms.length > 0 &&
          typedFandoms.map((fandom) => (
            <Flex
              key={fandom._id}
              direction="column"
              mb="5rem"
              gap="2rem"
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
