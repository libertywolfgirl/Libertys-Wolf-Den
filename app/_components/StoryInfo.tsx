import {
  Group,
  Table,
  TableTbody,
  TableTr,
  TableTh,
  TableTd,
  Text,
  Title,
} from "@mantine/core";

import type { STORY_PAGE_QUERYResult } from "../../sanity/types";

const StoryInfo = ({ story }: { story: STORY_PAGE_QUERYResult }) => {
  const { title, summary, pairings, notes, completed } = story ?? {};

  return (
    <Table
      variant="vertical"
      withTableBorder
      maw={1400}
      mx="auto"
      my="md"
      p="2rem"
      w="100%"
      style={{
        tableLayout: "fixed",
      }}
    >
      <TableTbody>
        <TableTr>
          <TableTh p="1rem" w={{ base: 100, md: 150, xl: 200 }}>
            <Title order={6}>Title</Title>
          </TableTh>
          <TableTd p="1rem" mih={48}>
            <Text>{title}</Text>
          </TableTd>
        </TableTr>

        <TableTr>
          <TableTh p="1rem" w={{ base: 100, md: 150, xl: 200 }}>
            <Title order={6}>Summary</Title>
          </TableTh>
          <TableTd p="1rem" mih={56}>
            <Text>{summary ?? "-"}</Text>
          </TableTd>
        </TableTr>

        <TableTr>
          <TableTh p="1rem" w={{ base: 100, md: 150, xl: 200 }}>
            <Title order={6}>Pairings</Title>
          </TableTh>
          <TableTd p="1rem" mih={40}>
            <Text>{pairings ?? "-"}</Text>
          </TableTd>
        </TableTr>

        <TableTr>
          <TableTh p="1rem" w={{ base: 100, md: 150, xl: 200 }}>
            <Title order={6}>Notes</Title>
          </TableTh>
          <TableTd p="1rem" mih={44}>
            <Group>
              <Text>{notes ?? "-"}</Text>
              <Text>{completed ? "Completed." : "In Progress."}</Text>
            </Group>
          </TableTd>
        </TableTr>
      </TableTbody>
    </Table>
  );
};

export default StoryInfo;
