import { Stack, Title, Text } from "@mantine/core";

const GenrePage = () => {
  return (
    <Stack justify="center" align="center" pt="10rem" px="1rem" gap="5rem">
      <Title order={1} ta="center">
        Genre
      </Title>
      <Text>
        Explore stories from various genres. Choose a genre to dive into.
      </Text>
      {/* 
        Show list of fandoms with three fanfic cards for each fandom 
          1. Fetch all fandoms for the genre.
          2. For each fandom, fetch three stories.
          3. Fetch first chapter of each story.
      */}
    </Stack>
  );
};

export default GenrePage;
