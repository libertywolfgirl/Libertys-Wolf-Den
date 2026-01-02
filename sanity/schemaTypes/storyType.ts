import { defineField, defineType } from "sanity";

export const storyType = defineType({
  name: "story",
  title: "Story",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
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
      name: "genre",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "fandom",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "summary",
      type: "text",
      rows: 5,
    }),
  ],
});
