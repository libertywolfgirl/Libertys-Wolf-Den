import { Stack, Text, Title } from "@mantine/core";
import { sanityFetch } from "../../sanity/lib/live";
import {
  COMPLETED_STORIES_QUERY,
  SEARCH_QUERY,
} from "../../sanity/lib/queries";
import { SEARCH_QUERYResult } from "../../sanity/types";
import StoryGrid from "./StoryGrid";

const SearchResults = async ({
  query,
  completed,
}: {
  query: string;
  completed: boolean;
}) => {
  const fetchQuery = !query
    ? { query: COMPLETED_STORIES_QUERY }
    : {
        query: SEARCH_QUERY,
        params: { queryString: query },
      };

  const { data: searchResults } = await sanityFetch(fetchQuery);
  const typedSearchResults = searchResults as SEARCH_QUERYResult;
  const filteredSearchResults = completed
    ? typedSearchResults.filter((result) => result.completed)
    : typedSearchResults;

  const numCols =
    filteredSearchResults.length < 5 ? filteredSearchResults.length : 5;

  if (!filteredSearchResults || filteredSearchResults.length === 0) {
    return (
      <Text ta="center" pt="1rem">
        No search results found
      </Text>
    );
  }

  return (
    <Stack
      align="center"
      justify="center"
      py={{ base: "1rem", sm: "2rem", lg: "3rem" }}
    >
      <Title order={2} py="xl">
        Search Results...
      </Title>
      <StoryGrid stories={filteredSearchResults} cols={numCols} heading={3} />
    </Stack>
  );
};

export default SearchResults;
