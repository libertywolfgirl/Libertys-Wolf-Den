import { Button } from "@mantine/core";
import Link from "next/link";

const BrowseAllButton = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Button color="teal.7" radius="xl" size="lg">
        Browse All {title}
      </Button>
    </Link>
  );
};

export default BrowseAllButton;
