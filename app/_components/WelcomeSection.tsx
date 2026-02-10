import { Paper, Stack, Text } from "@mantine/core";
import { IconBook } from "@tabler/icons-react";

const WelcomeSection = () => {
  return (
    <Paper radius={10} shadow="md" p="xl" my="lg">
      <Stack align="center">
        <Text
          fz={{ base: "1.3rem", xs: "1.45rem", md: "1.6rem" }}
          maw="50rem"
          ta="center"
          fw={700}
        >
          Welcome to my den of stories. Feel free to browse fanfiction of all
          types written by me. Enjoy your stay.
        </Text>
        <IconBook size={48} />
      </Stack>
    </Paper>
  );
};

export default WelcomeSection;
