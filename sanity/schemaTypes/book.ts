import { defineType, defineField } from "sanity";

export default defineType({
  name: "book",
  title: "Book (PDF Resource)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "summary",
      type: "text",
    }),

    defineField({
      name: "coverImage",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
        },
      ],
    }),

    defineField({
      name: "file",
      title: "PDF File",
      type: "file",
      options: {
        accept: "application/pdf",
      },
    }),

    defineField({
      name: "price",
      type: "number",
    }),

    defineField({
      name: "isFree",
      type: "boolean",
    }),

    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
  ],
});