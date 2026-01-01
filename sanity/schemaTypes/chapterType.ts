import { defineField, defineType } from "sanity";

export const chapterType = defineType({
  name: "chapter",
  title: "chapter",
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
      name: "master_title",
      type: "string",
    }),
    defineField({
      name: "genre",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "fandom",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    defineField({
      name: "publishedAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "body",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
