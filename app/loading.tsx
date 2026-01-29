import { Flex, Loader } from "@mantine/core";

const Loading = () => {
  return (
    <Flex align="center" justify="center" style={{ minHeight: "80vh" }}>
      <Loader size="xl" />
    </Flex>
  );
};

export default Loading;
