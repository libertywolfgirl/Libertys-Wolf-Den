import { Button, Title } from "@mantine/core";
import Link from "next/link";

const BrowseAllButton = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Button color="teal.9" radius="xl" size="lg">
        <Title order={6} c="white">
          Browse All {title}
        </Title>
      </Button>
    </Link>
  );
};

export default BrowseAllButton;
