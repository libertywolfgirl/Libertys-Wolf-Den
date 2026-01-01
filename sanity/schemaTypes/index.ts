import { type SchemaTypeDefinition } from "sanity";
import { chapterType } from "./chapterType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [chapterType],
};
