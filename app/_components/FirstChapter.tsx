import { Button, Group, Title } from "@mantine/core";
import Link from "next/link";

type Props = {
  url: string;
  title: string;
  chapterTitle: string;
};

const FirstChapter = ({ url, title, chapterTitle }: Props) => {
  return (
    <Group pt="1rem" justify="center">
      <Title order={5}>Read the first part:</Title>
      <Link href={url} style={{ textDecoration: "none" }}>
        <Button radius="xl" size="lg">
          <Title order={6} c="white">
            {title} - {chapterTitle}
          </Title>
        </Button>
      </Link>
    </Group>
  );
};

export default FirstChapter;
