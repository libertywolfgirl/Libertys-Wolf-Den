import { Flex, Loader } from "@mantine/core";

export default function Loading() {
  return (
    <Flex align="center" justify="center" style={{ minHeight: "80vh" }}>
      <Loader size="xl" />
    </Flex>
  );
}
