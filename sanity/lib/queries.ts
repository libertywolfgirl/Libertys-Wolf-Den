import { defineQuery } from "next-sanity";

export const CHAPTERS_QUERY =
  defineQuery(`*[_type == "chapter" && defined(slug.current)][0...12]{
  _id, chapter_title, slug
}`);

// Fetch all genres
export const GENRES_QUERY = defineQuery(`*[_type == "genre"]{
  _id, title, slug
}`);

// Fetch all fandoms
export const FANDOMS_QUERY = defineQuery(`*[_type == "fandom"]{
  _id, title, slug
}`);

// Fetch all stories for a fandom
export const STORIES_FOR_FANDOM_QUERY =
  defineQuery(`*[_type == "story" && references($fandomId)]{
  _id, title, slug, summary
}`);

// Fetch 3 stories for each fandom
export const THREE_STORIES_FOR_FANDOM_QUERY =
  defineQuery(`*[_type == "story" && references($fandomId)][0...3]{
  _id, title, slug, summary
}`);

// Fetch 3 stories for each genre
export const THREE_STORIES_FOR_GENRE_QUERY =
  defineQuery(`*[_type == "story" && references($genreId)][0...3]{
  _id, title, slug, summary
}`);

// Fetch stories that are flagged as featured
export const FEATURED_STORIES_QUERY =
  defineQuery(`*[_type == "story" && featured == true]{
  _id, title, slug, summary
}`);

// Fetch one story by its slug
export const STORY_QUERY =
  defineQuery(`*[_type == "story" && slug.current == $slug][0]{
  _id, title, slug, summary
}`);

// Fetch first chapter of story
export const FIRST_CHAPTER_QUERY =
  defineQuery(`*[_type == "chapter" && story._ref == $storyId][0]{
  _id, chapter_title, slug, chapter_number, body
}`);

// Fetch one chapter by its slug
export const CHAPTER_QUERY =
  defineQuery(`*[_type == "chapter" && slug.current == $slug][0]{
  _id, chapter_title, slug, chapter_number, body
}`);
