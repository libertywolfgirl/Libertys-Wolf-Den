import { Group, Button } from "@mantine/core";
import Link from "next/link";

const ChapterPagination = ({ previous = "", next = "" }) => {
  return (
    <Group justify={!previous ? "end" : "space-between"} pt="2rem">
      {previous && (
        <Link href={`./${previous}`} style={{ textDecoration: "none" }}>
          <Button radius="xl" size="md">
            Previous
          </Button>
        </Link>
      )}

      {next && (
        <Link href={`./${next}`} style={{ textDecoration: "none" }}>
          <Button radius="xl" size="md">
            Next
          </Button>
        </Link>
      )}
    </Group>
  );
};

export default ChapterPagination;
