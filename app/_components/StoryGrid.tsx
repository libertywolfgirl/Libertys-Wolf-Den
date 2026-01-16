import { Flex, SimpleGrid } from "@mantine/core";
import StoryCard from "./StoryCard";
import { GENRES_WITH_STORIES_QUERYResult, Story } from "../../sanity/types";

type StoryGridStory =
  GENRES_WITH_STORIES_QUERYResult[number]["stories"][number];

const StoryGrid = ({
  stories,
  cols,
}: {
  stories: StoryGridStory[];
  cols: number;
}) => {
  return (
    <Flex align="center" justify="center">
      <SimpleGrid
        cols={{ base: 1, md: 2, lg: 3, xl: cols }}
        spacing={{ base: "xl", lg: "lg", xl: "xl" }}
        verticalSpacing={{ base: "lg", md: "xl" }}
      >
        {stories.map((story) => (
          <StoryCard key={story._id} story={story} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default StoryGrid;
