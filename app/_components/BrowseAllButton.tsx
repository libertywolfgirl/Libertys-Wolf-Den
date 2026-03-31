import { Button } from "@mantine/core";
import Link from "next/link";
import classes from "./BrowseAll.module.css";

const BrowseAllButton = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Button radius="xl" size="lg" className={classes.heading}>
        Browse All {title}
      </Button>
    </Link>
  );
};

export default BrowseAllButton;
