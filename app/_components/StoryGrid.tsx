import { Flex, SimpleGrid } from "@mantine/core";
import StoryCard from "./StoryCard";
import { Story } from "../../sanity/types";

const StoryGrid = ({ stories }: { stories: Story[] }) => {
  return (
      <Flex align="center" justify="center">
        <SimpleGrid cols={3}>
        {stories.map((story) => (
          <StoryCard key={story._id} story={story as Story} />
        ))}
        </SimpleGrid>
      </Flex>

  );
};

export default StoryGrid;
