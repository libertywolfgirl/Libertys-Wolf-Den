import { Flex, SimpleGrid, TitleOrder } from "@mantine/core";
import StoryCard from "./StoryCard";
import { GENRES_WITH_STORIES_QUERYResult } from "../../sanity/types";

type StoryGridStory =
  GENRES_WITH_STORIES_QUERYResult[number]["stories"][number];

const StoryGrid = ({
  stories,
  cols,
  heading,
}: {
  stories: StoryGridStory[];
  cols: number;
  heading: TitleOrder | undefined;
}) => {
  return (
    <Flex align="center" justify="center">
      <SimpleGrid
        cols={{ base: 1, md: 2, lg: 3, xl: cols }}
        spacing={{ base: "xl", lg: "lg", xl: "xl" }}
        verticalSpacing={{ base: "lg", md: "xl" }}
      >
        {stories.map((story) => (
          <StoryCard key={story._id} story={story} heading={heading} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default StoryGrid;
