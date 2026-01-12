import { Group } from "@mantine/core";
import Link from "next/link";

const ChapterPagination = ({ previous = "", next = "" }) => {
  return (
    <Group justify="space-around" pt="2rem">
      {previous && (
        <Link href={`./${previous}`} style={{ textDecoration: "none" }}>
          Previous
        </Link>
      )}

      {next && (
        <Link href={`./${next}`} style={{ textDecoration: "none" }}>
          Next
        </Link>
      )}
    </Group>
  );
};

export default ChapterPagination;
