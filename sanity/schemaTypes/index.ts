import { type SchemaTypeDefinition } from "sanity";
import { chapterType } from "./chapterType";
import { genreType } from "./genreType";
import { fandomType } from "./fandomType";
import { storyType } from "./storyType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [chapterType, genreType, fandomType, storyType],
};
