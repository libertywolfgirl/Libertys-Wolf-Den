import { Stack, Text, Title } from "@mantine/core";
import { sanityFetch } from "../../sanity/lib/live";
import { SEARCH_QUERY } from "../../sanity/lib/queries";
import { SEARCH_QUERYResult } from "../../sanity/types";
import StoryGrid from "./StoryGrid";

const SearchResults = async ({ query }: { query: string }) => {
  const { data: searchResults } = await sanityFetch({
    query: SEARCH_QUERY,
    params: { queryString: query },
  });

  const typedSearchResults = searchResults as SEARCH_QUERYResult;

  const numCols = typedSearchResults.length < 5 ? typedSearchResults.length : 5;

  if (!typedSearchResults || typedSearchResults.length === 0) {
    return <Text pt="1rem">No search results found</Text>;
  }

  return (
    <Stack
      align="center"
      justify="center"
      py={{ base: "1rem", sm: "2rem", lg: "3rem" }}
    >
      <Title order={2} pb="1rem">
        Search Results...
      </Title>
      <StoryGrid stories={typedSearchResults} cols={numCols} />
    </Stack>
  );
};

export default SearchResults;
