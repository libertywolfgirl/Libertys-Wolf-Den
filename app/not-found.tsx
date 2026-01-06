import { Flex, Text, Title } from "@mantine/core";
import Link from "next/link";

export default function NotFound() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      mih="80vh"
      gap="4rem"
    >
      <Title order={2} fz="5rem">
        Not Found
      </Title>
      <Text fz="3rem">Could not find requested resource</Text>
      <Link href="/" style={{ textDecoration: "none" }}>
        <Text fz="2rem">Return Home</Text>
      </Link>
    </Flex>
  );
}
