import { Box, Group, Paper, Text, Title } from "@mantine/core";
import HeroSection from "../_components/HeroSection";
import Image from "next/image";

const AboutPage = () => {
  return (
    <Box>
      <HeroSection title="About the Author" subtitle="Liberty aka pedepaulie" />
      <Group p="4rem" gap="6rem" align="center" justify="center">
        <Image
          src="/wolf-profile.jpg"
          alt="wolf image"
          height={1280}
          width={1280}
          style={{ maxWidth: 700, width: "100%", height: "auto" }}
        />
        <Paper shadow="sm" radius="md" withBorder p="2rem" maw={800}>
          <Title order={2} ta="center" pb="1rem">
            The writer...
          </Title>
          <Text>
            Liberty is a writer of various fanfiction. She works as a frontend
            web developer in New England. She has been writing fanfiction since
            middle school, and her skills and interests have only grown. Aside
            from writing, reading, and programming,s he enjoys hiking in the
            woods and mountain climbing. Her works can also be found under the
            name pedepaulie on FanFiction.net, ArchiveOfOurOwn, Wattpad, and
            Quotev.
          </Text>
        </Paper>
      </Group>
    </Box>
  );
};

export default AboutPage;
