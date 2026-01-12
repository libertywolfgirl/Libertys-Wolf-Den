import { defineField, defineType } from "sanity";

export const chapterType = defineType({
  name: "chapter",
  title: "Chapter",
  type: "document",
  fields: [
    defineField({
      name: "chapter_title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "chapter_number",
      type: "number",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "story",
      title: "Story",
      type: "reference",
      to: [{ type: "story" }],
    }),
    defineField({
      name: "body",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
  ],
});
