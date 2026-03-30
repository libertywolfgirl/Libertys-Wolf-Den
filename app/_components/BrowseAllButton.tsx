import { Button, Text } from "@mantine/core";
import Link from "next/link";
import classes from "./BrowseAll.module.css";

const BrowseAllButton = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Button radius="xl" size="lg">
        <Text className={classes.heading}>Browse All {title}</Text>
      </Button>
    </Link>
  );
};

export default BrowseAllButton;
