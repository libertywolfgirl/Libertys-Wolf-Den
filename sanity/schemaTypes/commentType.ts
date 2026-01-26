import { defineField, defineType } from "sanity";

export const commentType = defineType({
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      readOnly: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "text",
      type: "text",
      readOnly: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "chapter",
      type: "reference",
      to: [{ type: "chapter" }],
      validation: (rule) => rule.required(),
    }),
  ],
});
