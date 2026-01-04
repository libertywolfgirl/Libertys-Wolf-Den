import { SimpleGrid } from "@mantine/core";
import StoryCard from "./StoryCard";
import { Story } from "../../sanity/types";

const StoryGrid = ({ stories }: { stories: Story[] }) => {
  return (
    <SimpleGrid cols={3}>
      {stories.map((story) => (
        <StoryCard key={story._id} story={story as Story} />
      ))}
    </SimpleGrid>
  );
};

export default StoryGrid;
