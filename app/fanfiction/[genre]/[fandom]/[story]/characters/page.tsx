import { Box } from "@mantine/core";
import { sanityFetch } from "../../../../../../sanity/lib/live";
import { CHARACTERS_QUERY } from "../../../../../../sanity/lib/queries";
import { CHARACTERS_QUERYResult } from "../../../../../../sanity/types";
import NotFound from "../../../../../not-found";

type Props = {
  params: Promise<{
    story: string;
  }>;
};

export const CharactersPage = async (props: Props) => {
  const params = await props.params;
  const { story } = params;

  const { data: characters } = await sanityFetch({
    query: CHARACTERS_QUERY,
    params: { storySlug: story },
  });

  const typedCharacters = characters as CHARACTERS_QUERYResult;

  if (!typedCharacters) return <NotFound />;

  const storyTitle = typedCharacters[0]?.story?.title || "";

  return <Box>Characters</Box>;
};

export default CharactersPage;
