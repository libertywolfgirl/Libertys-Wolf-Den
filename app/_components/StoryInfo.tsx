"use client";

import { Table, Text, Title } from "@mantine/core";
import { STORY_PAGE_QUERYResult } from "../../sanity/types";

const StoryInfo = ({ story }: { story: STORY_PAGE_QUERYResult }) => {
  const { title, summary, pairings, notes } = story || {};

  return (
    <Table variant="vertical" withTableBorder maw={1400} mx="auto" p="2rem">
      <Table.Tbody>
        <Table.Tr>
          <Table.Th p="1rem">
            <Title order={6}>Title</Title>
          </Table.Th>
          <Table.Td p="1rem">
            <Text>{title}</Text>
          </Table.Td>
        </Table.Tr>

        {summary && (
          <Table.Tr>
            <Table.Th p="1rem">
              <Title order={6}>Summary</Title>
            </Table.Th>
            <Table.Td p="1rem">
              <Text>{summary}</Text>
            </Table.Td>
          </Table.Tr>
        )}

        {pairings && (
          <Table.Tr>
            <Table.Th p="1rem">
              <Title order={6}>Pairings</Title>
            </Table.Th>
            <Table.Td p="1rem">
              <Text>{pairings}</Text>
            </Table.Td>
          </Table.Tr>
        )}

        {notes && (
          <Table.Tr>
            <Table.Th p="1rem">
              <Title order={6}>Notes</Title>
            </Table.Th>
            <Table.Td p="1rem">
              <Text>{notes}</Text>
            </Table.Td>
          </Table.Tr>
        )}
      </Table.Tbody>
    </Table>
  );
};

export default StoryInfo;
