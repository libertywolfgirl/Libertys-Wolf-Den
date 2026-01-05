import { Flex, SimpleGrid } from "@mantine/core";
import StoryCard from "./StoryCard";
import { Story } from "../../sanity/types";

const StoryGrid = ({ stories, cols }: { stories: Story[]; cols: number }) => {
  return (
    <Flex align="center" justify="center">
      <SimpleGrid cols={cols} spacing="xl">
        {stories.map((story) => (
          <StoryCard key={story._id} story={story as Story} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default StoryGrid;
