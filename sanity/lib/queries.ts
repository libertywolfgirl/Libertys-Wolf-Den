import { defineQuery } from "next-sanity";

// Fetch genres and three stories for each genre
export const GENRES_WITH_STORIES_QUERY = defineQuery(`
  *[_type == "genre"]{
    _id,
    slug,
    title,
    "stories": *[
      _type == "story" &&
      genre._ref == ^._id
    ][0...3]{
      _id,
      title,
      slug,
      summary,
      image,
      "genre": genre->{
        title,
        slug
      },
      "fandom": fandom->{
        title,
        slug
      }
    }
  }
`);

// Fetch fandoms and three stories for each fandom
export const FANDOMS_WITH_STORIES_QUERY = defineQuery(`
  *[_type == "fandom" && genre->slug.current == $genreSlug]{
    _id,
    slug,
    title,
    "stories": *[
      _type == "story" &&
      fandom._ref == ^._id
    ][0...3]{
      _id,
      title,
      slug,
      summary,
      image,
      "genre": genre->{
        title,
        slug
      },
      "fandom": fandom->{
        title,
        slug
      }
    }
  }
`);

// Fetch all stories for a fandom
export const STORIES_FOR_FANDOM_QUERY = defineQuery(`
  *[_type == "story" && fandom->slug.current == $fandomSlug]{
    _id,
    title,
    slug,
    summary,
    image,
    "genre": genre->{
      title,
      slug
    },
    "fandom": fandom->{
      title,
      slug
    }
  }
`);

// Fetch stories that are flagged as featured
export const FEATURED_STORIES_QUERY =
  defineQuery(`*[_type == "story" && featured == true]{
    _id,
    title,
    slug,
    summary,
    image,
    "genre": genre->{
      title,
      slug
    },
    "fandom": fandom->{
      title,
      slug
    }
  }
`);

// Fetch one story by its slug
export const STORY_QUERY =
  defineQuery(`*[_type == "story" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    summary,
    image,
    "genre": genre->{
      title,
      slug
    },
    "fandom": fandom->{
      title,
      slug
    }
  }
`);

// Fetch one story by its slug and then fetch its chapter where the chapter number is 0
export const STORY_WITH_FIRST_CHAPTER_QUERY =
  defineQuery(`*[_type == "story" && story->slug.current == $storySlug][0]{
    _id,
    title,
    slug,
    summary,
    image,
    "firstChapter": *[_type == "chapter" && story_title == ^.title && chapter_number == 0][0]{
      _id,
      chapter_title,
      slug,
      chapter_number,
      body
  }
}`);

// Fetch all chapters for a story
export const CHAPTERS_FOR_STORY_QUERY =
  defineQuery(`*[_type == "chapter" && story_title == $title]{
  _id, chapter_title, slug, chapter_number, body
}`);

// Fetch one chapter by its slug
export const CHAPTER_BY_SLUG_QUERY =
  defineQuery(`*[_type == "chapter" && slug.current == $slug][0]{
  _id, chapter_title, slug, chapter_number, body
}`);

// Fetch one chapter by its chapter number and story title
export const CHAPTER_BY_NUMBER_QUERY =
  defineQuery(`*[_type == "chapter" && chapter_number == $chapterNumber && story_title == $storyTitle][0]{
  _id, chapter_title, slug, chapter_number, body
}`);
