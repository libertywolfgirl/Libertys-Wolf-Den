import { defineQuery } from "next-sanity";

export const CHAPTERS_QUERY =
  defineQuery(`*[_type == "chapter" && defined(slug.current)][0...12]{
  _id, chapter_title, slug, publishedAt
}`);

export const CHAPTER_QUERY =
  defineQuery(`*[_type == "chapter" && slug.current == $slug][0]{
  chapter_title, body, mainImage
}`);
