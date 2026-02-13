import { Box, Flex, Paper, Text, Title } from "@mantine/core";
import Image from "next/image";

const AboutSection = () => {
  return (
    <Flex
      direction={{ base: "column", xl: "row" }}
      py={{ base: "1rem", sm: "2rem", lg: "3rem" }}
      gap={{ base: "1rem", md: "2rem", xl: 0 }}
      align="center"
    >
      <Box
        pos="relative"
        w="100%"
        maw={1200}
        miw={600}
        style={{ aspectRatio: "16 / 9" }}
      >
        <Image
          src="/wolf-profile.jpg"
          alt="wolf image"
          priority
          fetchPriority="high"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "contain" }}
        />
      </Box>
      <Paper
        shadow="sm"
        radius="md"
        withBorder
        p={{ base: "0.5rem", sm: "1rem", lg: "2rem" }}
        maw={800}
      >
        <Title order={2} ta="center" pb="1rem">
          The writer...
        </Title>
        <Text>
          Liberty is a writer of various fanfiction. She works as a frontend web
          developer in New England. She has been writing fanfiction since middle
          school, and her skills and interests have only grown. Aside from
          writing, reading, and programming,s he enjoys hiking in the woods and
          mountain climbing. Her works can also be found under the name
          pedepaulie on FanFiction.net, ArchiveOfOurOwn, Wattpad, and Quotev.
        </Text>
      </Paper>
    </Flex>
  );
};

export default AboutSection;
