import { Paper, Stack, Text } from "@mantine/core";
import BrowseAllButton from "./BrowseAllButton";

const AllFanfictionSection = () => {
  return (
    <Paper
      radius={20}
      shadow="lg"
      p={{ base: "2rem", sm: "2.5rem", lg: "3rem" }}
      my="xl"
    >
      <Stack align="center" gap="xl">
        <Text
          fz={{ base: "1.15rem", xs: "1.3rem", md: "1.45rem" }}
          ta="center"
          fw={700}
        >
          Want to view more stories?
        </Text>
        <BrowseAllButton href="/fanfiction" title="Fanfiction" />
      </Stack>
    </Paper>
  );
};

export default AllFanfictionSection;
