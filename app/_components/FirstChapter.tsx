import { Button, Group, Title } from "@mantine/core";
import Link from "next/link";
import classes from "./FirstChapter.module.css";

type Props = {
  url: string;
  title: string;
  chapterTitle: string;
};

const FirstChapter = ({ url, title, chapterTitle }: Props) => {
  return (
    <Group pt="1rem" justify="center">
      <Title order={4} className={classes.heading}>
        Read the first part:
      </Title>
      <Link href={url} style={{ textDecoration: "none" }}>
        <Button radius="xl" size="lg">
          <Title order={5} className={classes.subtitle}>
            {title} - {chapterTitle}
          </Title>
        </Button>
      </Link>
    </Group>
  );
};

export default FirstChapter;
