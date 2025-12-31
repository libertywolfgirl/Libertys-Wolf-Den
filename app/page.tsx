import { Box, Text, Title } from "@mantine/core";

export default function HomePage() {
  return (
    <Box>
      <Title order={1} pb="xl">
        Welcome to the Mantine Next.js template!
      </Title>
      <Text>
        Get started by editing <code>app/page.tsx</code>
      </Text>
    </Box>
  );
}
