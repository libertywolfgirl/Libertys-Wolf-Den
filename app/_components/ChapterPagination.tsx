import { Group, Text } from "@mantine/core";
import Link from "next/link";

const ChapterPagination = ({ previous = "", next = "" }) => {
  return (
    <Group justify="space-around">
      {previous && (
        <Link href={`./${previous}`} style={{ textDecoration: "none" }}>
          <Text>Previous</Text>
        </Link>
      )}

      {next && (
        <Link href={`./${next}`} style={{ textDecoration: "none" }}>
          <Text>Next</Text>
        </Link>
      )}
    </Group>
  );
};

export default ChapterPagination;
