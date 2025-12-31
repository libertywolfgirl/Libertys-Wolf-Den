import { Stack, Text, Title } from "@mantine/core";

export default function HomePage() {
  return (
    <Stack justify="center" align="center" pt="10rem" px="1rem" gap="5rem">
      <Title order={1} ta="center">
        Liberty's Wolf Den
      </Title>
      <Text>
        Welcome to my den of stories. Feel free to browse fanfiction of all
        types written by me. Enjoy your stay.
      </Text>
    </Stack>
  );
}
