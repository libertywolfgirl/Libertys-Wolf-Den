import { defineQuery } from "next-sanity";

// Fetch all genres
export const GENRES_QUERY = defineQuery(`*[_type == "genre"]{
  _id, title, slug
}`);

// Fetch genre slug based on title
export const GENRE_SLUG_QUERY =
  defineQuery(`*[_type == "genre" && title == $title][0]{
  slug
}`);

// Fetch all fandoms for a genre
export const FANDOMS_QUERY =
  defineQuery(`*[_type == "fandom" && genre == $genre]{
  _id, title, slug
}`);

// Fetch fandom slug from title
export const FANDOM_SLUG_QUERY =
  defineQuery(`*[_type == "fandom" && title == $title][0]{
  slug
}`);

// Fetch all stories for a fandom
export const STORIES_FOR_FANDOM_QUERY =
  defineQuery(`*[_type == "story" && fandom == $fandom]{
  _id, title, slug, summary
}`);

// Fetch 3 stories for a fandom
export const THREE_STORIES_FOR_FANDOM_QUERY =
  defineQuery(`*[_type == "story" && fandom == $fandom][0...3]{
  _id, title, slug, summary
}`);

// Fetch 3 stories for a genre
export const THREE_STORIES_FOR_GENRE_QUERY =
  defineQuery(`*[_type == "story" && genre == $genre][0...3]{
  _id, title, slug, summary
}`);

// Fetch stories that are flagged as featured
export const FEATURED_STORIES_QUERY =
  defineQuery(`*[_type == "story" && featured == true]{
  _id, title, slug, summary, genre, fandom, image
}`);

// Fetch one story by its slug
export const STORY_QUERY =
  defineQuery(`*[_type == "story" && slug.current == $slug][0]{
  _id, title, slug, summary, image
}`);

// Fetch all chapters for a story
export const CHAPTERS_FOR_STORY_QUERY =
  defineQuery(`*[_type == "chapter" && story_title == $title]{
  _id, chapter_title, slug, chapter_number, body
}`);

// Fetch first chapter of story
export const FIRST_CHAPTER_QUERY =
  defineQuery(`*[_type == "chapter" && story_title == $title][0]{
  _id, chapter_title, slug, chapter_number, body
}`);
